import Link from "next/link";
import { contactDetails } from "@/data/contact";

export default function SiteFooter() {
  return (
    <footer className="border-t border-white/10 px-6 py-8">
      <div className="page-shell flex flex-col justify-between gap-4 text-sm text-slate-500 md:flex-row">
        <p>© 2026 SAWLINK. Tüm hakları saklıdır.</p>
        <div className="flex gap-5">
          <Link href="/urunler" className="nav-link">Ürünler</Link>
          <Link href="/iletisim" className="nav-link">İletişim</Link>
          <a href={contactDetails.parentWebsite} target="_blank" rel="noreferrer" className="nav-link">Nova Abrasiv</a>
        </div>
      </div>
    </footer>
  );
}
