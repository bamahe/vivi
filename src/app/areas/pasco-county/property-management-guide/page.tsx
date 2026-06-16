// ============================================
// Comprehensive Pasco County PM Guide
// Long-form SEO/AEO content targeting
// "property management pasco county"
// and related long-tail keywords
// ============================================

import type { Metadata } from "next";
import Link from "next/link";
import { SITE } from "@/lib/constants";
import { CITIES } from "@/lib/cities";
import Breadcrumbs from "@/components/Breadcrumbs";
import QuickAnswer from "@/components/QuickAnswer";
import FAQSchema from "@/components/FAQSchema";

// Metadata targeting "property management pasco county" and long-tail variants
export const metadata: Metadata = {
  title: "Pasco County PM Guide",
  description:
    "Pasco County PM guide — fastest-growing county in Tampa Bay, new construction management, HOA-heavy communities, average rents by city, and well/septic considerations.",
  openGraph: {
    title: "Pasco County Property Management Guide | ViVi PM",
    description:
      "Comprehensive guide covering Pasco County rental market, new construction management, HOA communities, average rents, well/septic maintenance, and choosing a property manager.",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pasco County Property Management Guide | ViVi PM",
    description:
      "Complete guide to property management in Pasco County — rents, new construction, HOAs, and growth trends.",
  },
  alternates: { canonical: "/areas/pasco-county/property-management-guide" },
};

