import Link from "next/link";

const links = [
  ["Ana Sayfa", "/"],
  ["Ürünler", "/urunler"],
  ["Hizmetler", "/hizmetler"],
  ["Hakkımızda", "/#hakkimizda"],
  ["Fuarlar", "/#fuarlari"],
  ["İletişim", "/iletisim"],
];

export default function SiteHeader() {
  return (
    <header className="site-header">
      <div className="page-shell flex items-center justify-between px-6 py-5">
        <Link href="/" className="text-2xl font-bold tracking-wide" aria-label="SAWLINK ana sayfa">
          SAW<span className="text-blue-400">LINK</span>
        </Link>

        <nav aria-label="Ana menü" className="hidden items-center gap-7 text-sm text-slate-300 lg:flex">
          {links.map(([label, href]) => (
            <Link key={href} href={href} className="nav-link">{label}</Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link href="/kayit" className="button-primary hidden sm:inline-flex">Kayıt Ol</Link>
          <details className="relative lg:hidden">
            <summary className="glass-control cursor-pointer list-none px-3 py-2 text-lg" aria-label="Menüyü aç">☰</summary>
            <nav className="glass-panel absolute right-0 top-12 flex w-52 flex-col gap-2 p-3 text-sm text-slate-200" aria-label="Mobil menü">
              {links.map(([label, href]) => (
                <Link key={href} href={href} className="rounded-xl px-3 py-3 hover:bg-white/10">{label}</Link>
              ))}
              <Link href="/kayit" className="button-primary mt-2 text-center">Kayıt Ol</Link>
            </nav>
          </details>
        </div>
      </div>
    </header>
  );
}
