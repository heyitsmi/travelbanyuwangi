import { Metadata } from 'next';
import Image from 'next/image';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Eye, Target } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Tentang Kami | Agen Travel Banyuwangi Terpercaya | Juragan Travel',
  description: 'Pelajari lebih lanjut tentang Juragan Travel, agen travel Banyuwangi terpercaya. Lihat visi, misi, dan komitmen kami untuk layanan travel terbaik ke Surabaya, Malang, dan Denpasar.',
  keywords: 'agen travel banyuwangi terpercaya, tentang Juragan Travel, profil agen travel banyuwangi, visi misi travel banyuwangi',
  authors: [{ name: 'Juragan Travel' }],
  openGraph: {
    title: 'Tentang Kami | Agen Travel Banyuwangi Terpercaya | Juragan Travel',
    description: 'Kenali tim, visi, dan misi Juragan Travel, agen travel pilihan Anda di Banyuwangi.',
    type: 'website',
    url: 'https://juragantravel.com/tentang-kami',
    images: [
      {
        url: '/img/hero.webp',
        width: 1200,
        height: 630,
        alt: 'Tentang Kami Juragan Travel',
      },
    ],
    siteName: 'Juragan Travel',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tentang Kami | Agen Travel Banyuwangi Terpercaya | Juragan Travel',
    description: 'Kenali tim, visi, dan misi Juragan Travel, agen travel pilihan Anda di Banyuwangi.',
    images: ['/img/hero.webp'],
  },
  alternates: {
    canonical: 'https://juragantravel.com/tentang-kami',
  },
};

// Structured Data for About Page
const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Tentang Kami | Juragan Travel',
  description: 'Mengenal lebih dekat Juragan Travel sebagai agen travel terpercaya di Banyuwangi.',
  mainEntity: {
    '@type': 'TravelAgency',
    name: 'Juragan Travel',
    description: 'Layanan travel antar kota aman & nyaman dari Banyuwangi ke Surabaya, Malang, Denpasar, dan seluruh Jawa Bali. Berangkat setiap hari.',
    telephone: '+6282143258744',
    url: 'https://juragantravel.com/',
    image: '/img/hero.webp',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Jl. Raya Jember No. 1',
      addressLocality: 'Banyuwangi',
      addressRegion: 'Jawa Timur',
      postalCode: '68416',
      addressCountry: 'ID',
    },
    openingHours: 'Mo-Su 00:00-23:59',
    priceRange: '$$',
  },
};

// Fleet gallery data
const fleetGallery = [
  {
    id: 1,
    image: 'https://placehold.co/400x400/CCCCCC/FFFFFF?text=Armada+Luar',
    alt: 'Armada eksterior travel banyuwangi (Hiace)',
  },
  {
    id: 2,
    image: 'https://placehold.co/400x400/BBBBBB/FFFFFF?text=Interior+Mobil',
    alt: 'Armada interior travel banyuwangi (bersih)',
  },
  {
    id: 3,
    image: 'https://placehold.co/400x400/AAAAAA/FFFFFF?text=Armada+Elf',
    alt: 'Armada Elf travel banyuwangi',
  },
  {
    id: 4,
    image: 'https://placehold.co/400x400/999999/FFFFFF?text=Armada+Siap+Berangkat',
    alt: 'Armada travel banyuwangi siap berangkat',
  },
];

// Mission points
const missionPoints = [
  'Selalu mengutamakan keselamatan dan kenyamanan pelanggan.',
  'Menyediakan armada yang bersih, terawat, dan modern.',
  'Mendidik driver agar profesional, ramah, dan menguasai rute.',
  'Memberikan kemudahan booking dan layanan pelanggan yang responsif.',
  'Menjaga amanah dan kepercayaan pelanggan dengan jujur.',
];

