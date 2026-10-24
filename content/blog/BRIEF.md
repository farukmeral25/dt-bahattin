# Blog yazısı brief'i (seed içerik)

Site: Dt. Bahattin Eraslan, Pendik / İstanbul'da diş hekimi. Klinikteki tedaviler: implant, gülüş tasarımı, zirkonyum kaplama, lamina/veneer, diş beyazlatma, ortodonti, kanal tedavisi, pedodonti (çocuk), diş eti tedavileri, protez, botoks/bruksizm. Yurt dışından gelen hastalar için dental turizm hizmeti de var (online ön görüşme, havalimanı transferi, konaklama, dönüş sonrası uzaktan takip).

Her yazı `content/blog/<id>.json` dosyasıdır. Bir dosyada hem Türkçe hem İngilizce sürüm bulunur. Bu dosyalar Firestore'a seed edilir.

## Şema

```json
{
  "id": "kebab-case, diller arası ortak kimlik",
  "category": "implant | aesthetic | surgery | kids | care",
  "date": "YYYY-MM-DD",
  "featured": false,
  "related": ["başka-yazı-id", "..."],
  "unsplashQuery": "İngilizce, 2-4 kelimelik Unsplash fotoğraf arama terimi",
  "tr": {
    "slug": "turkce-karaktersiz-kebab-case",
    "title": "Başlık (≤ 70 karakter tercihen)",
    "excerpt": "Kart ve meta description için 1-2 cümle, ≤ 160 karakter",
    "lead": "Yazının giriş paragrafı / spot (1-2 cümle, excerpt'ten biraz daha uzun olabilir)",
    "ctaTitle": "Yan kutudaki muayene çağrısı, kısa soru (ör. 'İmplant için uygun muyum?')",
    "imageAlt": "Kapak fotoğrafının kısa açıklaması",
    "body": "Markdown gövde (aşağıdaki kurallar)"
  },
  "en": { "...aynı alanlar, İngilizce; slug İngilizce": "" }
}
```

`readMinutes` YAZMA, gövdeden otomatik hesaplanıyor.

## Gövde (body) Markdown kuralları

Desteklenen bloklar sadece bunlar. Bloklar arasında **boş satır** olmalı.
- Düz paragraf
- `## Ara başlık` (sadece H2; H1 veya H3 kullanma)
- `> Alıntı` (tek satır; yazı başına en fazla 1, öne çıkan bir hekim notu gibi)
- Liste: her satır `- ` ile başlar, satırlar ardışık

Satır içi biçimlendirme (kalın, italik, link) **desteklenmiyor**, kullanma. JSON içinde satır sonları `\n` olarak yazılır.

## Üslup ve içerik

- Türkçe: sade, sıcak, güven veren, kliniğin "biz" dili ("muayenede baktığımız…"). Tıbbi terimleri parantez içinde açıkla. Hastaya "siz" diye hitap et.
- Uzunluk: TR gövde 550–850 kelime. 4–6 ara başlık. Uygun yerde 1 liste ve en fazla 1 alıntı.
- Son paragraf yumuşak bir çağrı içersin (muayene / görüşme), satış dili olmasın.
- İngilizce sürüm birebir çeviri değil, aynı içeriğin doğal İngilizcesi. Yurt dışından gelen okur için uygun yerde İstanbul / dental turizm bağlamı tek cümleyle anılabilir.
- **Mevzuat ve güvenlik (çok önemli):** Türkiye'de sağlık hizmeti reklamı kısıtlıdır.
  - "En iyi", "garantili", "%100", "ağrısız garanti", "kalıcı garanti" gibi üstünlük ve sonuç vaatleri yok.
  - Fiyat yok. Marka adı yok. Başka klinik veya hekimle kıyas yok. Hasta yorumu yok.
  - Süre ve oranları "genellikle", "çoğu hastada", "yaklaşık" diye ver.
  - Kişiye özel karar için muayene gerektiğini belirt.
  - Tıbbi olarak doğru ve güncel bilgi ver. Emin olmadığın spesifik rakam verme.
- Tarihler ve kimlikler aşağıdaki tablodan. Mevcut yazılarda `slug`, `title`, `excerpt`, `date`, `featured` alanlarını DEĞİŞTİRME, sadece eksik alanları ekle.
- `related`: 2–3 id, aşağıdaki listeden konuya en yakın olanlar.

## Yazı listesi (20)

| id | kategori | tarih | konu |
|---|---|---|---|
| implant-candidates | implant | 2026-10-12 | (mevcut, tamam) İmplant kimlere uygundur |
| veneers-zirconia | aesthetic | 2026-10-12 | (mevcut) Lamina mı zirkonyum mu |
| first-visit | kids | 2026-09-28 | (mevcut) Çocuğun ilk diş hekimi ziyareti için 5 öneri |
| wisdom-tooth | surgery | 2026-09-09 | (mevcut) Yirmilik diş çekimi sonrası ilk 72 saat |
| all-on-4 | implant | 2026-08-21 | (mevcut) All-on-4 nedir, kimler için uygundur |
| floss-brush | care | 2026-08-03 | (mevcut) Diş ipi mi ara yüz fırçası mı |
| whitening | aesthetic | 2026-07-15 | (mevcut) Beyazlatma sonrası renk ne kadar kalıcı |
| implant-process | implant | 2026-10-20 | İmplant tedavi süreci adım adım (muayeneden kurona) |
| smile-design | aesthetic | 2026-10-05 | Gülüş tasarımı nedir, nasıl planlanır (dijital planlama, mock-up) |
| gum-bleeding | care | 2026-09-18 | Diş eti kanaması neden olur, ne zaman hekime gidilmeli |
| root-canal | care | 2026-08-28 | Kanal tedavisi hakkında merak edilenler (ağrı, seans, kuron gerekir mi) |
| fissure-sealant | kids | 2026-08-12 | Fissür örtücü ve flor uygulaması: çocuklarda koruyucu diş hekimliği |
| bruxism | care | 2026-07-28 | Diş gıcırdatma (bruksizm): gece plağı ve botoks seçenekleri |
| implant-care | implant | 2026-07-02 | İmplantın ömrü ve bakımı (peri-implantitis, kontroller) |
| clear-aligners | aesthetic | 2026-06-18 | Şeffaf plak tedavisi: kimlere uygun, süreç, kullanım disiplini |
| baby-teeth | kids | 2026-06-03 | Süt dişlerindeki çürükler önemli mi (yer tutucu, beslenme) |
| bone-graft | surgery | 2026-05-20 | Kemik tozu (greft) ve sinüs lifting: implant öncesi hazırlık |
| extraction-or-save | surgery | 2026-05-06 | Diş çekilmeli mi, kurtarılmalı mı? Kararı etkileyen kriterler |
| dentures | implant | 2026-04-22 | Hareketli protez mi, implant üstü protez mi |
| dental-tourism-guide | implant | 2026-04-08 | İstanbul'da diş tedavisi planlama rehberi (yurt dışından gelenler; seyahat süresi, seans planı, dönüş sonrası takip) |
