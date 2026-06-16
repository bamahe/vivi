// ============================================
// Guarantees Page — 5 named property management
// guarantees with FAQ section and CTA
// ============================================

import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { SITE } from "@/lib/constants";
import QuickAnswer from "@/components/QuickAnswer";
import Breadcrumbs from "@/components/Breadcrumbs";
import FAQ from "@/components/FAQ";
import FAQSchema from "@/components/FAQSchema";

export const metadata: Metadata = {
  title: "Our 5 Property Management Guarantees",
  description:
    "ViVi Property Management backs every property with 5 guarantees: 21-day leasing, tenant quality, 24-hour maintenance response, full transparency, and cancel-anytime flexibility. No fine print.",
  alternates: { canonical: "/guarantees" },
};

// The 5 named guarantees with details for each section
const GUARANTEES = [
  {
    number: "01",
    name: "21-Day Leasing Guarantee",
    headline: "Your Property Marketed and Leased — Fast",
    description:
      "We market aggressively to lease your property within 21 days of being market-ready. Professional photography, MLS syndication to 15,000+ agents, and distribution across Zillow, Trulia, and 200+ rental sites.",
    whatItMeans:
      "Every day your property sits vacant costs you money. We treat vacancy like an emergency — professional photos go up within 48 hours of market-ready status, and your listing hits every major rental platform simultaneously. No slow rollouts, no waiting around.",
  },
  {
    number: "02",
    name: "Tenant Quality Guarantee",
    headline: "Thoroughly Screened Tenants — Backed by a Promise",
    description:
      "Every tenant passes our comprehensive screening: credit check, criminal background, employment verification, income verification (3x rent minimum), eviction history, and landlord references. If a tenant we place is evicted within the first 12 months, we re-lease your property at no additional placement fee.",
    whatItMeans:
      "Bad tenants are the most expensive problem in property management. Our screening process eliminates guesswork — and if we get it wrong, we cover the cost of finding your next tenant. That is how confident we are in our process.",
  },
  {
    number: "03",
    name: "Maintenance Response Guarantee",
    headline: "24-Hour Response — 2 Hours for Emergencies",
    description:
      "Tenant maintenance requests get a response within 24 hours — emergencies within 2 hours. All repairs handled through Best Bay Services at vendor cost with zero markup.",
    whatItMeans:
      "Ignored maintenance requests lead to bigger problems and unhappy tenants who leave. We respond fast, fix it right, and never mark up the cost. Best Bay Services is our dedicated maintenance partner — no random subcontractors, no inflated invoices.",
  },
  {
    number: "04",
    name: "Transparency Guarantee",
    headline: "No Hidden Fees — No Surprise Charges — No Fine Print",
    description:
      "Monthly owner statements, year-end tax documents, and 24/7 access to your owner portal. No hidden fees, no surprise charges, no fine print. Our fee schedule is published on our website.",
    whatItMeans:
      "You will never wonder where your money went. Every dollar in and every dollar out is documented in your owner portal. Our pricing page shows exactly what we charge — the same page every prospective client sees. No special rates, no buried clauses.",
  },
  {
    number: "05",
    name: "Happiness Guarantee",
    headline: "Cancel Anytime — No Penalties — No Locked-In Contracts",
    description:
      "Cancel anytime with 30 days' notice. No early termination fees, no penalties, no locked-in contracts. We earn your business every month.",
    whatItMeans:
      "Most management companies lock you into 12-month contracts with steep cancellation fees. We do not. If we are not delivering results, you should be free to leave. That pressure keeps us performing at our best — every single month.",
  },
];

