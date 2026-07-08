// =============================================================================
// /card — Barrett Henry's ViVi PM digital business card
// Full-screen dark navy design, mobile-first (max-width 430px card)
// Hides site header/footer/mobile bar via CSS so the card is full-screen
// =============================================================================

"use client";

import Image from "next/image";
import { useState } from "react";

// ---------------------------------------------------------------------------
// Brand colors matching the ViVi business card
// ---------------------------------------------------------------------------
const NAVY = "#1e2a4a";
const NAVY_DARK = "#162038";
const NAVY_CARD = "#253555";
const GOLD = "#c4a962";

// ---------------------------------------------------------------------------
// vCard download helper — creates a .vcf file and triggers browser download
// ---------------------------------------------------------------------------
function downloadVCard() {
  const vcard = [
    "BEGIN:VCARD",
    "VERSION:3.0",
    "N:Henry;Barrett;;;",
    "FN:Barrett Henry",
    "ORG:ViVi Property Management",
    "TITLE:Property Manager",
    "TEL;TYPE=CELL:+18134289800",
    "EMAIL:barrett@vivipm.com",
    "URL:https://vivipm.com",
    "URL;TYPE=vCard:https://vivipm.com/card/",
    "ADR;TYPE=WORK;LABEL=Tampa Office:;;14310 N Dale Mabry Hwy, Ste 100;Tampa;FL;33618;US",
    "ADR;TYPE=WORK;LABEL=Brandon Office:;;417 Lithia Pinecrest Rd;Brandon;FL;33511;US",
    "ADR;TYPE=WORK;LABEL=Largo Office:;;11200 Seminole Blvd, Ste 202 & 204;Largo;FL;33778;US",
    "NOTE:ViVi Property Management — Tampa Bay Property Manager",
    "END:VCARD",
  ].join("\n");

  const blob = new Blob([vcard], { type: "text/vcard;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "Barrett-Henry-ViVi-PM.vcf";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

// ---------------------------------------------------------------------------
// Web Share API helper — falls back to clipboard copy
// ---------------------------------------------------------------------------
function shareCard() {
  const shareData = {
    title: "Barrett Henry - ViVi Property Management",
    text: "Barrett Henry, Property Manager at ViVi Property Management — Tampa Bay.",
    url: "https://vivipm.com/card/",
  };

  if (navigator.share) {
    navigator.share(shareData).catch(() => {});
  } else {
    navigator.clipboard
      .writeText("https://vivipm.com/card/")
      .then(() => alert("Link copied to clipboard!"))
      .catch(() => alert("https://vivipm.com/card/"));
  }
}

// ---------------------------------------------------------------------------
// Office data for the modal
// ---------------------------------------------------------------------------
const offices = [
  {
    name: "Tampa Office",
    address: "14310 N Dale Mabry Hwy, Ste 100, Tampa, FL 33618",
    mapUrl: "https://maps.google.com/?q=14310+N+Dale+Mabry+Hwy+Ste+100+Tampa+FL+33618",
  },
  {
    name: "Brandon Office",
    address: "417 Lithia Pinecrest Rd, Brandon, FL 33511",
    mapUrl: "https://maps.google.com/?q=417+Lithia+Pinecrest+Rd+Brandon+FL+33511",
  },
  {
    name: "Largo Office",
    address: "11200 Seminole Blvd, Ste 202 & 204, Largo, FL 33778",
    mapUrl: "https://maps.google.com/?q=11200+Seminole+Blvd+Suite+202+Largo+FL+33778",
  },
];

// ---------------------------------------------------------------------------
// Resource links — property management focused
// ---------------------------------------------------------------------------
const ownerResources = [
  {
    title: "Free Rental Analysis",
    desc: "Find out what your property could rent for",
    href: "https://vivipm.com/rental-analysis/",
    bgColor: `${GOLD}15`,
    strokeColor: GOLD,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke={GOLD} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <line x1="12" y1="1" x2="12" y2="23" /><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    ),
  },
  {
    title: "Our Services",
    desc: "Full-service management, leasing & maintenance",
    href: "https://vivipm.com/services/",
    bgColor: "#42A5F515",
    strokeColor: "#42A5F5",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#42A5F5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
        <rect x="8" y="2" width="8" height="4" rx="1" ry="1" /><path d="m9 14 2 2 4-4" />
      </svg>
    ),
  },
  {
    title: "Pricing",
    desc: "Transparent fees — no hidden charges",
    href: "https://vivipm.com/pricing/",
    bgColor: "#66BB6A15",
    strokeColor: "#66BB6A",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#66BB6A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <rect x="2" y="7" width="20" height="14" rx="2" ry="2" /><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      </svg>
    ),
  },
  {
    title: "Areas We Serve",
    desc: "Hillsborough, Pinellas, Pasco, Polk & Manatee",
    href: "https://vivipm.com/areas/",
    bgColor: "#AB47BC15",
    strokeColor: "#AB47BC",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#AB47BC" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" />
      </svg>
    ),
  },
  {
    title: "Owner Resources",
    desc: "Guides, blog posts & property management tips",
    href: "https://vivipm.com/owners/",
    bgColor: "#FF704315",
    strokeColor: "#FF7043",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#FF7043" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
        <path d="M8 7h8" /><path d="M8 11h6" />
      </svg>
    ),
  },
  {
    title: "Tenant Portal",
    desc: "Pay rent, submit maintenance requests",
    href: "https://vivipm.com/tenants/",
    bgColor: "#26A69A15",
    strokeColor: "#26A69A",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#26A69A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" />
      </svg>
    ),
  },
];

