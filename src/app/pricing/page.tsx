// ============================================
// Pricing Page — Detailed pricing breakdown
// with comparison tables
// ============================================

import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { SITE, PRICING_TIERS, ADDITIONAL_FEES, TENANT_FEES } from "@/lib/constants";
import QuickAnswer from "@/components/QuickAnswer";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Pricing — Transparent PM Fees",
  description:
    "Professional Tampa Bay property management. Three simple plans — placement-only, full management at 10%, or flat-fee at $299/month. No maintenance markups. Maintenance through Best Bay Services.",
  alternates: { canonical: "/pricing" },
};

// Comparison: self-managing vs ViVi
const SELF_VS_VIVI = [
  { task: "Market the property", self: "You handle it", vivi: "Included" },
  { task: "Professional photography", self: "$200-500 per shoot", vivi: "Included" },
  { task: "Tenant screening", self: "$30-50 per applicant", vivi: "Included" },
  { task: "Lease drafting", self: "$200-400 attorney fees", vivi: "Included" },
  { task: "Rent collection", self: "Chase tenants yourself", vivi: "Included" },
  { task: "Maintenance coordination", self: "Find & vet contractors", vivi: "Best Bay Services" },
  { task: "Inspections", self: "Drive out yourself", vivi: "Included" },
  { task: "Eviction filing", self: "$500-1,500+ in legal fees", vivi: "Coordinated for you" },
  { task: "Monthly reporting", self: "DIY spreadsheets", vivi: "Owner portal + reports" },
  { task: "Late-night emergencies", self: "Your phone rings", vivi: "Our phone rings" },
];

// Comparison: typical competitors vs ViVi
const COMPETITOR_VS_VIVI = [
  { feature: "Management fee", competitor: "8-12%", vivi: "10% or $299/month flat" },
  { feature: "Leasing/placement fee", competitor: "50-100% first month", vivi: "100% of first month's rent" },
  { feature: "Maintenance markup", competitor: "10-20% markup", vivi: "$0 — Best Bay Services, actual cost" },
  { feature: "Vacancy fee", competitor: "$50-100/month", vivi: "No vacancy fees" },
  { feature: "Lease renewal fee", competitor: "$150-300", vivi: "$250" },
  { feature: "Setup/onboarding fee", competitor: "$200-500", vivi: "$250" },
  { feature: "Photography", competitor: "Extra charge", vivi: "Professional HDR included" },
  { feature: "Dedicated manager", competitor: "Pool of agents", vivi: "Dedicated to you" },
];

