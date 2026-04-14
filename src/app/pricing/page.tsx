// ============================================
// Pricing Page — Detailed pricing breakdown
// with comparison tables
// ============================================

import type { Metadata } from "next";
import Link from "next/link";
import { INCLUDED } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Transparent property management pricing. 8-12% of monthly rent collected. No hidden fees. Everything included from photography to eviction support.",
};

// Comparison: self-managing vs ViVi
const SELF_VS_VIVI = [
  { task: "Market the property", self: "You handle it", vivi: "Included" },
  { task: "Professional photography", self: "$200-500 per shoot", vivi: "Included" },
  { task: "Tenant screening", self: "$30-50 per applicant", vivi: "Included" },
  { task: "Lease drafting", self: "$200-400 attorney fees", vivi: "Included" },
  { task: "Rent collection", self: "Chase tenants yourself", vivi: "Included" },
  { task: "Maintenance coordination", self: "Find & vet contractors", vivi: "Included (in-house)" },
  { task: "Inspections", self: "Drive out yourself", vivi: "Included" },
  { task: "Eviction filing", self: "$500-1,500+ in legal fees", vivi: "Coordinated for you" },
  { task: "Monthly reporting", self: "DIY spreadsheets", vivi: "Owner portal + reports" },
  { task: "Late-night emergencies", self: "Your phone rings", vivi: "Our phone rings" },
];

// Comparison: typical competitors vs ViVi
const COMPETITOR_VS_VIVI = [
  { feature: "Management fee", competitor: "8-12%", vivi: "8-12%" },
  { feature: "Leasing/placement fee", competitor: "50-100% first month", vivi: "Included" },
  { feature: "Maintenance markup", competitor: "10-20% markup", vivi: "No markup (in-house)" },
  { feature: "Vacancy fee", competitor: "$50-100/month", vivi: "No vacancy fees" },
  { feature: "Lease renewal fee", competitor: "$150-300", vivi: "Included" },
  { feature: "Setup/onboarding fee", competitor: "$200-500", vivi: "Included" },
  { feature: "Photography", competitor: "Extra charge", vivi: "Included" },
  { feature: "3D virtual tour", competitor: "Rarely offered", vivi: "Included" },
  { feature: "Dedicated manager", competitor: "Pool of agents", vivi: "Dedicated to you" },
];

export default function PricingPage() {
  return (
    <>
      {/* ---- Page header ---- */}
      <section className="gradient-accent px-6 py-20 text-center text-white sm:py-28">
        <div className="mx-auto max-w-3xl">
          <h1 className="text-4xl font-bold sm:text-5xl">
            Simple, transparent pricing
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lg text-white/80">
            One plan. Everything included. No hidden fees or surprise charges.
          </p>
        </div>
      </section>

      {/* ---- Pricing card ---- */}
      <section className="px-6 py-20 sm:py-28">
        <div className="mx-auto max-w-2xl">
          <div className="card overflow-hidden">
            <div className="gradient-accent px-8 py-8 text-center text-white">
              <p className="text-sm font-medium uppercase tracking-widest opacity-80">
                Full-Service Management
              </p>
              <p className="mt-3 font-display text-5xl font-bold">8&ndash;12%</p>
              <p className="mt-2 text-base opacity-80">of monthly rent collected</p>
              <p className="mt-1 text-sm opacity-60">
                Percentage based on property type, location, and portfolio size
              </p>
            </div>

            <div className="px-8 py-8">
              <p className="mb-6 text-center text-xs font-semibold uppercase tracking-widest text-[var(--muted-text)]">
                Everything included
              </p>
              <div className="grid gap-3 sm:grid-cols-2">
                {INCLUDED.map((item) => (
                  <div key={item} className="flex items-start gap-2.5 text-sm">
                    <span className="mt-0.5 text-accent">&#10003;</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8 text-center">
                <Link
                  href="/rental-analysis"
                  className="inline-block rounded-full bg-accent px-8 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-accent-dark"
                >
                  Get Your Free Rent Analysis
                </Link>
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
