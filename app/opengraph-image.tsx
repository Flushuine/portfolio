import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "#000000",
          color: "#ffffff",
          fontFamily: "monospace",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 64,
            height: 64,
            borderRadius: 12,
            background: "#ffffff",
            color: "#000000",
            fontSize: 26,
            fontWeight: 700,
            marginBottom: 40,
          }}
        >
          MA
        </div>
        <div style={{ display: "flex", fontSize: 28, color: "#a1a1aa" }}>
          Muhammad Agil
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 72,
            fontWeight: 700,
            marginTop: 12,
          }}
        >
          Backend Engineer
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 28,
            color: "#a1a1aa",
            marginTop: 24,
          }}
        >
          Go &amp; Node.js for fintech, e-commerce, HR, and IoT
        </div>
      </div>
    ),
    { ...size }
  );
}
