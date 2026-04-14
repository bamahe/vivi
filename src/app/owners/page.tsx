// ============================================
// Owners Page — Why ViVi for property owners
// ============================================

import type { Metadata } from "next";
import Link from "next/link";
import { PROCESS, INCLUDED } from "@/lib/constants";

export const metadata: Metadata = {
  title: "For Owners",
  description:
    "Why property owners choose ViVi Property Management. In-house maintenance, comprehensive screening, transparent pricing, and a dedicated property manager.",
};

// Benefits specific to owners
const BENEFITS = [
  {
    title: "Maximize rental income",
    desc: "We price aggressively but smart. High enough to maximize your return, realistic enough to avoid costly vacancy. Professional marketing gets your property rented fast.",
  },
  {
    title: "Protect your investment",
    desc: "Regular inspections, thorough tenant screening, and in-house maintenance keep your property in top condition. We catch issues before they become expensive problems.",
  },
  {
    title: "Transparent financials",
    desc: "Monthly owner statements, year-end tax documents, and a dedicated owner portal. You always know exactly where your money is going.",
  },
  {
    title: "In-house maintenance",
    desc: "Best Bay Services handles repairs directly. No third-party markups, faster response times, and quality we stand behind. This alone saves most owners thousands per year.",
  },
  {
    title: "Dedicated property manager",
    desc: "You get one point of contact who knows your property inside and out. Not a call center. Not a rotating pool of agents. Your dedicated manager.",
  },
  {
    title: "Be as involved as you want",
    desc: "Some owners want weekly updates. Others want to check in quarterly. We accommodate both. You set the level of involvement that works for you.",
  },
];

export default function OwnersPage() {
  return (
    <>
      {/* ---- Page header ---- */}
      <section className="gradient-accent px-6 py-20 text-center text-white sm:py-28">
        <div className="mx-auto max-w-3xl">
          <h1 className="text-4xl font-bold sm:text-5xl">
            For property owners
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lg text-white/80">
            Collect rent without the headaches. We handle everything from marketing to maintenance.
          </p>
        </div>
      </section>

      {/* ---- Benefits grid ---- */}
      <section className="px-6 py-20 sm:py-28">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-12 text-center text-3xl font-semibold sm:text-4xl">
            Why owners choose ViVi
          </h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {BENEFITS.map((b) => (
              <div key={b.title} className="card p-8">
                <h3 className="mb-3 font-display text-xl font-semibold">{b.title}</h3>
                <p className="text-sm leading-relaxed text-[var(--muted-text)]">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---- How it works ---- */}
      <section className="section-alt px-6 py-20 sm:py-28">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-14 text-center text-3xl font-semibold sm:text-4xl">
            How it works
          </h2>
          <div className="grid gap-10 sm:grid-cols-3">
            {PROCESS.map((step) => (
              <div key={step.step} className="text-center">
                <span className="mb-4 inline-block font-display text-5xl font-bold text-accent/30">
                  {step.step}
                </span>
                <h3 className="mb-3 font-display text-2xl font-semibold">{step.title}</h3>
                <p className="text-sm leading-relaxed text-[var(--muted-text)]">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---- Owner portal placeholder ---- */}
      <section className="px-6 py-20 text-center sm:py-28">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-3xl font-semibold sm:text-4xl">
            Owner portal
          </h2>
          <p className="mx-auto mt-6 max-w-lg text-[var(--muted-text)] leading-relaxed">
            Track income, expenses, service tickets, and documents from your dedicated owner portal. Access it anytime from any device.
          </p>
          <div className="card mx-auto mt-10 max-w-md p-10">
            <p className="text-lg font-medium text-[var(--muted-text)]">Portal login coming soon</p>
            <p className="mt-2 text-sm text-[var(--muted-text)]">
              Current owners: contact us for portal access.
            </p>
          </div>
        </div>
      </section>

      {/* ---- Bottom CTA ---- */}
      <section className="gradient-accent px-6 py-20 text-center text-white sm:py-28">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-3xl font-bold sm:text-4xl">
            Ready to get started?
          </h2>
          <p className="mx-auto mt-6 max-w-lg text-lg text-white/80">
            Get a free rental analysis and see what your property could earn.
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
