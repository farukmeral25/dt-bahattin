"use client";

import Script from "next/script";
import { useEffect, useState } from "react";
import {
  GA_MEASUREMENT_ID,
  hasAnalyticsConsent,
  onAnalyticsConsent,
} from "@/lib/analytics";

/**
 * GA4'ü yalnızca production'da ve çerez onayı varsa yükler. Sayfa geçişleri
 * GA4'ün "gelişmiş ölçüm" ayarıyla (tarayıcı geçmişi olayları) otomatik
 * sayılır; ayrıca page_view göndermeye gerek yoktur.
 */
export function Analytics() {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    if (process.env.NODE_ENV !== "production") return;
    // localStorage yalnızca tarayıcıda okunabildiği için mount sonrası açılır.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    if (hasAnalyticsConsent()) setEnabled(true);
    return onAnalyticsConsent(() => setEnabled(true));
  }, []);

  if (!enabled) return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="afterInteractive"
      />
      <Script id="ga-init" strategy="afterInteractive">
        {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${GA_MEASUREMENT_ID}');`}
      </Script>
    </>
  );
}
