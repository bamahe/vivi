// ============================================
// Compare Page — Self-Managing vs. ViVi PM
// vs. Typical Property Manager comparison
// ============================================

import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { SITE } from "@/lib/constants";
import QuickAnswer from "@/components/QuickAnswer";
import FAQ from "@/components/FAQ";
import FAQSchema from "@/components/FAQSchema";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Self-Managing vs. Hiring a Property Manager | Tampa Bay Comparison",
  description:
    "Compare self-managing your rental vs. hiring ViVi PM vs. a typical property manager. See the real costs, hidden fees, and what Tampa Bay landlords actually pay.",
  alternates: { canonical: "/compare" },
};

// ---- Three-column comparison table data ----
const COMPARISON_ROWS = [
  {
    category: "Tenant screening",
    self: "DIY background check",
    vivi: "Comprehensive 6-point screening",
    typical: "Varies by company",
    selfIcon: "✗",
    viviIcon: "✓",
    typicalIcon: "~",
  },
  {
    category: "Marketing & leasing",
    self: "Zillow listing only",
    vivi: "MLS + 200+ sites + pro photos",
    typical: "Basic MLS listing",
    selfIcon: "✗",
    viviIcon: "✓",
    typicalIcon: "~",
  },
  {
    category: "Rent collection",
    self: "Chase tenants yourself",
    vivi: "Online portal, automatic deposits",
    typical: "Varies by company",
    selfIcon: "✗",
    viviIcon: "✓",
    typicalIcon: "~",
  },
  {
    category: "Maintenance",
    self: "Find contractors yourself",
    vivi: "Best Bay Services, no markup",
    typical: "10-20% markup on repairs",
    selfIcon: "✗",
    viviIcon: "✓",
    typicalIcon: "✗",
  },
  {
    category: "Legal compliance",
    self: "Google it yourself",
    vivi: "Full FL landlord-tenant law compliance",
    typical: "Varies by company",
    selfIcon: "✗",
    viviIcon: "✓",
    typicalIcon: "~",
  },
  {
    category: "Financial reporting",
    self: "Spreadsheets",
    vivi: "Monthly statements + year-end tax docs",
    typical: "Quarterly reports",
    selfIcon: "✗",
    viviIcon: "✓",
    typicalIcon: "~",
  },
  {
    category: "Vacancy handling",
    self: "You pay, you stress",
    vivi: "Aggressive marketing, 21-day goal",
    typical: "Slow response",
    selfIcon: "✗",
    viviIcon: "✓",
    typicalIcon: "✗",
  },
  {
    category: "Eviction management",
    self: "Hire attorney yourself",
    vivi: "We handle it",
    typical: "Extra fee",
    selfIcon: "✗",
    viviIcon: "✓",
    typicalIcon: "~",
  },
  {
    category: "Monthly cost",
    self: "$0 visible, $3K-6K hidden losses",
    vivi: "10% or $299/mo flat",
    typical: "8-15% + hidden fees",
    selfIcon: "✗",
    viviIcon: "✓",
    typicalIcon: "✗",
  },
  {
    category: "Contract terms",
    self: "N/A",
    vivi: "30-day cancellation",
    typical: "12-month lock-in",
    selfIcon: "~",
    viviIcon: "✓",
    typicalIcon: "✗",
  },
];

// ---- Hidden costs of self-managing ----
const HIDDEN_COSTS = [
  {
    title: "Vacancy losses",
    amount: "$2,200/month",
    desc: "Every month your property sits empty is a month of zero income. The average Tampa Bay rental takes 30-45 days to fill without professional marketing. That is $2,200+ lost per vacancy on a typical property.",
  },
  {
    title: "Bad tenant eviction",
    amount: "$3,000-5,000",
    desc: "A single bad tenant can cost $3,000 to $5,000 in legal fees, lost rent, and property damage. Thorough screening prevents most evictions before they start.",
  },
  {
    title: "Underpriced rent",
    amount: "$100-200/month",
    desc: "Most self-managing landlords underprice their rent by $100 to $200 per month. Over a 12-month lease, that is $1,200 to $2,400 left on the table.",
  },
  {
    title: "Legal mistakes",
    amount: "$1,000-10,000+",
    desc: "Florida landlord-tenant law is specific and unforgiving. Improper notice, security deposit mishandling, or fair housing violations can result in lawsuits costing $1,000 to $10,000 or more.",
  },
  {
    title: "Your time",
    amount: "10-20 hrs/month",
    desc: "Tenant calls, maintenance coordination, bookkeeping, showings, inspections. Most self-managing landlords spend 10 to 20 hours per month per property. What is your time worth?",
  },
];

