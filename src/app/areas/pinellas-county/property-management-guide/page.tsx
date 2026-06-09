// ============================================
// Comprehensive Pinellas County PM Guide
// Long-form SEO/AEO content targeting
// "property management pinellas county"
// and related long-tail keywords
// ============================================

import type { Metadata } from "next";
import Link from "next/link";
import { SITE } from "@/lib/constants";
import { CITIES } from "@/lib/cities";
import Breadcrumbs from "@/components/Breadcrumbs";
import QuickAnswer from "@/components/QuickAnswer";
import FAQSchema from "@/components/FAQSchema";

// Metadata targeting "property management pinellas county" and long-tail variants
export const metadata: Metadata = {
  title: "Pinellas County PM Guide",
  description:
    "Pinellas County PM guide — rental market data, beach and waterfront considerations, average rents by city, snowbird market, and choosing a property manager.",
  openGraph: {
    title: "Pinellas County Property Management Guide | ViVi PM",
    description:
      "Comprehensive guide covering Pinellas County rental market, beach property management, average rents, snowbird and seasonal rental dynamics, choosing a PM, and Florida climate maintenance.",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pinellas County Property Management Guide | ViVi PM",
    description:
      "Complete guide to property management in Pinellas County — rents, waterfront considerations, seasonal markets, and tax benefits.",
  },
  alternates: { canonical: "/areas/pinellas-county/property-management-guide" },
};

