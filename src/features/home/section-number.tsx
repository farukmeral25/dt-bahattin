import { siteConfig } from "@/config/site";

/**
 * Ana sayfa bölüm sırası. Numaralar buradan hesaplanır: kapalı bölümler
 * (siteConfig.features) atlanır, mobilde gizlenen bölümler mobil sırada
 * sayılmaz. Bölüm eklerken / taşırken yalnızca bu listeyi güncelleyin.
 */
const sections = [
  { key: "doctor" },
  { key: "treatments", hiddenOnMobile: true },
  { key: "why" },
  { key: "gallery" },
  { key: "reviews" },
  { key: "blog" },
  { key: "tourism", enabled: siteConfig.features.dentalTourism },
  { key: "faq" },
  { key: "appointment" },
  { key: "location" },
] as const satisfies {
  key: string;
  enabled?: boolean;
  hiddenOnMobile?: boolean;
}[];

type SectionKey = (typeof sections)[number]["key"];

const pad = (n: number) => String(n).padStart(2, "0");

function numbersFor(key: SectionKey) {
  let desktop = 0;
  let mobile = 0;
  for (const section of sections) {
    if ("enabled" in section && section.enabled === false) continue;
    desktop++;
    if (!("hiddenOnMobile" in section)) mobile++;
    if (section.key === key) return { desktop, mobile };
  }
  return { desktop, mobile };
}

/** Bölüm başlığındaki "02 — " numarası; mobilde farklıysa ayrı gösterilir. */
export function SectionNumber({ section }: { section: SectionKey }) {
  const { desktop, mobile } = numbersFor(section);
  if (desktop === mobile) return <>{pad(desktop)} — </>;
  return (
    <>
      <span className="tab:hidden">{pad(mobile)}</span>
      <span className="max-tab:hidden">{pad(desktop)}</span> —{" "}
    </>
  );
}