// ---- FAQ data ----
const COMPARE_FAQS = [
  {
    q: "Is hiring a property manager worth it for one property?",
    question: "Is hiring a property manager worth it for one property?",
    a: "Yes. A single vacancy, bad tenant, or legal mistake can cost more than a full year of management fees. Professional management pays for itself through faster leasing, better tenants, and fewer costly surprises.",
    answer:
      "Yes. A single vacancy, bad tenant, or legal mistake can cost more than a full year of management fees. Professional management pays for itself through faster leasing, better tenants, and fewer costly surprises.",
  },
  {
    q: "How does ViVi PM keep maintenance costs lower than other managers?",
    question: "How does ViVi PM keep maintenance costs lower than other managers?",
    a: "Best Bay Services handles maintenance directly for our managed properties. There is no third-party markup, no inflated invoices, and no middleman delays. We control the quality and the cost.",
    answer:
      "Best Bay Services handles maintenance directly for our managed properties. There is no third-party markup, no inflated invoices, and no middleman delays. We control the quality and the cost.",
  },
  {
    q: "What hidden fees do typical property managers charge?",
    question: "What hidden fees do typical property managers charge?",
    a: "Common hidden fees include vacancy fees ($50-100/month while empty), maintenance markups (10-20% on every repair), lease renewal fees, advertising fees, inspection fees, and early termination penalties. ViVi charges a flat management percentage with no vacancy fees.",
    answer:
      "Common hidden fees include vacancy fees ($50-100/month while empty), maintenance markups (10-20% on every repair), lease renewal fees, advertising fees, inspection fees, and early termination penalties. ViVi charges a flat management percentage with no vacancy fees.",
  },
  {
    q: "Can I switch from self-managing to ViVi PM mid-lease?",
    question: "Can I switch from self-managing to ViVi PM mid-lease?",
    a: "Absolutely. We take over management of occupied properties regularly. We review the existing lease, introduce ourselves to your tenant, set up the owner portal, and handle everything going forward. The transition takes about a week.",
    answer:
      "Absolutely. We take over management of occupied properties regularly. We review the existing lease, introduce ourselves to your tenant, set up the owner portal, and handle everything going forward. The transition takes about a week.",
  },
  {
    q: "What if I want to cancel my management agreement?",
    question: "What if I want to cancel my management agreement?",
    a: "ViVi PM offers 30-day cancellation. No 12-month lock-in, no early termination penalty. If we are not earning your business every month, you should be free to leave. Most managers lock you in for a year because they know you would leave if you could.",
    answer:
      "ViVi PM offers 30-day cancellation. No 12-month lock-in, no early termination penalty. If we are not earning your business every month, you should be free to leave. Most managers lock you in for a year because they know you would leave if you could.",
  },
];

