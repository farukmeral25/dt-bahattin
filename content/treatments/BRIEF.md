# Tedavi sayfası brief'i

Site: Dt. Bahattin Eraslan, Pendik / İstanbul'da diş hekimi. Her tedavinin kendi sayfası olacak (`/tedaviler/<slug>`). Bu sayfalar "Pendik implant", "Pendik zirkonyum kaplama" gibi yerel aramalar ve yapay zekâ asistanları için kaynak olacak. Hem bilgilendirici hem güven veren bir dil kullanın.

Her tedavi `content/treatments/<id>.json` dosyasıdır. Dosyalarda `id`, `order`, `tr/en.slug`, `tr/en.name` ve `tr/en.summary` alanları hazır; **bu alanları değiştirmeyin**. Eksik alanları siz ekleyeceksiniz.

## Eklenecek alanlar

```json
{
  "relatedPosts": ["blog-yazisi-id", "..."],
  "tr": {
    "metaTitle": "Google başlığı, ≤ 60 karakter; tedavi adı + Pendik (ör. 'Pendik İmplant Tedavisi | Süreç ve Sık Sorulanlar')",
    "metaDescription": "Google açıklaması, 140–155 karakter, Pendik'i doğal biçimde içersin",
    "lead": "Başlık altındaki giriş: 2 cümle, tedavinin ne olduğu ve kime uygun olduğu",
    "facts": [
      { "label": "Seans", "value": "ör. Genellikle 2–3 seans" },
      { "label": "Süre", "value": "ör. 3–6 ay (iyileşme dahil)" },
      { "label": "Anestezi", "value": "ör. Lokal anestezi" }
    ],
    "body": "Markdown gövde (aşağıdaki kurallar)",
    "faq": [
      { "question": "…?", "answer": "2–3 cümle" }
    ]
  },
  "en": { "...aynı alanlar, İngilizce": "" }
}
```

- `facts`: tam 3 madde. Etiketler kısa olsun (Seans / Süre / Anestezi, Kalıcılık, Uygun yaş gibi). Değerler kısa ve "genellikle / yaklaşık" diliyle yazılsın.
- `faq`: 4 soru. Hastaların gerçekten sorduğu sorular olsun (ağrı, süre, kalıcılık, bakım, kimlere uygun). En az biri Pendik'e özgü olsun; örneğin "Pendik'te … tedavisi için ilk adım nedir?" sorusunun cevabı ücretsiz ilk muayene ve değerlendirme olabilir.
- `relatedPosts`: aşağıdaki blog id'lerinden konuya en yakın 2–3 tanesi.

## Gövde (body) Markdown kuralları

Desteklenen bloklar şunlardır. Bloklar arasında **boş satır** bırakın:
- Paragraf
- `## Ara başlık` (yalnızca H2)
- `> Alıntı`: en fazla 1 tane; hekimden kısa bir not gibi
- Liste: her satır `- ` ile başlar

Satır içi biçimlendirme (kalın, link) yok. JSON içinde satır sonları `\n` olarak yazılır.

**Uzunluk:** Türkçe gövde 450–650 kelime, 4–5 ara başlık. Önerilen akış:
1. Tedavi nedir?
2. Kimler için uygundur?
3. Süreç adım adım (liste)
4. Tedavi sonrası ve bakım
5. Bizde nasıl ilerliyor: ilk muayene ücretsiz; tanı, plan ve tedavi aynı hekimle ilerler; planlama dijitaldir.

## Üslup ve mevzuat (çok önemli)

- Kliniğin "biz" diliyle, hastaya "siz" diye hitap edin. Sade bir dil kullanın, tıbbi terimleri parantez içinde açıklayın.
- Türkiye'de sağlık reklamı kısıtlıdır:
  - "En iyi", "garantili", "%100", "ağrısız garanti" gibi ifadeler kullanmayın.
  - Fiyat, marka adı, başka kliniklerle kıyas ve hasta yorumu yazmayın.
  - Süreleri ve oranları "genellikle / çoğu hastada / yaklaşık" diye verin.
  - Kişiye özel kararın muayeneyle verildiğini belirtin.
- Bilgiler tıbben doğru ve güncel olsun. Emin olmadığınız spesifik rakamları vermeyin.
- İngilizce sürüm, aynı içeriğin doğal İngilizcesi olsun. İngilizce `metaTitle` "Pendik, Istanbul" içersin.

## Kliniğin bilgileri (gerekirse kullanın)

Adres: Güzelyalı Mah., İstiklal Cad. No:10/A, Pendik / İstanbul. Saatler: Pazartesi–Cumartesi 09:00–19:00. İlk muayene ve ağız içi değerlendirme ücretsizdir. Klinikte dijital panoramik röntgen var. Hekim, implant cerrahisi ve protetik işlemlerde yoğunlaşıyor.

## Blog yazısı id'leri

implant-candidates, implant-process, implant-care, all-on-4, bone-graft, dentures, veneers-zirconia, smile-design, whitening, clear-aligners, root-canal, extraction-or-save, wisdom-tooth, gum-bleeding, floss-brush, bruxism, first-visit, fissure-sealant, baby-teeth
