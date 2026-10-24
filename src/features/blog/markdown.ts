/** Yazı gövdesi blokları (Firestore'daki Markdown'dan üretilir). */
export type BlogBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "quote"; text: string }
  | { type: "ul"; items: string[] };

/**
 * Firebase Console'dan kolay yazılabilsin diye gövde sade Markdown tutulur.
 * Desteklenenler: paragraf, "## başlık", "> alıntı", "- liste". Bloklar boş
 * satırla ayrılır; satır içi biçimlendirme yoktur.
 */
export function parseMarkdown(source: string): BlogBlock[] {
  return source
    .replace(/\r\n?/g, "\n")
    .split(/\n\s*\n/)
    .map((chunk) => chunk.trim())
    .filter(Boolean)
    .map((chunk): BlogBlock => {
      const lines = chunk.split("\n").map((line) => line.trim());
      if (lines.every((line) => /^[-*]\s+/.test(line))) {
        return {
          type: "ul",
          items: lines.map((line) => line.replace(/^[-*]\s+/, "")),
        };
      }
      const text = lines.join(" ");
      if (text.startsWith("## ")) return { type: "h2", text: text.slice(3) };
      if (text.startsWith(">")) {
        return {
          type: "quote",
          text: lines.map((l) => l.replace(/^>\s?/, "")).join(" "),
        };
      }
      return { type: "p", text };
    });
}

/** Ortalama okuma hızıyla (~200 kelime/dk) okuma süresi. */
export function readingMinutes(source: string) {
  const words = source.split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.ceil(words / 200));
}
