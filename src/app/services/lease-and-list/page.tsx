// ============================================
// /services/lease-and-list
// Tenant placement only. The Lease & List tier already exists in
// PRICING_TIERS and on /pricing; this is the service detail page for owners
// searching "tenant placement only property management" rather than browsing
// the pricing table.
//
// Pricing is read from src/lib/constants.ts so this page can never drift from
// /pricing. Do not hardcode the fee here.
// ============================================

import type { Metadata } from "next";
import Link from "next/link";
import { SITE, PRICING_TIERS } from "@/lib/constants";
import QuickAnswer from "@/components/QuickAnswer";
import Breadcrumbs from "@/components/Breadcrumbs";

const TITLE = "Tenant Placement Only | Lease & List";
const DESCRIPTION =
  "Tenant placement only property management in Tampa Bay. We find and screen the tenant, you self-manage. One-time fee, no ongoing percentage.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/services/lease-and-list" },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    type: "website",
  },
};

// Pull the live tier so the fee on this page always matches /pricing.
const TIER = PRICING_TIERS.find((t) => t.name === "Lease & List")!;
const FULL = PRICING_TIERS.find((t) => t.name === "Standard")!;

// What the placement fee actually buys, in the order it happens
const STEPS = [
  {
    step: "Rent pricing",
    detail:
      "A comparable market analysis on active and recently leased homes within about a mile, adjusted for bedrooms, baths, square footage and condition. Priced too high you sit empty; priced too low you give up money every month of the lease.",
  },
  {
    step: "Professional HDR photography",
    detail:
      "Most renters decide from the photos before they ever request a showing. Phone photos of a dim living room cost you qualified applicants you never knew you lost.",
  },
  {
    step: "MLS and syndication",
    detail:
      "Listed in the MLS and syndicated to 200+ rental sites, so your property reaches renters working with agents as well as renters searching portals directly.",
  },
  {
    step: "Showings",
    detail:
      "We handle scheduling and showing the property. You are not meeting strangers at your rental on weekends or answering the same three questions forty times.",
  },
  {
    step: "Comprehensive screening",
    detail:
      "Credit, income verification, rental history, employment and background. This is the single highest-value step in the whole process, because one bad tenant costs more than years of management fees.",
  },
  {
    step: "Attorney-drafted Florida lease",
    detail:
      "A lease written for Florida law, not a form downloaded from the internet. The lease is what you rely on if anything goes wrong, including deposit claims and eviction.",
  },
  {
    step: "Lease execution and move-in coordination",
    detail:
      "Signatures, deposit collection, key handoff, and a documented move-in condition report with dated photos. That report is what protects your deposit claim at move-out.",
  },
];

// Honest comparison so an owner can self-select
const COMPARE = [
  {
    factor: "What you pay",
    placement: `${TIER.price}, ${TIER.priceNote}`,
    full: `${FULL.price} ${FULL.priceNote}`,
  },
  {
    factor: "Who collects rent",
    placement: "You do",
    full: "We do, with an owner portal and monthly reporting",
  },
  {
    factor: "Maintenance calls",
    placement: "Your phone rings",
    full: "Our phone rings. Work through Best Bay Services at actual cost",
  },
  {
    factor: "Inspections",
    placement: "Move-in report only",
    full: "Periodic inspections through the lease term",
  },
  {
    factor: "Late rent and notices",
    placement: "You handle it",
    full: "We handle notices and coordinate eviction if needed",
  },
  {
    factor: "Lease renewal",
    placement: "You handle it, or hire placement again",
    full: "Handled, renewal fee applies",
  },
  {
    factor: "Best for",
    placement: "Local, hands-on owners with one or two doors and time to manage",
    full: "Out-of-area owners, multiple doors, or anyone who does not want the phone to ring",
  },
];

const FAQS = [
  {
    q: "What is tenant placement only property management?",
    a: `Tenant placement only, which we call Lease & List, means a property manager prices, markets, shows and screens for your rental, prepares the lease and handles move-in, then hands the property back to you to manage. You pay a one-time fee of ${TIER.price} instead of an ongoing percentage of rent. Rent collection, maintenance and inspections stay with you.`,
  },
  {
    q: "How much does tenant placement cost in Tampa Bay?",
    a: `Our Lease & List fee is ${TIER.price}, ${TIER.priceNote}, plus a ${SITE.setupFee} one-time setup fee. There is no ongoing management percentage with this plan, and no vacancy fee.`,
  },
  {
    q: "Is placement only cheaper than full management?",
    a: `Over a single long lease, usually yes, because you pay once instead of ${FULL.price} every month. It stops being cheaper if you turn the property over often, since you pay the placement fee each time, or if self-managing costs you a bad repair decision or a missed legal deadline.`,
  },
  {
    q: "What happens if the tenant stops paying after placement?",
    a: "With placement only, that is yours to handle. You serve the notices, you file if it comes to that, and you absorb the vacancy. That is the real tradeoff for the lower fee, and it is the main reason out-of-area owners choose full management instead.",
  },
  {
    q: "Can I switch from placement only to full management later?",
    a: "Yes. Plenty of owners self-manage a first lease, decide they would rather not take the calls, and move to full management at renewal or when the tenant turns over. The move-in documentation we created stays with the property either way.",
  },
];

