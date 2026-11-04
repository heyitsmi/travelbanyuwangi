import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { StructuredData } from "../components/SEO";
import {
  CarFront,
  Building,
  PackageCheck,
  Clock,
  MapPin,
  Users,
  Shield,
  CheckCircle,
  ChevronDown,
  Bus,
} from "lucide-react";
import WhatsAppLink from "../components/WhatsAppLink";

export const metadata: Metadata = {
  title: "Layanan Travel Banyuwangi Terlengkap | Juragan Travel",
  description:
    "Layanan travel antar kota door-to-door, tiket bus executive VIP dan sleeper, serta paket express di Banyuwangi. Armada nyaman, driver berpengalaman, pelayanan 24 jam.",
  keywords:
    "travel antar kota banyuwangi, tiket bus executive banyuwangi, tiket bus vip banyuwangi, paket express banyuwangi, layanan travel door to door, agen travel banyuwangi terpercaya",
  authors: [{ name: "Juragan Travel" }],
  openGraph: {
    title: "Layanan Travel Banyuwangi Terlengkap | Juragan Travel",
    description:
      "Travel antar kota door-to-door, tiket bus executive VIP dan sleeper, serta paket express. Armada nyaman, pelayanan terpercaya 24 jam.",
    type: "website",
    url: "https://juragantravel.com/layanan",
    images: [
      {
        url: "https://juragantravel.com/img/hero.webp",
        width: 1200,
        height: 630,
        alt: "Layanan Travel Banyuwangi Juragan Travel",
      },
    ],
    siteName: "Juragan Travel",
    locale: "id_ID",
  },
  twitter: {
    card: "summary_large_image",
    title: "Layanan Travel Banyuwangi Terlengkap | Juragan Travel",
    description: "Travel antar kota door-to-door, tiket bus executive VIP dan sleeper, serta paket express. Armada nyaman, pelayanan terpercaya 24 jam.",
    images: ["https://juragantravel.com/img/hero.webp"],
    creator: "@juragantravel",
    site: "@juragantravel",
  },
  alternates: {
    canonical: "https://juragantravel.com/layanan",
  },
};

const collectionPageData = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Layanan Travel Banyuwangi | Juragan Travel",
  description:
    "Layanan travel antar kota door-to-door, tiket bus executive VIP dan sleeper, serta paket express di Banyuwangi dengan armada nyaman dan pelayanan terpercaya.",
  url: "https://juragantravel.com/layanan",
  mainEntity: [
    {
      "@type": "Service",
      name: "Travel Antar Kota Door-to-Door",
      description: "Layanan travel antar kota dengan sistem door-to-door dari Banyuwangi ke Surabaya, Malang, Denpasar, Solo, dan kota lainnya.",
      provider: {
        "@type": "TravelAgency",
        name: "Juragan Travel",
      },
      areaServed: {
        "@type": "Place",
        name: "Jawa Timur, Jawa Tengah, Bali",
      },
    },
    {
      "@type": "Service",
      name: "Tiket Bus Executive, VIP dan Sleeper",
      description: "Penjualan tiket bus PO Handoyo dan PO Gunung Harta dengan berbagai kelas: Executive, VIP, dan Sleeper untuk perjalanan jarak jauh yang nyaman.",
      provider: {
        "@type": "TravelAgency",
        name: "Juragan Travel",
      },
    },
    {
      "@type": "Service",
      name: "Paket Express",
      description: "Layanan pengiriman paket, dokumen, dan barang dengan sistem one day service di rute travel kami.",
      provider: {
        "@type": "TravelAgency",
        name: "Juragan Travel",
      },
    },
  ],
};

