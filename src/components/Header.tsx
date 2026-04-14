// ============================================
// Header — Fixed nav with glass effect
// Uses "use client" for mobile menu toggle
// ============================================
"use client";

import { useState } from "react";
import Link from "next/link";
import { NAV_LINKS, SITE } from "@/lib/constants";

export default function Header() {
  // Controls the mobile hamburger menu open/close state
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="glass fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* ---- Logo ---- */}
        <Link href="/" className="flex items-baseline gap-1.5" aria-label="ViVi Property Management home">
          {/* "ViVi" in display font, purple */}
          <span className="font-display text-3xl font-bold tracking-tight text-accent">
            ViVi
          </span>
          {/* "Property Management" in body font, muted */}
          <span className="hidden text-sm font-medium tracking-wide text-[var(--muted-text)] sm:inline">
            Property Management
          </span>
        </Link>

        {/* ---- Desktop nav links ---- */}
        <nav className="hidden items-center gap-7 lg:flex" aria-label="Main navigation">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-[var(--foreground)] transition-colors hover:text-accent"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* ---- CTA button (desktop) ---- */}
        <div className="hidden lg:block">
          <Link
            href="/rental-analysis"
            className="rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-accent-dark"
          >
            Free Rent Analysis
          </Link>
        </div>

        {/* ---- Mobile hamburger button ---- */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="flex flex-col justify-center gap-1.5 lg:hidden"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
        >
          {/* Three bars that animate into an X when open */}
          <span
            className={`block h-0.5 w-6 bg-[var(--foreground)] transition-transform ${
              mobileOpen ? "translate-y-2 rotate-45" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-[var(--foreground)] transition-opacity ${
              mobileOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-[var(--foreground)] transition-transform ${
              mobileOpen ? "-translate-y-2 -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {/* ---- Mobile menu drawer ---- */}
      {mobileOpen && (
        <nav
          className="glass border-t border-[var(--card-border)] px-6 pb-6 pt-4 lg:hidden"
          aria-label="Mobile navigation"
        >
          <div className="flex flex-col gap-4">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-base font-medium text-[var(--foreground)] transition-colors hover:text-accent"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/rental-analysis"
              onClick={() => setMobileOpen(false)}
              className="mt-2 rounded-full bg-accent px-5 py-2.5 text-center text-sm font-semibold text-white transition-colors hover:bg-accent-dark"
            >
              Free Rent Analysis
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
