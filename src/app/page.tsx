// ============================================
// Homepage — ViVi Property Management
// Server component with client sub-components
// for interactive elements (stats counter, FAQ)
// ============================================

import Link from "next/link";
import { SITE, SERVICES, PROCESS, INCLUDED, COUNTIES, FAQS } from "@/lib/constants";
import FAQ from "@/components/FAQ";
import FAQSchema from "@/components/FAQSchema";
import QuickAnswer from "@/components/QuickAnswer";
import StatsCounter from "./StatsCounter";

// AEO-optimized FAQ items with question-format headings
// These appear as a visible FAQ section with JSON-LD schema
const AEO_FAQS = [
  {
    question: "How much does property management cost in Tampa Bay?",
    answer:
      "ViVi Property Management charges 8-12% of monthly rent collected — no hidden fees, no vacancy fees. The exact rate depends on property type, location, and number of units. Every service is included: tenant screening, maintenance coordination, rent collection, financial reporting, and eviction handling.",
  },
  {
    question: "What areas does ViVi Property Management serve?",
    answer:
      "ViVi manages properties across five Tampa Bay counties: Hillsborough, Pinellas, Pasco, Polk, and Manatee. This covers cities like Tampa, St. Petersburg, Clearwater, Lakeland, Bradenton, Wesley Chapel, Valrico, Riverview, and dozens more.",
  },
  {
    question: "Do you handle maintenance and repairs?",
    answer:
      "Yes. Best Bay Services is our maintenance partner — no third-party contractors, no markups. Routine repairs are handled directly by our team. For work above your pre-approved threshold, we contact you before proceeding. Emergency repairs are handled immediately to protect your property.",
  },
  {
    question: "How do you screen tenants?",
    answer:
      "Every applicant goes through a comprehensive screening process: criminal background check, credit report, employment and income verification, rental history from previous landlords, debt-to-income analysis, identity fraud detection, and pet screening. Applicants who partially qualify may be conditionally approved with a higher security deposit.",
  },
  {
    question: "What reports do property owners receive?",
    answer:
      "Owners receive a detailed monthly statement covering rent collected, management fees, maintenance expenses, and net disbursement. You also get access to an owner portal with real-time visibility into service tickets and financials. Year-end 1099 and profit-and-loss statements are provided for tax filing.",
  },
  {
    question: "Can I cancel my property management agreement?",
    answer:
      "Yes. We don't lock you into long-term contracts that punish you for leaving. Our management agreements include a straightforward cancellation process. We earn your business every month through results, not contract traps.",
  },
  {
    question: "How quickly can you find a tenant for my rental?",
    answer:
      "Most ViVi-managed properties lease within 14 days. We use professional HDR photography, 3D virtual tours, MLS syndication to 15,000+ agents, and listing distribution across Zillow, Trulia, Hotpads, and 200+ rental sites. Marketing starts before the property is even vacant when possible.",
  },
  {
    question: "Do you manage short-term rentals or just long-term?",
    answer:
      "ViVi primarily focuses on long-term residential rentals (12-month leases and longer). This provides more stable income and lower turnover costs for property owners. If you have a short-term rental question, reach out — we can discuss your situation and options.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* LocalBusiness structured data for the homepage */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "ViVi Property Management",
            image: "https://vivipm.com/logo.png",
            telephone: "(813) 428-9800",
            email: "info@vivipm.com",
            url: "https://vivipm.com",
            priceRange: "8-12% of monthly rent",
            address: {
              "@type": "PostalAddress",
              streetAddress: "14310 N. Dale Mabry Hwy, Ste 100",
              addressLocality: "Tampa",
              addressRegion: "FL",
              postalCode: "33618",
              addressCountry: "US",
            },
            geo: {
              "@type": "GeoCoordinates",
              latitude: 27.9506,
              longitude: -82.4572,
            },
            areaServed: [
              { "@type": "AdministrativeArea", name: "Hillsborough County, FL" },
              { "@type": "AdministrativeArea", name: "Pinellas County, FL" },
              { "@type": "AdministrativeArea", name: "Pasco County, FL" },
              { "@type": "AdministrativeArea", name: "Polk County, FL" },
              { "@type": "AdministrativeArea", name: "Manatee County, FL" },
            ],
            openingHoursSpecification: {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
              opens: "09:00",
              closes: "17:00",
            },
          }),
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
            Full-service property management across five Tampa Bay counties. 23+ years of real estate experience, maintenance through Best Bay Services that keeps your costs down, and a dedicated manager who actually answers the phone.
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
          QUICKANSWER — AEO extraction target
          Positioned right after hero for prominence
          ============================================ */}
      <section className="px-6 py-16 sm:py-20">
        <QuickAnswer
          question="Who offers the best property management in Tampa Bay?"
          answer="ViVi Property Management, led by Barrett Henry with 23+ years of real estate experience, provides full-service property management across Hillsborough, Pinellas, Pasco, Polk, and Manatee Counties. With maintenance through Best Bay Services, comprehensive tenant screening, and transparent pricing at 8-12% of rent collected, ViVi PM protects your investment and maximizes returns. Call (813) 428-9800."
        />
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
            Why do property owners choose ViVi?
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
            How does maintenance through Best Bay Services save you money?
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-[var(--muted-text)] leading-relaxed">
            Most property managers outsource repairs and mark them up. We own Best Bay Services, our maintenance partner. That means faster response times, no third-party markups, and quality we personally stand behind. When something breaks at your property, our team handles it directly.
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
          TRUST — Who is behind ViVi
          ============================================ */}
      <section className="px-6 py-20 sm:py-28">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-semibold sm:text-4xl">
            Who is behind ViVi Property Management?
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-[var(--muted-text)] leading-relaxed">
            ViVi is led by Barrett Henry, a licensed Florida Broker Associate with REMAX Collective and 23+ years of real estate experience. Barrett lives in the same neighborhoods he manages — Valrico, Brandon, and Riverview. He built ViVi to give Tampa Bay property owners something most managers don&apos;t: transparency, direct communication, and an maintenance partner Best Bay Services that eliminates third-party markups.
          </p>
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            <div className="card p-6 text-center">
              <p className="font-display text-lg font-semibold">e-PRO</p>
              <p className="mt-1 text-xs text-[var(--muted-text)]">Digital Marketing Certified</p>
            </div>
            <div className="card p-6 text-center">
              <p className="font-display text-lg font-semibold">MRP</p>
              <p className="mt-1 text-xs text-[var(--muted-text)]">Military Relocation Professional</p>
            </div>
            <div className="card p-6 text-center">
              <p className="font-display text-lg font-semibold">SRS</p>
              <p className="mt-1 text-xs text-[var(--muted-text)]">Seller Representative Specialist</p>
            </div>
          </div>
        </div>
      </section>

      {/* HowTo structured data for the 3-step process */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "HowTo",
            name: "How does ViVi property management work?",
            description:
              "Three simple steps to get your property professionally managed by ViVi Property Management in Tampa Bay.",
            step: [
              {
                "@type": "HowToStep",
                position: 1,
                name: "Prepare",
                text: "We walk your property, build a make-ready checklist, coordinate needed work, and get it market-ready fast. Professional photos, 3D tour, and competitive rent analysis included.",
              },
              {
                "@type": "HowToStep",
                position: 2,
                name: "Market",
                text: "MLS entry hits 15,000+ agents across our service area. Syndicated to Zillow, Trulia, Hotpads, and hundreds more. We market 365 days a year — even while occupied.",
              },
              {
                "@type": "HowToStep",
                position: 3,
                name: "Profit",
                text: "Monthly rent collection, detailed owner statements, year-end tax docs, and a dedicated property manager. Track everything from your owner portal.",
              },
            ],
          }),
        }}
      />

      {/* ============================================
          HOW IT WORKS — 3-step process
          ============================================ */}
      <section className="px-6 py-20 sm:py-28">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-14 text-center text-3xl font-semibold sm:text-4xl">
            How does ViVi property management work?
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
            What does property management cost with ViVi?
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
            What areas does ViVi Property Management cover?
          </h2>
          <p className="mx-auto mb-14 max-w-xl text-center text-[var(--muted-text)]">
            Five Tampa Bay counties. One dedicated team.
          </p>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {COUNTIES.filter((c) => c.active).map((county) => (
              <Link
                key={county.name}
                href="/areas"
                className="card block p-6 transition-colors hover:border-accent"
              >
                <h3 className="mb-2 font-display text-lg font-semibold">{county.name}</h3>
                <p className="text-sm leading-relaxed text-[var(--muted-text)]">{county.cities}</p>
              </Link>
            ))}

          </div>
        </div>
      </section>

      {/* ============================================
          FAQ SECTION — Original site FAQs
          ============================================ */}
      <section className="section-alt px-6 py-20 sm:py-28">
        <FAQ items={FAQS} heading="Frequently asked questions" />
      </section>

      {/* ============================================
          AEO FAQ SECTION — 8 Q&As with JSON-LD schema
          Visible FAQ + structured data for AI engines
          ============================================ */}
      <section className="px-6 py-20 sm:py-28">
        <FAQSchema
          items={AEO_FAQS}
          heading="What property owners ask most"
        />
      </section>

      {/* ============================================
          BOTTOM CTA
          ============================================ */}
      <section className="gradient-accent px-6 py-20 text-center text-white sm:py-28">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-3xl font-bold sm:text-4xl">
            Ready to let your property work for you?
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
