# SAWLINK

SAWLINK, elmas tel testere sarf malzemeleri, üretim hattı ekipmanları ve teknik destek hizmetleri için Türkçe, çok sayfalı bir Next.js web sitesidir. Marka, Nova Abrasiv / Güngör Mermer Maden San. ve Tic. A.Ş. ile bağlantılı olarak sunulur.

## Canlı Demo

**[SAWLINK sitesini aç](https://ip7x.github.io/sawlink/)**

[![Deploy to GitHub Pages](https://github.com/ip7x5/sawlink/actions/workflows/deploy-pages.yml/badge.svg)](https://github.com/ip7x5/sawlink/actions/workflows/deploy-pages.yml)

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

## GitHub Pages

كل Push إلى `main` يشغّل Workflow النشر الموجود في `.github/workflows/deploy-pages.yml`.
من إعدادات GitHub افتح **Settings > Pages** واختر **GitHub Actions** كمصدر النشر.

بعد نجاح الـ Workflow سيظهر الموقع على:

`https://ip7x5.github.io/sawlink/`
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

