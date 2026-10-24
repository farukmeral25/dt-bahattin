import { siteConfig, whatsappUrl } from "@/config/site";

export type FormState = { status: "idle" | "success" | "error" };

export const initialFormState: FormState = { status: "idle" };

/** Bot tuzağı alanının adı — formlarda gizli, doluysa gönderim yapılmaz. */
export const HONEYPOT_FIELD = "botcheck";

/**
 * Web3Forms erişim anahtarı. Tarayıcıdan gönderilmek üzere tasarlanmıştır,
 * gizli değildir (yalnızca kayıtlı e-postaya gönderim yapabilir).
 */
const WEB3FORMS_KEY =
  process.env.NEXT_PUBLIC_WEB3FORMS_KEY ??
  "781a6a04-0087-4261-a34a-49d956d762fa";

/** FormData'dan kırpılmış metin alanı okur. */
export function readText(formData: FormData, name: string, max = 2000) {
  const value = formData.get(name);
  return typeof value === "string" ? value.trim().slice(0, max) : "";
}

type Lead = {
  /** E-posta konusu */
  subject: string;
  /** Etiket → değer; boş değerler atlanır */
  fields: [label: string, value: string][];
  /** Hekim "Yanıtla" dediğinde gidecek adres (hasta e-postası) */
  replyTo?: string;
};

/**
 * Talebi kliniğin e-posta adresine iletir (Web3Forms — statik sitede sunucu
 * gerektirmez). Anahtar tanımlı değilse talep kaybolmasın diye WhatsApp'ta
 * hazır mesaj olarak açılır.
 */
export async function sendLead(
  lead: Lead,
  formData: FormData,
): Promise<boolean> {
  // Bot tuzağı doluysa sessizce başarılı say.
  if (formData.get(HONEYPOT_FIELD)) return true;

  const fields = lead.fields.filter(([, value]) => value);

  if (!WEB3FORMS_KEY) {
    console.warn(
      "NEXT_PUBLIC_WEB3FORMS_KEY tanımlı değil; talep WhatsApp'ta açılıyor.",
    );
    openWhatsApp(lead.subject, fields);
    return true;
  }

  try {
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        access_key: WEB3FORMS_KEY,
        subject: lead.subject,
        from_name: siteConfig.name,
        ...(lead.replyTo && { replyto: lead.replyTo }),
        ...Object.fromEntries(fields),
      }),
    });
    const result = (await response.json()) as { success?: boolean };
    return response.ok && result.success === true;
  } catch {
    return false;
  }
}

/** Kliniğin WhatsApp hattında hazır mesaj açar. */
export function openWhatsApp(
  title: string,
  lines: [label: string, value: string][] = [],
) {
  const text = [title, ...lines.map(([label, value]) => `${label}: ${value}`)]
    .join("\n")
    .trim();
  const url = `${whatsappUrl}?text=${encodeURIComponent(text)}`;
  // Açılır pencere engellenirse aynı sekmede aç (harici adres: wa.me).
  // eslint-disable-next-line @next/next/no-location-assign-relative-destination
  if (!window.open(url, "_blank")) window.location.assign(url);
}
