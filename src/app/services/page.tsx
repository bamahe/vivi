// ============================================
// Services Page — Overview of all PM services
// ============================================

import type { Metadata } from "next";
import Link from "next/link";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Services",
  description: `Full-service property management from ${SITE.name}. Leasing, tenant screening, in-house maintenance, inspections, financial reporting, and eviction support.`,
};

// All services with icon, title, and detailed description
const ALL_SERVICES = [
  {
    icon: "📋",
    title: "Leasing & Marketing",
    desc: "Professional HDR photography, immersive 3D virtual tours, competitive rent analysis, MLS listing across 15,000+ agents, and syndication to Zillow, Trulia, Hotpads, and 200+ rental sites. Most properties rent in under 14 days.",
  },
  {
    icon: "🔍",
    title: "Tenant Screening",
    desc: "Comprehensive screening includes criminal background check, credit pull, employment and income verification, rental history from past landlords, debt-to-income analysis, identity fraud detection, and pet screening. We do not settle for warm bodies.",
  },
  {
    icon: "🔧",
    title: "In-House Maintenance",
    desc: "Best Bay Services is our in-house maintenance team. No third-party markups, faster response times, and quality we personally stand behind. Repairs over your approved threshold get your approval first. Emergencies are handled immediately.",
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
  return (
    <>
      {/* ---- Page header ---- */}
      <section className="gradient-accent px-6 py-20 text-center text-white sm:py-28">
        <div className="mx-auto max-w-3xl">
          <h1 className="text-4xl font-bold sm:text-5xl">
            What we handle for you
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lg text-white/80">
            End-to-end property management so you can collect rent without the headaches.
          </p>
        </div>
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
