import { Metadata } from 'next';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ContactForm from '../components/ContactForm';
// Icons tidak digunakan lagi karena kolom informasi kontak dihapus

export const metadata: Metadata = {
  title: 'Kontak Kami | Juragan Travel | Agen Travel Banyuwangi',
  description: 'Kirim pertanyaan atau permintaan pemesanan travel Banyuwangi, paket wisata, dan layanan lainnya melalui formulir kontak.',
  keywords: 'kontak travel banyuwangi, alamat travel banyuwangi, hubungi Juragan Travel',
  authors: [{ name: 'Juragan Travel' }],
  openGraph: {
    title: 'Kontak Kami | Juragan Travel',
    description: 'Kirim permintaan pemesanan travel, paket wisata, atau layanan lainnya melalui formulir kontak.',
    type: 'website',
    url: 'https://juragantravel.com/kontak',
    images: [
      {
        url: 'https://juragantravel.com/img/hero.webp',
        width: 1200,
        height: 630,
        alt: 'Kontak Juragan Travel',
      },
    ],
    siteName: 'Juragan Travel',
    locale: 'id_ID',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kontak Kami | Juragan Travel',
    description: 'Kirim permintaan pemesanan travel, paket wisata, atau layanan lainnya melalui formulir kontak.',
    images: ['https://juragantravel.com/img/hero.webp'],
    creator: '@juragantravel',
    site: '@juragantravel',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://juragantravel.com/kontak',
  },
};

// Structured Data for ContactPage & TravelAgency
const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  name: 'Kontak Kami',
  url: 'https://juragantravel.com/kontak',
  description: 'Halaman kontak resmi Juragan Travel. Kirim pertanyaan atau permintaan melalui formulir kontak.',
  mainEntity: {
    '@type': 'TravelAgency',
    name: 'Juragan Travel',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Jl. Raya Jember No. 1',
      addressLocality: 'Banyuwangi',
      addressRegion: 'Jawa Timur',
      postalCode: '68416',
      addressCountry: 'ID',
    },
    url: 'https://juragantravel.com/',
    logo: 'https://juragantravel.com/img/brand/logo-dark.webp',
    openingHours: 'Mo-Su 00:00-23:59',
    sameAs: [
      'https://www.facebook.com/juragantravel.id',
      'https://www.instagram.com/juragantravel_id',
    ],
  },
};

// Breadcrumb Structured Data
const breadcrumbStructuredData = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Beranda',
      item: 'https://juragantravel.com',
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'Kontak',
      item: 'https://juragantravel.com/kontak',
    },
  ],
};

export default function KontakPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbStructuredData) }}
      />

      <Header />

      <main>
        {/* Hero Section */}
        <section className="bg-light py-20">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <nav className="text-sm mb-4">
              <a href="/" className="text-gray-600 hover:text-primary">
                Beranda
              </a>
              <span className="text-gray-400 mx-2">/</span>
              <span className="text-dark font-medium">Kontak</span>
            </nav>
            <h1 className="text-4xl md:text-5xl font-extrabold text-dark">
              Hubungi Kami
            </h1>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
              Punya pertanyaan atau siap memesan? Tim kami siap membantu Anda 24/7.
            </p>
          </div>
        </section>

        {/* Contact Form Section */}
        <section id="contact-form" className="py-20 bg-white">
          <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="bg-light p-8 rounded-lg shadow-lg">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-dark">
                  Kirim Pesan Kepada Kami
                </h2>
                <p className="mt-2 text-lg text-gray-600">
                  Kami akan membalas pesan Anda secepatnya.
                </p>
              </div>

              <ContactForm />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
