import { Metadata } from 'next';
import Image from 'next/image';
import Header from '../components/Header';
import Footer from '../components/Footer';

export const metadata: Metadata = {
  title: 'Galeri Armada & Kegiatan | travelbanyuwangi.id',
  description: 'Galeri foto armada travel, bus, kegiatan wisata wali, umroh, dan testimoni pelanggan travelbanyuwangi.id. Lihat fasilitas kami.',
  keywords: 'galeri travel banyuwangi, foto armada travel banyuwangi, foto bus wisata banyuwangi, kegiatan umroh travel banyuwangi',
  authors: [{ name: 'travelbanyuwangi.id' }],
  openGraph: {
    title: 'Galeri Armada & Kegiatan | travelbanyuwangi.id',
    description: 'Galeri foto armada travel, bus, kegiatan wisata wali, umroh, dan testimoni pelanggan travelbanyuwangi.id.',
    type: 'website',
    url: 'https://travelbanyuwangi.id/galeri',
    images: [
      {
        url: 'https://placehold.co/1200x630/0077B6/FFFFFF?text=Galeri+Kami',
        width: 1200,
        height: 630,
        alt: 'Galeri travelbanyuwangi.id',
      },
    ],
    siteName: 'travelbanyuwangi.id',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Galeri Armada & Kegiatan | travelbanyuwangi.id',
    description: 'Galeri foto armada travel, bus, kegiatan wisata wali, umroh, dan testimoni pelanggan travelbanyuwangi.id.',
    images: ['https://placehold.co/1200x630/0077B6/FFFFFF?text=Galeri+Kami'],
  },
  alternates: {
    canonical: 'https://travelbanyuwangi.id/galeri',
  },
};

// Structured Data for ImageGallery
const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'ImageGallery',
  name: 'Galeri travelbanyuwangi.id',
  description: 'Galeri foto armada, pelanggan, dan kegiatan kami.',
  url: 'https://travelbanyuwangi.id/galeri',
  image: [
    {
      '@type': 'ImageObject',
      name: 'Armada HiAce',
      contentUrl: 'https://placehold.co/600x400/0077B6/FFFFFF?text=Armada+HiAce',
    },
    {
      '@type': 'ImageObject',
      name: 'Interior Armada',
      contentUrl: 'https://placehold.co/600x400/00B894/FFFFFF?text=Interior+Armada',
    },
    {
      '@type': 'ImageObject',
      name: 'Kegiatan Wisata Wali',
      contentUrl: 'https://placehold.co/600x400/F79E1B/FFFFFF?text=Kegiatan+Wisata+Wali',
    },
    {
      '@type': 'ImageObject',
      name: 'Dokumentasi Umroh',
      contentUrl: 'https://placehold.co/600x400/1E293B/FFFFFF?text=Dokumentasi+Umroh',
    },
  ],
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': 'https://travelbanyuwangi.id/galeri',
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
      name: 'Galeri',
      item: 'https://travelbanyuwangi.id/galeri',
    },
  ],
};

// Gallery Data
const armadaPhotos = [
  {
    id: 1,
    image: 'https://placehold.co/600x400/0077B6/FFFFFF?text=Armada+HiAce',
    title: 'Armada Toyota HiAce',
    description: 'Nyaman untuk rombongan kecil.',
    alt: 'Armada Toyota HiAce travel banyuwangi',
  },
  {
    id: 2,
    image: 'https://placehold.co/600x400/00B894/FFFFFF?text=Interior+Armada',
    title: 'Interior Bersih & Nyaman',
    description: 'Kursi captain seat (opsional).',
    alt: 'Interior Armada Bersih travel banyuwangi',
  },
  {
    id: 3,
    image: 'https://placehold.co/600x400/1E293B/FFFFFF?text=Armada+Innova+Reborn',
    title: 'Armada Innova Reborn',
    description: 'Untuk perjalanan dinas & privat.',
    alt: 'Armada Innova Reborn travel banyuwangi',
  },
  {
    id: 4,
    image: 'https://placehold.co/600x400/0077B6/EEEEEE?text=Bus+Pariwisata',
    title: 'Bus Pariwisata',
    description: 'Untuk rombongan besar wisata & ziarah.',
    alt: 'Bus Pariwisata travel banyuwangi',
  },
  {
    id: 5,
    image: 'https://placehold.co/600x400/00B894/EEEEEE?text=Perawatan+Armada',
    title: 'Perawatan Rutin',
    description: 'Memastikan armada selalu prima.',
    alt: 'Perawatan Armada travel banyuwangi',
  },
  {
    id: 6,
    image: 'https://placehold.co/600x400/1E293B/EEEEEE?text=Armada+Elf',
    title: 'Isuzu Elf Long',
    description: 'Kapasitas lebih banyak.',
    alt: 'Armada Isuzu Elf travel banyuwangi',
  },
];

