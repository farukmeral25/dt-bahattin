import { useSyncExternalStore } from "react";

/** Ziyaretçinin yerel saatine göre bugün (YYYY-MM-DD). */
export function todayISO() {
  const now = new Date();
  const pad = (n: number) => String(n).padStart(2, "0");
  return `${now.getFullYear()}-${pad(now.getMonth() + 1)}-${pad(now.getDate())}`;
}

const subscribe = () => () => {};

/**
 * Tarih alanlarının `min` değeri için. Statik HTML build tarihinde
 * üretildiğinden sunucuda undefined döner, tarayıcıda gerçek gün gelir
 * (hydration uyuşmazlığı olmadan).
 */
export function useToday() {
  return useSyncExternalStore(subscribe, todayISO, () => undefined);
}
