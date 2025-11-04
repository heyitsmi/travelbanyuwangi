import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { StructuredData } from "../components/SEO";
import {
  CarFront,
  Plane,
  Bus,
  Ship,
  Building,
  PackageCheck,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Layanan Kami | Agen Travel Banyuwangi | travelbanyuwangi.id",
  description:
    "Jelajahi semua layanan travelbanyuwangi.id. Mulai dari travel antar kota (Surabaya, Malang, Denpasar), tiket pesawat, bus, kapal, visa, paket wisata wali, hingga umroh.",
  keywords:
    "layanan travel banyuwangi, paket travel banyuwangi, tiket pesawat banyuwangi, visa banyuwangi, wisata wali banyuwangi, umroh banyuwangi",
  authors: [{ name: "travelbanyuwangi.id" }],
  openGraph: {
    title: "Layanan Kami | Agen Travel Banyuwangi | travelbanyuwangi.id",
    description:
      "Jelajahi semua layanan travelbanyuwangi.id: Travel, Tiket, Visa, Wisata Wali, Umroh, dan Paket Express.",
    type: "website",
    url: "https://travelbanyuwangi.id/layanan",
    images: [
      {
        url: "/img/hero.webp",
        width: 1200,
        height: 630,
      },
    ],
    siteName: "travelbanyuwangi.id",
  },
  twitter: {
    card: "summary_large_image",
    title: "Layanan Kami | Agen Travel Banyuwangi | travelbanyuwangi.id",
    description: "Jelajahi semua layanan travelbanyuwangi.id: Travel, Tiket, Visa, Wisata Wali, Umroh, dan Paket Express.",
    images: ["/img/hero.webp"],
  },
  alternates: {
    canonical: "https://travelbanyuwangi.id/layanan",
  },
};

const collectionPageData = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Layanan Kami | travelbanyuwangi.id",
  description:
    "Daftar lengkap layanan yang ditawarkan oleh agen travel Banyuwangi terpercaya, travelbanyuwangi.id.",
  url: "https://travelbanyuwangi.id/layanan",
  mainEntity: [
    { "@type": "Service", name: "Travel Antar Kota" },
    { "@type": "Service", name: "Tiket Pesawat" },
    { "@type": "Service", name: "Tiket Bus Executive" },
    { "@type": "Service", name: "Tiket Kapal Laut" },
    { "@type": "Service", name: "Pengurusan Visa & Paspor" },
    { "@type": "Service", name: "Wisata Wali 5 & Wali 9" },
    { "@type": "Service", name: "Umroh & Haji Khusus" },
    { "@type": "Service", name: "Paket Express" },
    { "@type": "Service", name: "Perjalanan Dinas" },
  ],
};

