/**
 * content/blog/*.json yazılarına Unsplash kapak fotoğrafı ekler.
 *
 *   UNSPLASH_ACCESS_KEY=... node scripts/blog/unsplash.mjs [--force] [id ...]
 *
 * - Fotoğrafı olmayan yazılarda `unsplashQuery` ile arama yapılır ve henüz
 *   kullanılmamış ilk yatay fotoğraf seçilir.
 * - Belirli bir fotoğraf istenirse JSON'a "unsplashId": "<foto id>" yazılır.
 * - Unsplash API kuralı gereği seçilen her fotoğraf için download_location
 *   tetiklenir; fotoğrafçı bilgisi sitede gösterilir.
 */
import { readdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";

const KEY = process.env.UNSPLASH_ACCESS_KEY;
if (!KEY) {
  console.error("UNSPLASH_ACCESS_KEY tanımlı değil.");
  process.exit(1);
}

const dir = path.join(import.meta.dirname, "../../content/blog");
const args = process.argv.slice(2);
const force = args.includes("--force");
const only = args.filter((a) => !a.startsWith("--"));
const utm = "utm_source=dt_bahattin_eraslan&utm_medium=referral";

async function api(endpoint) {
  const url = new URL(endpoint, "https://api.unsplash.com");
  const res = await fetch(url, {
    headers: { Authorization: `Client-ID ${KEY}`, "Accept-Version": "v1" },
  });
  if (!res.ok) throw new Error(`${res.status} ${await res.text()}`);
  return res.json();
}

const files = (await readdir(dir)).filter((f) => f.endsWith(".json"));
const posts = await Promise.all(
  files.map(async (file) => ({
    file: path.join(dir, file),
    data: JSON.parse(await readFile(path.join(dir, file), "utf8")),
  })),
);
const used = new Set(
  posts.map((p) => p.data.image?.unsplashId).filter(Boolean),
);

for (const { file, data } of posts) {
  if (only.length && !only.includes(data.id)) continue;
  if (data.image && !force && !data.unsplashId) continue;

  let photo;
  if (data.unsplashId) {
    photo = await api(`/photos/${data.unsplashId}`);
  } else {
    const q = encodeURIComponent(data.unsplashQuery);
    const { results } = await api(
      `/search/photos?query=${q}&orientation=landscape&content_filter=high&per_page=15`,
    );
    photo = results.find((r) => !used.has(r.id));
  }
  if (!photo) {
    console.warn(`✗ ${data.id}: "${data.unsplashQuery}" için fotoğraf yok`);
    continue;
  }
  if (data.image?.unsplashId) used.delete(data.image.unsplashId);
  used.add(photo.id);

  await api(photo.links.download_location);

  data.image = {
    unsplashId: photo.id,
    // Boyut ve format parametreleri sitede eklenir (lib/image-loader.ts)
    url: photo.urls.raw,
    author: photo.user.name,
    authorUrl: `${photo.user.links.html}?${utm}`,
    sourceUrl: `https://unsplash.com/?${utm}`,
    description: photo.alt_description ?? photo.description ?? "",
  };
  delete data.unsplashId;
  await writeFile(file, JSON.stringify(data, null, 2) + "\n");
  console.log(`✓ ${data.id}: ${photo.id} — ${data.image.description}`);
}
