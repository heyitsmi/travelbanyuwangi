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
  canonicalUrl: "https://juragantravel.com/halaman-baru",
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
  title: "Travel Banyuwangi Surabaya | Juragan Travel",
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

© 2025 Juragan Travel - All rights reserved

---

## Blog System - Dynamic Content with Markdown

**Implemented**: 2025-11-03

### Overview
Sistem blog dinamis yang membaca file Markdown dari folder `/content` dan menampilkannya secara otomatis di halaman blog.

### Files Created:
- `/app/blog/page.tsx` - Blog listing page
- `/app/blog/[slug]/page.tsx` - Blog detail page with full template
- `/lib/blog.ts` - Helper functions untuk membaca markdown files
- `/content/example-post.md` - Contoh artikel 1
- `/content/panduan-wisata-wali-5.md` - Contoh artikel 2
- `BLOG-GUIDE.md` - Dokumentasi lengkap
- `BLOG-README.md` - Quick start guide

### Features Implemented:
✅ **Dynamic Content** - Otomatis membaca semua file `.md` dari `/content`  
✅ **Front-matter Parsing** - Metadata (title, date, category, image, etc)  
✅ **Auto Filter** - Hanya tampilkan post dengan `published: true`  
✅ **SEO Optimized** - Complete metadata + structured data  
✅ **Share Buttons** - Facebook, WhatsApp, Twitter dengan proper URLs  
✅ **Responsive Design** - 2-column layout (stacks on mobile)  
✅ **Sidebar Widgets** - Categories, popular posts, CTA (sticky)  
✅ **Rich Typography** - Tailwind prose classes untuk styling konten  
✅ **Image Optimization** - Next.js Image component  
✅ **Markdown Rendering** - react-markdown untuk konversi MD ke HTML  

### Blog Detail Page Fix:

**Problem**: Error 404 saat akses `/blog/example-post`

**Root Cause**:
- Next.js 16 menggunakan async params
- Missing `dynamicParams` export
- Improper async/await handling

**Solution**:
```typescript
// Added dynamicParams export
export const dynamicParams = true;

// Fixed async params handling
export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params; // ✅ Await params
  const post = await getBlogPost(slug);
  // ...
}
```

### Template Implementation:

**Layout Structure**:
```
┌─────────────────────────────────────┐
│  Breadcrumb: Home / Blog / Title   │
├──────────────────┬──────────────────┤
│                  │                  │
│  Article Content │   Sidebar        │
│  - Category      │   - Categories   │
│  - Title         │   - Popular      │
│  - Date/Author   │   - CTA (sticky) │
│  - Image         │                  │
│  - Markdown      │                  │
│  - Share Buttons │                  │
│                  │                  │
└──────────────────┴──────────────────┘
│  Back to Blog Link                  │
└─────────────────────────────────────┘
```

### Packages Installed:
```bash
npm install gray-matter react-markdown
```

- **gray-matter**: Parse YAML front-matter dari Markdown
- **react-markdown**: Render Markdown ke React components

### Usage:

1. **Buat file markdown** di `/content/nama-artikel.md`
2. **Tambahkan front-matter**:
```markdown
---
title: "Judul Artikel"
excerpt: "Ringkasan singkat"
date: "2025-01-15"
author: "Penulis"
category: "Tips Travel"
image: "https://url-gambar.jpg"
published: true
---

# Konten artikel di sini...
```
3. **Simpan** - Artikel otomatis muncul di `/blog`

### SEO Features:

**Metadata**:
- Title, description, keywords
- OpenGraph (dengan article type)
- Twitter Card
- Canonical URL
- Published time
- Author information

**Structured Data**:
```json
{
  "@type": "BlogPosting",
  "headline": "...",
  "datePublished": "...",
  "author": {...},
  "publisher": {...}
}
```

### Styling Classes:

**Article Content** (Tailwind Typography):
- Headings: Bold, proper sizing
- Links: Primary color with hover effect
- Lists: Proper indentation
- Blockquotes: Left border, italic
- Images: Rounded corners, shadow
- Code: Monospace with background

**Share Buttons**:
- Facebook: Blue (#1877F2)
- WhatsApp: Green (#25D366)
- Twitter: Gray (#1DA1F2)

### Documentation:

Lihat dokumentasi lengkap di:
- **BLOG-README.md** - Quick start
- **BLOG-GUIDE.md** - Panduan lengkap dengan contoh

---

## Credits

Website by Josjis Studio