export default function PinellasPMGuidePage() {
  // Get Pinellas County cities for the rent table
  const countyCities = CITIES.filter(
    (c) => c.county === "Pinellas County"
  );

  // Breadcrumb navigation items
  const breadcrumbItems = [
    { name: "Home", href: "/" },
    { name: "Areas", href: "/areas" },
    { name: "Pinellas County", href: "/areas/pinellas-county" },
    { name: "Property Management Guide", href: "/areas/pinellas-county/property-management-guide" },
  ];

  // FAQ items for this guide page — 8 questions targeting long-tail searches
  const faqItems = [
    {
      question: "What is the average property management fee in Pinellas County?",
      answer:
        "Most Pinellas County property management companies charge between 8% and 12% of monthly rent collected. Additional fees may include a leasing or placement fee (typically 50-100% of one month's rent), a setup fee ($200-$500), and a lease renewal fee ($150-$300). ViVi Property Management charges 8-12% with no vacancy fees and no maintenance markups.",
    },
    {
      question: "What are the unique challenges of managing beach and waterfront properties in Pinellas County?",
      answer:
        "Beach and waterfront properties in Pinellas County face salt air corrosion on exterior fixtures, HVAC systems, and metal components. Flood insurance through the NFIP is often required, and properties in VE and AE flood zones may need elevated construction. Seawall maintenance, dock inspections, and hurricane preparedness are critical. Salt air accelerates wear on everything from door hardware to AC condensers, meaning maintenance budgets should be 15-25% higher than inland properties.",
    },
    {
      question: "How does the snowbird and seasonal rental market work in Pinellas County?",
      answer:
        "Pinellas County sees a significant influx of seasonal residents — snowbirds — from November through April, primarily from the Northeast and Midwest. While short-term vacation rentals capture this market, long-term landlords benefit too: tenant demand peaks in winter months, and annual leases signed in October through January often command higher rents. Properties near Clearwater Beach, Indian Rocks Beach, and St. Pete Beach see the strongest seasonal demand.",
    },
    {
      question: "What is the average rent in Pinellas County by city?",
      answer:
        "Average single-family rents in Pinellas County range from $1,700 in New Port Richey-adjacent areas to $2,200 in St. Petersburg. St. Petersburg averages $2,200, Dunedin $2,100, Clearwater $2,000, Seminole $2,000, and Largo $1,850. Actual rents depend on property size, condition, waterfront access, and neighborhood.",
    },
    {
      question: "How do I choose a property manager in Pinellas County?",
      answer:
        "Look for a licensed Florida real estate broker or firm, transparent fee structure with no hidden charges, local market knowledge specific to Pinellas County's beach and inland dynamics, an in-house or dedicated maintenance solution, comprehensive tenant screening, and technology (owner portal, online rent payment). Ask about their experience with waterfront properties, flood insurance coordination, and seasonal market timing.",
    },
    {
      question: "What maintenance issues are specific to Pinellas County rental properties?",
      answer:
        "Pinellas County's coastal environment creates specific challenges: salt air corrosion on HVAC condensers, door hardware, and exterior fixtures requires more frequent replacement. Humidity drives mold growth, especially in properties near the water. Hurricane season demands annual roof inspections, impact-rated windows or shutters, and trim trees. Irrigation systems must comply with Pinellas County watering restrictions. Properties on barrier islands face additional wind exposure and sand intrusion issues.",
    },
    {
      question: "Is Pinellas County a good market for rental property investment?",
      answer:
        "Pinellas County offers strong rental demand driven by tourism, healthcare (BayCare, Johns Hopkins All Children's), tech companies, and the military (Coast Guard Station St. Petersburg). The county's limited land — it is a peninsula — constrains new housing supply, which supports property values and rents. St. Petersburg's economic transformation has driven significant rent growth over the past decade. Cash flow is strongest in Largo, Seminole, and Pinellas Park.",
    },
    {
      question: "What are the vacancy rates in Pinellas County?",
      answer:
        "Well-priced, well-maintained rental properties in Pinellas County typically experience vacancy rates under 5%. ViVi-managed properties average less than 14 days on market. Pinellas County's limited geographic footprint — a peninsula between Tampa Bay and the Gulf — means housing supply is constrained, which keeps vacancy rates low across most cities and price points.",
    },
  ];

  // JSON-LD: Article schema for the guide
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Complete Guide to Property Management in Pinellas County, FL",
    description:
      "Comprehensive guide for landlords covering Pinellas County rental market, beach and waterfront property management, average rents by city, seasonal market dynamics, choosing a property manager, and maintenance for coastal Florida climate.",
    author: {
      "@type": "Person",
      name: "Barrett Henry",
      jobTitle: "Broker Associate, REALTOR\u00ae",
      worksFor: {
        "@type": "Organization",
        name: "ViVi Property Management",
      },
    },
    publisher: {
      "@type": "Organization",
      name: "ViVi Property Management",
      url: "https://vivipm.com",
    },
    datePublished: "2026-06-08",
    dateModified: "2026-06-08",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": "https://vivipm.com/areas/pinellas-county/property-management-guide",
    },
    about: {
      "@type": "Thing",
      name: "Property Management in Pinellas County",
    },
  };

  // JSON-LD: Speakable schema for voice assistants
  const speakableSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Complete Guide to Property Management in Pinellas County, FL",
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: [
        ".quick-answer-question",
        ".quick-answer-text",
      ],
    },
    url: "https://vivipm.com/areas/pinellas-county/property-management-guide",
  };

  return (
    <>
      {/* JSON-LD: Article schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleSchema).replace(/</g, "\\u003c"),
        }}
      />
      {/* JSON-LD: Speakable schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(speakableSchema).replace(/</g, "\\u003c"),
        }}
      />

      {/* ---- Breadcrumbs ---- */}
      <Breadcrumbs items={breadcrumbItems} />

      {/* ---- Hero ---- */}
      <section className="gradient-accent relative overflow-hidden px-6 py-24 text-center text-white sm:py-32">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.08)_0%,transparent_70%)]" />
        <div className="relative mx-auto max-w-3xl">
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-white/60">
            Comprehensive Landlord Resource
          </p>
          <h1 className="text-4xl font-bold leading-tight sm:text-5xl">
            Complete Guide to Property Management in Pinellas County, FL
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lg font-light leading-relaxed text-white/80">
            Everything you need to know about managing rental property in Pinellas County — from beach and waterfront considerations to average rents, seasonal markets, and maximizing your return.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/rental-analysis"
              className="rounded-full bg-white px-8 py-3.5 text-sm font-semibold text-accent transition-colors hover:bg-white/90"
            >
              Free Rent Analysis
            </Link>
            <a
              href={`tel:${SITE.phone.replace(/[^0-9+]/g, "")}`}
              className="rounded-full border border-white/30 px-8 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
            >
              Call {SITE.phone}
            </a>
          </div>
        </div>
      </section>

      {/* ---- QuickAnswer — AEO target ---- */}
      <section className="px-6 py-16 sm:py-20">
        <QuickAnswer
          question="What should landlords know about property management in Pinellas County?"
          answer={`Pinellas County is a peninsula between Tampa Bay and the Gulf of Mexico, creating a coastal rental market with limited land and strong demand. Median single-family rents range from $1,850 to $2,200 depending on city and proximity to the water. Professional property management typically costs 8-12% of rent collected. Beach and waterfront properties require specialized maintenance for salt air corrosion, flood insurance, and hurricane preparedness. ViVi Property Management serves all Pinellas County cities. Call ${SITE.phone}.`}
        />
      </section>

      {/* ---- Table of Contents ---- */}
      <section className="px-6 py-10">
        <div className="mx-auto max-w-3xl">
          <nav className="card p-6">
            <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-[var(--muted-text)]">In this guide</p>
            <ol className="grid gap-2 text-sm sm:grid-cols-2">
              <li><a href="#rental-market" className="text-accent hover:underline">1. Pinellas County rental market overview</a></li>
              <li><a href="#waterfront" className="text-accent hover:underline">2. Beach and waterfront property management</a></li>
              <li><a href="#average-rents" className="text-accent hover:underline">3. Average rents by city</a></li>
              <li><a href="#seasonal-market" className="text-accent hover:underline">4. Snowbird and seasonal rental dynamics</a></li>
              <li><a href="#choosing-pm" className="text-accent hover:underline">5. How to choose a property manager</a></li>
              <li><a href="#maintenance" className="text-accent hover:underline">6. Maintenance for coastal Florida climate</a></li>
              <li><a href="#tax-benefits" className="text-accent hover:underline">7. Tax benefits for rental owners</a></li>
              <li><a href="#faq" className="text-accent hover:underline">8. Frequently asked questions</a></li>
            </ol>
          </nav>
        </div>
      </section>

      {/* ---- Section 1: Rental Market Overview ---- */}
      <section id="rental-market" className="px-6 py-20 sm:py-28">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-6 text-3xl font-semibold sm:text-4xl">
            1. Pinellas County rental market overview
          </h2>
          <div className="space-y-5 text-[var(--muted-text)] leading-relaxed">
            <p>
              Pinellas County is the most densely populated county in Florida and one of the most unique rental markets in the state. Occupying a peninsula between Tampa Bay to the east and the Gulf of Mexico to the west, Pinellas has almost no undeveloped land remaining. That geographic constraint is the single most important factor for rental property owners: supply cannot keep up with demand.
            </p>
            <p>
              St. Petersburg anchors the county&apos;s economy. The city has transformed over the past decade from a sleepy retirement destination into a vibrant cultural and economic hub. The EDGE District, Grand Central District, and downtown waterfront have attracted tech companies, creative agencies, and remote workers who are willing to pay premium rents. Major employers include BayCare Health System, Johns Hopkins All Children&apos;s Hospital, Raymond James Financial, and Jabil. The U.S. Coast Guard Station St. Petersburg and the Port of St. Petersburg add federal and maritime employment to the mix.
            </p>
            <p>
              Clearwater and Dunedin attract a different tenant profile — families drawn to the Gulf Coast lifestyle, professionals working in the Countryside and Feather Sound corporate corridors, and seasonal residents who prefer the quieter Gulf side. Largo and Seminole serve as the county&apos;s affordable middle ground, offering solid rental returns without the premium pricing of waterfront communities. Pinellas Park provides blue-collar workforce housing with consistent demand.
            </p>
            <p>
              Vacancy rates across Pinellas County remain below 5% for well-priced properties. The county&apos;s barrier islands — Clearwater Beach, Indian Rocks Beach, Treasure Island, St. Pete Beach — create a tourism economy that spills over into the long-term rental market as seasonal workers need housing. For rental property owners and investors, Pinellas County&apos;s constrained supply and diversified demand make it one of the most resilient markets in the Tampa Bay metro.
            </p>
          </div>
        </div>
      </section>

      {/* ---- Section 2: Beach and Waterfront Property Management ---- */}
      <section id="waterfront" className="section-alt px-6 py-20 sm:py-28">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-6 text-3xl font-semibold sm:text-4xl">
            2. Beach and waterfront property management in Pinellas County
          </h2>
          <div className="space-y-5 text-[var(--muted-text)] leading-relaxed">
            <p>
              Pinellas County has more waterfront property per capita than almost any county in Florida. From Clearwater Beach to Gulfport, from Shore Acres to Dunedin Causeway, managing properties near water requires specialized knowledge that inland-focused managers often lack.
            </p>

            <h3 className="text-xl font-semibold text-[var(--foreground)]">Salt air corrosion</h3>
            <p>
              Salt air is the silent destroyer of coastal properties. AC condensers, door hardware, exterior light fixtures, metal railings, and garage door springs all corrode faster within 2 miles of the Gulf or Tampa Bay. Budget for more frequent replacement of these components — AC condensers may last 8-10 years on the coast versus 12-15 years inland. Rinse exterior units with fresh water quarterly to extend their lifespan.
            </p>

            <h3 className="text-xl font-semibold text-[var(--foreground)]">Flood insurance and flood zones</h3>
            <p>
              Many Pinellas County properties fall within FEMA flood zones AE or VE. Properties in these zones typically require flood insurance through the National Flood Insurance Program (NFIP) or a private flood insurer. Annual premiums can range from $1,000 to $5,000+ depending on the zone, elevation, and structure. Factor flood insurance costs into your rental pro forma before purchasing a waterfront investment property.
            </p>

            <h3 className="text-xl font-semibold text-[var(--foreground)]">Seawall and dock maintenance</h3>
            <p>
              Properties with seawalls require periodic inspection and maintenance. Seawall failure can cost $500-$1,000+ per linear foot to repair or replace. Docks need annual inspection for pilings, decking, and hardware. A property manager experienced with waterfront properties will schedule these inspections proactively rather than waiting for failure.
            </p>

            <h3 className="text-xl font-semibold text-[var(--foreground)]">Hurricane preparedness</h3>
            <p>
              Barrier island and waterfront properties in Pinellas County are in mandatory evacuation zones during hurricanes. A solid property management plan includes pre-storm preparation checklists, relationships with board-up companies, post-storm inspection protocols, and insurance claim coordination. Having a local property manager — not one 90 miles away — matters when a storm hits.
            </p>

            <p>
              ViVi coordinates all waterfront maintenance through Best Bay Services, our dedicated maintenance partner. We understand the unique demands of coastal properties and budget accordingly. Learn more about our{" "}
              <Link href="/services" className="text-accent underline hover:no-underline">services</Link>.
            </p>
          </div>
        </div>
      </section>

      {/* ---- Section 3: Average Rents by City ---- */}
      <section id="average-rents" className="px-6 py-20 sm:py-28">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-6 text-3xl font-semibold sm:text-4xl">
            3. Average rents by city in Pinellas County
          </h2>
          <p className="mb-8 text-[var(--muted-text)] leading-relaxed">
            Rents across Pinellas County vary by city, proximity to the water, property size, and condition. The table below shows median single-family rental rates for each city we serve. These figures represent typical 3-bedroom, 2-bathroom single-family homes in average condition.
          </p>

          <div className="card overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-[var(--card-border)]">
                    <th className="px-6 py-4 text-left font-sans font-semibold">City</th>
                    <th className="px-6 py-4 text-left font-sans font-semibold">Median Rent</th>
                    <th className="px-6 py-4 text-left font-sans font-semibold">Median Home Price</th>
                    <th className="px-6 py-4 text-left font-sans font-semibold">Population</th>
                  </tr>
                </thead>
                <tbody>
                  {countyCities.map((city) => (
                    <tr key={city.slug} className="border-b border-[var(--card-border)] last:border-0">
                      <td className="px-6 py-3.5">
                        <Link href={`/areas/${city.slug}`} className="font-medium text-accent hover:underline">
                          {city.name}
                        </Link>
                      </td>
                      <td className="px-6 py-3.5 text-[var(--muted-text)]">{city.medianRent}</td>
                      <td className="px-6 py-3.5 text-[var(--muted-text)]">{city.medianHome}</td>
                      <td className="px-6 py-3.5 text-[var(--muted-text)]">{city.population}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="mt-8 space-y-4 text-[var(--muted-text)] leading-relaxed">
            <p>
              <strong className="text-[var(--foreground)]">Highest rents:</strong> St. Petersburg ($2,200 median) and Dunedin ($2,100 median) command the top rents in the county. St. Pete&apos;s economic transformation and walkable downtown drive premium pricing. Dunedin&apos;s coastal charm and Honeymoon Island proximity attract lifestyle tenants willing to pay more.
            </p>
            <p>
              <strong className="text-[var(--foreground)]">Best cash flow:</strong> Largo ($1,850 median rent, $340,000 median home price) offers the strongest cash-on-cash returns for investors focused on monthly income. Lower acquisition costs and consistent workforce-driven demand create favorable ratios even at lower rent points.
            </p>
            <p>
              <strong className="text-[var(--foreground)]">Balanced markets:</strong> Clearwater ($2,000) and Seminole ($2,000) sit in the sweet spot — solid rents, family-oriented tenant pools, and moderate entry prices. These are reliable long-term rental markets with lower turnover than beach-adjacent areas.
            </p>
          </div>
        </div>
      </section>

      {/* ---- Section 4: Snowbird and Seasonal Market ---- */}
      <section id="seasonal-market" className="section-alt px-6 py-20 sm:py-28">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-6 text-3xl font-semibold sm:text-4xl">
            4. Snowbird and seasonal rental dynamics in Pinellas County
          </h2>
          <div className="space-y-5 text-[var(--muted-text)] leading-relaxed">
            <p>
              Pinellas County&apos;s Gulf Coast location makes it one of Florida&apos;s top snowbird destinations. Seasonal residents — primarily from the Northeast, Midwest, and Canada — arrive in November and leave by April. This seasonal cycle affects the rental market in ways that every Pinellas County landlord should understand.
            </p>

            <h3 className="text-xl font-semibold text-[var(--foreground)]">Impact on long-term rentals</h3>
            <p>
              While snowbirds often book short-term or furnished seasonal rentals, their presence benefits long-term landlords too. Tenant demand peaks during winter months, which means annual leases signed between October and January often command higher rents. If your lease expires in summer — when seasonal demand is lower — you may face a slower leasing period. A smart property manager times lease expirations to align with peak-demand months.
            </p>

            <h3 className="text-xl font-semibold text-[var(--foreground)]">Seasonal workforce housing</h3>
            <p>
              Clearwater Beach, St. Pete Beach, and the barrier islands employ thousands of seasonal hospitality workers who need housing from October through April. These workers create demand for affordable inland rentals in Largo, Pinellas Park, and Seminole — properties that are a 15-20 minute drive to the beach but at a fraction of the rent.
            </p>

            <h3 className="text-xl font-semibold text-[var(--foreground)]">Long-term vs. short-term strategy</h3>
            <p>
              Some Pinellas County property owners consider seasonal or vacation rentals instead of annual leases. While nightly rates can be higher, vacation rentals involve more turnover, higher maintenance, furnishing costs, higher insurance premiums, and stricter local regulations. For most investors, a well-managed annual lease provides more predictable income with less hassle. ViVi PM focuses exclusively on long-term residential management.
            </p>

            <h3 className="text-xl font-semibold text-[var(--foreground)]">Local regulations</h3>
            <p>
              Pinellas County and its municipalities have varying regulations on short-term rentals, including registration requirements, parking rules, and occupancy limits. Several barrier island communities have restricted or banned short-term vacation rentals entirely. Before pursuing any rental strategy, check local zoning and licensing requirements for your specific property location.
            </p>
          </div>
        </div>
      </section>

      {/* ---- Section 5: How to Choose a PM ---- */}
      <section id="choosing-pm" className="px-6 py-20 sm:py-28">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-6 text-3xl font-semibold sm:text-4xl">
            5. How to choose a property manager in Pinellas County
          </h2>
          <div className="space-y-5 text-[var(--muted-text)] leading-relaxed">
            <p>
              Pinellas County has dozens of property management companies ranging from solo operators to large corporate firms. The coastal market adds an extra layer of complexity that not all managers understand. Here is what to evaluate:
            </p>

            <h3 className="text-xl font-semibold text-[var(--foreground)]">Licensing and credentials</h3>
            <p>
              Florida law requires anyone managing property for others to hold a real estate license. Verify that the company is licensed through the Florida Department of Business and Professional Regulation (DBPR). A broker-level license indicates a higher level of experience and legal accountability.
            </p>

            <h3 className="text-xl font-semibold text-[var(--foreground)]">Fee transparency</h3>
            <p>
              Ask for a complete fee schedule in writing before signing any agreement. Common fees include the monthly management percentage (8-12%), leasing or placement fee, setup fee, lease renewal fee, and maintenance markups. Some companies advertise low management percentages but stack hidden fees. ViVi&apos;s fee structure is fully transparent — see our{" "}
              <Link href="/pricing" className="text-accent underline hover:no-underline">pricing page</Link>{" "}
              for a complete breakdown.
            </p>

            <h3 className="text-xl font-semibold text-[var(--foreground)]">Coastal property experience</h3>
            <p>
              Managing a property in Shore Acres is fundamentally different from managing one in Largo. Ask how many waterfront or beach-adjacent properties the company manages. Do they understand flood insurance requirements, salt air maintenance schedules, and hurricane preparedness? A manager without coastal experience will cost you money in deferred maintenance and missed insurance obligations.
            </p>

            <h3 className="text-xl font-semibold text-[var(--foreground)]">Maintenance approach</h3>
            <p>
              How does the company handle repairs? Many property managers outsource maintenance to third-party vendors and add a 10-20% markup. ViVi coordinates all maintenance through Best Bay Services — our dedicated maintenance partner — with no markup on repair costs. For coastal properties where maintenance costs are already higher, that savings is significant.
            </p>

            <h3 className="text-xl font-semibold text-[var(--foreground)]">Technology and reporting</h3>
            <p>
              Modern property management requires an owner portal for real-time access to financials, a tenant portal for online rent payment, and clear monthly statements. Ask if the company provides year-end 1099 and P&amp;L documents. Lack of technology usually means lack of organization.
            </p>

            <h3 className="text-xl font-semibold text-[var(--foreground)]">Questions to ask</h3>
            <ul className="list-disc space-y-2 pl-5">
              <li>How many properties do you currently manage in Pinellas County?</li>
              <li>Do you have experience with waterfront and beach-adjacent properties?</li>
              <li>What is your average vacancy rate and time-to-lease?</li>
              <li>How do you handle maintenance — in-house, vendor network, or dedicated partner?</li>
              <li>Can I see a sample owner statement?</li>
              <li>How do you handle hurricane preparation for my property?</li>
              <li>Do you charge vacancy fees or maintenance markups?</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ---- Section 6: Maintenance for Coastal Florida Climate ---- */}
      <section id="maintenance" className="section-alt px-6 py-20 sm:py-28">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-6 text-3xl font-semibold sm:text-4xl">
            6. Maintenance considerations for coastal Florida climate
          </h2>
          <div className="space-y-5 text-[var(--muted-text)] leading-relaxed">
            <p>
              Pinellas County&apos;s coastal subtropical climate creates maintenance challenges beyond what inland Florida landlords face. The combination of salt air, humidity, hurricane exposure, and year-round heat demands proactive maintenance to protect your investment.
            </p>

            <h3 className="text-xl font-semibold text-[var(--foreground)]">Air conditioning</h3>
            <p>
              AC is a legal requirement for habitability in Florida. Systems run 8-10 months per year and need biannual servicing. In coastal Pinellas, AC condensers corrode faster from salt air — expect 8-10 year lifespans versus 12-15 years inland. Filters should be changed monthly during peak summer months. An AC failure in July is an emergency that must be addressed within 24 hours. Budget $200-$400/year for preventive AC maintenance on coastal properties.
            </p>

            <h3 className="text-xl font-semibold text-[var(--foreground)]">Humidity and mold prevention</h3>
            <p>
              Pinellas County&apos;s average humidity regularly exceeds 75%, especially near the water. Without proper ventilation and AC operation, mold can develop in bathrooms, closets, and behind furniture within days. Regular inspections catch mold early. Properties in older neighborhoods like Old Northeast and Kenwood need extra attention due to older construction that may lack modern moisture barriers.
            </p>

            <h3 className="text-xl font-semibold text-[var(--foreground)]">Hurricane and storm preparedness</h3>
            <p>
              Hurricane season runs June through November. Pinellas County properties need annual roof inspections, trimmed trees, secure gutters, and a clear plan for storm preparation. Barrier island properties must have hurricane shutters or impact windows, and owners should maintain an updated insurance policy with adequate windstorm coverage. Post-storm inspections should happen within 48 hours of the storm passing.
            </p>

            <h3 className="text-xl font-semibold text-[var(--foreground)]">Pest control</h3>
            <p>
              Termites, roaches, ants, and rodents are year-round concerns. Quarterly pest treatment is standard for rental properties. Termite bonds should be maintained and inspected annually. The cost of a termite bond ($200-$400/year) is far less than the cost of structural damage from an untreated infestation.
            </p>

            <h3 className="text-xl font-semibold text-[var(--foreground)]">Exterior maintenance</h3>
            <p>
              Salt air accelerates the deterioration of exterior paint, stucco, wood trim, and metal fixtures. Coastal properties in Pinellas County may need exterior painting every 5-7 years versus 8-10 years inland. Pressure washing 1-2 times per year removes salt buildup and prevents long-term damage.
            </p>

            <p>
              ViVi coordinates all maintenance through Best Bay Services, our dedicated maintenance partner. No third-party markups, faster response times, and quality we stand behind. Learn more about our{" "}
              <Link href="/services" className="text-accent underline hover:no-underline">services</Link>.
            </p>
          </div>
        </div>
      </section>

      {/* ---- Section 7: Tax Benefits ---- */}
      <section id="tax-benefits" className="px-6 py-20 sm:py-28">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-6 text-3xl font-semibold sm:text-4xl">
            7. Tax benefits for Pinellas County rental property owners
          </h2>
          <div className="space-y-5 text-[var(--muted-text)] leading-relaxed">
            <p>
              One of the biggest advantages of owning rental property in Florida is the favorable tax environment. Here are the key benefits Pinellas County landlords should be aware of:
            </p>

            <h3 className="text-xl font-semibold text-[var(--foreground)]">No state income tax</h3>
            <p>
              Florida is one of nine states with no personal income tax. Rental income earned from Pinellas County properties is only subject to federal income tax — not state tax. For out-of-state owners from high-tax states like New York, New Jersey, or Illinois, this is a significant advantage.
            </p>

            <h3 className="text-xl font-semibold text-[var(--foreground)]">Depreciation</h3>
            <p>
              Residential rental property can be depreciated over 27.5 years for federal tax purposes. On a $400,000 Pinellas County home (excluding land value), that could mean roughly $10,000-$12,000 per year in depreciation deductions that reduce your taxable rental income — even though you have not spent a dime.
            </p>

            <h3 className="text-xl font-semibold text-[var(--foreground)]">Deductible expenses</h3>
            <p>
              Nearly every expense related to your rental property is tax-deductible: property management fees, maintenance and repair costs, property taxes, insurance premiums (including flood insurance), mortgage interest, HOA fees, advertising costs, travel to inspect the property, and professional services. ViVi provides year-end 1099 and P&amp;L documents that make tax preparation straightforward.
            </p>

            <h3 className="text-xl font-semibold text-[var(--foreground)]">1031 exchanges</h3>
            <p>
              When you sell an investment property, you can defer capital gains taxes by reinvesting the proceeds into another investment property through a 1031 exchange. This strategy allows Pinellas County investors to build wealth by trading up to higher-value properties without triggering a tax event.
            </p>

            <p>
              This is general information, not tax advice. Consult a qualified tax professional for guidance specific to your situation.
            </p>
          </div>
        </div>
      </section>

      {/* ---- Pinellas County city links ---- */}
      <section className="section-alt px-6 py-20 sm:py-28">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-6 text-3xl font-semibold sm:text-4xl">
            Explore property management by Pinellas County city
          </h2>
          <p className="mb-8 text-[var(--muted-text)] leading-relaxed">
            Each city in Pinellas County has its own rental dynamics, neighborhoods, and tenant profiles. Visit any city page below for detailed local information:
          </p>
          <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            <li>
              <Link href="/areas/st-petersburg" className="text-accent underline hover:no-underline">
                Property Management in St. Petersburg
              </Link>
            </li>
            <li>
              <Link href="/areas/clearwater" className="text-accent underline hover:no-underline">
                Property Management in Clearwater
              </Link>
            </li>
            <li>
              <Link href="/areas/largo" className="text-accent underline hover:no-underline">
                Property Management in Largo
              </Link>
            </li>
            <li>
              <Link href="/areas/dunedin" className="text-accent underline hover:no-underline">
                Property Management in Dunedin
              </Link>
            </li>
            <li>
              <Link href="/areas/seminole" className="text-accent underline hover:no-underline">
                Property Management in Seminole
              </Link>
            </li>
          </ul>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/areas/pinellas-county"
              className="text-accent underline hover:no-underline"
            >
              Pinellas County overview
            </Link>
            <Link href="/services" className="text-accent underline hover:no-underline">
              Our services
            </Link>
            <Link href="/pricing" className="text-accent underline hover:no-underline">
              Pricing details
            </Link>
            <Link href="/owners" className="text-accent underline hover:no-underline">
              For property owners
            </Link>
          </div>
        </div>
      </section>

      {/* ---- FAQ with schema ---- */}
      <section id="faq" className="px-6 py-20 sm:py-28">
        <FAQSchema
          items={faqItems}
          heading="Pinellas County property management FAQ"
        />
      </section>

      {/* ---- Bottom CTA ---- */}
      <section className="gradient-accent px-6 py-20 text-center text-white sm:py-28">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-3xl font-bold sm:text-4xl">
            Own rental property in Pinellas County?
          </h2>
          <p className="mx-auto mt-6 max-w-lg text-lg text-white/80">
            Get a free, no-obligation rental analysis and find out what your property could earn under professional management.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/rental-analysis"
              className="rounded-full bg-white px-10 py-4 text-sm font-semibold text-accent transition-colors hover:bg-white/90"
            >
              Get Your Free Rent Analysis
            </Link>
            <a
              href={`tel:${SITE.phone.replace(/[^0-9+]/g, "")}`}
              className="rounded-full border border-white/30 px-8 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
            >
              Call {SITE.phone}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