const wisataPhotos = [
  {
    id: 1,
    image: 'https://placehold.co/600x400/F79E1B/FFFFFF?text=Wisata+Wali+5',
    title: 'Rombongan Wisata Wali 5',
    description: 'Ziarah dengan bus pariwisata.',
    alt: 'Rombongan Wisata Wali 5',
  },
  {
    id: 2,
    image: 'https://placehold.co/600x400/F79E1B/DDDDDD?text=Wisata+Wali+9',
    title: 'Rombongan Wisata Wali 9',
    description: 'Perjalanan lintas Jawa.',
    alt: 'Rombongan Wisata Wali 9',
  },
  {
    id: 3,
    image: 'https://placehold.co/600x400/F79E1B/EEEEEE?text=Pelanggan+Travel',
    title: 'Pelanggan Bahagia',
    description: 'Siap diantar ke tujuan.',
    alt: 'Pelanggan travel',
  },
];

const umrohPhotos = [
  {
    id: 1,
    image: 'https://placehold.co/600x400/003450/FFFFFF?text=Manasik+Umroh',
    title: 'Manasik Umroh',
    description: 'Pembekalan sebelum berangkat.',
    alt: 'Manasik Umroh Banyuwangi',
  },
  {
    id: 2,
    image: 'https://placehold.co/600x400/003450/DDDDDD?text=Jamaah+di+Madinah',
    title: 'Jamaah di Madinah',
    description: 'Bersama di Masjid Nabawi.',
    alt: 'Jamaah Umroh di Madinah',
  },
  {
    id: 3,
    image: 'https://placehold.co/600x400/003450/EEEEEE?text=Jamaah+di+Mekkah',
    title: 'Jamaah di Mekkah',
    description: 'Di depan Ka\'bah.',
    alt: 'Jamaah Umroh di Mekkah',
  },
];

export default function GaleriPage() {
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
              <span className="text-dark font-medium">Galeri</span>
            </nav>
            <h1 className="text-4xl md:text-5xl font-extrabold text-dark">
              Galeri Armada & Kegiatan
            </h1>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
              Lihat lebih dekat armada, fasilitas, dan dokumentasi kegiatan kami.
            </p>
          </div>
        </section>

        {/* Gallery Grid Section */}
        <section id="galeri-grid" className="py-20 bg-white">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            
            {/* Category 1: Armada */}
            <div className="mb-16">
              <h2 className="text-3xl font-extrabold text-dark mb-8 text-center">
                Armada Kami
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {armadaPhotos.map((photo) => (
                  <div key={photo.id} className="group overflow-hidden rounded-lg shadow-lg">
                    <div className="relative w-full h-64 overflow-hidden">
                      <Image
                        src={photo.image}
                        alt={photo.alt}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-4 bg-white">
                      <h3 className="font-semibold text-lg text-gray-700">{photo.title}</h3>
                      <p className="text-sm text-gray-600">{photo.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Category 2: Wisata & Ziarah */}
            <div className="mb-16">
              <h2 className="text-3xl font-extrabold text-dark mb-8 text-center">
                Kegiatan Wisata & Ziarah
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {wisataPhotos.map((photo) => (
                  <div key={photo.id} className="group overflow-hidden rounded-lg shadow-lg">
                    <div className="relative w-full h-64 overflow-hidden">
                      <Image
                        src={photo.image}
                        alt={photo.alt}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-4 bg-white">
                      <h3 className="font-semibold text-lg text-gray-700">{photo.title}</h3>
                      <p className="text-sm text-gray-600">{photo.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Category 3: Umroh & Haji */}
            <div className="mb-16">
              <h2 className="text-3xl font-extrabold text-dark mb-8 text-center">
                Dokumentasi Umroh & Haji
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {umrohPhotos.map((photo) => (
                  <div key={photo.id} className="group overflow-hidden rounded-lg shadow-lg">
                    <div className="relative w-full h-64 overflow-hidden">
                      <Image
                        src={photo.image}
                        alt={photo.alt}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-4 bg-white">
                      <h3 className="font-semibold text-lg text-gray-700">{photo.title}</h3>
                      <p className="text-sm text-gray-600">{photo.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="kontak" className="py-20 bg-primary text-white">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-extrabold">
              Tertarik dengan Fasilitas Kami?
            </h2>
            <p className="mt-4 text-lg text-gray-200 max-w-2xl mx-auto">
              Hubungi kami via WhatsApp untuk booking travel, sewa armada, atau konsultasi paket wisata dan umroh Anda.
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
