import { siteConfig } from "@/config/site";

// Geçici ana sayfa — tasarım Claude Design'dan geldiğinde bölümlerle değiştirilecek.
export default function HomePage() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center gap-4 p-8 text-center">
      <h1 className="text-4xl font-semibold tracking-tight">
        {siteConfig.name}
      </h1>
      <p className="text-lg text-foreground/70">{siteConfig.doctor.title}</p>
    </main>
  );
}
