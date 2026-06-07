// ============================================
// Dynamic Favicon — Navy "ViVi" with roofline
// Generated at build time by Next.js
// ============================================

import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
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
          backgroundColor: "#0F2B5B",
          borderRadius: "6px",
          padding: "2px",
        }}
      >
        {/* Roofline */}
        <svg width="22" height="8" viewBox="0 0 22 8" style={{ marginBottom: "1px" }}>
          <polygon points="0,8 11,0 22,8" fill="white" />
        </svg>
        {/* ViVi text */}
        <span
          style={{
            fontFamily: "Georgia, serif",
            fontSize: "11px",
            fontWeight: 700,
            color: "#ffffff",
            lineHeight: 1,
          }}
        >
          ViVi
        </span>
      </div>
    ),
    { ...size }
  );
}
