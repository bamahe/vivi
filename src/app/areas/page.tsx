// ============================================
// Service Areas Page — County coverage + expansion
// ============================================

import type { Metadata } from "next";
import Link from "next/link";
import { COUNTIES } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Service Areas",
  description:
    "ViVi Property Management serves Hillsborough, Pinellas, Pasco, Polk, and Manatee Counties. Expanding to all 67 Florida counties.",
};

export default function AreasPage() {
  const activeCounties = COUNTIES.filter((c) => c.active);

  return (
    <>
      {/* ---- Page header ---- */}
      <section className="gradient-accent px-6 py-20 text-center text-white sm:py-28">
        <div className="mx-auto max-w-3xl">
          <h1 className="text-4xl font-bold sm:text-5xl">
            Where we manage
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lg text-white/80">
            Active across five core Florida counties with statewide expansion underway.
          </p>
        </div>
      </section>

      {/* ---- Active counties ---- */}
      <section className="px-6 py-20 sm:py-28">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-12 text-center text-3xl font-semibold sm:text-4xl">
            Active service areas
          </h2>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {activeCounties.map((county) => (
              <div key={county.name} className="card p-8">
                <h3 className="mb-3 font-display text-2xl font-semibold">{county.name}</h3>
                <p className="text-sm leading-relaxed text-[var(--muted-text)]">
                  <span className="font-medium text-[var(--foreground)]">Cities: </span>
                  {county.cities}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---- Expansion ---- */}
      <section className="section-alt px-6 py-20 text-center sm:py-28">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-3xl font-semibold sm:text-4xl">
            All 67 Florida counties
          </h2>
          <p className="mx-auto mt-6 max-w-lg text-[var(--muted-text)] leading-relaxed">
            We are actively expanding statewide. If you own property elsewhere in Florida, reach out. We may already have coverage in your area or can get it set up quickly.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-block rounded-full bg-accent px-8 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-accent-dark"
          >
            Contact Us About Your Area
          </Link>
        </div>
      </section>

      {/* ---- Bottom CTA ---- */}
      <section className="gradient-accent px-6 py-20 text-center text-white sm:py-28">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-3xl font-bold sm:text-4xl">
            Own property in our service area?
          </h2>
          <p className="mx-auto mt-6 max-w-lg text-lg text-white/80">
            Find out what it could rent for with a free analysis.
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