export default function ComparePage() {
  return (
    <>
      {/* ---- Hero section ---- */}
      <section className="gradient-accent relative overflow-hidden px-6 py-20 text-center text-white sm:py-28">
        <Image
          src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200&q=80"
          alt="Tampa Bay rental property keys representing the choice between self-managing and hiring a property manager"
          fill
          priority
          className="object-cover opacity-15"
          sizes="100vw"
        />
        <div className="relative mx-auto max-w-3xl">
          <h1 className="text-4xl font-bold sm:text-5xl">
            Self-Managing vs. Hiring a Property Manager
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lg text-white/80">
            A side-by-side breakdown of what you actually get — and what it
            actually costs — with each option.
          </p>
        </div>
      </section>

      {/* ---- Breadcrumbs ---- */}
      <Breadcrumbs
        items={[
          { name: "Home", href: "/" },
          { name: "Compare", href: "/compare" },
        ]}
      />

      {/* ---- QuickAnswer — AEO target ---- */}
      <section className="px-6 py-16 sm:py-20">
        <QuickAnswer
          question="Is it worth hiring a property manager in Tampa Bay?"
          answer={`For most Tampa Bay landlords, yes. Self-managing a rental property costs $0 in visible fees but typically results in $3,000 to $6,000 per year in hidden losses from vacancies, underpriced rent, and maintenance overspending. Professional management starting at 10% of rent usually pays for itself through faster leasing, better tenants, and fewer costly mistakes. Call ${SITE.phone} for a free rental analysis.`}
        />
      </section>

      {/* ---- Big three-column comparison table ---- */}
      <section className="px-6 py-20 sm:py-28">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-4 text-center text-3xl font-semibold sm:text-4xl">
            How do your options compare?
          </h2>
          <p className="mx-auto mb-12 max-w-xl text-center text-[var(--muted-text)]">
            Self-managing, hiring ViVi, or hiring a typical property manager —
            here is what each option actually looks like.
          </p>

          <div className="card overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-[var(--card-border)]">
                    <th className="px-5 py-4 text-left font-sans font-semibold">
                      Category
                    </th>
                    <th className="px-5 py-4 text-left font-sans font-semibold">
                      Self-Managing
                    </th>
                    <th className="px-5 py-4 text-left font-sans font-semibold text-accent">
                      ViVi PM
                    </th>
                    <th className="px-5 py-4 text-left font-sans font-semibold">
                      Typical Manager
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {COMPARISON_ROWS.map((row) => (
                    <tr
                      key={row.category}
                      className="border-b border-[var(--card-border)] last:border-0"
                    >
                      {/* Category name */}
                      <td className="px-5 py-3.5 font-medium">
                        {row.category}
                      </td>
                      {/* Self-managing column */}
                      <td className="px-5 py-3.5 text-[var(--muted-text)]">
                        <span
                          className={`mr-2 inline-block font-bold ${
                            row.selfIcon === "✓"
                              ? "text-green-600"
                              : row.selfIcon === "✗"
                                ? "text-red-500"
                                : "text-yellow-500"
                          }`}
                        >
                          {row.selfIcon}
                        </span>
                        {row.self}
                      </td>
                      {/* ViVi column — accent color for emphasis */}
                      <td className="px-5 py-3.5 font-medium text-accent">
                        <span className="mr-2 inline-block font-bold text-green-600">
                          {row.viviIcon}
                        </span>
                        {row.vivi}
                      </td>
                      {/* Typical manager column */}
                      <td className="px-5 py-3.5 text-[var(--muted-text)]">
                        <span
                          className={`mr-2 inline-block font-bold ${
                            row.typicalIcon === "✓"
                              ? "text-green-600"
                              : row.typicalIcon === "✗"
                                ? "text-red-500"
                                : "text-yellow-500"
                          }`}
                        >
                          {row.typicalIcon}
                        </span>
                        {row.typical}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* ---- The Real Cost of Self-Managing ---- */}
      <section className="section-alt px-6 py-20 sm:py-28">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-4 text-center text-3xl font-semibold sm:text-4xl">
            What does self-managing really cost?
          </h2>
          <p className="mx-auto mb-12 max-w-xl text-center text-[var(--muted-text)]">
            The management fee you save is usually the smallest number in the
            equation. Here is where the real money goes.
          </p>

          <div className="grid gap-6 sm:grid-cols-2">
            {HIDDEN_COSTS.map((cost) => (
              <div key={cost.title} className="card p-8">
                {/* Dollar amount highlight */}
                <p className="mb-2 font-display text-2xl font-bold text-accent">
                  {cost.amount}
                </p>
                {/* Cost category */}
                <h3 className="mb-3 text-lg font-semibold">{cost.title}</h3>
                {/* Explanation */}
                <p className="text-sm leading-relaxed text-[var(--muted-text)]">
                  {cost.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---- What Makes ViVi Different ---- */}
      <section className="px-6 py-20 sm:py-28">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-4 text-center text-3xl font-semibold sm:text-4xl">
            What makes ViVi different?
          </h2>
          <p className="mx-auto mb-12 max-w-xl text-center text-[var(--muted-text)]">
            We built ViVi to fix the things landlords hate about property
            management companies.
          </p>

          <div className="grid gap-8 sm:grid-cols-2">
            {/* Best Bay Services maintenance */}
            <div className="card p-8">
              <h3 className="mb-3 font-display text-xl font-semibold">
                Maintenance without the markup
              </h3>
              <p className="text-sm leading-relaxed text-[var(--muted-text)]">
                Best Bay Services handles maintenance directly for our managed
                properties. No third-party contractors billing you double. No
                10-20% markup on every repair. Faster response, better quality,
                and costs you can actually verify.
              </p>
            </div>

            {/* Transparent pricing */}
            <div className="card p-8">
              <h3 className="mb-3 font-display text-xl font-semibold">
                Transparent pricing, no lock-in
              </h3>
              <p className="text-sm leading-relaxed text-[var(--muted-text)]">
                Three plans — placement-only, 10% of rent, or $299/month flat. No vacancy fees. No
                advertising fees. No surprise charges. And if you want to leave,
                30 days notice is all it takes. No 12-month contracts, no early
                termination penalties.
              </p>
            </div>

            {/* Local team */}
            <div className="card p-8">
              <h3 className="mb-3 font-display text-xl font-semibold">
                Local team, local knowledge
              </h3>
              <p className="text-sm leading-relaxed text-[var(--muted-text)]">
                Our team is based in east Hillsborough County. We know the Tampa
                Bay rental market because we live and work here — not because we
                read a market report from a national franchise. We manage
                properties across {SITE.areas}.
              </p>
            </div>

            {/* Experience */}
            <div className="card p-8">
              <h3 className="mb-3 font-display text-xl font-semibold">
                23+ years of real estate experience
              </h3>
              <p className="text-sm leading-relaxed text-[var(--muted-text)]">
                ViVi is backed by 23+ years of real estate experience. We have
                seen every tenant situation, every maintenance emergency, and
                every market shift. That experience means fewer surprises and
                better decisions for your investment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ---- FAQ section with schema ---- */}
      <section className="section-alt px-6 py-20 sm:py-28">
        {/* Inject FAQPage JSON-LD for search engines */}
        <FAQSchema
          items={COMPARE_FAQS.map((f) => ({
            question: f.question,
            answer: f.answer,
          }))}
        />
        {/* Interactive accordion for users */}
        <FAQ
          items={COMPARE_FAQS.map((f) => ({ q: f.q, a: f.a }))}
          heading="Common Questions About Hiring a Property Manager"
        />
      </section>

      {/* ---- Bottom CTA ---- */}
      <section className="gradient-accent px-6 py-20 text-center text-white sm:py-28">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-3xl font-bold sm:text-4xl">
            Find out what your property could earn
          </h2>
          <p className="mx-auto mt-6 max-w-lg text-lg text-white/80">
            Free rental analysis. No obligation. We will show you the numbers
            and let you decide.
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
