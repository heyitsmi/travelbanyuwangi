# Panduan Penggunaan Dynamic SEO Component

Component SEO di project ini memungkinkan Anda untuk dengan mudah menambahkan metadata SEO yang lengkap ke setiap halaman.

## Import Component

```typescript
import { generateMetadata, StructuredData } from "./components/SEO";
import type { SEOProps } from "./components/SEO";
```

## Contoh Penggunaan

### 1. SEO Metadata (untuk tag meta HTML)

Di file `page.tsx` Anda:

```typescript
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Judul Halaman - Juragan Travel",
  description: "Deskripsi lengkap halaman ini untuk mesin pencari",
  keywords: "travel banyuwangi, keyword2, keyword3",
  authors: [{ name: "Juragan Travel" }],
  openGraph: {
    title: "Judul untuk Facebook/Twitter",
    description: "Deskripsi untuk social media",
    type: "website",
    url: "https://juragantravel.com/halaman",
    images: [
      {
        url: "https://placehold.co/1200x630/0077B6/FFFFFF?text=Gambar",
        width: 1200,
        height: 630,
      },
    ],
    siteName: "Juragan Travel",
  },
  twitter: {
    card: "summary_large_image",
    title: "Judul untuk Twitter",
    description: "Deskripsi untuk Twitter",
    images: ["https://placehold.co/1200x630/0077B6/FFFFFF?text=Gambar"],
  },
  alternates: {
    canonical: "https://juragantravel.com/halaman",
  },
};
```

### 2. Structured Data (JSON-LD)

Untuk Rich Results di Google:

```typescript
export default function HalamanTravel() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "TravelAgency",
    name: "Juragan Travel",
    description: "Deskripsi travel agency",
    telephone: "+6282143258744",
    url: "https://juragantravel.com/",
    // ... data lainnya
  };

  return (
    <>
      <StructuredData data={structuredData} />
      <div>
        {/* Konten halaman */}
      </div>
    </>
  );
}
```

## Jenis Structured Data yang Umum

### Travel Agency (Sudah dipakai di Home)

```typescript
{
  "@context": "https://schema.org",
  "@type": "TravelAgency",
  "name": "Juragan Travel",
  "description": "Layanan travel...",
  "telephone": "+6282143258744",
  "url": "https://juragantravel.com/",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Jl. Raya Jember No. 1",
    "addressLocality": "Banyuwangi",
    "addressRegion": "Jawa Timur",
    "postalCode": "68416",
    "addressCountry": "ID"
  },
  "openingHours": "Mo-Su 00:00-23:59",
  "priceRange": "$$"
}
```

### Service (untuk halaman rute spesifik)

```typescript
{
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Travel Service",
  "provider": {
    "@type": "TravelAgency",
    "name": "Juragan Travel"
  },
  "areaServed": {
    "@type": "City",
    "name": "Banyuwangi"
  },
  "offers": {
    "@type": "Offer",
    "price": "150000",
    "priceCurrency": "IDR",
    "description": "Travel Banyuwangi - Surabaya"
  }
}
```

### FAQ Page (Sudah dipakai di Home)

```typescript
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Pertanyaan?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Jawaban lengkap..."
      }
    }
  ]
}
```

### BreadcrumbList (untuk navigasi)

```typescript
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://juragantravel.com/"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Travel Surabaya",
      "item": "https://juragantravel.com/travel-banyuwangi-surabaya"
    }
  ]
}
```

## Tips SEO

### 1. Title Tag
- Maksimal 60 karakter
- Sertakan keyword utama
- Buat unik untuk setiap halaman
- Format: "Keyword | Brand Name"

### 2. Meta Description
- Maksimal 160 karakter
- Buat deskripsi yang menarik (call to action)
- Sertakan keyword target
- Jangan duplikasi

### 3. Keywords
- 5-10 keyword yang relevan
- Pisahkan dengan koma
- Fokus pada long-tail keywords
- Contoh: "travel banyuwangi surabaya, travel banyuwangi malang"

### 4. Open Graph Images
- Ukuran: 1200x630px
- Format: JPG atau PNG
- Maksimal ukuran: 5MB
- Pastikan ada text/logo yang visible

### 5. Canonical URL
- Selalu set canonical URL
- Hindari duplicate content
- Format: https://domain.com/halaman (tanpa trailing slash kecuali homepage)