export default function LeaseAndListPage() {
  // Service schema so AI engines and search can extract the offering and price
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Lease & List Tenant Placement",
    serviceType: "Tenant placement only property management",
    description: DESCRIPTION,
    url: "https://vivipm.com/services/lease-and-list",
    provider: {
      "@type": "RealEstateAgent",
      name: SITE.name,
      telephone: SITE.phone,
      email: SITE.email,
      url: SITE.url,
      address: {
        "@type": "PostalAddress",
        streetAddress: "14310 N. Dale Mabry Hwy, Ste 100",
        addressLocality: "Tampa",
        addressRegion: "FL",
        postalCode: "33618",
        addressCountry: "US",
      },
    },
    areaServed: [
      "Hillsborough County, FL",
      "Pinellas County, FL",
      "Pasco County, FL",
      "Polk County, FL",
      "Manatee County, FL",
    ],
    offers: {
      "@type": "Offer",
      name: "Lease & List",
      description: `${TIER.price}, ${TIER.priceNote}. Setup fee ${SITE.setupFee}.`,
      priceSpecification: {
        "@type": "PriceSpecification",
        priceCurrency: "USD",
        description: `${TIER.price} one-time placement fee`,
      },
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Included in Lease & List",
      itemListElement: TIER.includes.map((item) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: item },
      })),
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceSchema).replace(/</g, "\\u003c"),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema).replace(/</g, "\\u003c"),
        }}
      />

      {/* ---- Page header ---- */}
      <section className="gradient-accent relative overflow-hidden px-6 py-20 text-center text-white sm:py-28">
        <div className="relative mx-auto max-w-3xl">
          <h1 className="text-4xl font-bold sm:text-5xl">
            Tenant Placement Only
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lg text-white/80">
            We find and screen the tenant. You keep the management. One fee, paid
            once.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link href="/rental-analysis" className="inline-block rounded-full bg-white px-8 py-3.5 text-sm font-semibold text-accent transition-colors hover:bg-white/90">
              Get a Free Rental Analysis
            </Link>
            <a href={`tel:${SITE.phone.replace(/[^\d]/g, "")}`} className="inline-block rounded-full border border-white px-8 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white hover:text-accent">
              Call {SITE.phone}
            </a>
          </div>
        </div>
      </section>

      <Breadcrumbs
        items={[
          { name: "Home", href: "/" },
          { name: "Services", href: "/services" },
          { name: "Lease & List", href: "/services/lease-and-list" },
        ]}
      />

      {/* ---- QuickAnswer, AEO target ---- */}
      <section className="px-6 py-16 sm:py-20">
        <QuickAnswer
          question="What is tenant placement only property management?"
          answer={`Tenant placement only means a property manager prices, markets, shows and screens for your rental, prepares the lease and handles move-in, then hands the property back to you to self-manage. At ${SITE.name} this is our Lease & List plan: ${TIER.price}, ${TIER.priceNote}, plus a ${SITE.setupFee} setup fee, with no ongoing management percentage. Rent collection, maintenance and inspections stay with you. Call ${SITE.phone}.`}
        />
      </section>

      {/* ---- What is included ---- */}
      <section className="px-6 pb-20 sm:pb-28">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-4 font-display text-3xl font-semibold">
            What the placement fee covers
          </h2>
          <p className="mb-10 text-[var(--muted-text)]">
            Seven steps, in the order they happen. The fee is {TIER.price},{" "}
            {TIER.priceNote}, plus a {SITE.setupFee} setup fee. No vacancy fee and
            no ongoing percentage.
          </p>
          <ol className="space-y-6">
            {STEPS.map((s, i) => (
              <li key={s.step} className="card flex gap-5 p-6">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-accent font-semibold text-white">
                  {i + 1}
                </span>
                <div>
                  <h3 className="mb-1 font-display text-lg font-semibold">
                    {s.step}
                  </h3>
                  <p className="text-sm leading-relaxed text-[var(--muted-text)]">
                    {s.detail}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ---- Comparison ---- */}
      <section className="section-alt px-6 py-20 sm:py-28">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-4 font-display text-3xl font-semibold">
            Placement only or full management?
          </h2>
          <p className="mb-10 text-[var(--muted-text)]">
            I would rather you pick the right one than the more expensive one.
            Here is the honest comparison.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-accent text-left text-white">
                  <th className="px-4 py-3"></th>
                  <th className="px-4 py-3">Lease &amp; List</th>
                  <th className="px-4 py-3">Full management</th>
                </tr>
              </thead>
              <tbody>
                {COMPARE.map((row, i) => (
                  <tr key={row.factor} className={i % 2 === 0 ? "bg-white" : ""}>
                    <td className="px-4 py-3 font-semibold">{row.factor}</td>
                    <td className="px-4 py-3 text-[var(--muted-text)]">
                      {row.placement}
                    </td>
                    <td className="px-4 py-3 text-[var(--muted-text)]">
                      {row.full}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-8 text-sm text-[var(--muted-text)]">
            Full pricing for all three plans is on our{" "}
            <Link href="/pricing" className="underline">
              pricing page
            </Link>
            , and{" "}
            <Link href="/services" className="underline">
              our services page
            </Link>{" "}
            covers what full management includes. If you are still deciding
            whether to manage it yourself at all, read{" "}
            <Link href="/blog/self-manage-or-hire-property-manager" className="underline">
              self-manage or hire a property manager
            </Link>
            .
          </p>
        </div>
      </section>

      {/* ---- Who it fits ---- */}
      <section className="px-6 py-20 sm:py-28">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-10 font-display text-3xl font-semibold">
            Who this plan is actually for
          </h2>
          <div className="grid gap-8 sm:grid-cols-2">
            <div className="card p-8">
              <h3 className="mb-4 font-display text-xl font-semibold">
                Placement only fits you if
              </h3>
              <ul className="space-y-2 text-sm leading-relaxed text-[var(--muted-text)]">
                <li>You live close enough to handle a maintenance call yourself</li>
                <li>You have one or two doors, not eight</li>
                <li>You are comfortable serving a late notice on time</li>
                <li>You want the screening done right but the rest is yours</li>
                <li>You expect a long tenancy, so you pay the fee once</li>
              </ul>
            </div>
            <div className="card p-8">
              <h3 className="mb-4 font-display text-xl font-semibold">
                Choose full management instead if
              </h3>
              <ul className="space-y-2 text-sm leading-relaxed text-[var(--muted-text)]">
                <li>You are out of the area or deployed</li>
                <li>You do not want your phone ringing at 10 p.m.</li>
                <li>You are not going to track statutory notice deadlines</li>
                <li>You have multiple properties</li>
                <li>You would rather have reporting than a shoebox of receipts</li>
              </ul>
            </div>
          </div>
          <p className="mt-10 text-sm text-[var(--muted-text)]">
            One thing worth being blunt about: the deposit and notice deadlines in
            Florida are real, and missing one is expensive. If you self-manage,
            read{" "}
            <Link href="/blog/security-deposits-florida-15-30-day-rule" className="underline">
              the 15/30 day deposit rule
            </Link>{" "}
            and{" "}
            <Link href="/blog/florida-landlord-tenant-law-guide" className="underline">
              the Florida landlord-tenant guide
            </Link>{" "}
            before your first tenant moves out, not after.
          </p>
        </div>
      </section>

      {/* ---- CTA ---- */}
      <section className="section-alt px-6 py-20 text-center sm:py-28">
        <div className="mx-auto max-w-2xl">
          <h2 className="mb-4 font-display text-3xl font-semibold">
            Want to know what your property would rent for?
          </h2>
          <p className="mb-8 text-[var(--muted-text)]">
            The rental analysis is free and there is no obligation. If placement
            only is the right fit, we will tell you. If you would be better off
            self-managing with no help at all, we will tell you that too.
          </p>
          <div className="flex flex-col justify-center gap-3 sm:flex-row">
            <Link href="/rental-analysis" className="inline-block rounded-full bg-accent px-8 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-accent-dark">
              Get a Free Rental Analysis
            </Link>
            <a href={`tel:${SITE.phone.replace(/[^\d]/g, "")}`} className="inline-block rounded-full border border-accent px-8 py-3.5 text-sm font-semibold text-accent transition-colors hover:bg-accent hover:text-white">
              Call {SITE.phone}
            </a>
          </div>
        </div>
      </section>

      {/* ---- FAQ ---- */}
      <section className="px-6 py-20 sm:py-28">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-10 font-display text-3xl font-semibold">
            Tenant placement questions
          </h2>
          <div className="space-y-6">
            {FAQS.map((f) => (
              <div key={f.q} className="card p-6">
                <h3 className="mb-2 font-display text-lg font-semibold">{f.q}</h3>
                <p className="text-sm leading-relaxed text-[var(--muted-text)]">
                  {f.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
