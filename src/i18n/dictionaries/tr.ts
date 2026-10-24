/**
 * Türkçe sözlük — kaynak dil. `Dictionary` tipi buradan türetilir;
 * en.ts aynı yapıyı birebir sağlamak zorundadır.
 *
 * Not: Yorumlar, SSS ve dental turizm rakamları örnek
 * içeriktir; müşteri onayından sonra güncellenecek.
 */

const tr = {
  meta: {
    home: {
      title: "Dt. Bahattin Eraslan | Pendik Diş Hekimi",
      description:
        "Pendik'te Diş Hekimi Bahattin Eraslan: implant, gülüş tasarımı, zirkonyum, lamina, kanal tedavisi ve dental turizm. Online randevu ve WhatsApp ile hızlı iletişim.",
    },
    blog: {
      title: "Blog",
      description:
        "İmplant, estetik diş hekimliği, cerrahi, çocuk diş sağlığı ve ağız bakımı üzerine sade bir dille yazılmış bilgilendirici yazılar.",
    },
    gallery: {
      title: "Galeri",
      description:
        "Hastalarımızın izniyle paylaşılan öncesi / sonrası vakalar ve Pendik'teki kliniğimizden kareler.",
    },
    tourism: {
      title: "Dental Turizm İstanbul",
      description:
        "Yurt dışından gelen hastalar için İstanbul'da diş tedavisi: ücretsiz görüntülü ön görüşme, havalimanı transferi, konaklama ve dönüş sonrası takip.",
    },
    treatments: {
      title: "Tedaviler",
      description:
        "Pendik'te implant, gülüş tasarımı, zirkonyum kaplama, lamina, diş beyazlatma, ortodonti, kanal tedavisi, pedodonti, diş eti tedavisi, protez ve bruksizm.",
    },
    kvkk: {
      title: "KVKK Aydınlatma Metni",
      description:
        "Dt. Bahattin Eraslan kliniğinin 6698 sayılı KVKK kapsamında kişisel verilerin işlenmesine ilişkin aydınlatma metni.",
    },
    notFound: {
      title: "Sayfa bulunamadı",
      text: "Aradığınız sayfa taşınmış veya kaldırılmış olabilir.",
      back: "Ana sayfaya dön",
    },
  },

  common: {
    navSub: "Diş Hekimi",
    nav: {
      doctor: "Hekim",
      treatments: "Tedaviler",
      gallery: "Galeri",
      reviews: "Yorumlar",
      tourism: "Dental Turizm",
      blog: "Blog",
      faq: "SSS",
      contact: "İletişim",
    },
    navCta: "Randevu Al",
    menuOpen: "Menüyü aç",
    menuClose: "Menüyü kapat",
    languageLabel: "Dil seçimi",
    call: "Ara",
    whatsapp: "WhatsApp",
    bookConsultation: "Muayene randevusu alın",
    hoursLabel: "Çalışma saatleri",
    readMore: "Devamını oku",
    hours: ["Pzt – Cum 09:00 – 19:00", "Cumartesi 09:00 – 19:00"],
    before: "Öncesi",
    after: "Sonrası",
    footer: {
      instagram: "Instagram",
      google: "Google",
      kvkk: "KVKK Aydınlatma Metni",
    },
    cookie: {
      text: "Bu site yalnızca zorunlu ve anonim analitik çerezler kullanır.",
      link: "Aydınlatma metni",
      accept: "Kabul et",
    },
    backHome: "← Ana sayfa",
    form: {
      required: "zorunlu",
      newRequest: "Yeni talep",
      sending: "Gönderiliyor…",
      error: "Talebiniz gönderilemedi. Lütfen tekrar deneyin veya bizi arayın.",
    },
  },

  home: {
    hero: {
      kicker: "Pendik · İstanbul",
      title: "Gülüşünüz, en doğal haliyle.",
      text: "İmplanttan gülüş tasarımına, her tedaviyi sizin yüz hatlarınıza ve beklentinize göre planlıyoruz. Acele etmeden, şeffaf bir şekilde.",
      cta: "Online Randevu",
      portraitAlt: "Dt. Bahattin Eraslan portresi",
      stats: [
        { value: "11", label: "tedavi alanı" },
        { value: "1:1", label: "hekim takibi" },
        { value: "Pendik", label: "kolay ulaşım" },
      ],
    },
    marquee: [
      "İmplant",
      "Gülüş Tasarımı",
      "Zirkonyum",
      "Lamina",
      "Beyazlatma",
      "Ortodonti",
      "Kanal Tedavisi",
      "Pedodonti",
      "Diş Eti",
      "Protez",
      "Bruksizm",
    ],
    doctor: {
      kicker: "Hekim",
      title: "Dt. Bahattin Eraslan",
      lead: "Her hastanın ağız yapısı, beklentisi ve zamanı farklıdır. Bu yüzden önce dinliyor, doğru teşhisi koyuyor; ardından en az müdahaleyle en kalıcı sonucu hedefleyen, anlaşılır bir tedavi planı hazırlıyorum.",
      text: [
        "Gülizar Zeki Obdan Anadolu Lisesi'nin ardından Van Yüzüncü Yıl Üniversitesi Diş Hekimliği Fakültesi'ni 2023 yılında derece öğrencisi olarak bitirdim. Yüzüncü Yıl Üniversitesi Uluslararası 1. Sağlık Bilimleri Kongresi'nin düzenleme kurulunda yer aldım; aynı kongrede sunduğum akademik çalışmayla dereceye girdim.",
        "Mezuniyetimden bu yana Pendik'te, yurt içinden ve yurt dışından gelen hastaları tedavi ediyorum. Özellikle implant ve cerrahi operasyonlar ile protetik işlemlerde yoğunlaşıyorum.",
      ],
      photoAlt: "Dt. Bahattin Eraslan klinikte",
      facts: [
        {
          label: "Eğitim",
          value:
            "Van Yüzüncü Yıl Üniversitesi, Diş Hekimliği Fakültesi · 2018 – 2023, derece öğrencisi",
        },
        {
          label: "Akademik",
          value:
            "Uluslararası 1. Sağlık Bilimleri Kongresi · düzenleme kurulu üyesi, bildiri ile derece",
        },
        {
          label: "Odak alanları",
          value:
            "İmplant cerrahisi, cerrahi ve yirmilik diş çekimi, All-on-4 / All-on-6 implant üstü protezler, lamina, kanal tedavisi",
        },
        { label: "Deneyim", value: "4 yıldır aktif klinik hekimliği · Pendik" },
      ],
      credentials: {
        summary: "Kongre ve sertifikalar",
        congressesTitle: "Kongreler",
        certificatesTitle: "Sertifika programları",
        congresses: [
          {
            org: "Van Yüzüncü Yıl Üniversitesi",
            title: "Uluslararası 1. Sağlık Bilimleri Kongresi",
            note: "Düzenleme kurulu üyeliği ve sunulan çalışmayla derece",
          },
          {
            org: "Hacettepe Üniversitesi Diş Hekimliği Fakültesi",
            title: "Uluslararası Öğrenci Kongresi",
          },
          {
            org: "Türk Diş Hekimleri Birliği",
            title: "TDB Online Öğrenci Kongresi",
          },
          { org: "APEX'21", title: "Diş Hekimliği Kongresi" },
        ] as { org: string; title: string; note?: string }[],
        certificates: [
          {
            org: "The University of Hong Kong · Faculty of Dentistry",
            title: "Implant Dentistry",
          },
          {
            org: "The University of Hong Kong · Faculty of Dentistry",
            title: "Digital Biomaterials",
          },
          {
            org: "The University of Hong Kong · Faculty of Dentistry",
            title: "Minimal Intervention Dentistry for Paediatric Patients",
          },
        ] as { org: string; title: string; note?: string }[],
      },
    },
    treatments: {
      kicker: "Tedaviler",
      title: "Tek çatı altında, bütüncül diş sağlığı.",
      text: "Tanıdan tedaviye tüm süreç aynı hekimle ilerler. Hangi tedaviye ihtiyacınız olduğundan emin değilseniz muayenede birlikte karar veririz.",
      all: "Tüm tedaviler →",
      ask: "Hangisine ihtiyacınız olduğundan emin değil misiniz?",
      askCta: "Ücretsiz ön görüşme →",
    },
    why: {
      kicker: "Neden biz",
      title: "Tedavi kadar, tedavi sürecinin kendisi de önemli.",
      items: [
        {
          title: "Şeffaf planlama",
          text: "Tedaviye başlamadan önce süreci, seans sayısını ve maliyeti yazılı olarak paylaşırız.",
        },
        {
          title: "Dijital tanı",
          text: "Ağız içi tarama ve dijital görüntüleme ile sonucu uygulamadan önce birlikte görürsünüz.",
        },
        {
          title: "Ağrısız yaklaşım",
          text: "Diş hekimi kaygısı olan hastalar için yavaş tempolu, konforu önceleyen seanslar.",
        },
        {
          title: "Sterilizasyon",
          text: "Her hasta için tek kullanımlık set ve belgelenen sterilizasyon döngüsü.",
        },
      ],
    },
    gallery: {
      kicker: "Öncesi / Sonrası",
      title: "Sonuçlar kendi adına konuşsun.",
      all: "Tüm görseller →",
      /** Öncesi / sonrası kapalıyken (siteConfig.features.beforeAfter) */
      clinicOnly: {
        kicker: "Klinik",
        title: "Kliniğimizden kareler.",
      },
    },
    reviews: {
      kicker: "Hasta yorumları",
      items: [
        {
          quote:
            "“Yıllardır ertelediğim implant tedavisini hiç ağrı hissetmeden tamamladım. Her adımı önceden anlattı.”",
          name: "Ayşe K.",
          treatment: "İmplant",
        },
        {
          quote:
            "“Laminalarım o kadar doğal duruyor ki kimse yaptırdığımı anlamıyor. Tam istediğim buydu.”",
          name: "Mert D.",
          treatment: "Gülüş tasarımı",
        },
        {
          quote:
            "“Kızım diş hekiminden çok korkardı. Artık kontrole gitmek için sabırsızlanıyor.”",
          name: "Elif S.",
          treatment: "Pedodonti",
        },
      ],
    },
    blog: {
      kicker: "Blog",
      title: "Ağız sağlığı üzerine notlar.",
      all: "Tüm yazılar →",
    },
    tourism: {
      kicker: "Dental Turizm",
      title: "Klinikte hastamız, İstanbul'da konuğumuz olun.",
      text: "Yurt dışından gelen hastalarımız için havalimanı transferi, konaklama ve tedavi takvimini tek elden planlıyoruz. Gelmeden önce ücretsiz görüntülü ön görüşme ile tedavi planınızı ve maliyeti netleştiriyoruz.",
      steps: [
        {
          title: "Online ön görüşme",
          text: "Fotoğraf ve röntgenlerinizi gönderin; tedavi planı ve fiyat teklifini yazılı alın.",
        },
        {
          title: "Havalimanı transferi",
          text: "Sabiha Gökçen'e 15 dakika mesafedeyiz. İniş saatinize göre aracımız sizi bekler.",
        },
        {
          title: "Konaklama ve tedavi",
          text: "Kliniğe yürüme mesafesindeki anlaşmalı otelde konaklayın; seanslar kalış sürenize göre sıkıştırılır.",
        },
        {
          title: "Dönüş sonrası takip",
          text: "Ülkenize döndükten sonra kontroller görüntülü görüşmeyle sürer; garanti belgeniz elinizde olur.",
        },
      ],
      cta: "Görüntülü görüşme talebi",
      more: "Süreci detaylı inceleyin →",
      imageAlts: ["İstanbul Boğazı", "Klinik ve havalimanı transferi"],
      stats: [
        { value: "15 dk", label: "Sabiha Gökçen'e" },
        { value: "3–7", label: "gün ortalama kalış" },
        { value: "EN", label: "İngilizce iletişim" },
      ],
    },
    faq: {
      kicker: "Sık sorulanlar",
      title: "Aklınıza takılanlar.",
      showAll: "Tüm soruları gör",
      text: "Burada cevabını bulamadığınız sorular için WhatsApp'tan yazabilirsiniz.",
      items: [
        {
          question: "İlk muayene ücretli mi?",
          answer:
            "İlk görüşme ve ağız içi değerlendirme ücretsizdir. Gerekirse röntgen için ayrıca bilgilendirilirsiniz.",
        },
        {
          question: "İmplant tedavisi ne kadar sürer?",
          answer:
            "Kemik yapısına göre değişmekle birlikte implantın yerleştirilmesi tek seanstır; kalıcı diş genellikle 2–3 ay sonra takılır.",
        },
        {
          question: "Tedaviler ağrılı mı?",
          answer:
            "Tüm işlemler lokal anestezi altında yapılır. Kaygısı yüksek hastalar için ek konfor yöntemleri uygulanır.",
        },
        {
          question: "Taksit imkânı var mı?",
          answer:
            "Evet, kredi kartına taksit seçenekleri mevcuttur. Planlama aşamasında detayları paylaşırız.",
        },
        {
          question: "Çocuğum kaç yaşında ilk kontrole gelmeli?",
          answer:
            "İlk dişin sürmesinden sonra, en geç 1 yaş civarında ilk kontrolü öneriyoruz.",
        },
        {
          question: "Kliniğiniz Pendik'te tam olarak nerede?",
          answer:
            "Pendik Güzelyalı Mahallesi, İstiklal Caddesi No:10/A adresindeyiz. Sayfanın altındaki haritadan ya da Google Haritalar'da “Diş Hekimi Bahattin Eraslan” aratarak yol tarifi alabilirsiniz.",
        },
        {
          question: "Pendik dışından gelen hastalara da bakıyor musunuz?",
          answer:
            "Elbette. İstanbul'un her semtinden, hatta şehir dışından gelen hastalarımızı ağırlıyoruz. Önceden randevu alırsanız bekleme süresi en aza iner.",
        },
        {
          question: "Cumartesi günleri açık mısınız?",
          answer:
            "Evet. Pazartesi–cuma 09:00–19:00, cumartesi 09:00–19:00 saatleri arasında hizmet veriyoruz. Randevu için telefon, WhatsApp veya sitedeki formu kullanabilirsiniz.",
        },
      ],
    },
    appointment: {
      kicker: "Randevu",
      title: "İlk adımı birlikte atalım.",
      text: "Formu doldurun, aynı gün içinde sizi arayıp uygun saati birlikte belirleyelim. Ya da doğrudan telefonla ulaşın.",
      whatsapp: "WhatsApp'tan yazın",
      form: {
        name: "Ad Soyad",
        phone: "Telefon",
        phonePlaceholder: "05__ ___ __ __",
        treatment: "Tedavi",
        treatmentOptions: [
          "Emin değilim",
          "İmplant",
          "Gülüş Tasarımı",
          "Zirkonyum",
          "Lamina",
          "Beyazlatma",
          "Ortodonti",
          "Kanal Tedavisi",
          "Pedodonti",
          "Diş Eti",
          "Protez",
          "Botoks / Bruksizm",
        ],
        date: "Tercih edilen gün",
        note: "Notunuz (isteğe bağlı)",
        consent:
          "Kişisel verilerimin randevu amacıyla işlenmesini kabul ediyorum.",
        consentLink: "Aydınlatma metni",
        submit: "Randevu Talebi Gönder",
        privacy:
          "Bilgileriniz yalnızca randevu için kullanılır, üçüncü kişilerle paylaşılmaz.",
      },
      success: {
        title: "Teşekkürler!",
        text: "Talebinizi aldık, aynı gün içinde sizi arayacağız.",
      },
    },
    location: {
      kicker: "Konum",
      title: "Pendik'te.",
      address: "Adres",
      phone: "Telefon",
      email: "E-posta",
      instagram: "Instagram",
      directions: "Yol tarifi al →",
      mapTitle: "Klinik konumu haritası",
    },
  },

  blog: {
    kicker: "Blog",
    title: "Ağız sağlığı üzerine notlar.",
    text: "Tedaviler, bakım ve sık karşılaştığımız sorular üzerine sade bir dille yazılmış kısa yazılar.",
    all: "Tümü",
    categories: {
      implant: "İmplant",
      aesthetic: "Estetik",
      surgery: "Cerrahi",
      kids: "Çocuk",
      care: "Bakım",
    },
    readTime: "dk",
    readMore: "Yazıyı oku →",
    empty: "Bu kategoride henüz yazı yok.",
    ctaTitle: "Okuduklarınızla ilgili bir sorunuz mu var?",
    post: {
      back: "← Tüm yazılar",
      readTime: "dk okuma",
      ctaKicker: "Muayene",
      ctaText: "İlk görüşme ve ağız içi değerlendirme ücretsizdir.",
      cta: "Randevu al",
      related: "İlgili yazılar",
      coverAlt: "Yazı kapak görseli",
      photo: "Fotoğraf:",
    },
  },

  treatments: {
    kicker: "Tedaviler",
    title: "Tedavilerimiz.",
    text: "Tanıdan tedaviye tüm süreç aynı hekimle ilerler. Her tedavinin nasıl işlediğini, kimlere uygun olduğunu ve sık sorulan soruları ayrı sayfalarda anlattık.",
    ctaTitle: "Hangisine ihtiyacınız olduğundan emin değil misiniz?",
    detail: "İncele →",
    page: {
      back: "← Tüm tedaviler",
      faqTitle: "Sık sorulan sorular",
      related: "İlgili yazılar",
      others: "Diğer tedaviler",
      ctaKicker: "Muayene",
      ctaTitle: "İlk muayene ücretsiz",
      ctaText:
        "Ağız içi değerlendirme ve tedavi planı için randevu alın; karar vermek zorunda değilsiniz.",
      cta: "Randevu al",
    },
  },

  gallery: {
    kicker: "Galeri",
    title: "Sonuçlar kendi adına konuşsun.",
    text: "Hastalarımızın izniyle paylaşılan öncesi / sonrası vakalar ve klinikten kareler.",
    clinicOnly: {
      title: "Kliniğimizden kareler.",
      text: "Pendik'teki kliniğimiz: bekleme alanı, tedavi odaları ve dijital röntgen.",
      description:
        "Pendik'teki diş kliniğimizden kareler: bekleme alanı, tedavi odaları ve dijital panoramik röntgen.",
    },
    tabs: { all: "Tümü", cases: "Öncesi / Sonrası", clinic: "Klinik" },
    casesTitle: "Öncesi / Sonrası",
    clinicTitle: "Klinikten kareler",
    ctaTitle: "Kendi gülüşünüz için plan yapalım.",
    lightbox: {
      open: "Büyüt",
      prev: "Önceki vaka",
      next: "Sonraki vaka",
      prevPhoto: "Önceki fotoğraf",
      nextPhoto: "Sonraki fotoğraf",
      close: "Kapat",
    },
    cases: [
      { title: "Gülüş tasarımı", detail: "8 lamina" },
      { title: "İmplant", detail: "Tek diş eksikliği" },
      { title: "Beyazlatma", detail: "Ofis tipi, tek seans" },
      { title: "All-on-4", detail: "Üst çene sabit protez" },
      { title: "Zirkonyum kaplama", detail: "Ön 6 diş" },
      { title: "Ortodonti", detail: "Şeffaf plak, 9 ay" },
    ],
    clinic: [
      "Bekleme alanı",
      "Tedavi odası",
      "Röntgen odası",
      "Giriş",
      "Panoramik röntgen",
      "Muayene odası",
      "Tedavi odası 2",
    ],
  },

  tourism: {
    navCta: "Görüntülü Görüşme",
    hero: {
      kicker: "Dental Turizm · İstanbul",
      title: "Tedaviniz için İstanbul'a gelin, gerisini bize bırakın.",
      text: "Yurt dışında yaşayan hastalarımız için planlamayı tek elden yapıyoruz: ön görüşme, transfer, konaklama, tedavi ve dönüş sonrası takip. Gelmeden önce ne yapılacağını ve ne ödeyeceğinizi yazılı olarak bilirsiniz.",
      cta: "Ücretsiz görüntülü görüşme",
      imageAlt: "İstanbul silueti ve Boğaz",
    },
    stats: [
      { value: "15 dk", label: "Sabiha Gökçen Havalimanı'na araçla uzaklık" },
      {
        value: "3–7 gün",
        label: "İmplant ve estetik tedaviler için ortalama kalış süresi",
      },
      {
        value: "%50–70",
        label: "Batı Avrupa fiyatlarına göre ortalama tasarruf",
      },
      { value: "EN", label: "Hekim ve ekiple İngilizce iletişim" },
    ],
    journey: {
      kicker: "Yolculuğunuz",
      title: "Adım adım, sürprizsiz bir süreç.",
      steps: [
        {
          title: "Online ön görüşme ve teklif",
          text: "Fotoğraf ve röntgenlerinizi inceleyip görüntülü görüşmede planı anlatıyoruz. Seans sayısı, kalış süresi ve toplam maliyet yazılı olarak size iletilir.",
          imageAlt: "Görüntülü görüşme",
        },
        {
          title: "Havalimanı karşılama",
          text: "Sabiha Gökçen'den kliniğe ve otele özel araçla transfer. Uçuş bilgilerinizi paylaşmanız yeterli; iniş saatinize göre aracımız hazır olur.",
          imageAlt: "Havalimanı transfer aracı",
        },
        {
          title: "Konaklama",
          text: "Kliniğe yürüme mesafesindeki anlaşmalı otellerde indirimli konaklama. Tercih ederseniz kendi rezervasyonunuzu da planlayabiliriz.",
          imageAlt: "Otel odası",
        },
        {
          title: "Tedavi",
          text: "Seanslar kalış sürenize göre sıkıştırılır; tedavi aralarında Pendik sahili ve İstanbul'u keşfetmeye vakit kalır. Tüm süreç aynı hekimle ilerler.",
          imageAlt: "Tedavi odası",
        },
        {
          title: "Dönüş ve uzaktan takip",
          text: "Ülkenize dönerken garanti belgeniz ve bakım talimatlarınız elinizde olur. Kontroller görüntülü görüşmeyle sürer; gerekirse ikinci ziyaret planlanır.",
          imageAlt: "Görüntülü kontrol",
        },
      ],
    },
    treatments: {
      kicker: "En çok tercih edilen",
      title: "Tek ziyarete sığan tedaviler",
      all: "Tüm tedaviler →",
      items: [
        {
          name: "All-on-4 / All-on-6",
          text: "Tüm çene için implant üstü sabit protez. 2 ziyaret, geçici dişler ilk ziyarette.",
          duration: "5–7 gün",
        },
        {
          name: "Gülüş Tasarımı",
          text: "Lamina veya zirkonyum ile dijital planlı estetik yenileme.",
          duration: "5–6 gün",
        },
        {
          name: "İmplant",
          text: "Tek veya çoklu implant cerrahisi; kalıcı dişler ikinci ziyarette.",
          duration: "3 gün + 3 gün",
        },
        {
          name: "Beyazlatma + Temizlik",
          text: "Şehir ziyaretinize eşlik eden tek seanslık bakım.",
          duration: "1 gün",
        },
      ],
    },
    consult: {
      kicker: "Ücretsiz görüntülü görüşme",
      title: "Gelmeden önce planı birlikte netleştirelim.",
      steps: [
        {
          title: "Dişlerinizin fotoğrafını çekin",
          text: "Üst ve alt dişlerin ısırma yüzeyi ile gülümserken önden bir kare yeterli. Varsa panoramik röntgeninizi ekleyin.",
        },
        {
          title: "Formu doldurun",
          text: "Şikâyetinizi ve beklentinizi kısaca yazın; ne kadar ayrıntı, o kadar isabetli plan.",
        },
        {
          title: "Görüşme bağlantınızı alın",
          text: "48 saat içinde size uygun bir saat için davet gönderiyoruz. Görüşme sonunda yazılı plan ve fiyat teklifi elinizde olur.",
        },
      ],
      form: {
        name: "Ad Soyad",
        country: "Ülke / Şehir",
        email: "E-posta",
        phone: "WhatsApp numarası",
        treatment: "İlgilendiğiniz tedavi",
        treatmentOptions: [
          "Emin değilim",
          "All-on-4 / All-on-6",
          "İmplant",
          "Gülüş Tasarımı",
          "Zirkonyum / Lamina",
          "Beyazlatma",
          "Diğer",
        ],
        date: "Planladığınız tarih",
        files: "Fotoğraf / röntgen",
        filesNote:
          "Talebinizi gönderdikten sonra fotoğraf ve röntgenlerinizi WhatsApp'tan iletebilirsiniz.",
        message: "Mesajınız",
        consent:
          "Tedavi planlaması için kişisel verilerimin ve gönderdiğim görsellerin kullanılmasını kabul ediyorum.",
        submit: "Görüntülü Görüşme Talebi Gönder",
      },
      success: {
        title: "Talebinizi aldık",
        text: "48 saat içinde görüşme daveti ve uygun saat seçenekleriyle e-posta göndereceğiz.",
        sendPhotos: "Fotoğrafları WhatsApp'tan gönder",
        photosMessage:
          "Merhaba, görüntülü görüşme talebi gönderdim. Fotoğraf ve röntgenlerimi iletiyorum.",
      },
    },
    faq: {
      kicker: "Sık sorulanlar",
      title: "Yurt dışından gelenler için.",
      items: [
        {
          question: "Tedavi kaç gün sürer, kaç kez gelmem gerekir?",
          answer:
            "Gülüş tasarımı ve All-on-4 genellikle tek ziyarette (5–7 gün) tamamlanır. Tekli implantlarda iyileşme için 2–3 ay sonra ikinci kısa bir ziyaret gerekir.",
        },
        {
          question: "Fiyat teklifi bağlayıcı mı?",
          answer:
            "Görüntülü görüşme sonrası verilen yazılı teklif, muayenede plan değişmediği sürece geçerlidir. Değişiklik gerekirse işlem öncesi onayınız alınır.",
        },
        {
          question: "Transfer ve otel ücrete dahil mi?",
          answer:
            "Havalimanı transferi tedavi paketine dahildir. Konaklama için anlaşmalı otel fiyatları ayrıca iletilir; ödeme doğrudan otele yapılır.",
        },
        {
          question: "Hangi dillerde iletişim kurabilirim?",
          answer:
            "Hekim ve ekip İngilizce konuşur. Diğer diller için görüşmelerde tercüman desteği sağlanabilir.",
        },
        {
          question: "Döndükten sonra bir sorun olursa?",
          answer:
            "Tüm implant ve protez işlemleri garanti kapsamındadır. Önce görüntülü değerlendirme yapılır; gerekirse ülkenizde bir meslektaşla koordine olur ya da ziyaretinizi planlarız.",
        },
      ],
    },
  },
};

export type Dictionary = typeof tr;
export type { BlogCategory } from "../types";

export default tr;
