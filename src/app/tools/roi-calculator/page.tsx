// ============================================
// ROI Calculator Page — Interactive rental
// property investment calculator with real-time
// results. Uses "use client" for state management.
// ============================================
"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { SITE } from "@/lib/constants";
import Breadcrumbs from "@/components/Breadcrumbs";
import FAQ from "@/components/FAQ";
import FAQSchema from "@/components/FAQSchema";

// ---- FAQ data for the ROI calculator page ----
const ROI_FAQS = [
  {
    q: "What is cash-on-cash return in real estate?",
    a: "Cash-on-cash return measures the annual pre-tax cash flow relative to the total cash you invested (down payment, closing costs, etc.). For example, if you put $60,000 down and earn $6,000 per year in net cash flow, your cash-on-cash return is 10%. Most investors target 8-12% for rental properties in Tampa Bay.",
  },
  {
    q: "What is a good cap rate for rental properties?",
    a: "Cap rate (capitalization rate) measures a property's net operating income as a percentage of its purchase price, ignoring financing. In Tampa Bay, cap rates typically range from 5-8% for residential rentals. A higher cap rate means higher potential return but often comes with more risk or lower-quality properties.",
  },
  {
    q: "How much should I budget for maintenance reserves?",
    a: "A standard rule is 10% of monthly rent for maintenance reserves. Older properties or homes with aging systems may need 12-15%. This reserve covers routine repairs, appliance replacements, and unexpected issues. With professional property management through ViVi, maintenance is handled by Best Bay Services at competitive rates.",
  },
  {
    q: "What vacancy rate should I expect in Tampa Bay?",
    a: "Tampa Bay vacancy rates for well-managed, competitively priced rentals typically run 3-5%. Properties priced above market or in less desirable locations may see 8-10%. Professional management with aggressive marketing — like MLS syndication across 15,000+ agents — keeps vacancy periods short, often under 14 days.",
  },
  {
    q: "Does this calculator include property appreciation?",
    a: "This calculator focuses on cash flow metrics — monthly income, cash-on-cash return, and cap rate. It does not project property appreciation, equity buildup through mortgage paydown, or tax benefits like depreciation. For a complete investment picture including appreciation estimates, request a free rental analysis from ViVi.",
  },
];

// ---- Format FAQ data for the FAQSchema component ----
const FAQ_SCHEMA_ITEMS = ROI_FAQS.map((f) => ({
  question: f.q,
  answer: f.a,
}));

