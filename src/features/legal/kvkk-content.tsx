import type { ReactNode } from "react";
import { siteConfig } from "@/config/site";

/**
 * KVKK aydınlatma metni — design handoff'taki metin. Yayına almadan önce
 * avukat kontrolünden geçirilmeli. Yalnızca Türkçe.
 */
export const kvkkUpdatedAt = "24 Ekim 2026";

const { address, contact } = siteConfig;
const fullAddress = `${address.street}, ${address.district} / ${address.city}`;

const sections: { title: string; body: ReactNode }[] = [
  {
    title: "1. Veri sorumlusu",
    body: (
      <p>
        6698 sayılı Kişisel Verilerin Korunması Kanunu (&quot;KVKK&quot;)
        uyarınca kişisel verileriniz, veri sorumlusu sıfatıyla Diş Hekimi{" "}
        {siteConfig.doctor.name} ({fullAddress}) tarafından aşağıda açıklanan
        kapsamda işlenmektedir.
      </p>
    ),
  },
  {
    title: "2. İşlenen kişisel veriler",
    body: (
      <ul className="grid list-disc gap-1.5 pl-[22px]">
        <li>
          Kimlik ve iletişim bilgileri: ad soyad, telefon, e-posta, ülke/şehir
        </li>
        <li>
          Randevu ve görüşme talep bilgileri: tercih edilen tarih, ilgilenilen
          tedavi, mesaj içeriği
        </li>
        <li>
          Sağlık verileri (özel nitelikli): gönderdiğiniz ağız içi fotoğraflar
          ve röntgen görüntüleri
        </li>
        <li>
          İşlem güvenliği verileri: IP adresi, tarayıcı bilgisi, çerez kayıtları
        </li>
      </ul>
    ),
  },
  {
    title: "3. İşleme amaçları ve hukuki sebepler",
    body: (
      <p>
        Verileriniz; randevu ve görüntülü görüşme taleplerinin alınması ve
        yanıtlanması, tedavi planlaması, sizinle iletişim kurulması ve yasal
        yükümlülüklerin yerine getirilmesi amaçlarıyla işlenir. Sağlık
        verileriniz yalnızca <strong>açık rızanıza</strong> dayanarak ve tedavi
        planlaması amacıyla sınırlı olarak işlenir. Diğer veriler, KVKK m.5/2
        kapsamında sözleşmenin kurulması ve meşru menfaat hukuki sebeplerine
        dayanır.
      </p>
    ),
  },
  {
    title: "4. Aktarım",
    body: (
      <p>
        Kişisel verileriniz, yasal zorunluluklar dışında üçüncü kişilerle
        paylaşılmaz. Form altyapısı ve e-posta hizmeti için kullanılan sunucu
        sağlayıcıları veri işleyen sıfatıyla hareket eder. Verileriniz pazarlama
        amacıyla satılmaz veya kiralanmaz.
      </p>
    ),
  },
  {
    title: "5. Saklama süresi",
    body: (
      <p>
        Randevu talebine ilişkin veriler, talebin sonuçlanmasından itibaren en
        fazla 2 yıl; hastaya dönüşen kişilerin kayıtları ise ilgili sağlık
        mevzuatında öngörülen süre boyunca saklanır. Süre sonunda veriler
        silinir, yok edilir veya anonim hale getirilir.
      </p>
    ),
  },
  {
    title: "6. Çerezler",
    body: (
      <p>
        Sitemiz; dil tercihinizi ve çerez onayınızı hatırlamak için zorunlu
        çerezler ile ziyaret istatistikleri için Google Analytics (Google LLC)
        tarafından sağlanan, IP adresi anonimleştirilmiş analitik çerezler
        kullanır. Tarayıcı ayarlarınızdan çerezleri dilediğiniz zaman silebilir
        veya engelleyebilirsiniz.
      </p>
    ),
  },
  {
    title: "7. Haklarınız",
    body: (
      <>
        <p className="mb-2.5">
          KVKK m.11 kapsamında; verilerinizin işlenip işlenmediğini öğrenme,
          işlenmişse bilgi talep etme, amacına uygun kullanılıp kullanılmadığını
          öğrenme, eksik veya yanlış işlenmişse düzeltilmesini isteme,
          silinmesini veya yok edilmesini talep etme, otomatik sistemlerle
          analiz sonucu aleyhinize bir sonuca itiraz etme ve zarara uğramanız
          hâlinde tazminat talep etme haklarına sahipsiniz.
        </p>
        <p>
          Başvurularınızı{" "}
          <a href={`mailto:${contact.email}`} className="underline">
            {contact.email}
          </a>{" "}
          adresine veya yukarıdaki posta adresine yazılı olarak iletebilirsiniz.
          Başvurular en geç 30 gün içinde yanıtlanır.
        </p>
      </>
    ),
  },
];

export function KvkkContent() {
  return (
    <div className="mt-10 grid gap-7 text-base leading-[1.75] text-pretty text-prose">
      {sections.map((section) => (
        <section key={section.title}>
          <h2 className="mb-2.5 font-serif text-2xl font-normal text-ink">
            {section.title}
          </h2>
          {section.body}
        </section>
      ))}
    </div>
  );
}
