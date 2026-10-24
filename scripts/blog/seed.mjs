/**
 * content/blog/*.json yazılarını Firestore `posts` koleksiyonuna yükler.
 *
 *   node scripts/blog/seed.mjs [--force] [id ...]
 *
 * Kimlik bilgisi: proje kökündeki service-account.json (git'e girmez) ya da
 * GOOGLE_APPLICATION_CREDENTIALS. Firebase Console → Proje ayarları →
 * Hizmet hesapları → "Yeni özel anahtar oluştur".
 *
 * Varsayılan olarak yalnızca Firestore'da olmayan yazılar eklenir; Console'da
 * yapılan düzenlemeler ezilmez. --force mevcut belgelerin üzerine yazar.
 */
import { existsSync } from "node:fs";
import { readdir, readFile } from "node:fs/promises";
import path from "node:path";
import { cert, initializeApp, applicationDefault } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";

const root = path.join(import.meta.dirname, "../..");
const keyFile = path.join(root, "service-account.json");
const credential = existsSync(keyFile)
  ? cert(JSON.parse(await readFile(keyFile, "utf8")))
  : applicationDefault();

initializeApp({ credential, projectId: "dt-bahattin" });
const db = getFirestore();

const args = process.argv.slice(2);
const force = args.includes("--force");
const only = args.filter((a) => !a.startsWith("--"));
const dir = path.join(root, "content/blog");

const pickLocale = ({ slug, title, excerpt, lead, ctaTitle, imageAlt, body }) =>
  Object.fromEntries(
    Object.entries({
      slug,
      title,
      excerpt,
      lead,
      ctaTitle,
      imageAlt,
      body,
    }).filter(([, v]) => v !== undefined),
  );

let added = 0;
for (const file of (await readdir(dir)).filter((f) => f.endsWith(".json"))) {
  const post = JSON.parse(await readFile(path.join(dir, file), "utf8"));
  if (only.length && !only.includes(post.id)) continue;

  const ref = db.collection("posts").doc(post.id);
  if (!force && (await ref.get()).exists) {
    console.log(`· ${post.id} zaten var, atlandı`);
    continue;
  }

  await ref.set({
    published: post.published ?? true,
    featured: post.featured ?? false,
    category: post.category,
    date: post.date,
    related: post.related ?? [],
    ...(post.image && { image: post.image }),
    tr: pickLocale(post.tr),
    ...(post.en && { en: pickLocale(post.en) }),
  });
  added++;
  console.log(`✓ ${post.id}`);
}
console.log(`${added} yazı yazıldı.`);
