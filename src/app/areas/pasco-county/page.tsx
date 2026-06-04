// ============================================
// County Landing Page — /areas/pasco-county
// Aggregates all Pasco County cities
// for local SEO targeting county-level queries
// ============================================

import type { Metadata } from "next";
import Link from "next/link";
import { CITIES } from "@/lib/cities";
import { SITE, INCLUDED } from "@/lib/constants";
import FAQSchema from "@/components/FAQSchema";
import QuickAnswer from "@/components/QuickAnswer";

// Static metadata for Pasco County page
export const metadata: Metadata = {
  title: "Property Management in Pasco County, FL",
  description:
    "Professional property management across Pasco County, Florida — Wesley Chapel, Land O' Lakes, New Port Richey, and Zephyrhills. 8–12% of rent collected. In-house maintenance. No hidden fees. Call (813) 428-9800.",
  openGraph: {
    title: "Property Management in Pasco County, FL | ViVi PM",
    description:
      "Full-service property management across Pasco County. New construction expertise. 8–12% management fee. No hidden fees.",
  },
};

export default function PascoCountyPage() {
  // Filter cities that belong to Pasco County
  const countyCities = CITIES.filter(
    (c) => c.county === "Pasco County"
  );

  // County-specific FAQ items for schema markup
  const faqItems = [
    {
      question:
        "What cities does ViVi manage in Pasco County?",
      answer:
        "ViVi manages rental properties in Wesley Chapel, Land O' Lakes, New Port Richey, and Zephyrhills. Our coverage spans from the fast-growing I-75 corridor communities in east Pasco to the Gulf Coast neighborhoods in west Pasco.",
    },
    {
      question:
        "Why is Pasco County growing so fast for rental investors?",
      answer:
        "Pasco County is one of the fastest-growing counties in Florida. New master-planned communities in Wesley Chapel and Land O' Lakes attract families relocating from Hillsborough County and out of state. Lower property taxes compared to Hillsborough, newer housing stock, and improving infrastructure make Pasco a strong investment play.",
    },
    {
      question:
        "How does ViVi handle new-construction rental properties in Pasco County?",
      answer:
        "Many Pasco County investment properties are new construction with builder warranties and strict HOA requirements. ViVi coordinates warranty claims with builders, handles HOA lease approval paperwork, and ensures your property meets community standards — all included in our standard management fee.",
    },
    {
      question:
        "What are typical rent prices across Pasco County?",
      answer:
        "Pasco County rents range from approximately $1,600/month in Zephyrhills to $2,200/month in Wesley Chapel. East Pasco communities along the I-75 corridor command higher rents due to newer construction and proximity to Tampa. West Pasco offers better cash flow for investors focused on returns over appreciation.",
    },
  ];

  // JSON-LD: LocalBusiness with county as areaServed
  const localSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "ViVi Property Management — Pasco County",
    description:
      "Full-service property management across Pasco County, Florida. Covering Wesley Chapel, Land O' Lakes, New Port Richey, and Zephyrhills.",
    url: "https://vivipm.com/areas/pasco-county",
    telephone: SITE.phone,
    email: SITE.email,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Wesley Chapel",
      addressRegion: "FL",
      postalCode: "33543",
      addressCountry: "US",
    },
    areaServed: {
      "@type": "AdministrativeArea",
      name: "Pasco County",
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
            Tampa Bay&apos;s Fastest-Growing County
          </p>
          <h1 className="text-4xl font-bold leading-tight sm:text-5xl">
            Property Management in Pasco County, FL
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lg font-light leading-relaxed text-white/80">
            New construction. Master-planned communities. Explosive growth. Professional property management across Pasco County with 23+ years of real estate experience.
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
          question="Who provides property management in Pasco County?"
          answer={`ViVi Property Management provides full-service property management across Pasco County, Florida — including Wesley Chapel, Land O' Lakes, New Port Richey, and Zephyrhills. Led by Barrett Henry with 23+ years of real estate experience, ViVi charges ${SITE.feeRange} of rent collected with no hidden fees. We specialize in new-construction communities and HOA lease coordination. Call ${SITE.phone}.`}
        />
      </section>

      {/* ---- County rental market overview ---- */}
      <section className="px-6 py-20 sm:py-28">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-6 text-3xl font-semibold sm:text-4xl">
            Pasco County rental market overview
          </h2>
          <p className="text-[var(--muted-text)] leading-relaxed">
            Pasco County is the growth engine north of Hillsborough, consistently ranking among the fastest-growing counties in Florida. The eastern corridor along I-75 — anchored by Wesley Chapel and Land O&apos;Lakes — has transformed from rural land into a network of master-planned communities with premium amenities, top-rated schools, and retail centers like Tampa Premium Outlets and The Grove. These communities attract families and professionals relocating from Hillsborough County and out of state who want newer homes at more competitive price points. West Pasco tells a different investment story: New Port Richey and surrounding areas offer affordable acquisition costs and strong cash-on-cash returns for investors prioritizing cash flow. Zephyrhills in east Pasco brings small-town charm with growing demand as Tampa Bay&apos;s population pushes northward. Across the county, the rental market benefits from lower property tax rates than Hillsborough, expanding infrastructure including the Suncoast Parkway extension, and a pipeline of new residential development that draws tenants before amenities are even complete.
          </p>
        </div>
      </section>

      {/* ---- Cities grid ---- */}
      <section className="section-alt px-6 py-20 sm:py-28">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-4 text-center text-3xl font-semibold sm:text-4xl">
            Cities we manage in Pasco County
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
            What does ViVi&apos;s Pasco County management include?
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
            Whether it&apos;s a new build in Wesley Chapel or a cash-flow play in New Port Richey — get a free rental analysis today.
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
