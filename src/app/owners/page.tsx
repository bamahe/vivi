// ============================================
// Owners Page — Why ViVi for property owners
// ============================================

import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { SITE, PROCESS, INCLUDED } from "@/lib/constants";
import QuickAnswer from "@/components/QuickAnswer";
import Breadcrumbs from "@/components/Breadcrumbs";
import FAQSchema from "@/components/FAQSchema";

export const metadata: Metadata = {
  title: "For Property Owners — Why ViVi",
  description:
    "Why property owners choose ViVi Property Management. Maintenance through Best Bay Services, comprehensive screening, transparent pricing, and a dedicated property manager.",
  alternates: { canonical: "/owners" },
};

// Benefits specific to owners
const BENEFITS = [
  {
    title: "Maximize rental income",
    desc: "We price aggressively but smart. High enough to maximize your return, realistic enough to avoid costly vacancy. Professional marketing gets your property rented fast.",
  },
  {
    title: "Protect your investment",
    desc: "Regular inspections, thorough tenant screening, and maintenance through Best Bay Services keep your property in top condition. We catch issues before they become expensive problems.",
  },
  {
    title: "Transparent financials",
    desc: "Monthly owner statements, year-end tax documents, and a dedicated owner portal. You always know exactly where your money is going.",
  },
  {
    title: "Maintenance through Best Bay Services",
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
      {/* ---- Page header with hero image ---- */}
      <section className="gradient-accent relative overflow-hidden px-6 py-20 text-center text-white sm:py-28">
        <Image
          src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&q=80"
          alt="Beautiful rental property home exterior representing passive income for Tampa Bay property owners"
          fill
          priority
          className="object-cover opacity-15"
          sizes="100vw"
        />
        <div className="relative mx-auto max-w-3xl">
          <h1 className="text-4xl font-bold sm:text-5xl">
            Property Management for Tampa Bay Owners
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lg text-white/80">
            Collect rent without the headaches. We handle everything from marketing to maintenance.
          </p>
        </div>
      </section>

      {/* ---- Breadcrumbs ---- */}
      <Breadcrumbs
        items={[
          { name: "Home", href: "/" },
          { name: "Owners", href: "/owners" },
        ]}
      />

      {/* ---- QuickAnswer — AEO target for Hillsborough property owners ---- */}
      <section className="px-6 py-16 sm:py-20">
        <QuickAnswer
          question="Why do Hillsborough County property owners hire a manager?"
          answer={`Hillsborough County property owners hire managers to handle tenant screening, lease compliance, maintenance emergencies, rent collection, and Florida landlord-tenant law. ViVi Property Management covers all of this for ${SITE.feeRange} of rent collected — typically less than the cost of a single month of vacancy. Maintenance is coordinated through Best Bay Services with no third-party markups. Call ${SITE.phone}.`}
        />
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
          {/* Portal access — direct owners to contact us for login credentials */}
          <div className="card mx-auto mt-10 max-w-md p-10">
            <p className="text-lg font-medium">Need portal access?</p>
            <p className="mt-2 text-sm text-[var(--muted-text)]">
              Contact us to get your login credentials and start using the owner portal.
            </p>
            <a
              href={`tel:${SITE.phone.replace(/[^0-9+]/g, "")}`}
              className="mt-4 inline-block rounded-full bg-accent px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-accent-dark"
            >
              Call {SITE.phone}
            </a>
          </div>
        </div>
      </section>

      {/* ---- Owner FAQs with JSON-LD schema ---- */}
      <section className="section-alt px-6 py-20 sm:py-28">
        <FAQSchema
          heading="Frequently Asked Questions"
          items={[
            {
              question: "What reports do I receive as an owner?",
              answer:
                "You receive monthly owner statements showing rent collected, expenses, and net income deposited to your account. At year-end, we provide a 1099 and full annual summary for tax filing. You can also view real-time financials anytime through the owner portal.",
            },
            {
              question: "Can I cancel my management agreement?",
              answer:
                "Yes. Our management agreements include a cancellation clause with reasonable notice. We do not lock owners into long-term contracts. If the arrangement is not working, you can end it without penalties beyond the notice period.",
            },
            {
              question: "How do you handle maintenance and repairs?",
              answer:
                "Maintenance is coordinated through Best Bay Services, our in-house maintenance partner. This means faster response times, no third-party markups, and quality we stand behind. For routine repairs, we handle everything. For larger expenses, we contact you for approval before any work begins.",
            },
            {
              question: "What does the onboarding process look like?",
              answer:
                "We start with a free rental analysis to determine optimal rent pricing. Then we conduct a property inspection, handle any make-ready work, create professional listing photos and a 3D tour, and market the property across all major platforms. Most properties are tenant-ready within one to two weeks.",
            },
            {
              question: "How fast do you lease a property?",
              answer:
                "Most properties lease within 14 to 30 days depending on condition, pricing, and market conditions. We use professional photography, 3D virtual tours, and syndicate listings across Zillow, Realtor.com, and dozens of other platforms to maximize exposure and reduce vacancy time.",
            },
          ]}
        />
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
