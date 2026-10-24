import { trackEvent } from "@/lib/analytics";
import { readText, sendLead, type FormState } from "@/lib/forms";

/**
 * Ana sayfa randevu formu. Tarayıcıda çalışır: doğrulanan talep kliniğin
 * e-posta adresine iletilir (bkz. lib/forms.ts → sendLead).
 */
export async function submitAppointment(
  _prev: FormState,
  formData: FormData,
): Promise<FormState> {
  const request = {
    name: readText(formData, "name", 120),
    phone: readText(formData, "phone", 40),
    treatment: readText(formData, "treatment", 80),
    date: readText(formData, "date", 20),
    note: readText(formData, "note"),
  };

  if (!request.name || !request.phone) return { status: "error" };

  const sent = await sendLead(
    {
      subject: `Randevu talebi — ${request.name}`,
      fields: [
        ["Ad Soyad", request.name],
        ["Telefon", request.phone],
        ["Tedavi", request.treatment],
        ["Tercih edilen gün", request.date],
        ["Not", request.note],
      ],
    },
    formData,
  );
  if (!sent) return { status: "error" };

  trackEvent("generate_lead", { form: "appointment" });
  return { status: "success" };
}
