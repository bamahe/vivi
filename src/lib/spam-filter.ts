// Spam scoring for inbound leads.
//
// Two tiers, on purpose:
//   HARD BLOCK  - signatures no real customer can produce. Rejected outright.
//   SCORE       - suspicious but not proof. Only blocks when points stack up.
//
// The tiering matters: a false positive here means a paying customer's lead
// silently disappears. So anything with even a small chance of hitting a real
// person is a score, never a hard block.
//
// Built from the actual bot traffic hitting bestbayservices.com (Sept 2026):
//   Name: "Insa Sxxdj"      Phone: 2001964798  Message: "4378659753"
//   Name: "Oiegr Ojoibhqcz" Phone: 7527301084  Message: "9912217952"
// Signature: gibberish name, unassigned area code, message is a bare phone
// number. That last one is the giveaway — nobody describes a home repair
// job with ten digits and nothing else.

export interface SpamCheckInput {
  name: string;
  email: string;
  phone: string;
  message?: string;
}

export interface SpamCheckResult {
  isSpam: boolean;
  score: number;
  reasons: string[];
}

// Block when the soft score reaches this. Two independent "suspicious"
// signals (e.g. gibberish name + dead area code) is enough.
const SCORE_THRESHOLD = 3;

/**
 * Valid North American area codes (US, Canada, and US territories).
 * Used as a SCORE signal, not a hard block — new area codes get assigned
 * over time, and a real customer on a brand-new code should still get
 * through if the rest of their submission looks human.
 */
const VALID_AREA_CODES = new Set([
  // United States
  "201","202","203","205","206","207","208","209","210","212","213","214","215","216","217","218","219","220",
  "223","224","225","227","228","229","231","234","235","239","240","248","251","252","253","254","256","260",
  "262","267","269","270","272","274","276","279","281","283","301","302","303","304","305","307","308","309",
  "310","312","313","314","315","316","317","318","319","320","321","323","324","325","326","330","331","332",
  "334","336","337","339","341","346","347","350","351","352","353","360","361","363","364","369","380","385",
  "386","401","402","404","405","406","407","408","409","410","412","413","414","415","417","419","423","424",
  "425","430","432","434","435","436","440","442","443","445","447","448","458","463","464","469","470","472",
  "475","478","479","480","484","501","502","503","504","505","507","508","509","510","512","513","515","516",
  "517","518","520","530","531","534","539","540","541","551","557","559","561","562","563","564","567","570",
  "571","572","573","574","575","580","582","585","586","601","602","603","605","606","607","608","609","610",
  "612","614","615","616","617","618","619","620","623","626","628","629","630","631","636","640","641","646",
  "650","651","656","657","659","660","661","662","667","669","678","680","681","682","684","689","701","702",
  "703","704","706","707","708","712","713","714","715","716","717","718","719","720","724","725","726","727",
  "728","731","732","734","737","740","743","747","754","757","760","762","763","764","765","769","770","771",
  "772","773","774","775","779","781","785","786","787","801","802","803","804","805","806","808","809","810",
  "812","813","814","815","816","817","818","820","826","828","830","831","832","835","838","839","840","843",
  "845","847","848","850","854","856","857","858","859","860","862","863","864","865","870","872","878","901",
  "903","904","906","907","908","909","910","912","913","914","915","916","917","918","919","920","925","928",
  "929","930","931","934","936","937","938","940","941","943","945","947","949","951","952","954","956","959",
  "970","971","972","973","975","978","979","980","983","984","985","986","989",
  // Canada — snowbirds own Tampa Bay property, so these are legitimate leads
  "204","226","236","249","250","289","306","343","354","365","367","368","382","387","403","416","418","428",
  "431","437","438","439","450","468","474","506","514","519","548","579","581","584","587","600","604","613",
  "639","647","672","683","705","709","742","753","778","780","782","807","819","825","867","873","879","902","905",
]);

/** Strip everything that isn't a digit. */
function digitsOnly(value: string): string {
  return value.replace(/\D/g, "");
}

/**
 * Checks a phone number against NANP (North American Numbering Plan)
 * structural rules. These are absolute — a number breaking them cannot
 * be dialed, so failing this is safe to hard block.
 */
