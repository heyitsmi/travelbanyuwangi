import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { StructuredData } from "../../components/SEO";
import { Church, Bus, Hotel, Utensils, UserCheck, Ticket, Package } from "lucide-react";

export const metadata: Metadata = {
  title: "Paket Wisata Wali 5 dari Banyuwangi | travelbanyuwangi.id",
  description:
    "Harga paket wisata Wali 5 dari Banyuwangi (rombongan). Fasilitas lengkap: bus AC, hotel, makan, & guide. Perjalanan ziarah aman & nyaman. Pesan sekarang!",
  keywords:
    "paket wisata wali 5 banyuwangi, ziarah wali 5 dari banyuwangi, harga paket wali 5 banyuwangi, travel wisata wali banyuwangi, wisata rohani banyuwangi",
  authors: [{ name: "travelbanyuwangi.id" }],
  openGraph: {
    title: "Paket Wisata Wali 5 dari Banyuwangi | travelbanyuwangi.id",
    description: "Paket wisata ziarah Wali 5 (Jawa Timur) dari Banyuwangi. Fasilitas lengkap untuk rombongan.",
    type: "website",
    url: "https://travelbanyuwangi.id/layanan/wisata-wali-5",
    images: [
      {
        url: "https://placehold.co/1200x630/00B894/FFFFFF?text=Wisata+Wali+5",
        width: 1200,
        height: 630,
      },
    ],
    siteName: "travelbanyuwangi.id",
  },
  twitter: {
    card: "summary_large_image",
    title: "Paket Wisata Wali 5 dari Banyuwangi | travelbanyuwangi.id",
    description: "Paket wisata ziarah Wali 5 (Jawa Timur) dari Banyuwangi. Fasilitas lengkap untuk rombongan.",
    images: ["https://placehold.co/1200x630/00B894/FFFFFF?text=Wisata+Wali+5"],
  },
  alternates: {
    canonical: "https://travelbanyuwangi.id/layanan/wisata-wali-5",
  },
};

const serviceData = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Tour",
  provider: {
    "@type": "TravelAgency",
    name: "travelbanyuwangi.id",
    url: "https://travelbanyuwangi.id/",
  },
  name: "Paket Wisata Wali 5 dari Banyuwangi",
  description:
    "Paket wisata ziarah Wali 5 (Jawa Timur) lengkap dari Banyuwangi. Melayani rombongan dengan fasilitas bus pariwisata AC, hotel, makan, dan tour guide.",
  areaServed: [
    { "@type": "City", name: "Banyuwangi" },
    { "@type": "City", name: "Surabaya" },
    { "@type": "City", name: "Gresik" },
    { "@type": "City", name: "Lamongan" },
    { "@type": "City", name: "Tuban" },
  ],
  offers: {
    "@type": "Offer",
    name: "Paket Wisata Wali 5 (Rombongan)",
    category: "Tour",
    priceCurrency: "IDR",
    description: "Harga tergantung jumlah peserta dan fasilitas. Hubungi untuk penawaran.",
  },
};

const breadcrumbData = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Beranda",
      item: "https://travelbanyuwangi.id/",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Layanan",
      item: "https://travelbanyuwangi.id/layanan",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Wisata Wali 5",
      item: "https://travelbanyuwangi.id/layanan/wisata-wali-5",
    },
  ],
};

const destinations = [
  { name: "Sunan Ampel", location: "(Surabaya)" },
  { name: "Sunan Giri", location: "(Gresik)" },
  { name: "Sunan Gresik", location: "(Maulana Malik Ibrahim)" },
  { name: "Sunan Drajat", location: "(Lamongan)" },
  { name: "Sunan Bonang", location: "(Tuban)" },
];

const facilities = [
  {
    icon: Bus,
    title: "Bus Pariwisata AC",
    description: "Armada bus terbaru, bersih, full AC, dan dilengkapi audio/video.",
  },
  {
    icon: Hotel,
    title: "Akomodasi Hotel",
    description: "Menginap 1 malam di hotel yang bersih dan nyaman (sharing room).",
  },
  {
    icon: Utensils,
    title: "Makan Sesuai Program",
    description: "Konsumsi (makan pagi, siang, malam) ditanggung selama perjalanan.",
  },
  {
    icon: UserCheck,
    title: "Tour Leader / Guide",
    description: "Didampingi oleh pembimbing ziarah yang ramah dan berpengalaman.",
  },
  {
    icon: Ticket,
    title: "Tiket & Donasi",
    description: "Biaya tiket masuk wisata, parkir, dan donasi di lokasi ziarah.",
  },
  {
    icon: Package,
    title: "Perlengkapan",
    description: "Air mineral selama perjalanan dan P3K ringan.",
  },
];

