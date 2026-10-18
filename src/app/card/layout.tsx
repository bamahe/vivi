import type { Metadata } from "next";

// /card is a client component (the digital business card is interactive), and
// client components cannot export metadata. Without this sibling layout the
// page shipped no title, description or canonical at all.
export const metadata: Metadata = {
  title: "Barrett Henry | ViVi Property Management Digital Card",
  description:
    "Digital business card for Barrett Henry at ViVi Property Management. Save the contact, call, or request a free Tampa Bay rental analysis.",
  alternates: { canonical: "/card" },
  openGraph: {
    title: "Barrett Henry | ViVi Property Management",
    description:
      "Digital business card for Barrett Henry at ViVi Property Management. Save the contact, call, or request a free Tampa Bay rental analysis.",
    url: "https://vivipm.com/card",
    type: "profile",
  },
};

export default function CardLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
