// ============================================
// Apple Touch Icon — Navy "V" on white, larger
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
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#0F2B5B",
          borderRadius: "36px",
        }}
      >
        <span
          style={{
            fontFamily: "Georgia, serif",
            fontSize: "120px",
            fontWeight: 700,
            color: "#ffffff",
            lineHeight: 1,
          }}
        >
          V
        </span>
      </div>
    ),
    { ...size }
  );
}
