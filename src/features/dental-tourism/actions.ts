import { trackEvent } from "@/lib/analytics";
import { readText, sendLead, type FormState } from "@/lib/forms";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/**
 * Dental turizm görüntülü görüşme talebi. Tarayıcıda çalışır: doğrulanan
 * talep kliniğin e-posta adresine iletilir; "Yanıtla" hastanın e-postasına
 * gider. Fotoğraf / röntgenler e-postaya eklenmez (Web3Forms ücretsiz plan),
 * hasta bunları başarı ekranındaki WhatsApp bağlantısıyla gönderir.
 */
export async function submitConsultation(
  _prev: FormState,
  formData: FormData,
): Promise<FormState> {
  const request = {
    name: readText(formData, "name", 120),
    country: readText(formData, "country", 120),
    email: readText(formData, "email", 200),
    phone: readText(formData, "phone", 40),
    treatment: readText(formData, "treatment", 80),
    date: readText(formData, "date", 20),
    message: readText(formData, "message"),
    consent: formData.get("consent") === "on",
  };

  if (
    !request.name ||
    !request.country ||
    !EMAIL_PATTERN.test(request.email) ||
    !request.consent
  ) {
    return { status: "error" };
  }

  const sent = await sendLead(
    {
      subject: `Dental turizm görüşme talebi — ${request.name} (${request.country})`,
      replyTo: request.email,
      fields: [
        ["Ad Soyad", request.name],
        ["Ülke / Şehir", request.country],
        ["E-posta", request.email],
        ["WhatsApp", request.phone],
        ["İlgilendiği tedavi", request.treatment],
        ["Planlanan tarih", request.date],
        ["Mesaj", request.message],
        ["KVKK açık rıza", "Verildi"],
      ],
    },
    formData,
  );
  if (!sent) return { status: "error" };

  trackEvent("generate_lead", { form: "dental_tourism" });
  return { status: "success" };
}
