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
} from "lucide-react";

export const metadata: Metadata = {
  title: "Layanan Travel Banyuwangi Terlengkap | Juragan Travel",
  description:
    "Layanan travel antar kota door-to-door, pengurusan visa paspor, dan paket express di Banyuwangi. Armada nyaman, driver berpengalaman, pelayanan 24 jam.",
  keywords:
    "travel antar kota banyuwangi, visa paspor banyuwangi, paket express banyuwangi, layanan travel door to door, agen travel banyuwangi terpercaya",
  authors: [{ name: "Juragan Travel" }],
  openGraph: {
    title: "Layanan Travel Banyuwangi Terlengkap | Juragan Travel",
    description:
      "Travel antar kota door-to-door, pengurusan visa paspor, dan paket express. Armada nyaman, pelayanan terpercaya 24 jam.",
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
    description: "Travel antar kota door-to-door, pengurusan visa paspor, dan paket express. Armada nyaman, pelayanan terpercaya 24 jam.",
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
    "Layanan travel antar kota door-to-door, pengurusan visa paspor, dan paket express di Banyuwangi dengan armada nyaman dan pelayanan terpercaya.",
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
      name: "Pengurusan Visa dan Paspor",
      description: "Jasa pengurusan dokumen perjalanan meliputi paspor baru, perpanjangan paspor, dan visa berbagai negara.",
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
        text: "Kami menyediakan 3 layanan utama: Travel Antar Kota door-to-door (Banyuwangi ke Surabaya, Malang, Denpasar, Solo, dll), Pengurusan Visa & Paspor, dan Paket Express (pengiriman barang one day service).",
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
      name: "Bagaimana cara memesan layanan travel atau visa paspor?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Anda dapat memesan melalui WhatsApp di 0821-4325-8744. Tim kami siap melayani 24 jam untuk booking travel, konsultasi pengurusan visa paspor, atau layanan paket express.",
      },
    },
    {
      "@type": "Question",
      name: "Berapa lama proses pengurusan visa dan paspor?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Waktu proses bervariasi tergantung jenis dokumen. Paspor baru biasanya 3-7 hari kerja, perpanjangan paspor 1-3 hari kerja, sedangkan visa tergantung negara tujuan (7-21 hari kerja). Kami akan memberikan estimasi waktu yang akurat saat konsultasi.",
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
                Kami menyediakan layanan travel antar kota door-to-door, pengurusan visa paspor, dan paket express dengan 
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

                {/* Kartu Layanan 5: Visa & Paspor */}
                <Link
                  href="/layanan/visa-paspor"
                  className="block bg-white rounded-lg shadow-lg overflow-hidden group transition-transform duration-300 hover:shadow-xl hover:-translate-y-1"
                >
                  <div className="relative h-48 w-full">
                    <Image
                      src="/img/layanan/visa-paspor.webp"
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
                      Jasa pengurusan dokumen perjalanan lengkap: paspor baru, perpanjangan paspor, dan visa berbagai negara dengan proses cepat dan terpercaya.
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
                    Customer service kami siap melayani Anda kapan saja melalui WhatsApp untuk booking dan konsultasi layanan.
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
                    Booking travel mudah via WhatsApp, pengurusan visa paspor dengan waktu proses yang kompetitif dan transparan.
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
                    Pengurusan Visa & Paspor, dan Paket Express (pengiriman barang one day service).
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
                    Bagaimana cara memesan layanan travel atau visa paspor?
                    <ChevronDown className="w-5 h-5 transition-transform duration-300 group-open:rotate-180" />
                  </summary>
                  <p className="mt-4 text-gray-700 leading-relaxed">
                    Anda dapat memesan melalui WhatsApp di 0821-4325-8744. Tim kami siap melayani 24 jam untuk booking travel, 
                    konsultasi pengurusan visa paspor, atau layanan paket express.
                  </p>
                </details>

                <details className="bg-light p-6 rounded-lg shadow-md group">
                  <summary className="flex justify-between items-center font-semibold text-lg text-primary cursor-pointer">
                    Berapa lama proses pengurusan visa dan paspor?
                    <ChevronDown className="w-5 h-5 transition-transform duration-300 group-open:rotate-180" />
                  </summary>
                  <p className="mt-4 text-gray-700 leading-relaxed">
                    Waktu proses bervariasi tergantung jenis dokumen. Paspor baru biasanya 3-7 hari kerja, perpanjangan paspor 1-3 hari kerja, 
                    sedangkan visa tergantung negara tujuan (7-21 hari kerja). Kami akan memberikan estimasi waktu yang akurat saat konsultasi.
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
                Hubungi tim kami melalui WhatsApp untuk booking travel, konsultasi visa paspor, atau paket express. 
                Pelayanan 24 jam dengan respon cepat.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://wa.me/6282143258744"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Hubungi Juragan Travel via WhatsApp untuk booking layanan"
                  className="inline-block bg-accent text-white px-8 py-3 rounded-lg font-bold text-lg shadow-lg hover:bg-opacity-90 transition-all transform hover:-translate-y-1"
                >
                  Pesan Sekarang via WhatsApp
                </a>
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
