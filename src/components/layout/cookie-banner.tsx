"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { grantAnalyticsConsent, hasAnalyticsConsent } from "@/lib/analytics";

type CookieBannerProps = {
  copy: { text: string; link: string; accept: string };
  kvkkHref: string;
};

/**
 * İlk ziyarette gösterilen çerez bildirimi. Onay localStorage'da tutulur;
 * statik HTML'de gizli başlar, tarayıcıda kontrol edildikten sonra açılır.
 */
export function CookieBanner({ copy, kvkkHref }: CookieBannerProps) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // localStorage yalnızca tarayıcıda okunabildiği için mount sonrası açılır.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    if (!hasAnalyticsConsent()) setVisible(true);
  }, []);

  if (!visible) return null;

  function accept() {
    // Onayı kaydeder ve GA'yı sayfa yenilemeden başlatır (lib/analytics).
    grantAnalyticsConsent();
    setVisible(false);
  }

  return (
    <div
      role="region"
      aria-label={copy.link}
      className="fixed inset-x-4 bottom-4 z-[70] mx-auto flex max-w-[560px] flex-wrap items-center gap-3.5 rounded-2xl bg-ink px-5 py-[18px] text-ivory shadow-[0_20px_50px_rgb(42_30_24/0.3)]"
    >
      <p className="min-w-[220px] flex-1 text-[13px] leading-normal text-ivory/80">
        {copy.text}{" "}
        <Link href={kvkkHref} className="text-gold underline hover:text-gold">
          {copy.link}
        </Link>
      </p>
      <button
        type="button"
        onClick={accept}
        className="cursor-pointer rounded-full bg-gold px-[18px] py-2.5 text-[13px] font-semibold text-ink"
      >
        {copy.accept}
      </button>
    </div>
  );
}
