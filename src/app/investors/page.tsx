// ============================================
// Investors Page — Rental property investment
// landing page for out-of-state owners,
// first-time landlords, home converters, and
// inherited property owners.
// ============================================

import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { SITE } from "@/lib/constants";
import QuickAnswer from "@/components/QuickAnswer";
import Breadcrumbs from "@/components/Breadcrumbs";
import FAQSchema from "@/components/FAQSchema";

export const metadata: Metadata = {
  title: "Tampa Bay Rental Property Investment",
  description:
    "Invest in Tampa Bay rental property with confidence. ViVi Property Management handles everything for out-of-state investors, first-time landlords, and inherited property owners. Free rental analysis.",
  alternates: { canonical: "/investors" },
};

// Four investor profiles we serve
const INVESTOR_PROFILES = [
  {
    icon: "🌎",
    title: "Out-of-State Investors",
    desc: "Managing a rental property from another state is stressful and expensive when things go wrong. We are your boots on the ground — handling tenant issues, inspections, maintenance, and emergencies so you never have to fly in for a broken water heater. Full transparency through your owner portal.",
  },
  {
    icon: "🔑",
    title: "First-Time Landlords",
    desc: "The learning curve for landlording is steep and the mistakes are expensive. Wrong tenant screening, missed lease clauses, Florida landlord-tenant law violations — we handle all of it so you do not have to learn the hard way. Start collecting rent from day one without the headaches.",
  },
  {
    icon: "🏡",
    title: "Converting Your Home to a Rental",
    desc: "Relocating for work or upgrading to a bigger home? Keep your current property as an investment instead of selling in a down market. We handle the transition from owner-occupied to rental — pricing, tenant placement, lease execution, and ongoing management.",
  },
  {
    icon: "📜",
    title: "Inherited Property",
    desc: "Inheriting a property comes with questions. Should you sell, rent, or hold? We help you evaluate the rental income potential, handle any make-ready work, and get a qualified tenant in place fast. No pressure to sell — just data-driven guidance on your best option.",
  },
];

// Why Tampa Bay is a strong rental market
const MARKET_REASONS = [
  {
    title: "Population growth",
    desc: "Tampa Bay adds tens of thousands of new residents every year. More people means more renters, stronger demand, and lower vacancy rates for well-managed properties.",
  },
  {
    title: "Diverse job market",
    desc: "MacDill Air Force Base, USF, AdventHealth, Tampa General Hospital, and a growing tech sector provide a stable employment base that drives consistent rental demand across all price points.",
  },
  {
    title: "Landlord-friendly laws",
    desc: "Florida statutes favor property owners with clear eviction timelines, no rent control, and straightforward security deposit rules. Your investment is protected by law.",
  },
  {
    title: "No state income tax",
    desc: "Florida has no state income tax on rental income. Combined with favorable property tax homestead exemptions and depreciation deductions, your net returns go further here than in most states.",
  },
  {
    title: "Strong rental demand",
    desc: "Rising home prices and interest rates keep more people renting longer. Tampa Bay vacancy rates for professionally managed properties remain well below the national average.",
  },
];

