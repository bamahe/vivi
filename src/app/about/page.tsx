// ============================================
// About Page — ViVi Property Management
// Entity page with full @graph JSON-LD for
// Organization + Person + RealEstateAgent
// schema. Optimized for AEO extraction.
// ============================================

import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import QuickAnswer from "@/components/QuickAnswer";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "About Us — Barrett Henry, Broker",
  description:
    "ViVi Property Management is led by Barrett Henry, a licensed Florida Broker Associate with REMAX Collective and 23+ years of real estate experience. Serving Hillsborough, Pinellas, Pasco, Polk, and Manatee Counties.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  // Full @graph JSON-LD: Organization + Person + 3 office locations
  const graphSchema = {
    "@context": "https://schema.org",
    "@graph": [
      // --- Organization: ViVi Property Management ---
      {
        "@type": "Organization",
        "@id": "https://vivipm.com/#organization",
        name: "ViVi Property Management",
        url: "https://vivipm.com",
        description:
          "Professional property management across Hillsborough, Pinellas, Pasco, Polk, and Manatee Counties in Tampa Bay. Full-service management at 8-12% of rent collected with maintenance through Best Bay Services.",
        foundingDate: "2015",
        areaServed: [
          { "@type": "AdministrativeArea", name: "Hillsborough County, FL" },
          { "@type": "AdministrativeArea", name: "Pinellas County, FL" },
          { "@type": "AdministrativeArea", name: "Pasco County, FL" },
          { "@type": "AdministrativeArea", name: "Polk County, FL" },
          { "@type": "AdministrativeArea", name: "Manatee County, FL" },
        ],
        founder: { "@id": "https://vivipm.com/#person-barrett-henry" },
        contactPoint: {
          "@type": "ContactPoint",
          telephone: "+1-813-428-9800",
          email: "barrett@nowtb.com",
          contactType: "customer service",
          availableLanguage: "English",
        },
        sameAs: [
          "https://www.facebook.com/BarrettHenryREALTOR",
          "https://www.instagram.com/thenowteam",
          "https://www.linkedin.com/in/barretthenry",
          "https://x.com/BHrealestatetb",
          "https://www.youtube.com/@nowtampa",
          "https://nowtb.com",
          "https://hencre.com",
          "https://valricopropertymgmt.com",
        ],
      },
      // --- Person: Barrett Henry ---
      {
        "@type": ["Person", "RealEstateAgent"],
        "@id": "https://vivipm.com/#person-barrett-henry",
        name: "Barrett Henry",
        jobTitle: "Broker Associate",
        description:
          "Licensed Florida Broker Associate with REMAX Collective. 23+ years of real estate experience. Leads ViVi Property Management and The NOW Team.",
        worksFor: {
          "@type": "RealEstateAgent",
          name: "REMAX Collective",
        },
        hasCredential: [
          { "@type": "EducationalOccupationalCredential", credentialCategory: "e-PRO" },
          { "@type": "EducationalOccupationalCredential", credentialCategory: "MRP" },
          { "@type": "EducationalOccupationalCredential", credentialCategory: "SRS" },
        ],
        email: "barrett@nowtb.com",
        telephone: "+1-813-428-9800",
        url: "https://vivipm.com/about",
        sameAs: [
          "https://www.facebook.com/BarrettHenryREALTOR",
          "https://www.instagram.com/thenowteam",
          "https://www.linkedin.com/in/barretthenry",
          "https://x.com/BHrealestatetb",
          "https://www.youtube.com/@nowtampa",
          "https://www.zillow.com/profile/barretthenry",
          "https://www.realtor.com/realestateagents/56d5364fde071e01006256cd",
          "https://nowtb.com",
          "https://hencre.com",
          "https://valricopropertymgmt.com",
        ],
      },
      // --- REMAX Office: Tampa ---
      {
        "@type": "RealEstateAgent",
        name: "REMAX Collective — Tampa",
        address: {
          "@type": "PostalAddress",
          streetAddress: "14310 N Dale Mabry Hwy Ste 100",
          addressLocality: "Tampa",
          addressRegion: "FL",
          postalCode: "33618",
          addressCountry: "US",
        },
      },
      // --- REMAX Office: Largo ---
      {
        "@type": "RealEstateAgent",
        name: "REMAX Collective — Largo",
        address: {
          "@type": "PostalAddress",
          streetAddress: "11200 Seminole Blvd Ste 202",
          addressLocality: "Largo",
          addressRegion: "FL",
          postalCode: "33778",
          addressCountry: "US",
        },
      },
      // --- REMAX Office: Brandon ---
      {
        "@type": "RealEstateAgent",
        name: "REMAX Collective — Brandon",
        address: {
          "@type": "PostalAddress",
          streetAddress: "417 Lithia Pinecrest Rd",
          addressLocality: "Brandon",
          addressRegion: "FL",
          postalCode: "33511",
          addressCountry: "US",
        },
      },
    ],
  };

  return (
    <>
      {/* @graph JSON-LD for entity disambiguation */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(graphSchema).replace(/</g, "\\u003c"),
        }}
      />

      {/* ---- Hero with background image ---- */}
      <section className="gradient-accent relative overflow-hidden px-6 py-20 text-center text-white sm:py-28">
        <Image
          src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=80"
          alt="Aerial view of Tampa Bay suburban neighborhood served by ViVi Property Management"
          fill
          priority
          className="object-cover opacity-15"
          sizes="100vw"
        />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.08)_0%,transparent_70%)]" />
        <div className="relative mx-auto max-w-3xl">
          <h1 className="text-4xl font-bold leading-tight sm:text-5xl">
            Who runs ViVi Property Management?
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lg font-light leading-relaxed text-white/80">
            Meet the team behind your investment.
          </p>
        </div>
      </section>

      {/* ---- Breadcrumbs ---- */}
      <Breadcrumbs
        items={[
          { name: "Home", href: "/" },
          { name: "About", href: "/about" },
        ]}
      />

      {/* ---- QuickAnswer — AEO extraction target ---- */}
      <section className="px-6 py-16 sm:py-20">
        <QuickAnswer
          question="Who runs ViVi Property Management?"
          answer="ViVi Property Management is led by Barrett Henry, a licensed Florida Broker Associate with REMAX Collective. With 23+ years of real estate experience and maintenance through Best Bay Services, Barrett and his team manage rental properties across five Tampa Bay counties — handling tenant screening, inspections, maintenance, and financial reporting."
        />
      </section>

      {/* ---- About Barrett ---- */}
      <section className="section-alt px-6 py-20 sm:py-28">
        <div className="mx-auto max-w-4xl">
          <div className="flex flex-col items-center mb-10">
            <Image
              src="/images/barrett-henry.png"
              alt="Barrett Henry, Broker Associate and Designated Property Manager at ViVi Property Management"
              width={200}
              height={200}
              className="rounded-full border-4 border-accent/20"
            />
          </div>
          <h2 className="mb-6 text-center text-3xl font-semibold sm:text-4xl">
            What experience does Barrett Henry bring to property management?
          </h2>
          <div className="space-y-6 text-[var(--muted-text)] leading-relaxed">
            <p>
              Barrett Henry holds a Florida Broker Associate license with REMAX Collective and carries three professional designations: <strong>e-PRO</strong> (digital marketing), <strong>MRP</strong> (Military Relocation Professional), and <strong>SRS</strong> (Seller Representative Specialist). With 23+ years of real estate experience, Barrett founded <a href="https://nowtb.com" target="_blank" rel="noopener noreferrer" className="font-medium text-accent underline hover:text-accent-dark">The NOW Team</a> in 2015 and later launched ViVi Property Management to give property owners a transparent, full-service option across Tampa Bay. Barrett also publishes authoritative commercial real estate content at <a href="https://hencre.com" target="_blank" rel="noopener noreferrer" className="font-medium text-accent underline hover:text-accent-dark">hencre.com</a>.
            </p>
            <p>
              Maintenance is handled through <strong>Best Bay Services</strong>, the dedicated partner that handles all repairs and upkeep for ViVi-managed properties. No third-party markups, faster response times, and quality the team personally stands behind. This vertically integrated model is what sets ViVi apart from traditional property managers.
            </p>
            <p>
              For property owners in the Valrico, Brandon, and Riverview area specifically, Barrett also operates <a href="https://valricopropertymgmt.com" target="_blank" rel="noopener noreferrer" className="font-medium text-accent underline hover:text-accent-dark">Valrico Property Management</a>, focused on east Hillsborough County neighborhoods.
            </p>
          </div>
        </div>
      </section>

      {/* ---- Service Area ---- */}
      <section className="px-6 py-20 sm:py-28">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-6 text-center text-3xl font-semibold sm:text-4xl">
            Where does ViVi Property Management operate?
          </h2>
          <p className="mx-auto mb-10 max-w-2xl text-center text-[var(--muted-text)] leading-relaxed">
            ViVi manages properties across five Tampa Bay counties — from urban Tampa to suburban Lakeland and coastal Bradenton.
          </p>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {/* County cards */}
            {[
              { name: "Hillsborough County", cities: "Tampa, Brandon, Valrico, Riverview, Apollo Beach, Plant City" },
              { name: "Pinellas County", cities: "St. Petersburg, Clearwater, Largo, Dunedin, Pinellas Park" },
              { name: "Pasco County", cities: "Wesley Chapel, Land O' Lakes, New Port Richey, Lutz, Trinity" },
              { name: "Polk County", cities: "Lakeland, Winter Haven, Bartow, Auburndale, Haines City" },
              { name: "Manatee County", cities: "Bradenton, Palmetto, Lakewood Ranch, Parrish, Ellenton" },
            ].map((county) => (
              <div key={county.name} className="card p-6">
                <h3 className="mb-2 font-display text-lg font-semibold">{county.name}</h3>
                <p className="text-sm leading-relaxed text-[var(--muted-text)]">{county.cities}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---- Offices ---- */}
      <section className="section-alt px-6 py-20 sm:py-28">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-10 text-center text-3xl font-semibold sm:text-4xl">
            Where are the REMAX Collective offices?
          </h2>
          <div className="grid gap-6 sm:grid-cols-3">
            {[
              { city: "Tampa", address: "14310 N Dale Mabry Hwy, Ste 100", zip: "33618" },
              { city: "Largo", address: "11200 Seminole Blvd, Ste 202", zip: "33778" },
              { city: "Brandon", address: "417 Lithia Pinecrest Rd", zip: "33511" },
            ].map((office) => (
              <div key={office.city} className="card p-6 text-center">
                <h3 className="mb-2 font-display text-lg font-semibold">{office.city}</h3>
                <p className="text-sm text-[var(--muted-text)]">{office.address}</p>
                <p className="text-sm text-[var(--muted-text)]">{office.city}, FL {office.zip}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---- Contact CTA ---- */}
      <section className="gradient-accent px-6 py-20 text-center text-white sm:py-28">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-3xl font-bold sm:text-4xl">
            Have questions about managing your property?
          </h2>
          <p className="mx-auto mt-6 max-w-lg text-lg text-white/80">
            Get a free, no-obligation rental analysis and find out what your property could earn.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/rental-analysis"
              className="rounded-full bg-white px-10 py-4 text-sm font-semibold text-accent transition-colors hover:bg-white/90"
            >
              Free Rent Analysis
            </Link>
            <a
              href="tel:+18134289800"
              className="rounded-full border border-white/30 px-10 py-4 text-sm font-semibold text-white transition-colors hover:bg-white/10"
            >
              Call (813) 428-9800
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
