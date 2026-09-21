import Link from "next/link";
import SiteFooter from "@/components/site-footer";
import SiteHeader from "@/components/site-header";

const services = [
  ["01", "Elmas Tel Teknolojileri", "Mermer, granit ve doğal taş kesimleri için yüksek performanslı sarf malzemeleri."],
  ["02", "Üretim Hattı Kurulumu", "İhtiyacınıza göre planlanan, kurulumu ve devreye alınması tamamlanan üretim hatları."],
  ["03", "Teknik Eğitim", "Operasyon ekipleri için uygulamalı kullanım, bakım ve güvenlik eğitimleri."],
  ["04", "Satış Sonrası Destek", "Yedek parça, bakım planı ve hızlı teknik danışmanlık ile kesintisiz destek."],
];

export default function ServicesPage() {
  return (
    <main className="site-background min-h-screen text-white">
      <SiteHeader />
      <section className="page-shell px-6 pb-24 pt-36">
        <div className="max-w-3xl animate-fade-up">
          <p className="eyebrow">Hizmetlerimiz</p>
          <h1 className="display-title mt-4">Üretimin her adımında yanınızdayız.</h1>
          <p className="lead mt-6">Tek bir ürün değil, ölçülebilir sonuç sağlayan uçtan uca elmas tel çözümleri sunuyoruz.</p>
        </div>
        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {services.map(([number, title, text]) => (
            <article key={number} className="glass-card group p-8">
              <span className="text-sm font-bold text-blue-300">{number}</span>
              <h2 className="mt-7 text-2xl font-bold">{title}</h2>
              <p className="mt-4 leading-7 text-slate-400">{text}</p>
              <Link href="/iletisim" className="mt-7 inline-block text-sm font-semibold text-blue-300 hover:text-white">Bilgi Al →</Link>
            </article>
          ))}
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
