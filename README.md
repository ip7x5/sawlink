# SAWLINK

SAWLINK, elmas tel testere sarf malzemeleri, üretim hattı ekipmanları ve teknik destek hizmetleri için Türkçe, çok sayfalı bir Next.js web sitesidir. Marka, Nova Abrasiv / Güngör Mermer Maden San. ve Tic. A.Ş. ile bağlantılı olarak sunulur.

## Sayfalar

- `/` - Ana sayfa, çözümler, fuarlar ve marka bilgisi
- `/urunler` - Ürün ve çözüm seçenekleri
- `/hizmetler` - Hizmet kapsamı
- `/iletisim` - Telefon, WhatsApp, e-posta ve teklif formu
- `/kayit` - İletişim kaydı

## Kurulum

Gereksinimler: Node.js 22 veya üzeri.

```bash
npm ci
cp .env.example .env.local
npm run dev
```

Uygulama `http://localhost:3000` adresinde açılır.

## Kontroller

```bash
npm run lint
npm run typecheck
npm run build
```
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