export default function PascoPMGuidePage() {
  // Get Pasco County cities for the rent table
  const countyCities = CITIES.filter(
    (c) => c.county === "Pasco County"
  );

  // Breadcrumb navigation items
  const breadcrumbItems = [
    { name: "Home", href: "/" },
    { name: "Areas", href: "/areas" },
    { name: "Pasco County", href: "/areas/pasco-county" },
    { name: "Property Management Guide", href: "/areas/pasco-county/property-management-guide" },
  ];

  // FAQ items for this guide page — 8 questions targeting long-tail searches
  const faqItems = [
    {
      question: "What is the average property management fee in Pasco County?",
      answer:
        "Most Pasco County property management companies charge between 8% and 12% of monthly rent collected. Additional fees may include a leasing or placement fee (typically 50-100% of one month's rent), a setup fee ($200-$500), and a lease renewal fee ($150-$300). ViVi Property Management offers three plans — Lease &amp; List (placement only), Standard at 10% of rent, or Peace of Mind at $299/month flat — with no vacancy fees and $0 maintenance markup through Best Bay Services.",
    },
    {
      question: "What should I know about managing new construction rentals in Pasco County?",
      answer:
        "New construction rentals in Pasco County — common in Wesley Chapel, Land O' Lakes, and Zephyrhills — come with builder warranties (typically 1-year workmanship, 2-year mechanical, 10-year structural). A property manager should coordinate warranty claims before they expire, handle HOA lease approval processes, manage CDD assessments, and ensure the property is maintained to builder standards. New homes also need irrigation system setup, pest prevention from day one, and careful documentation of move-in condition.",
    },
    {
      question: "How do HOA communities affect rental property management in Pasco County?",
      answer:
        "The majority of newer Pasco County communities — Epperson, Bexley, Connerton, Wilderness Lake Preserve — have HOAs with specific lease restrictions. Common requirements include minimum lease terms (usually 12 months), tenant background checks, HOA application fees ($100-$300), and limits on the number of rental properties in the community. Some HOAs restrict rentals to a percentage of total homes. A property manager experienced with Pasco County HOAs navigates these requirements as part of the standard management process.",
    },
    {
      question: "What is the average rent in Pasco County by city?",
      answer:
        "Average single-family rents in Pasco County range from $1,600 in Zephyrhills to $2,200 in Wesley Chapel. Wesley Chapel averages $2,200, Land O' Lakes $2,100, New Port Richey $1,700, and Zephyrhills $1,600. Actual rents depend on property size, condition, community amenities, and proximity to I-75 or the Suncoast Parkway.",
    },
    {
      question: "What are the well water and septic system considerations for Pasco County rentals?",
      answer:
        "Many properties in east and north Pasco County — particularly in Zephyrhills, Dade City, and rural areas — use well water and septic systems instead of county utilities. Well systems need annual water quality testing, pressure tank maintenance, and occasional pump replacement ($800-$1,500). Septic systems require pumping every 3-5 years ($300-$500), and drain field issues can cost $3,000-$15,000 to repair. A property manager experienced with these systems schedules preventive maintenance and educates tenants on proper use.",
    },
    {
      question: "Is Pasco County a good market for rental property investment?",
      answer:
        "Pasco County is one of the fastest-growing counties in Florida. Wesley Chapel and Land O' Lakes have seen explosive population growth as families and professionals move north from Hillsborough County. New construction provides lower-maintenance rental stock, and rents have climbed steadily as demand outpaces supply. Cash flow is strongest in Zephyrhills and New Port Richey, while Wesley Chapel and Land O' Lakes offer appreciation potential with solid rents.",
    },
    {
      question: "How long does it take to lease a rental property in Pasco County?",
      answer:
        "Well-priced, well-marketed Pasco County rental properties typically lease within 14-21 days. Wesley Chapel and Land O' Lakes lease fastest due to high demand from families relocating to the area. Zephyrhills and New Port Richey may take slightly longer due to smaller tenant pools. Professional marketing — HDR photography, MLS syndication, and distribution across 200+ rental sites — significantly reduces time on market.",
    },
    {
      question: "What CDD fees should Pasco County landlords know about?",
      answer:
        "Many newer Pasco County communities have Community Development District (CDD) assessments in addition to HOA fees. CDDs fund infrastructure — roads, utilities, parks, and amenity centers — and are billed on the annual property tax statement. CDD assessments in Pasco County typically range from $1,500 to $4,000 per year. These are the owner's responsibility (not the tenant's) and should be factored into your rental pro forma. Some communities have both CDD and HOA fees, which can add $300-$600/month to ownership costs.",
    },
  ];

  // JSON-LD: Article schema for the guide
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Complete Guide to Property Management in Pasco County, FL",
    description:
      "Comprehensive guide for landlords covering Pasco County rental market, new construction management, HOA communities, average rents by city, well/septic considerations, and choosing a property manager in Florida's fastest-growing county.",
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
      "@id": "https://vivipm.com/areas/pasco-county/property-management-guide",
    },
    about: {
      "@type": "Thing",
      name: "Property Management in Pasco County",
    },
  };

  // JSON-LD: Speakable schema for voice assistants
  const speakableSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Complete Guide to Property Management in Pasco County, FL",
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: [
        ".quick-answer-question",
        ".quick-answer-text",
      ],
    },
    url: "https://vivipm.com/areas/pasco-county/property-management-guide",
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
            Complete Guide to Property Management in Pasco County, FL
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lg font-light leading-relaxed text-white/80">
            Everything you need to know about managing rental property in Pasco County — from new construction and HOA communities to average rents, growth trends, and maximizing your return.
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
          question="What should landlords know about property management in Pasco County?"
          answer={`Pasco County is one of the fastest-growing counties in Florida, with new master-planned communities transforming Wesley Chapel, Land O' Lakes, and surrounding areas. Median single-family rents range from $1,600 to $2,200 depending on city. Most newer communities have HOAs with lease restrictions that require careful navigation. Professional property management typically costs 8-12% of rent collected. ViVi Property Management serves all Pasco County cities. Call ${SITE.phone}.`}
        />
      </section>

      {/* ---- Table of Contents ---- */}
      <section className="px-6 py-10">
        <div className="mx-auto max-w-3xl">
          <nav className="card p-6">
            <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-[var(--muted-text)]">In this guide</p>
            <ol className="grid gap-2 text-sm sm:grid-cols-2">
              <li><a href="#rental-market" className="text-accent hover:underline">1. Pasco County rental market overview</a></li>
              <li><a href="#new-construction" className="text-accent hover:underline">2. Managing new construction rentals</a></li>
              <li><a href="#average-rents" className="text-accent hover:underline">3. Average rents by city</a></li>
              <li><a href="#hoa-cdd" className="text-accent hover:underline">4. HOA and CDD considerations</a></li>
              <li><a href="#well-septic" className="text-accent hover:underline">5. Well water and septic systems</a></li>
              <li><a href="#choosing-pm" className="text-accent hover:underline">6. How to choose a property manager</a></li>
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
            1. Pasco County rental market overview
          </h2>
          <div className="space-y-5 text-[var(--muted-text)] leading-relaxed">
            <p>
              Pasco County is the fastest-growing county in the Tampa Bay metro area by percentage, and one of the fastest in Florida. The county&apos;s population has surged as families and professionals move north from Hillsborough County in search of newer homes, more space, and lower costs. Wesley Chapel alone has grown from a rural crossroads to a suburban powerhouse with over 65,000 residents.
            </p>
            <p>
              The growth engine is straightforward: Pasco County offers new construction at prices below equivalent homes in Hillsborough County, with easy I-75 and Suncoast Parkway access to Tampa employment centers. Major employers within Pasco include AdventHealth Wesley Chapel, Florida Hospital Center Ice (now AdventHealth Center Ice), the Pasco County school system, and a growing retail and healthcare corridor along SR-54 and SR-56.
            </p>
            <p>
              Wesley Chapel and Land O&apos; Lakes dominate the premium rental market. Master-planned communities like Epperson, Bexley, Connerton, and Seven Oaks attract families relocating to Tampa Bay who rent while exploring the area before buying. These communities offer resort-style amenities — pools, fitness centers, playgrounds, and trails — that command premium rents. Tenants in these communities tend to be higher-income professionals with excellent credit profiles.
            </p>
            <p>
              New Port Richey and Zephyrhills serve a different segment. New Port Richey&apos;s affordable coastal market attracts retirees and cost-conscious tenants, while Zephyrhills&apos; small-town character and natural springs draw families and outdoor enthusiasts. For investors, these markets offer stronger cash-on-cash returns at lower acquisition costs, though the tenant pool requires more careful screening.
            </p>
          </div>
        </div>
      </section>

      {/* ---- Section 2: Managing New Construction Rentals ---- */}
      <section id="new-construction" className="section-alt px-6 py-20 sm:py-28">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-6 text-3xl font-semibold sm:text-4xl">
            2. Managing new construction rentals in Pasco County
          </h2>
          <div className="space-y-5 text-[var(--muted-text)] leading-relaxed">
            <p>
              A significant percentage of Pasco County&apos;s rental inventory consists of homes built within the last 10 years. New construction creates specific management opportunities and challenges that differ from older housing stock.
            </p>

            <h3 className="text-xl font-semibold text-[var(--foreground)]">Builder warranty management</h3>
            <p>
              New homes typically come with tiered warranties: 1-year workmanship, 2-year mechanical (plumbing, electrical, HVAC), and 10-year structural. A property manager should document all warranty terms at closing, schedule the 11-month walkthrough before the first-year warranty expires, and coordinate warranty claims with the builder. Missing the warranty window means paying out of pocket for items the builder would have fixed for free.
            </p>

            <h3 className="text-xl font-semibold text-[var(--foreground)]">Initial property setup</h3>
            <p>
              New construction homes need setup that builders don&apos;t always complete: irrigation system programming, garage door opener configuration, smart home device setup, and landscaping establishment. Tenants moving into a new home expect everything to work perfectly on day one. A property manager handles this setup before the tenant&apos;s move-in date.
            </p>

            <h3 className="text-xl font-semibold text-[var(--foreground)]">HOA compliance from day one</h3>
            <p>
              Nearly every new Pasco County community has an HOA with specific rental restrictions. The lease approval process can take 2-4 weeks, and some HOAs require tenants to attend an orientation. Starting the HOA approval process before the property is even listed can save weeks of vacancy.
            </p>

            <h3 className="text-xl font-semibold text-[var(--foreground)]">Lower maintenance, higher expectations</h3>
            <p>
              New construction means fewer maintenance issues in the early years — no aging roof, no failing AC, no outdated plumbing. But tenants in new homes have higher expectations. A scuff on the wall or a squeaky door that would go unnoticed in a 1990s home becomes a maintenance request in a 2024 build. Setting clear expectations in the lease about cosmetic wear-and-tear is essential.
            </p>
          </div>
        </div>
      </section>

      {/* ---- Section 3: Average Rents by City ---- */}
      <section id="average-rents" className="px-6 py-20 sm:py-28">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-6 text-3xl font-semibold sm:text-4xl">
            3. Average rents by city in Pasco County
          </h2>
          <p className="mb-8 text-[var(--muted-text)] leading-relaxed">
            Rents across Pasco County vary significantly by city, community, and proximity to I-75 or the Suncoast Parkway. The table below shows median single-family rental rates for each city we serve. These figures represent typical 3-bedroom, 2-bathroom single-family homes in average condition.
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
              <strong className="text-[var(--foreground)]">Highest rents:</strong> Wesley Chapel ($2,200 median) commands the top rents in Pasco County, driven by new construction, resort-style amenities, and proximity to I-75 for Tampa commuters. Land O&apos; Lakes ($2,100) follows closely with similar demographics and newer housing stock.
            </p>
            <p>
              <strong className="text-[var(--foreground)]">Best cash flow:</strong> Zephyrhills ($1,600 median rent, $270,000 median home price) and New Port Richey ($1,700 median rent, $280,000 median home price) offer the strongest cash-on-cash returns in the county. Lower acquisition costs create favorable rent-to-price ratios for cash flow investors.
            </p>
            <p>
              <strong className="text-[var(--foreground)]">Growth markets:</strong> Wesley Chapel and Land O&apos; Lakes are appreciation plays with solid current rents. Population growth, new retail, and improving infrastructure continue to push property values and rents upward. These markets offer both income and equity growth for patient investors.
            </p>
          </div>
        </div>
      </section>

      {/* ---- Section 4: HOA and CDD Considerations ---- */}
      <section id="hoa-cdd" className="section-alt px-6 py-20 sm:py-28">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-6 text-3xl font-semibold sm:text-4xl">
            4. HOA and CDD considerations for Pasco County landlords
          </h2>
          <div className="space-y-5 text-[var(--muted-text)] leading-relaxed">
            <p>
              Pasco County has one of the highest concentrations of HOA-governed communities in the Tampa Bay metro. If your rental property is in a master-planned community — and most newer Pasco County properties are — understanding HOA and CDD requirements is essential.
            </p>

            <h3 className="text-xl font-semibold text-[var(--foreground)]">HOA lease restrictions</h3>
            <p>
              Most Pasco County HOAs require landlords to submit a lease application before a tenant can move in. Common requirements include a minimum 12-month lease term, tenant background check results, a completed HOA application, and an application fee ($100-$300). Some communities cap the percentage of homes that can be rented — if the cap is reached, you cannot lease your property until a rental slot opens up. Check your HOA documents before purchasing an investment property.
            </p>

            <h3 className="text-xl font-semibold text-[var(--foreground)]">CDD assessments</h3>
            <p>
              Community Development Districts (CDDs) are common in newer Pasco County communities. CDDs issue bonds to fund infrastructure — roads, water and sewer lines, parks, amenity centers — and the bond repayment appears as a non-ad valorem assessment on your annual property tax bill. CDD assessments in Pasco County typically range from $1,500 to $4,000 per year. These are the owner&apos;s cost, not the tenant&apos;s, and must be factored into your rental income projections.
            </p>

            <h3 className="text-xl font-semibold text-[var(--foreground)]">Architectural guidelines</h3>
            <p>
              HOAs in communities like Epperson, Bexley, and Connerton enforce architectural guidelines covering exterior paint colors, landscaping standards, fence types, parking rules, and holiday decorations. Violations result in fines that the owner — not the tenant — must pay. A property manager ensures your tenants understand and comply with community rules, preventing costly violations.
            </p>

            <h3 className="text-xl font-semibold text-[var(--foreground)]">ViVi handles it all</h3>
            <p>
              ViVi Property Management navigates the HOA lease approval process, monitors tenant compliance with community rules, and handles any violation notices on your behalf. We maintain relationships with HOA management companies throughout Pasco County and know the specific requirements for each community. This is included in our standard management service at no extra charge.
            </p>
          </div>
        </div>
      </section>

      {/* ---- Section 5: Well Water and Septic Systems ---- */}
      <section id="well-septic" className="px-6 py-20 sm:py-28">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-6 text-3xl font-semibold sm:text-4xl">
            5. Well water and septic system management in Pasco County
          </h2>
          <div className="space-y-5 text-[var(--muted-text)] leading-relaxed">
            <p>
              While Wesley Chapel and Land O&apos; Lakes are mostly on county water and sewer, many properties in east and north Pasco County — Zephyrhills, Dade City, and rural areas — rely on private well water and septic systems. These systems require different maintenance knowledge than city utilities.
            </p>

            <h3 className="text-xl font-semibold text-[var(--foreground)]">Well water systems</h3>
            <p>
              Private wells in Pasco County tap into the Floridan Aquifer. Annual water quality testing is recommended — and may be required by your insurance or lender. Common issues include sulfur smell (hydrogen sulfide), iron staining, and hard water that deposits mineral scale on fixtures. Well pumps typically last 8-15 years, and replacement costs $800-$1,500. Pressure tanks need periodic maintenance to maintain consistent water pressure.
            </p>

            <h3 className="text-xl font-semibold text-[var(--foreground)]">Septic systems</h3>
            <p>
              Septic systems require pumping every 3-5 years ($300-$500 per pump). Tenants must be educated on what not to flush or pour down drains — grease, wipes, feminine products, and excessive chemicals can damage the system. Drain field failure is the most expensive septic issue, costing $3,000-$15,000 to repair or replace. Regular pumping and proper use extend the system&apos;s lifespan by decades.
            </p>

            <h3 className="text-xl font-semibold text-[var(--foreground)]">Tenant education</h3>
            <p>
              Many tenants — especially those relocating from areas with municipal water and sewer — have never lived with well water or septic. A property manager provides clear instructions at move-in covering water conservation, septic do&apos;s and don&apos;ts, and how to report issues. This education prevents the majority of well and septic problems.
            </p>

            <p>
              ViVi&apos;s maintenance partner Best Bay Services has experience with well and septic systems throughout Pasco County. We schedule preventive maintenance and handle repairs without third-party markups.
            </p>
          </div>
        </div>
      </section>

      {/* ---- Section 6: How to Choose a PM ---- */}
      <section id="choosing-pm" className="section-alt px-6 py-20 sm:py-28">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-6 text-3xl font-semibold sm:text-4xl">
            6. How to choose a property manager in Pasco County
          </h2>
          <div className="space-y-5 text-[var(--muted-text)] leading-relaxed">
            <p>
              Pasco County&apos;s rapid growth has attracted property management companies from across the Tampa Bay area. Not all of them understand the county&apos;s unique dynamics — new construction, HOA complexity, and the mix of suburban and rural properties. Here is what to evaluate:
            </p>

            <h3 className="text-xl font-semibold text-[var(--foreground)]">Licensing and credentials</h3>
            <p>
              Florida law requires anyone managing property for others to hold a real estate license. Verify that the company is licensed through the Florida Department of Business and Professional Regulation (DBPR). A broker-level license indicates a higher level of experience and legal accountability.
            </p>

            <h3 className="text-xl font-semibold text-[var(--foreground)]">HOA experience</h3>
            <p>
              Ask how many HOA-governed properties the company manages in Pasco County. Do they know the lease approval process for Epperson? Bexley? Connerton? A manager without HOA experience will slow your leasing process and may miss compliance requirements that result in fines.
            </p>

            <h3 className="text-xl font-semibold text-[var(--foreground)]">Fee transparency</h3>
            <p>
              Ask for a complete fee schedule in writing. Common fees include the monthly management percentage (8-12%), leasing or placement fee, setup fee, lease renewal fee, and maintenance markups. ViVi&apos;s fee structure is fully transparent — see our{" "}
              <Link href="/pricing" className="text-accent underline hover:no-underline">pricing page</Link>{" "}
              for a complete breakdown.
            </p>

            <h3 className="text-xl font-semibold text-[var(--foreground)]">Maintenance approach</h3>
            <p>
              How does the company handle repairs? Many property managers outsource to third-party vendors with 10-20% markups. ViVi coordinates all maintenance through Best Bay Services — our dedicated maintenance partner — with no markup on repair costs.
            </p>

            <h3 className="text-xl font-semibold text-[var(--foreground)]">Questions to ask</h3>
            <ul className="list-disc space-y-2 pl-5">
              <li>How many properties do you currently manage in Pasco County?</li>
              <li>Do you have experience with HOA lease approvals in Wesley Chapel and Land O&apos; Lakes communities?</li>
              <li>How do you handle builder warranty coordination for new construction?</li>
              <li>What is your average vacancy rate and time-to-lease?</li>
              <li>Do you manage properties with well water and septic systems?</li>
              <li>Do you charge vacancy fees or maintenance markups?</li>
              <li>Can I see a sample owner statement?</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ---- Section 7: Tax Benefits ---- */}
      <section id="tax-benefits" className="px-6 py-20 sm:py-28">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-6 text-3xl font-semibold sm:text-4xl">
            7. Tax benefits for Pasco County rental property owners
          </h2>
          <div className="space-y-5 text-[var(--muted-text)] leading-relaxed">
            <p>
              One of the biggest advantages of owning rental property in Florida is the favorable tax environment. Here are the key benefits Pasco County landlords should be aware of:
            </p>

            <h3 className="text-xl font-semibold text-[var(--foreground)]">No state income tax</h3>
            <p>
              Florida is one of nine states with no personal income tax. Rental income earned from Pasco County properties is only subject to federal income tax — not state tax. For out-of-state investors, this is a significant advantage over states like California, New York, or Illinois.
            </p>

            <h3 className="text-xl font-semibold text-[var(--foreground)]">Depreciation</h3>
            <p>
              Residential rental property can be depreciated over 27.5 years for federal tax purposes. On a $420,000 Wesley Chapel home (excluding land value), that could mean roughly $10,000-$13,000 per year in depreciation deductions that reduce your taxable rental income.
            </p>

            <h3 className="text-xl font-semibold text-[var(--foreground)]">Deductible expenses</h3>
            <p>
              Nearly every expense related to your rental property is tax-deductible: property management fees, maintenance and repair costs, property taxes, insurance premiums, mortgage interest, HOA fees, CDD assessments, advertising costs, and professional services. ViVi provides year-end 1099 and P&amp;L documents that make tax preparation straightforward.
            </p>

            <h3 className="text-xl font-semibold text-[var(--foreground)]">1031 exchanges</h3>
            <p>
              When you sell an investment property, you can defer capital gains taxes by reinvesting the proceeds into another investment property through a 1031 exchange. Many Pasco County investors use this strategy to trade up from cash-flow properties in Zephyrhills to appreciation-focused properties in Wesley Chapel.
            </p>

            <p>
              This is general information, not tax advice. Consult a qualified tax professional for guidance specific to your situation.
            </p>
          </div>
        </div>
      </section>

      {/* ---- Pasco County city links ---- */}
      <section className="section-alt px-6 py-20 sm:py-28">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-6 text-3xl font-semibold sm:text-4xl">
            Explore property management by Pasco County city
          </h2>
          <p className="mb-8 text-[var(--muted-text)] leading-relaxed">
            Each city in Pasco County has its own rental dynamics, neighborhoods, and tenant profiles. Visit any city page below for detailed local information:
          </p>
          <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            <li>
              <Link href="/areas/wesley-chapel" className="text-accent underline hover:no-underline">
                Property Management in Wesley Chapel
              </Link>
            </li>
            <li>
              <Link href="/areas/land-o-lakes" className="text-accent underline hover:no-underline">
                Property Management in Land O&apos; Lakes
              </Link>
            </li>
            <li>
              <Link href="/areas/new-port-richey" className="text-accent underline hover:no-underline">
                Property Management in New Port Richey
              </Link>
            </li>
            <li>
              <Link href="/areas/zephyrhills" className="text-accent underline hover:no-underline">
                Property Management in Zephyrhills
              </Link>
            </li>
          </ul>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/areas/pasco-county"
              className="text-accent underline hover:no-underline"
            >
              Pasco County overview
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
          heading="Pasco County property management FAQ"
        />
      </section>

      {/* ---- Bottom CTA ---- */}
      <section className="gradient-accent px-6 py-20 text-center text-white sm:py-28">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-3xl font-bold sm:text-4xl">
            Own rental property in Pasco County?
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
