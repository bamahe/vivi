// ============================================
// Service Areas Page — County coverage + city links
// ============================================

import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { COUNTIES } from "@/lib/constants";
import { CITIES } from "@/lib/cities";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Tampa Bay Service Areas We Manage",
  description:
    "ViVi Property Management serves Hillsborough, Pinellas, Pasco, Polk, and Manatee Counties across Tampa Bay. See all cities we manage.",
  alternates: { canonical: "/areas" },
};

// Additional context for each county
const COUNTY_DETAILS: Record<string, string> = {
  "Hillsborough County":
    "Our home base. From Valrico and Brandon to Riverview and Plant City, we know these neighborhoods block by block. Strong rental demand, growing population, and solid appreciation.",
  "Pinellas County":
    "Coastal rentals from St. Petersburg to Clearwater command premium rents. We handle the unique challenges of beach-area properties — higher turnover, seasonal demand, and HOA lease approvals.",
  "Pasco County":
    "Wesley Chapel and Land O' Lakes are among the fastest-growing areas in Florida. New construction rentals, master-planned communities, and strong tenant demand from families relocating to Tampa Bay.",
  "Polk County":
    "Lakeland and Winter Haven offer some of the best cash flow in the Tampa Bay metro. Lower price points, strong rental yields, and steady demand from commuters and retirees.",
  "Manatee County":
    "Bradenton, Lakewood Ranch, and Parrish are booming. From waterfront properties to new-build subdivisions, Manatee County delivers consistent rental income with strong appreciation.",
};

export default function AreasPage() {
  const activeCounties = COUNTIES.filter((c) => c.active);

  return (
    <>
      {/* ---- Page header with hero image ---- */}
      <section className="gradient-accent relative overflow-hidden px-6 py-20 text-center text-white sm:py-28">
        <Image
          src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=80"
          alt="Aerial view of Tampa Bay residential communities managed by ViVi Property Management"
          fill
          priority
          className="object-cover opacity-15"
          sizes="100vw"
        />
        <div className="relative mx-auto max-w-3xl">
          <h1 className="text-4xl font-bold sm:text-5xl">
            Tampa Bay Property Management Areas
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lg text-white/80">
            Five Tampa Bay counties. One dedicated team.
          </p>
        </div>
      </section>

      {/* ---- Breadcrumbs ---- */}
      <Breadcrumbs
        items={[
          { name: "Home", href: "/" },
          { name: "Areas", href: "/areas" },
        ]}
      />

      {/* ---- Active counties with city links ---- */}
      <section className="px-6 py-20 sm:py-28">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-12 text-center text-3xl font-semibold sm:text-4xl">
            Active service areas
          </h2>

          <div className="space-y-16">
            {activeCounties.map((county) => {
              // Find cities in this county that have dedicated pages
              const countyCities = CITIES.filter((c) => c.county === county.name);
              return (
                <div key={county.name}>
                  <h3 className="mb-3 font-display text-2xl font-semibold">{county.name}</h3>
                  {COUNTY_DETAILS[county.name] && (
                    <p className="mb-6 max-w-3xl text-sm leading-relaxed text-[var(--muted-text)]">
                      {COUNTY_DETAILS[county.name]}
                    </p>
                  )}
                  <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    {countyCities.map((city) => (
                      <Link
                        key={city.slug}
                        href={`/areas/${city.slug}`}
                        className="card px-5 py-4 transition-colors hover:border-accent"
                      >
                        <p className="font-display text-lg font-semibold">{city.name}</p>
                        <p className="mt-1 text-xs text-[var(--muted-text)]">
                          Median rent: {city.medianRent}
                        </p>
                      </Link>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ---- Why local knowledge matters ---- */}
      <section className="section-alt px-6 py-20 sm:py-28">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-semibold sm:text-4xl">
            Why does local knowledge matter for property management?
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-[var(--muted-text)] leading-relaxed">
            National property management companies treat every market the same. We don&apos;t. We know which Hillsborough County neighborhoods command premium rents, which Pasco zip codes are seeing the fastest growth, and which Polk County properties deliver the best cash flow. That local expertise translates directly to fewer vacancies, better tenants, and higher returns for you.
          </p>
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
