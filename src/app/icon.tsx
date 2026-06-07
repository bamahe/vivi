// ============================================
// Dynamic Favicon — Navy "ViVi"
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
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#0F2B5B",
          borderRadius: "6px",
        }}
      >
        <span
          style={{
            fontFamily: "Georgia, serif",
            fontSize: "14px",
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
