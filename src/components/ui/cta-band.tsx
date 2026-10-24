import { cn } from "@/lib/cn";
import { ButtonLink } from "./button-link";

type CtaBandProps = {
  title: string;
  cta: string;
  href: string;
  tone?: "sand" | "plain";
};

/** Alt sayfaların sonundaki randevu şeridi. */
export function CtaBand({ title, cta, href, tone = "sand" }: CtaBandProps) {
  return (
    <section
      className={cn("border-t border-ink/10", tone === "sand" && "bg-sand")}
    >
      <div className="container-site flex flex-wrap items-center justify-between gap-6 py-[clamp(48px,6vw,80px)]">
        <h2 className="heading-band">{title}</h2>
        <ButtonLink href={href}>{cta}</ButtonLink>
      </div>
    </section>
  );
}
