import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";

/**
 * Yapay zekâ arama / asistan tarayıcıları da açıkça izinli: ChatGPT, Claude,
 * Perplexity, Gemini ve Apple Intelligence cevaplarında kaynak gösterilebilmek
 * için. Genel kural zaten herkese açık; liste niyeti belgelemek için.
 */
const aiCrawlers = [
  "GPTBot",
  "OAI-SearchBot",
  "ChatGPT-User",
  "ClaudeBot",
  "Claude-SearchBot",
  "Claude-User",
  "PerplexityBot",
  "Perplexity-User",
  "Google-Extended",
  "Applebot-Extended",
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/" },
      { userAgent: aiCrawlers, allow: "/" },
    ],
    sitemap: `${siteConfig.url}/sitemap.xml`,
    host: siteConfig.url,
  };
}

// output: "export" metadata rotalarının build sırasında üretilmesini ister.
export const dynamic = "force-static";
