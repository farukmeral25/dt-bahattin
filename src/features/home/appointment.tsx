import { AppointmentForm } from "@/features/appointment/appointment-form";
import { phoneUrl, siteConfig, whatsappUrl } from "@/config/site";
import type { Dictionary } from "@/i18n/dictionaries/tr";

type AppointmentProps = {
  appointment: Dictionary["home"]["appointment"];
  common: Dictionary["common"];
};

const iconCircle =
  "grid size-11 place-items-center rounded-full border border-ivory/25";

export function Appointment({ appointment, common }: AppointmentProps) {
  return (
    <section id="randevu" className="bg-ink py-section text-ivory">
      <div className="container-site grid items-start gap-[clamp(32px,6vw,96px)] tab:grid-cols-2">
        <div>
          <p className="kicker">08 — {appointment.kicker}</p>
          <h2 className="heading-cta">{appointment.title}</h2>
          <p className="mt-6 max-w-[440px] text-base leading-[1.65] font-light text-ivory/70">
            {appointment.text}
          </p>
          <div className="mt-10 flex flex-col gap-3.5">
            <a href={phoneUrl} className="flex items-center gap-4 text-ivory">
              <span aria-hidden="true" className={`${iconCircle} text-base`}>
                ☏
              </span>
              <span className="font-serif text-2xl">
                {siteConfig.contact.phoneDisplay}
              </span>
            </a>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 text-ivory"
            >
              <span
                aria-hidden="true"
                className={`${iconCircle} text-xs font-semibold`}
              >
                WA
              </span>
              <span className="text-base">{appointment.whatsapp}</span>
            </a>
          </div>
        </div>
        <AppointmentForm copy={appointment} common={common.form} />
      </div>
    </section>
  );
}
