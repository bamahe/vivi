// ============================================
// Tenants Page — Info for current & prospective tenants
// ============================================

import type { Metadata } from "next";
import Link from "next/link";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "For Tenants",
  description:
    "Information for tenants managed by ViVi Property Management. How to apply, submit maintenance requests, pay rent, and access your tenant portal.",
};

// Application steps
const APP_STEPS = [
  {
    step: "01",
    title: "Find a property",
    desc: "Browse our available listings online. Each listing includes professional photos, a 3D virtual tour, rent amount, and property details.",
  },
  {
    step: "02",
    title: "Submit your application",
    desc: "Apply online through our tenant portal. You will need to provide identification, proof of income, rental history, and consent for background and credit checks.",
  },
  {
    step: "03",
    title: "Get approved and move in",
    desc: "Approved applicants sign the lease, pay the security deposit, and schedule a move-in date. We complete a thorough move-in inspection with you.",
  },
];

// Tenant resources
const RESOURCES = [
  {
    title: "Pay rent online",
    desc: "Set up automatic payments or make one-time payments through the tenant portal. No more mailing checks.",
  },
  {
    title: "Submit maintenance requests",
    desc: "Report maintenance issues 24/7 through the portal. Include photos and descriptions to help our in-house team respond quickly.",
  },
  {
    title: "Review your lease",
    desc: "Access your lease agreement, move-in inspection report, and other documents anytime from the portal.",
  },
  {
    title: "Emergency repairs",
    desc: "For after-hours emergencies (flooding, no heat, gas leaks), call our emergency maintenance line. We respond immediately.",
  },
];

export default function TenantsPage() {
  return (
    <>
      {/* ---- Page header ---- */}
      <section className="gradient-accent px-6 py-20 text-center text-white sm:py-28">
        <div className="mx-auto max-w-3xl">
          <h1 className="text-4xl font-bold sm:text-5xl">
            For tenants
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lg text-white/80">
            Everything you need to apply, pay rent, and request maintenance.
          </p>
        </div>
      </section>

      {/* ---- How to apply ---- */}
      <section className="px-6 py-20 sm:py-28">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-14 text-center text-3xl font-semibold sm:text-4xl">
            How to apply
          </h2>
          <div className="grid gap-10 sm:grid-cols-3">
            {APP_STEPS.map((step) => (
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

      {/* ---- Tenant resources ---- */}
      <section className="section-alt px-6 py-20 sm:py-28">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-12 text-center text-3xl font-semibold sm:text-4xl">
            Tenant resources
          </h2>
          <div className="grid gap-8 sm:grid-cols-2">
            {RESOURCES.map((r) => (
              <div key={r.title} className="card p-8">
                <h3 className="mb-3 font-display text-xl font-semibold">{r.title}</h3>
                <p className="text-sm leading-relaxed text-[var(--muted-text)]">{r.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---- Tenant portal placeholder ---- */}
      <section className="px-6 py-20 text-center sm:py-28">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-3xl font-semibold sm:text-4xl">
            Tenant portal
          </h2>
          <p className="mx-auto mt-6 max-w-lg text-[var(--muted-text)] leading-relaxed">
            Pay rent, submit maintenance requests, and access documents from your tenant portal. Available 24/7 from any device.
          </p>
          <div className="card mx-auto mt-10 max-w-md p-10">
            <p className="text-lg font-medium text-[var(--muted-text)]">Portal login coming soon</p>
            <p className="mt-2 text-sm text-[var(--muted-text)]">
              Current tenants: contact us for portal access.
            </p>
          </div>
        </div>
      </section>

      {/* ---- Contact info ---- */}
      <section className="section-alt px-6 py-20 text-center sm:py-28">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-3xl font-semibold sm:text-4xl">
            Need help?
          </h2>
          <p className="mx-auto mt-6 max-w-lg text-[var(--muted-text)]">
            Reach out to our team. We are here to help.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a
              href={`tel:${SITE.phone.replace(/[^0-9+]/g, "")}`}
              className="rounded-full bg-accent px-8 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-accent-dark"
            >
              Call {SITE.phone}
            </a>
            <Link
              href="/contact"
              className="rounded-full border border-accent px-8 py-3.5 text-sm font-semibold text-accent transition-colors hover:bg-accent hover:text-white"
            >
              Contact Form
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