export default function PricingPage() {
  return (
    <>
      {/* ---- Page header with hero image ---- */}
      <section className="gradient-accent relative overflow-hidden px-6 py-20 text-center text-white sm:py-28">
        <Image
          src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&q=80"
          alt="Modern rental home exterior representing transparent property management pricing in Tampa Bay"
          fill
          priority
          className="object-cover opacity-15"
          sizes="100vw"
        />
        <div className="relative mx-auto max-w-3xl">
          <h1 className="text-4xl font-bold sm:text-5xl">
            Property Management Pricing — Tampa Bay
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lg text-white/80">
            Three simple plans. No hidden fees. $0 maintenance markup.
          </p>
        </div>
      </section>

      {/* ---- Breadcrumbs ---- */}
      <Breadcrumbs
        items={[
          { name: "Home", href: "/" },
          { name: "Pricing", href: "/pricing" },
        ]}
      />

      {/* ---- QuickAnswer — AEO target for Hillsborough PM pricing ---- */}
      <section className="px-6 py-16 sm:py-20">
        <QuickAnswer
          question="How much does property management cost in Hillsborough County?"
          answer={`ViVi Property Management offers three plans for Hillsborough County owners: Lease & List (tenant placement only) for 100% of one month's rent, Standard full management at 10% of monthly rent, and Peace of Mind flat-fee management at $299/month. Setup is $250 one-time. No vacancy fees, $0 maintenance markup through Best Bay Services. Call ${SITE.phone} for a free rental analysis.`}
        />
      </section>

      {/* ---- Three-tier pricing cards ---- */}
      <section className="px-6 py-20 sm:py-28">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-8 lg:grid-cols-3">
            {PRICING_TIERS.map((tier) => (
              <div
                key={tier.name}
                className={`card overflow-hidden ${tier.popular ? "ring-2 ring-accent" : ""}`}
              >
                {/* Tier header */}
                <div className={`px-6 py-8 text-center ${tier.popular ? "gradient-accent text-white" : "bg-[var(--card-bg)]"}`}>
                  {tier.popular && (
                    <p className="mb-2 text-xs font-semibold uppercase tracking-widest opacity-80">
                      Most Popular
                    </p>
                  )}
                  <p className="font-display text-2xl font-bold">{tier.name}</p>
                  <p className={`mt-1 text-sm ${tier.popular ? "opacity-80" : "text-[var(--muted-text)]"}`}>
                    {tier.subtitle}
                  </p>
                  <p className={`mt-4 font-display text-3xl font-bold ${tier.popular ? "" : "text-accent"}`}>
                    {tier.price}
                  </p>
                  <p className={`mt-1 text-xs ${tier.popular ? "opacity-70" : "text-[var(--muted-text)]"}`}>
                    {tier.priceNote}
                  </p>
                </div>

                {/* Tier details */}
                <div className="px-6 py-6">
                  <p className="mb-5 text-sm text-[var(--muted-text)]">{tier.description}</p>
                  <ul className="space-y-2.5">
                    {tier.includes.map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-sm">
                        <span className="mt-0.5 text-accent">&#10003;</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-8 text-center">
                    <Link
                      href="/rental-analysis"
                      className={`inline-block rounded-full px-8 py-3.5 text-sm font-semibold transition-colors ${
                        tier.popular
                          ? "bg-accent text-white hover:bg-accent-dark"
                          : "border border-accent text-accent hover:bg-accent hover:text-white"
                      }`}
                    >
                      Get Your Free Rent Analysis
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Additional fees breakdown */}
          <div className="mt-14 mx-auto max-w-3xl">
            <h2 className="mb-6 text-center text-2xl font-semibold">Additional fees</h2>
            <div className="card overflow-hidden">
              <div className="divide-y divide-[var(--card-border)]">
                {Object.values(ADDITIONAL_FEES).map((fee) => (
                  <div key={fee.label} className="flex items-center justify-between px-6 py-4">
                    <div>
                      <p className="text-sm font-medium">{fee.label}</p>
                      {fee.note && <p className="text-xs text-[var(--muted-text)]">{fee.note}</p>}
                    </div>
                    <p className="text-sm font-semibold text-accent">{fee.amount}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Tenant-side fees */}
          <div className="mt-10 mx-auto max-w-3xl">
            <h2 className="mb-6 text-center text-2xl font-semibold">Tenant-paid fees</h2>
            <p className="mb-4 text-center text-sm text-[var(--muted-text)]">
              These fees are paid by the tenant, not the property owner.
            </p>
            <div className="card overflow-hidden">
              <div className="divide-y divide-[var(--card-border)]">
                {TENANT_FEES.map((fee) => (
                  <div key={fee.label} className="flex items-center justify-between px-6 py-4">
                    <div>
                      <p className="text-sm font-medium">{fee.label}</p>
                      {fee.note && <p className="text-xs text-[var(--muted-text)]">{fee.note}</p>}
                    </div>
                    <p className="text-sm font-semibold">{fee.amount}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---- Self-managing vs ViVi ---- */}
      <section className="section-alt px-6 py-20 sm:py-28">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-4 text-center text-3xl font-semibold sm:text-4xl">
            Self-managing vs. ViVi
          </h2>
          <p className="mx-auto mb-12 max-w-xl text-center text-[var(--muted-text)]">
            Managing your own rental costs more than you think -- in time, money, and stress.
          </p>

          <div className="card overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-[var(--card-border)]">
                    <th className="px-6 py-4 text-left font-sans font-semibold">Task</th>
                    <th className="px-6 py-4 text-left font-sans font-semibold">Self-Managing</th>
                    <th className="px-6 py-4 text-left font-sans font-semibold text-accent">ViVi</th>
                  </tr>
                </thead>
                <tbody>
                  {SELF_VS_VIVI.map((row) => (
                    <tr key={row.task} className="border-b border-[var(--card-border)] last:border-0">
                      <td className="px-6 py-3.5 font-medium">{row.task}</td>
                      <td className="px-6 py-3.5 text-[var(--muted-text)]">{row.self}</td>
                      <td className="px-6 py-3.5 font-medium text-accent">{row.vivi}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* ---- Competitors vs ViVi ---- */}
      <section className="px-6 py-20 sm:py-28">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-4 text-center text-3xl font-semibold sm:text-4xl">
            Other managers vs. ViVi
          </h2>
          <p className="mx-auto mb-12 max-w-xl text-center text-[var(--muted-text)]">
            Most property managers charge the same percentage -- then stack hidden fees on top.
          </p>

          <div className="card overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-[var(--card-border)]">
                    <th className="px-6 py-4 text-left font-sans font-semibold">Feature</th>
                    <th className="px-6 py-4 text-left font-sans font-semibold">Typical Manager</th>
                    <th className="px-6 py-4 text-left font-sans font-semibold text-accent">ViVi</th>
                  </tr>
                </thead>
                <tbody>
                  {COMPETITOR_VS_VIVI.map((row) => (
                    <tr key={row.feature} className="border-b border-[var(--card-border)] last:border-0">
                      <td className="px-6 py-3.5 font-medium">{row.feature}</td>
                      <td className="px-6 py-3.5 text-[var(--muted-text)]">{row.competitor}</td>
                      <td className="px-6 py-3.5 font-medium text-accent">{row.vivi}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* ---- Related Resources — internal links for SEO ---- */}
      <section className="section-alt px-6 py-20 sm:py-28">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-12 text-center text-3xl font-semibold sm:text-4xl">
            Make a confident decision
          </h2>
          <div className="grid gap-6 sm:grid-cols-2">
            <Link href="/compare" className="card block p-6 transition-colors hover:border-accent">
              <p className="mb-2 font-display text-lg font-semibold">Full Comparison: Self-Manage vs. Hire</p>
              <p className="text-sm leading-relaxed text-[var(--muted-text)]">See the real costs, hidden fees, and what Tampa Bay landlords actually pay with each option.</p>
            </Link>
            <Link href="/guarantees" className="card block p-6 transition-colors hover:border-accent">
              <p className="mb-2 font-display text-lg font-semibold">Our 5 Guarantees</p>
              <p className="text-sm leading-relaxed text-[var(--muted-text)]">21-day leasing, tenant quality, 24-hour maintenance response, transparency, and cancel-anytime flexibility.</p>
            </Link>
            <Link href="/services" className="card block p-6 transition-colors hover:border-accent">
              <p className="mb-2 font-display text-lg font-semibold">Full Service Breakdown</p>
              <p className="text-sm leading-relaxed text-[var(--muted-text)]">Everything included in your management fee — from photography to eviction support.</p>
            </Link>
            <Link href="/tools/roi-calculator" className="card block p-6 transition-colors hover:border-accent">
              <p className="mb-2 font-display text-lg font-semibold">ROI Calculator</p>
              <p className="text-sm leading-relaxed text-[var(--muted-text)]">Run the numbers on any Tampa Bay rental — cash flow, cap rate, and cash-on-cash return.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* ---- Bottom CTA ---- */}
      <section className="gradient-accent px-6 py-20 text-center text-white sm:py-28">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-3xl font-bold sm:text-4xl">
            See what your property could earn
          </h2>
          <p className="mx-auto mt-6 max-w-lg text-lg text-white/80">
            Free, no-obligation rental analysis. We will show you the numbers.
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
