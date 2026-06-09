// ============================================
// Root Layout — ViVi PM
// Loads Google Fonts, sets metadata, wraps
// all pages with Header + Footer
// ============================================

import type { Metadata } from "next";
import { Cormorant_Garamond, Outfit } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ClientWidgets } from "@/components/ClientWidgets";
import "./globals.css";

// Display/heading font — Cormorant Garamond
const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

// Body font — Outfit
const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

// Site-wide metadata (individual pages can override)
export const metadata: Metadata = {
  title: {
    default: "ViVi Property Management | Tampa Bay Property Management",
    template: "%s | ViVi Property Management",
  },
  description:
    "Professional property management across Hillsborough, Pinellas, Pasco, Polk, and Manatee Counties in Tampa Bay. 23+ years of real estate experience. Maintenance through Best Bay Services. 8-12% of rent collected.",
  metadataBase: new URL("https://vivipm.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://vivipm.com",
    siteName: "ViVi Property Management",
    title: "ViVi Property Management | Tampa Bay Property Management",
    description:
      "Protect your property. Maximize your returns. Professional property management with maintenance through Best Bay Services, comprehensive tenant screening, and transparent pricing.",
  },
  twitter: {
    card: "summary_large_image",
    title: "ViVi Property Management",
    description: "Professional property management across Tampa Bay.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${outfit.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {/* Site-wide structured data: WebSite + Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
                "@context": "https://schema.org",
                "@type": "WebSite",
                name: "ViVi Property Management",
                url: "https://vivipm.com",
                potentialAction: {
                  "@type": "SearchAction",
                  target: "https://vivipm.com/areas?q={search_term_string}",
                  "query-input": "required name=search_term_string",
                },
              },
              {
                "@context": "https://schema.org",
                "@type": "Organization",
                name: "ViVi Property Management",
                url: "https://vivipm.com",
                logo: "https://vivipm.com/logo.png",
                telephone: "(813) 428-9800",
                email: "info@vivipm.com",
                address: {
                  "@type": "PostalAddress",
                  streetAddress: "14310 N. Dale Mabry Hwy, Ste 100",
                  addressLocality: "Tampa",
                  addressRegion: "FL",
                  postalCode: "33618",
                  addressCountry: "US",
                },
                founder: {
                  "@type": "Person",
                  name: "Barrett Henry",
                  jobTitle: "Broker Associate",
                },
                areaServed: [
                  { "@type": "AdministrativeArea", name: "Hillsborough County, FL" },
                  { "@type": "AdministrativeArea", name: "Pinellas County, FL" },
                  { "@type": "AdministrativeArea", name: "Pasco County, FL" },
                  { "@type": "AdministrativeArea", name: "Polk County, FL" },
                  { "@type": "AdministrativeArea", name: "Manatee County, FL" },
                ],
                sameAs: [
                  "https://www.facebook.com/vivipropertymanagement",
                  "https://www.instagram.com/vivipm",
                  "https://www.linkedin.com/company/vivi-property-management",
                ],
              },
            ]),
          }}
        />

        {/* Shared site header */}
        <Header />

        {/* Page content — pt-20 offsets the fixed header */}
        <main className="flex-1 pt-20">{children}</main>

        {/* Shared site footer */}
        <Footer />

        {/* Lazy-loaded client widgets (chatbot, etc.) */}
        <ClientWidgets />
      </body>
    </html>
  );
}
