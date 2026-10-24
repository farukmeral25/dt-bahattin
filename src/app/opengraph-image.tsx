import { ImageResponse } from "next/og";
import { siteConfig } from "@/config/site";

// Tasarım netleşince markaya uygun bir görselle değiştirilecek.
export const alt = siteConfig.title;
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
        alignItems: "center",
        justifyContent: "center",
        background: "#ffffff",
        color: "#171717",
      }}
    >
      <div style={{ fontSize: 72, fontWeight: 600 }}>{siteConfig.name}</div>
      <div style={{ fontSize: 36, marginTop: 16, opacity: 0.7 }}>
        {siteConfig.doctor.title}
      </div>
    </div>,
    size,
  );
}
