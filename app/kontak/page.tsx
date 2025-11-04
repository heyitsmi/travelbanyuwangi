import { Metadata } from 'next';
import Header from '../components/Header';
import Footer from '../components/Footer';
// Icons tidak digunakan lagi karena kolom informasi kontak dihapus

export const metadata: Metadata = {
  title: 'Kontak Kami | Juragan Travel | Agen Travel Banyuwangi',
  description: 'Hubungi kami untuk pemesanan travel Banyuwangi, paket wisata, atau layanan lainnya. Tersedia via WhatsApp 24 jam. Lihat lokasi kami di Google Maps.',
  keywords: 'kontak travel banyuwangi, alamat travel banyuwangi, nomor wa travel banyuwangi, hubungi Juragan Travel',
  authors: [{ name: 'Juragan Travel' }],
  openGraph: {
    title: 'Kontak Kami | Juragan Travel',
    description: 'Hubungi kami untuk pemesanan travel, paket wisata, atau layanan lainnya. Tersedia via WhatsApp 24 jam.',
    type: 'website',
    url: 'https://juragantravel.com/kontak',
    images: [
      {
        url: '/img/hero.webp',
        width: 1200,
        height: 630,
        alt: 'Kontak Juragan Travel',
      },
    ],
    siteName: 'Juragan Travel',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kontak Kami | Juragan Travel',
    description: 'Hubungi kami untuk pemesanan travel, paket wisata, atau layanan lainnya. Tersedia via WhatsApp 24 jam.',
    images: ['/img/hero.webp'],
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
  description: 'Halaman kontak resmi Juragan Travel. Hubungi kami via WA, telepon, email, atau kunjungi kantor kami.',
  mainEntity: {
    '@type': 'TravelAgency',
    name: 'Juragan Travel',
    telephone: '+6282143258744',
    email: 'hi@juragantravel.com',
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
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+6282143258744',
      contactType: 'Customer Service',
      areaServed: 'ID',
      availableLanguage: 'Indonesian',
    },
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

              <form action="#" method="POST" className="mt-8 space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Nama Lengkap
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="name"
                      id="name"
                      autoComplete="name"
                      required
                      className="w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary px-4 py-2 border text-gray-900"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Email
                  </label>
                  <div className="mt-1">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      autoComplete="email"
                      required
                      className="w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary px-4 py-2 border text-gray-900"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Nomor Telepon/WA
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="phone"
                      id="phone"
                      autoComplete="tel"
                      required
                      className="w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary px-4 py-2 border text-gray-900"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Pesan
                  </label>
                  <div className="mt-1">
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      required
                      className="w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary px-4 py-2 border text-gray-900"
                    ></textarea>
                  </div>
                </div>
                <div>
                  <button
                    type="submit"
                    className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-lg font-bold text-white bg-primary hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-all"
                  >
                    Kirim Pesan
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
