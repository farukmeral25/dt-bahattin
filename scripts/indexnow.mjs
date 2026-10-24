/**
 * Deploy sonrası sitemap'teki adresleri IndexNow'a bildirir (Bing, Yandex vb.;
 * Bing dizini ChatGPT ve Copilot aramalarını da besler). Anahtar dosyası
 * public/<anahtar>.txt olarak yayında olmalı.
 *
 *   node scripts/indexnow.mjs
 */
import { readFile } from "node:fs/promises";

const KEY = "3adb5b7376a080572d23a76ed67f90e4";
const sitemap = await readFile(
  new URL("../out/sitemap.xml", import.meta.url),
  "utf8",
);
const urlList = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
const { host, origin } = new URL(urlList[0]);

const res = await fetch("https://api.indexnow.org/indexnow", {
  method: "POST",
  headers: { "Content-Type": "application/json; charset=utf-8" },
  body: JSON.stringify({
    host,
    key: KEY,
    keyLocation: `${origin}/${KEY}.txt`,
    urlList,
  }),
});
// 200 / 202: kabul edildi
console.log(`IndexNow: ${res.status} (${urlList.length} adres)`);
