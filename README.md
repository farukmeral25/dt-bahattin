# Dt. Bahattin Eraslan — Web Sitesi

Next.js 16 (App Router) · React 19 · TypeScript · Tailwind CSS v4

## Komutlar

```bash
npm run dev          # Geliştirme sunucusu (http://localhost:3000)
npm run build        # Production build
npm run lint         # ESLint
npm run typecheck    # TypeScript kontrolü
npm run format       # Prettier ile biçimlendir
```

`.env.example` dosyasını `.env.local` olarak kopyalayıp `NEXT_PUBLIC_SITE_URL` değerini canlı alan adıyla doldurun. Canonical, sitemap ve OG adresleri bu değere göre oluşur.

## Klasör yapısı

```
src/
  app/                 Sadece route'lar ve Next.js özel dosyaları
    layout.tsx         Kök layout, varsayılan metadata ve JSON-LD
    robots.ts          /robots.txt
    sitemap.ts         /sitemap.xml (config/navigation.ts'ten beslenir)
    manifest.ts        /manifest.webmanifest
    opengraph-image    Paylaşım görseli
  config/
    site.ts            Klinik bilgileri: ad, telefon, adres, saatler, sosyal medya
    navigation.ts      Menü ve sitemap sayfa listesi
  lib/seo/
    metadata.ts        defaultMetadata + sayfa bazlı buildMetadata()
    schema.ts          schema.org üreticileri (Dentist, WebSite, FAQ, Breadcrumb)
  components/
    seo/               JsonLd bileşeni
    layout/            Header, Footer vb.
    ui/                Yeniden kullanılabilir temel bileşenler
  features/            Bölüm/özellik bazlı modüller (tedaviler, randevu, blog…)
  types/               Ortak tipler
```

## Yeni sayfa eklerken

1. `src/app/<yol>/page.tsx` oluşturun ve `export const metadata = buildMetadata({ title, description, path })` ekleyin.
2. Sayfayı `src/config/navigation.ts` içine ekleyin. Menüye ve sitemap'e otomatik olarak girer.
3. Gerekiyorsa `lib/seo/schema.ts` içinden uygun JSON-LD'yi `<JsonLd />` ile basın.