export default function LayananPage() {
  return (
    <>
      <StructuredData data={collectionPageData} />
      <div className="bg-white antialiased">
        <Header />

        <main>
          {/* Hero Section */}
          <section className="bg-light py-20">
            <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
              <h1 className="text-4xl md:text-5xl font-extrabold text-dark">Layanan Kami</h1>
              <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
                Solusi lengkap untuk semua kebutuhan perjalanan dan liburan Anda, dilayani oleh agen travel Banyuwangi
                terpercaya.
              </p>
            </div>
          </section>

          {/* Daftar Layanan Section */}
          <section id="daftar-layanan" className="py-20 bg-white">
            <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              {/* Grid Kartu Layanan */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Kartu Layanan 1: Travel Antar Kota */}
                <Link
                  href="/layanan/travel-antar-kota"
                  className="block bg-white rounded-lg shadow-lg overflow-hidden group transition-transform duration-300 hover:shadow-xl hover:-translate-y-1"
                >
                  <div className="relative h-48 w-full">
                    <Image
                      src="/img/layanan/travel.webp"
                      alt="Layanan Travel Antar Kota Banyuwangi"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      loading="eager"
                      priority
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center space-x-3">
                      <CarFront className="w-6 h-6 text-primary shrink-0" />
                      <h3 className="text-xl font-bold text-primary">Travel Antar Kota</h3>
                    </div>
                    <p className="mt-2 text-gray-600">
                      Layanan door-to-door rute Banyuwangi ↔ Surabaya, Malang, Denpasar, Solo, Tulungagung, dan kota
                      lainnya.
                    </p>
                  </div>
                </Link>

                {/* Kartu Layanan 3: Tiket Bus Executive */}
                <Link
                  href="/layanan/tiket-bus"
                  className="block bg-white rounded-lg shadow-lg overflow-hidden group transition-transform duration-300 hover:shadow-xl hover:-translate-y-1"
                >
                  <div className="relative h-48 w-full">
                    <Image
                      src="/img/layanan/tiket-bus.webp"
                      alt="Layanan Tiket Bus Executive"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center space-x-3">
                      <Bus className="w-6 h-6 text-primary shrink-0" />
                      <h3 className="text-xl font-bold text-primary">Tiket Bus Executive</h3>
                    </div>
                    <p className="mt-2 text-gray-600">
                      Dapatkan tiket bus malam dan bus executive ke berbagai tujuan di Pulau Jawa.
                    </p>
                  </div>
                </Link>

                {/* Kartu Layanan 5: Visa & Paspor */}
                <Link
                  href="/layanan/visa-paspor"
                  className="block bg-white rounded-lg shadow-lg overflow-hidden group transition-transform duration-300 hover:shadow-xl hover:-translate-y-1"
                >
                  <div className="relative h-48 w-full">
                    <Image
                      src="/img/layanan/jasa-paspor.webp"
                      alt="Layanan Pengurusan Visa dan Paspor"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center space-x-3">
                      <Building className="w-6 h-6 text-secondary shrink-0" />
                      <h3 className="text-xl font-bold text-secondary">Pengurusan Visa & Paspor</h3>
                    </div>
                    <p className="mt-2 text-gray-600">
                      Jasa pengurusan dokumen perjalanan Anda (paspor baru, perpanjangan, visa) dengan cepat.
                    </p>
                  </div>
                </Link>

                {/* Kartu Layanan 6: Wisata Wali 5 & 9 */}
                <Link
                  href="/layanan/wisata-wali-5"
                  className="block bg-white rounded-lg shadow-lg overflow-hidden group transition-transform duration-300 hover:shadow-xl hover:-translate-y-1"
                >
                  <div className="relative h-48 w-full">
                    <Image
                      src="/img/layanan/wali-9.webp"
                      alt="Layanan Wisata Wali 5 dan Wali 9"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center space-x-3">
                      <Building className="w-6 h-6 text-secondary shrink-0" />
                      <h3 className="text-xl font-bold text-secondary">Wisata Wali 5 & Wali 9</h3>
                    </div>
                    <p className="mt-2 text-gray-600">
                      Paket perjalanan rohani ziarah Wali Songo (Wali 5 dan Wali 9) lengkap dengan akomodasi.
                    </p>
                  </div>
                </Link>

                {/* Kartu Layanan 8: Perjalanan Dinas */}
                <Link
                  href="/layanan/perjalanan-dinas"
                  className="block bg-white rounded-lg shadow-lg overflow-hidden group transition-transform duration-300 hover:shadow-xl hover:-translate-y-1"
                >
                  <div className="relative h-48 w-full">
                    <Image
                      src="/img/layanan/perjalanan-dinas.webp"
                      alt="Layanan Perjalanan Dinas dan Sewa Mobil"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center space-x-3">
                      <Building className="w-6 h-6 text-accent shrink-0" />
                      <h3 className="text-xl font-bold text-accent">Perjalanan Dinas</h3>
                    </div>
                    <p className="mt-2 text-gray-600">
                      Penyediaan layanan sewa mobil (charter) dan akomodasi untuk kebutuhan instansi dan perusahaan.
                    </p>
                  </div>
                </Link>

                {/* Kartu Layanan 9: Paket Express */}
                <Link
                  href="/layanan/paket-express"
                  className="block bg-white rounded-lg shadow-lg overflow-hidden group transition-transform duration-300 hover:shadow-xl hover:-translate-y-1"
                >
                  <div className="relative h-48 w-full">
                    <Image
                      src="/img/layanan/paket-express.webp"
                      alt="Layanan Paket Express"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center space-x-3">
                      <PackageCheck className="w-6 h-6 text-accent shrink-0" />
                      <h3 className="text-xl font-bold text-accent">Paket Express</h3>
                    </div>
                    <p className="mt-2 text-gray-600">
                      Kirim paket, dokumen, atau barang sehari sampai (one day service) di rute travel kami.
                    </p>
                  </div>
                </Link>
              </div>
            </div>
          </section>

          {/* Kontak & CTA Section */}
          <section id="kontak" className="py-20 bg-primary text-white">
            <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
              <h2 className="text-3xl md:text-4xl font-extrabold">Tidak Menemukan Layanan yang Anda Cari?</h2>
              <p className="mt-4 text-lg text-gray-200 max-w-2xl mx-auto">
                Hubungi tim kami. Kami siap membantu menyediakan solusi perjalanan custom untuk Anda.
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
      </div>
    </>
  );
}
