import Link from "next/link";
import { contactDetails } from "@/data/contact";

const products = [
  {
    title: "Elmas Tel Testere Sarf Malzemeleri",
    text: "Mermer, granit ve doğal taş kesimi için dayanıklı ve yüksek performanslı elmas tel çözümleri.",
  },
  {
    title: "Üretim Hattı Ekipmanları",
    text: "Farklı üretim kapasitelerine uygun, verimli ve güvenilir komple üretim hattı ekipmanları.",
  },
  {
    title: "Teknik Destek",
    text: "Kurulum, devreye alma, personel eğitimi ve satış sonrası profesyonel destek.",
  },
];

export default function ProductsPage() {
  return (
    <main className="site-background min-h-screen px-6 py-12 text-white">
      <div className="mx-auto max-w-6xl">
        <Link href="/" className="text-sm text-blue-400 hover:text-blue-300">← Ana Sayfaya Dön</Link>
        <div className="mt-16 max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-blue-400">SAWLINK Ürünleri</p>
          <h1 className="mt-4 text-5xl font-bold">İşletmeniz için doğru teknoloji.</h1>
          <p className="mt-6 leading-8 text-gray-400">Elmas tel kesim süreçlerinizi daha verimli, güvenli ve sürdürülebilir hale getiren çözümlerimizi keşfedin.</p>
        </div>
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {products.map((product, index) => (
            <article key={product.title} className="glass-card p-8">
              <span className="text-sm font-bold text-blue-400">0{index + 1}</span>
              <h2 className="mt-6 text-2xl font-bold">{product.title}</h2>
              <p className="mt-4 leading-7 text-gray-400">{product.text}</p>
              <a href={`mailto:${contactDetails.email}`} className="mt-8 inline-block text-sm font-semibold text-blue-400 hover:text-blue-300">Teklif İste →</a>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
