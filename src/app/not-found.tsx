import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center gap-4 p-8 text-center">
      <h1 className="text-3xl font-semibold">Sayfa bulunamadı</h1>
      <p className="text-foreground/70">
        Aradığınız sayfa taşınmış veya kaldırılmış olabilir.
      </p>
      <Link href="/" className="underline underline-offset-4">
        Ana sayfaya dön
      </Link>
    </main>
  );
}
