// ============================================
// Dynamic City Page — /areas/[slug]
// Each city gets a unique, PM-focused page
// targeting "property management in [City] FL"
// ============================================

import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CITIES, getCityBySlug, getAllCitySlugs } from "@/lib/cities";
import { SITE, INCLUDED } from "@/lib/constants";
import FAQ from "@/components/FAQ";
import FAQSchema from "@/components/FAQSchema";
import QuickAnswer from "@/components/QuickAnswer";
import Breadcrumbs from "@/components/Breadcrumbs";

// Generate static pages for every city at build time
export function generateStaticParams() {
  return getAllCitySlugs().map((slug) => ({ slug }));
}

// Dynamic metadata per city
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const city = getCityBySlug(slug);
  if (!city) return {};

  return {
    title: `Property Management in ${city.name}, FL`,
    description: `Professional property management in ${city.name}, ${city.county}, Florida. ${SITE.feeRange} of rent collected. Maintenance through Best Bay Services, comprehensive tenant screening, and a dedicated property manager. Call ${SITE.phone}.`,
    openGraph: {
      title: `Property Management in ${city.name}, FL | ViVi PM`,
      description: `Full-service property management in ${city.name}. ${city.medianRent} median rent. ${SITE.feeRange} management fee. No hidden fees.`,
    },
    alternates: { canonical: `/areas/${slug}` },
  };
}

