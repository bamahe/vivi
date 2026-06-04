// ============================================
// Default OG Image — Social share card
// 1200x630 for Facebook, Twitter, LinkedIn
// ============================================

import { ImageResponse } from "next/og";

export const alt = "ViVi Property Management — Tampa Bay";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #0F2B5B 0%, #0A1F42 100%)",
          padding: "60px",
        }}
      >
        {/* Logo */}
        <div
          style={{
            display: "flex",
            alignItems: "baseline",
            gap: "12px",
            marginBottom: "40px",
          }}
        >
          <span
            style={{
              fontFamily: "Georgia, serif",
              fontSize: "80px",
              fontWeight: 700,
              color: "#ffffff",
            }}
          >
            ViVi
          </span>
          <span
            style={{
              fontFamily: "system-ui, sans-serif",
              fontSize: "28px",
              fontWeight: 500,
              color: "rgba(255, 255, 255, 0.7)",
            }}
          >
            Property Management
          </span>
        </div>

        {/* Tagline */}
        <p
          style={{
            fontFamily: "system-ui, sans-serif",
            fontSize: "36px",
            fontWeight: 600,
            color: "#ffffff",
            textAlign: "center",
            lineHeight: 1.3,
            margin: 0,
          }}
        >
          Protect your property. Maximize your returns.
        </p>

        {/* Details */}
        <p
          style={{
            fontFamily: "system-ui, sans-serif",
            fontSize: "22px",
            color: "rgba(255, 255, 255, 0.6)",
            textAlign: "center",
            marginTop: "24px",
          }}
        >
          Tampa Bay &bull; 5 Counties &bull; 8-12% Management Fee &bull; (813) 428-9800
        </p>

        {/* URL */}
        <p
          style={{
            fontFamily: "system-ui, sans-serif",
            fontSize: "18px",
            color: "rgba(255, 255, 255, 0.4)",
            position: "absolute",
            bottom: "30px",
          }}
        >
          vivipm.com
        </p>
      </div>
    ),
    { ...size }
  );
}
