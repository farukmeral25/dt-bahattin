/**
 * Google Analytics 4 (Firebase projesi dt-bahattin). Ölçüm kimliği herkese
 * açık bir değerdir. Script yalnızca çerez onayından sonra yüklenir (KVKK).
 */
export const GA_MEASUREMENT_ID =
  process.env.NEXT_PUBLIC_GA_ID ?? "G-G6YCJ1QW38";

const CONSENT_KEY = "dt-cookie-ok";
const CONSENT_EVENT = "dt-cookie-consent";

export function hasAnalyticsConsent() {
  try {
    return localStorage.getItem(CONSENT_KEY) === "1";
  } catch {
    return false;
  }
}

/** Çerez bildirimindeki "Kabul et" çağırır: onayı kaydeder, analitiği açar. */
export function grantAnalyticsConsent() {
  try {
    localStorage.setItem(CONSENT_KEY, "1");
  } catch {
    // Depolama kapalıysa onay yalnızca bu sayfa için geçerli olur.
  }
  window.dispatchEvent(new Event(CONSENT_EVENT));
}

export function onAnalyticsConsent(callback: () => void) {
  window.addEventListener(CONSENT_EVENT, callback);
  return () => window.removeEventListener(CONSENT_EVENT, callback);
}

/** GA4 olayı gönderir; onay yoksa (gtag yüklenmemişse) sessizce atlanır. */
export function trackEvent(name: string, params?: Record<string, string>) {
  const { gtag } = window as { gtag?: (...args: unknown[]) => void };
  gtag?.("event", name, params);
}
