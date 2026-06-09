// ============================================
// Contact Page — Form + contact details
// Form posts to Supabase "contact_submissions" table
// ============================================
"use client";

import { useState, type FormEvent } from "react";
import Image from "next/image";
import { SITE } from "@/lib/constants";
import Breadcrumbs from "@/components/Breadcrumbs";

export default function ContactPage() {
  // Form field state
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  /** Handle form submission — sends email via API route */
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) throw new Error("Failed to send");
      setStatus("sent");
      setForm({ name: "", email: "", phone: "", address: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  return (
    <>
      {/* ---- Page header with hero image ---- */}
      <section className="gradient-accent relative overflow-hidden px-6 py-20 text-center text-white sm:py-28">
        <Image
          src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200&q=80"
          alt="Keys to a rental property representing getting started with ViVi Property Management"
          fill
          priority
          className="object-cover opacity-15"
          sizes="100vw"
        />
        <div className="relative mx-auto max-w-3xl">
          <h1 className="text-4xl font-bold sm:text-5xl">Contact ViVi Property Management</h1>
          <p className="mx-auto mt-6 max-w-xl text-lg text-white/80">
            Questions about property management? Ready to get started? We are here to help.
          </p>
        </div>
      </section>

      {/* ---- Breadcrumbs ---- */}
      <Breadcrumbs
        items={[
          { name: "Home", href: "/" },
          { name: "Contact", href: "/contact" },
        ]}
      />

      {/* ---- Form + contact info grid ---- */}
      <section className="px-6 py-20 sm:py-28">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2">
          {/* Contact form */}
          <div>
            <h2 className="mb-8 text-2xl font-semibold sm:text-3xl">Send us a message</h2>

            {status === "sent" ? (
              <div className="card p-10 text-center">
                <p className="text-lg font-semibold text-accent">Message received.</p>
                <p className="mt-2 text-sm text-[var(--muted-text)]">
                  We will get back to you within one business day.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="mb-1.5 block text-sm font-medium">
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full rounded-lg border border-[var(--input-border)] bg-[var(--input-bg)] px-4 py-3 text-sm outline-none transition-colors focus:border-accent"
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="mb-1.5 block text-sm font-medium">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full rounded-lg border border-[var(--input-border)] bg-[var(--input-bg)] px-4 py-3 text-sm outline-none transition-colors focus:border-accent"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label htmlFor="phone" className="mb-1.5 block text-sm font-medium">
                    Phone
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="w-full rounded-lg border border-[var(--input-border)] bg-[var(--input-bg)] px-4 py-3 text-sm outline-none transition-colors focus:border-accent"
                  />
                </div>

                {/* Property address */}
                <div>
                  <label htmlFor="address" className="mb-1.5 block text-sm font-medium">
                    Property address (optional)
                  </label>
                  <input
                    id="address"
                    type="text"
                    value={form.address}
                    onChange={(e) => setForm({ ...form, address: e.target.value })}
                    className="w-full rounded-lg border border-[var(--input-border)] bg-[var(--input-bg)] px-4 py-3 text-sm outline-none transition-colors focus:border-accent"
                  />
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="mb-1.5 block text-sm font-medium">
                    Message
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full resize-y rounded-lg border border-[var(--input-border)] bg-[var(--input-bg)] px-4 py-3 text-sm outline-none transition-colors focus:border-accent"
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="rounded-full bg-accent px-8 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-accent-dark disabled:opacity-60"
                >
                  {status === "sending" ? "Sending..." : "Send Message"}
                </button>

                {status === "error" && (
                  <p className="text-sm text-red-500">
                    Something went wrong. Please try again or call us directly.
                  </p>
                )}
              </form>
            )}

            {/* Response time guarantee + trust signals */}
            <div className="mt-8 space-y-3 rounded-lg border border-[var(--card-border)] bg-[var(--card-bg)] p-6">
              <p className="text-sm font-semibold text-accent">
                We respond within 2 hours during business hours — usually faster.
              </p>
              <ul className="flex flex-wrap gap-x-6 gap-y-2 text-xs text-[var(--muted-text)]">
                <li className="flex items-center gap-1.5">
                  <span aria-hidden="true" className="text-accent">&#10003;</span>
                  23+ years of real estate experience
                </li>
                <li className="flex items-center gap-1.5">
                  <span aria-hidden="true" className="text-accent">&#10003;</span>
                  Licensed Florida Broker Associate
                </li>
                <li className="flex items-center gap-1.5">
                  <span aria-hidden="true" className="text-accent">&#10003;</span>
                  No obligation
                </li>
                <li className="flex items-center gap-1.5">
                  <span aria-hidden="true" className="text-accent">&#10003;</span>
                  Confidential
                </li>
              </ul>
            </div>
          </div>

          {/* Contact details sidebar */}
          <div>
            <h2 className="mb-8 text-2xl font-semibold sm:text-3xl">Contact details</h2>

            <div className="space-y-8">
              {/* Phone */}
              <div>
                <p className="mb-1 text-xs font-semibold uppercase tracking-widest text-[var(--muted-text)]">
                  Phone
                </p>
                <a
                  href={`tel:${SITE.phone.replace(/[^0-9+]/g, "")}`}
                  className="text-lg font-medium transition-colors hover:text-accent"
                >
                  {SITE.phone}
                </a>
              </div>

              {/* Email */}
              <div>
                <p className="mb-1 text-xs font-semibold uppercase tracking-widest text-[var(--muted-text)]">
                  Email
                </p>
                <a
                  href={`mailto:${SITE.email}`}
                  className="text-lg font-medium transition-colors hover:text-accent"
                >
                  {SITE.email}
                </a>
              </div>

              {/* Address */}
              <div>
                <p className="mb-1 text-xs font-semibold uppercase tracking-widest text-[var(--muted-text)]">
                  Office
                </p>
                <p className="text-lg font-medium">{SITE.address}</p>
              </div>

              {/* Hours */}
              <div>
                <p className="mb-1 text-xs font-semibold uppercase tracking-widest text-[var(--muted-text)]">
                  Hours
                </p>
                <p className="text-sm leading-relaxed">
                  Monday - Friday: 9:00 AM - 5:00 PM<br />
                  Saturday - Sunday: By appointment<br />
                  Emergency maintenance: 24/7
                </p>
              </div>

              {/* Managed by */}
              <div className="card p-6">
                <p className="text-sm font-medium">
                  Managed by Barrett Henry, REALTOR&reg;
                </p>
                <p className="mt-1 text-sm text-[var(--muted-text)]">
                  Broker Associate | REMAX Collective
                </p>
                <p className="mt-1 text-sm text-[var(--muted-text)]">
                  23+ years of real estate experience
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