const faqData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Apa saja layanan utama yang tersedia di Juragan Travel?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Kirim permintaan melalui formulir online. Tim kami akan menghubungi Anda untuk membantu pemesanan travel, tiket bus, atau paket express.",
        text: "Kami menyediakan 3 layanan utama: Travel Antar Kota door-to-door (Banyuwangi ke Surabaya, Malang, Denpasar, Solo, dll), Tiket Bus Executive VIP dan Sleeper (PO Handoyo & PO Gunung Harta), dan Paket Express (pengiriman barang one day service).",
      },
    },
    {
      "@type": "Question",
      name: "Apakah travel antar kota menggunakan sistem door-to-door?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ya, semua layanan travel antar kota kami menggunakan sistem door-to-door. Kami akan menjemput Anda di alamat yang Anda tentukan dan mengantar langsung ke alamat tujuan, selama masih dalam area jangkauan kami.",
      },
    },
    {
      "@type": "Question",
      name: "Bagaimana cara memesan layanan travel atau tiket bus?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Kirim permintaan melalui formulir online. Tim kami akan membantu pemesanan travel, tiket bus, atau paket express.",
      },
    },
    {
      "@type": "Question",
      name: "Apa perbedaan kelas Executive, VIP, dan Sleeper pada tiket bus?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Executive memiliki kursi standar yang nyaman, VIP dengan kursi lebih lebar dan legroom lebih luas, sedangkan Sleeper dilengkapi dengan tempat tidur untuk perjalanan jarak jauh yang lebih nyaman. Semua kelas dilengkapi AC dan fasilitas entertainment.",
      },
    },
    {
      "@type": "Question",
      name: "Apakah paket express bisa untuk semua rute travel?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ya, layanan paket express tersedia untuk semua rute travel kami. Paket Anda akan dikirim bersamaan dengan jadwal travel dan dapat sampai di hari yang sama untuk rute-rute tertentu. Silakan hubungi kami untuk informasi detail tarif dan jadwal.",
      },
    },
  ],
};

