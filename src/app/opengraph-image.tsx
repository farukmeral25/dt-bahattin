import { readFile } from "node:fs/promises";
import path from "node:path";
import { ImageResponse } from "next/og";
import { siteConfig } from "@/config/site";

// Tasarım paletiyle sade paylaşım görseli: solda klinik adı, sağda logo.
export const alt = `${siteConfig.name} · Diş Hekimi · Pendik, İstanbul`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  const logo = await readFile(
    path.join(process.cwd(), "public/brand/logo.png"),
  );
  const logoSrc = `data:image/png;base64,${logo.toString("base64")}`;

  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 96px",
        background: "#f6f2ea",
        color: "#2a1e18",
      }}
    >
      <div style={{ display: "flex", flexDirection: "column" }}>
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
        <div style={{ fontSize: 80, marginTop: 24, letterSpacing: -2 }}>
          {siteConfig.name}
        </div>
        <div style={{ fontSize: 34, marginTop: 16, color: "#5b4d43" }}>
          Diş Hekimi · Dentist
        </div>
      </div>
      <img src={logoSrc} width={340} height={340} alt="" />
    </div>,
    size,
  );
}

// output: "export" metadata rotalarının build sırasında üretilmesini ister.
export const dynamic = "force-static";
