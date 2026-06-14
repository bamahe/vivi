// ============================================
// Static Blog Posts — Fallback when Supabase
// is unavailable or returns no posts.
// These are real, quality content — not filler.
// ============================================

import type { BlogPost } from "./supabase";

/**
 * All 10 static blog posts, newest first.
 * Dates range from June 10, 2026 back to April 1, 2026.
 */
export const STATIC_BLOG_POSTS: BlogPost[] = [
  // -------------------------------------------------------
  // 1. How much rent can I charge? (June 10, 2026)
  // -------------------------------------------------------
  {
    id: "static-1",
    slug: "how-much-rent-tampa-bay-2026",
    title: "How much rent can I charge for my Tampa Bay rental in 2026?",
    excerpt:
      "Median rents in Tampa Bay range from $1,650 to $2,400 depending on city, bedroom count, and condition. Here's how to price your rental right without leaving money on the table.",
    hero_image_url: null,
    hero_image_credit: null,
    published_at: "2026-06-10T09:00:00Z",
    status: "published",
    category: "Market",
    read_time: "7 min read",
    body_mdx: `Setting the right rent price is the single biggest factor in your rental's profitability. Price too high, you sit vacant for weeks. Price too low, you leave thousands on the table every year. Neither is acceptable.

At [ViVi Property Management](/services), we run a competitive market analysis for every property we manage — and we do it free for owners who want a second opinion. Here's how we think about pricing in 2026.

## What are average rents across Tampa Bay right now?

Tampa Bay rents have stabilized after the post-pandemic spike, but they remain well above 2019 levels. As of mid-2026, here's what we're seeing:

- **Tampa:** $1,800–$2,400 for a 3BR single-family home, depending on neighborhood
- **Brandon/Valrico:** $1,750–$2,200 — strong demand from families wanting Newsome or Bloomingdale schools
- **Riverview:** $1,700–$2,100 — newer construction keeps this area competitive
- **St. Petersburg:** $1,800–$2,500 — walkability and downtown access push premiums
- **Wesley Chapel:** $1,900–$2,500 — fast-growing with newer inventory
- **Lakeland:** $1,500–$1,900 — more affordable but rising steadily
- **Bradenton:** $1,650–$2,200 — beach proximity adds value

These are broad ranges. Your specific rent depends on condition, upgrades, lot size, HOA amenities, and school zones.

## What factors move the needle on rent price?

Not every upgrade is worth it. Here are the ones that actually increase rent:

- **Updated kitchen:** Even cosmetic updates (new hardware, painted cabinets, modern backsplash) can add $100–$200/month
- **Hard-surface flooring:** Tenants prefer it, and it lasts longer than carpet. LVP is the standard now.
- **Fenced yard:** In [Hillsborough County](/areas/hillsborough-county) and [Pasco County](/areas/pasco-county), fenced yards command a premium — over 70% of renters have pets
- **Owners suite upgrades:** A double vanity, walk-in shower, or updated fixtures make a real difference
- **Smart home features:** A Nest thermostat and smart lock cost under $400 total but signal a well-maintained property
- **In-unit laundry:** Non-negotiable for single-family rentals. If you don't have it, add it.

Things that don't move the needle as much: pool (increases rent but also increases maintenance costs), exotic landscaping, high-end appliances.

## How does ViVi determine rent price?

We don't guess. Our [rental analysis](/rental-analysis) process includes:

1. **Comparable analysis:** We pull active and recently leased comparables within a 1-mile radius, adjusting for bedrooms, bathrooms, square footage, and condition.
2. **Days-on-market data:** If similar homes are renting in 5 days, your price may be too low. If they're sitting 30+ days, the market is telling you something.
3. **Seasonal adjustments:** Tampa Bay has clear rental seasons. Summer is peak demand. December and January are slowest. We factor timing into pricing strategy.
4. **Condition walk-through:** We physically inspect your property and note anything that adds or subtracts from market value.

The goal is maximum rent with minimal vacancy. A home priced $50/month too high that sits vacant for three extra weeks costs you more than pricing it right from day one.

## Should I adjust rent every year?

Yes — but strategically. Florida has no rent control, so you can raise rent at lease renewal. Here's our approach:

- **If market rents increased:** Raise to match, but stay 2-3% below market if you have a great tenant. Turnover costs $2,000–$4,000 when you factor vacancy, cleaning, make-ready, and marketing.
- **If market rents are flat:** Hold steady. Keeping a reliable tenant is worth more than a $25 increase.
- **If your rent is significantly below market:** Raise in stages over 2 renewals rather than one shock increase.

We handle all of this for our owners. You can see our full management approach on our [services page](/services) and our transparent [pricing](/pricing).

## What about Section 8 and voucher tenants?

Section 8 tenants can be excellent long-term renters. The Housing Authority inspects the property annually and pays a portion of rent directly to you — guaranteed. In [Polk County](/areas/polk-county) and parts of [Hillsborough County](/areas/hillsborough-county), voucher rents are competitive with market rates.

We screen Section 8 applicants with the same rigor as any other tenant. The voucher doesn't bypass our [screening process](/services).

## What's the bottom line?

Your Tampa Bay rental is worth what the market says it's worth — and the market is specific to your street, your condition, and your timing. Don't price based on what you need to cover your mortgage. Price based on data.

Want to know exactly what your property would rent for? [Get a free rental analysis](/rental-analysis) — no strings, no pressure. We'll pull the comps and give you a straight answer.

## Frequently Asked Questions

### How often should I check my rental's market value?

At minimum, every 12 months before lease renewal. Market conditions shift, and you want to make sure your rent reflects current demand. We do this automatically for every property we manage.

### Can I charge more rent if I allow pets?

Yes. Pet-friendly rentals in Tampa Bay typically command $25–$50/month more in rent, plus a pet deposit. Since over 70% of renters have pets, restricting them shrinks your applicant pool significantly.

### What happens if I price my rental too high?

Extended vacancy. Every week your property sits empty costs you roughly 25% of one month's rent. A home priced $100 too high that sits vacant for 3 extra weeks loses you more than it gains over a 12-month lease.

---

*Barrett Henry is the property manager behind ViVi Property Management, serving five Tampa Bay counties with 23+ years of real estate experience.*`,
  },

  // -------------------------------------------------------
  // 2. Self-manage or hire a PM? (June 3, 2026)
  // -------------------------------------------------------
  {
    id: "static-2",
    slug: "self-manage-or-hire-property-manager",
    title: "Self-manage or hire a property manager? An honest breakdown",
    excerpt:
      "Property management fees eat into profit — but so does a 2 AM water heater call, a missed lease violation, and a costly eviction. Here's how to decide what's right for you.",
    hero_image_url: null,
    hero_image_credit: null,
    published_at: "2026-06-03T09:00:00Z",
    status: "published",
    category: "Management",
    read_time: "8 min read",
    body_mdx: `I'm a property manager, so you'd expect me to say "hire one." But the honest answer is: it depends on your situation. Some owners should self-manage. Most shouldn't — and here's how to figure out which camp you're in.

## What does self-managing actually involve?

If you've never managed a rental, here's the real list — not the highlight reel:

- **Marketing the property:** Professional photos, writing descriptions, posting to Zillow/Trulia/MLS, responding to inquiries, scheduling showings (often 10–20 per listing)
- **Screening tenants:** Running credit, criminal background, employment verification, rental history, and making sure you're following [Fair Housing law](https://www.hud.gov/program_offices/fair_housing_equal_opp) the entire time
- **Drafting a lease:** Florida-specific, legally compliant, covering everything from security deposits to pet policies to HOA requirements
- **Collecting rent:** Chasing late payments, sending 3-day notices, knowing when a payment plan makes sense vs. when to start eviction proceedings
- **Handling maintenance:** Finding reliable vendors, getting competitive quotes, managing emergency repairs at all hours, and keeping receipts for taxes
- **Legal compliance:** Florida Statute 83 governs residential landlords. Mistakes with security deposit handling, notice periods, or eviction procedures can cost you the case.
- **Bookkeeping:** Tracking income and expenses, issuing 1099s, preparing year-end financials for your CPA

That's not a weekend side gig. That's a part-time job.

## When does self-managing make sense?

You might be fine on your own if:

- You own one property close to where you live (within 20 minutes)
- You're handy enough to handle minor repairs yourself
- You have experience with Florida landlord-tenant law
- You don't mind middle-of-the-night calls
- Your tenant is someone you know and trust
- You genuinely enjoy the work

If three or more of those don't apply, keep reading.

## What does a property manager actually cost?

Let's use real numbers. Most Tampa Bay property managers charge between 8% and 12% of monthly rent collected. At [ViVi](/pricing), our fee structure is transparent:

- **Management fee:** 8–12% of rent collected (no rent collected = no fee)
- **Leasing fee:** One month's rent for tenant placement
- **Renewal fee:** $300 per lease renewal
- **Setup fee:** $500 one-time per property

On a $2,000/month rental at 10%, that's $200/month in management fees. Sounds like a lot until you do the math on what self-managing costs you in time, mistakes, and vacancy.

## What's the real cost of managing yourself?

Here's what most self-managers don't account for:

- **Vacancy:** The average self-managed property takes 30+ days to fill. We [lease most homes in under 14 days](/blog/how-we-lease-home-under-14-days). That's 2+ weeks of lost rent — $1,000+ on a $2,000/month property.
- **Bad tenants:** Without professional screening, you're more likely to end up with a tenant who pays late, damages the property, or requires eviction. One eviction costs $3,000–$7,000 all-in.
- **Maintenance markup:** Without vendor relationships, you'll pay retail on every repair. Our maintenance partner, Best Bay Services, handles repairs at cost — no third-party markup.
- **Legal mistakes:** Improper security deposit handling alone can cost you the deposit amount plus attorney fees. Florida law is specific and unforgiving.
- **Your time:** What's your time worth? If you spend 10 hours/month on a $2,000 rental and your professional hourly rate is $50, that's $500/month — more than the management fee.

## How do you choose the right property manager?

If you decide to hire one, don't just pick the cheapest option. Here's what to look for:

- **Local expertise:** They should know your [specific market area](/areas). Tampa Bay is not one market — Riverview is different from St. Pete is different from Wesley Chapel.
- **Transparent fees:** No hidden charges. You should know exactly what you'll pay before signing. [Compare our pricing](/pricing) to anyone in the market.
- **In-house maintenance:** This is rare but valuable. Our partnership with Best Bay Services means faster repairs at lower cost.
- **Communication:** You should be able to reach your property manager. We provide a dedicated manager for every property, not a call center.
- **Guarantees:** We offer real [guarantees](/guarantees) — not marketing fluff. If we place a bad tenant, we replace them at our cost.

## What about managing from out of state?

If you live outside Tampa Bay, self-managing is almost always a mistake. You can't do showings, you can't inspect the property, and you can't handle emergencies. The management fee is a cost of doing business for out-of-state investors — and it's tax-deductible.

We manage properties for owners across the country. Your owner portal gives you real-time access to financials, maintenance tickets, and lease documents. [Learn more about our services](/services).

## Frequently Asked Questions

### Can I switch from self-managing to hiring a property manager mid-lease?

Yes. We can take over management of an occupied property. We'll review the existing lease, meet the tenant, do a property inspection, and handle everything from there. No disruption to your tenant.

### Are property management fees tax-deductible?

Yes. Management fees, leasing fees, and all maintenance costs coordinated through your property manager are deductible rental expenses. Consult your CPA for specifics.

### What if I'm not happy with my current property manager?

Management agreements typically have a 30-day cancellation clause. If you're unhappy, you can switch. We make the transition painless — just [contact us](/contact) and we'll handle the handoff.

---

*Barrett Henry is the property manager behind ViVi Property Management, serving five Tampa Bay counties with 23+ years of real estate experience.*`,
  },

  // -------------------------------------------------------
  // 3. The true cost of one bad tenant (May 27, 2026)
  // -------------------------------------------------------
  {
    id: "static-3",
    slug: "cost-of-bad-tenant-screening-prevents-it",
    title: "The true cost of one bad tenant (and how screening prevents it)",
    excerpt:
      "A bad tenant can cost you $5,000 to $15,000 in damages, lost rent, and legal fees. Professional screening isn't optional — it's the most important investment you make.",
    hero_image_url: null,
    hero_image_credit: null,
    published_at: "2026-05-27T09:00:00Z",
    status: "published",
    category: "Screening",
    read_time: "7 min read",
    body_mdx: `Every landlord who's had a bad tenant says the same thing afterward: "I should have screened better." The damage from one bad placement — financially and emotionally — can wipe out years of rental income. I've seen it happen dozens of times in 23+ years of real estate experience, and it's almost always preventable.

## How much does a bad tenant actually cost?

Let's add it up with real numbers from Tampa Bay:

- **Unpaid rent:** Average eviction takes 30–60 days in Hillsborough County. At $2,000/month, that's $2,000–$4,000 in lost rent before they're even out.
- **Eviction costs:** Court filing, process server, and attorney fees run $1,500–$3,000. If the tenant contests, add another $1,000–$2,000.
- **Property damage:** Beyond normal wear and tear, bad tenants can leave behind $2,000–$10,000 in damage. Holes in walls, stained or destroyed flooring, broken fixtures, damaged appliances, pest infestations.
- **Make-ready costs:** After a bad tenant, the property often needs paint, flooring, deep cleaning, and repairs before it's rentable again. Budget $3,000–$5,000.
- **Lost time re-renting:** The property sits empty during repairs and re-marketing. Another 2–4 weeks of vacancy = $1,000–$2,000.

**Total cost of one bad tenant: $5,000 to $15,000+.** That's not hypothetical. That's the range we see in our market.

## What does proper screening look like?

At [ViVi Property Management](/services), we screen every applicant the same way — no shortcuts, no gut feelings. Here's what we check:

### Credit history and score

We pull a full credit report. We're not looking for a perfect 800 score. We're looking for patterns: chronic late payments, collections accounts, recent bankruptcies, or high debt loads. A person with a 650 credit score and clean payment history is often a better tenant than someone with a 720 and three collections.

### Criminal background check

We run county and national criminal background checks. Florida law allows landlords to consider criminal history in screening decisions, but you must apply your criteria consistently to every applicant. Fair Housing applies here — you cannot reject someone based on arrest records alone, only convictions, and your policy must be documented.

### Employment and income verification

We verify current employment directly with the employer and require proof of income — pay stubs, tax returns, or bank statements. Our standard is 3x monthly rent in gross income. A $2,000/month rental requires $6,000/month in verifiable income.

### Rental history from previous landlords

This is the most revealing part of the screening. We contact the last two landlords and ask specific questions: Did they pay on time? Did they give proper notice? How did they leave the property? Would you rent to them again? If a previous landlord hesitates on that last question, that tells us everything.

### Debt-to-income ratio

High income means nothing if it's all going to car payments, student loans, and credit card minimums. We calculate total monthly debt obligations against income to make sure the tenant can actually afford the rent after their other commitments.

### Identity verification and fraud detection

Rental application fraud is real and increasing. Fake pay stubs, fabricated employer references, and stolen identities are more common than most owners realize. We use verification tools to cross-reference applicant information.

## What are the biggest screening mistakes landlords make?

After managing properties across [five Tampa Bay counties](/areas), here are the mistakes we see over and over:

- **Rushing to fill a vacancy:** An empty property feels urgent. But placing the wrong tenant to stop the bleeding costs 10x more than waiting another week for the right one.
- **Skipping the landlord reference:** Relying on credit alone misses the most important data point — how they actually behaved as a tenant.
- **Accepting a sob story:** People with bad rental history often have compelling reasons. That doesn't change the risk. Apply your criteria consistently.
- **Not verifying income:** A nice car and confident demeanor are not proof of income. Verify. Always.
- **Ignoring red flags:** If something feels off during the application process, it usually is.

## How does screening protect your investment?

Think of screening as insurance that actually works. The cost of thorough screening — typically $35–$75 per applicant (paid by the applicant) — is nothing compared to the $5,000–$15,000 cost of a bad placement.

Good screening means:

- Lower eviction rates
- Less property damage
- More consistent rent payments
- Longer tenancies (reducing turnover costs)
- Better sleep at night

We back our screening with a [guarantee](/guarantees). If a tenant we place needs to be evicted within the first 12 months, we re-lease the property at no additional cost. That's how confident we are in the process.

## Frequently Asked Questions

### Can I deny a tenant for bad credit?

Yes, as long as you apply your credit criteria consistently to all applicants. Document your standards in writing before you start accepting applications. This protects you from Fair Housing complaints.

### How long does tenant screening take?

At ViVi, we complete screening within 24–48 hours of receiving a completed application with all required documentation. Some applicants delay by not providing pay stubs or employer info promptly.

### Should I screen all adults living in the property?

Yes. Every adult (18+) who will live in the property should complete a full application and be screened. Allowing unscreened occupants defeats the entire purpose of the process.

---

*Barrett Henry is the property manager behind ViVi Property Management, serving five Tampa Bay counties with 23+ years of real estate experience.*`,
  },

  // -------------------------------------------------------
  // 4. Florida landlord-tenant law guide (May 20, 2026)
  // -------------------------------------------------------
  {
    id: "static-4",
    slug: "florida-landlord-tenant-law-guide",
    title: "Florida landlord-tenant law: the owner's plain-English guide",
    excerpt:
      "Florida Statute 83 Part II governs every residential rental in the state. Here's what you actually need to know — without the legal jargon.",
    hero_image_url: null,
    hero_image_credit: null,
    published_at: "2026-05-20T09:00:00Z",
    status: "published",
    category: "Legal",
    read_time: "9 min read",
    body_mdx: `Florida landlord-tenant law lives in [Florida Statute 83, Part II](http://www.leg.state.fl.us/statutes/index.cfm?App_mode=Display_Statute&URL=0000-0099/0083/0083.html). It's not optional reading — it's the rulebook. Every lease provision, every notice, every deposit decision you make has to line up with this statute. Get it wrong, and you lose in court. Period.

Here's the plain-English version of what matters most for Tampa Bay rental property owners.

## What are a landlord's obligations under Florida law?

Florida Statute 83.51 spells out your duties clearly:

- **Maintain the roof, walls, floors, doors, and windows** in good repair
- **Maintain plumbing** in reasonable working condition
- **Provide functioning heat** (air conditioning is required if it was provided at the start of the tenancy)
- **Provide working smoke detectors**
- **Comply with all building, housing, and health codes**
- **Provide reasonable notice** before entering (at least 12 hours, and only at reasonable times)
- **Keep common areas safe and clean** (for multi-unit properties)

This is not a suggestion list. If you fail to maintain these standards and the tenant gives you written notice, they may have the right to withhold rent or terminate the lease. A professional [property manager](/services) ensures these obligations are met consistently.

## How do security deposits work in Florida?

This is where most self-managing landlords make expensive mistakes. Florida Statute 83.49 is very specific:

**How much can you charge?** There's no statutory cap on security deposits in Florida. Most Tampa Bay landlords charge one month's rent. For higher-risk tenants (lower credit score, pets), you can charge more.

**Where does the deposit go?** You have three options:
1. A separate non-interest-bearing account in a Florida banking institution
2. A separate interest-bearing account (you owe the tenant interest or 75% of the interest rate, whichever is greater — 5% per year as of recent statute)
3. A surety bond posted with the county clerk

**Within 30 days** of receiving the deposit, you must notify the tenant in writing of where it's held, the account number, and whether it's interest-bearing.

**When the tenant moves out:** You have 15 days to return the full deposit if no claim is made. If you intend to make a claim against the deposit, you must send a certified letter within 30 days detailing the specific deductions. Miss that 30-day window, and you forfeit your right to keep any of it.

We cover deposits in more detail in our [security deposit guide](/blog/security-deposits-florida-15-30-day-rule).

## What notice is required before eviction?

Florida requires specific notices before you can file for eviction:

- **3-Day Notice** for nonpayment of rent (excludes weekends and holidays)
- **7-Day Notice** for curable lease violations (the tenant has 7 days to fix the issue)
- **7-Day Unconditional Quit** for non-curable lease violations or repeated violations
- **15-Day Notice** for month-to-month tenancies (either party can terminate with 15 days' notice before the next rental period)

These notices must be in writing, must include specific language required by the statute, and must be delivered properly (hand-delivered, posted on the door, or sent by mail). A notice with wrong language or wrong delivery can get your eviction case thrown out.

## Can I enter the property whenever I want?

No. Florida Statute 83.53 requires:

- **12 hours minimum written notice** for entry
- Entry must be at a **reasonable time** (generally 7:30 AM – 8:00 PM)
- You can enter without notice only in cases of **emergency** (fire, flooding, etc.) or if the tenant has **abandoned** the property

"I own the property" is not a legal reason to enter unannounced. Violations of this provision can result in the tenant recovering damages.

## What about lease renewals and rent increases?

Florida has **no rent control**. You can raise rent by any amount at lease renewal. However:

- You cannot raise rent during an active lease term unless the lease specifically allows it
- For month-to-month tenancies, you must give 15 days' notice before the next rental period
- Rent increases cannot be retaliatory (e.g., raising rent because a tenant filed a legitimate complaint)

## What repairs is the tenant responsible for?

Under Florida Statute 83.52, tenants must:

- Keep the premises clean and sanitary
- Remove garbage in a clean and sanitary manner
- Keep plumbing fixtures clean and in repair (not causing drain clogs, for example)
- Not destroy, damage, or remove property belonging to the landlord
- Not disturb neighbors
- Comply with all building, housing, and health codes

Anything beyond normal wear and tear that's caused by the tenant or their guests is the tenant's financial responsibility.

## What should your lease include?

A strong Florida-compliant lease should cover:

- Rent amount, due date, and accepted payment methods
- Late fee terms (Florida allows "reasonable" late fees — we specify in the lease)
- Security deposit amount and terms
- Maintenance responsibilities and how to submit repair requests
- Pet policy (including breed restrictions, deposits, and pet rent)
- HOA rules and tenant responsibilities under the HOA
- Entry notice provisions
- Lease termination and renewal terms
- Military clause (Servicemembers Civil Relief Act compliance)

We use attorney-drafted leases customized for each property. This isn't a template from the internet — it's a document that protects your investment. Our [services](/services) include lease preparation for every property we manage.

## Frequently Asked Questions

### Can I evict a tenant for having an unauthorized pet?

Yes, if your lease prohibits pets or specifies approved pets. This is a lease violation. You would issue a 7-Day Notice to Cure, giving the tenant 7 days to remove the pet. If they don't comply, you can proceed with eviction.

### Do I need a lawyer for eviction in Florida?

Not legally required, but strongly recommended. Eviction procedures are technical, and a mistake in your notice or filing can delay the process by weeks. We coordinate eviction filings on behalf of our owners as part of our [management services](/services).

### Can a tenant break a lease early in Florida?

A tenant can request early termination, but they're generally responsible for rent through the end of the lease term. Florida law requires the landlord to make reasonable efforts to re-rent the property (you can't just collect double rent). Active military members have special protections under federal law.

---

*Barrett Henry is the property manager behind ViVi Property Management, serving five Tampa Bay counties with 23+ years of real estate experience.*`,
  },

  // -------------------------------------------------------
  // 5. Security deposits in Florida (May 13, 2026)
  // -------------------------------------------------------
  {
    id: "static-5",
    slug: "security-deposits-florida-15-30-day-rule",
    title: "Security deposits in Florida: how much, where it goes, and the 15/30-day rule",
    excerpt:
      "Florida's security deposit rules are strict. Miss the 30-day claim window and you forfeit your right to keep any of it. Here's exactly how it works.",
    hero_image_url: null,
    hero_image_credit: null,
    published_at: "2026-05-13T09:00:00Z",
    status: "published",
    category: "Legal",
    read_time: "7 min read",
    body_mdx: `Security deposit disputes are the number one reason landlords end up in small claims court in Florida. Not because the law is complicated — it's actually very clear — but because most landlords don't follow it precisely. And "close enough" doesn't work here.

Florida Statute 83.49 lays out exactly what you need to do with a security deposit, and the deadlines are non-negotiable.

## How much security deposit can I charge in Florida?

There is **no statutory limit** on security deposit amounts in Florida. You can charge whatever you want. That said, the market sets practical limits:

- **Standard practice:** One month's rent for well-qualified tenants
- **Higher deposits:** 1.5 to 2 months' rent for tenants with lower credit scores, pets, or shorter rental history
- **Pet deposits:** Additional deposit for pets, typically $250–$500 per pet on top of the standard deposit

At [ViVi Property Management](/services), we set deposit amounts based on the tenant's risk profile during [screening](/blog/cost-of-bad-tenant-screening-prevents-it). A well-qualified tenant pays less. A borderline-qualified tenant pays more. This protects both the owner and incentivizes strong applications.

## Where does the deposit money go?

This is where Florida gets strict. You have three options, and you must choose one:

1. **Non-interest-bearing account** at a Florida banking institution — the simplest option. The deposit sits untouched in a separate account.
2. **Interest-bearing account** — the tenant is entitled to interest at 75% of the annualized average rate, or 5% per year (simple interest), whichever the landlord chooses.
3. **Surety bond** — you post a bond equal to the deposit amount with the clerk of the county court. You then owe the tenant 5% per year interest.

**Critical step most landlords skip:** Within 30 days of receiving the deposit, you must give the tenant written notice that includes:
- Where the deposit is being held
- Whether it's interest-bearing or not
- The name and address of the depository

If you don't send this notice, you can still make claims against the deposit later — but failing to follow procedure weakens your position in court.

## What is the 15/30-day rule?

This is the most important part. When the tenant moves out:

### The 15-day rule (no claim)

If you have **no claim** against the security deposit — the property is in good shape and the tenant fulfilled the lease — you must return the full deposit within **15 days** after the tenant vacates.

### The 30-day rule (making a claim)

If you **do** have a claim against the deposit (damages beyond normal wear and tear, unpaid rent, cleaning fees), you must send a written notice by **certified mail** within **30 days** of the tenant vacating. This notice must:

- Be sent to the tenant's last known address
- Clearly state the amount you intend to claim and the specific reasons
- Include this exact statutory language: *"This is a notice of my intention to impose a claim for damages in the amount of $_____ upon your security deposit, due to _____. It is sent to you as required by s. 83.49(3), Florida Statutes. You are hereby notified that you must object to the imposition of my claim within 15 days after receipt of this notice or I will be authorized to deduct my claim from your security deposit. Your objection must be sent to (landlord's address)."*

**Miss the 30-day window? You forfeit your right to keep any of the deposit.** The tenant gets it all back, regardless of damages. This is not a gray area — courts enforce it consistently.

## What counts as damage vs. normal wear and tear?

This distinction matters because you can only deduct for damage, not normal wear and tear:

**Normal wear and tear (cannot deduct):**
- Small nail holes from hanging pictures
- Minor scuffs on walls
- Worn carpet in high-traffic areas
- Faded paint from sun exposure
- Minor marks on countertops from daily use

**Tenant damage (can deduct):**
- Large holes in walls
- Stained or burned carpet
- Broken windows or doors
- Pet damage (scratched floors, urine-stained carpet, chewed trim)
- Missing fixtures, blinds, or appliances
- Excessive filth requiring professional cleaning
- Unauthorized paint colors on walls

**Document everything.** We do a detailed move-in inspection with photos and a move-out inspection with photos. Side-by-side comparison is the strongest evidence in any deposit dispute.

## How does ViVi handle security deposits?

We handle the entire deposit process for our owners:

- Hold deposits in compliant, properly documented accounts
- Send required notices within statutory deadlines
- Conduct thorough move-in and move-out inspections with photo documentation
- Prepare itemized deposit disposition letters with certified mail tracking
- Handle tenant disputes if they object to deductions

This is one of the biggest headaches we take off your plate. One missed deadline, and you lose the entire deposit. Our [management process](/services) eliminates that risk entirely.

## Can I use the security deposit for last month's rent?

Only if the lease specifically designates a portion of the deposit as "last month's rent." Otherwise, the security deposit is for damages and unpaid obligations — not a pre-paid rent substitute. Tenants who try to use their deposit as last month's rent are violating the lease.

## Frequently Asked Questions

### What if the tenant doesn't provide a forwarding address?

Send the notice to their last known address — which is the rental property itself. As long as you send it by certified mail within 30 days to the last known address, you've met the statutory requirement. Keep the certified mail receipt as proof.

### Can I charge for carpet cleaning from the security deposit?

Only if the carpet damage exceeds normal wear and tear. If carpet is simply worn from use over a 2-year tenancy, that's wear and tear. If the tenant's pet stained or damaged the carpet, that's deductible. Document with photos.

### What happens if the tenant objects to my claim?

If the tenant objects in writing within 15 days of receiving your claim notice, the matter must be resolved through negotiation or small claims court. Keep all documentation — the move-in inspection, move-out inspection, photos, receipts for repairs, and your claim notice.

---

*Barrett Henry is the property manager behind ViVi Property Management, serving five Tampa Bay counties with 23+ years of real estate experience.*`,
  },

  // -------------------------------------------------------
  // 6. Preventive maintenance (May 6, 2026)
  // -------------------------------------------------------
  {
    id: "static-6",
    slug: "preventive-maintenance-saves-florida-rental-owners-thousands",
    title: "Preventive maintenance that saves Florida rental owners thousands",
    excerpt:
      "A $150 AC tune-up prevents a $6,000 compressor replacement. A $200 roof inspection catches a $15,000 leak. Preventive maintenance isn't optional in Florida — it's survival.",
    hero_image_url: null,
    hero_image_credit: null,
    published_at: "2026-05-06T09:00:00Z",
    status: "published",
    category: "Maintenance",
    read_time: "8 min read",
    body_mdx: `Florida is hard on rental properties. Between the heat, the humidity, the rain, the salt air, and the bugs, a property left on autopilot deteriorates fast. The owners who profit long-term are the ones who maintain proactively — not the ones who wait for something to break.

At [ViVi Property Management](/services), maintenance is handled through Best Bay Services, our dedicated maintenance partner. No third-party markups. Faster response. Work we personally stand behind. Here's the preventive maintenance schedule we follow for every property we manage.

## What should you maintain quarterly in a Florida rental?

### HVAC system (the big one)

Your AC runs 8–10 months per year in Tampa Bay. It's the most expensive system in the house and the most likely to fail if neglected.

- **Change air filters every 30–60 days** (not quarterly — monthly in peak summer). A clogged filter makes the system work harder, drives up the electric bill, and shortens the compressor life.
- **Professional AC tune-up twice per year** — once before summer, once in fall. Cost: $75–$150 per visit. This catches refrigerant leaks, drainage issues, and electrical problems before they become $3,000–$6,000 emergencies.
- **Clear the condensate drain line** — Florida humidity clogs these constantly. A clogged drain line causes water damage to floors and drywall. Pour a cup of white vinegar through the line monthly.

### Pest control

Florida's climate is paradise for termites, roaches, and rodents. Quarterly pest treatment costs $100–$150 per visit. Skipping it leads to infestations that cost thousands to remediate and drive good tenants away.

- **Termite inspection annually** — subterranean termites cause more property damage in Florida than hurricanes, fires, and floods combined. An annual termite bond runs $200–$400/year and includes treatment if termites are found.
- **Quarterly perimeter treatment** for general pests

## What are the most important annual maintenance tasks?

### Roof inspection

Florida roofs take a beating from UV, rain, and wind. Have a licensed roofer inspect annually. They'll check:

- Flashing around vents and chimneys
- Shingle condition (curling, cracking, missing)
- Soffit and fascia damage
- Gutter condition and proper drainage

Cost: $150–$300 for inspection. A small repair caught early costs $300–$800. A roof leak that goes unnoticed costs $5,000–$15,000+ in structural damage, mold, and interior repairs.

### Water heater flush

Florida's hard water builds sediment in the tank. An annual flush extends the life of the water heater by 3–5 years and maintains efficiency. Cost: $100–$200. A new water heater: $1,200–$2,500 installed.

### Plumbing inspection

Check under sinks for slow leaks, inspect toilet seals, test water pressure, and look for signs of polybutylene piping (common in Florida homes built 1978–1995). Poly pipes are a ticking time bomb — they deteriorate from the inside and fail without warning.

### Exterior paint and caulking

Florida sun degrades paint and caulking fast. Inspect annually and budget for exterior repaint every 5–7 years. Sealing gaps around windows, doors, and penetrations prevents water intrusion — the number one cause of structural damage in Florida homes.

## What maintenance should happen between tenants?

Tenant turnover is your chance to catch problems and reset the property. Here's our make-ready checklist:

- **Full property inspection** with photo documentation
- **Deep clean** including carpets, appliances, bathrooms, and windows
- **Paint touch-up or full repaint** depending on condition (we use neutral colors — agreeable gray, white dove, or similar)
- **Replace air filters and check HVAC**
- **Test all smoke detectors and carbon monoxide detectors** — replace batteries at minimum
- **Inspect and repair all window and door locks**
- **Check appliance condition** — replace anything unreliable rather than dealing with service calls after move-in
- **Pressure wash exterior, driveway, and walkways**
- **Landscape cleanup** — first impressions matter for showings

## How does proactive maintenance affect your bottom line?

The math is simple:

| Preventive cost | Emergency replacement cost |
|---|---|
| AC tune-up: $150 | Compressor replacement: $3,000–$6,000 |
| Roof inspection: $200 | Undetected leak repair: $5,000–$15,000 |
| Pest treatment: $400/year | Termite damage: $5,000–$25,000 |
| Water heater flush: $150 | New water heater: $1,200–$2,500 |
| Total annual preventive: ~$1,500 | Single major emergency: $5,000–$25,000 |

Owners who spend $1,500/year on preventive maintenance avoid the $10,000 surprises. It's the best ROI in property ownership.

Our [pricing page](/pricing) breaks down exactly what's included in our management fee. Maintenance coordination through Best Bay Services is a core part of what we do — not an add-on.

## What about hurricane prep?

If you own rental property in Tampa Bay, hurricane preparation is part of the deal. Before hurricane season (June 1 – November 30):

- **Trim trees** — remove dead branches and anything that could hit the roof or windows
- **Test and document shutters** — if the property has them, make sure they work and the tenant knows how to use them
- **Review insurance coverage** — confirm your policy is active and adequate
- **Document property condition** — photos and video of the exterior and interior before storm season starts

We send hurricane prep reminders to every tenant and owner before each season. This is part of managing in Florida — you can't skip it.

## Frequently Asked Questions

### Who pays for maintenance — the owner or the tenant?

The owner pays for maintenance related to the structure, systems, and normal wear. The tenant pays for damage they cause and minor items specified in the lease (light bulbs, air filters if agreed upon). Our [management agreement](/services) clearly defines responsibilities.

### How quickly should emergency repairs be handled?

Immediately. Florida law requires landlords to maintain habitable conditions. A broken AC in July, a burst pipe, or a failed water heater are emergencies that must be addressed within 24 hours. Best Bay Services handles emergency calls for all our managed properties.

### Should I buy a home warranty for my rental property?

Generally, no. Home warranties have coverage limits, exclusions, and slow response times. You're better off budgeting $150–$200/month for a maintenance reserve and using a trusted vendor like Best Bay Services for actual repairs.

---

*Barrett Henry is the property manager behind ViVi Property Management, serving five Tampa Bay counties with 23+ years of real estate experience.*`,
  },

  // -------------------------------------------------------
  // 7. Is Riverview a good rental market? (Apr 29, 2026)
  // -------------------------------------------------------
  {
    id: "static-7",
    slug: "is-riverview-good-rental-property-investment",
    title: "Is Riverview a good place to own a rental property?",
    excerpt:
      "Riverview is one of the fastest-growing communities in Hillsborough County with strong rental demand, newer housing stock, and median rents of $1,700–$2,100. Here's the full picture.",
    hero_image_url: null,
    hero_image_credit: null,
    published_at: "2026-04-29T09:00:00Z",
    status: "published",
    category: "Areas",
    read_time: "8 min read",
    body_mdx: `Riverview is one of the areas investors ask us about most. It checks a lot of boxes: newer construction, strong schools, highway access, and a growing population that drives consistent rental demand. But no market is perfect, so here's the honest breakdown.

## What does the Riverview rental market look like in 2026?

Riverview sits in southern [Hillsborough County](/areas/hillsborough-county), straddling the Alafia River corridor with direct access to I-75 and US-301. It's one of the fastest-growing communities in Tampa Bay, and that growth translates directly to rental demand.

Here are the key numbers:

- **Median rent (3BR SFH):** $1,700–$2,100 depending on subdivision and condition
- **Average days on market:** 10–18 days for properly priced, well-maintained homes
- **Vacancy rate:** Below the Tampa metro average — demand consistently outpaces supply
- **Population growth:** Riverview has added thousands of households over the past decade, driven by new construction and affordability relative to Tampa proper

The tenant profile here skews toward young families and professionals commuting to Tampa, MacDill AFB, or Brandon. They want good schools, newer homes, and safe neighborhoods — and they're willing to pay for it.

## What makes Riverview attractive for rental investors?

### Newer housing stock

Much of Riverview's inventory was built after 2000, with major subdivisions going up through 2020 and beyond. Newer construction means:

- Lower maintenance costs in the first 10–15 years
- Modern floor plans tenants prefer (open concept, owners suite on the first floor, 2-car garage)
- Updated systems (newer roof, AC, water heater, plumbing)
- Better energy efficiency, which keeps tenant utility costs down

Subdivisions like Panther Trace, Summerfield, Rivercrest, Boyette Springs, and Alafia River Corridor all have strong rental demand.

### School district quality

Riverview is zoned for some of Hillsborough County's better-rated schools, including Riverview High School, Sumner High School, and several well-regarded elementary and middle schools. For tenant families, school zones are a top-3 decision factor. Properties in strong school zones rent faster and retain tenants longer.

### Proximity and commute access

Riverview offers a commute advantage that tenants value:

- **I-75 access** — direct route to downtown Tampa (25–35 minutes depending on traffic)
- **Selmon Expressway connector** — toll road that shaves 10+ minutes off the Tampa commute
- **US-301** — secondary route to Brandon and Valrico
- **MacDill AFB** — 20–25 minutes, making Riverview popular with military families who are reliable, long-term renters

### Affordability relative to Tampa

Tampa proper has priced many renters out. A 3BR home in South Tampa or Seminole Heights might rent for $2,400–$3,000+. The same renter can get a newer, larger home in Riverview for $1,800–$2,100. That price gap drives continuous demand southward.

## What are the risks of investing in Riverview?

No honest market analysis skips the downsides:

- **Flood zones:** Parts of Riverview near the Alafia River and its tributaries are in FEMA flood zones. This means mandatory flood insurance for the owner and potentially the tenant. Always check the flood map before buying.
- **HOA restrictions:** Many newer Riverview subdivisions have HOAs with rental restrictions — caps on the percentage of homes that can be rented, minimum lease terms, or approval requirements. Verify HOA rules before purchasing an investment property.
- **New construction competition:** Builders are still active in the area. New construction communities sometimes offer rental concessions that can compress rents for existing properties nearby. Know your competition.
- **Infrastructure growth:** Traffic on US-301 and Big Bend Road has increased significantly. While road expansion projects are underway, current congestion can affect tenant satisfaction.

## What type of property performs best in Riverview?

Based on our [management portfolio](/services) in the area:

- **3BR/2BA single-family homes** are the sweet spot — highest demand, easiest to lease, broadest tenant pool
- **4BR homes** command premium rent and attract families who stay 2–3+ years
- **Homes with fenced yards** lease significantly faster — the pet-friendly advantage is real
- **Homes built after 2005** have lower maintenance costs and stronger rental appeal
- **Avoid: properties with deferred maintenance, outdated kitchens, or in flood zones** unless the price is low enough to offset the risks

## What should you expect for cash flow?

Let's run a quick scenario on a typical Riverview rental:

- **Purchase price:** $350,000
- **Monthly rent:** $1,950
- **Mortgage (30yr, 7%):** ~$2,330/month (assuming 20% down on $280,000)
- **Property taxes:** ~$350/month
- **Insurance:** ~$200/month
- **Management fee (10%):** $195/month
- **Maintenance reserve:** $150/month

At these numbers, the property is slightly cash-flow negative on a traditional mortgage. The play is appreciation plus equity build-up plus tax benefits. Investors paying cash or with lower purchase prices from 2020–2022 are cash-flow positive.

Want us to run the actual numbers on a specific property? Use our [ROI calculator](/tools/roi-calculator) or request a [free rental analysis](/rental-analysis).

## Frequently Asked Questions

### What's the average rent increase in Riverview year over year?

Rents in Riverview have grown 3–5% annually over the past three years after the post-pandemic surge normalized. We adjust rents at lease renewal based on current market data — not arbitrary percentages.

### Are there rental license requirements in Riverview?

Riverview is unincorporated Hillsborough County, so there's no separate municipal rental license. You may need a Hillsborough County business tax receipt if you operate as a business entity. Check with the county tax collector.

### How does ViVi manage properties in Riverview specifically?

The same way we manage across all [five counties](/areas) — dedicated property manager, screening through our standard process, maintenance through Best Bay Services, and monthly reporting through your owner portal. Riverview is in our core coverage area.

---

*Barrett Henry is the property manager behind ViVi Property Management, serving five Tampa Bay counties with 23+ years of real estate experience.*`,
  },

  // -------------------------------------------------------
  // 8. First-time rental property owner (Apr 22, 2026)
  // -------------------------------------------------------
  {
    id: "static-8",
    slug: "first-time-rental-property-owner-start-here",
    title: "First-time rental property owner? Start here",
    excerpt:
      "You bought a rental property — now what? Here's the step-by-step playbook for first-time landlords in Tampa Bay, from insurance to tenant placement.",
    hero_image_url: null,
    hero_image_credit: null,
    published_at: "2026-04-22T09:00:00Z",
    status: "published",
    category: "Getting Started",
    read_time: "8 min read",
    body_mdx: `Congratulations — you own a rental property. Now the real work begins. Whether you inherited it, moved and decided to rent your old home, or bought it specifically as an investment, the steps from here are the same. And the order matters.

I've helped hundreds of owners through this process over 23+ years of real estate experience. Here's the playbook.

## What should you do before listing your rental?

### Step 1: Get the right insurance

Your homeowner's policy does not cover a rental property. You need a **landlord policy** (also called a dwelling fire policy or DP-3). This covers:

- Structure damage
- Liability (tenant or guest injury on the property)
- Loss of rental income if the property becomes uninhabitable

Cost: typically 15–25% more than a homeowner's policy. In Tampa Bay, expect $1,800–$3,500/year depending on the home's age, construction, and location. If you're in a flood zone, add $500–$2,000/year for flood insurance.

Do not skip this step. One lawsuit or one uncovered storm claim can wipe out years of rental income.

### Step 2: Set up a separate bank account

Keep rental income and expenses in a dedicated account. This makes tax time simple, protects you in audits, and gives you a clear picture of your property's actual performance.

### Step 3: Get a make-ready inspection

Before a tenant moves in, your property needs to be in move-in ready condition. That means:

- Everything works — AC, plumbing, electrical, appliances, garage door, all locks
- Clean — professionally cleaned, not "I wiped down the counters" clean
- Safe — smoke detectors, carbon monoxide detectors, no trip hazards, handrails secure
- Cosmetically appealing — fresh paint if needed, clean flooring, no deferred maintenance visible

At [ViVi](/services), we do a detailed walk-through and build a make-ready punch list. Best Bay Services handles the work. Your property hits the market looking its best — which means faster leasing and better tenants.

### Step 4: Know your legal obligations

You're now a Florida landlord, which means Florida Statute 83 governs your relationship with your tenant. Read our [plain-English guide to Florida landlord-tenant law](/blog/florida-landlord-tenant-law-guide). The highlights:

- You must maintain habitable conditions
- You must handle security deposits properly (it's not your money until the tenant moves out)
- You must give proper notice before entering the property (12 hours minimum)
- You must follow specific eviction procedures — no self-help evictions, ever

### Step 5: Set the right rent price

Don't price based on your mortgage payment. Price based on what the market will pay. Read our [rent pricing guide](/blog/how-much-rent-tampa-bay-2026) for detailed numbers across Tampa Bay, or request a [free rental analysis](/rental-analysis) and we'll pull the comps for you.

## How do you find and screen tenants?

This is where most first-time landlords make their most expensive mistake: rushing to fill the vacancy with the first warm body who shows interest.

### Marketing your rental

Professional photos are non-negotiable. A listing with cell phone photos gets 50% fewer inquiries. We use HDR photography and 3D virtual tours for every property we list. Your listing goes on the MLS (reaching 15,000+ local agents), Zillow, Trulia, Hotpads, and 200+ rental sites.

### Screening properly

Every applicant gets the same screening process:

- Credit check
- Criminal background check
- Employment and income verification (3x monthly rent minimum)
- Rental history from previous landlords
- Debt-to-income analysis
- Identity verification

Read our full breakdown on [why screening matters](/blog/cost-of-bad-tenant-screening-prevents-it).

### Using a Florida-compliant lease

Your lease is your protection. Don't use a generic template from the internet. Use an attorney-drafted lease that covers Florida-specific requirements: security deposit disclosures, lead paint addendum (if built before 1978), radon disclosure, HOA provisions, pet policies, and maintenance responsibilities.

## What ongoing responsibilities should you expect?

### Rent collection

Set clear expectations in the lease: rent is due on the 1st, late after the 5th (or whatever terms you choose). Accept electronic payments — most tenants prefer it, and it creates a clean paper trail.

### Maintenance

Respond to maintenance requests promptly. Florida law requires you to maintain habitable conditions. A broken AC in July isn't something you can get to "next week." Our [preventive maintenance guide](/blog/preventive-maintenance-saves-florida-rental-owners-thousands) covers what to maintain proactively so you avoid costly emergencies.

### Financial tracking

Track every dollar in and out. Categories to track:

- Rental income
- Management fees
- Repairs and maintenance
- Insurance premiums
- Property taxes
- HOA dues
- Mortgage interest (if applicable)

All of these factor into your tax return. Speaking of which — rental property owners get significant [tax deductions](/blog/rental-property-tax-deductions-florida-owners-miss). Don't leave money on the table.

### Annual tasks

- Review and adjust rent at lease renewal
- Inspect the property (or have your manager do it)
- Review insurance coverage
- Update your maintenance budget
- File accurate tax returns with all deductions claimed

## Should you manage it yourself or hire a professional?

If this is your first rental and you're learning the ropes, you might want to self-manage for the first year to understand the business. But be realistic about the time commitment — it's 8–15 hours/month for a single property.

If you value your time, live far from the property, or own more than one rental, professional management pays for itself. We've written an [honest comparison](/blog/self-manage-or-hire-property-manager) to help you decide.

Our [pricing](/pricing) is transparent, and we offer [guarantees](/guarantees) that put our money where our mouth is.

## Frequently Asked Questions

### How much should I set aside for maintenance reserves?

Budget 1% of the property's value per year, or $150–$200/month, whichever is greater. Older homes and homes in Florida's humid climate tend to need more. This fund covers unexpected repairs without dipping into your personal savings.

### Do I need an LLC for my rental property?

An LLC provides liability protection — a tenant lawsuit hits the LLC, not your personal assets. It's not legally required, but most experienced investors use one. Consult a real estate attorney for setup. Cost: $125–$500 for Florida LLC formation.

### When should I start marketing my rental?

Start marketing 30–45 days before it's available. If you have a current tenant who's not renewing, begin immediately after you receive their notice. We [lease most homes in under 14 days](/blog/how-we-lease-home-under-14-days), but early marketing expands your applicant pool.

---

*Barrett Henry is the property manager behind ViVi Property Management, serving five Tampa Bay counties with 23+ years of real estate experience.*`,
  },

  // -------------------------------------------------------
  // 9. How we lease in under 14 days (Apr 15, 2026)
  // -------------------------------------------------------
  {
    id: "static-9",
    slug: "how-we-lease-home-under-14-days",
    title: "How we lease a home in under 14 days",
    excerpt:
      "Every vacant day costs you money. Our leasing process — from professional photography to signed lease — averages under 14 days. Here's exactly how we do it.",
    hero_image_url: null,
    hero_image_credit: null,
    published_at: "2026-04-15T09:00:00Z",
    status: "published",
    category: "Leasing",
    read_time: "7 min read",
    body_mdx: `Vacancy is the most expensive thing in property management. Every day your property sits empty, you're paying the mortgage, insurance, HOA, and utilities with zero income coming in. On a $2,000/month rental, each vacant week costs you $500.

At [ViVi Property Management](/services), our average time from listing to signed lease is under 14 days. That's not marketing fluff — it's a system we've built and refined across hundreds of placements. Here's exactly how it works.

## Day 1–2: Make-ready and photography

Before we list anything, the property has to be ready. Not "good enough" — ready. That means:

- **Clean:** Professional deep cleaning, not a quick wipe-down
- **Maintained:** All systems working, no deferred repairs, fresh paint where needed
- **Staged for photos:** Clutter removed, blinds open, lights on, landscaping trimmed

Then we bring in our photographer. Every ViVi listing gets:

- **HDR photography** — professional quality, properly lit, wide-angle shots of every room
- **3D virtual tour** — tenants can walk through the property online before scheduling an in-person showing
- **Accurate floor plan** — square footage, room layout, and dimensions

Why does this matter? Listings with professional photos get **3x more inquiries** than listings with phone photos. The 3D tour reduces no-shows by letting serious prospects pre-screen themselves.

## Day 2–3: Multi-channel marketing launch

The moment photos are ready, we go live everywhere:

- **MLS (Multiple Listing Service)** — this is the biggest advantage a licensed property manager has. Our MLS listing reaches 15,000+ real estate agents across Tampa Bay. Agents with relocating clients, corporate tenants, and buyers-in-waiting all see your property.
- **Zillow, Trulia, Hotpads** — the big three consumer rental sites
- **Realtor.com, Apartments.com, Rent.com** — additional exposure across 200+ syndication partners
- **Social media and targeted marketing** — Facebook Marketplace, local community groups, and our own network

We don't wait for tenants to come to us. We push the listing to where tenants are already searching.

## Day 3–7: Showings and inquiries

This is where volume matters. A well-marketed property in Tampa Bay generates 20–50 inquiries in the first week. We respond to every inquiry within 2 hours during business hours.

Our showing process:

- **Pre-screening questions** before scheduling — we ask about move-in date, income, pets, and rental history upfront. This filters out unqualified prospects before they tour.
- **Self-showing lockbox** for verified prospects — this lets us show the property at their convenience without an agent present every time. More flexible showing times = more showings = faster lease.
- **Agent-accompanied showings** for serious prospects who want a walk-through with someone who can answer questions about the lease, neighborhood, and management expectations.

## Day 7–10: Application and screening

When a prospect applies, we move fast:

- **Application review within 24 hours** — complete credit, criminal, employment, rental history, and income verification
- **Decision within 48 hours** of receiving a complete application with all documentation
- **Conditional approvals** when warranted — a strong applicant with one borderline factor (e.g., credit score of 600 but excellent rental history) may be approved with a higher security deposit rather than rejected outright

Our screening standards are documented and applied consistently to every applicant. No exceptions, no gut feelings, no shortcuts. This protects you and keeps us in full Fair Housing compliance. Read more about our [screening process](/blog/cost-of-bad-tenant-screening-prevents-it).

## Day 10–14: Lease signing and move-in

Once approved, we execute the lease and coordinate move-in:

- **Attorney-drafted Florida lease** customized for your property — covering rent terms, security deposit disclosures, pet policies, HOA requirements, maintenance responsibilities, and every Florida-specific provision required by law
- **Security deposit and first month's rent collected** before keys are handed over
- **Move-in inspection** with detailed photos documenting the property's condition — this is your baseline for deposit claims at move-out
- **Utility transfer verification** — we confirm utilities are transferred out of the owner's name and into the tenant's

## Why do most self-managed properties take 30+ days to lease?

The typical self-managing landlord:

- Takes phone photos (fewer inquiries)
- Lists on Zillow only (misses the MLS and agent network)
- Can only show evenings and weekends (limited availability)
- Screens manually (slower, less thorough)
- Uses a basic lease template (legal exposure)

Each of these adds days to the process. Multiply them together, and you're looking at 30–45 days of vacancy — costing $2,000–$4,000 on a $2,000/month rental. That's more than our entire leasing fee.

## What if the property doesn't lease in 14 days?

It happens occasionally, and when it does, there are only three reasons:

1. **Price is too high** — we'll recommend an adjustment based on market feedback
2. **Condition issue** — something about the property is turning prospects away (we'll identify it)
3. **Seasonal timing** — December and January are slow months in Tampa Bay. We adjust expectations and marketing accordingly.

We don't just list and wait. We actively monitor days on market, showing feedback, and inquiry volume, then adjust strategy in real time.

Our leasing fee covers all of this — marketing, photography, showings, screening, lease execution, and move-in coordination. Check our [pricing page](/pricing) for the full breakdown, and see our [guarantees](/guarantees) that back up our performance.

## Frequently Asked Questions

### Do you charge the owner if the property doesn't lease?

No. We don't charge a leasing fee until a qualified tenant signs the lease and moves in. You pay for results, not effort.

### Can the tenant negotiate the lease terms?

The rent price and major terms are set by the owner. Minor accommodations (move-in date flexibility, for example) can sometimes be negotiated. We always consult with the owner before agreeing to any changes.

### What if I already have a tenant in mind?

We can screen your prospect through our standard process. If they pass, we'll execute the lease. If they don't, you've avoided a costly mistake. The screening fee is paid by the applicant.

---

*Barrett Henry is the property manager behind ViVi Property Management, serving five Tampa Bay counties with 23+ years of real estate experience.*`,
  },

  // -------------------------------------------------------
  // 10. Tax deductions Florida landlords miss (Apr 1, 2026)
  // -------------------------------------------------------
  {
    id: "static-10",
    slug: "rental-property-tax-deductions-florida-owners-miss",
    title: "Rental property tax deductions Florida owners miss",
    excerpt:
      "Most rental property owners leave thousands in deductions on the table. From depreciation to travel expenses, here are the write-offs your CPA should be claiming.",
    hero_image_url: null,
    hero_image_credit: null,
    published_at: "2026-04-01T09:00:00Z",
    status: "published",
    category: "Financial",
    read_time: "8 min read",
    body_mdx: `Rental property is one of the most tax-advantaged investments in America. But most owners — especially first-timers — leave thousands of dollars in deductions on the table every year. Not because the deductions don't exist. Because they don't know to claim them.

I'm not a CPA, and this isn't tax advice. But after 23+ years in real estate and managing properties across [five Tampa Bay counties](/areas), I've seen what smart investors deduct and what the rest miss. Talk to your tax professional about each of these.

## What are the biggest deductions rental property owners miss?

### Depreciation (the one everyone should know but many forget)

The IRS lets you depreciate the **structure** (not the land) of a residential rental property over 27.5 years. On a $350,000 property where the land is worth $100,000, that's $250,000 in depreciable value — or roughly **$9,090 per year** in depreciation deductions.

That's a paper loss that reduces your taxable rental income without costing you a dime in cash. If your rental generates $24,000/year in gross income and your expenses total $18,000, your taxable income is $6,000. Subtract $9,090 in depreciation, and you now have a **tax loss of $3,090** — which can offset other income (subject to passive activity rules).

If you're not claiming depreciation, you're overpaying taxes. Period.

### Cost segregation (the accelerated version)

A cost segregation study breaks your property into components with shorter depreciation lives:

- Appliances: 5 years
- Carpeting: 5 years
- Fencing, landscaping: 15 years
- Certain fixtures and personal property: 5–7 years

Instead of depreciating everything over 27.5 years, you front-load deductions into the early years of ownership. A cost segregation study costs $3,000–$7,000 but can generate $20,000–$50,000+ in accelerated first-year deductions on a $350,000 property. It makes the most sense for higher-value properties or owners with significant income to offset.

### Repairs vs. improvements (know the difference)

**Repairs** are deductible in the year they're incurred. **Improvements** must be capitalized and depreciated over their useful life. The distinction matters:

- **Repair (deduct now):** Fixing a leaky faucet, patching drywall, replacing a broken window, repairing an appliance
- **Improvement (depreciate over time):** New roof, new AC system, kitchen renovation, adding a fence

The IRS uses a "restoration, adaptation, or betterment" test. If the work restores the property to its normal operating condition, it's likely a repair. If it makes the property better than it was, it's an improvement.

Best Bay Services handles maintenance for all our [managed properties](/services), and we categorize every expense correctly on your monthly statement. That makes tax time straightforward.

### Property management fees

Every dollar you pay your property manager is deductible as a rental expense. That includes:

- Monthly management fees
- Leasing/placement fees
- Renewal fees
- Setup fees

Our [transparent pricing](/pricing) makes it easy to calculate your annual management expense. On a $2,000/month rental at 10% management, that's $2,400/year in deductible fees.

### Travel expenses

If you travel to your rental property for management-related purposes, those expenses are deductible:

- Mileage (67 cents/mile for 2026) for local trips to the property
- Airfare, hotel, and meals if you travel from out of state to inspect or manage the property
- The trip must be primarily for rental business — not a vacation with a quick property check

### Insurance premiums

All insurance related to your rental is deductible:

- Landlord/dwelling fire policy premiums
- Flood insurance
- Umbrella liability policy (the portion allocable to the rental)
- Any rider covering the rental property specifically

### Mortgage interest

If you have a mortgage on the rental property, the interest portion of your payment is deductible. On a typical 30-year loan, interest makes up the majority of your payment in the early years. This can be your single largest deduction.

### Property taxes

Your annual property tax bill is fully deductible as a rental expense. In Tampa Bay, property taxes on a $350,000 home run approximately $4,000–$6,000/year depending on homestead status (investment properties don't get the homestead exemption — another reason to track this carefully).

### Professional services

Fees paid to professionals for your rental business are deductible:

- CPA/accountant fees for tax preparation
- Attorney fees for lease review, eviction, or entity formation
- Real estate agent commissions for acquiring or selling rental property

### Other commonly missed deductions

- **Advertising costs** for listing the property
- **HOA dues** (if the property is in an HOA community)
- **Utilities** paid by the owner (during vacancy or if included in rent)
- **Pest control** and lawn maintenance
- **Cleaning and turnover costs** between tenants
- **Office supplies and software** used for managing the property (even spreadsheets and accounting software subscriptions)
- **Continuing education** related to real estate investing (courses, books, seminars)

## How should you track rental expenses?

The easiest way to lose deductions is to not track expenses properly. Here's what works:

- **Separate bank account** for all rental income and expenses
- **Save every receipt** — digital is fine, just be consistent
- **Monthly categorization** of expenses (don't wait until April)
- **Year-end summary** provided by your property manager

At ViVi, we provide monthly owner statements and a year-end financial package that your CPA can use directly. No digging through shoeboxes.

## What about the $25,000 passive loss allowance?

If your adjusted gross income (AGI) is under $100,000 and you **actively participate** in managing your rental (making management decisions, approving tenants, etc.), you can deduct up to **$25,000 in rental losses** against your ordinary income.

This phases out between $100,000 and $150,000 AGI. Above $150,000, rental losses are passive and can only offset passive income (unless you qualify as a real estate professional).

This is another reason to track your rental activity. "Active participation" has specific IRS criteria — work with your CPA to document it.

## Frequently Asked Questions

### Can I deduct the cost of renovating my property before renting it?

Renovation costs before placing the property in service are capitalized and depreciated — they're not immediately deductible. However, once the property is rented, repairs and maintenance are deductible in the year incurred. The distinction between repair and improvement matters.

### Do I need to report rental income if I'm losing money?

Yes. You must report all rental income and expenses on Schedule E of your tax return, even if the property operates at a loss. The loss itself may be deductible, which is the silver lining.

### What records should I keep and for how long?

Keep all receipts, bank statements, lease agreements, insurance policies, property tax bills, and mortgage statements for at least **7 years** after filing the tax return. Digital copies are acceptable. If you claim depreciation, keep records for as long as you own the property plus 7 years after selling it.

---

*Barrett Henry is the property manager behind ViVi Property Management, serving five Tampa Bay counties with 23+ years of real estate experience.*`,
  },
];

/**
 * Look up a single static blog post by slug.
 * Returns null if no match is found.
 */
export function getStaticBlogPost(slug: string): BlogPost | null {
  return STATIC_BLOG_POSTS.find((p) => p.slug === slug) ?? null;
}
