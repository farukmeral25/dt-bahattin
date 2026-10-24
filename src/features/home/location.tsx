import { phoneUrl, siteConfig } from "@/config/site";
import type { Dictionary } from "@/i18n/dictionaries/tr";

type LocationProps = {
  location: Dictionary["home"]["location"];
  common: Dictionary["common"];
};

export function Location({ location, common }: LocationProps) {
  const { address, contact, social } = siteConfig;

  return (
    <section id="iletisim" className="container-site py-section">
      <div className="grid items-stretch gap-[clamp(32px,6vw,72px)] tab:grid-cols-[0.8fr_1.2fr]">
        <div className="flex flex-col gap-7">
          <div>
            <p className="kicker">10 — {location.kicker}</p>
            <h2 className="heading-section">{location.title}</h2>
          </div>
          <address className="grid gap-[18px] text-[15px] leading-relaxed not-italic">
            <div>
              <div className="label-sm">{location.address}</div>
              <div className="mt-1">
                {address.street}
                <br />
                {address.district} / {address.city}
              </div>
            </div>
            <div>
              <div className="label-sm">{location.phone}</div>
              <a href={phoneUrl} className="mt-1 block">
                {contact.phoneDisplay}
              </a>
            </div>
            <div>
              <div className="label-sm">{location.email}</div>
              <a href={`mailto:${contact.email}`} className="mt-1 block">
                {contact.email}
              </a>
            </div>
            <div>
              <div className="label-sm">{location.instagram}</div>
              <a
                href={social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-1 block"
              >
                {social.instagramHandle}
              </a>
            </div>
            <div>
              <div className="label-sm">{common.hoursLabel}</div>
              <div className="mt-1">
                {common.hours.map((line) => (
                  <div key={line}>{line}</div>
                ))}
              </div>
            </div>
          </address>
          <a
            href={address.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 self-start border-b border-ink pb-1 text-[15px] font-medium"
          >
            {location.directions}
          </a>
        </div>
        <div className="min-h-[380px] overflow-hidden rounded-[20px] bg-placeholder">
          <iframe
            title={location.mapTitle}
            src={address.mapsEmbedUrl}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="size-full min-h-[380px] border-0 saturate-[.6] sepia-[.15]"
          />
        </div>
      </div>
    </section>
  );
}