export default function WisataWali5Page() {
  return (
    <>
      <StructuredData data={serviceData} />
      <StructuredData data={breadcrumbData} />
      <div className="bg-white antialiased">
        <Header />

        <main>
          {/* Hero Section */}
          <section className="bg-light py-20">
            <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
              <nav className="text-sm mb-4">
                <Link href="/" className="text-gray-600 hover:text-primary">
                  Beranda
                </Link>
                <span className="text-gray-400 mx-2">/</span>
                <Link href="/layanan" className="text-gray-600 hover:text-primary">
                  Layanan
                </Link>
                <span className="text-gray-400 mx-2">/</span>
                <span className="text-dark font-medium">Wisata Wali 5</span>
              </nav>
              <h1 className="text-4xl md:text-5xl font-extrabold text-dark">Paket Wisata Ziarah Wali 5</h1>
              <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
                Perjalanan rohani yang nyaman dan berkesan ke makam para wali di Jawa Timur, berangkat dari
                Banyuwangi.
              </p>
            </div>
          </section>

          {/* Detail Paket Section */}
          <section id="detail-paket" className="py-20 bg-white">
            <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              {/* Deskripsi Paket */}
              <div className="flex flex-col md:flex-row items-center gap-12 mb-20">
                <div className="md:w-1/2 relative h-96 w-full">
                  <Image
                    src="https://placehold.co/600x450/00B894/FFFFFF?text=Bus+Pariwisata+Wali+Songo"
                    alt="Bus pariwisata untuk paket wisata wali 5 banyuwangi"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="rounded-lg shadow-xl object-cover"
                  />
                </div>
                <div className="md:w-1/2">
                  <span className="text-secondary font-semibold uppercase">Ziarah Penuh Makna</span>
                  <h2 className="mt-2 text-3xl md:text-4xl font-extrabold text-dark">
                    Paket Wisata Wali 5 dari Banyuwangi
                  </h2>
                  <p className="mt-4 text-lg text-gray-700 leading-relaxed">
                    Kami menyediakan <strong>paket wisata Wali 5 dari Banyuwangi</strong> untuk rombongan, instansi,
                    pengajian, atau keluarga besar. Nikmati perjalanan ziarah yang terorganisir dengan baik, didampingi
                    oleh tour leader atau pembimbing berpengalaman.
                  </p>
                  <p className="mt-4 text-lg text-gray-700 leading-relaxed">
                    Fokus kami adalah kenyamanan Anda beribadah. Kami mengurus semua akomodasi, transportasi, dan
                    konsumsi sehingga Anda dan rombongan dapat khusyuk dalam berziarah.
                  </p>
                </div>
              </div>

              {/* Destinasi Ziarah */}
              <div className="mb-20">
                <div className="text-center">
                  <h2 className="text-3xl md:text-4xl font-extrabold text-dark">
                    Destinasi Ziarah Wali 5 (Jawa Timur)
                  </h2>
                  <p className="mt-4 text-lg text-gray-600">Mengunjungi 5 makam Auliya&apos; utama di Jawa Timur.</p>
                </div>
                <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                  {destinations.map((destination, index) => (
                    <div
                      key={index}
                      className="bg-light p-6 rounded-lg shadow-md text-center group hover:bg-white hover:shadow-lg transition-all"
                    >
                      <Church className="w-12 h-12 text-primary mx-auto" />
                      <h3 className="mt-4 text-xl font-bold text-dark">{destination.name}</h3>
                      <p className="text-gray-600">{destination.location}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Fasilitas Section */}
          <section id="fasilitas" className="py-20 bg-light">
            <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              {/* Judul Section */}
              <div className="text-center">
                <h2 className="text-3xl md:text-4xl font-extrabold text-dark">Fasilitas Paket Lengkap</h2>
                <p className="mt-4 text-lg text-gray-600">Kami memastikan kenyamanan Anda selama perjalanan.</p>
              </div>

              {/* Grid Fasilitas */}
              <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
                {facilities.map((facility, index) => {
                  const IconComponent = facility.icon;
                  return (
                    <div key={index} className="bg-white p-6 rounded-lg shadow-lg flex items-center space-x-4">
                      <IconComponent className="w-10 h-10 text-secondary shrink-0" />
                      <div>
                        <h3 className="text-xl font-bold text-dark">{facility.title}</h3>
                        <p className="text-gray-600">{facility.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section id="kontak" className="py-20 bg-primary text-white">
            <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
              <h2 className="text-3xl md:text-4xl font-extrabold">Rencanakan Ziarah Rombongan Anda</h2>
              <p className="mt-4 text-lg text-gray-200 max-w-2xl mx-auto">
                Harga <strong>paket wisata wali 5 Banyuwangi</strong> kami sangat fleksibel, tergantung jumlah peserta
                dan fasilitas yang diinginkan (hotel, jumlah makan, dll). Hubungi kami untuk mendapatkan penawaran
                harga terbaik.
              </p>
              <a
                href="https://wa.me/6282143258744"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-10 inline-block bg-accent text-white px-10 py-3 rounded-lg font-bold text-lg shadow-lg hover:bg-opacity-90 transition-all transform hover:-translate-y-1"
              >
                Minta Penawaran via WhatsApp
              </a>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
}
