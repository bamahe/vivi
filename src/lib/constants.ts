// ============================================
// ViVi PM Site Constants
// ============================================

export const SITE = {
  name: "ViVi Property Management",
  shortName: "ViVi",
  tagline: "Professional Property Management for Tampa Bay",
  phone: "(813) 428-9800",
  email: "info@vivipm.com",
  address: "14310 N. Dale Mabry Hwy, Ste 100, Tampa, FL 33618",
  domain: "vivipm.com",
  url: "https://vivipm.com",
  // Pricing — three tiers replace the old single "8-12%" model
  feeRange: "10% of rent collected or $299/month flat",
  placementFee: "100% of one month's rent",
  renewalFee: "$250",
  setupFee: "$250",
  maintenanceMarkup: "$0",
  areas: "Hillsborough, Pinellas, Pasco, Polk & Manatee Counties",
} as const;

// Three-tier pricing model
export const PRICING_TIERS = [
  {
    name: "Lease & List",
    subtitle: "Tenant Placement",
    price: "100% of one month's rent",
    priceNote: "one-time fee",
    description: "For owners who want a great tenant placed, then self-manage.",
    popular: false,
    includes: [
      "Professional HDR photography",
      "MLS + 200+ site syndication",
      "Comprehensive tenant screening",
      "Attorney-drafted FL lease",
      "Lease execution",
      "Move-in coordination",
    ],
  },
  {
    name: "Standard",
    subtitle: "Full Management",
    price: "10% of monthly rent",
    priceNote: "+ 100% of first month's rent",
    description: "For owners who want everything handled.",
    popular: true,
    includes: [
      "Everything in Lease & List",
      "Monthly rent collection",
      "Owner portal + monthly statements",
      "Maintenance coordination ($0 markup)",
      "6-month walkthrough in year one",
      "Eviction coordination",
      "Year-end 1099 + P&L",
      "HOA lease approval handling",
      "No monthly vacancy fees",
      "Dedicated property manager",
    ],
  },
  {
    name: "Peace of Mind",
    subtitle: "Flat-Fee Management",
    price: "$299/month flat",
    priceNote: "+ 100% of first month's rent",
    description: "For higher-rent properties where a flat fee beats a percentage.",
    popular: false,
    includes: [
      "Everything in Standard",
      "Predictable flat monthly fee",
      "Best for properties renting above $3,000/month",
    ],
  },
] as const;

// Supporting fees shown alongside pricing
export const ADDITIONAL_FEES = {
  setup: { label: "One-time setup/onboarding", amount: "$250", note: "walkthrough, photos, portal setup, listing creation" },
  renewal: { label: "Lease renewal", amount: "$250", note: "" },
  maintenanceMarkup: { label: "Maintenance markup", amount: "$0", note: "Best Bay Services charges actual cost" },
  vacancyFee: { label: "Monthly vacancy fee", amount: "$0", note: "" },
  eviction: { label: "Eviction", amount: "Owner pays court/attorney costs", note: "ViVi/CRR manages the process" },
} as const;

// Tenant-side fees (paid by tenant, not owner)
export const TENANT_FEES = [
  { label: "Attorney lease prep", amount: "$95", note: "paid by tenant" },
  { label: "Renters insurance", amount: "Required", note: "$100K liability minimum; owner listed as interested party" },
  { label: "Air filter delivery program", amount: "Billed to tenant", note: "" },
] as const;

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
    desc: "Professional HDR photography, MLS syndication across 15,000+ agents, and marketing on Zillow, Trulia, and 200+ rental sites. Most properties rent in under 14 days.",
  },
  {
    icon: "🔍",
    title: "Exceptional tenants",
    desc: "Criminal background, credit, employment, rental history, debt-to-income, fraud detection, and pet screening. We don't settle for warm bodies.",
  },
  {
    icon: "🔧",
    title: "Maintenance through Best Bay Services",
    desc: "Best Bay Services handles repairs directly — no third-party markup, faster response, and quality we personally stand behind. This is our edge.",
  },
];

export const PROCESS = [
  {
    step: "01",
    title: "Prepare",
    desc: "We walk your property, build a make-ready checklist, coordinate needed work, and get it market-ready fast. Professional photos and competitive rent analysis included.",
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

// Everything included in the Standard (full management) tier
export const INCLUDED = [
  "Professional HDR photography",
  "MLS + 200+ site syndication",
  "Comprehensive tenant screening",
  "Attorney-drafted FL lease",
  "Lease execution + move-in coordination",
  "Monthly rent collection",
  "Owner portal + monthly statements",
  "Maintenance coordination ($0 markup)",
  "6-month walkthrough in year one",
  "Eviction coordination",
  "Year-end 1099 + P&L",
  "HOA lease approval handling",
  "No monthly vacancy fees",
  "Dedicated property manager",
  "Pet screening",
];

export const FAQS = [
  {
    q: "Where does ViVi manage properties?",
    a: "We manage properties across five Tampa Bay counties: Hillsborough, Pinellas, Pasco, Polk, and Manatee. That covers cities like Tampa, St. Petersburg, Clearwater, Lakeland, Bradenton, Wesley Chapel, Valrico, Riverview, and dozens more.",
  },
  {
    q: "I don't own an investment property yet. Can you help me buy one?",
    a: "Absolutely. With 23+ years in Florida real estate, we can run rental income projections, evaluate cash flow scenarios, and help you find properties that actually pencil out. We'll have a make-ready punch list at closing so your property hits the market fast.",
  },
  {
    q: "How is maintenance handled?",
    a: "This is where we're different. Best Bay Services is our dedicated maintenance partner — no third-party markups, faster response times, and work we stand behind. For repairs over your approved threshold, we call you first. Emergency repairs are handled immediately to protect your property.",
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
    a: "Our Lease & List tier is built for exactly that — professional photography, MLS syndication, comprehensive screening, attorney-drafted lease, and move-in coordination for a one-time fee of 100% of one month's rent. You handle ongoing management; we find you the right tenant.",
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
  { label: "Blog", href: "/blog" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];
