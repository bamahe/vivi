// ============================================
// Contact Layout — exports metadata
// for the client component page
// ============================================

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us — Get Started Today",
  description:
    "Contact ViVi Property Management. Call (813) 428-9800 or fill out our form. 14310 N. Dale Mabry Hwy, Ste 100, Tampa, FL 33618.",
  alternates: { canonical: "/contact" },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
