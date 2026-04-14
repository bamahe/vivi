// ============================================
// Rental Analysis Page — Lead gen form
// Posts to Supabase "rental_analysis_leads" table
// ============================================
"use client";

import { useState, type FormEvent } from "react";
import { SITE } from "@/lib/constants";
import { supabase } from "@/lib/supabase";

export default function RentalAnalysisPage() {
  // Form field state
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    bedrooms: "",
    bathrooms: "",
    sqft: "",
    propertyType: "Single Family",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  /** Handle form submission — insert into Supabase */
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      if (!supabase) throw new Error("Supabase not configured");
      const { error } = await supabase.from("rental_analysis_leads").insert([
        {
          name: form.name,
          email: form.email,
          phone: form.phone,
          property_address: form.address,
          bedrooms: form.bedrooms ? parseInt(form.bedrooms) : null,
          bathrooms: form.bathrooms ? parseFloat(form.bathrooms) : null,
          sqft: form.sqft ? parseInt(form.sqft) : null,
          property_type: form.propertyType,
        },
      ]);

      if (error) throw error;
      setStatus("sent");
      setForm({
        name: "",
        email: "",
        phone: "",
        address: "",
        bedrooms: "",
        bathrooms: "",
        sqft: "",
        propertyType: "Single Family",
      });
    } catch {
      setStatus("error");
    }
  };

  // Property type options
  const propertyTypes = [
    "Single Family",
    "Townhouse",
    "Condo",
    "Duplex",
    "Multi-Family",
    "Other",
  ];

  // Shared input class string
  const inputClass =
    "w-full rounded-lg border border-[var(--input-border)] bg-[var(--input-bg)] px-4 py-3 text-sm outline-none transition-colors focus:border-accent";

  return (
    <>
      <title>Free Rental Analysis | ViVi Property Management</title>
      <meta
        name="description"
        content="Get a free rental analysis for your property. Find out what your home could rent for with ViVi Property Management. No obligation."
      />

      {/* ---- Page header ---- */}
      <section className="gradient-accent px-6 py-20 text-center text-white sm:py-28">
        <div className="mx-auto max-w-3xl">
          <h1 className="text-4xl font-bold sm:text-5xl">
            Free rental analysis
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lg text-white/80">
            Find out what your property could rent for. No obligation, no pressure. Just numbers.
          </p>
        </div>
      </section>

      {/* ---- Form + benefits ---- */}
      <section className="px-6 py-20 sm:py-28">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2">
          {/* Form */}
          <div>
            <h2 className="mb-2 text-2xl font-semibold sm:text-3xl">Tell us about your property</h2>
            <p className="mb-8 text-sm text-[var(--muted-text)]">
              We will analyze comparable rentals in your area and send you a detailed report.
            </p>

            {status === "sent" ? (
              <div className="card p-10 text-center">
                <p className="text-lg font-semibold text-accent">Request received.</p>
                <p className="mt-2 text-sm text-[var(--muted-text)]">
                  We will send your rental analysis within one business day.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Name */}
                <div>
                  <label htmlFor="ra-name" className="mb-1.5 block text-sm font-medium">
                    Name
                  </label>
                  <input
                    id="ra-name"
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className={inputClass}
                  />
                </div>

                {/* Email + Phone row */}
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="ra-email" className="mb-1.5 block text-sm font-medium">
                      Email
                    </label>
                    <input
                      id="ra-email"
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label htmlFor="ra-phone" className="mb-1.5 block text-sm font-medium">
                      Phone
                    </label>
                    <input
                      id="ra-phone"
                      type="tel"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className={inputClass}
                    />
                  </div>
                </div>

                {/* Property address */}
                <div>
                  <label htmlFor="ra-address" className="mb-1.5 block text-sm font-medium">
                    Property address
                  </label>
                  <input
                    id="ra-address"
                    type="text"
                    required
                    placeholder="123 Main St, Tampa, FL 33601"
                    value={form.address}
                    onChange={(e) => setForm({ ...form, address: e.target.value })}
                    className={inputClass}
                  />
                </div>

                {/* Bedrooms, Bathrooms, Sqft row */}
                <div className="grid gap-5 sm:grid-cols-3">
                  <div>
                    <label htmlFor="ra-beds" className="mb-1.5 block text-sm font-medium">
                      Bedrooms
                    </label>
                    <input
                      id="ra-beds"
                      type="number"
                      min="0"
                      max="20"
                      value={form.bedrooms}
                      onChange={(e) => setForm({ ...form, bedrooms: e.target.value })}
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label htmlFor="ra-baths" className="mb-1.5 block text-sm font-medium">
                      Bathrooms
                    </label>
                    <input
                      id="ra-baths"
                      type="number"
                      min="0"
                      max="20"
                      step="0.5"
                      value={form.bathrooms}
                      onChange={(e) => setForm({ ...form, bathrooms: e.target.value })}
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label htmlFor="ra-sqft" className="mb-1.5 block text-sm font-medium">
                      Sq Ft
                    </label>
                    <input
                      id="ra-sqft"
                      type="number"
                      min="0"
                      value={form.sqft}
                      onChange={(e) => setForm({ ...form, sqft: e.target.value })}
                      className={inputClass}
                    />
                  </div>
                </div>

                {/* Property type */}
                <div>
                  <label htmlFor="ra-type" className="mb-1.5 block text-sm font-medium">
                    Property type
                  </label>
                  <select
                    id="ra-type"
                    value={form.propertyType}
                    onChange={(e) => setForm({ ...form, propertyType: e.target.value })}
                    className={inputClass}
                  >
                    {propertyTypes.map((t) => (
                      <option key={t} value={t}>
                        {t}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full rounded-full bg-accent px-8 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-accent-dark disabled:opacity-60 sm:w-auto"
                >
                  {status === "sending" ? "Submitting..." : "Get My Free Analysis"}
                </button>

                {status === "error" && (
                  <p className="text-sm text-red-500">
                    Something went wrong. Please try again or call us at {SITE.phone}.
                  </p>
                )}
              </form>
            )}
          </div>

          {/* Benefits sidebar */}
          <div>
            <h2 className="mb-8 text-2xl font-semibold sm:text-3xl">What you get</h2>

            <div className="space-y-6">
              <div className="card p-6">
                <h3 className="mb-2 font-display text-lg font-semibold">Competitive market analysis</h3>
                <p className="text-sm text-[var(--muted-text)]">
                  We analyze comparable rentals in your neighborhood to determine the optimal rent price. High enough to maximize your return, realistic enough to avoid vacancy.
                </p>
              </div>

              <div className="card p-6">
                <h3 className="mb-2 font-display text-lg font-semibold">Net income projection</h3>
                <p className="text-sm text-[var(--muted-text)]">
                  See your estimated monthly and annual net income after management fees, typical maintenance costs, and other expenses.
                </p>
              </div>

              <div className="card p-6">
                <h3 className="mb-2 font-display text-lg font-semibold">Make-ready recommendations</h3>
                <p className="text-sm text-[var(--muted-text)]">
                  If your property needs work before listing, we will tell you what to prioritize and what to skip. We focus on improvements that increase rent, not just cosmetics.
                </p>
              </div>

              <div className="card p-6">
                <h3 className="mb-2 font-display text-lg font-semibold">No obligation</h3>
                <p className="text-sm text-[var(--muted-text)]">
                  The analysis is free. No contracts, no commitments. If the numbers work for you, we are here. If not, no hard feelings.
                </p>
              </div>
            </div>

            {/* Contact fallback */}
            <div className="mt-8 text-center">
              <p className="text-sm text-[var(--muted-text)]">
                Prefer to talk? Call us at{" "}
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
    </>
  );
}
