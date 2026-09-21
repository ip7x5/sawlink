import Link from "next/link";
import SiteFooter from "@/components/site-footer";
import SiteHeader from "@/components/site-header";
import { contactDetails } from "@/data/contact";

export default function ContactPage() {
  return (
    <main className="site-background min-h-screen text-white">
      <SiteHeader />
      <section className="page-shell px-6 pb-24 pt-36">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="animate-fade-up">
            <p className="eyebrow">İletişim</p>
            <h1 className="display-title mt-4">Projenizi birlikte netleştirelim.</h1>
            <p className="lead mt-6">Ürün seçimi, üretim hattı veya teknik destek için ekibimize ulaşın.</p>
            <div className="mt-10 space-y-4 text-slate-300">
              <p><span className="text-slate-500">E-posta</span><br /><a href={`mailto:${contactDetails.email}`} className="text-blue-300 hover:text-white">{contactDetails.email}</a></p>
              <p><span className="text-slate-500">Telefon</span><br /><a href={contactDetails.phoneHref} className="text-blue-300 hover:text-white">{contactDetails.phoneDisplay}</a></p>
              <div><span className="text-slate-500">Mobil</span>{contactDetails.mobilePhones.map((phone) => <br key={phone.href} />)}{contactDetails.mobilePhones.map((phone) => <a key={phone.href} href={phone.href} className="mr-3 text-blue-300 hover:text-white">{phone.label}</a>)}</div>
              <p><span className="text-slate-500">WhatsApp</span><br /><a href={contactDetails.whatsappHref} target="_blank" rel="noreferrer" className="text-blue-300 hover:text-white">WhatsApp üzerinden yazın</a></p>
              <p><span className="text-slate-500">Adres</span><br />{contactDetails.address}</p>
              <p><span className="text-slate-500">Çalışma saatleri</span><br />{contactDetails.hours}</p>
              <p><span className="text-slate-500">Bağlı marka</span><br /><a href={contactDetails.parentWebsite} target="_blank" rel="noreferrer" className="text-blue-300 hover:text-white">{contactDetails.parentBrand}</a></p>
            </div>
            <Link href="/urunler" className="mt-8 inline-block text-sm font-semibold text-blue-300 hover:text-white">Ürünleri incele →</Link>
          </div>
          <form action={`mailto:${contactDetails.email}`} method="post" encType="text/plain" className="glass-card space-y-5 p-7 md:p-9">
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="field-label">Ad Soyad<input required name="ad_soyad" className="field-input" /></label>
              <label className="field-label">E-posta<input required type="email" name="email" className="field-input" /></label>
            </div>
            <label className="field-label">İlgilendiğiniz çözüm<select name="cozum" className="field-input"><option>Elmas tel sarf malzemeleri</option><option>Üretim hattı ekipmanları</option><option>Teknik destek</option><option>Genel bilgi</option></select></label>
            <label className="field-label">Mesajınız<textarea required name="mesaj" rows={5} className="field-input resize-none" /></label>
            <button type="submit" className="button-primary w-full">Talebi Gönder</button>
          </form>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
