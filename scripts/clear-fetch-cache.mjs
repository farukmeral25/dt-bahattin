/**
 * Next, build sırasında yapılan fetch cevaplarını .next/cache/fetch-cache'te
 * saklayıp sonraki build'lerde yeniden kullanır. Blog yazıları Firestore'dan
 * build anında okunduğu için her build güncel veriyle başlamalı.
 */
import { rmSync } from "node:fs";

rmSync(new URL("../.next/cache/fetch-cache", import.meta.url), {
  recursive: true,
  force: true,
});
