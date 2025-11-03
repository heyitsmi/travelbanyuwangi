# Travel Banyuwangi Website

Website agen travel untuk Travel Banyuwangi yang melayani rute antar kota dari Banyuwangi ke Surabaya, Malang, Denpasar, dan kota-kota lainnya di Jawa dan Bali.

## Tech Stack

- **Next.js 16** - React Framework
- **TypeScript** - Type Safety
- **Tailwind CSS 4** - Styling
- **Lucide React** - Icons
- **Google Fonts (Inter)** - Typography

## Features

- ✅ Responsive Design (Mobile, Tablet, Desktop)
- ✅ SEO Optimized dengan Dynamic SEO Component
- ✅ Structured Data (JSON-LD) untuk Google Rich Results
- ✅ Fast Loading dengan Next.js Image Optimization
- ✅ Smooth Scrolling Navigation
- ✅ Mobile Menu
- ✅ Modern UI/UX
- ✅ Accessibility Ready

## Project Structure

```
travelbanyuwangi/
├── app/
│   ├── components/
│   │   ├── Header.tsx        # Navigation header dengan mobile menu
│   │   ├── Footer.tsx        # Footer dengan links dan kontak
│   │   └── SEO.tsx           # Dynamic SEO component
│   ├── layout.tsx            # Root layout dengan Inter font
│   ├── page.tsx              # Home page
│   └── globals.css           # Global styles dengan Tailwind
├── public/                   # Static assets
├── package.json
├── tsconfig.json
├── next.config.ts
└── postcss.config.mjs
```

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm atau yarn

### Installation

1. Clone atau download project ini
2. Install dependencies:

```bash
npm install
```

3. Jalankan development server:

```bash
npm run dev
```

4. Buka [http://localhost:3000](http://localhost:3000) di browser

## Available Scripts

- `npm run dev` - Menjalankan development server
- `npm run build` - Build production
- `npm run start` - Menjalankan production server
- `npm run lint` - Menjalankan ESLint

## Customization

### Warna

Edit warna di `app/globals.css`:

```css
@theme inline {
  --color-primary: #0077B6;    /* Biru */
  --color-secondary: #00B894;  /* Hijau */
  --color-accent: #F79E1B;     /* Oranye/Kuning */
  --color-light: #F2F4F7;      /* Background Abu */
  --color-dark: #1E293B;       /* Teks Gelap */
}
```

### SEO

Untuk membuat halaman baru dengan SEO:

```typescript
import { generateMetadata } from "./components/SEO";

export const metadata = generateMetadata({
  title: "Judul Halaman",
  description: "Deskripsi halaman",
  keywords: "keyword1, keyword2",
  canonicalUrl: "https://travelbanyuwangi.id/halaman-baru",
});
```

### Menambahkan Halaman Baru

1. Buat folder baru di `app/nama-halaman/`
2. Buat file `page.tsx` di folder tersebut
3. Export default component dan metadata

Contoh `app/travel-banyuwangi-surabaya/page.tsx`:

```typescript
import { Metadata } from "next";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Travel Banyuwangi Surabaya | travelbanyuwangi.id",
  description: "Layanan travel Banyuwangi - Surabaya...",
  // ... SEO lainnya
};

export default function TravelSurabaya() {
  return (
    <>
      <Header />
      <main>
        {/* Konten halaman */}
      </main>
      <Footer />
    </>
  );
}
```

## Deployment

### Vercel (Recommended)

1. Push code ke GitHub
2. Import project di [Vercel](https://vercel.com)
3. Deploy otomatis

### Manual

```bash
npm run build
npm run start
```

## SEO & Performance

- ✅ Metadata optimized untuk setiap halaman
- ✅ OpenGraph tags untuk social media
- ✅ Structured Data (JSON-LD) untuk rich results
- ✅ Canonical URLs
- ✅ Image optimization dengan Next.js Image
- ✅ Font optimization dengan next/font
- ✅ Lazy loading images

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## License

© 2025 travelbanyuwangi.id - All rights reserved

## Credits

Website by Josjis Studio
