// ============================================
// County Landing Page — /areas/pinellas-county
// Aggregates all Pinellas County cities
// for local SEO targeting county-level queries
// ============================================

import type { Metadata } from "next";
import Link from "next/link";
import { CITIES } from "@/lib/cities";
import { SITE, INCLUDED } from "@/lib/constants";
import FAQSchema from "@/components/FAQSchema";
import QuickAnswer from "@/components/QuickAnswer";
import Breadcrumbs from "@/components/Breadcrumbs";

// Static metadata for Pinellas County page
export const metadata: Metadata = {
  title: "Property Management in Pinellas County, FL",
  description:
    "Property management in Pinellas County, FL — St. Petersburg, Clearwater, Largo, Dunedin, and Seminole. Three plans from 10% of rent. No hidden fees.",
  openGraph: {
    title: "Property Management in Pinellas County, FL | ViVi PM",
    description:
      "Full-service property management across Pinellas County. Gulf Coast expertise. Three plans from 10% of rent. No hidden fees.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Property Management in Pinellas County, FL | ViVi PM",
    description:
      "Full-service property management across Pinellas County. Three plans from 10% of rent. No hidden fees.",
  },
  alternates: { canonical: "/areas/pinellas-county" },
};

export default function PinellasCountyPage() {
  // Filter cities that belong to Pinellas County
  const countyCities = CITIES.filter(
    (c) => c.county === "Pinellas County"
  );

  // County-specific FAQ items for schema markup
  const faqItems = [
    {
      question:
        "What cities does ViVi manage in Pinellas County?",
      answer:
        "ViVi manages rental properties in St. Petersburg, Clearwater, Largo, Dunedin, and Seminole. We cover both inland neighborhoods and beach-adjacent communities throughout the county.",
    },
    {
      question:
        "Is Pinellas County a good rental market for investors?",
      answer:
        "Pinellas County offers strong rental demand driven by Gulf Coast lifestyle appeal, limited land for new construction, and a diverse tenant base of professionals, retirees, and seasonal residents. The county's geographic constraints — bounded by water on three sides — help protect property values and keep vacancy rates low.",
    },
    {
      question:
        "How does ViVi handle Gulf Coast property maintenance?",
      answer:
        "Pinellas County properties face salt air corrosion, humidity-related wear, and tropical weather impacts. Our maintenance partner Best Bay Services understands these challenges and performs preventive maintenance to protect your investment — HVAC servicing, exterior upkeep, and storm prep are part of how we manage coastal properties.",
    },
    {
      question:
        "What are typical rent prices in Pinellas County?",
      answer:
        "Pinellas County rents range from approximately $1,850/month in Largo to $2,200/month in St. Petersburg and Dunedin. Waterfront properties, beach-adjacent homes, and walkable downtown locations command premiums above these medians.",
    },
  ];

  // JSON-LD: LocalBusiness with county as areaServed
  const localSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "ViVi Property Management — Pinellas County",
    description:
      "Full-service property management across Pinellas County, Florida. Covering St. Petersburg, Clearwater, Largo, Dunedin, and Seminole.",
    url: "https://vivipm.com/areas/pinellas-county",
    telephone: SITE.phone,
    email: SITE.email,
    address: {
      "@type": "PostalAddress",
      addressLocality: "St. Petersburg",
      addressRegion: "FL",
      postalCode: "33701",
      addressCountry: "US",
    },
    areaServed: {
      "@type": "AdministrativeArea",
      name: "Pinellas County",
      containedInPlace: {
        "@type": "State",
        name: "Florida",
      },
    },
    priceRange: "10% monthly or $299/month flat",
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
            Gulf Coast Living
          </p>
          <h1 className="text-4xl font-bold leading-tight sm:text-5xl">
            Property Management in Pinellas County, FL
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lg font-light leading-relaxed text-white/80">
            From downtown St. Pete to Clearwater Beach — professional property management across the Pinellas peninsula with 23+ years of real estate experience.
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
          { name: "Pinellas County", href: "/areas/pinellas-county" },
        ]}
      />

      {/* ---- QuickAnswer — AEO target ---- */}
      <section className="px-6 py-16 sm:py-20">
        <QuickAnswer
          question="Who provides property management in Pinellas County?"
          answer={`ViVi Property Management provides full-service property management across Pinellas County, Florida — including St. Petersburg, Clearwater, Largo, Dunedin, and Seminole. Led by Barrett Henry with 23+ years of real estate experience, ViVi offers three plans — placement-only, full management at 10%, or flat-fee at $299/month — with no hidden fees. Maintenance through Best Bay Services handles coastal property needs. Call ${SITE.phone}.`}
        />
      </section>

      {/* ---- County rental market overview ---- */}
      <section className="px-6 py-20 sm:py-28">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-6 text-3xl font-semibold sm:text-4xl">
            Pinellas County rental market overview
          </h2>
          <p className="text-[var(--muted-text)] leading-relaxed">
            Pinellas County is the most densely populated county in Florida, occupying a narrow peninsula between Tampa Bay and the Gulf of Mexico. That geographic constraint limits new construction and keeps rental demand perpetually strong. St. Petersburg has undergone a dramatic transformation over the past decade, evolving into one of the most desirable cities in the Southeast with a thriving arts scene, waterfront dining, and a growing remote-worker population driving premium rents. Clearwater offers Gulf Coast beach proximity with both long-term and seasonal rental appeal. Largo provides a more affordable entry point for investors seeking cash flow in mid-county. Dunedin draws tenants willing to pay a lifestyle premium for walkable downtown charm and Honeymoon Island access. Across the county, limited buildable land means existing properties hold value well, and vacancies stay short in most neighborhoods.
          </p>
        </div>
      </section>

      {/* ---- Cities grid ---- */}
      <section className="section-alt px-6 py-20 sm:py-28">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-4 text-center text-3xl font-semibold sm:text-4xl">
            Cities we manage in Pinellas County
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
            What does ViVi&apos;s Pinellas County management include?
          </h2>
          <p className="mb-10 text-[var(--muted-text)]">
            Three plans starting at 10% of rent. No maintenance markup. No vacancy fees.
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
            Get a free rental analysis and find out what your property could earn with professional management.
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
