// ============================================
// Homepage — ViVi Property Management
// Server component with client sub-components
// for interactive elements (stats counter, FAQ)
// ============================================

import Link from "next/link";
import { SITE, SERVICES, PROCESS, INCLUDED, COUNTIES, FAQS } from "@/lib/constants";
import FAQ from "@/components/FAQ";
import StatsCounter from "./StatsCounter";

export default function HomePage() {
  // Build FAQPage JSON-LD structured data for SEO
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  };

  return (
    <>
      {/* ---- JSON-LD FAQPage schema ---- */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema).replace(/</g, "\\u003c"),
        }}
      />

      {/* ============================================
          HERO SECTION
          Purple gradient, headline, two CTA buttons
          ============================================ */}
      <section className="gradient-accent relative overflow-hidden px-6 py-24 text-center text-white sm:py-32 lg:py-40">
        {/* Subtle radial glow behind the text */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.08)_0%,transparent_70%)]" />

        <div className="relative mx-auto max-w-3xl">
          <h1 className="text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
            Protect your property.<br />Maximize your returns.
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lg font-light leading-relaxed text-white/80">
            Full-service property management backed by 23+ years of real estate experience and an in-house maintenance team that keeps your costs down.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/rental-analysis"
              className="rounded-full bg-white px-8 py-3.5 text-sm font-semibold text-accent transition-colors hover:bg-white/90"
            >
              Free Rent Analysis
            </Link>
            <Link
              href="/pricing"
              className="rounded-full border border-white/30 px-8 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
            >
              View Pricing
            </Link>
          </div>
        </div>
      </section>

      {/* ============================================
          STATS BAR
          Key numbers with counter animation
          ============================================ */}
      <StatsCounter />

      {/* ============================================
          WHY VIVI — 3 service cards
          ============================================ */}
      <section className="px-6 py-20 sm:py-28">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-4 text-center text-3xl font-semibold sm:text-4xl">
            Why property owners choose ViVi
          </h2>
          <p className="mx-auto mb-14 max-w-xl text-center text-[var(--muted-text)]">
            We handle everything so you collect rent without the headaches.
          </p>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((svc) => (
              <div key={svc.title} className="card p-8">
                <span className="mb-4 block text-3xl">{svc.icon}</span>
                <h3 className="mb-3 font-display text-xl font-semibold">{svc.title}</h3>
                <p className="text-sm leading-relaxed text-[var(--muted-text)]">{svc.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================
          BEST BAY SERVICES CALLOUT
          ============================================ */}
      <section className="section-alt px-6 py-20 sm:py-28">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-semibold sm:text-4xl">
            In-house maintenance changes everything
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-[var(--muted-text)] leading-relaxed">
            Most property managers outsource repairs and mark them up. We own Best Bay Services, our in-house maintenance company. That means faster response times, no third-party markups, and quality we personally stand behind. When something breaks at your property, our team handles it directly.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/services"
              className="rounded-full bg-accent px-8 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-accent-dark"
            >
              Learn About Our Services
            </Link>
          </div>
        </div>
      </section>

      {/* ============================================
          HOW IT WORKS — 3-step process
          ============================================ */}
      <section className="px-6 py-20 sm:py-28">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-14 text-center text-3xl font-semibold sm:text-4xl">
            How it works
          </h2>
          <div className="grid gap-10 sm:grid-cols-3">
            {PROCESS.map((step) => (
              <div key={step.step} className="text-center">
                {/* Step number */}
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

      {/* ============================================
          PRICING — Single card, 8-12% tier
          ============================================ */}
      <section className="section-alt px-6 py-20 sm:py-28" id="pricing">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-4 text-center text-3xl font-semibold sm:text-4xl">
            Simple, transparent pricing
          </h2>
          <p className="mx-auto mb-14 max-w-xl text-center text-[var(--muted-text)]">
            One plan. Everything included. No hidden fees.
          </p>

          <div className="card mx-auto max-w-2xl overflow-hidden">
            {/* Accent header bar */}
            <div className="gradient-accent px-8 py-6 text-center text-white">
              <p className="text-sm font-medium uppercase tracking-widest opacity-80">
                Full-Service Management
              </p>
              <p className="mt-2 font-display text-4xl font-bold">8&ndash;12%</p>
              <p className="mt-1 text-sm opacity-80">of monthly rent collected</p>
            </div>

            {/* Included items — 2-column grid */}
            <div className="px-8 py-8">
              <p className="mb-6 text-center text-xs font-semibold uppercase tracking-widest text-[var(--muted-text)]">
                Everything included
              </p>
              <div className="grid gap-3 sm:grid-cols-2">
                {INCLUDED.map((item) => (
                  <div key={item} className="flex items-start gap-2.5 text-sm">
                    {/* Checkmark */}
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

      {/* ============================================
          SERVICE AREAS — 5 county cards + expansion
          ============================================ */}
      <section className="px-6 py-20 sm:py-28">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-4 text-center text-3xl font-semibold sm:text-4xl">
            Where we manage
          </h2>
          <p className="mx-auto mb-14 max-w-xl text-center text-[var(--muted-text)]">
            Active across five Florida counties with statewide expansion underway.
          </p>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {COUNTIES.filter((c) => c.active).map((county) => (
              <div key={county.name} className="card p-6">
                <h3 className="mb-2 font-display text-lg font-semibold">{county.name}</h3>
                <p className="text-sm leading-relaxed text-[var(--muted-text)]">{county.cities}</p>
              </div>
            ))}

            {/* Expansion card */}
            <div className="card flex items-center justify-center border-dashed p-6 text-center">
              <div>
                <p className="font-display text-lg font-semibold text-accent">
                  All 67 Florida Counties
                </p>
                <p className="mt-1 text-sm text-[var(--muted-text)]">Coming soon</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================
          FAQ SECTION
          ============================================ */}
      <section className="section-alt px-6 py-20 sm:py-28">
        <FAQ items={FAQS} heading="Frequently asked questions" />
      </section>

      {/* ============================================
          BOTTOM CTA
          ============================================ */}
      <section className="gradient-accent px-6 py-20 text-center text-white sm:py-28">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-3xl font-bold sm:text-4xl">
            Your property should work for you
          </h2>
          <p className="mx-auto mt-6 max-w-lg text-lg text-white/80">
            Find out what your property could rent for with a free, no-obligation analysis from our team.
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
