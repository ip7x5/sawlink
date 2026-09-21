import { contactDetails } from "@/data/contact";
import Link from "next/link";

const services = [
  {
    title: "Elmas Tel Testere Sarf Malzemeleri",
    text: "Kesim ve işleme sektörleri için yüksek kaliteli elmas tel testere sarf malzemeleri sunuyoruz.",
  },
  {
    title: "Üretim Hattı Ekipmanları",
    text: "Elmas tel üretimi için farklı üretim kapasitelerine uygun komple üretim hattı çözümleri sağlıyoruz.",
  },
  {
    title: "Profesyonel Teknik Destek",
    text: "Kurulum, devreye alma, personel eğitimi ve satış sonrası teknik destek hizmetleri sunuyoruz.",
  },
];

const exhibitions = [
  {
    title: "Xiamen Taş Fuarı",
    location: "Xiamen, Çin · 2026",
  },
  {
    title: "İzmir Uluslararası Taş ve Teknolojileri Fuarı",
    location: "İzmir, Türkiye · 2026",
  },
  {
    title: "Brazil Stone Fair",
    location: "Vitória, Brezilya · 2026",
  },
];

export default function Home() {
  return (
    <main className="site-background min-h-screen text-white">
      {/* Navbar */}
      <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-[#080b10]/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <a href="#anasayfa" aria-label="SAWLINK ana sayfa" className="text-2xl font-bold tracking-wide">
            SAW<span className="text-blue-500">LINK</span>
          </a>

          <nav aria-label="Ana menü" className="hidden gap-8 text-sm text-gray-300 md:flex">
            <a href="#anasayfa" className="nav-link">Ana Sayfa</a>
            <Link href="/urunler" className="nav-link">Ürünler</Link>
            <Link href="/hizmetler" className="nav-link">Hizmetler</Link>
            <a href="#hakkimizda" className="nav-link">Hakkımızda</a>
            <a href="#fuarlari" className="nav-link">Fuarlar</a>
            <Link href="/iletisim" className="nav-link">İletişim</Link>
          </nav>

          <Link
            href="/kayit"
            className="hidden rounded-full bg-blue-600 px-5 py-2.5 text-sm font-semibold transition hover:-translate-y-0.5 hover:bg-blue-500 sm:block"
          >
            Kayıt Ol
          </Link>

          <details className="relative sm:hidden">
            <summary className="cursor-pointer list-none rounded-lg border border-white/15 px-3 py-2 text-lg" aria-label="Menüyü aç">☰</summary>
            <nav aria-label="Mobil menü" className="absolute right-0 top-12 flex w-48 flex-col gap-4 rounded-xl border border-white/10 bg-[#101620] p-5 text-sm text-gray-300 shadow-xl">
              <a href="#anasayfa" className="nav-link">Ana Sayfa</a>
              <Link href="/urunler" className="nav-link">Ürünler</Link>
              <Link href="/hizmetler" className="nav-link">Hizmetler</Link>
              <a href="#hakkimizda" className="nav-link">Hakkımızda</a>
              <a href="#fuarlari" className="nav-link">Fuarlar</a>
              <Link href="/iletisim" className="nav-link">İletişim</Link>
            </nav>
          </details>
        </div>
      </header>

      {/* Hero */}
      <section
        id="anasayfa"
        className="relative flex min-h-screen items-center overflow-hidden"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_40%,rgba(37,99,235,0.25),transparent_35%)]" />

        <div className="relative mx-auto grid max-w-7xl gap-12 px-6 py-32 md:grid-cols-2 md:items-center">
          <div className="animate-fade-up">
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.3em] text-blue-400">
              Elmas Tel Teknolojileri
            </p>

            <h1 className="text-5xl font-bold leading-tight md:text-7xl">
              Kesim Teknolojisinde
              <span className="block text-blue-500">
                Profesyonel Çözümler
              </span>
            </h1>

            <p className="mt-7 max-w-xl text-lg leading-8 text-gray-400">
              Elmas tel testere sarf malzemeleri, üretim ekipmanları ve
              profesyonel teknik destek ile işletmeniz için güvenilir
              çözümler.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                href="/urunler"
                className="rounded-xl bg-blue-600 px-7 py-4 font-semibold hover:-translate-y-1 hover:bg-blue-500"
              >
                Ürünleri İncele
              </Link>

              <Link
                href="/iletisim"
                className="rounded-xl border border-white/15 px-7 py-4 font-semibold hover:-translate-y-1 hover:bg-white/5"
              >
                Bize Ulaşın
              </Link>
            </div>
          </div>

          <div className="relative animate-float">
            <div className="aspect-square rounded-3xl border border-white/10 bg-gradient-to-br from-blue-600/20 to-transparent p-1 shadow-2xl shadow-blue-900/20">
              <div className="flex h-full items-center justify-center rounded-3xl bg-[#0d121a]">
                <div className="text-center">
                  <div className="mx-auto mb-6 h-32 w-32 rounded-full border-8 border-blue-500/30 border-t-blue-500 animate-spin" />
                  <p className="text-xl font-semibold">SAWLINK</p>
                  <p className="mt-2 text-sm text-gray-500">
                    Diamond Wire Technology
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="hizmetler" className="bg-[#0c1118] px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-blue-400">
              Uzmanlık Alanlarımız
            </p>

            <h2 className="mt-3 text-4xl font-bold md:text-5xl">
              Profesyonel Endüstriyel Çözümler
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {services.map((service, index) => (
              <article
                key={service.title}
                className="glass-card p-8"
              >
                <div className="mb-7 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600/15 text-lg font-bold text-blue-400">
                  0{index + 1}
                </div>

                <h3 className="text-xl font-bold">{service.title}</h3>

                <p className="mt-4 leading-7 text-gray-400">
                  {service.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="hakkimizda" className="px-6 py-24">
        <div className="mx-auto grid max-w-7xl gap-14 md:grid-cols-2 md:items-center">
          <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-blue-950 to-[#0b1017] p-12">
            <p className="text-6xl font-black text-blue-500">SAW</p>
            <p className="mt-2 text-3xl font-bold">LINK</p>
            <div className="mt-10 h-px bg-white/10" />
            <p className="mt-6 text-gray-400">
              Global Diamond Wire Technology
            </p>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-blue-400">
              Hakkımızda
            </p>

            <h2 className="mt-4 text-4xl font-bold">
              Kesim teknolojisinde güvenilir çözüm ortağınız.
            </h2>

            <p className="mt-6 leading-8 text-gray-400">
              Elmas tel testere sektörüne odaklanan profesyonel bir teknoloji
              şirketiyiz. Yüksek kaliteli sarf malzemeleri, üretim ekipmanları
              ve kapsamlı teknik destek ile farklı pazarlardaki müşterilerimize
              çözümler sunuyoruz.
            </p>
            <p className="mt-5 text-sm text-blue-300">
              SAWLINK, Nova Abrasiv / Güngör Mermer Maden San. ve Tic. A.Ş. ile bağlantılı bir markadır.
            </p>
          </div>
        </div>
      </section>

      {/* Exhibitions */}
      <section id="fuarlari" className="bg-[#0c1118] px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-blue-400">
            Global Etkinlikler
          </p>

          <h2 className="mt-3 text-4xl font-bold">
            Katıldığımız Fuarlar
          </h2>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {exhibitions.map((item) => (
              <article
                key={item.title}
                className="card-hover rounded-2xl border border-white/10 bg-[#101620] p-7"
              >
                <div className="mb-8 h-40 rounded-xl bg-gradient-to-br from-blue-900/50 to-gray-900" />

                <h3 className="text-xl font-bold">{item.title}</h3>

                <p className="mt-3 text-gray-500">{item.location}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="iletisim" className="px-6 py-24">
        <div className="mx-auto max-w-5xl rounded-3xl border border-blue-500/20 bg-blue-600/10 p-10 text-center md:p-16">
          <p className="text-sm font-semibold uppercase tracking-widest text-blue-400">
            İletişim
          </p>

          <h2 className="mt-4 text-4xl font-bold md:text-5xl">
            Birlikte çalışmaya hazır mısınız?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-gray-400">
            İhtiyaçlarınızı bizimle paylaşın. Size uygun ürün ve teknik
            çözümü birlikte değerlendirelim.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a href={`mailto:${contactDetails.email}`} className="button-primary">E-posta Gönder</a>
            <a href={contactDetails.phoneHref} className="glass-control px-5 py-3 font-semibold hover:bg-white/10">{contactDetails.phoneDisplay}</a>
            <a href={contactDetails.whatsappHref} target="_blank" rel="noreferrer" className="glass-control px-5 py-3 font-semibold text-emerald-300 hover:bg-white/10">WhatsApp</a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 px-6 py-8">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 text-sm text-gray-500 md:flex-row">
          <p>© 2026 SAWLINK. Tüm hakları saklıdır.</p>
          <p>Elmas Tel Testere Teknolojileri</p>
        </div>
      </footer>
    </main>
  );
}
