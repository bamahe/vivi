// ============================================
// Root Layout — ViVi PM
// Loads Google Fonts, sets metadata, wraps
// all pages with Header + Footer
// ============================================

import type { Metadata } from "next";
import { Cormorant_Garamond, Outfit } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
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
    default: "ViVi Property Management | Professional Property Management in Florida",
    template: "%s | ViVi Property Management",
  },
  description:
    "Professional property management across Hillsborough, Pinellas, Pasco, Polk, and Manatee Counties. 23+ years of real estate experience. In-house maintenance. 8-12% of rent collected.",
  metadataBase: new URL("https://vivipm.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://vivipm.com",
    siteName: "ViVi Property Management",
    title: "ViVi Property Management | Professional Property Management in Florida",
    description:
      "Protect your property. Maximize your returns. Professional property management with in-house maintenance, comprehensive tenant screening, and transparent pricing.",
  },
  twitter: {
    card: "summary_large_image",
    title: "ViVi Property Management",
    description: "Professional property management across Florida.",
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
        {/* Shared site header */}
        <Header />

        {/* Page content — pt-20 offsets the fixed header */}
        <main className="flex-1 pt-20">{children}</main>

        {/* Shared site footer */}
        <Footer />
      </body>
    </html>
  );
}
