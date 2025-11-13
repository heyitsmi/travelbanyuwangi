import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { StructuredData } from "../../components/SEO";
import { Church, Bus, Hotel, Utensils, UserCheck, Ticket, Package } from "lucide-react";

export const metadata: Metadata = {
  title: "Paket Wisata Wali 9 dari Banyuwangi (Wali Songo) | Juragan Travel",
  description:
    "Harga paket wisata Wali 9 dari Banyuwangi (rombongan). Fasilitas lengkap: bus AC, hotel, makan, & guide. Perjalanan ziarah Wali Songo aman & nyaman.",
  keywords:
    "paket wisata wali 9 banyuwangi, ziarah wali 9 dari banyuwangi, harga paket wali 9 banyuwangi, wisata wali songo banyuwangi, travel wisata wali songo banyuwangi",
  authors: [{ name: "Juragan Travel" }],
  openGraph: {
    title: "Paket Wisata Wali 9 dari Banyuwangi (Wali Songo) | Juragan Travel",
    description: "Paket wisata ziarah Wali 9 (Wali Songo) dari Banyuwangi. Fasilitas lengkap untuk rombongan.",
    type: "website",
    url: "https://juragantravel.com/layanan/wisata-wali-9",
    images: [
      {
        url: "https://juragantravel.com/img/hero.webp",
        width: 1200,
        height: 630,
      },
    ],
    siteName: "Juragan Travel",
  },
  twitter: {
    card: "summary_large_image",
    title: "Paket Wisata Wali 9 dari Banyuwangi (Wali Songo) | Juragan Travel",
    description: "Paket wisata ziarah Wali 9 (Wali Songo) dari Banyuwangi. Fasilitas lengkap untuk rombongan.",
    images: ["https://juragantravel.com/img/hero.webp"],
  },
  alternates: {
    canonical: "https://juragantravel.com/layanan/wisata-wali-9",
  },
};

const serviceData = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Tour",
  provider: {
    "@type": "TravelAgency",
    name: "Juragan Travel",
    url: "https://juragantravel.com/",
  },
  name: "Paket Wisata Wali 9 (Wali Songo) dari Banyuwangi",
  description:
    "Paket wisata ziarah Wali 9 (Wali Songo) lengkap dari Banyuwangi. Melayani rombongan dengan fasilitas bus pariwisata AC, hotel, makan, dan tour guide.",
  areaServed: [
    { "@type": "City", name: "Banyuwangi" },
    { "@type": "City", name: "Surabaya" },
    { "@type": "City", name: "Gresik" },
    { "@type": "City", name: "Lamongan" },
    { "@type": "City", name: "Tuban" },
    { "@type": "City", name: "Kudus" },
    { "@type": "City", name: "Demak" },
    { "@type": "City", name: "Cirebon" },
  ],
  offers: {
    "@type": "Offer",
    name: "Paket Wisata Wali 9 (Rombongan)",
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
      item: "https://juragantravel.com/",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Layanan",
      item: "https://juragantravel.com/layanan",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Wisata Wali 9",
      item: "https://juragantravel.com/layanan/wisata-wali-9",
    },
  ],
};

const destinations = [
  { name: "Sunan Ampel", location: "(Surabaya, Jatim)", color: "text-primary" },
  { name: "Sunan Giri", location: "(Gresik, Jatim)", color: "text-primary" },
  { name: "Sunan Gresik", location: "(Gresik, Jatim)", color: "text-primary" },
  { name: "Sunan Drajat", location: "(Lamongan, Jatim)", color: "text-primary" },
  { name: "Sunan Bonang", location: "(Tuban, Jatim)", color: "text-primary" },
  { name: "Sunan Kudus", location: "(Kudus, Jateng)", color: "text-accent" },
  { name: "Sunan Muria", location: "(Kudus, Jateng)", color: "text-accent" },
  { name: "Sunan Kalijaga", location: "(Demak, Jateng)", color: "text-accent" },
  { name: "Sunan Gunung Jati", location: "(Cirebon, Jabar)", color: "text-secondary" },
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
    description: "Menginap beberapa malam di hotel yang bersih (sharing room).",
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
    description: "Air mineral selama perjalanan, P3K, dan banner rombongan.",
  },
];

export default function WisataWali9Page() {
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
                <span className="text-dark font-medium">Wisata Wali 9</span>
              </nav>
              <h1 className="text-4xl md:text-5xl font-extrabold text-dark">Paket Wisata Ziarah Wali 9 (Wali Songo)</h1>
              <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
                Perjalanan rohani lengkap mengunjungi 9 makam Auliya&apos; di Pulau Jawa, berangkat dari Banyuwangi.
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
                    src="https://juragantravel.com/img/hero.webp"
                    alt="Bus pariwisata untuk paket wisata wali 9 banyuwangi"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="rounded-lg shadow-xl object-cover"
                  />
                </div>
                <div className="md:w-1/2">
                  <span className="text-secondary font-semibold uppercase">Ziarah Wali Songo Lengkap</span>
                  <h2 className="mt-2 text-3xl md:text-4xl font-extrabold text-dark">
                    Paket Wisata Wali 9 dari Banyuwangi
                  </h2>
                  <p className="mt-4 text-lg text-gray-700 leading-relaxed">
                    Kami melayani <strong>paket wisata Wali 9 dari Banyuwangi</strong> untuk rombongan besar maupun
                    kecil. Dapatkan pengalaman <strong>ziarah Wali Songo dari Banyuwangi</strong> yang khidmat, nyaman,
                    dan terorganisir dengan baik.
                  </p>
                  <p className="mt-4 text-lg text-gray-700 leading-relaxed">
                    Perjalanan ini mencakup semua 9 makam wali di Jawa Timur, Jawa Tengah, dan Jawa Barat. Kami siapkan
                    bus pariwisata terbaik, akomodasi, konsumsi, dan tour leader yang akan memandu ziarah Anda.
                  </p>
                </div>
              </div>

              {/* Destinasi Ziarah */}
              <div className="mb-20">
                <div className="text-center">
                  <h2 className="text-3xl md:text-4xl font-extrabold text-dark">
                    Destinasi Ziarah Wali 9 (Wali Songo)
                  </h2>
                  <p className="mt-4 text-lg text-gray-600">Mengunjungi 9 makam Auliya&apos; di 3 Provinsi.</p>
                </div>
                <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                  {destinations.map((destination, index) => (
                    <div
                      key={index}
                      className="bg-light p-6 rounded-lg shadow-md text-center group hover:bg-white hover:shadow-lg transition-all"
                    >
                      <Church className={`w-12 h-12 ${destination.color} mx-auto`} />
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
                <p className="mt-4 text-lg text-gray-600">Kami memastikan kenyamanan Anda selama perjalanan ziarah.</p>
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
              <h2 className="text-3xl md:text-4xl font-extrabold">Rencanakan Ziarah Wali Songo Rombongan Anda</h2>
              <p className="mt-4 text-lg text-gray-200 max-w-2xl mx-auto">
                Harga <strong>paket wisata wali 9 Banyuwangi</strong> kami sangat fleksibel, tergantung jumlah peserta
                (minimal 30, 40, 50 orang) dan fasilitas yang diinginkan. Hubungi kami untuk mendapatkan penawaran
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
