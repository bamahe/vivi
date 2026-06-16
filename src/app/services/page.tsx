// ============================================
// Services Page — Overview of all PM services
// ============================================

import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { SITE } from "@/lib/constants";
import QuickAnswer from "@/components/QuickAnswer";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Tampa Bay Property Management Services",
  description: `Full-service property management from ${SITE.name}. Leasing, tenant screening, maintenance through Best Bay Services, inspections, financial reporting, and eviction support.`,
  alternates: { canonical: "/services" },
};

// All services with icon, title, and detailed description
const ALL_SERVICES = [
  {
    icon: "📋",
    title: "Leasing & Marketing",
    desc: "Professional HDR photography, competitive rent analysis, MLS listing across 15,000+ agents, and syndication to Zillow, Trulia, Hotpads, and 200+ rental sites. Most properties rent in under 14 days.",
  },
  {
    icon: "🔍",
    title: "Tenant Screening",
    desc: "Comprehensive screening includes criminal background check, credit pull, employment and income verification, rental history from past landlords, debt-to-income analysis, identity fraud detection, and pet screening. We do not settle for warm bodies.",
  },
  {
    icon: "🔧",
    title: "Maintenance Through Best Bay Services",
    desc: "Best Bay Services is our dedicated maintenance partner. No third-party markups, faster response times, and quality we personally stand behind. Repairs over your approved threshold get your approval first. Emergencies are handled immediately.",
  },
  {
    icon: "🏠",
    title: "Property Inspections",
    desc: "Regular interior and exterior inspections to catch issues early. Move-in and move-out inspections are fully documented with photos and condition reports. We protect your investment before problems become expensive.",
  },
  {
    icon: "📊",
    title: "Financial Reporting",
    desc: "Monthly owner statements, year-end 1099 and P&L documents, and a dedicated owner portal where you can track income, expenses, and service tickets in real time. Everything you need for tax season, delivered on schedule.",
  },
  {
    icon: "⚖️",
    title: "Eviction Support",
    desc: "We screen carefully to prevent evictions, but when they are necessary, we handle the filing on your behalf. In most cases, you will not need to appear in court. Court costs and attorney fees are charged to your account as incurred.",
  },
  {
    icon: "📝",
    title: "Lease Management",
    desc: "Attorney-drafted Florida leases, HOA lease approval handling, renewal negotiations, and rent increase analysis. We handle the paperwork so you do not have to.",
  },
  {
    icon: "🛡️",
    title: "Damage Protection",
    desc: "Our damage protection plan covers issues beyond normal wear and tear. Combined with thorough security deposits and pet screening, your property stays protected throughout every tenancy.",
  },
];

