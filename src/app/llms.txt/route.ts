import { siteConfig } from "@/config/site";
import { getPosts } from "@/features/blog/repository";
import { localizePath } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";

/**
 * /llms.txt — yapay zekâ asistanları için kliniğin özeti (llmstxt.org).
 * Sözlük, site ayarları ve Firestore'daki yazılardan build sırasında üretilir.
 */
export const dynamic = "force-static";

const url = (path: string) => new URL(path, siteConfig.url).toString();

export async function GET() {
  const [tr, posts] = await Promise.all([getDictionary("tr"), getPosts("tr")]);
  const { address, contact, doctor, social } = siteConfig;
  const { home } = tr;

  const lines = [
    `# ${siteConfig.name} — Diş Hekimi, Pendik / İstanbul`,
    "",
    `> ${tr.meta.home.description}`,
    "",
    "English: Dentist in Pendik, Istanbul (Türkiye). Implants, smile design, zirconia crowns, veneers, root canal treatment, paediatric dentistry. English version of the site: " +
      url("/en"),
    "",
    "## Klinik bilgileri",
    "",
    `- Adres: ${address.street}, ${address.district} / ${address.city}`,
    `- Hizmet bölgesi: ${address.areaServed.join(", ")}`,
    `- Telefon: ${contact.phoneDisplay}`,
    `- WhatsApp: https://wa.me/${contact.whatsapp}`,
    `- E-posta: ${contact.email}`,
    `- Çalışma saatleri: ${tr.common.hours.join(", ")}`,
    `- Google Haritalar: ${address.mapsUrl}`,
    `- Instagram: ${social.instagram}`,
    `- Online randevu: ${url("/#randevu")}`,
    "",
    "## Hekim",
    "",
    `Dt. ${doctor.name}, ${doctor.title}. ${home.doctor.text.join(" ")}`,
    "",
    ...home.doctor.facts.map((fact) => `- ${fact.label}: ${fact.value}`),
    ...[
      ...home.doctor.credentials.congresses,
      ...home.doctor.credentials.certificates,
    ].map((item) => `- ${item.title} (${item.org})`),
    "",
    "## Tedaviler",
    "",
    ...home.treatments.items.map((item) => `- ${item.name}: ${item.text}`),
    "",
    "## Sık sorulan sorular",
    "",
    ...home.faq.items.flatMap((item) => [
      `### ${item.question}`,
      item.answer,
      "",
    ]),
    "## Sayfalar",
    "",
    `- [Ana sayfa](${url("/")})`,
    `- [Galeri](${url("/galeri")})`,
    `- [Blog](${url("/blog")})`,
    `- [KVKK aydınlatma metni](${url("/kvkk")})`,
    "",
    "## Blog yazıları",
    "",
    ...posts.map(
      (post) =>
        `- [${post.title}](${url(localizePath(`/blog/${post.slug}`, "tr"))}): ${post.excerpt}`,
    ),
    "",
  ];

  return new Response(lines.join("\n"), {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
