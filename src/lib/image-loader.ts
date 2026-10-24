import type { ImageLoaderProps } from "next/image";

const UNSPLASH = "https://images.unsplash.com/";

/**
 * Statik export'ta Next görsel optimizasyonu yok. Unsplash görselleri kendi
 * CDN'inin (imgix) boyutlandırmasıyla, srcset'e uygun genişlikte istenir;
 * yerel görseller olduğu gibi sunulur.
 */
export const isRemoteImage = (src: string) => src.startsWith(UNSPLASH);

export default function imageLoader({ src, width, quality }: ImageLoaderProps) {
  if (!isRemoteImage(src)) return src;
  return unsplashUrl(src, { w: width, q: quality ?? 75 });
}

export function unsplashUrl(
  src: string,
  params: { w: number; h?: number; q?: number },
) {
  const url = new URL(src);
  url.searchParams.set("auto", "format");
  url.searchParams.set("fit", "crop");
  url.searchParams.set("w", String(params.w));
  if (params.h) url.searchParams.set("h", String(params.h));
  url.searchParams.set("q", String(params.q ?? 75));
  return url.toString();
}