export default function ROICalculatorPage() {
  // ---- Calculator input state ----
  const [inputs, setInputs] = useState({
    purchasePrice: 350000,
    downPaymentPct: 20,
    interestRate: 7.0,
    monthlyRent: 2200,
    propertyTaxYear: 4500,
    insuranceYear: 1800,
    hoaMonth: 0,
    maintenancePct: 10,
    managementPct: 10,
    vacancyPct: 5,
  });

  /** Update a single input field by key */
  const update = (key: keyof typeof inputs, value: number) => {
    setInputs((prev) => ({ ...prev, [key]: value }));
  };

  // ---- Compute all results whenever inputs change ----
  const results = useMemo(() => {
    const {
      purchasePrice,
      downPaymentPct,
      interestRate,
      monthlyRent,
      propertyTaxYear,
      insuranceYear,
      hoaMonth,
      maintenancePct,
      managementPct,
      vacancyPct,
    } = inputs;

    // Loan details
    const downPayment = purchasePrice * (downPaymentPct / 100);
    const loanAmount = purchasePrice - downPayment;

    // Monthly mortgage payment using standard amortization formula:
    // M = P[r(1+r)^n] / [(1+r)^n - 1]
    // P = loan amount, r = monthly interest rate, n = total months (360 for 30yr)
    let monthlyMortgage = 0;
    if (loanAmount > 0 && interestRate > 0) {
      const r = interestRate / 100 / 12; // monthly rate
      const n = 360; // 30-year fixed
      monthlyMortgage = loanAmount * (r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    }

    // Monthly expense components
    const monthlyTax = propertyTaxYear / 12;
    const monthlyInsurance = insuranceYear / 12;
    const monthlyMaintenance = monthlyRent * (maintenancePct / 100);
    const monthlyManagement = monthlyRent * (managementPct / 100);
    const monthlyVacancy = monthlyRent * (vacancyPct / 100);

    // Total monthly expenses (everything except rent income)
    const totalMonthlyExpenses =
      monthlyMortgage +
      monthlyTax +
      monthlyInsurance +
      hoaMonth +
      monthlyMaintenance +
      monthlyManagement +
      monthlyVacancy;

    // Cash flow
    const monthlyCashFlow = monthlyRent - totalMonthlyExpenses;
    const annualCashFlow = monthlyCashFlow * 12;

    // Cash-on-cash return = annual cash flow / total cash invested
    // (using down payment as total cash invested for simplicity)
    const cashOnCash = downPayment > 0 ? (annualCashFlow / downPayment) * 100 : 0;

    // Cap rate = NOI / purchase price * 100
    // NOI excludes mortgage (debt service) but includes all operating expenses
    const annualOperatingExpenses =
      (monthlyTax + monthlyInsurance + hoaMonth + monthlyMaintenance + monthlyManagement + monthlyVacancy) * 12;
    const noi = monthlyRent * 12 - annualOperatingExpenses;
    const capRate = purchasePrice > 0 ? (noi / purchasePrice) * 100 : 0;

    return {
      downPayment,
      loanAmount,
      monthlyMortgage,
      monthlyTax,
      monthlyInsurance,
      monthlyMaintenance,
      monthlyManagement,
      monthlyVacancy,
      totalMonthlyExpenses,
      monthlyCashFlow,
      annualCashFlow,
      cashOnCash,
      capRate,
    };
  }, [inputs]);

  /** Format a number as USD currency */
  const fmt = (n: number) =>
    new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(n);

  /** Format a number as USD with cents */
  const fmtCents = (n: number) =>
    new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(n);

  // Shared input class string (matches rental-analysis page pattern)
  const inputClass =
    "w-full rounded-lg border border-[var(--input-border)] bg-[var(--input-bg)] px-4 py-3 text-sm outline-none transition-colors focus:border-accent";

  return (
    <>
      {/* ---- Page header with hero image ---- */}
      <section className="gradient-accent relative overflow-hidden px-6 py-20 text-center text-white sm:py-28">
        <Image
          src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200&q=80"
          alt="Modern investment property representing rental ROI analysis in Tampa Bay"
          fill
          priority
          className="object-cover opacity-15"
          sizes="100vw"
        />
        <div className="relative mx-auto max-w-3xl">
          <h1 className="text-4xl font-bold sm:text-5xl">
            Rental Property ROI Calculator
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lg text-white/80">
            Run the numbers on any Tampa Bay investment property. See cash flow, cap rate, and cash-on-cash return instantly.
          </p>
        </div>
      </section>

      {/* ---- Breadcrumbs ---- */}
      <Breadcrumbs
        items={[
          { name: "Home", href: "/" },
          { name: "Tools", href: "/tools/roi-calculator" },
          { name: "ROI Calculator", href: "/tools/roi-calculator" },
        ]}
      />

      {/* ---- QuickAnswer — AEO target ---- */}
      <section className="px-6 py-16 sm:py-20">
        <div className="mx-auto max-w-3xl rounded-xl border border-accent/20 bg-accent/5 px-8 py-8">
          <h2 className="mb-4 font-display text-2xl font-semibold text-accent sm:text-3xl">
            How do you calculate ROI on a rental property?
          </h2>
          <p className="text-base leading-relaxed text-[var(--foreground)]">
            Rental property ROI is measured two ways: cash-on-cash return divides your annual net cash flow by your total cash invested (down payment). Cap rate divides the property&apos;s net operating income by its purchase price. A good Tampa Bay rental typically targets 8-12% cash-on-cash return and a 5-8% cap rate. Use the calculator below to run your own numbers.
          </p>
        </div>
      </section>

      {/* ---- Calculator section ---- */}
      <section className="px-6 py-20 sm:py-28">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1fr_400px]">
          {/* ---- LEFT: Inputs ---- */}
          <div>
            <h2 className="mb-2 text-2xl font-semibold sm:text-3xl">
              Property details
            </h2>
            <p className="mb-8 text-sm text-[var(--muted-text)]">
              Adjust the numbers below. Results update in real time — no submit button needed.
            </p>

            <div className="space-y-6">
              {/* Purchase Price */}
              <div>
                <label htmlFor="roi-price" className="mb-1.5 block text-sm font-medium">
                  Purchase price ($)
                </label>
                <input
                  id="roi-price"
                  type="number"
                  min="0"
                  step="1000"
                  value={inputs.purchasePrice}
                  onChange={(e) => update("purchasePrice", Number(e.target.value))}
                  className={inputClass}
                />
              </div>

              {/* Down Payment + Interest Rate row */}
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="roi-down" className="mb-1.5 block text-sm font-medium">
                    Down payment (%)
                  </label>
                  <input
                    id="roi-down"
                    type="number"
                    min="0"
                    max="100"
                    step="1"
                    value={inputs.downPaymentPct}
                    onChange={(e) => update("downPaymentPct", Number(e.target.value))}
                    className={inputClass}
                  />
                </div>
                <div>
                  <label htmlFor="roi-rate" className="mb-1.5 block text-sm font-medium">
                    Interest rate (%)
                  </label>
                  <input
                    id="roi-rate"
                    type="number"
                    min="0"
                    max="20"
                    step="0.125"
                    value={inputs.interestRate}
                    onChange={(e) => update("interestRate", Number(e.target.value))}
                    className={inputClass}
                  />
                </div>
              </div>

              {/* Monthly Rent */}
              <div>
                <label htmlFor="roi-rent" className="mb-1.5 block text-sm font-medium">
                  Monthly rent ($)
                </label>
                <input
                  id="roi-rent"
                  type="number"
                  min="0"
                  step="50"
                  value={inputs.monthlyRent}
                  onChange={(e) => update("monthlyRent", Number(e.target.value))}
                  className={inputClass}
                />
              </div>

              {/* Property Taxes + Insurance row */}
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="roi-tax" className="mb-1.5 block text-sm font-medium">
                    Property taxes ($/year)
                  </label>
                  <input
                    id="roi-tax"
                    type="number"
                    min="0"
                    step="100"
                    value={inputs.propertyTaxYear}
                    onChange={(e) => update("propertyTaxYear", Number(e.target.value))}
                    className={inputClass}
                  />
                </div>
                <div>
                  <label htmlFor="roi-insurance" className="mb-1.5 block text-sm font-medium">
                    Insurance ($/year)
                  </label>
                  <input
                    id="roi-insurance"
                    type="number"
                    min="0"
                    step="100"
                    value={inputs.insuranceYear}
                    onChange={(e) => update("insuranceYear", Number(e.target.value))}
                    className={inputClass}
                  />
                </div>
              </div>

              {/* HOA */}
              <div>
                <label htmlFor="roi-hoa" className="mb-1.5 block text-sm font-medium">
                  HOA fees ($/month)
                </label>
                <input
                  id="roi-hoa"
                  type="number"
                  min="0"
                  step="25"
                  value={inputs.hoaMonth}
                  onChange={(e) => update("hoaMonth", Number(e.target.value))}
                  className={inputClass}
                />
              </div>

              {/* Maintenance, Management, Vacancy row */}
              <div className="grid gap-5 sm:grid-cols-3">
                <div>
                  <label htmlFor="roi-maint" className="mb-1.5 block text-sm font-medium">
                    Maintenance (% of rent)
                  </label>
                  <input
                    id="roi-maint"
                    type="number"
                    min="0"
                    max="50"
                    step="1"
                    value={inputs.maintenancePct}
                    onChange={(e) => update("maintenancePct", Number(e.target.value))}
                    className={inputClass}
                  />
                </div>
                <div>
                  <label htmlFor="roi-mgmt" className="mb-1.5 block text-sm font-medium">
                    Management (% of rent)
                  </label>
                  <input
                    id="roi-mgmt"
                    type="number"
                    min="0"
                    max="50"
                    step="1"
                    value={inputs.managementPct}
                    onChange={(e) => update("managementPct", Number(e.target.value))}
                    className={inputClass}
                  />
                </div>
                <div>
                  <label htmlFor="roi-vacancy" className="mb-1.5 block text-sm font-medium">
                    Vacancy rate (%)
                  </label>
                  <input
                    id="roi-vacancy"
                    type="number"
                    min="0"
                    max="50"
                    step="1"
                    value={inputs.vacancyPct}
                    onChange={(e) => update("vacancyPct", Number(e.target.value))}
                    className={inputClass}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* ---- RIGHT: Results (sticky on desktop) ---- */}
          <div className="lg:sticky lg:top-24 lg:self-start">
            {/* Results card — navy background, white text */}
            <div className="gradient-accent overflow-hidden rounded-2xl p-8 text-white">
              <p className="mb-6 text-xs font-semibold uppercase tracking-widest text-white/60">
                Investment Summary
              </p>

              {/* Key metrics */}
              <div className="mb-8 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-white/80">Monthly cash flow</span>
                  <span
                    className={`font-display text-2xl font-bold ${
                      results.monthlyCashFlow >= 0 ? "text-emerald-300" : "text-red-300"
                    }`}
                  >
                    {fmtCents(results.monthlyCashFlow)}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-white/80">Annual cash flow</span>
                  <span
                    className={`font-display text-lg font-semibold ${
                      results.annualCashFlow >= 0 ? "text-emerald-300" : "text-red-300"
                    }`}
                  >
                    {fmtCents(results.annualCashFlow)}
                  </span>
                </div>

                {/* Divider */}
                <div className="border-t border-white/20" />

                <div className="flex items-center justify-between">
                  <span className="text-sm text-white/80">Cash-on-cash return</span>
                  <span
                    className={`font-display text-xl font-bold ${
                      results.cashOnCash >= 0 ? "text-emerald-300" : "text-red-300"
                    }`}
                  >
                    {results.cashOnCash.toFixed(2)}%
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-white/80">Cap rate</span>
                  <span className="font-display text-xl font-bold text-white">
                    {results.capRate.toFixed(2)}%
                  </span>
                </div>
              </div>

              {/* Expense breakdown */}
              <div className="rounded-xl bg-white/10 p-5">
                <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-white/60">
                  Monthly Expense Breakdown
                </p>
                <div className="space-y-2.5 text-sm">
                  <div className="flex justify-between">
                    <span className="text-white/70">Mortgage (P&amp;I)</span>
                    <span>{fmtCents(results.monthlyMortgage)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/70">Property taxes</span>
                    <span>{fmtCents(results.monthlyTax)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/70">Insurance</span>
                    <span>{fmtCents(results.monthlyInsurance)}</span>
                  </div>
                  {inputs.hoaMonth > 0 && (
                    <div className="flex justify-between">
                      <span className="text-white/70">HOA</span>
                      <span>{fmtCents(inputs.hoaMonth)}</span>
                    </div>
                  )}
                  <div className="flex justify-between">
                    <span className="text-white/70">Maintenance reserve</span>
                    <span>{fmtCents(results.monthlyMaintenance)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/70">Management fee</span>
                    <span>{fmtCents(results.monthlyManagement)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/70">Vacancy allowance</span>
                    <span>{fmtCents(results.monthlyVacancy)}</span>
                  </div>

                  {/* Divider */}
                  <div className="border-t border-white/20 pt-2">
                    <div className="flex justify-between font-semibold">
                      <span>Total expenses</span>
                      <span>{fmtCents(results.totalMonthlyExpenses)}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Loan details */}
              <div className="mt-6 space-y-1.5 text-xs text-white/50">
                <p>Down payment: {fmt(results.downPayment)}</p>
                <p>Loan amount: {fmt(results.loanAmount)}</p>
                <p>Loan term: 30 years fixed</p>
              </div>
            </div>

            {/* CTA below results */}
            <div className="mt-6 rounded-xl border border-accent/20 bg-accent/5 p-6 text-center">
              <p className="mb-3 font-display text-lg font-semibold">
                Want us to run these numbers for your specific property?
              </p>
              <p className="mb-5 text-sm text-[var(--muted-text)]">
                Get a free rental analysis with real market data from {SITE.areas}.
              </p>
              <Link
                href="/rental-analysis"
                className="inline-block rounded-full bg-accent px-8 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-accent-dark"
              >
                Get My Free Rental Analysis
              </Link>
              <p className="mt-4 text-xs text-[var(--muted-text)]">
                Or call{" "}
                <a
                  href={`tel:${SITE.phone.replace(/[^0-9+]/g, "")}`}
                  className="font-medium text-accent hover:underline"
                >
                  {SITE.phone}
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ---- FAQ section with schema ---- */}
      <section className="section-alt px-6 py-20 sm:py-28">
        {/* JSON-LD FAQPage schema for search engines */}
        <FAQSchema items={FAQ_SCHEMA_ITEMS} />

        {/* Visible accordion FAQ */}
        <FAQ items={ROI_FAQS} heading="Rental ROI Questions" />
      </section>

      {/* ---- Bottom CTA ---- */}
      <section className="gradient-accent px-6 py-20 text-center text-white sm:py-28">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-3xl font-bold sm:text-4xl">
            Ready to invest in Tampa Bay rental property?
          </h2>
          <p className="mx-auto mt-6 max-w-lg text-lg text-white/80">
            ViVi Property Management handles everything — marketing, screening, maintenance, and rent collection. Let us show you the numbers.
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
