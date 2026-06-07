// ============================================
// Comprehensive Hillsborough County PM Guide
// Long-form SEO/AEO content targeting
// "property management hillsborough county"
// and related long-tail keywords
// ============================================

import type { Metadata } from "next";
import Link from "next/link";
import { SITE } from "@/lib/constants";
import { CITIES } from "@/lib/cities";
import Breadcrumbs from "@/components/Breadcrumbs";
import QuickAnswer from "@/components/QuickAnswer";
import FAQSchema from "@/components/FAQSchema";

// Metadata targeting "property management hillsborough county" and long-tail variants
export const metadata: Metadata = {
  title: "Hillsborough County PM Guide",
  description:
    "Hillsborough County PM guide — rental market data, landlord-tenant law, average rents by city, choosing a manager, and tax benefits.",
  openGraph: {
    title: "Hillsborough County Property Management Guide | ViVi PM",
    description:
      "Comprehensive guide covering Hillsborough County rental market, landlord-tenant law, average rents, choosing a PM, Florida climate maintenance, and tax benefits for rental property owners.",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hillsborough County Property Management Guide | ViVi PM",
    description:
      "Complete guide to property management in Hillsborough County — rents, laws, maintenance tips, and tax benefits.",
  },
  alternates: { canonical: "/areas/hillsborough-county/property-management-guide" },
};

