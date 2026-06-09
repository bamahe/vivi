// ============================================
// ROI Calculator Layout — Server component
// that exports metadata (can't export metadata
// from a "use client" page component)
// ============================================

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Rental Property ROI Calculator | Tampa Bay Investment Tool",
  description:
    "Free rental property ROI calculator for Tampa Bay investors. Calculate cash flow, cap rate, and cash-on-cash return instantly. Run the numbers before you buy.",
  alternates: { canonical: "/tools/roi-calculator" },
};

export default function ROICalculatorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
