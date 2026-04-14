// ============================================
// Footer — Dark footer with branding, counties,
// contact info, and legal line
// ============================================

import Link from "next/link";
import { SITE, COUNTIES, NAV_LINKS } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="bg-[var(--footer-bg)] text-[var(--footer-text)]">
      <div className="mx-auto max-w-7xl px-6 py-16">
        {/* ---- Top grid: brand, links, areas, contact ---- */}
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* Column 1 — Brand */}
          <div>
            <Link href="/" className="inline-block">
              <span className="font-display text-3xl font-bold text-accent">ViVi</span>
              <span className="ml-1.5 text-sm text-[var(--footer-text)]">Property Management</span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed">
              Professional property management across Florida. Protect your investment, maximize your returns.
            </p>
          </div>

          {/* Column 2 — Quick links */}
          <div>
            <h3 className="mb-4 font-sans text-xs font-semibold uppercase tracking-widest text-white">
              Quick Links
            </h3>
            <ul className="space-y-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/rental-analysis"
                  className="text-sm font-medium text-accent transition-colors hover:text-accent-light"
                >
                  Free Rent Analysis
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3 — Service areas */}
          <div>
            <h3 className="mb-4 font-sans text-xs font-semibold uppercase tracking-widest text-white">
              Service Areas
            </h3>
            <ul className="space-y-2.5">
              {COUNTIES.filter((c) => c.active).map((county) => (
                <li key={county.name} className="text-sm">
                  {county.name}
                </li>
              ))}
              <li className="pt-1 text-xs text-accent">
                Expanding to all 67 FL counties
              </li>
            </ul>
          </div>

          {/* Column 4 — Contact */}
          <div>
            <h3 className="mb-4 font-sans text-xs font-semibold uppercase tracking-widest text-white">
              Contact
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href={`tel:${SITE.phone.replace(/[^0-9+]/g, "")}`} className="transition-colors hover:text-white">
                  {SITE.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${SITE.email}`} className="transition-colors hover:text-white">
                  {SITE.email}
                </a>
              </li>
              <li className="leading-relaxed">{SITE.address}</li>
            </ul>
          </div>
        </div>

        {/* ---- Divider ---- */}
        <div className="mt-14 border-t border-white/10 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 text-xs sm:flex-row">
            <p>&copy; {new Date().getFullYear()} {SITE.name}. All rights reserved.</p>
            <p>
              Managed by Barrett Henry, REALTOR&reg; | RE/MAX Collective
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
