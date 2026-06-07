// ============================================
// Apple Touch Icon — Navy "ViVi" with roofline
// 180x180 for iOS home screen
// ============================================

import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
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
          borderRadius: "36px",
          gap: "4px",
        }}
      >
        {/* Roofline */}
        <svg width="100" height="35" viewBox="0 0 100 35">
          <polygon points="5,35 50,2 95,35" fill="white" />
        </svg>
        {/* ViVi text */}
        <span
          style={{
            fontFamily: "Georgia, serif",
            fontSize: "56px",
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
