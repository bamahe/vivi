// ============================================
// County Landing Page — /areas/manatee-county
// Aggregates all Manatee County cities
// for local SEO targeting county-level queries
// ============================================

import type { Metadata } from "next";
import Link from "next/link";
import { CITIES } from "@/lib/cities";
import { SITE, INCLUDED } from "@/lib/constants";
import FAQSchema from "@/components/FAQSchema";
import QuickAnswer from "@/components/QuickAnswer";

// Static metadata for Manatee County page
export const metadata: Metadata = {
  title: "Property Management in Manatee County, FL",
  description:
    "Professional property management across Manatee County, Florida — Bradenton, Lakewood Ranch, Parrish, and Palmetto. 8–12% of rent collected. Maintenance through Best Bay Services. No hidden fees. Call (813) 428-9800.",
  openGraph: {
    title: "Property Management in Manatee County, FL | ViVi PM",
    description:
      "Full-service property management across Manatee County. Premium communities to waterfront living. 8–12% management fee. No hidden fees.",
  },
  alternates: { canonical: "/areas/manatee-county" },
};

export default function ManateeCountyPage() {
  // Filter cities that belong to Manatee County
  const countyCities = CITIES.filter(
    (c) => c.county === "Manatee County"
  );

  // County-specific FAQ items for schema markup
  const faqItems = [
    {
      question:
        "What cities does ViVi manage in Manatee County?",
      answer:
        "ViVi manages rental properties in Bradenton, Lakewood Ranch, Parrish, and Palmetto. Our coverage spans from the Manatee River waterfront to the premium master-planned communities of east Manatee County.",
    },
    {
      question:
        "What makes Manatee County different from Hillsborough for rental investment?",
      answer:
        "Manatee County offers a distinct investment profile: Lakewood Ranch is one of the nation's top-selling master-planned communities commanding premium rents, while Bradenton and Palmetto provide Gulf Coast access at lower entry prices than Pinellas County. Parrish is one of the fastest-growing areas in the region with new construction inventory. The county attracts a mix of retirees, seasonal residents, and professionals — a broader tenant base than many inland markets.",
    },
    {
      question:
        "Does ViVi manage properties in Lakewood Ranch HOA communities?",
      answer:
        "Yes. Lakewood Ranch has multiple HOAs and CDDs (Community Development Districts) with specific lease restrictions and approval processes. ViVi handles all HOA lease approval paperwork, ensures tenant compliance with community rules, and coordinates with HOA management companies as part of our standard management fee.",
    },
    {
      question:
        "What are typical rent prices in Manatee County?",
      answer:
        "Manatee County rents range from approximately $1,800/month in Palmetto to $2,500/month in Lakewood Ranch. Bradenton falls in the middle at around $2,100/month, with waterfront properties commanding additional premiums. Parrish's newer construction homes typically rent for $2,200/month and up.",
    },
  ];

  // JSON-LD: LocalBusiness with county as areaServed
  const localSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "ViVi Property Management — Manatee County",
    description:
      "Full-service property management across Manatee County, Florida. Covering Bradenton, Lakewood Ranch, Parrish, and Palmetto.",
    url: "https://vivipm.com/areas/manatee-county",
    telephone: SITE.phone,
    email: SITE.email,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Bradenton",
      addressRegion: "FL",
      postalCode: "34205",
      addressCountry: "US",
    },
    areaServed: {
      "@type": "AdministrativeArea",
      name: "Manatee County",
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
            South Tampa Bay&apos;s Premium Market
          </p>
          <h1 className="text-4xl font-bold leading-tight sm:text-5xl">
            Property Management in Manatee County, FL
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lg font-light leading-relaxed text-white/80">
            From Lakewood Ranch&apos;s master-planned communities to Bradenton&apos;s waterfront — professional property management with 23+ years of real estate experience.
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
          question="Who provides property management in Manatee County?"
          answer={`ViVi Property Management provides full-service property management across Manatee County, Florida — including Bradenton, Lakewood Ranch, Parrish, and Palmetto. Led by Barrett Henry with 23+ years of real estate experience, ViVi charges ${SITE.feeRange} of rent collected with no hidden fees. We handle HOA and CDD coordination for Lakewood Ranch and other master-planned communities. Call ${SITE.phone}.`}
        />
      </section>

      {/* ---- County rental market overview ---- */}
      <section className="px-6 py-20 sm:py-28">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-6 text-3xl font-semibold sm:text-4xl">
            Manatee County rental market overview
          </h2>
          <p className="text-[var(--muted-text)] leading-relaxed">
            Manatee County anchors the southern edge of the Tampa Bay metro, offering a rental market that blends Gulf Coast lifestyle with rapid suburban expansion. Bradenton — the county seat — serves as the gateway to Anna Maria Island and provides a mix of historic bungalows, waterfront condos, and suburban homes that attract year-round residents and seasonal tenants alike. Lakewood Ranch dominates the eastern half of the county as one of the top-selling master-planned communities in America, commanding premium rents from corporate relocators and medical professionals drawn to its schools, amenities, and proximity to Sarasota. Parrish is the county&apos;s breakout growth story — new-construction communities like North River Ranch are filling rapidly with families priced out of south Hillsborough County and Lakewood Ranch. Palmetto rounds out the market with waterfront revitalization along the Manatee River and improving rental dynamics. The county&apos;s diversity of property types and price points — from $1,800/month cash-flow plays in Palmetto to $3,500/month premium rentals in Lakewood Ranch — gives investors multiple strategies within a single county.
          </p>
        </div>
      </section>

      {/* ---- Cities grid ---- */}
      <section className="section-alt px-6 py-20 sm:py-28">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-4 text-center text-3xl font-semibold sm:text-4xl">
            Cities we manage in Manatee County
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
            What does ViVi&apos;s Manatee County management include?
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
          heading="Manatee County property management FAQ"
        />
      </section>

      {/* ---- Bottom CTA ---- */}
      <section className="gradient-accent px-6 py-20 text-center text-white sm:py-28">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-3xl font-bold sm:text-4xl">
            Own rental property in Manatee County?
          </h2>
          <p className="mx-auto mt-6 max-w-lg text-lg text-white/80">
            From Lakewood Ranch to the Manatee River — find out what your property could earn with a free rental analysis.
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
