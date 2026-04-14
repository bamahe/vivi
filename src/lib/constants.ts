// ============================================
// ViVi PM Site Constants
// ============================================

export const SITE = {
  name: "ViVi Property Management",
  shortName: "ViVi",
  tagline: "Professional Property Management for Florida",
  phone: "(813) 260-4663",
  email: "info@vivipm.com",
  address: "14310 N. Dale Mabry Hwy, Ste 100, Tampa, FL 33618",
  domain: "vivipm.com",
  url: "https://vivipm.com",
  feeRange: "8–12% of rent collected",
  areas: "Hillsborough, Pinellas, Pasco, Polk & Manatee Counties",
} as const;

export const COUNTIES = [
  {
    name: "Hillsborough County",
    cities: "Tampa, Brandon, Valrico, Riverview, Apollo Beach, Plant City, Lithia, Seffner, Temple Terrace",
    active: true,
  },
  {
    name: "Pinellas County",
    cities: "St. Petersburg, Clearwater, Largo, Dunedin, Pinellas Park, Seminole, Safety Harbor, Treasure Island",
    active: true,
  },
  {
    name: "Pasco County",
    cities: "Wesley Chapel, Land O' Lakes, New Port Richey, Lutz, Zephyrhills, Trinity, Dade City",
    active: true,
  },
  {
    name: "Polk County",
    cities: "Lakeland, Winter Haven, Bartow, Auburndale, Lake Wales, Haines City, Davenport",
    active: true,
  },
  {
    name: "Manatee County",
    cities: "Bradenton, Palmetto, Anna Maria Island, Holmes Beach, Lakewood Ranch, Parrish, Ellenton",
    active: true,
  },
];

export const SERVICES = [
  {
    icon: "⚡",
    title: "Minimal vacancies",
    desc: "Professional photography, 3D tours, MLS syndication across 15,000+ agents, and marketing on Zillow, Trulia, and 200+ rental sites. Most properties rent in under 14 days.",
  },
  {
    icon: "🔍",
    title: "Exceptional tenants",
    desc: "Criminal background, credit, employment, rental history, debt-to-income, fraud detection, and pet screening. We don't settle for warm bodies.",
  },
  {
    icon: "🔧",
    title: "In-house maintenance",
    desc: "Best Bay Services handles repairs directly — no third-party markup, faster response, and quality we personally stand behind. This is our edge.",
  },
];

export const PROCESS = [
  {
    step: "01",
    title: "Prepare",
    desc: "We walk your property, build a make-ready checklist, coordinate needed work, and get it market-ready fast. Professional photos, 3D tour, and competitive rent analysis included.",
  },
  {
    step: "02",
    title: "Market",
    desc: "MLS entry hits 15,000+ agents across our service area. Syndicated to Zillow, Trulia, Hotpads, and hundreds more. We market 365 days a year — even while occupied.",
  },
  {
    step: "03",
    title: "Profit",
    desc: "Monthly rent collection, detailed owner statements, year-end tax docs, and a dedicated property manager. Track everything from your owner portal.",
  },
];

export const INCLUDED = [
  "Professional HDR photography",
  "Immersive 3D virtual tour",
  "MLS + 200+ site syndication",
  "Comprehensive tenant screening",
  "Attorney-drafted FL leases",
  "Monthly rent collection",
  "Owner portal + monthly reports",
  "In-house maintenance (BBS)",
  "Eviction coordination",
  "Year-end 1099 + P&L",
  "No monthly vacancy fees",
  "Dedicated property manager",
  "Pet screening",
  "HOA lease approval handling",
  "Home make-ready management",
  "Damage protection plan",
];

export const FAQS = [
  {
    q: "Where does ViVi manage properties?",
    a: "We actively manage properties across five core counties: Hillsborough, Pinellas, Pasco, Polk, and Manatee. We're expanding statewide across all 67 Florida counties. If you own property elsewhere in Florida, reach out — we may already have coverage in your area or can get it set up quickly.",
  },
  {
    q: "I don't own an investment property yet. Can you help me buy one?",
    a: "Absolutely. With 23+ years in Florida real estate, we can run rental income projections, evaluate cash flow scenarios, and help you find properties that actually pencil out. We'll have a make-ready punch list at closing so your property hits the market fast.",
  },
  {
    q: "How is maintenance handled?",
    a: "This is where we're different. Best Bay Services is our in-house maintenance team — no third-party markups, faster response times, and work we stand behind. For repairs over your approved threshold, we call you first. Emergency repairs are handled immediately to protect your property.",
  },
  {
    q: "What about pets?",
    a: "Over 70% of renters have pets. Properties that accept pets rent faster, command higher rents, and have shorter vacancies. We screen pets thoroughly and use security deposits plus our damage protection plan to cover any issues.",
  },
  {
    q: "How and when do I get paid?",
    a: "Rent is deposited directly to your bank account on the last business day of each month. The amount reflects rent collected minus management fees and any approved expenses like repairs or lawn care.",
  },
  {
    q: "How involved will I be?",
    a: "As much or as little as you want. You'll get a monthly owner report with all financials and service tickets. We handle everything day-to-day — you only hear from us for big decisions or if we need approval on a major repair.",
  },
  {
    q: "What will my home rent for?",
    a: "We price aggressively but smart — high enough to maximize your return, realistic enough to avoid costly vacancy. We'll run a free competitive market analysis for your property. Just reach out.",
  },
  {
    q: "What's your screening process?",
    a: "Criminal background check, credit pull, employment and income verification, rental history from past landlords, debt-to-income analysis, and identity fraud detection. Applicants who don't fully meet criteria may be conditionally approved with a higher security deposit.",
  },
  {
    q: "Can I sell my property later?",
    a: "Of course. We work with any timeline. When you're ready, our sales team handles the listing with the same market knowledge we use to manage your property. We know every inch of it — that's a selling advantage.",
  },
  {
    q: "What if I only need help finding a tenant?",
    a: "We offer a tenant placement service — marketing, screening, and lease execution for a one-time fee. You handle management, we find you the right tenant.",
  },
  {
    q: "Is there a tax benefit to renting out my home?",
    a: "Yes. All expenses related to the rental property — management fees, repairs, maintenance, insurance, property taxes — are typically tax-deductible. Consult your tax professional for specific advice.",
  },
  {
    q: "What is the eviction process?",
    a: "We screen carefully to prevent it, but when evictions are necessary, we handle the filing on your behalf. In most cases, you won't need to appear in court. Court costs and attorney fees are charged to your account as incurred.",
  },
];

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Pricing", href: "/pricing" },
  { label: "Areas", href: "/areas" },
  { label: "Owners", href: "/owners" },
  { label: "Tenants", href: "/tenants" },
  { label: "Contact", href: "/contact" },
];
