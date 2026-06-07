// ============================================
// Footer — Dark footer with branding, counties,
// contact info, and legal line
// ============================================

import Link from "next/link";
import { SITE, COUNTIES, NAV_LINKS } from "@/lib/constants";

// Map county display names to URL slugs for linking
const COUNTY_SLUGS: Record<string, string> = {
  "Hillsborough County": "hillsborough-county",
  "Pinellas County": "pinellas-county",
  "Pasco County": "pasco-county",
  "Polk County": "polk-county",
  "Manatee County": "manatee-county",
};

export default function Footer() {
  return (
    <footer className="bg-[var(--footer-bg)] text-[var(--footer-text)]">
      <div className="mx-auto max-w-7xl px-6 py-16">
        {/* ---- Top grid: brand, links, areas, contact ---- */}
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* Column 1 — Brand */}
          <div>
            <Link href="/" className="inline-block">
              <span className="font-display text-3xl font-bold text-white">ViVi</span>
              <span className="ml-1.5 text-sm text-white/70">Property Management</span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed">
              Professional property management across Tampa Bay. Maintenance handled by{" "}
              <a href="https://bestbayservices.com" target="_blank" rel="noopener noreferrer" className="text-white underline decoration-white/30 hover:decoration-white transition-colors">Best Bay Services</a>.
              Part of Barrett Henry&apos;s{" "}
              <a href="https://nowtb.com" target="_blank" rel="noopener noreferrer" className="text-white underline decoration-white/30 hover:decoration-white transition-colors">real estate team</a>.
            </p>
            <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-xs">
              <a href="https://valricopropertymgmt.com" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-white">Valrico PM</a>
              <a href="https://buythe.biz" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-white">Buy/Sell a Business</a>
              <a href="https://buildtb.com" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-white">New Construction</a>
            </div>
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
                  className="text-sm font-medium text-accent-light transition-colors hover:text-white"
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
                  <Link
                    href={`/areas/${COUNTY_SLUGS[county.name]}`}
                    className="transition-colors hover:text-white"
                  >
                    {county.name}
                  </Link>
                </li>
              ))}
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

            {/* Social media links */}
            <h3 className="mb-3 mt-6 font-sans text-xs font-semibold uppercase tracking-widest text-white">
              Follow Us
            </h3>
            <div className="flex gap-4">
              <a
                href="https://www.facebook.com/vivipropertymanagement"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="text-sm transition-colors hover:text-white"
              >
                Facebook
              </a>
              <a
                href="https://www.instagram.com/vivipm"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-sm transition-colors hover:text-white"
              >
                Instagram
              </a>
              <a
                href="https://www.linkedin.com/company/vivi-property-management"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-sm transition-colors hover:text-white"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        {/* ---- REMAX Offices ---- */}
        <div className="mt-14 border-t border-white/10 pt-8">
          <h3 className="mb-6 font-sans text-xs font-semibold uppercase tracking-widest text-white">
            REMAX Collective Offices
          </h3>
          <div className="grid gap-6 sm:grid-cols-3">
            <div>
              <p className="text-sm font-medium text-white">Tampa</p>
              <p className="mt-1 text-xs leading-relaxed">14310 N Dale Mabry Hwy, Ste 100<br />Tampa, FL 33618</p>
            </div>
            <div>
              <p className="text-sm font-medium text-white">Largo</p>
              <p className="mt-1 text-xs leading-relaxed">11200 Seminole Blvd, Ste 202<br />Largo, FL 33778</p>
            </div>
            <div>
              <p className="text-sm font-medium text-white">Brandon</p>
              <p className="mt-1 text-xs leading-relaxed">417 Lithia Pinecrest Rd<br />Brandon, FL 33511</p>
            </div>
          </div>
        </div>

        {/* ---- Copyright ---- */}
        <div className="mt-10 border-t border-white/10 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 text-xs sm:flex-row">
            <p>&copy; {new Date().getFullYear()} {SITE.name}. All rights reserved.</p>
            <p>
              Barrett Henry, REALTOR&reg; | REMAX Collective
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