export default function TentangKamiPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <Header />

      <main>
        {/* Hero Section */}
        <section className="bg-light py-20">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold text-dark">
              Tentang Kami
            </h1>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              Mengenal Lebih Dekat Juragan Travel, Partner Perjalanan Tepercaya Anda.
            </p>
          </div>
        </section>

        {/* Profile Section */}
        <section id="profil" className="py-20 bg-white">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row-reverse items-center gap-12">
              
              {/* Profile Image */}
              <div className="md:w-1/2">
                <div className="relative w-full h-96 rounded-lg shadow-xl overflow-hidden">
                  <Image
                    src="https://placehold.co/600x450/00B894/FFFFFF?text=[Foto+Tim+Juragan Travel]"
                    alt="Tim agen travel Banyuwangi terpercaya Juragan Travel"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Profile Text */}
              <div className="md:w-1/2">
                <span className="text-secondary font-semibold uppercase">
                  Profil Perusahaan
                </span>
                <h2 className="mt-2 text-3xl md:text-4xl font-extrabold text-dark">
                  Agen Travel Banyuwangi Terpercaya Sejak 2015
                </h2>
                <p className="mt-6 text-lg text-gray-700 leading-relaxed">
                  <strong>Juragan Travel</strong> adalah{' '}
                  <strong>agen travel Banyuwangi terpercaya</strong> yang telah
                  melayani ribuan pelanggan sejak tahun 2015. Kami berawal dari sebuah
                  komitmen untuk menyediakan transportasi yang aman, nyaman, dan tepat
                  waktu dari Banyuwangi ke berbagai kota besar di Jawa dan Bali.
                </p>
                <p className="mt-4 text-lg text-gray-700 leading-relaxed">
                  Kami bukan sekadar penyedia jasa transportasi, kami adalah partner
                  perjalanan Anda. Dengan pengalaman lebih dari 8 tahun, kami memahami
                  pentingnya kenyamanan, keamanan, dan pelayanan yang ramah dalam setiap
                  perjalanan.
                </p>
              </div>
            </div>

            {/* Vision & Mission */}
            <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Vision */}
              <div className="bg-light p-8 rounded-lg shadow-md">
                <div className="flex items-center space-x-4">
                  <Eye className="w-10 h-10 text-primary shrink-0" />
                  <h3 className="text-3xl font-bold text-dark">Visi Kami</h3>
                </div>
                <p className="mt-4 text-lg text-gray-700">
                  Menjadi agen travel lokal Banyuwangi yang paling direkomendasikan dan
                  terdepan dalam kualitas pelayanan, keamanan, serta kenyamanan di
                  seluruh rute Jawa dan Bali.
                </p>
              </div>

              {/* Mission */}
              <div className="bg-light p-8 rounded-lg shadow-md">
                <div className="flex items-center space-x-4">
                  <Target className="w-10 h-10 text-secondary shrink-0" />
                  <h3 className="text-3xl font-bold text-dark">Misi Kami</h3>
                </div>
                <ul className="mt-4 space-y-3 text-lg text-gray-700 list-disc list-inside">
                  {missionPoints.map((point, index) => (
                    <li key={index}>{point}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Fleet Gallery Section */}
        <section id="galeri-armada" className="py-20 bg-light">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            {/* Section Title */}
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-extrabold text-dark">
                Armada Kebanggaan Kami
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                Armada kami bersih, terawat, dan siap mengantar Anda.
              </p>
            </div>

            {/* Gallery Grid */}
            <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
              {fleetGallery.map((item) => (
                <div key={item.id} className="group aspect-square relative">
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    className="object-cover rounded-lg shadow-md group-hover:opacity-80 transition-opacity"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="kontak" className="py-20 bg-primary text-white">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-extrabold">
              Percayakan Perjalanan Anda Kepada Kami
            </h2>
            <p className="mt-4 text-lg text-gray-200 max-w-2xl mx-auto">
              Rasakan pengalaman travel yang berbeda dengan layanan profesional dari
              agen travel Banyuwangi terpercaya.
            </p>
            <a
              href="https://wa.me/6282143258744"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-10 inline-block bg-accent text-white px-10 py-3 rounded-lg font-bold text-lg shadow-lg hover:bg-opacity-90 transition-all transform hover:-translate-y-1"
            >
              Hubungi Kami Sekarang
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
