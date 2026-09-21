import Link from "next/link";

export default function RegisterPage() {
  return (
    <main className="site-background flex min-h-screen items-center justify-center px-6 py-12 text-white">
      <div className="glass-card w-full max-w-lg p-8 md:p-10">
        <Link href="/" className="text-sm text-blue-400 hover:text-blue-300">← Ana Sayfaya Dön</Link>
        <p className="mt-12 text-sm font-semibold uppercase tracking-widest text-blue-400">SAWLINK</p>
        <h1 className="mt-3 text-4xl font-bold">İletişim kaydı oluşturun</h1>
        <p className="mt-4 text-gray-400">Ürün ve teknik destek talepleriniz için bilgilerinizi bırakın.</p>
        <form action="mailto:info@sawlink.com" method="post" encType="text/plain" className="mt-8 space-y-5">
          <label className="field-label">Ad Soyad<input required name="ad_soyad" className="field-input" /></label>
          <label className="field-label">E-posta<input required type="email" name="email" className="field-input" /></label>
          <label className="field-label">Mesajınız<textarea required name="mesaj" rows={4} className="field-input resize-none" /></label>
          <button type="submit" className="button-primary w-full">Gönder</button>
        </form>
      </div>
    </main>
  );
}
