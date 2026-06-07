// ============================================
// County Landing Page — /areas/hillsborough-county
// Aggregates all Hillsborough County cities
// for local SEO targeting county-level queries
// ============================================

import type { Metadata } from "next";
import Link from "next/link";
import { CITIES } from "@/lib/cities";
import { SITE, INCLUDED } from "@/lib/constants";
import FAQSchema from "@/components/FAQSchema";
import QuickAnswer from "@/components/QuickAnswer";
import Breadcrumbs from "@/components/Breadcrumbs";

// Static metadata for Hillsborough County page
export const metadata: Metadata = {
  title: "Hillsborough County, FL Rentals",
  description:
    "Property management across Hillsborough County, FL — Tampa, Brandon, Valrico, Riverview, and more. 8-12% of rent collected. No hidden fees.",
  openGraph: {
    title: "Property Management in Hillsborough County, FL | ViVi PM",
    description:
      "Full-service property management across all of Hillsborough County. 8–12% management fee. Maintenance through Best Bay Services. No hidden fees.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hillsborough County, FL Property Management | ViVi PM",
    description:
      "Full-service property management across Hillsborough County. 8-12% of rent collected. No hidden fees.",
  },
  alternates: { canonical: "/areas/hillsborough-county" },
};

export default function HillsboroughCountyPage() {
  // Filter cities that belong to Hillsborough County
  const countyCities = CITIES.filter(
    (c) => c.county === "Hillsborough County"
  );

  // County-specific FAQ items for schema markup — expanded to 10 questions
  const faqItems = [
    {
      question:
        "What cities does ViVi manage in Hillsborough County?",
      answer:
        "ViVi manages rental properties across Hillsborough County including Tampa, Brandon, Valrico, Riverview, Plant City, Apollo Beach, Lithia, Seffner, and Temple Terrace. Each city has a dedicated page with local market data and neighborhood details.",
    },
    {
      question:
        "How much does property management cost in Hillsborough County?",
      answer:
        "ViVi charges 8–12% of monthly rent collected for full-service management across all Hillsborough County cities. The rate depends on property type and location. There are no hidden fees, no vacancy charges, and no maintenance markups.",
    },
    {
      question:
        "What makes Hillsborough County a strong rental market?",
      answer:
        "Hillsborough County benefits from Tampa's economic engine — major employers like USF, Tampa General Hospital, MacDill Air Force Base, and a growing tech corridor. Population growth, job diversity, and year-round demand make it one of the strongest rental markets in Florida.",
    },
    {
      question:
        "Does ViVi handle HOA lease approvals in Hillsborough County?",
      answer:
        "Yes. Many Hillsborough County communities — especially in Riverview, Lithia, and Apollo Beach — require HOA lease approval. ViVi handles all HOA paperwork, documentation, and coordination as part of our standard management service at no extra charge.",
    },
    {
      question:
        "What is the average rent in Hillsborough County?",
      answer:
        "Average rents in Hillsborough County range from roughly $1,750 in Plant City to $2,400 in Lithia, with the county-wide median for single-family homes sitting around $2,000–$2,100 per month. Rents vary significantly by city, neighborhood, property size, and condition. ViVi provides free competitive market analyses to pinpoint the right price for any Hillsborough County rental.",
    },
    {
      question:
        "How long does it take to lease a rental in Hillsborough County?",
      answer:
        "Most ViVi-managed Hillsborough County properties lease within 14 days of being market-ready. We use professional HDR photography, 3D virtual tours, MLS syndication to 15,000+ local agents, and distribution across Zillow, Trulia, Hotpads, and 200+ rental listing sites. Proper pricing from the start is the biggest factor — overpriced properties sit, and every vacant day costs you money.",
    },
    {
      question:
        "Do I need a property manager in Hillsborough County?",
      answer:
        "You are not legally required to hire a property manager in Hillsborough County, but managing a rental yourself means handling tenant screening, lease compliance, Florida landlord-tenant law, maintenance emergencies, rent collection, evictions, and financial reporting. Most owners find that professional management pays for itself through faster leasing, better tenants, lower maintenance costs, and fewer legal mistakes. ViVi charges 8–12% of rent collected — less than the cost of one month of vacancy.",
    },
    {
      question:
        "What tenant screening does ViVi use in Hillsborough County?",
      answer:
        "Every applicant goes through criminal background checks, credit pulls, employment and income verification, rental history from previous landlords, debt-to-income analysis, identity fraud detection, and pet screening. Applicants who do not fully meet criteria may be conditionally approved with a higher security deposit. We do not cut corners on screening — it protects your property and your income.",
    },
    {
      question:
        "How does ViVi handle maintenance in Hillsborough County?",
      answer:
        "Maintenance is coordinated through Best Bay Services, our dedicated maintenance partner. There are no third-party markups, response times are faster than hiring random contractors, and the quality is something we personally stand behind. For repairs over your approved threshold, we get your approval first. Emergencies like water leaks or AC failures are handled immediately to protect the property.",
    },
    {
      question:
        "Can ViVi help me buy an investment property in Hillsborough County?",
      answer:
        "Yes. With 23+ years of real estate experience, Barrett Henry can run rental income projections, evaluate cash-flow scenarios, and help you identify Hillsborough County properties that pencil out as rentals. We provide a make-ready punch list at closing so your new investment hits the rental market fast.",
    },
  ];

  // JSON-LD: LocalBusiness with county as areaServed
  const localSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "ViVi Property Management — Hillsborough County",
    description:
      "Full-service property management across Hillsborough County, Florida. Covering Tampa, Brandon, Valrico, Riverview, Plant City, Apollo Beach, Lithia, Seffner, and Temple Terrace.",
    url: "https://vivipm.com/areas/hillsborough-county",
    telephone: SITE.phone,
    email: SITE.email,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Tampa",
      addressRegion: "FL",
      postalCode: "33602",
      addressCountry: "US",
    },
    areaServed: {
      "@type": "AdministrativeArea",
      name: "Hillsborough County",
      containedInPlace: {
        "@type": "State",
        name: "Florida",
      },
    },
    priceRange: SITE.feeRange,
  };

  // JSON-LD: HowTo schema for the property management process
  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to Get Property Management in Hillsborough County",
    description:
      "Step-by-step process for onboarding your Hillsborough County rental property with ViVi Property Management.",
    step: [
      {
        "@type": "HowToStep",
        position: 1,
        name: "Request a free rental analysis",
        text: "Contact ViVi at (813) 428-9800 or submit your property details online. We run a competitive market analysis to determine the optimal rent price for your Hillsborough County property.",
      },
      {
        "@type": "HowToStep",
        position: 2,
        name: "Property walkthrough and make-ready",
        text: "We walk your property, build a make-ready checklist, and coordinate any needed repairs or improvements through Best Bay Services to get it market-ready fast.",
      },
      {
        "@type": "HowToStep",
        position: 3,
        name: "Professional marketing and listing",
        text: "Professional HDR photography, 3D virtual tour, MLS syndication across 15,000+ agents, and distribution to Zillow, Trulia, Hotpads, and 200+ rental sites. Most Hillsborough County properties lease within 14 days.",
      },
      {
        "@type": "HowToStep",
        position: 4,
        name: "Tenant screening and lease execution",
        text: "Every applicant is screened with criminal background, credit, employment, rental history, and income verification. Approved tenants sign an attorney-drafted Florida lease.",
      },
      {
        "@type": "HowToStep",
        position: 5,
        name: "Ongoing management and rent collection",
        text: "ViVi handles rent collection, maintenance through Best Bay Services, inspections, financial reporting, and lease renewals. You receive monthly owner statements and year-end tax documents.",
      },
    ],
  };

  // JSON-LD: Speakable schema for voice assistant optimization
  const speakableSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Property Management in Hillsborough County, FL",
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: [
        ".quick-answer-question",
        ".quick-answer-text",
        ".hillsborough-market-overview",
      ],
    },
    url: "https://vivipm.com/areas/hillsborough-county",
  };

  return (
    <>
      {/* JSON-LD schema for local SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localSchema).replace(/</g, "\\u003c"),
        }}
      />
      {/* HowTo schema for the management process */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(howToSchema).replace(/</g, "\\u003c"),
        }}
      />
      {/* Speakable schema for voice assistants */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(speakableSchema).replace(/</g, "\\u003c"),
        }}
      />

      {/* ---- Hero ---- */}
      <section className="gradient-accent relative overflow-hidden px-6 py-24 text-center text-white sm:py-32">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.08)_0%,transparent_70%)]" />
        <div className="relative mx-auto max-w-3xl">
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-white/60">
            Tampa Bay&apos;s Largest County
          </p>
          <h1 className="text-4xl font-bold leading-tight sm:text-5xl">
            Property Management in Hillsborough County, FL
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lg font-light leading-relaxed text-white/80">
            Full-service property management across 9 Hillsborough County cities — backed by 23+ years of real estate experience and maintenance through Best Bay Services.
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

      {/* ---- Breadcrumbs ---- */}
      <Breadcrumbs
        items={[
          { name: "Home", href: "/" },
          { name: "Areas", href: "/areas" },
          { name: "Hillsborough County", href: "/areas/hillsborough-county" },
        ]}
      />

      {/* ---- QuickAnswer — AEO target ---- */}
      <section className="px-6 py-16 sm:py-20">
        <QuickAnswer
          question="Who provides property management in Hillsborough County?"
          answer={`ViVi Property Management provides full-service property management across all of Hillsborough County, Florida — including Tampa, Brandon, Valrico, Riverview, Plant City, Apollo Beach, Lithia, Seffner, and Temple Terrace. Led by Barrett Henry with 23+ years of real estate experience, ViVi charges ${SITE.feeRange} of rent collected with no hidden fees. Call ${SITE.phone}.`}
        />
      </section>

      {/* ---- Hillsborough County rental market overview ---- */}
      <section className="px-6 py-20 sm:py-28">
        <div className="mx-auto max-w-4xl">
          <h2 className="hillsborough-market-overview mb-6 text-3xl font-semibold sm:text-4xl">
            Hillsborough County rental market overview
          </h2>
          <div className="space-y-5 text-[var(--muted-text)] leading-relaxed">
            <p>
              Hillsborough County is the economic heart of the Tampa Bay metro, home to over 1.5 million residents and growing steadily year over year. Tampa anchors the county as the regional hub for healthcare, finance, technology, and defense. Major employers including the University of South Florida (USF), Tampa General Hospital, MacDill Air Force Base, Raymond James Financial, USAA, and Citigroup create a deep, diversified job base that fuels consistent rental demand across every price point.
            </p>
            <p>
              East Hillsborough suburbs — Brandon, Valrico, and Riverview — attract families relocating for top-rated Hillsborough County public schools, newer construction, and suburban convenience. These communities consistently rank among the highest-demand rental corridors in the county, with single-family homes leasing in under two weeks when priced correctly. South county communities like Apollo Beach offer waterfront living and premium rents at a fraction of what Pinellas County demands. Plant City, on the county&apos;s eastern edge, delivers some of the strongest cash-on-cash returns for investors focused on cash flow over appreciation.
            </p>
            <p>
              Across Hillsborough County, median single-family rents range from approximately $1,750 in Plant City to $2,400 in Lithia, with the county-wide average hovering around $2,000–$2,100 per month. Population growth continues to outpace new housing supply, which keeps vacancy rates low — typically under 5% for well-priced, well-maintained properties. Tampa&apos;s expanding tech corridor along Westshore and Water Street, combined with infrastructure investments in the Selmon Expressway and I-275, are drawing more high-earning professionals into the rental market. For property owners and investors, Hillsborough County remains one of the strongest rental markets in Florida heading into 2026 and beyond.
            </p>
          </div>
        </div>
      </section>

      {/* ---- Why Hillsborough County for rental investment? ---- */}
      <section className="section-alt px-6 py-20 sm:py-28">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-8 text-3xl font-semibold sm:text-4xl">
            Why Hillsborough County for rental investment?
          </h2>
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="card p-6">
              <h3 className="mb-2 font-display text-lg font-semibold">Population growth outpacing supply</h3>
              <p className="text-sm leading-relaxed text-[var(--muted-text)]">
                Hillsborough County has added over 200,000 residents in the past decade. New housing construction has not kept pace, which creates sustained rental demand and upward pressure on rents across every submarket.
              </p>
            </div>
            <div className="card p-6">
              <h3 className="mb-2 font-display text-lg font-semibold">Diversified employer base</h3>
              <p className="text-sm leading-relaxed text-[var(--muted-text)]">
                Tampa is not a one-industry town. Healthcare (Tampa General, AdventHealth, Moffitt Cancer Center), military (MacDill AFB), education (USF), finance (Raymond James, USAA), and tech (ReliaQuest, ConnectWise) all contribute to a resilient rental market.
              </p>
            </div>
            <div className="card p-6">
              <h3 className="mb-2 font-display text-lg font-semibold">Wide range of entry points</h3>
              <p className="text-sm leading-relaxed text-[var(--muted-text)]">
                Hillsborough County offers everything from $270K homes in Plant City with strong cash flow to $500K+ properties in Lithia and South Tampa that attract premium tenants. Investors at every budget can find properties that pencil out.
              </p>
            </div>
            <div className="card p-6">
              <h3 className="mb-2 font-display text-lg font-semibold">No state income tax</h3>
              <p className="text-sm leading-relaxed text-[var(--muted-text)]">
                Florida has no state income tax, which means more of your rental income stays in your pocket. Combined with property tax homestead exemptions for owner-occupied properties and depreciation deductions for investment properties, the tax advantages are significant.
              </p>
            </div>
            <div className="card p-6">
              <h3 className="mb-2 font-display text-lg font-semibold">Year-round rental demand</h3>
              <p className="text-sm leading-relaxed text-[var(--muted-text)]">
                Unlike seasonal markets in coastal Florida, Hillsborough County&apos;s rental demand is driven by employment and schools — not tourism. That means consistent occupancy rates and predictable income 12 months a year.
              </p>
            </div>
            <div className="card p-6">
              <h3 className="mb-2 font-display text-lg font-semibold">Infrastructure investment</h3>
              <p className="text-sm leading-relaxed text-[var(--muted-text)]">
                Tampa&apos;s Water Street development, the Westshore Marina District, Selmon Expressway expansion, and ongoing I-275 improvements are driving billions in investment into the county. These projects increase property values and attract higher-income tenants.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ---- Property management fees in Hillsborough County ---- */}
      <section className="px-6 py-20 sm:py-28">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-6 text-3xl font-semibold sm:text-4xl">
            Property management fees in Hillsborough County
          </h2>
          <div className="space-y-5 text-[var(--muted-text)] leading-relaxed">
            <p>
              Most Hillsborough County property management companies charge between 8% and 12% of monthly rent collected, and ViVi falls within that standard range. The exact percentage depends on property type, location within the county, and portfolio size. Where ViVi differs from the typical Hillsborough County manager is in what is included at that rate and what is not stacked on top.
            </p>
            <p>
              ViVi&apos;s management fee covers everything: professional HDR photography, 3D virtual tours, MLS syndication, tenant screening, attorney-drafted Florida leases, monthly rent collection, owner portal access, financial reporting, maintenance coordination through Best Bay Services, inspections, eviction coordination, HOA lease approval handling, and a dedicated property manager. There are no vacancy fees — you only pay when rent is collected.
            </p>
            <p>
              Many Hillsborough County managers advertise low management percentages but then charge separately for photography ($200–$500), lease renewals ($150–$300), maintenance markups (10–20% on top of repair costs), vacancy fees ($50–$100/month while empty), and setup fees. ViVi&apos;s setup fee is $500, lease renewal is $300, and placement is one month&apos;s rent. Beyond that, there are no surprise charges. Maintenance through Best Bay Services means no third-party markups on repair costs, which alone saves most owners hundreds per year.
            </p>
            <p>
              For a detailed breakdown comparing ViVi&apos;s pricing to self-managing and to typical competitors, visit our{" "}
              <Link href="/pricing" className="text-accent underline hover:no-underline">
                pricing page
              </Link>.
            </p>
          </div>
        </div>
      </section>

      {/* ---- Cities grid ---- */}
      <section className="section-alt px-6 py-20 sm:py-28">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-4 text-center text-3xl font-semibold sm:text-4xl">
            Cities we manage in Hillsborough County
          </h2>
          <p className="mb-10 text-center text-[var(--muted-text)]">
            Select a city below to see local rental market data, neighborhoods, and pricing.
          </p>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {countyCities.map((city) => (
              <Link
                key={city.slug}
                href={`/areas/${city.slug}`}
                className="card px-6 py-5 transition-colors hover:border-accent"
              >
                <p className="font-display text-lg font-semibold">
                  {city.name}
                </p>
                <p className="mt-1 text-xs text-[var(--muted-text)]">
                  Median rent: {city.medianRent}
                </p>
                <p className="mt-0.5 text-xs text-[var(--muted-text)]">
                  Population: {city.population}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ---- How it works — management process ---- */}
      <section className="px-6 py-20 sm:py-28">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-10 text-center text-3xl font-semibold sm:text-4xl">
            How ViVi manages your Hillsborough County rental
          </h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="text-center">
              <span className="mb-3 inline-block font-display text-4xl font-bold text-accent/30">01</span>
              <h3 className="mb-2 font-display text-xl font-semibold">Prepare</h3>
              <p className="text-sm leading-relaxed text-[var(--muted-text)]">
                We walk your property, build a make-ready checklist, coordinate repairs through Best Bay Services, and get it market-ready. Professional photos, 3D tour, and competitive rent analysis included.
              </p>
            </div>
            <div className="text-center">
              <span className="mb-3 inline-block font-display text-4xl font-bold text-accent/30">02</span>
              <h3 className="mb-2 font-display text-xl font-semibold">Market</h3>
              <p className="text-sm leading-relaxed text-[var(--muted-text)]">
                Your listing hits MLS across 15,000+ Tampa Bay agents. Syndicated to Zillow, Trulia, Hotpads, and 200+ rental sites. Most Hillsborough County properties lease in under 14 days.
              </p>
            </div>
            <div className="text-center">
              <span className="mb-3 inline-block font-display text-4xl font-bold text-accent/30">03</span>
              <h3 className="mb-2 font-display text-xl font-semibold">Screen</h3>
              <p className="text-sm leading-relaxed text-[var(--muted-text)]">
                Criminal background, credit, employment, rental history, income verification, and pet screening. We do not settle for warm bodies — we find tenants who pay on time and take care of your property.
              </p>
            </div>
            <div className="text-center">
              <span className="mb-3 inline-block font-display text-4xl font-bold text-accent/30">04</span>
              <h3 className="mb-2 font-display text-xl font-semibold">Lease</h3>
              <p className="text-sm leading-relaxed text-[var(--muted-text)]">
                Attorney-drafted Florida leases protect you. We handle HOA lease approvals, security deposits, move-in coordination, and all paperwork. You sign nothing — we handle it.
              </p>
            </div>
            <div className="text-center">
              <span className="mb-3 inline-block font-display text-4xl font-bold text-accent/30">05</span>
              <h3 className="mb-2 font-display text-xl font-semibold">Manage</h3>
              <p className="text-sm leading-relaxed text-[var(--muted-text)]">
                Monthly rent collection, maintenance through Best Bay Services, regular inspections, and a dedicated property manager. Track everything from your owner portal.
              </p>
            </div>
            <div className="text-center">
              <span className="mb-3 inline-block font-display text-4xl font-bold text-accent/30">06</span>
              <h3 className="mb-2 font-display text-xl font-semibold">Report</h3>
              <p className="text-sm leading-relaxed text-[var(--muted-text)]">
                Monthly owner statements, year-end 1099 and P&L documents, and real-time access to income, expenses, and service tickets. Everything you need for tax season, on time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ---- What's included ---- */}
      <section className="section-alt px-6 py-20 sm:py-28">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-4 text-3xl font-semibold sm:text-4xl">
            What does ViVi&apos;s Hillsborough County management include?
          </h2>
          <p className="mb-10 text-[var(--muted-text)]">
            One plan. Everything included. {SITE.feeRange} of monthly rent collected.
          </p>
          <div className="grid gap-3 sm:grid-cols-2">
            {INCLUDED.map((item) => (
              <div key={item} className="flex items-start gap-2.5 text-sm">
                <span className="mt-0.5 text-accent">&#10003;</span>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---- Hillsborough County average rents by city ---- */}
      <section className="px-6 py-20 sm:py-28">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-6 text-3xl font-semibold sm:text-4xl">
            Average rents by city in Hillsborough County
          </h2>
          <p className="mb-8 text-[var(--muted-text)]">
            Median single-family rental rates across Hillsborough County cities. Actual rents vary by property size, condition, neighborhood, and amenities.
          </p>
          <div className="card overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-[var(--card-border)]">
                    <th className="px-6 py-4 text-left font-sans font-semibold">City</th>
                    <th className="px-6 py-4 text-left font-sans font-semibold">Median Rent</th>
                    <th className="px-6 py-4 text-left font-sans font-semibold">Population</th>
                    <th className="px-6 py-4 text-left font-sans font-semibold">Median Home Price</th>
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
                      <td className="px-6 py-3.5 text-[var(--muted-text)]">{city.population}</td>
                      <td className="px-6 py-3.5 text-[var(--muted-text)]">{city.medianHome}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* ---- Internal links to Hillsborough city pages ---- */}
      <section className="section-alt px-6 py-20 sm:py-28">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-6 text-3xl font-semibold sm:text-4xl">
            Explore Hillsborough County property management by city
          </h2>
          <p className="mb-8 text-[var(--muted-text)]">
            Each Hillsborough County city has its own rental market dynamics. Click any city below for detailed neighborhood data, local rental rates, and city-specific property management information.
          </p>
          <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            <li>
              <Link href="/areas/tampa" className="text-accent underline hover:no-underline">
                Property Management in Tampa, FL
              </Link>
            </li>
            <li>
              <Link href="/areas/brandon" className="text-accent underline hover:no-underline">
                Property Management in Brandon, FL
              </Link>
            </li>
            <li>
              <Link href="/areas/valrico" className="text-accent underline hover:no-underline">
                Property Management in Valrico, FL
              </Link>
            </li>
            <li>
              <Link href="/areas/riverview" className="text-accent underline hover:no-underline">
                Property Management in Riverview, FL
              </Link>
            </li>
            <li>
              <Link href="/areas/plant-city" className="text-accent underline hover:no-underline">
                Property Management in Plant City, FL
              </Link>
            </li>
            <li>
              <Link href="/areas/apollo-beach" className="text-accent underline hover:no-underline">
                Property Management in Apollo Beach, FL
              </Link>
            </li>
            <li>
              <Link href="/areas/lithia" className="text-accent underline hover:no-underline">
                Property Management in Lithia, FL
              </Link>
            </li>
            <li>
              <Link href="/areas/seffner" className="text-accent underline hover:no-underline">
                Property Management in Seffner, FL
              </Link>
            </li>
            <li>
              <Link href="/areas/temple-terrace" className="text-accent underline hover:no-underline">
                Property Management in Temple Terrace, FL
              </Link>
            </li>
          </ul>
        </div>
      </section>

      {/* ---- Hillsborough County PM guide CTA ---- */}
      <section className="px-6 py-20 sm:py-28">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-4 text-3xl font-semibold sm:text-4xl">
            Complete guide to Hillsborough County property management
          </h2>
          <p className="mx-auto mb-8 max-w-xl text-[var(--muted-text)]">
            Landlord-tenant law, average rents by city, how to choose a property manager, maintenance tips for Florida climate, and tax benefits — all in one comprehensive guide.
          </p>
          <Link
            href="/areas/hillsborough-county/property-management-guide"
            className="inline-block rounded-full bg-accent px-8 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-accent-dark"
          >
            Read the Full Guide
          </Link>
        </div>
      </section>

      {/* ---- FAQ with schema ---- */}
      <section className="section-alt px-6 py-20 sm:py-28">
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
            Find out what it could rent for with a free, no-obligation rental analysis.
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
