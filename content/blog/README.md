# Blog yazıları (Firestore)

Site, blog yazılarını Firestore'daki `posts` koleksiyonundan **build sırasında** okur. Site statik olarak yayınlandığı için yeni veya düzenlenmiş bir yazı ancak bir sonraki deploy'da (`npm run deploy`) siteye yansır.

Bu klasördeki `*.json` dosyaları ilk içeriktir (seed). Asıl kaynak Firestore'dur.

## Console'dan yeni yazı eklemek

Firebase Console → Firestore → `posts` → **Belge ekle**. Belge kimliği kısa ve İngilizce, kebab-case olmalı (ör. `dental-bridge`). Diller arası eşleşme ve "ilgili yazılar" bu kimlikle yapılır.

| Alan | Tür | Açıklama |
|---|---|---|
| `published` | boolean | `true` olmayan yazı sitede görünmez (taslak) |
| `featured` | boolean | Blog sayfasında üstte büyük kartta gösterilir (en yeni öne çıkan) |
| `category` | string | `implant`, `aesthetic`, `surgery`, `kids`, `care` |
| `date` | string `YYYY-MM-DD` ya da timestamp | Yayın tarihi; sıralama buna göre |
| `related` | array of string | İlgili yazıların belge kimlikleri (2–3 tane) |
| `readMinutes` | number (isteğe bağlı) | Boş bırakılırsa metinden hesaplanır |
| `image` | map (isteğe bağlı) | `url`, `author`, `authorUrl`, `sourceUrl`; Unsplash için `scripts/blog/unsplash.mjs` |
| `tr` | map | Türkçe sürüm (aşağıda) |
| `en` | map (isteğe bağlı) | İngilizce sürüm; yoksa yazı sadece Türkçe yayınlanır |

`tr` / `en` içindeki alanlar:

| Alan | Zorunlu | Açıklama |
|---|---|---|
| `slug` | ✓ | Adres: `/blog/<slug>`; Türkçe karaktersiz, kebab-case, dil içinde benzersiz |
| `title` | ✓ | Başlık |
| `excerpt` | ✓ | Kart metni ve Google açıklaması (≤ 160 karakter) |
| `body` | ✓ | Yazı gövdesi (Markdown, aşağıda) |
| `lead` | | Başlık altındaki giriş; yoksa `excerpt` kullanılır |
| `ctaTitle` | | Yan kutudaki muayene çağrısı (ör. "İmplant için uygun muyum?") |
| `imageAlt` | | Kapak fotoğrafının açıklaması |

Zorunlu alanı eksik olan dil sürümü build sırasında uyarı verilerek atlanır.

## Gövde yazım kuralları

Bloklar arasında **boş satır** bırakın:

```
Düz paragraf metni.

## Ara başlık

> Öne çıkan bir not (alıntı kutusu)

- Liste maddesi
- Liste maddesi
```

Kalın, italik veya bağlantı gibi satır içi biçimlendirmeler desteklenmez.

## Komutlar

- `node scripts/blog/seed.mjs`: Bu klasördeki JSON'ları Firestore'a yükler. Var olan belgeleri atlar; `--force` var olanların üzerine yazar. `service-account.json` dosyası gerekir.
- `UNSPLASH_ACCESS_KEY=... node scripts/blog/unsplash.mjs`: Fotoğrafı olmayan JSON'lara `unsplashQuery` ile Unsplash'ten kapak fotoğrafı seçer. Belirli bir fotoğraf için JSON'a `"unsplashId"` yazın.

İçerik yazım brief'i: [BRIEF.md](BRIEF.md)
