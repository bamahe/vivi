// ============================================
// County Landing Page — /areas/polk-county
// Aggregates all Polk County cities
// for local SEO targeting county-level queries
// ============================================

import type { Metadata } from "next";
import Link from "next/link";
import { CITIES } from "@/lib/cities";
import { SITE, INCLUDED } from "@/lib/constants";
import FAQSchema from "@/components/FAQSchema";
import QuickAnswer from "@/components/QuickAnswer";

// Static metadata for Polk County page
export const metadata: Metadata = {
  title: "Property Management in Polk County, FL",
  description:
    "Property management in Polk County, FL — Lakeland, Winter Haven, and Davenport. 8-12% of rent collected. Strong cash flow market. No hidden fees.",
  openGraph: {
    title: "Property Management in Polk County, FL | ViVi PM",
    description:
      "Full-service property management across Polk County. I-4 corridor cash flow. 8–12% management fee. No hidden fees.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Property Management in Polk County, FL | ViVi PM",
    description:
      "Full-service property management across Polk County. 8-12% of rent collected. No hidden fees.",
  },
  alternates: { canonical: "/areas/polk-county" },
};

export default function PolkCountyPage() {
  // Filter cities that belong to Polk County
  const countyCities = CITIES.filter(
    (c) => c.county === "Polk County"
  );

  // County-specific FAQ items for schema markup
  const faqItems = [
    {
      question:
        "What cities does ViVi manage in Polk County?",
      answer:
        "ViVi manages rental properties in Lakeland, Winter Haven, and Davenport. These three cities cover the key rental corridors along I-4 between Tampa and Orlando.",
    },
    {
      question:
        "Why are Tampa Bay investors buying rental property in Polk County?",
      answer:
        "Polk County offers significantly lower acquisition costs than Hillsborough or Pinellas County while maintaining strong rental demand. Investors can purchase properties at 60-70% of Tampa prices and achieve better cash-on-cash returns. The I-4 corridor provides employment access to both Tampa and Orlando metros, which expands the tenant pool.",
    },
    {
      question:
        "Can ViVi manage my Polk County property remotely?",
      answer:
        "Absolutely. Many of our Polk County property owners live in Tampa, out of state, or overseas. Our full-service management covers everything — marketing, screening, maintenance, rent collection, inspections, and financial reporting. You get monthly owner reports and 24/7 portal access without needing to be local.",
    },
    {
      question:
        "What employers drive rental demand in Polk County?",
      answer:
        "Publix Super Markets headquarters, Amazon's distribution center, Lakeland Regional Health, and Florida Southern College anchor Lakeland. LEGOLAND Florida and the Polk State College system support Winter Haven. Davenport benefits from Walt Disney World employment just 15 minutes east. The I-4 logistics corridor continues adding warehouse and distribution jobs.",
    },
  ];

  // JSON-LD: LocalBusiness with county as areaServed
  const localSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "ViVi Property Management — Polk County",
    description:
      "Full-service property management across Polk County, Florida. Covering Lakeland, Winter Haven, and Davenport along the I-4 corridor.",
    url: "https://vivipm.com/areas/polk-county",
    telephone: SITE.phone,
    email: SITE.email,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Lakeland",
      addressRegion: "FL",
      postalCode: "33801",
      addressCountry: "US",
    },
    areaServed: {
      "@type": "AdministrativeArea",
      name: "Polk County",
      containedInPlace: {
        "@type": "State",
        name: "Florida",
      },
    },
    priceRange: SITE.feeRange,
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

      {/* ---- Hero ---- */}
      <section className="gradient-accent relative overflow-hidden px-6 py-24 text-center text-white sm:py-32">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.08)_0%,transparent_70%)]" />
        <div className="relative mx-auto max-w-3xl">
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-white/60">
            I-4 Corridor Cash Flow
          </p>
          <h1 className="text-4xl font-bold leading-tight sm:text-5xl">
            Property Management in Polk County, FL
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lg font-light leading-relaxed text-white/80">
            Lower entry prices. Stronger cash flow. Professional property management across Polk County with 23+ years of real estate experience.
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
          question="Who provides property management in Polk County?"
          answer={`ViVi Property Management provides full-service property management across Polk County, Florida — including Lakeland, Winter Haven, and Davenport along the I-4 corridor. Led by Barrett Henry with 23+ years of real estate experience, ViVi charges ${SITE.feeRange} of rent collected with no hidden fees. Polk County's lower price points and strong rental demand make it ideal for cash-flow investors. Call ${SITE.phone}.`}
        />
      </section>

      {/* ---- County rental market overview ---- */}
      <section className="px-6 py-20 sm:py-28">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-6 text-3xl font-semibold sm:text-4xl">
            Polk County rental market overview
          </h2>
          <p className="text-[var(--muted-text)] leading-relaxed">
            Polk County sits at the geographic center of the Tampa-Orlando mega-region along the I-4 corridor, giving tenants employment access to both metros. That dual-market reach is the foundation of Polk County&apos;s rental demand. Lakeland — the county&apos;s largest city — has emerged as a legitimate destination in its own right, with Amazon&apos;s massive fulfillment center, Publix headquarters, and a revitalized downtown attracting both employers and residents. Winter Haven&apos;s Chain of Lakes lifestyle and LEGOLAND workforce keep that market steady, while Davenport&apos;s proximity to Disney World feeds tenant demand from theme park and hospitality workers seeking affordable long-term housing. For investors, the math in Polk County is compelling: median home prices run 20-30% below Hillsborough County while rents hold relatively firm, which translates to better cap rates and cash-on-cash returns. The I-4 logistics boom — warehousing, distribution, and manufacturing along the corridor — continues adding jobs that fuel rental demand without the salary levels that push tenants into homeownership.
          </p>
        </div>
      </section>

      {/* ---- Cities grid ---- */}
      <section className="section-alt px-6 py-20 sm:py-28">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-4 text-center text-3xl font-semibold sm:text-4xl">
            Cities we manage in Polk County
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

      {/* ---- What's included ---- */}
      <section className="px-6 py-20 sm:py-28">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-4 text-3xl font-semibold sm:text-4xl">
            What does ViVi&apos;s Polk County management include?
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

      {/* ---- FAQ with schema ---- */}
      <section className="section-alt px-6 py-20 sm:py-28">
        <FAQSchema
          items={faqItems}
          heading="Polk County property management FAQ"
        />
      </section>

      {/* ---- Bottom CTA ---- */}
      <section className="gradient-accent px-6 py-20 text-center text-white sm:py-28">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-3xl font-bold sm:text-4xl">
            Own rental property in Polk County?
          </h2>
          <p className="mx-auto mt-6 max-w-lg text-lg text-white/80">
            Polk County&apos;s cash flow potential is real. Get a free rental analysis and see the numbers for your property.
          </p>
          <Link
            href="/rental-analysis"
            className="mt-10 inline-block rounded-full bg-white px-10 py-4 text-sm font-semibold text-accent transition-colors hover:bg-white/90"
          >
            Get Your Free Rent Analysis
          </Link>
        </div>
      </section>
    </>
  );
}