function hasInvalidPhoneStructure(phone: string): boolean {
  let d = digitsOnly(phone);

  // Drop a leading country code "1" (e.g. 1-813-555-0100).
  if (d.length === 11 && d.startsWith("1")) d = d.slice(1);

  // Anything that isn't 10 digits isn't a US/Canada number.
  if (d.length !== 10) return true;

  const areaCode = d.slice(0, 3);
  const exchange = d.slice(3, 6);

  // Area code and exchange must both start with 2-9. This is the rule the
  // first spam lead broke: 200-196-4798 has exchange "196".
  if (!/^[2-9]/.test(areaCode)) return true;
  if (!/^[2-9]/.test(exchange)) return true;

  // N11 codes (211, 311, 411, 511, 611, 711, 811, 911) are service codes,
  // never assigned to subscribers.
  if (/^[2-9]11$/.test(areaCode)) return true;

  // Toll-free and premium-rate numbers are never a residential service lead.
  const TOLL_FREE = ["800", "833", "844", "855", "866", "877", "888", "900", "976"];
  if (TOLL_FREE.includes(areaCode)) return true;

  // Obvious filler: all the same digit, or sequential.
  if (/^(\d)\1{9}$/.test(d)) return true;
  if (d === "1234567890" || d === "0123456789") return true;

  return false;
}

/**
 * Detects machine-generated names like "Sxxdj" or "Ojoibhqcz".
 *
 * Deliberately conservative — real surnames get weird, so we only flag:
 *   1. A word of 4+ letters containing no vowel at all ("Sxxdj")
 *   2. A run of 5+ consecutive consonants ("Ojoibhqcz" -> b,h,q,c,z)
 *
 * "y" counts as a vowel so names like Lynn and Byrd pass. The 5-consonant
 * threshold (not 4) keeps real names like Schwartz and Schmidt safe —
 * "Schw" is 4 consonants and would false-positive at a lower threshold.
 */
function looksLikeGibberish(name: string): boolean {
  const words = name
    .toLowerCase()
    .split(/[\s\-']+/)
    .filter((w) => /^[a-z]+$/.test(w) && w.length >= 4);

  if (words.length === 0) return false;

  return words.some((word) => {
    if (!/[aeiouy]/.test(word)) return true;
    if (/[^aeiouy]{5,}/.test(word)) return true;
    return false;
  });
}

/**
 * Gmail ignores dots in addresses, so spammers sprinkle them to make one
 * mailbox look like many unique people — e.g. "c.as.eyrfec.h.t@gmail.com".
 * Real people use at most one or two.
 */
function hasDotTrickEmail(email: string): boolean {
  const [local, domain] = email.toLowerCase().split("@");
  if (!local || !domain) return false;
  if (!/^(gmail|googlemail)\.com$/.test(domain)) return false;
  return (local.match(/\./g) || []).length >= 3;
}

/**
 * Main entry point. Returns whether to reject, plus the reasons for logging.
 */
export function checkSpam(input: SpamCheckInput): SpamCheckResult {
  const reasons: string[] = [];
  let score = 0;

  const name = (input.name || "").trim();
  const email = (input.email || "").trim();
  const phone = (input.phone || "").trim();
  const message = (input.message || "").trim();

  // ---- HARD BLOCKS ----------------------------------------------------

  // The strongest signal in the observed traffic: the project description
  // is nothing but digits. Both spam leads did exactly this.
  if (message.length > 0) {
    const msgDigits = digitsOnly(message);
    const hasLetters = /[a-z]/i.test(message);
    if (!hasLetters && msgDigits.length >= 7) {
      return {
        isSpam: true,
        score: 100,
        reasons: ["message is a bare number with no words"],
      };
    }
  }

  // Link drops — no legitimate quote request includes a URL.
  if (/(https?:\/\/|www\.|\[url|<a\s+href)/i.test(message)) {
    return { isSpam: true, score: 100, reasons: ["message contains a link"] };
  }

  // Structurally undialable phone number.
  if (hasInvalidPhoneStructure(phone)) {
    return {
      isSpam: true,
      score: 100,
      reasons: ["phone number is not a valid US/Canada number"],
    };
  }

  // Classic SEO/backlink spam boilerplate.
  if (/\b(seo services|backlink|crypto|casino|viagra|loan offer|bitcoin)\b/i.test(message)) {
    return { isSpam: true, score: 100, reasons: ["known spam keywords"] };
  }

  // ---- SCORED SIGNALS -------------------------------------------------

  const areaCode = (() => {
    let d = digitsOnly(phone);
    if (d.length === 11 && d.startsWith("1")) d = d.slice(1);
    return d.slice(0, 3);
  })();

  if (areaCode && !VALID_AREA_CODES.has(areaCode)) {
    score += 2;
    reasons.push(`area code ${areaCode} is not assigned`);
  }

  if (looksLikeGibberish(name)) {
    score += 2;
    reasons.push("name looks machine-generated");
  }

  if (hasDotTrickEmail(email)) {
    score += 1;
    reasons.push("gmail dot-trick address");
  }

  // A single-word name plus no message at all is weak on its own, but
  // stacks with the signals above.
  if (!name.includes(" ") && message.length === 0) {
    score += 1;
    reasons.push("no last name and no project description");
  }

  return { isSpam: score >= SCORE_THRESHOLD, score, reasons };
}