export default async function CityPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const city = getCityBySlug(slug);
  if (!city) notFound();

  // Find nearby cities in the same county for internal linking
  const siblingSlugs = CITIES.filter(
    (c) => c.county === city.county && c.slug !== city.slug
  );

  // Build AEO FAQ items for schema markup
  const aeoFaqs = city.faqs.map((f) => ({
    question: f.q,
    answer: f.a,
  }));

  // JSON-LD: LocalBusiness + GeoCoordinates for this city
  const localSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: `ViVi Property Management — ${city.name}`,
    description: city.intro,
    url: `https://vivipm.com/areas/${city.slug}`,
    telephone: SITE.phone,
    email: SITE.email,
    address: {
      "@type": "PostalAddress",
      addressLocality: city.name,
      addressRegion: city.state,
      postalCode: city.zip,
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: city.lat,
      longitude: city.lng,
    },
    areaServed: {
      "@type": "City",
      name: city.name,
      containedInPlace: {
        "@type": "AdministrativeArea",
        name: city.county,
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
            {city.county}
          </p>
          <h1 className="text-4xl font-bold leading-tight sm:text-5xl">
            {city.headline}
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lg font-light leading-relaxed text-white/80">
            Full-service property management in {city.name} backed by 23+ years of real estate experience and maintenance through Best Bay Services.
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
          { name: city.name, href: `/areas/${city.slug}` },
        ]}
      />

      {/* ---- QuickAnswer — AEO target ---- */}
      <section className="px-6 py-16 sm:py-20">
        <QuickAnswer
          question={`Who provides property management in ${city.name}, Florida?`}
          answer={`ViVi Property Management provides full-service property management in ${city.name}, ${city.county}. Led by Barrett Henry with 23+ years of real estate experience, ViVi charges ${SITE.feeRange} of rent collected with no hidden fees. Services include tenant screening, maintenance through Best Bay Services, rent collection, inspections, and financial reporting. Call ${SITE.phone}.`}
        />
      </section>

      {/* ---- Market stats bar ---- */}
      <section className="border-y border-[var(--card-border)] bg-[var(--card-bg)]">
        <div className="mx-auto grid max-w-4xl grid-cols-2 gap-6 px-6 py-10 sm:grid-cols-4">
          <div className="text-center">
            <p className="font-display text-3xl font-bold text-accent">{city.medianRent}</p>
            <p className="mt-1 text-xs font-medium uppercase tracking-widest text-[var(--muted-text)]">Median rent</p>
          </div>
          <div className="text-center">
            <p className="font-display text-3xl font-bold text-accent">{city.medianHome}</p>
            <p className="mt-1 text-xs font-medium uppercase tracking-widest text-[var(--muted-text)]">Median home price</p>
          </div>
          <div className="text-center">
            <p className="font-display text-3xl font-bold text-accent">{city.population}</p>
            <p className="mt-1 text-xs font-medium uppercase tracking-widest text-[var(--muted-text)]">Population</p>
          </div>
          <div className="text-center">
            <p className="font-display text-3xl font-bold text-accent">{SITE.feeRange}</p>
            <p className="mt-1 text-xs font-medium uppercase tracking-widest text-[var(--muted-text)]">Management fee</p>
          </div>
        </div>
      </section>

      {/* ---- Intro + why manage here ---- */}
      <section className="px-6 py-20 sm:py-28">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-6 text-3xl font-semibold sm:text-4xl">
            Why invest in rental property in {city.name}?
          </h2>
          <p className="text-[var(--muted-text)] leading-relaxed">{city.intro}</p>

          <h3 className="mb-4 mt-12 font-display text-2xl font-semibold">
            Why hire a property manager in {city.name}?
          </h3>
          <p className="text-[var(--muted-text)] leading-relaxed">{city.whyManage}</p>

          <h3 className="mb-4 mt-12 font-display text-2xl font-semibold">
            {city.name} rental market overview
          </h3>
          <p className="text-[var(--muted-text)] leading-relaxed">{city.rentalMarket}</p>
        </div>
      </section>

      {/* ---- Neighborhoods ---- */}
      <section className="section-alt px-6 py-20 sm:py-28">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-8 text-3xl font-semibold sm:text-4xl">
            Neighborhoods we manage in {city.name}
          </h2>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {city.neighborhoods.map((n) => (
              <div key={n} className="card px-5 py-4">
                <p className="text-sm font-medium">{n}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 text-sm text-[var(--muted-text)]">
            Don&apos;t see your neighborhood? We manage properties throughout {city.name} and {city.county}. <Link href="/contact" className="font-medium text-accent underline">Contact us</Link> about your property.
          </p>
        </div>
      </section>

      {/* ---- What&apos;s included ---- */}
      <section className="px-6 py-20 sm:py-28">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-4 text-3xl font-semibold sm:text-4xl">
            What does ViVi&apos;s {city.name} property management include?
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

      {/* ---- Local lifestyle ---- */}
      <section className="section-alt px-6 py-20 sm:py-28">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-6 text-3xl font-semibold sm:text-4xl">
            Living in {city.name}
          </h2>
          <p className="text-[var(--muted-text)] leading-relaxed">{city.nearbyAttractions}</p>
        </div>
      </section>

      {/* ---- FAQ with schema ---- */}
      {aeoFaqs.length > 0 && (
        <section className="px-6 py-20 sm:py-28">
          <FAQSchema
            items={aeoFaqs}
            heading={`${city.name} property management FAQ`}
          />
        </section>
      )}

      {/* ---- Nearby cities (internal linking) ---- */}
      {siblingSlugs.length > 0 && (
        <section className="section-alt px-6 py-20 sm:py-28">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-8 text-center text-3xl font-semibold sm:text-4xl">
              Property management in nearby {city.county} cities
            </h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {siblingSlugs.map((sibling) => (
                <Link
                  key={sibling.slug}
                  href={`/areas/${sibling.slug}`}
                  className="card px-6 py-5 transition-colors hover:border-accent"
                >
                  <p className="font-display text-lg font-semibold">{sibling.name}</p>
                  <p className="mt-1 text-xs text-[var(--muted-text)]">{sibling.county}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ---- Bottom CTA ---- */}
      <section className="gradient-accent px-6 py-20 text-center text-white sm:py-28">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-3xl font-bold sm:text-4xl">
            Own rental property in {city.name}?
          </h2>
          <p className="mx-auto mt-6 max-w-lg text-lg text-white/80">
            Find out what it could rent for with a free, no-obligation analysis.
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
