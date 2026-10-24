import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteConfig.name,
    short_name: siteConfig.shortName,
    description: "Diş Hekimi · Pendik, İstanbul",
    lang: "tr",
    start_url: "/",
    display: "standalone",
    background_color: siteConfig.themeColor,
    theme_color: siteConfig.themeColor,
    icons: [{ src: "/favicon.ico", sizes: "any", type: "image/x-icon" }],
  };
}

// output: "export" metadata rotalarının build sırasında üretilmesini ister.
export const dynamic = "force-static";