export default function HillsboroughPMGuidePage() {
  // Get Hillsborough County cities for the rent table
  const countyCities = CITIES.filter(
    (c) => c.county === "Hillsborough County"
  );

  // Breadcrumb navigation items
  const breadcrumbItems = [
    { name: "Home", href: "/" },
    { name: "Areas", href: "/areas" },
    { name: "Hillsborough County", href: "/areas/hillsborough-county" },
    { name: "Property Management Guide", href: "/areas/hillsborough-county/property-management-guide" },
  ];

  // FAQ items for this guide page — 10 questions targeting long-tail searches
  const faqItems = [
    {
      question: "What is the average property management fee in Hillsborough County?",
      answer:
        "Most Hillsborough County property management companies charge between 8% and 12% of monthly rent collected. Additional fees may include a leasing or placement fee (typically 50-100% of one month's rent), a setup fee ($200-$500), and a lease renewal fee ($150-$300). ViVi Property Management charges 8-12% with no vacancy fees and no maintenance markups.",
    },
    {
      question: "What are a landlord's legal obligations in Hillsborough County?",
      answer:
        "Hillsborough County landlords must comply with Florida Statutes Chapter 83 (Florida Residential Landlord and Tenant Act). Key obligations include maintaining the property in habitable condition, providing reasonable notice before entry (12 hours minimum), properly handling security deposits in a separate account, following legal eviction procedures through the court system, and complying with fair housing laws at the federal, state, and local level.",
    },
    {
      question: "How long does it take to evict a tenant in Hillsborough County?",
      answer:
        "The eviction timeline in Hillsborough County typically runs 3-6 weeks from the initial notice to possession, assuming the tenant does not contest. A 3-day notice for nonpayment is served first. If the tenant does not pay or vacate, the landlord files an eviction complaint with the Hillsborough County Clerk of Court. If contested, the process can take 2-3 months. Having a property manager who screens thoroughly significantly reduces eviction risk.",
    },
    {
      question: "What is the average rent in Hillsborough County by city?",
      answer:
        "Average single-family rents in Hillsborough County range from $1,750 in Plant City to $2,400 in Lithia. Tampa averages $2,100, Brandon $1,950, Valrico $2,100, Riverview $2,000, Apollo Beach $2,300, Seffner $1,800, and Temple Terrace $1,900. Actual rents depend on property size, condition, neighborhood, and amenities.",
    },
    {
      question: "How do I choose a property manager in Hillsborough County?",
      answer:
        "Look for a licensed Florida real estate broker or firm, transparent fee structure with no hidden charges, local market knowledge specific to Hillsborough County, an in-house or dedicated maintenance solution, comprehensive tenant screening, technology (owner portal, online rent payment), and strong reviews from current clients. Ask how many properties they manage, their average vacancy rate, and their average time-to-lease.",
    },
    {
      question: "Do I need a property manager if I only have one rental?",
      answer:
        "You are not legally required to hire one, but a single vacant month or a bad tenant can cost you thousands. Professional management typically costs 8-12% of rent collected — roughly $170-$250/month on a $2,100 rental. If that saves you even one month of vacancy per year, the management fee has already paid for itself. Most single-property owners find the time savings and legal protection well worth the cost.",
    },
    {
      question: "What maintenance issues are common in Hillsborough County rentals?",
      answer:
        "Florida's climate creates specific maintenance challenges: AC systems work year-round and need biannual servicing, humidity drives mold and mildew that must be addressed quickly, summer storms can damage roofs and cause water intrusion, irrigation systems need seasonal adjustment, and pest control (especially termites and roaches) requires ongoing treatment. Properties near the coast — like Apollo Beach — also deal with salt air corrosion.",
    },
    {
      question: "What tax benefits do Hillsborough County rental property owners get?",
      answer:
        "Florida has no state income tax, which benefits rental property owners. Federal tax benefits include depreciation deductions (typically over 27.5 years for residential property), deductions for management fees, maintenance, insurance, property taxes, and mortgage interest, and the ability to defer capital gains through 1031 exchanges. Consult a tax professional for advice specific to your situation.",
    },
    {
      question: "Can I manage my Hillsborough County rental from out of state?",
      answer:
        "You can, but it is difficult. Florida landlord-tenant law has specific notice requirements, eviction procedures, and security deposit rules that must be followed precisely. Maintenance emergencies — especially AC failures in Florida summer heat — require immediate response. Most out-of-state owners find that hiring a local Hillsborough County property manager saves time, reduces legal risk, and protects their investment.",
    },
    {
      question: "What is the vacancy rate in Hillsborough County?",
      answer:
        "Well-priced, well-maintained rental properties in Hillsborough County typically experience vacancy rates under 5%. ViVi-managed properties average less than 14 days on market. The key factors are accurate pricing from day one, professional marketing with HDR photography and 3D tours, and MLS syndication to 15,000+ local agents. Overpriced properties in any market will sit.",
    },
  ];

  // JSON-LD: Article schema for the guide
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Complete Guide to Property Management in Hillsborough County, FL",
    description:
      "Comprehensive guide for landlords covering Hillsborough County rental market, Florida landlord-tenant law, average rents by city, choosing a property manager, maintenance for Florida climate, and tax benefits.",
    author: {
      "@type": "Person",
      name: "Barrett Henry",
      jobTitle: "Broker Associate, REALTOR®",
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
    datePublished: "2026-06-04",
    dateModified: "2026-06-04",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": "https://vivipm.com/areas/hillsborough-county/property-management-guide",
    },
    about: {
      "@type": "Thing",
      name: "Property Management in Hillsborough County",
    },
  };

  // JSON-LD: Speakable schema for voice assistants
  const speakableSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Complete Guide to Property Management in Hillsborough County, FL",
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: [
        ".quick-answer-question",
        ".quick-answer-text",
      ],
    },
    url: "https://vivipm.com/areas/hillsborough-county/property-management-guide",
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
            Complete Guide to Property Management in Hillsborough County, FL
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lg font-light leading-relaxed text-white/80">
            Everything you need to know about managing rental property in Hillsborough County — from landlord-tenant law to average rents, choosing a PM, and maximizing your return.
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
          question="What should landlords know about property management in Hillsborough County?"
          answer={`Hillsborough County is one of Florida's strongest rental markets, with median single-family rents from $1,750 to $2,400 depending on city. Professional property management typically costs 8–12% of rent collected. Florida law (Chapter 83) governs landlord-tenant relationships including security deposits, eviction procedures, and maintenance obligations. ViVi Property Management serves all 9 Hillsborough County cities. Call ${SITE.phone}.`}
        />
      </section>

      {/* ---- Table of Contents ---- */}
      <section className="px-6 py-10">
        <div className="mx-auto max-w-3xl">
          <nav className="card p-6">
            <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-[var(--muted-text)]">In this guide</p>
            <ol className="grid gap-2 text-sm sm:grid-cols-2">
              <li><a href="#rental-market" className="text-accent hover:underline">1. Hillsborough County rental market overview</a></li>
              <li><a href="#landlord-tenant-law" className="text-accent hover:underline">2. Florida landlord-tenant law basics</a></li>
              <li><a href="#average-rents" className="text-accent hover:underline">3. Average rents by city</a></li>
              <li><a href="#choosing-pm" className="text-accent hover:underline">4. How to choose a property manager</a></li>
              <li><a href="#maintenance" className="text-accent hover:underline">5. Maintenance for Florida climate</a></li>
              <li><a href="#tax-benefits" className="text-accent hover:underline">6. Tax benefits for rental owners</a></li>
              <li><a href="#faq" className="text-accent hover:underline">7. Frequently asked questions</a></li>
            </ol>
          </nav>
        </div>
      </section>

      {/* ---- Section 1: Rental Market Overview ---- */}
      <section id="rental-market" className="px-6 py-20 sm:py-28">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-6 text-3xl font-semibold sm:text-4xl">
            1. Hillsborough County rental market overview
          </h2>
          <div className="space-y-5 text-[var(--muted-text)] leading-relaxed">
            <p>
              Hillsborough County is the largest county in the Tampa Bay metro area by both population and economic output. With over 1.5 million residents and consistent year-over-year growth, the county&apos;s rental market is driven by fundamentals that matter to investors: jobs, population growth, and housing demand that outpaces supply.
            </p>
            <p>
              Tampa serves as the county&apos;s economic anchor. Major employers include the University of South Florida (USF) with over 50,000 students, Tampa General Hospital, MacDill Air Force Base, Raymond James Financial, USAA, Citigroup, and a rapidly expanding technology corridor along the Westshore district and Water Street. These employers create a diverse tenant pool — military families, healthcare professionals, university staff, finance workers, and tech employees — which insulates the rental market from downturns in any single industry.
            </p>
            <p>
              East Hillsborough County — Brandon, Valrico, and Riverview — attracts families relocating for Hillsborough County&apos;s public school system. Newsome High School, Bloomingdale High School, and the FishHawk-area elementary schools consistently rank among the county&apos;s best, which drives strong rental demand and longer average lease terms (2-3+ years for family tenants). South Hillsborough — particularly Apollo Beach — offers waterfront living and premium rents. Plant City, on the eastern edge, provides the strongest cash-on-cash returns for investors focused on cash flow.
            </p>
            <p>
              Vacancy rates across Hillsborough County hover below 5% for well-priced properties. Population growth continues to outpace new housing construction, and major infrastructure investments — including Water Street Tampa, the Westshore Marina District, and Selmon Expressway expansion — are drawing additional residents and employers into the county. For rental property owners and investors, Hillsborough County remains one of the strongest markets in Florida.
            </p>
          </div>
        </div>
      </section>

      {/* ---- Section 2: Landlord-Tenant Law ---- */}
      <section id="landlord-tenant-law" className="section-alt px-6 py-20 sm:py-28">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-6 text-3xl font-semibold sm:text-4xl">
            2. Florida landlord-tenant law basics for Hillsborough County
          </h2>
          <div className="space-y-5 text-[var(--muted-text)] leading-relaxed">
            <p>
              All residential rental properties in Hillsborough County are governed by <strong>Florida Statutes Chapter 83</strong> — the Florida Residential Landlord and Tenant Act. Understanding these requirements is essential whether you self-manage or hire a property manager. Violations can result in fines, lost lawsuits, and delayed evictions.
            </p>

            <h3 className="text-xl font-semibold text-[var(--foreground)]">Security deposits</h3>
            <p>
              Florida law requires landlords to hold security deposits in a separate account — either a non-interest-bearing account, an interest-bearing account (with annual interest paid to the tenant), or a surety bond. Within 30 days of receiving the deposit, the landlord must notify the tenant in writing of how and where the deposit is held. After move-out, landlords have 15 days to return the full deposit if no claim is made, or 30 days to provide written notice of intent to claim against the deposit.
            </p>

            <h3 className="text-xl font-semibold text-[var(--foreground)]">Notice requirements</h3>
            <p>
              Landlords must provide at least 12 hours&apos; notice before entering a rental unit, and entry must be at a reasonable time. Exceptions exist for emergencies. For lease termination on a month-to-month tenancy, 15 days&apos; written notice is required. For nonpayment of rent, a 3-day notice (excluding weekends and legal holidays) must be served before filing for eviction.
            </p>

            <h3 className="text-xl font-semibold text-[var(--foreground)]">Eviction process</h3>
            <p>
              Florida is a judicial eviction state — landlords cannot change locks, shut off utilities, or remove tenant belongings without a court order. The process begins with a 3-day notice for nonpayment (or a 7-day notice for lease violations). If the tenant does not comply, the landlord files an eviction complaint with the Hillsborough County Clerk of Court. If uncontested, a default judgment can be obtained in 5-7 business days. Contested evictions typically resolve within 2-3 months.
            </p>

            <h3 className="text-xl font-semibold text-[var(--foreground)]">Fair housing compliance</h3>
            <p>
              Hillsborough County landlords must comply with the federal Fair Housing Act, Florida Fair Housing Act, and local Hillsborough County human rights ordinances. Protected classes include race, color, religion, sex, national origin, familial status, disability, and — under local ordinance — additional categories. All advertising, screening, and lease terms must be applied uniformly. A professional property manager ensures compliance across all these layers.
            </p>

            <p>
              This is not legal advice. Consult a Florida real estate attorney for guidance specific to your situation. ViVi Property Management uses attorney-drafted Florida leases and follows all applicable landlord-tenant law as part of our standard management service.
            </p>
          </div>
        </div>
      </section>

      {/* ---- Section 3: Average Rents by City ---- */}
      <section id="average-rents" className="px-6 py-20 sm:py-28">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-6 text-3xl font-semibold sm:text-4xl">
            3. Average rents by city in Hillsborough County
          </h2>
          <p className="mb-8 text-[var(--muted-text)] leading-relaxed">
            Rents across Hillsborough County vary significantly by city, neighborhood, property size, and condition. The table below shows median single-family rental rates for each city we serve. These figures represent typical 3-bedroom, 2-bathroom single-family homes in average condition.
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
              <strong className="text-[var(--foreground)]">Highest rents:</strong> Lithia ($2,400 median) and Apollo Beach ($2,300 median) command the top rents in the county. Lithia attracts families willing to pay for FishHawk Ranch and Newsome High School zoning. Apollo Beach premiums are driven by waterfront access and canal-front living.
            </p>
            <p>
              <strong className="text-[var(--foreground)]">Best cash flow:</strong> Plant City ($1,750 median rent, $320,000 median home price) and Seffner ($1,800 median rent, $330,000 median home price) offer the strongest cash-on-cash returns for investors focused on monthly income. Lower acquisition costs mean better ratios even at lower rent points.
            </p>
            <p>
              <strong className="text-[var(--foreground)]">Balanced markets:</strong> Tampa ($2,100), Brandon ($1,950), Valrico ($2,100), and Riverview ($2,000) sit in the sweet spot — strong rents, deep tenant pools, and moderate entry prices. These are the most liquid rental markets in the county for both leasing speed and eventual resale.
            </p>
          </div>
        </div>
      </section>

      {/* ---- Section 4: How to Choose a PM ---- */}
      <section id="choosing-pm" className="section-alt px-6 py-20 sm:py-28">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-6 text-3xl font-semibold sm:text-4xl">
            4. How to choose a property manager in Hillsborough County
          </h2>
          <div className="space-y-5 text-[var(--muted-text)] leading-relaxed">
            <p>
              Not all property managers are created equal. Hillsborough County has dozens of management companies ranging from solo operators to large corporate firms. Here is what to evaluate when choosing one:
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

            <h3 className="text-xl font-semibold text-[var(--foreground)]">Local market knowledge</h3>
            <p>
              A Tampa downtown specialist may not understand the Valrico family-rental market, and vice versa. Ask how many properties the company manages in your specific city and neighborhood. A manager who lives and works in east Hillsborough County will price a Valrico rental more accurately than a company based in Pinellas County.
            </p>

            <h3 className="text-xl font-semibold text-[var(--foreground)]">Maintenance approach</h3>
            <p>
              How does the company handle repairs? Many property managers outsource maintenance to third-party vendors and add a 10-20% markup. ViVi coordinates all maintenance through Best Bay Services — our dedicated maintenance partner — with no markup on repair costs. This saves owners hundreds to thousands per year on routine maintenance.
            </p>

            <h3 className="text-xl font-semibold text-[var(--foreground)]">Technology and reporting</h3>
            <p>
              Modern property management requires an owner portal for real-time access to financials, a tenant portal for online rent payment, and clear monthly statements. Ask if the company provides year-end 1099 and P&amp;L documents. Lack of technology usually means lack of organization.
            </p>

            <h3 className="text-xl font-semibold text-[var(--foreground)]">Questions to ask</h3>
            <ul className="list-disc space-y-2 pl-5">
              <li>How many properties do you currently manage in Hillsborough County?</li>
              <li>What is your average vacancy rate and time-to-lease?</li>
              <li>How do you handle maintenance — in-house, vendor network, or dedicated partner?</li>
              <li>Can I see a sample owner statement?</li>
              <li>What is your eviction rate, and how do you handle the process?</li>
              <li>Do you charge vacancy fees or maintenance markups?</li>
              <li>What happens if I want to cancel the management agreement?</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ---- Section 5: Maintenance for Florida Climate ---- */}
      <section id="maintenance" className="px-6 py-20 sm:py-28">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-6 text-3xl font-semibold sm:text-4xl">
            5. Maintenance considerations for Florida climate
          </h2>
          <div className="space-y-5 text-[var(--muted-text)] leading-relaxed">
            <p>
              Florida&apos;s subtropical climate creates maintenance challenges that landlords in northern states never face. Hillsborough County&apos;s heat, humidity, and storm season demand proactive maintenance to protect your investment and keep tenants satisfied.
            </p>

            <h3 className="text-xl font-semibold text-[var(--foreground)]">Air conditioning</h3>
            <p>
              AC is not a luxury in Hillsborough County — it is a legal requirement for habitability. Systems run 8-10 months per year and need biannual servicing (typically spring and fall). Filters should be changed monthly during peak summer months. An AC failure in July is an emergency that must be addressed within 24 hours. Budget $150-$300/year for preventive AC maintenance, and expect to replace the entire system every 10-15 years in Florida&apos;s climate.
            </p>

            <h3 className="text-xl font-semibold text-[var(--foreground)]">Humidity and mold prevention</h3>
            <p>
              Hillsborough County&apos;s average humidity exceeds 70% for much of the year. Without proper ventilation and AC operation, mold can develop in bathrooms, closets, and behind furniture within days. Regular inspections catch mold early. Tenants should be educated on keeping AC running (not just fans) and reporting moisture issues immediately.
            </p>

            <h3 className="text-xl font-semibold text-[var(--foreground)]">Hurricane and storm preparedness</h3>
            <p>
              Hurricane season runs June through November. Hillsborough County properties need annual roof inspections, trimmed trees, secure gutters, and a clear plan for storm preparation. Insurance requirements may include separate windstorm or flood policies depending on property location. Apollo Beach and waterfront properties may require flood insurance through the NFIP.
            </p>

            <h3 className="text-xl font-semibold text-[var(--foreground)]">Pest control</h3>
            <p>
              Termites, roaches, ants, and rodents are year-round concerns in Hillsborough County. Quarterly pest treatment is standard for rental properties. Termite bonds should be maintained and inspected annually. The cost of a termite bond ($200-$400/year) is far less than the cost of structural damage from an untreated infestation.
            </p>

            <h3 className="text-xl font-semibold text-[var(--foreground)]">Irrigation and landscaping</h3>
            <p>
              Hillsborough County enforces watering restrictions — typically twice per week during summer months. Irrigation systems need seasonal adjustment and winterization. Overgrown landscaping violates many HOA rules and can attract pests. Regular lawn maintenance is essential, especially in HOA communities common in Riverview, Lithia, and Apollo Beach.
            </p>

            <p>
              ViVi coordinates all maintenance through Best Bay Services, our dedicated maintenance partner. No third-party markups, faster response times, and quality we stand behind. Learn more about our{" "}
              <Link href="/services" className="text-accent underline hover:no-underline">services</Link>.
            </p>
          </div>
        </div>
      </section>

      {/* ---- Section 6: Tax Benefits ---- */}
      <section id="tax-benefits" className="section-alt px-6 py-20 sm:py-28">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-6 text-3xl font-semibold sm:text-4xl">
            6. Tax benefits for Hillsborough County rental property owners
          </h2>
          <div className="space-y-5 text-[var(--muted-text)] leading-relaxed">
            <p>
              One of the biggest advantages of owning rental property in Florida is the favorable tax environment. Here are the key benefits Hillsborough County landlords should be aware of:
            </p>

            <h3 className="text-xl font-semibold text-[var(--foreground)]">No state income tax</h3>
            <p>
              Florida is one of nine states with no personal income tax. Rental income earned from Hillsborough County properties is only subject to federal income tax — not state tax. For owners in high-tax states who own Florida investment properties, this is a significant advantage.
            </p>

            <h3 className="text-xl font-semibold text-[var(--foreground)]">Depreciation</h3>
            <p>
              Residential rental property can be depreciated over 27.5 years for federal tax purposes. On a $400,000 Hillsborough County home (excluding land value), that could mean roughly $10,000-$12,000 per year in depreciation deductions that reduce your taxable rental income — even though you have not spent a dime.
            </p>

            <h3 className="text-xl font-semibold text-[var(--foreground)]">Deductible expenses</h3>
            <p>
              Nearly every expense related to your rental property is tax-deductible: property management fees, maintenance and repair costs, property taxes, insurance premiums, mortgage interest, HOA fees, advertising costs, travel to inspect the property, and professional services (legal and accounting). ViVi provides year-end 1099 and P&amp;L documents that make tax preparation straightforward.
            </p>

            <h3 className="text-xl font-semibold text-[var(--foreground)]">1031 exchanges</h3>
            <p>
              When you sell an investment property, you can defer capital gains taxes by reinvesting the proceeds into another investment property through a 1031 exchange. This strategy allows Hillsborough County investors to build wealth by trading up to higher-value properties without triggering a tax event.
            </p>

            <p>
              This is general information, not tax advice. Consult a qualified tax professional for guidance specific to your situation.
            </p>
          </div>
        </div>
      </section>

      {/* ---- Hillsborough County city links ---- */}
      <section className="px-6 py-20 sm:py-28">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-6 text-3xl font-semibold sm:text-4xl">
            Explore property management by Hillsborough County city
          </h2>
          <p className="mb-8 text-[var(--muted-text)] leading-relaxed">
            Each city in Hillsborough County has its own rental dynamics, neighborhoods, and tenant profiles. Visit any city page below for detailed local information:
          </p>
          <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            <li>
              <Link href="/areas/tampa" className="text-accent underline hover:no-underline">
                Property Management in Tampa
              </Link>
            </li>
            <li>
              <Link href="/areas/brandon" className="text-accent underline hover:no-underline">
                Property Management in Brandon
              </Link>
            </li>
            <li>
              <Link href="/areas/valrico" className="text-accent underline hover:no-underline">
                Property Management in Valrico
              </Link>
            </li>
            <li>
              <Link href="/areas/riverview" className="text-accent underline hover:no-underline">
                Property Management in Riverview
              </Link>
            </li>
            <li>
              <Link href="/areas/plant-city" className="text-accent underline hover:no-underline">
                Property Management in Plant City
              </Link>
            </li>
            <li>
              <Link href="/areas/apollo-beach" className="text-accent underline hover:no-underline">
                Property Management in Apollo Beach
              </Link>
            </li>
            <li>
              <Link href="/areas/lithia" className="text-accent underline hover:no-underline">
                Property Management in Lithia
              </Link>
            </li>
            <li>
              <Link href="/areas/seffner" className="text-accent underline hover:no-underline">
                Property Management in Seffner
              </Link>
            </li>
            <li>
              <Link href="/areas/temple-terrace" className="text-accent underline hover:no-underline">
                Property Management in Temple Terrace
              </Link>
            </li>
          </ul>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/areas/hillsborough-county"
              className="text-accent underline hover:no-underline"
            >
              Hillsborough County overview
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
      <section id="faq" className="section-alt px-6 py-20 sm:py-28">
        <FAQSchema
          items={faqItems}
          heading="Hillsborough County property management FAQ"
        />
      </section>

      {/* ---- Bottom CTA ---- */}
      <section className="gradient-accent px-6 py-20 text-center text-white sm:py-28">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-3xl font-bold sm:text-4xl">
            Own rental property in Hillsborough County?
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
