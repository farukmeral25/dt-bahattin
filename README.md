# Dt. Bahattin Eraslan — Web Sitesi

Next.js 16 (App Router) · React 19 · TypeScript · Tailwind CSS v4

## Komutlar

```bash
npm run dev          # Geliştirme sunucusu (http://localhost:3000)
npm run build        # Statik build → out/
npm run start        # out/ klasörünü Firebase ile yerelde sunar (http://localhost:5050)
npm run deploy       # Build + Firebase Hosting'e yayınla + IndexNow bildirimi
npm run lint         # ESLint
npm run typecheck    # TypeScript kontrolü
npm run format       # Prettier ile biçimlendir
```

Canonical, hreflang, sitemap ve OG adresleri `https://dtbahattineraslan.com` üzerinden oluşur. Farklı bir adres için `.env.local` dosyasına `NEXT_PUBLIC_SITE_URL=...` yazın.

## Yayın (Firebase Hosting)

Site sunucusuz, statik olarak yayınlanır (`output: "export"`, Firebase projesi `dt-bahattin`). Bu yüzden proxy, Server Actions, `cacheComponents` / `"use cache"`, cookies/headers ve Request okuyan route handler'lar **kullanılamaz**. Dinamik rotalarda `generateStaticParams` + `dynamicParams = false` gerekir. Metadata rotalarında (sitemap, robots…) `export const dynamic = "force-static"` bulunmalıdır.

Formlar tarayıcıda çalışır ve talebi [Web3Forms](https://web3forms.com) ile kliniğin e-posta adresine gönderir (`src/lib/forms.ts`). Erişim anahtarı build alınan makinede `.env.local` içinde `NEXT_PUBLIC_WEB3FORMS_KEY=...` olarak tanımlı olmalıdır. Anahtar yoksa talep kaybolmasın diye WhatsApp'ta hazır mesaj olarak açılır.

## Sayfalar ve diller

| Sayfa         | TR (varsayılan)  | EN                  |
| ------------- | ---------------- | ------------------- |
| Ana sayfa     | `/`              | `/en`               |
| Blog          | `/blog`          | `/en/blog`          |
| Galeri        | `/galeri`        | `/en/galeri`        |
| Dental Turizm | `/dental-turizm` | `/en/dental-turizm` |

Next sayfaları `/tr/...` altında üretir. Build sonrası `scripts/flatten-default-locale.mjs` Türkçe çıktıyı sitenin köküne taşır. `firebase.json` ise eski `/tr/...` adreslerini öneksiz hale kalıcı (301) yönlendirir. Böylece kopya içerik oluşmaz.

## Klasör yapısı

```
src/
  app/
    [lang]/            Root layout + sayfalar (dil parametresiyle)
    global-not-found   404 sayfası
    robots / sitemap / manifest / opengraph-image
  config/
    site.ts            Klinik bilgileri: telefon, adres, saatler, sosyal medya
    navigation.ts      Menü ve sitemap sayfa listesi
    images.ts          Fotoğraf yolları (boş olanlar yer tutucu olarak görünür)
  i18n/
    dictionaries/      tr.ts (kaynak) ve en.ts. Tüm metinler burada.
  lib/seo/             buildMetadata(), schema.org üreticileri
  components/
    layout/            Header, mobil menü, dil seçici, footer, sabit mobil CTA
    ui/                Buton, görsel yer tutucu, akordeon, form alanları…
  features/            Bölüm bazlı modüller: home, blog, gallery,
                       dental-tourism, appointment
  features/blog/repository.ts   Firestore'dan yazı okuma (build sırasında)
content/blog/          Blog seed içeriği (JSON) ve yazar rehberi
content/treatments/    Tedavi sayfaları (JSON, TR + EN) ve yazım brief'i
scripts/blog/          Firestore'a yükleme ve Unsplash fotoğraf seçimi
```

## Arama motorları ve yapay zekâ

- `robots.txt` tüm tarayıcılara, yapay zekâ arama botlarına da açıkça izin verir (`src/app/robots.ts`).
- `/llms.txt` yapay zekâ asistanları için klinik özeti; sözlük, `siteConfig` ve blog yazılarından build sırasında üretilir (`src/app/llms.txt/route.ts`).
- Her deploy sonunda `scripts/indexnow.mjs` sitemap adreslerini IndexNow'a (Bing/Yandex) bildirir. Anahtar dosyası: `public/<anahtar>.txt`.
- Yerel SEO verisi (adres, koordinat, saatler, hizmet bölgesi) `src/config/site.ts` içindedir.

## Sık yapılan işler

- **Fotoğraf eklemek:** dosyayı `public/images/` altına koyun, yolunu `src/config/images.ts` içindeki ilgili alana yazın.
- **Metin değiştirmek:** `src/i18n/dictionaries/tr.ts` ve `en.ts`. EN sözlüğü TR ile aynı yapıda olmak zorundadır, eksik alan derleme hatası verir.
- **Blog yazısı eklemek:** Firebase Console → Firestore → `posts` koleksiyonuna belge ekleyin, sonra `npm run deploy`. Alanlar ve yazım kuralları: [content/blog/README.md](content/blog/README.md).
- **Tedavi sayfası düzenlemek:** `content/treatments/<id>.json` (TR + EN). Yazım kuralları `content/treatments/BRIEF.md`; değişiklik deploy ile yayına çıkar.
- **Mobil:** ana sayfa bölümleri mobilde özet gösterir (`MobileMore`, `Accordion mobileLimit`, kompakt listeler); detaylar tedavi / blog sayfalarındadır.
- **Yeni sayfa:** `src/app/[lang]/<yol>/page.tsx` oluşturun, `buildMetadata` kullanın ve yolu `src/config/navigation.ts` içindeki `pages` listesine ekleyin.

## Açık işler

- Web3Forms ücretsiz planı dosya eki desteklemediği için dental turizm formunda fotoğraf/röntgen alanı yok; hasta bunları başarı ekranındaki WhatsApp butonuyla gönderir.
- Blog statik üretildiği için Firestore'daki değişiklikler deploy edilince yayına çıkar; otomatik yeniden yayın (GitHub Actions vb.) henüz yok.
