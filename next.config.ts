import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Firebase Hosting'e statik dosya olarak yüklenir (out/). Sunucu yok:
  // proxy, Server Actions, Next görsel optimizasyonu ve cacheComponents (PPR)
  // kullanılamaz. Varsayılan dil kökü: scripts/flatten-default-locale.mjs
  output: "export",
  // Unsplash görselleri kendi CDN'iyle boyutlandırılır (lib/image-loader.ts)
  images: { loader: "custom", loaderFile: "./src/lib/image-loader.ts" },
  experimental: {
    // Root layout app/[lang] altında olduğu için 404 sayfası app/global-not-found.tsx
    globalNotFound: true,
  },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
