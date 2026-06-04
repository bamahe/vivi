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

// Static metadata for Hillsborough County page
export const metadata: Metadata = {
  title: "Property Management in Hillsborough County, FL",
  description:
    "Professional property management across Hillsborough County, Florida — Tampa, Brandon, Valrico, Riverview, Plant City, Apollo Beach, Lithia, Seffner, and Temple Terrace. 8–12% of rent collected. No hidden fees. Call (813) 428-9800.",
  openGraph: {
    title: "Property Management in Hillsborough County, FL | ViVi PM",
    description:
      "Full-service property management across all of Hillsborough County. 8–12% management fee. Maintenance through Best Bay Services. No hidden fees.",
  },
  alternates: { canonical: "/areas/hillsborough-county" },
};

export default function HillsboroughCountyPage() {
  // Filter cities that belong to Hillsborough County
  const countyCities = CITIES.filter(
    (c) => c.county === "Hillsborough County"
  );

  // County-specific FAQ items for schema markup
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

      {/* ---- QuickAnswer — AEO target ---- */}
      <section className="px-6 py-16 sm:py-20">
        <QuickAnswer
          question="Who provides property management in Hillsborough County?"
          answer={`ViVi Property Management provides full-service property management across all of Hillsborough County, Florida — including Tampa, Brandon, Valrico, Riverview, Plant City, Apollo Beach, Lithia, Seffner, and Temple Terrace. Led by Barrett Henry with 23+ years of real estate experience, ViVi charges ${SITE.feeRange} of rent collected with no hidden fees. Call ${SITE.phone}.`}
        />
      </section>

      {/* ---- County rental market overview ---- */}
      <section className="px-6 py-20 sm:py-28">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-6 text-3xl font-semibold sm:text-4xl">
            Hillsborough County rental market overview
          </h2>
          <p className="text-[var(--muted-text)] leading-relaxed">
            Hillsborough County is the economic heart of the Tampa Bay metro, home to over 1.5 million residents and growing. Tampa anchors the county with major employers — USF, Tampa General Hospital, MacDill Air Force Base, and a rapidly expanding tech and finance corridor along the Westshore district. East Hillsborough suburbs like Brandon, Valrico, and Riverview attract families with strong schools and newer construction, while south county communities like Apollo Beach offer waterfront living at a fraction of Pinellas prices. Plant City provides some of the best cash-on-cash returns for investors focused on cash flow. Across the county, median rents range from $1,750 in Plant City to $2,400 in Lithia, giving investors a wide spectrum of entry points. Population growth continues to outpace new housing supply, which keeps vacancy rates low and rental demand consistently strong year-round.
          </p>
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

      {/* ---- What's included ---- */}
      <section className="px-6 py-20 sm:py-28">
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
