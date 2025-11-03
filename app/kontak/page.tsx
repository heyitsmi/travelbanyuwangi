import { Metadata } from 'next';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Smartphone, MapPin, Clock, Mail, Facebook, Instagram, Music2 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Kontak Kami | travelbanyuwangi.id | Agen Travel Banyuwangi',
  description: 'Hubungi kami untuk pemesanan travel Banyuwangi, paket wisata, atau layanan lainnya. Tersedia via WhatsApp 24 jam. Lihat lokasi kami di Google Maps.',
  keywords: 'kontak travel banyuwangi, alamat travel banyuwangi, nomor wa travel banyuwangi, hubungi travelbanyuwangi.id',
  authors: [{ name: 'travelbanyuwangi.id' }],
  openGraph: {
    title: 'Kontak Kami | travelbanyuwangi.id',
    description: 'Hubungi kami untuk pemesanan travel, paket wisata, atau layanan lainnya. Tersedia via WhatsApp 24 jam.',
    type: 'website',
    url: 'https://travelbanyuwangi.id/kontak',
    images: [
      {
        url: '/img/hero.webp',
        width: 1200,
        height: 630,
        alt: 'Kontak travelbanyuwangi.id',
      },
    ],
    siteName: 'travelbanyuwangi.id',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kontak Kami | travelbanyuwangi.id',
    description: 'Hubungi kami untuk pemesanan travel, paket wisata, atau layanan lainnya. Tersedia via WhatsApp 24 jam.',
    images: ['/img/hero.webp'],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://travelbanyuwangi.id/kontak',
  },
};

// Structured Data for ContactPage & TravelAgency
const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  name: 'Kontak Kami',
  url: 'https://travelbanyuwangi.id/kontak',
  description: 'Halaman kontak resmi travelbanyuwangi.id. Hubungi kami via WA, telepon, email, atau kunjungi kantor kami.',
  mainEntity: {
    '@type': 'TravelAgency',
    name: 'travelbanyuwangi.id',
    telephone: '+6282143258744',
    email: 'info@travelbanyuwangi.id',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Jl. Raya Jember No. 1',
      addressLocality: 'Banyuwangi',
      addressRegion: 'Jawa Timur',
      postalCode: '68416',
      addressCountry: 'ID',
    },
    url: 'https://travelbanyuwangi.id/',
    logo: 'https://placehold.co/32x32/0077B6/FFFFFF?text=T',
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+6282143258744',
      contactType: 'Customer Service',
      areaServed: 'ID',
      availableLanguage: 'Indonesian',
    },
    openingHours: 'Mo-Su 00:00-23:59',
    sameAs: [
      'https://www.facebook.com/travelbanyuwangi.id',
      'https://www.instagram.com/travelbanyuwangi.id',
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
      item: 'https://travelbanyuwangi.id',
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'Kontak',
      item: 'https://travelbanyuwangi.id/kontak',
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

        {/* Contact Details Section */}
        <section id="contact-details" className="py-20 bg-white">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              
              {/* Left Column: Contact Information */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-bold text-dark">Informasi Kontak</h2>
                  <p className="mt-2 text-lg text-gray-600">
                    Cara tercepat menghubungi kami adalah melalui WhatsApp.
                  </p>
                </div>

                {/* WhatsApp Button */}
                <a
                  href="https://wa.me/6282143258744"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center p-6 bg-green-500 text-white rounded-lg shadow-lg hover:bg-green-600 transition-all text-left w-full"
                >
                  <Smartphone className="w-10 h-10 mr-4 shrink-0" />
                  <div>
                    <span className="text-lg font-semibold">
                      Klik untuk WhatsApp (Respon Cepat)
                    </span>
                    <span className="block text-2xl font-bold">0821-4325-8744</span>
                  </div>
                </a>

                {/* Other Contact Details */}
                <div className="space-y-4">
                  <div className="flex items-start">
                    <MapPin className="w-6 h-6 mr-4 text-primary shrink-0 mt-1" />
                    <div>
                      <h3 className="text-lg font-semibold text-dark">
                        Alamat Kantor/Garasi
                      </h3>
                      <p className="text-gray-700">
                        Jl. Raya Jember No. 1, Banyuwangi, Jawa Timur 68416
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Clock className="w-6 h-6 mr-4 text-primary shrink-0 mt-1" />
                    <div>
                      <h3 className="text-lg font-semibold text-dark">
                        Jam Operasional
                      </h3>
                      <p className="text-gray-700">Senin - Minggu: 24 Jam Non-Stop</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Mail className="w-6 h-6 mr-4 text-primary shrink-0 mt-1" />
                    <div>
                      <h3 className="text-lg font-semibold text-dark">Email</h3>
                      <p className="text-gray-700">info@travelbanyuwangi.id</p>
                    </div>
                  </div>
                </div>

                {/* Social Media */}
                <div>
                  <h3 className="text-lg font-semibold text-dark mb-3">Ikuti Kami</h3>
                  <div className="flex space-x-4">
                    <a
                      href="#"
                      className="flex items-center text-gray-600 hover:text-primary"
                    >
                      <Facebook className="w-6 h-6 mr-2" /> Facebook
                    </a>
                    <a
                      href="#"
                      className="flex items-center text-gray-600 hover:text-primary"
                    >
                      <Instagram className="w-6 h-6 mr-2" /> Instagram
                    </a>
                    <a
                      href="#"
                      className="flex items-center text-gray-600 hover:text-primary"
                    >
                      <Music2 className="w-6 h-6 mr-2" /> TikTok
                    </a>
                  </div>
                </div>
              </div>

              {/* Right Column: Contact Form */}
              <div className="bg-light p-8 rounded-lg shadow-lg">
                <h2 className="text-3xl font-bold text-dark">
                  Atau, Kirim Pesan di Sini
                </h2>
                <p className="mt-2 text-lg text-gray-600">
                  Kami akan membalas pesan Anda secepatnya.
                </p>

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
                        className="w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary px-4 py-2 border"
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
                        className="w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary px-4 py-2 border"
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
                        className="w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary px-4 py-2 border"
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
                        className="w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary px-4 py-2 border"
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
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
