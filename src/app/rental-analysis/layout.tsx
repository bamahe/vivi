// ============================================
// Rental Analysis Layout — exports metadata
// for the client component page
// ============================================

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Free Rental Analysis for Your Property",
  description:
    "Get a free rental analysis for your Tampa Bay property. Find out what your home could rent for with ViVi Property Management. No obligation.",
  alternates: { canonical: "/rental-analysis" },
};

export default function RentalAnalysisLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