export default function ServicesPage() {
  // Service schema for structured data — helps AI engines extract service offerings
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Property Management",
    provider: {
      "@type": "LocalBusiness",
      name: "ViVi Property Management",
      url: "https://vivipm.com",
      telephone: "(813) 428-9800",
    },
    areaServed: [
      { "@type": "AdministrativeArea", name: "Hillsborough County, FL" },
      { "@type": "AdministrativeArea", name: "Pinellas County, FL" },
      { "@type": "AdministrativeArea", name: "Pasco County, FL" },
      { "@type": "AdministrativeArea", name: "Polk County, FL" },
      { "@type": "AdministrativeArea", name: "Manatee County, FL" },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Property Management Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Leasing & Marketing",
            description: "Professional HDR photography, MLS listing across 15,000+ agents, and syndication to 200+ rental sites. Most properties rent in under 14 days.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Tenant Screening",
            description: "Comprehensive screening including criminal background check, credit report, employment and income verification, rental history, debt-to-income analysis, identity fraud detection, and pet screening.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Maintenance Coordination",
            description: "All maintenance handled through Best Bay Services with no third-party markups, faster response times, and quality personally guaranteed.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Property Inspections",
            description: "Regular interior and exterior inspections with move-in and move-out documentation including photos and condition reports.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Financial Reporting",
            description: "Monthly owner statements, year-end 1099 and P&L documents, and a dedicated owner portal for real-time income, expense, and service ticket tracking.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Eviction Support",
            description: "Full eviction coordination including filing on behalf of property owners. Court costs and attorney fees charged as incurred.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Lease Management",
            description: "Attorney-drafted Florida leases, HOA lease approval handling, renewal negotiations, and rent increase analysis.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Damage Protection",
            description: "Damage protection plan covering issues beyond normal wear and tear, combined with thorough security deposits and pet screening.",
          },
        },
      ],
    },
  };

  return (
    <>
      {/* Service JSON-LD schema for search engines and AI extraction */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceSchema).replace(/</g, "\\u003c"),
        }}
      />

      {/* ---- Page header with hero image ---- */}
      <section className="gradient-accent relative overflow-hidden px-6 py-20 text-center text-white sm:py-28">
        <Image
          src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1200&q=80"
          alt="Residential rental property exterior managed by ViVi Property Management in Tampa Bay"
          fill
          priority
          className="object-cover opacity-15"
          sizes="100vw"
        />
        <div className="relative mx-auto max-w-3xl">
          <h1 className="text-4xl font-bold sm:text-5xl">
            Tampa Bay Property Management Services
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lg text-white/80">
            End-to-end property management so you can collect rent without the headaches.
          </p>
        </div>
      </section>

      {/* ---- Breadcrumbs ---- */}
      <Breadcrumbs
        items={[
          { name: "Home", href: "/" },
          { name: "Services", href: "/services" },
        ]}
      />

      {/* ---- QuickAnswer — AEO target for Hillsborough PM services ---- */}
      <section className="px-6 py-16 sm:py-20">
        <QuickAnswer
          question="What property management services are available in Hillsborough County?"
          answer={`ViVi Property Management provides full-service property management across Hillsborough County, FL — including leasing, tenant screening, maintenance through Best Bay Services, inspections, financial reporting, eviction support, and HOA lease approval handling. Three plans — placement-only, 10% of rent, or $299/month flat. No hidden fees. Call ${SITE.phone}.`}
        />
      </section>

      {/* ---- Services grid ---- */}
      <section className="px-6 py-20 sm:py-28">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-8 sm:grid-cols-2">
            {ALL_SERVICES.map((svc) => (
              <div key={svc.title} className="card p-8">
                <span className="mb-4 block text-3xl">{svc.icon}</span>
                <h2 className="mb-3 font-display text-xl font-semibold">{svc.title}</h2>
                <p className="text-sm leading-relaxed text-[var(--muted-text)]">{svc.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---- Related Resources — internal links for SEO ---- */}
      <section className="px-6 py-20 sm:py-28">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-4 text-center text-3xl font-semibold sm:text-4xl">
            Learn more about property management with ViVi
          </h2>
          <p className="mx-auto mb-12 max-w-xl text-center text-[var(--muted-text)]">
            According to the National Association of Residential Property Managers, professional management reduces vacancy rates by up to 40% compared to self-managed properties.
          </p>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <Link href="/guarantees" className="card block p-6 transition-colors hover:border-accent">
              <p className="mb-2 font-display text-lg font-semibold">Our 5 Guarantees</p>
              <p className="text-sm leading-relaxed text-[var(--muted-text)]">21-day leasing, tenant quality, 24-hour maintenance response, full transparency, and cancel-anytime flexibility.</p>
            </Link>
            <Link href="/compare" className="card block p-6 transition-colors hover:border-accent">
              <p className="mb-2 font-display text-lg font-semibold">Self-Manage vs. Hire ViVi</p>
              <p className="text-sm leading-relaxed text-[var(--muted-text)]">Side-by-side comparison of costs, time, and outcomes for each approach.</p>
            </Link>
            <Link href="/pricing" className="card block p-6 transition-colors hover:border-accent">
              <p className="mb-2 font-display text-lg font-semibold">Transparent Pricing</p>
              <p className="text-sm leading-relaxed text-[var(--muted-text)]">Three plans from 10% of rent. No hidden fees, no vacancy charges.</p>
            </Link>
            <Link href="/blog/cost-of-bad-tenant-screening-prevents-it" className="card block p-6 transition-colors hover:border-accent">
              <p className="mb-2 font-display text-lg font-semibold">The True Cost of a Bad Tenant</p>
              <p className="text-sm leading-relaxed text-[var(--muted-text)]">How professional screening prevents $5,000-$15,000 losses from one bad placement.</p>
            </Link>
            <Link href="/blog/preventive-maintenance-saves-florida-rental-owners-thousands" className="card block p-6 transition-colors hover:border-accent">
              <p className="mb-2 font-display text-lg font-semibold">Preventive Maintenance Guide</p>
              <p className="text-sm leading-relaxed text-[var(--muted-text)]">How $1,500/year in proactive maintenance prevents $10,000+ emergencies.</p>
            </Link>
            <Link href="/investors" className="card block p-6 transition-colors hover:border-accent">
              <p className="mb-2 font-display text-lg font-semibold">For Investors</p>
              <p className="text-sm leading-relaxed text-[var(--muted-text)]">Out-of-state owners, first-time landlords, inherited property — we handle it all.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* ---- Bottom CTA ---- */}
      <section className="section-alt px-6 py-20 text-center sm:py-28">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-3xl font-semibold sm:text-4xl">
            Ready to hand off the work?
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-[var(--muted-text)]">
            Get a free rental analysis and see how much your property could earn under professional management.
          </p>
          <Link
            href="/rental-analysis"
            className="mt-8 inline-block rounded-full bg-accent px-8 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-accent-dark"
          >
            Get Your Free Rent Analysis
          </Link>
        </div>
      </section>
    </>
  );
}