// FAQ items specific to the guarantees page
const GUARANTEE_FAQS = [
  {
    q: "What happens if my property is not leased within 21 days?",
    a: "We reassess the marketing strategy, adjust pricing if needed, and continue marketing at no additional cost. The 21-day guarantee is our commitment to aggressive, professional marketing from day one — not a passive listing and hope approach.",
    question: "What happens if my property is not leased within 21 days?",
    answer:
      "We reassess the marketing strategy, adjust pricing if needed, and continue marketing at no additional cost. The 21-day guarantee is our commitment to aggressive, professional marketing from day one — not a passive listing and hope approach.",
  },
  {
    q: "What does the Tenant Quality Guarantee actually cover?",
    a: "If a tenant we place through our screening process is evicted within the first 12 months, we re-lease your property at no additional placement fee. This covers our placement fee only — court costs and legal fees for the eviction itself are handled separately.",
    question: "What does the Tenant Quality Guarantee actually cover?",
    answer:
      "If a tenant we place through our screening process is evicted within the first 12 months, we re-lease your property at no additional placement fee. This covers our placement fee only — court costs and legal fees for the eviction itself are handled separately.",
  },
  {
    q: "How does Best Bay Services keep maintenance costs lower?",
    a: "Best Bay Services is our dedicated maintenance partner — not a random third-party vendor. Because we coordinate directly, there are no middleman markups, no inflated invoices, and faster response times. You pay vendor cost for parts and labor, period.",
    question: "How does Best Bay Services keep maintenance costs lower?",
    answer:
      "Best Bay Services is our dedicated maintenance partner — not a random third-party vendor. Because we coordinate directly, there are no middleman markups, no inflated invoices, and faster response times. You pay vendor cost for parts and labor, period.",
  },
  {
    q: "Are there really no cancellation fees?",
    a: "Correct. Give us 30 days' written notice and you are free to go. No early termination fee, no penalty, no buyout clause. We believe if we are not earning your business every month, you should not be forced to stay.",
    question: "Are there really no cancellation fees?",
    answer:
      "Correct. Give us 30 days' written notice and you are free to go. No early termination fee, no penalty, no buyout clause. We believe if we are not earning your business every month, you should not be forced to stay.",
  },
  {
    q: "Where can I see ViVi's full fee schedule?",
    a: `Our complete fee schedule is published on our pricing page at vivipm.com/pricing. We offer three plans: Lease & List (placement only), Standard at 10% of rent, and Peace of Mind at $299/month flat. Placement fee is 100% of first month's rent, lease renewal is ${SITE.renewalFee}, and onboarding is ${SITE.setupFee}. No hidden fees beyond what is listed.`,
    question: "Where can I see ViVi's full fee schedule?",
    answer: `Our complete fee schedule is published on our pricing page at vivipm.com/pricing. We offer three plans: Lease & List (placement only), Standard at 10% of rent, and Peace of Mind at $299/month flat. Placement fee is 100% of first month's rent, lease renewal is ${SITE.renewalFee}, and onboarding is ${SITE.setupFee}. No hidden fees beyond what is listed.`,
  },
];

export default function GuaranteesPage() {
  return (
    <>
      {/* ---- Page header with hero image ---- */}
      <section className="gradient-accent relative overflow-hidden px-6 py-20 text-center text-white sm:py-28">
        <Image
          src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200&q=80"
          alt="Property keys on a signed lease representing ViVi Property Management guarantees in Tampa Bay"
          fill
          priority
          className="object-cover opacity-15"
          sizes="100vw"
        />
        <div className="relative mx-auto max-w-3xl">
          <h1 className="text-4xl font-bold sm:text-5xl">
            Our Property Management Guarantees
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lg text-white/80">
            Five guarantees that protect your investment and hold us accountable. No fine print.
          </p>
        </div>
      </section>

      {/* ---- Breadcrumbs ---- */}
      <Breadcrumbs
        items={[
          { name: "Home", href: "/" },
          { name: "Guarantees", href: "/guarantees" },
        ]}
      />

      {/* ---- QuickAnswer — AEO target ---- */}
      <section className="px-6 py-16 sm:py-20">
        <QuickAnswer
          question="What guarantees does ViVi Property Management offer?"
          answer={`ViVi Property Management offers five guarantees: 21-day leasing, tenant quality with free re-leasing if an eviction occurs within 12 months, 24-hour maintenance response (2 hours for emergencies), full financial transparency with no hidden fees, and a cancel-anytime happiness guarantee with no penalties. Call ${SITE.phone} for details.`}
        />
      </section>

      {/* ---- Guarantees — individual sections ---- */}
      {GUARANTEES.map((guarantee) => (
        <section
          key={guarantee.number}
          className={`px-6 py-20 sm:py-28 ${
            Number(guarantee.number) % 2 === 0 ? "section-alt" : ""
          }`}
        >
          <div className="mx-auto max-w-3xl">
            {/* Guarantee number badge */}
            <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-accent">
              Guarantee {guarantee.number}
            </p>

            {/* Guarantee name */}
            <h2 className="mb-3 text-3xl font-semibold sm:text-4xl">
              {guarantee.name}
            </h2>

            {/* Headline / subheading */}
            <p className="mb-6 text-lg text-[var(--muted-text)]">
              {guarantee.headline}
            </p>

            {/* Main description */}
            <p className="mb-8 text-base leading-relaxed">
              {guarantee.description}
            </p>

            {/* What it means for you */}
            <div className="rounded-xl border border-accent/20 bg-accent/5 px-8 py-6">
              <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-accent">
                What This Means for You
              </p>
              <p className="text-sm leading-relaxed text-[var(--foreground)]">
                {guarantee.whatItMeans}
              </p>
            </div>
          </div>
        </section>
      ))}

      {/* ---- FAQ section with accordion + schema ---- */}
      <section className="section-alt px-6 py-20 sm:py-28">
        <div className="mx-auto max-w-3xl">
          <FAQ
            items={GUARANTEE_FAQS}
            heading="Guarantee FAQs"
          />
          {/* JSON-LD FAQPage schema for search engines */}
          <FAQSchema items={GUARANTEE_FAQS} />
        </div>
      </section>

      {/* ---- Bottom CTA ---- */}
      <section className="gradient-accent px-6 py-20 text-center text-white sm:py-28">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-3xl font-bold sm:text-4xl">
            See these guarantees in action
          </h2>
          <p className="mx-auto mt-6 max-w-lg text-lg text-white/80">
            Get a free rental analysis and find out what your property could earn under management you can trust.
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