// ===========================================================================
// ViVi Logo SVG — roof chevron + "ViVi" wordmark (white on dark)
// ===========================================================================
function ViViLogo({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Gold roof chevrons */}
      <path d="M100 8 L130 32 L126 32 L100 12 L74 32 L70 32 Z" fill={GOLD} />
      <path d="M100 16 L124 35 L120 35 L100 20 L80 35 L76 35 Z" fill={GOLD} />
      {/* "ViVi" text */}
      <text x="100" y="72" textAnchor="middle" fill="white" fontSize="38" fontWeight="700" fontFamily="Georgia, serif" letterSpacing="2">
        ViVi
      </text>
      {/* "PROPERTY MANAGEMENT" subtitle */}
      <text x="100" y="90" textAnchor="middle" fill="white" fillOpacity="0.5" fontSize="8" fontWeight="600" fontFamily="Arial, sans-serif" letterSpacing="4">
        PROPERTY MANAGEMENT
      </text>
    </svg>
  );
}

// ===========================================================================
// CardPage component
// ===========================================================================
export default function CardPage() {
  const [officeOpen, setOfficeOpen] = useState(false);

  return (
    <div
      className="min-h-screen flex justify-center antialiased"
      style={{ fontFamily: "'Outfit', 'DM Sans', sans-serif", background: NAVY_DARK }}
    >
      {/* Card container — max 430px wide, centered on desktop */}
      <div className="w-full max-w-[430px] min-h-screen relative overflow-hidden" style={{ background: NAVY_DARK }}>
        {/* Subtle gold radial glow at the top */}
        <div
          className="absolute -top-20 left-1/2 -translate-x-1/2 w-[400px] h-[300px] pointer-events-none"
          style={{
            background: `radial-gradient(ellipse, ${GOLD}08 0%, transparent 70%)`,
          }}
        />

        {/* ============================================================= */}
        {/* HEADER — avatar, name, credentials                             */}
        {/* ============================================================= */}
        <div className="pt-10 px-8 pb-9 text-center relative animate-fade-in">
          {/* ViVi logo */}
          <ViViLogo className="w-[160px] h-auto mx-auto mb-6" />

          {/* Gold divider line */}
          <div className="w-16 h-[2px] mx-auto mb-6" style={{ background: GOLD }} />

          {/* Avatar circle with outer ring */}
          <div className="w-[108px] h-[108px] mx-auto mb-5 relative">
            <div className="absolute -inset-[3px] rounded-full" style={{ border: `1.5px solid ${GOLD}40` }} />
            <div className="w-[108px] h-[108px] rounded-full overflow-hidden relative z-[1]" style={{ background: NAVY_CARD, border: '2px solid rgba(255,255,255,0.08)' }}>
              <Image
                src="/images/barrett-henry.png"
                alt="Barrett Henry"
                width={108}
                height={108}
                className="w-full h-full object-cover object-[center_20%]"
                priority
              />
            </div>
          </div>

          {/* Name */}
          <h1
            className="text-[30px] font-extrabold text-white tracking-tight mb-2"
            style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
          >
            Barrett Henry
          </h1>

          {/* Title */}
          <span className="text-[13px] font-semibold tracking-[3px] uppercase" style={{ color: `${GOLD}cc` }}>
            Property Manager
          </span>
        </div>

        {/* ============================================================= */}
        {/* QUICK ACTIONS — Call, Text, Email, Offices                     */}
        {/* ============================================================= */}
        <div className="grid grid-cols-4 gap-2.5 px-6 pb-6">
          {/* Call */}
          <a
            href="tel:+18134289800"
            className="flex flex-col items-center gap-2 py-4 px-1 rounded-[14px] no-underline active:scale-95 transition-all"
            style={{ background: NAVY_CARD, border: '1px solid rgba(255,255,255,0.08)' }}
          >
            <div className="w-[42px] h-[42px] rounded-full bg-green-500/10 flex items-center justify-center">
              <svg viewBox="0 0 24 24" fill="none" stroke="#4CAF50" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
            </div>
            <span className="text-[10px] font-bold text-white/40 uppercase tracking-wider">Call</span>
          </a>

          {/* Text */}
          <a
            href="sms:+18134289800"
            className="flex flex-col items-center gap-2 py-4 px-1 rounded-[14px] no-underline active:scale-95 transition-all"
            style={{ background: NAVY_CARD, border: '1px solid rgba(255,255,255,0.08)' }}
          >
            <div className="w-[42px] h-[42px] rounded-full bg-blue-400/10 flex items-center justify-center">
              <svg viewBox="0 0 24 24" fill="none" stroke="#42A5F5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
              </svg>
            </div>
            <span className="text-[10px] font-bold text-white/40 uppercase tracking-wider">Text</span>
          </a>

          {/* Email */}
          <a
            href="mailto:barrett@vivipm.com"
            className="flex flex-col items-center gap-2 py-4 px-1 rounded-[14px] no-underline active:scale-95 transition-all"
            style={{ background: NAVY_CARD, border: '1px solid rgba(255,255,255,0.08)' }}
          >
            <div className="w-[42px] h-[42px] rounded-full flex items-center justify-center" style={{ background: `${GOLD}15` }}>
              <svg viewBox="0 0 24 24" fill="none" stroke={GOLD} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
            </div>
            <span className="text-[10px] font-bold text-white/40 uppercase tracking-wider">Email</span>
          </a>

          {/* Offices */}
          <button
            type="button"
            onClick={() => setOfficeOpen(true)}
            className="flex flex-col items-center gap-2 py-4 px-1 rounded-[14px] cursor-pointer active:scale-95 transition-all"
            style={{ background: NAVY_CARD, border: '1px solid rgba(255,255,255,0.08)' }}
          >
            <div className="w-[42px] h-[42px] rounded-full flex items-center justify-center" style={{ background: `${GOLD}12` }}>
              <svg viewBox="0 0 24 24" fill="none" stroke={GOLD} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
            </div>
            <span className="text-[10px] font-bold text-white/40 uppercase tracking-wider">Offices</span>
          </button>
        </div>

        {/* Divider */}
        <div className="h-px mx-8 bg-white/[0.08]" />

        {/* ============================================================= */}
        {/* RESOURCES                                                      */}
        {/* ============================================================= */}
        <div className="px-7 py-5">
          <p className="text-[10px] font-bold text-white/40 uppercase tracking-[2px] mb-2">
            Resources
          </p>
          {ownerResources.map((r) => (
            <a
              key={r.title}
              href={r.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3.5 py-3.5 text-white no-underline border-b border-white/[0.08] last:border-b-0 active:opacity-60 transition-opacity"
            >
              <div
                className="w-10 h-10 rounded-[10px] flex items-center justify-center shrink-0"
                style={{ background: r.bgColor }}
              >
                {r.icon}
              </div>
              <div className="flex-1">
                <div className="text-sm font-semibold text-white/[0.92] mb-0.5">{r.title}</div>
                <div className="text-xs text-white/40 font-medium">{r.desc}</div>
              </div>
              <span className="text-white/20 text-lg font-light">&#8250;</span>
            </a>
          ))}
        </div>

        {/* ============================================================= */}
        {/* SAVE / SHARE BUTTONS                                           */}
        {/* ============================================================= */}
        <div className="px-7 pt-7 pb-4">
          {/* Save Contact — gold button */}
          <button
            type="button"
            onClick={downloadVCard}
            className="flex items-center justify-center gap-2.5 w-full py-[17px] text-sm font-bold tracking-wider rounded-[14px] border-none cursor-pointer active:scale-[0.98] active:opacity-90 transition-all"
            style={{ background: GOLD, color: NAVY_DARK }}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-[18px] h-[18px]">
              <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z" />
              <polyline points="17 21 17 13 7 13 7 21" />
              <polyline points="7 3 7 8 15 8" />
            </svg>
            Save My Contact
          </button>

          {/* Share This Card — white button */}
          <button
            type="button"
            onClick={shareCard}
            className="flex items-center justify-center gap-2.5 w-full py-[17px] mt-2.5 bg-white text-sm font-bold tracking-wider rounded-[14px] border-none cursor-pointer active:scale-[0.98] active:opacity-90 transition-all"
            style={{ color: NAVY_DARK }}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-[18px] h-[18px]">
              <circle cx="18" cy="5" r="3" /><circle cx="6" cy="12" r="3" /><circle cx="18" cy="19" r="3" />
              <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
              <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
            </svg>
            Share This Card
          </button>
        </div>

        {/* ============================================================= */}
        {/* FOOTER                                                         */}
        {/* ============================================================= */}
        <div className="text-center py-5 pb-10">
          <p className="text-[10px] font-bold text-white/20 uppercase tracking-[2px]">
            Site by Vyrabyte
          </p>
          <div className="w-6 h-0.5 rounded-sm mx-auto mt-2 opacity-50" style={{ background: GOLD }} />
        </div>
      </div>

      {/* =================================================================== */}
      {/* OFFICE PICKER MODAL                                                 */}
      {/* =================================================================== */}
      {officeOpen && (
        <div
          className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm flex justify-center items-end px-4 pb-6 animate-overlay-in"
          onClick={(e) => {
            if (e.target === e.currentTarget) setOfficeOpen(false);
          }}
        >
          <div className="w-full max-w-[400px] rounded-[20px] p-6 animate-sheet-up" style={{ background: NAVY_CARD, border: '1px solid rgba(255,255,255,0.08)' }}>
            <div className="flex justify-between items-center mb-4">
              <span className="text-base font-bold text-white/[0.92]">Our Offices</span>
              <button
                type="button"
                onClick={() => setOfficeOpen(false)}
                className="w-8 h-8 rounded-full bg-white/[0.08] border-none flex items-center justify-center cursor-pointer active:bg-white/20 transition-colors"
              >
                <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 stroke-white/60">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>

            {offices.map((o, i) => (
              <a
                key={o.name}
                href={o.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-3.5 p-4 rounded-xl no-underline active:scale-[0.98] transition-all ${
                  i < offices.length - 1 ? "mb-2.5" : ""
                }`}
                style={{ background: NAVY_DARK, border: '1px solid rgba(255,255,255,0.08)' }}
              >
                <div className="w-2.5 h-2.5 rounded-full shrink-0" style={{ background: GOLD, boxShadow: `0 0 6px ${GOLD}50` }} />
                <div className="flex-1">
                  <div className="text-sm font-bold text-white/[0.92] mb-0.5">{o.name}</div>
                  <div className="text-xs text-white/40 font-medium">{o.address}</div>
                </div>
                <span className="text-white/20 text-lg">&#8250;</span>
              </a>
            ))}
          </div>
        </div>
      )}

      {/* =================================================================== */}
      {/* KEYFRAME ANIMATIONS                                                 */}
      {/* =================================================================== */}
      <style jsx global>{`
        /* Hide ALL site chrome so the card page is full-screen */
        header,
        footer,
        #main-content ~ * {
          display: none !important;
        }
        a[href="#main-content"] {
          display: none !important;
        }
        #main-content {
          padding-bottom: 0 !important;
          min-height: auto !important;
        }
        body {
          background: ${NAVY_DARK} !important;
        }
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes overlay-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes sheet-up {
          from { transform: translateY(40px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        .animate-fade-in {
          animation: fade-in 0.6s ease forwards;
        }
        .animate-overlay-in {
          animation: overlay-in 0.2s ease;
        }
        .animate-sheet-up {
          animation: sheet-up 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }
      `}</style>
    </div>
  );
}