export default function LayananPage() {
  return (
    <>
      <StructuredData data={collectionPageData} />
      <StructuredData data={faqData} />
      <div className="bg-white antialiased">
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
                <span className="text-dark font-medium">Layanan</span>
              </nav>
              <h1 className="text-4xl md:text-5xl font-extrabold text-dark">Layanan Travel Banyuwangi Terlengkap</h1>
              <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
                Kami menyediakan layanan travel antar kota door-to-door, tiket bus executive VIP dan sleeper, serta paket express dengan 
                armada nyaman dan pelayanan terpercaya 24 jam.
              </p>
            </div>
          </section>

          {/* Daftar Layanan Section */}
          <section id="daftar-layanan" className="py-20 bg-white">
            <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-extrabold text-dark">Layanan Utama Kami</h2>
                <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
                  Tiga layanan unggulan yang telah dipercaya ribuan pelanggan di Banyuwangi dan sekitarnya
                </p>
              </div>
              
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
                      Layanan door-to-door rute Banyuwangi ke Surabaya, Malang, Denpasar, Solo, Tulungagung, dan kota
                      lainnya. Armada nyaman dengan driver berpengalaman.
                    </p>
                  </div>
                </Link>

                {/* Kartu Layanan 2: Tiket Bus */}
                <Link
                  href="/layanan/tiket-bus-executive-vip-sleeper"
                  className="block bg-white rounded-lg shadow-lg overflow-hidden group transition-transform duration-300 hover:shadow-xl hover:-translate-y-1"
                >
                  <div className="relative h-48 w-full">
                    <Image
                      src="/img/layanan/tiket-bus.webp"
                      alt="Layanan Tiket Bus Executive VIP dan Sleeper"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center space-x-3">
                      <Bus className="w-6 h-6 text-secondary shrink-0" />
                      <h3 className="text-xl font-bold text-secondary">Tiket Bus Executive, VIP & Sleeper</h3>
                    </div>
                    <p className="mt-2 text-gray-600">
                      Penjualan tiket bus PO Handoyo dan PO Gunung Harta dengan berbagai kelas: Executive, VIP, dan Sleeper untuk perjalanan jarak jauh yang nyaman.
                    </p>
                  </div>
                </Link>

                {/* Kartu Layanan 3: Paket Express */}
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
                      Layanan pengiriman paket, dokumen, atau barang dengan sistem one day service di semua rute travel kami. Aman dan terpercaya.
                    </p>
                  </div>
                </Link>
              </div>
            </div>
          </section>

          {/* Detail Layanan Section */}
          <section id="detail-layanan" className="py-20 bg-light">
            <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-extrabold text-dark">Mengapa Memilih Layanan Kami?</h2>
                <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
                  Keunggulan dan komitmen kami dalam memberikan pelayanan terbaik untuk Anda
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-white p-8 rounded-xl shadow-lg">
                  <div className="flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-6">
                    <Clock className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-dark mb-3">Pelayanan 24 Jam</h3>
                  <p className="text-gray-600">
                    Customer service kami siap membantu booking dan konsultasi layanan melalui formulir kontak.
                  </p>
                </div>

                <div className="bg-white p-8 rounded-xl shadow-lg">
                  <div className="flex items-center justify-center w-16 h-16 rounded-full bg-secondary/10 text-secondary mb-6">
                    <Users className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-dark mb-3">Tim Berpengalaman</h3>
                  <p className="text-gray-600">
                    Driver profesional yang menguasai rute dan tim admin yang berpengalaman dalam pengurusan dokumen perjalanan.
                  </p>
                </div>

                <div className="bg-white p-8 rounded-xl shadow-lg">
                  <div className="flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 text-accent mb-6">
                    <Shield className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-dark mb-3">Aman & Terpercaya</h3>
                  <p className="text-gray-600">
                    Semua layanan kami berizin resmi dengan rekam jejak yang terpercaya dan telah melayani ribuan pelanggan.
                  </p>
                </div>

                <div className="bg-white p-8 rounded-xl shadow-lg">
                  <div className="flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-6">
                    <MapPin className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-dark mb-3">Door-to-Door Service</h3>
                  <p className="text-gray-600">
                    Layanan travel dengan sistem jemput dan antar langsung dari alamat Anda ke alamat tujuan yang diinginkan.
                  </p>
                </div>

                <div className="bg-white p-8 rounded-xl shadow-lg">
                  <div className="flex items-center justify-center w-16 h-16 rounded-full bg-secondary/10 text-secondary mb-6">
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-dark mb-3">Proses Cepat</h3>
                  <p className="text-gray-600">
                    Booking travel mudah melalui formulir kontak, pengurusan visa paspor dengan waktu proses yang kompetitif dan transparan.
                  </p>
                </div>

                <div className="bg-white p-8 rounded-xl shadow-lg">
                  <div className="flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 text-accent mb-6">
                    <PackageCheck className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-dark mb-3">One Day Service</h3>
                  <p className="text-gray-600">
                    Paket express dengan layanan pengiriman one day service untuk memenuhi kebutuhan mendesak Anda.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section id="faq" className="py-20 bg-white">
            <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-extrabold text-dark">Pertanyaan yang Sering Diajukan</h2>
                <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
                  Jawaban untuk pertanyaan umum seputar layanan kami
                </p>
              </div>

              <div className="max-w-3xl mx-auto space-y-6">
                <details className="bg-light p-6 rounded-lg shadow-md group" open>
                  <summary className="flex justify-between items-center font-semibold text-lg text-primary cursor-pointer">
                    Apa saja layanan utama yang tersedia di Juragan Travel?
                    <ChevronDown className="w-5 h-5 transition-transform duration-300 group-open:rotate-180" />
                  </summary>
                  <p className="mt-4 text-gray-700 leading-relaxed">
                    Kami menyediakan 3 layanan utama: Travel Antar Kota door-to-door (Banyuwangi ke Surabaya, Malang, Denpasar, Solo, dll), 
                    Tiket Bus Executive VIP dan Sleeper (PO Handoyo & PO Gunung Harta), dan Paket Express (pengiriman barang one day service).
                  </p>
                </details>

                <details className="bg-light p-6 rounded-lg shadow-md group">
                  <summary className="flex justify-between items-center font-semibold text-lg text-primary cursor-pointer">
                    Apakah travel antar kota menggunakan sistem door-to-door?
                    <ChevronDown className="w-5 h-5 transition-transform duration-300 group-open:rotate-180" />
                  </summary>
                  <p className="mt-4 text-gray-700 leading-relaxed">
                    Ya, semua layanan travel antar kota kami menggunakan sistem door-to-door. Kami akan menjemput Anda di alamat yang Anda tentukan 
                    dan mengantar langsung ke alamat tujuan, selama masih dalam area jangkauan kami.
                  </p>
                </details>

                <details className="bg-light p-6 rounded-lg shadow-md group">
                  <summary className="flex justify-between items-center font-semibold text-lg text-primary cursor-pointer">
                    Bagaimana cara memesan layanan travel atau tiket bus?
                    <ChevronDown className="w-5 h-5 transition-transform duration-300 group-open:rotate-180" />
                  </summary>
                  <p className="mt-4 text-gray-700 leading-relaxed">
                    Kirim permintaan melalui formulir online. Tim kami akan membantu pemesanan tiket bus atau layanan paket express.
                  </p>
                </details>

                <details className="bg-light p-6 rounded-lg shadow-md group">
                  <summary className="flex justify-between items-center font-semibold text-lg text-primary cursor-pointer">
                    Apa perbedaan kelas Executive, VIP, dan Sleeper pada tiket bus?
                    <ChevronDown className="w-5 h-5 transition-transform duration-300 group-open:rotate-180" />
                  </summary>
                  <p className="mt-4 text-gray-700 leading-relaxed">
                    Executive memiliki kursi standar yang nyaman, VIP dengan kursi lebih lebar dan legroom lebih luas, 
                    sedangkan Sleeper dilengkapi dengan tempat tidur untuk perjalanan jarak jauh yang lebih nyaman. 
                    Semua kelas dilengkapi AC dan fasilitas entertainment.
                  </p>
                </details>

                <details className="bg-light p-6 rounded-lg shadow-md group">
                  <summary className="flex justify-between items-center font-semibold text-lg text-primary cursor-pointer">
                    Apakah paket express bisa untuk semua rute travel?
                    <ChevronDown className="w-5 h-5 transition-transform duration-300 group-open:rotate-180" />
                  </summary>
                  <p className="mt-4 text-gray-700 leading-relaxed">
                    Ya, layanan paket express tersedia untuk semua rute travel kami. Paket Anda akan dikirim bersamaan dengan jadwal travel 
                    dan dapat sampai di hari yang sama untuk rute-rute tertentu. Silakan hubungi kami untuk informasi detail tarif dan jadwal.
                  </p>
                </details>
              </div>
            </div>
          </section>

          {/* Kontak & CTA Section */}
          <section id="kontak" className="py-20 bg-primary text-white">
            <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
              <h2 className="text-3xl md:text-4xl font-extrabold">Siap Memesan Layanan Kami?</h2>
              <p className="mt-4 text-lg text-gray-200 max-w-2xl mx-auto">
                Hubungi tim kami melalui formulir kontak untuk booking travel, pemesanan tiket bus, atau paket express.
                Pelayanan 24 jam dengan respon cepat.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                <WhatsAppLink
                  message="Halo Admin, saya mau pesan layanan Juragan Travel."
                  title="Hubungi Juragan Travel melalui formulir kontak untuk booking layanan"
                  className="inline-block bg-accent text-white px-8 py-3 rounded-lg font-bold text-lg shadow-lg hover:bg-opacity-90 transition-all transform hover:-translate-y-1"
                >
                  Pesan Sekarang
                </WhatsAppLink>
                <a
                  href="/kontak"
                  title="Lihat info kontak lengkap Juragan Travel"
                  className="inline-block bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-bold text-lg hover:bg-white hover:text-primary transition-all"
                >
                  Info Kontak Lengkap
                </a>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
}
