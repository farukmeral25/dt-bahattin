import { ImageResponse } from "next/og";
import { siteConfig } from "@/config/site";

// Tasarım paletiyle sade paylaşım görseli; fotoğraf gelince değiştirilebilir.
export const alt = `${siteConfig.name} · Diş Hekimi · Pendik, İstanbul`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: 96,
        background: "#f6f2ea",
        color: "#2a1e18",
      }}
    >
      <div
        style={{
          fontSize: 24,
          letterSpacing: 6,
          textTransform: "uppercase",
          color: "#b08d57",
          fontWeight: 600,
        }}
      >
        Pendik · İstanbul
      </div>
      <div style={{ fontSize: 88, marginTop: 24, letterSpacing: -2 }}>
        {siteConfig.name}
      </div>
      <div style={{ fontSize: 34, marginTop: 16, color: "#5b4d43" }}>
        Diş Hekimi · Dentist
      </div>
    </div>,
    size,
  );
}

// output: "export" metadata rotalarının build sırasında üretilmesini ister.
export const dynamic = "force-static";
