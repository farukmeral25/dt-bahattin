/**
 * Statik export sonrası varsayılan dili (tr) sitenin köküne taşır.
 *
 * Next `out/tr/...` üretir; site ise Türkçeyi öneksiz sunar (/blog, /en/blog).
 * Sunucu (proxy) olmadığından bu eşleme build çıktısında yapılır:
 *   out/tr.html → out/index.html, out/tr/blog.html → out/blog.html …
 * Eski /tr/... adresleri firebase.json'da köke yönlendirilir.
 */
import { cp, readdir, rename, rm } from "node:fs/promises";
import { join } from "node:path";

const OUT = "out";
const LOCALE = "tr"; // src/i18n/config.ts → defaultLocale

for (const ext of ["html", "txt"]) {
  await rename(join(OUT, `${LOCALE}.${ext}`), join(OUT, `index.${ext}`));
}

const localeDir = join(OUT, LOCALE);
for (const entry of await readdir(localeDir)) {
  await cp(join(localeDir, entry), join(OUT, entry), { recursive: true });
}
await rm(localeDir, { recursive: true });

console.log(`✓ /${LOCALE} çıktısı köke taşındı`);
