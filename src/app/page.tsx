// ============================================
// Homepage — ViVi Property Management
// Server component with client sub-components
// for interactive elements (stats counter, FAQ)
// GEO/SEO optimized: article wrapper, ToC,
// strong/em emphasis, figure/figcaption,
// blockquote testimonials, BreadcrumbList schema.
// ============================================

import Link from "next/link";
import Image from "next/image";
import { SITE, SERVICES, PROCESS, PRICING_TIERS, ADDITIONAL_FEES, COUNTIES, FAQS } from "@/lib/constants";
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
      "ViVi Property Management offers three plans: Lease & List (tenant placement only) for 100% of one month's rent, Standard full management at 10% of monthly rent collected, and Peace of Mind flat-fee management at $299/month. All plans include 100% of first month's rent as a placement fee. No hidden fees, no vacancy fees, $0 maintenance markup through Best Bay Services.",
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
      "Most ViVi-managed properties lease within 14 days. We use professional HDR photography, MLS syndication to 15,000+ agents, and listing distribution across Zillow, Trulia, Hotpads, and 200+ rental sites. Marketing starts before the property is even vacant when possible.",
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
      {/* LocalBusiness + BreadcrumbList structured data for the homepage */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "LocalBusiness",
                name: "ViVi Property Management",
                image: "https://vivipm.com/logo.png",
                telephone: "(813) 428-9800",
                email: "info@vivipm.com",
                url: "https://vivipm.com",
                priceRange: "10% monthly or $299/month flat",
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
              },
              /* BreadcrumbList — homepage is the root */
              {
                "@type": "BreadcrumbList",
                itemListElement: [
                  {
                    "@type": "ListItem",
                    position: 1,
                    name: "Home",
                    item: "https://vivipm.com",
                  },
                ],
              },
            ],
          }),
        }}
      />

      {/* ============================================
          HERO SECTION
          Purple gradient, headline, two CTA buttons
          ============================================ */}
      <section className="gradient-accent relative overflow-hidden px-6 py-24 text-center text-white sm:py-32 lg:py-40">
        {/* Background hero image — Tampa Bay skyline */}
        <figure className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1400&q=80"
            alt="Modern single-family rental home with manicured lawn in Tampa Bay Florida managed by ViVi Property Management"
            fill
            priority
            className="object-cover opacity-20"
            sizes="100vw"
          />
          <figcaption className="sr-only">Tampa Bay rental home managed by ViVi Property Management</figcaption>
        </figure>
        {/* Subtle radial glow behind the text */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.08)_0%,transparent_70%)]" />

        <div className="relative mx-auto max-w-3xl">
          <h1 className="text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
            Tampa Bay <strong>Property Management</strong> That Protects Your Investment
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lg font-light leading-relaxed text-white/80">
            Full-service <strong>property management</strong> across five <strong>Tampa Bay</strong> counties. 23+ years of real estate experience, maintenance through <em>Best Bay Services</em> that keeps your costs down, and a dedicated manager who actually answers the phone.
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

      {/* ---- Main content wrapped in <article> for semantic structure ---- */}
      <article>

        {/* ============================================
            TABLE OF CONTENTS
            ============================================ */}
        <nav id="table-of-contents" aria-label="Table of contents" className="mx-auto max-w-4xl px-6 py-10">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-[var(--muted-text)]">On This Page</p>
          <ol className="list-decimal list-inside space-y-1 text-sm text-[var(--muted-text)]">
            <li><a href="#quick-answer" className="hover:text-accent hover:underline">Who Offers the Best Property Management in Tampa Bay?</a></li>
            <li><a href="#why-vivi" className="hover:text-accent hover:underline">Why Do Property Owners Choose ViVi?</a></li>
            <li><a href="#maintenance-savings" className="hover:text-accent hover:underline">How Best Bay Services Saves You Money</a></li>
            <li><a href="#about-barrett" className="hover:text-accent hover:underline">Who Is Behind ViVi Property Management?</a></li>
            <li><a href="#how-it-works" className="hover:text-accent hover:underline">How Does ViVi Property Management Work?</a></li>
            <li><a href="#pricing" className="hover:text-accent hover:underline">What Does Property Management Cost?</a></li>
            <li><a href="#service-areas" className="hover:text-accent hover:underline">What Areas Does ViVi Cover?</a></li>
            <li><a href="#faq-section" className="hover:text-accent hover:underline">Frequently Asked Questions</a></li>
            <li><a href="#owner-resources" className="hover:text-accent hover:underline">Resources for Property Owners</a></li>
          </ol>
        </nav>

        {/* ============================================
            QUICKANSWER — AEO extraction target
            Positioned right after hero for prominence
            ============================================ */}
        <section id="quick-answer" className="px-6 py-16 sm:py-20">
          <QuickAnswer
            question="Who offers the best property management in Tampa Bay?"
            answer="ViVi Property Management, led by Barrett Henry with 23+ years of real estate experience, provides full-service property management across Hillsborough, Pinellas, Pasco, Polk, and Manatee Counties. Three simple plans — placement-only, full management at 10%, or flat-fee at $299/month. Maintenance through Best Bay Services with $0 markup. Call (813) 428-9800."
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
        <section id="why-vivi" className="px-6 py-20 sm:py-28">
          <div className="mx-auto max-w-6xl">
            <h2 className="mb-4 text-center text-3xl font-semibold sm:text-4xl">
              Why Do <strong>Tampa Bay Property Owners</strong> Choose ViVi?
            </h2>
            <p className="mx-auto mb-14 max-w-xl text-center text-[var(--muted-text)]">
              We handle <em>everything</em> so you collect rent without the headaches.
            </p>

            <ul className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 list-none p-0">
              {SERVICES.map((svc) => (
                <li key={svc.title} className="card p-8">
                  <span className="mb-4 block text-3xl">{svc.icon}</span>
                  <h3 className="mb-3 font-display text-xl font-semibold">{svc.title}</h3>
                  <p className="text-sm leading-relaxed text-[var(--muted-text)]">{svc.desc}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ============================================
            BEST BAY SERVICES CALLOUT
            ============================================ */}
        <section id="maintenance-savings" className="section-alt px-6 py-20 sm:py-28">
          <div className="mx-auto max-w-4xl">
            {/* Residential neighborhood image with figure/figcaption */}
            <figure className="relative mx-auto mb-12 aspect-[16/7] max-w-3xl overflow-hidden rounded-2xl">
              <Image
                src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1200&q=80"
                alt="Modern residential home in Tampa Bay neighborhood managed by ViVi Property Management"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 768px"
              />
              <figcaption className="sr-only">Tampa Bay residential property under ViVi management</figcaption>
            </figure>
          </div>
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-semibold sm:text-4xl">
              How Does Maintenance Through <strong>Best Bay Services</strong> Save You Money?
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-[var(--muted-text)] leading-relaxed">
              According to the <em>National Association of Residential Property Managers</em>, maintenance markups of <strong>10-20%</strong> are standard in the property management industry. ViVi eliminates that cost entirely. <strong>Best Bay Services</strong> is our maintenance partner — no third-party markups, faster response times, and quality we personally stand behind. When something breaks at your property, our team handles it directly.
            </p>

            {/* Key benefits list */}
            <ul className="mx-auto mt-8 max-w-lg text-left space-y-3 text-[var(--muted-text)]">
              <li className="flex items-start gap-2.5 text-sm"><span className="mt-0.5 text-accent">&#10003;</span> <strong>$0 maintenance markup</strong> — unlike industry-standard 10-20% surcharges</li>
              <li className="flex items-start gap-2.5 text-sm"><span className="mt-0.5 text-accent">&#10003;</span> <strong>Faster response times</strong> — our team, not a third-party contractor queue</li>
              <li className="flex items-start gap-2.5 text-sm"><span className="mt-0.5 text-accent">&#10003;</span> <strong>Quality accountability</strong> — we stand behind every repair personally</li>
              <li className="flex items-start gap-2.5 text-sm"><span className="mt-0.5 text-accent">&#10003;</span> <strong>Emergency coverage</strong> — immediate response to protect your property</li>
            </ul>

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

        {/* Owner testimonial — blockquote for semantic emphasis */}
        <blockquote className="mx-auto max-w-3xl px-6 py-12 text-center">
          <p className="text-xl leading-relaxed italic text-[var(--foreground)]">
            &ldquo;I switched to ViVi after getting gouged on maintenance fees by my last manager. Barrett&apos;s team found a <strong>quality tenant in 10 days</strong> and my first maintenance bill was 40% less than what I was paying before. Wish I&apos;d switched sooner.&rdquo;
          </p>
          <footer className="mt-4 text-sm text-[var(--muted-text)]">
            — Tampa Bay property owner, 3 rental units under ViVi management
          </footer>
        </blockquote>

        {/* ============================================
            TRUST — Who is behind ViVi
            ============================================ */}
        <section id="about-barrett" className="px-6 py-20 sm:py-28">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-semibold sm:text-4xl">
              Who Is Behind <strong>ViVi Property Management</strong>?
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-[var(--muted-text)] leading-relaxed">
              ViVi is led by <strong>Barrett Henry</strong>, a licensed <em>Florida Broker Associate</em> with REMAX Collective and 23+ years of real estate experience. Barrett lives in the same neighborhoods he manages — Valrico, Brandon, and Riverview. He built ViVi to give <strong>Tampa Bay property owners</strong> something most managers don&apos;t: transparency, direct communication, and a maintenance partner <em>Best Bay Services</em> that eliminates third-party markups.
            </p>
            <ul className="mt-10 grid gap-6 sm:grid-cols-3 list-none p-0">
              <li className="card p-6 text-center">
                <p className="font-display text-lg font-semibold">e-PRO</p>
                <p className="mt-1 text-xs text-[var(--muted-text)]">Digital Marketing Certified</p>
              </li>
              <li className="card p-6 text-center">
                <p className="font-display text-lg font-semibold">MRP</p>
                <p className="mt-1 text-xs text-[var(--muted-text)]">Military Relocation Professional</p>
              </li>
              <li className="card p-6 text-center">
                <p className="font-display text-lg font-semibold">SRS</p>
                <p className="mt-1 text-xs text-[var(--muted-text)]">Seller Representative Specialist</p>
              </li>
            </ul>
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
                  text: "We walk your property, build a make-ready checklist, coordinate needed work, and get it market-ready fast. Professional photos and competitive rent analysis included.",
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
        <section id="how-it-works" className="px-6 py-20 sm:py-28">
          <div className="mx-auto max-w-6xl">
            <h2 className="mb-14 text-center text-3xl font-semibold sm:text-4xl">
              How Does <strong>ViVi Property Management</strong> Work?
            </h2>
            <ol className="grid gap-10 sm:grid-cols-3 list-none p-0">
              {PROCESS.map((step) => (
                <li key={step.step} className="text-center">
                  {/* Step number */}
                  <span className="mb-4 inline-block font-display text-5xl font-bold text-accent/30">
                    {step.step}
                  </span>
                  <h3 className="mb-3 font-display text-2xl font-semibold">{step.title}</h3>
                  <p className="text-sm leading-relaxed text-[var(--muted-text)]">{step.desc}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* ============================================
            PRICING — Three-tier cards
            ============================================ */}
        <section className="section-alt px-6 py-20 sm:py-28" id="pricing">
          <div className="mx-auto max-w-6xl">
            <h2 className="mb-4 text-center text-3xl font-semibold sm:text-4xl">
              What Does <strong>Property Management</strong> Cost With ViVi?
            </h2>
            <p className="mx-auto mb-14 max-w-xl text-center text-[var(--muted-text)]">
              Three simple plans. <strong>No hidden fees.</strong> <em>$0 maintenance markup.</em>
            </p>

            <div className="grid gap-8 lg:grid-cols-3">
              {PRICING_TIERS.map((tier) => (
                <div
                  key={tier.name}
                  className={`card overflow-hidden ${tier.popular ? "ring-2 ring-accent" : ""}`}
                >
                  {/* Tier header */}
                  <div className={`px-6 py-6 text-center ${tier.popular ? "gradient-accent text-white" : "bg-[var(--card-bg)]"}`}>
                    {tier.popular && (
                      <p className="mb-2 text-xs font-semibold uppercase tracking-widest opacity-80">
                        Most Popular
                      </p>
                    )}
                    <p className={`text-sm font-medium uppercase tracking-widest ${tier.popular ? "opacity-80" : "text-[var(--muted-text)]"}`}>
                      {tier.subtitle}
                    </p>
                    <p className={`mt-2 font-display text-2xl font-bold ${tier.popular ? "" : "text-accent"}`}>
                      {tier.price}
                    </p>
                    <p className={`mt-1 text-xs ${tier.popular ? "opacity-70" : "text-[var(--muted-text)]"}`}>
                      {tier.priceNote}
                    </p>
                  </div>

                  {/* Tier details */}
                  <div className="px-6 py-6">
                    <p className="mb-4 text-sm text-[var(--muted-text)]">{tier.description}</p>
                    <ul className="space-y-2.5">
                      {tier.includes.map((item) => (
                        <li key={item} className="flex items-start gap-2.5 text-sm">
                          <span className="mt-0.5 text-accent">&#10003;</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-6 text-center">
                      <Link
                        href="/rental-analysis"
                        className={`inline-block rounded-full px-6 py-3 text-sm font-semibold transition-colors ${
                          tier.popular
                            ? "bg-accent text-white hover:bg-accent-dark"
                            : "border border-accent text-accent hover:bg-accent hover:text-white"
                        }`}
                      >
                        Get Started
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Additional fees note */}
            <div className="mt-10 mx-auto max-w-2xl text-center text-sm text-[var(--muted-text)]">
              <p>
                <strong>Setup/onboarding:</strong> {ADDITIONAL_FEES.setup.amount} one-time &nbsp;|&nbsp;
                <strong>Lease renewal:</strong> {ADDITIONAL_FEES.renewal.amount} &nbsp;|&nbsp;
                <strong>Maintenance markup:</strong> {ADDITIONAL_FEES.maintenanceMarkup.amount}
              </p>
            </div>
          </div>
        </section>

        {/* ============================================
            SERVICE AREAS — 5 county cards + expansion
            ============================================ */}
        <section id="service-areas" className="px-6 py-20 sm:py-28">
          <div className="mx-auto max-w-6xl">
            <h2 className="mb-4 text-center text-3xl font-semibold sm:text-4xl">
              What Areas Does <strong>ViVi Property Management</strong> Cover?
            </h2>
            <p className="mx-auto mb-14 max-w-xl text-center text-[var(--muted-text)]">
              Five <strong>Tampa Bay</strong> counties. One dedicated team.
            </p>

            <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 list-none p-0">
              {COUNTIES.filter((c) => c.active).map((county) => (
                <li key={county.name}>
                  <Link
                    href="/areas"
                    className="card block p-6 transition-colors hover:border-accent"
                  >
                    <h3 className="mb-2 font-display text-lg font-semibold">{county.name}</h3>
                    <p className="text-sm leading-relaxed text-[var(--muted-text)]">{county.cities}</p>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ============================================
            FAQ SECTION — Original site FAQs
            ============================================ */}
        <section id="faq-section" className="section-alt px-6 py-20 sm:py-28">
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
            RESOURCES & TOOLS — cross-links to new pages
            ============================================ */}
        <section id="owner-resources" className="section-alt px-6 py-20 sm:py-28">
          <div className="mx-auto max-w-6xl">
            <h2 className="mb-4 text-center text-3xl font-semibold sm:text-4xl">
              Resources for <strong>Property Owners</strong> and Investors
            </h2>
            <p className="mx-auto mb-14 max-w-xl text-center text-[var(--muted-text)]">
              Tools, guides, and insights to help you make <em>confident decisions</em> about your rental property.
            </p>
            <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 list-none p-0">
              <li>
                <Link href="/guarantees" className="card block p-6 transition-colors hover:border-accent">
                  <p className="mb-2 font-display text-lg font-semibold">Our Guarantees</p>
                  <p className="text-sm leading-relaxed text-[var(--muted-text)]">5 named guarantees that protect your investment — from 21-day leasing to 30-day cancellation.</p>
                </Link>
              </li>
              <li>
                <Link href="/compare" className="card block p-6 transition-colors hover:border-accent">
                  <p className="mb-2 font-display text-lg font-semibold">Self-Manage vs. Hire</p>
                  <p className="text-sm leading-relaxed text-[var(--muted-text)]">Side-by-side comparison of self-managing, hiring ViVi, or using another PM company.</p>
                </Link>
              </li>
              <li>
                <Link href="/tools/roi-calculator" className="card block p-6 transition-colors hover:border-accent">
                  <p className="mb-2 font-display text-lg font-semibold">ROI Calculator</p>
                  <p className="text-sm leading-relaxed text-[var(--muted-text)]">Run the numbers on any Tampa Bay rental property — cash flow, cap rate, and cash-on-cash return.</p>
                </Link>
              </li>
              <li>
                <Link href="/investors" className="card block p-6 transition-colors hover:border-accent">
                  <p className="mb-2 font-display text-lg font-semibold">For Investors</p>
                  <p className="text-sm leading-relaxed text-[var(--muted-text)]">Out-of-state owners, first-time landlords, inherited property — we handle it all.</p>
                </Link>
              </li>
            </ul>
          </div>
        </section>

      </article>

      {/* ============================================
          BOTTOM CTA
          ============================================ */}
      <section className="gradient-accent px-6 py-20 text-center text-white sm:py-28">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-3xl font-bold sm:text-4xl">
            Ready to let your property work for you?
          </h2>
          <p className="mx-auto mt-6 max-w-lg text-lg text-white/80">
            Find out what your property could rent for with a <strong>free, no-obligation analysis</strong> from our team.
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