export default function InvestorsPage() {
  return (
    <>
      {/* ---- Hero section with background image ---- */}
      <section className="gradient-accent relative overflow-hidden px-6 py-20 text-center text-white sm:py-28">
        <Image
          src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200&q=80"
          alt="Tampa Bay rental property representing investment opportunity for landlords and investors"
          fill
          priority
          className="object-cover opacity-15"
          sizes="100vw"
        />
        <div className="relative mx-auto max-w-3xl">
          <h1 className="text-4xl font-bold sm:text-5xl">
            Tampa Bay Rental Property Investment
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lg text-white/80">
            Professional property management so your investment works for you — not the other way around.
          </p>
          <Link
            href="/rental-analysis"
            className="mt-10 inline-block rounded-full bg-white px-10 py-4 text-sm font-semibold text-accent transition-colors hover:bg-white/90"
          >
            Get Your Free Rental Analysis
          </Link>
        </div>
      </section>

      {/* ---- Breadcrumbs ---- */}
      <Breadcrumbs
        items={[
          { name: "Home", href: "/" },
          { name: "Investors", href: "/investors" },
        ]}
      />

      {/* ---- QuickAnswer — AEO target for Tampa Bay rental investment ---- */}
      <section className="px-6 py-16 sm:py-20">
        <QuickAnswer
          question="Is Tampa Bay a good market for rental property investment?"
          answer={`Tampa Bay is one of the strongest rental markets in the Southeast. Population growth, a diverse job market anchored by MacDill AFB, USF, and major hospitals, no state income tax, and landlord-friendly Florida laws create favorable conditions for investors. Hillsborough County median rents hover around $2,050 with low vacancy in professionally managed properties. ViVi Property Management offers three plans — placement-only, full management at 10%, or flat-fee at $299/month. Call ${SITE.phone}.`}
        />
      </section>

      {/* ---- Why Tampa Bay section ---- */}
      <section className="section-alt px-6 py-20 sm:py-28">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-12 text-center text-3xl font-semibold sm:text-4xl">
            Why investors choose Tampa Bay
          </h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {MARKET_REASONS.map((reason) => (
              <div key={reason.title} className="card p-8">
                <h3 className="mb-3 font-display text-xl font-semibold">{reason.title}</h3>
                <p className="text-sm leading-relaxed text-[var(--muted-text)]">{reason.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---- Who We Help — investor profiles ---- */}
      <section className="px-6 py-20 sm:py-28">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-12 text-center text-3xl font-semibold sm:text-4xl">
            Who we help
          </h2>
          <div className="grid gap-8 sm:grid-cols-2">
            {INVESTOR_PROFILES.map((profile) => (
              <div key={profile.title} className="card p-8">
                <span className="mb-4 block text-3xl">{profile.icon}</span>
                <h3 className="mb-3 font-display text-xl font-semibold">{profile.title}</h3>
                <p className="text-sm leading-relaxed text-[var(--muted-text)]">{profile.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---- What Your Investment Gets ---- */}
      <section className="section-alt px-6 py-20 sm:py-28">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-6 text-center text-3xl font-semibold sm:text-4xl">
            What your investment gets
          </h2>
          <p className="mx-auto mb-12 max-w-2xl text-center text-[var(--muted-text)] leading-relaxed">
            Full-service property management designed to maximize your return and protect your asset.
          </p>
          <div className="grid gap-8 sm:grid-cols-3">
            <div className="card p-8 text-center">
              <h3 className="mb-3 font-display text-xl font-semibold">Full-service management</h3>
              <p className="text-sm leading-relaxed text-[var(--muted-text)]">
                Leasing, screening, rent collection, inspections, financial reporting, and eviction support.
                Three plans — placement-only, full management at 10%, or flat-fee at $299/month.
              </p>
              <Link
                href="/services"
                className="mt-4 inline-block text-sm font-medium text-accent hover:underline"
              >
                View all services
              </Link>
            </div>
            <div className="card p-8 text-center">
              <h3 className="mb-3 font-display text-xl font-semibold">Dedicated maintenance partner</h3>
              <p className="text-sm leading-relaxed text-[var(--muted-text)]">
                Best Bay Services handles repairs directly. No third-party markups, faster response
                times, and quality we stand behind. This alone saves most investors thousands per year.
              </p>
            </div>
            <div className="card p-8 text-center">
              <h3 className="mb-3 font-display text-xl font-semibold">Transparent pricing</h3>
              <p className="text-sm leading-relaxed text-[var(--muted-text)]">
                No hidden fees, no surprise charges. Monthly owner statements, year-end tax documents,
                and a dedicated owner portal so you always know where your money is going.
              </p>
              <Link
                href="/pricing"
                className="mt-4 inline-block text-sm font-medium text-accent hover:underline"
              >
                See pricing
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ---- Market Snapshot ---- */}
      <section className="px-6 py-20 sm:py-28">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-6 text-3xl font-semibold sm:text-4xl">
            Hillsborough County market snapshot
          </h2>
          <div className="card mx-auto max-w-2xl p-10">
            <div className="grid gap-8 sm:grid-cols-3">
              <div>
                <p className="font-display text-3xl font-bold text-accent">~$2,050</p>
                <p className="mt-2 text-sm text-[var(--muted-text)]">Median monthly rent</p>
              </div>
              <div>
                <p className="font-display text-3xl font-bold text-accent">Strong</p>
                <p className="mt-2 text-sm text-[var(--muted-text)]">Rental demand</p>
              </div>
              <div>
                <p className="font-display text-3xl font-bold text-accent">Low</p>
                <p className="mt-2 text-sm text-[var(--muted-text)]">Vacancy in managed properties</p>
              </div>
            </div>
            <p className="mt-8 text-sm leading-relaxed text-[var(--muted-text)]">
              Tampa Bay continues to attract residents from higher-cost markets. Rising home prices
              and interest rates keep more people renting, driving sustained demand for well-managed
              rental properties across {SITE.areas}.
            </p>
          </div>
        </div>
      </section>

      {/* ---- ROI Tools CTA ---- */}
      <section className="section-alt px-6 py-20 sm:py-28">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold sm:text-4xl">
            Run the numbers on your investment
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-[var(--muted-text)] leading-relaxed">
            Use our ROI calculator to estimate cash flow, cap rate, and annual return on your Tampa
            Bay rental property before you commit.
          </p>
          <Link
            href="/tools/roi-calculator"
            className="mt-8 inline-block rounded-full bg-accent px-8 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-accent-dark"
          >
            Open ROI Calculator
          </Link>
        </div>
      </section>

      {/* ---- Investor FAQs with JSON-LD schema ---- */}
      <section className="px-6 py-20 sm:py-28">
        <FAQSchema
          heading="Investor FAQs"
          items={[
            {
              question: "Is Tampa Bay still a good rental market?",
              answer:
                "Tampa Bay remains one of the strongest rental markets in Florida. Steady population growth, a diverse employer base including MacDill AFB, USF, and major hospital systems, no state income tax, and landlord-friendly laws continue to attract both residents and investors. Median rents in Hillsborough County are approximately $2,050 per month with low vacancy in professionally managed properties.",
            },
            {
              question: "How much does property management cost for investors?",
              answer: `ViVi Property Management offers three plans: Lease & List (placement only) for 100% of one month's rent, Standard full management at 10% of monthly rent, or Peace of Mind flat-fee at $299/month. All plans include first month's rent as a placement fee. Setup is ${SITE.setupFee} one-time. No monthly fees during vacancy. Call ${SITE.phone} for a custom quote.`,
            },
            {
              question: "Can I manage a Tampa Bay rental from out of state?",
              answer:
                "You can, but most out-of-state owners find it difficult and expensive to manage remotely. Maintenance emergencies, tenant issues, and Florida landlord-tenant compliance require someone local. ViVi acts as your boots on the ground — handling everything from leasing to maintenance through Best Bay Services while you monitor from your owner portal.",
            },
            {
              question: "Should I sell or rent my Tampa home?",
              answer:
                "It depends on your financial goals and timeline. If your mortgage rate is low and the property cash flows as a rental, holding it as an investment can build long-term wealth. We offer a free rental analysis that shows projected monthly income, expenses, and net return so you can make a data-driven decision. Contact us for a no-obligation evaluation.",
            },
            {
              question: "What returns can I expect on a Tampa Bay rental property?",
              answer:
                "Returns vary based on purchase price, rental income, expenses, and financing. Many Tampa Bay investors see 6 to 10 percent cash-on-cash returns on well-located single-family rentals. Our free rental analysis includes projected income, estimated expenses, and net operating income so you know what to expect before you invest.",
            },
            {
              question: "How do I get started with ViVi Property Management?",
              answer: `Start with a free rental analysis. We evaluate your property, determine optimal rent pricing, and outline the onboarding timeline. From there, we handle make-ready coordination, professional photography, marketing, tenant screening, and lease execution. Most properties are tenant-ready within one to two weeks. Call ${SITE.phone} or visit our rental analysis page to begin.`,
            },
          ]}
        />
      </section>

      {/* ---- Bottom CTA ---- */}
      <section className="gradient-accent px-6 py-20 text-center text-white sm:py-28">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-3xl font-bold sm:text-4xl">
            See what your property could earn
          </h2>
          <p className="mx-auto mt-6 max-w-lg text-lg text-white/80">
            Get a free rental analysis with projected income, expenses, and net return.
            No obligation, no pressure.
          </p>
          <Link
            href="/rental-analysis"
            className="mt-10 inline-block rounded-full bg-white px-10 py-4 text-sm font-semibold text-accent transition-colors hover:bg-white/90"
          >
            Get Your Free Rental Analysis
          </Link>
        </div>
      </section>
    </>
  );
}