## Testing SEO

### Tools untuk Testing:

1. **Google Rich Results Test**
   - https://search.google.com/test/rich-results
   - Test structured data

2. **Facebook Sharing Debugger**
   - https://developers.facebook.com/tools/debug/
   - Test Open Graph tags

3. **Twitter Card Validator**
   - https://cards-dev.twitter.com/validator
   - Test Twitter Cards

4. **PageSpeed Insights**
   - https://pagespeed.web.dev/
   - Test performance dan Core Web Vitals

5. **Google Search Console**
   - Setelah deploy, submit sitemap
   - Monitor index status dan errors

## Checklist untuk Setiap Halaman Baru

- [ ] Set unique title (60 karakter max)
- [ ] Set unique description (160 karakter max)
- [ ] Set keywords yang relevan
- [ ] Set canonical URL
- [ ] Set Open Graph image (1200x630px)
- [ ] Tambahkan structured data jika perlu
- [ ] Test dengan Rich Results Test
- [ ] Test dengan Facebook Debugger
- [ ] Pastikan H1 hanya satu dan sesuai title
- [ ] Gunakan H2-H6 dengan struktur yang benar
- [ ] Alt text untuk semua gambar

## Contoh Lengkap Halaman Baru

```typescript
// app/travel-banyuwangi-surabaya/page.tsx

import { Metadata } from "next";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { StructuredData } from "../components/SEO";

// SEO Metadata
export const metadata: Metadata = {
  title: "Travel Banyuwangi Surabaya - Booking Online 24 Jam | Juragan Travel",
  description: "Layanan travel Banyuwangi Surabaya door-to-door. Berangkat setiap hari, armada nyaman, harga terjangkau. Booking via WhatsApp 24 jam.",
  keywords: "travel banyuwangi surabaya, travel banyuwangi ke surabaya, agen travel banyuwangi surabaya",
  authors: [{ name: "Juragan Travel" }],
  openGraph: {
    title: "Travel Banyuwangi Surabaya | Juragan Travel",
    description: "Layanan travel Banyuwangi Surabaya door-to-door. Berangkat setiap hari.",
    type: "website",
    url: "https://juragantravel.com/travel-banyuwangi-surabaya",
    images: [{
      url: "https://juragantravel.com/images/surabaya-og.jpg",
      width: 1200,
      height: 630,
    }],
    siteName: "Juragan Travel",
  },
  twitter: {
    card: "summary_large_image",
    title: "Travel Banyuwangi Surabaya | Juragan Travel",
    description: "Layanan travel Banyuwangi Surabaya door-to-door",
    images: ["https://juragantravel.com/images/surabaya-og.jpg"],
  },
  alternates: {
    canonical: "https://juragantravel.com/travel-banyuwangi-surabaya",
  },
};

// Structured Data
const serviceData = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Travel Service",
  "provider": {
    "@type": "TravelAgency",
    "name": "Juragan Travel",
    "telephone": "+6282143258744"
  },
  "areaServed": [
    {
      "@type": "City",
      "name": "Banyuwangi"
    },
    {
      "@type": "City",
      "name": "Surabaya"
    }
  ],
  "offers": {
    "@type": "Offer",
    "price": "150000",
    "priceCurrency": "IDR",
    "description": "Travel Banyuwangi - Surabaya door-to-door"
  }
};

const breadcrumbData = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://juragantravel.com/"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Travel Banyuwangi Surabaya",
      "item": "https://juragantravel.com/travel-banyuwangi-surabaya"
    }
  ]
};

export default function TravelSurabaya() {
  return (
    <>
      <StructuredData data={serviceData} />
      <StructuredData data={breadcrumbData} />
      
      <div className="bg-white antialiased">
        <Header />
        
        <main>
          <section className="py-20 bg-white">
            <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <h1 className="text-4xl md:text-5xl font-extrabold text-dark">
                Travel Banyuwangi Surabaya
              </h1>
              
              {/* Konten halaman */}
            </div>
          </section>
        </main>
        
        <Footer />
      </div>
    </>
  );
}
```

## Resources

- [Google Search Central](https://developers.google.com/search)
- [Schema.org Documentation](https://schema.org/)
- [Next.js Metadata](https://nextjs.org/docs/app/building-your-application/optimizing/metadata)
- [Open Graph Protocol](https://ogp.me/)
