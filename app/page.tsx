import { Metadata } from "next";
import Image from "next/image";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { StructuredData } from "./components/SEO";
import {
  Truck,
  Clock,
  UserCheck,
  Smartphone,
  ShieldCheck,
  CreditCard,
  CarFront,
  Ticket,
  Building,
  PackageCheck,
  MapPin,
  Phone,
  Star,
  ChevronDown,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Travel Banyuwangi - Surabaya, Malang, Denpasar | travelbanyuwangi.id",
  description:
    "Layanan travel antar kota aman & nyaman dari Banyuwangi ke Surabaya, Malang, Denpasar, dan seluruh Jawa Bali. Berangkat setiap hari. Pesan via WhatsApp 24 jam.",
  keywords:
    "travel banyuwangi, travel banyuwangi surabaya, travel banyuwangi malang, travel banyuwangi denpasar, travel banyuwangi solo, agen travel banyuwangi",
  authors: [{ name: "travelbanyuwangi.id" }],
  openGraph: {
    title: "Travel Banyuwangi - Surabaya, Malang, Denpasar | travelbanyuwangi.id",
    description:
      "Layanan travel antar kota aman & nyaman dari Banyuwangi ke Surabaya, Malang, Denpasar, dan seluruh Jawa Bali. Berangkat setiap hari.",
    type: "website",
    url: "https://travelbanyuwangi.id/",
    images: [
      {
        url: "https://placehold.co/1200x630/0077B6/FFFFFF?text=travelbanyuwangi.id",
        width: 1200,
        height: 630,
      },
    ],
    siteName: "travelbanyuwangi.id",
  },
  twitter: {
    card: "summary_large_image",
    title: "Travel Banyuwangi - Surabaya, Malang, Denpasar | travelbanyuwangi.id",
    description: "Layanan travel antar kota aman & nyaman. Berangkat setiap hari.",
    images: ["https://placehold.co/1200x630/0077B6/FFFFFF?text=travelbanyuwangi.id"],
  },
  alternates: {
    canonical: "https://travelbanyuwangi.id/",
  },
  icons: {
    icon: "https://placehold.co/32x32/0077B6/FFFFFF?text=T",
  },
};

const travelAgencyData = {
  "@context": "https://schema.org",
  "@type": "TravelAgency",
  name: "travelbanyuwangi.id",
  description:
    "Layanan travel antar kota aman & nyaman dari Banyuwangi ke Surabaya, Malang, Denpasar, dan seluruh Jawa Bali. Berangkat setiap hari.",
  telephone: "+6281234567890",
  url: "https://travelbanyuwangi.id/",
  image: "https://placehold.co/1200x630/0077B6/FFFFFF?text=travelbanyuwangi.id",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Jl. Raya Jember No. 1",
    addressLocality: "Banyuwangi",
    addressRegion: "Jawa Timur",
    postalCode: "68416",
    addressCountry: "ID",
  },
  openingHours: "Mo-Su 00:00-23:59",
  priceRange: "$$",
  makesOffer: [
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Travel Banyuwangi - Surabaya",
      },
    },
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Travel Banyuwangi - Malang",
      },
    },
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Travel Banyuwangi - Denpasar",
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
      name: "Apakah ada jadwal travel Banyuwangi – Surabaya setiap hari?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ya, kami memiliki jadwal keberangkatan setiap hari untuk rute Banyuwangi ke Surabaya dan sebaliknya. Kami ada jadwal pagi, siang, dan malam. Silakan hubungi admin kami via WhatsApp untuk detail jam keberangkatan.",
      },
    },
    {
      "@type": "Question",
      name: "Bagaimana cara pesan travel via WhatsApp?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sangat mudah. Cukup klik tombol 'Pesan Sekarang via WhatsApp' di website ini. Anda akan langsung terhubung dengan admin kami. Informasikan nama, jumlah penumpang, rute (misal: Banyuwangi ke Malang), tanggal berangkat, dan alamat jemput.",
      },
    },
    {
      "@type": "Question",
      name: "Apakah bisa dijemput di rumah?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Tentu saja. Layanan kami adalah door-to-door. Kami akan menjemput Anda di alamat yang Anda berikan (selama masih dalam area jangkauan kami) dan mengantar Anda langsung ke alamat tujuan.",
      },
    },
    {
      "@type": "Question",
      name: "Apakah melayani pengiriman paket kilat?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ya, kami melayani 'Paket Express' atau pengiriman barang cepat. Paket Anda bisa sampai di hari yang sama untuk rute-rute tertentu. Silakan hubungi admin untuk informasi biaya dan jadwal.",
      },
    },
  ],
};

export default function Home() {
  return (
    <>
      <StructuredData data={travelAgencyData} />
      <StructuredData data={faqData} />
      <div className="bg-white antialiased">
        <Header />

        <main>
          {/* Hero Section */}
          <section id="beranda" className="relative bg-dark">
            <div className="absolute inset-0">
              <Image
                src="https://placehold.co/1600x800/003450/FFFFFF?text=[Foto+Armada+Travel+Banyuwangi]"
                alt="Armada travel Banyuwangi melayani rute Surabaya, Malang, dan Denpasar"
                fill
                className="object-cover opacity-50"
                priority
              />
            </div>

            <div className="relative container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-32 md:py-48 text-center text-white">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight">
                Travel Banyuwangi – Surabaya, Malang, Denpasar, dan Seluruh Jawa Bali
              </h1>
              <p className="mt-6 text-xl lg:text-2xl text-gray-200 max-w-3xl mx-auto">
                Layanan travel antar kota aman & nyaman, berangkat setiap hari.
              </p>
              <a
                href="https://wa.me/628123456789"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-10 inline-block bg-accent text-white px-10 py-3 rounded-lg font-bold text-lg shadow-lg hover:bg-opacity-90 transition-all transform hover:-translate-y-1"
              >
                Pesan Sekarang via WhatsApp
              </a>
            </div>
          </section>

          {/* Keunggulan Section */}
          <section id="keunggulan" className="py-16 bg-light">
            <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
                <div className="flex flex-col items-center text-center p-4">
                  <div className="shrink-0 bg-primary text-white p-3 rounded-full shadow-md">
                    <Truck className="w-7 h-7" />
                  </div>
                  <h3 className="mt-4 font-semibold text-lg text-dark">Armada Bersih & Nyaman</h3>
                </div>
                <div className="flex flex-col items-center text-center p-4">
                  <div className="shrink-0 bg-primary text-white p-3 rounded-full shadow-md">
                    <Clock className="w-7 h-7" />
                  </div>
                  <h3 className="mt-4 font-semibold text-lg text-dark">Berangkat Setiap Hari</h3>
                </div>
                <div className="flex flex-col items-center text-center p-4">
                  <div className="shrink-0 bg-primary text-white p-3 rounded-full shadow-md">
                    <UserCheck className="w-7 h-7" />
                  </div>
                  <h3 className="mt-4 font-semibold text-lg text-dark">Driver Berpengalaman</h3>
                </div>
                <div className="flex flex-col items-center text-center p-4">
                  <div className="shrink-0 bg-primary text-white p-3 rounded-full shadow-md">
                    <Smartphone className="w-7 h-7" />
                  </div>
                  <h3 className="mt-4 font-semibold text-lg text-dark">Booking Cepat via WA</h3>
                </div>
                <div className="flex flex-col items-center text-center p-4">
                  <div className="shrink-0 bg-primary text-white p-3 rounded-full shadow-md">
                    <ShieldCheck className="w-7 h-7" />
                  </div>
                  <h3 className="mt-4 font-semibold text-lg text-dark">Aman & Terpercaya</h3>
                </div>
                <div className="flex flex-col items-center text-center p-4">
                  <div className="shrink-0 bg-primary text-white p-3 rounded-full shadow-md">
                    <CreditCard className="w-7 h-7" />
                  </div>
                  <h3 className="mt-4 font-semibold text-lg text-dark">Pembayaran Fleksibel</h3>
                </div>
              </div>
            </div>
          </section>

          {/* Rute Section */}
          <section id="rute" className="py-20 bg-white">
            <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="text-center">
                <h2 className="text-3xl md:text-4xl font-extrabold text-dark">Rute Populer Kami</h2>
                <p className="mt-4 text-lg text-gray-600">
                  Pilih rute tujuan Anda dari Banyuwangi ke berbagai kota di Jawa dan Bali.
                </p>
              </div>

              <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-white rounded-lg shadow-lg overflow-hidden group transition-transform duration-300 hover:shadow-xl hover:-translate-y-1">
                  <div className="relative h-48 w-full">
                    <Image
                      src="https://placehold.co/600x400/0077B6/FFFFFF?text=Surabaya"
                      alt="Travel Banyuwangi Surabaya"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-primary">Banyuwangi ↔ Surabaya</h3>
                    <p className="mt-2 text-gray-600">
                      Perjalanan nyaman via tol, dijemput di rumah dan diantar sampai tujuan.
                    </p>
                    <a
                      href="/travel-banyuwangi-surabaya"
                      className="inline-block mt-4 bg-secondary text-white px-5 py-2 rounded-lg font-semibold hover:bg-opacity-90 transition-colors"
                    >
                      Lihat Jadwal & Harga
                    </a>
                  </div>
                </div>

                <div className="bg-white rounded-lg shadow-lg overflow-hidden group transition-transform duration-300 hover:shadow-xl hover:-translate-y-1">
                  <div className="relative h-48 w-full">
                    <Image
                      src="https://placehold.co/600x400/00B894/FFFFFF?text=Malang"
                      alt="Travel Banyuwangi Malang"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-primary">Banyuwangi ↔ Malang</h3>
                    <p className="mt-2 text-gray-600">
                      Armada terbaik menuju kota pendidikan dan wisata. Berangkat setiap hari.
                    </p>
                    <a
                      href="/travel-banyuwangi-malang"
                      className="inline-block mt-4 bg-secondary text-white px-5 py-2 rounded-lg font-semibold hover:bg-opacity-90 transition-colors"
                    >
                      Lihat Jadwal & Harga
                    </a>
                  </div>
                </div>

                <div className="bg-white rounded-lg shadow-lg overflow-hidden group transition-transform duration-300 hover:shadow-xl hover:-translate-y-1">
                  <div className="relative h-48 w-full">
                    <Image
                      src="https://placehold.co/600x400/F79E1B/FFFFFF?text=Denpasar"
                      alt="Travel Banyuwangi Denpasar"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-primary">Banyuwangi ↔ Denpasar</h3>
                    <p className="mt-2 text-gray-600">
                      Lintasi selat Bali dengan aman dan nyaman, langsung ke tujuan Anda di Denpasar.
                    </p>
                    <a
                      href="/travel-banyuwangi-denpasar"
                      className="inline-block mt-4 bg-secondary text-white px-5 py-2 rounded-lg font-semibold hover:bg-opacity-90 transition-colors"
                    >
                      Lihat Jadwal & Harga
                    </a>
                  </div>
                </div>

                <div className="bg-white rounded-lg shadow-lg overflow-hidden group transition-transform duration-300 hover:shadow-xl hover:-translate-y-1">
                  <div className="relative h-48 w-full">
                    <Image
                      src="https://placehold.co/600x400/555555/FFFFFF?text=Solo"
                      alt="Travel Banyuwangi Solo"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-primary">Banyuwangi ↔ Solo</h3>
                    <p className="mt-2 text-gray-600">
                      Jelajahi Jawa Tengah dengan layanan travel via tol yang cepat dan aman.
                    </p>
                    <a
                      href="/travel-banyuwangi-solo"
                      className="inline-block mt-4 bg-secondary text-white px-5 py-2 rounded-lg font-semibold hover:bg-opacity-90 transition-colors"
                    >
                      Lihat Jadwal & Harga
                    </a>
                  </div>
                </div>

                <div className="bg-white rounded-lg shadow-lg overflow-hidden group transition-transform duration-300 hover:shadow-xl hover:-translate-y-1">
                  <div className="relative h-48 w-full">
                    <Image
                      src="https://placehold.co/600x400/8A2BE2/FFFFFF?text=Tulungagung"
                      alt="Travel Banyuwangi Tulungagung"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-primary">Banyuwangi ↔ Tulungagung</h3>
                    <p className="mt-2 text-gray-600">
                      Layanan rute selatan Jawa Timur, melayani juga Blitar dan Kediri.
                    </p>
                    <a
                      href="/travel-banyuwangi-tulungagung"
                      className="inline-block mt-4 bg-secondary text-white px-5 py-2 rounded-lg font-semibold hover:bg-opacity-90 transition-colors"
                    >
                      Lihat Jadwal & Harga
                    </a>
                  </div>
                </div>

                <div className="bg-white rounded-lg shadow-lg overflow-hidden group transition-transform duration-300 hover:shadow-xl hover:-translate-y-1">
                  <div className="relative h-48 w-full">
                    <Image
                      src="https://placehold.co/600x400/AAAAAA/FFFFFF?text=Rute+Lain"
                      alt="Travel Banyuwangi Jember Probolinggo"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-primary">Jember / Probolinggo</h3>
                    <p className="mt-2 text-gray-600">
                      Kami juga melayani rute-rute transit utama di Jawa Timur.
                    </p>
                    <a
                      href="#kontak"
                      className="inline-block mt-4 bg-secondary text-white px-5 py-2 rounded-lg font-semibold hover:bg-opacity-90 transition-colors"
                    >
                      Hubungi Kami
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Layanan Section */}
          <section id="layanan" className="py-20 bg-light">
            <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="text-center">
                <h2 className="text-3xl md:text-4xl font-extrabold text-dark">Layanan Kami</h2>
                <p className="mt-4 text-lg text-gray-600">
                  Tidak hanya travel, kami melayani semua kebutuhan perjalanan Anda.
                </p>
              </div>

              <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-white rounded-lg shadow-lg overflow-hidden group transition-transform duration-300 hover:shadow-xl hover:-translate-y-1">
                  <div className="relative h-48 w-full">
                    <Image
                      src="https://placehold.co/600x400/0077B6/FFFFFF?text=Travel+Antar+Kota"
                      alt="Layanan Travel Antar Kota Banyuwangi"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center space-x-3">
                      <CarFront className="w-6 h-6 text-primary shrink-0" />
                      <h3 className="text-xl font-bold text-primary">Travel Antar Kota</h3>
                    </div>
                    <p className="mt-2 text-gray-600">Layanan door-to-door untuk rute Jawa - Bali (PP).</p>
                  </div>
                </div>

                <div className="bg-white rounded-lg shadow-lg overflow-hidden group transition-transform duration-300 hover:shadow-xl hover:-translate-y-1">
                  <div className="relative h-48 w-full">
                    <Image
                      src="https://placehold.co/600x400/0088B7/FFFFFF?text=Tiket"
                      alt="Layanan Tiket Pesawat, Bus, Kapal"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center space-x-3">
                      <Ticket className="w-6 h-6 text-primary shrink-0" />
                      <h3 className="text-xl font-bold text-primary">Tiket (Pesawat, Bus, Kapal)</h3>
                    </div>
                    <p className="mt-2 text-gray-600">Semua rute domestik & internasional.</p>
                  </div>
                </div>

                <div className="bg-white rounded-lg shadow-lg overflow-hidden group transition-transform duration-300 hover:shadow-xl hover:-translate-y-1">
                  <div className="relative h-48 w-full">
                    <Image
                      src="https://placehold.co/600x400/0099B8/FFFFFF?text=Visa+%26+Paspor"
                      alt="Layanan Pengurusan Visa dan Paspor"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center space-x-3">
                      <Building className="w-6 h-6 text-primary shrink-0" />
                      <h3 className="text-xl font-bold text-primary">Pengurusan Visa & Paspor</h3>
                    </div>
                    <p className="mt-2 text-gray-600">Cepat, mudah, dan terpercaya.</p>
                  </div>
                </div>

                <div className="bg-white rounded-lg shadow-lg overflow-hidden group transition-transform duration-300 hover:shadow-xl hover:-translate-y-1">
                  <div className="relative h-48 w-full">
                    <Image
                      src="https://placehold.co/600x400/00B894/FFFFFF?text=Wisata+Wali"
                      alt="Layanan Wisata Wali 5 dan Wali 9"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center space-x-3">
                      <Building className="w-6 h-6 text-secondary shrink-0" />
                      <h3 className="text-xl font-bold text-secondary">Wisata Wali 5 & Wali 9</h3>
                    </div>
                    <p className="mt-2 text-gray-600">Perjalanan rohani yang nyaman dan terpandu.</p>
                  </div>
                </div>

                <div className="bg-white rounded-lg shadow-lg overflow-hidden group transition-transform duration-300 hover:shadow-xl hover:-translate-y-1">
                  <div className="relative h-48 w-full">
                    <Image
                      src="https://placehold.co/600x400/00A884/FFFFFF?text=Umroh+%26+Haji"
                      alt="Layanan Umroh dan Haji Khusus"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center space-x-3">
                      <Building className="w-6 h-6 text-secondary shrink-0" />
                      <h3 className="text-xl font-bold text-secondary">Umroh & Haji Khusus</h3>
                    </div>
                    <p className="mt-2 text-gray-600">Layanan premium dan pasti berangkat.</p>
                  </div>
                </div>

                <div className="bg-white rounded-lg shadow-lg overflow-hidden group transition-transform duration-300 hover:shadow-xl hover:-translate-y-1">
                  <div className="relative h-48 w-full">
                    <Image
                      src="https://placehold.co/600x400/F79E1B/FFFFFF?text=Perjalanan+Dinas"
                      alt="Layanan Perjalanan Dinas dan Sewa Mobil"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center space-x-3">
                      <Building className="w-6 h-6 text-accent shrink-0" />
                      <h3 className="text-xl font-bold text-accent">Perjalanan Dinas</h3>
                    </div>
                    <p className="mt-2 text-gray-600">Sewa mobil / charter untuk instansi.</p>
                  </div>
                </div>

                <div className="bg-white rounded-lg shadow-lg overflow-hidden group transition-transform duration-300 hover:shadow-xl hover:-translate-y-1 md:col-start-2 lg:col-start-auto">
                  <div className="relative h-48 w-full">
                    <Image
                      src="https://placehold.co/600x400/F88E0B/FFFFFF?text=Paket+Express"
                      alt="Layanan Paket Express"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center space-x-3">
                      <PackageCheck className="w-6 h-6 text-accent shrink-0" />
                      <h3 className="text-xl font-bold text-accent">Paket Express</h3>
                    </div>
                    <p className="mt-2 text-gray-600">Kirim barang dan dokumen sehari sampai.</p>
                  </div>
                </div>
              </div>

              <div className="text-center mt-12">
                <a href="#kontak" className="text-lg font-medium text-primary hover:text-accent transition-colors">
                  Butuh layanan lain? Hubungi Kami &rarr;
                </a>
              </div>
            </div>
          </section>

          {/* Tentang Section */}
          <section id="tentang" className="py-20 bg-white">
            <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="flex flex-col md:flex-row items-center gap-12">
                <div className="md:w-1/2 relative h-96 w-full">
                  <Image
                    src="https://placehold.co/600x450/00B894/FFFFFF?text=[Foto+Tim+atau+Armada]"
                    alt="Tim dan armada travelbanyuwangi.id"
                    fill
                    className="rounded-lg shadow-xl object-cover"
                  />
                </div>
                <div className="md:w-1/2">
                  <h2 className="text-3xl md:text-4xl font-extrabold text-dark">Tentang travelbanyuwangi.id</h2>
                  <h3 className="mt-4 text-xl font-semibold text-primary">
                    Agen Travel Lokal Banyuwangi yang Aman, Cepat, dan Nyaman
                  </h3>
                  <p className="mt-4 text-lg text-gray-700 leading-relaxed">
                    travelbanyuwangi.id adalah agen travel lokal Banyuwangi yang melayani perjalanan antar kota ke
                    seluruh Jawa dan Bali. Kami berkomitmen memberikan pengalaman perjalanan yang aman, cepat, dan
                    nyaman.
                  </p>
                  <p className="mt-4 text-lg text-gray-700 leading-relaxed">
                    Dengan dukungan armada terbaru yang bersih dan terawat, serta driver profesional yang
                    berpengalaman di lintas Jawa-Bali, kami memastikan setiap perjalanan Anda tiba di tujuan dengan
                    selamat dan tepat waktu.
                  </p>
                  <a
                    href="#kontak"
                    className="inline-block mt-8 bg-primary text-white px-6 py-3 rounded-lg font-medium hover:bg-opacity-90 transition-all"
                  >
                    Hubungi Kami
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* Testimoni Section */}
          <section id="testimoni" className="py-20 bg-light">
            <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="text-center">
                <h2 className="text-3xl md:text-4xl font-extrabold text-dark">Apa Kata Pelanggan Kami?</h2>
                <p className="mt-4 text-lg text-gray-600">Kepuasan Anda adalah prioritas utama kami.</p>
              </div>

              <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-white p-8 rounded-lg shadow-lg">
                  <div className="flex text-accent">
                    <Star className="w-5 h-5 fill-current" />
                    <Star className="w-5 h-5 fill-current" />
                    <Star className="w-5 h-5 fill-current" />
                    <Star className="w-5 h-5 fill-current" />
                    <Star className="w-5 h-5 fill-current" />
                  </div>
                  <p className="mt-4 text-lg text-gray-700 italic">
                    &quot;Pelayanannya cepat dan sopirnya ramah banget. Mobilnya bersih dan nyaman. Pasti langganan di
                    sini buat travel Banyuwangi-Surabaya.&quot;
                  </p>
                  <div className="flex items-center mt-6">
                    <div className="relative w-10 h-10">
                      <Image
                        src="https://placehold.co/40x40/0077B6/FFFFFF?text=A"
                        alt="Avatar pelanggan"
                        fill
                        className="rounded-full object-cover"
                      />
                    </div>
                    <div className="ml-3">
                      <p className="font-semibold text-dark">Ahmad Yusuf</p>
                      <p className="text-sm text-gray-500">Pelanggan, Surabaya</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-8 rounded-lg shadow-lg">
                  <div className="flex text-accent">
                    <Star className="w-5 h-5 fill-current" />
                    <Star className="w-5 h-5 fill-current" />
                    <Star className="w-5 h-5 fill-current" />
                    <Star className="w-5 h-5 fill-current" />
                    <Star className="w-5 h-5 fill-current" />
                  </div>
                  <p className="mt-4 text-lg text-gray-700 italic">
                    &quot;Booking untuk travel ke Denpasar mendadak, tapi tetap dilayani dengan baik. Dijemput tepat
                    waktu dan sampai tujuan dengan aman. Recommended!&quot;
                  </p>
                  <div className="flex items-center mt-6">
                    <div className="relative w-10 h-10">
                      <Image
                        src="https://placehold.co/40x40/00B894/FFFFFF?text=S"
                        alt="Avatar pelanggan"
                        fill
                        className="rounded-full object-cover"
                      />
                    </div>
                    <div className="ml-3">
                      <p className="font-semibold text-dark">Siti Fatimah</p>
                      <p className="text-sm text-gray-500">Pelanggan, Denpasar</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-8 rounded-lg shadow-lg">
                  <div className="flex text-accent">
                    <Star className="w-5 h-5 fill-current" />
                    <Star className="w-5 h-5 fill-current" />
                    <Star className="w-5 h-5 fill-current" />
                    <Star className="w-5 h-5 fill-current" />
                    <Star className="w-5 h-5 fill-current" />
                  </div>
                  <p className="mt-4 text-lg text-gray-700 italic">
                    &quot;Pakai jasa kirim paket express Banyuwangi-Malang, sehari sampai. Harganya juga oke. Mantap
                    travelbanyuwangi.id!&quot;
                  </p>
                  <div className="flex items-center mt-6">
                    <div className="relative w-10 h-10">
                      <Image
                        src="https://placehold.co/40x40/F79E1B/FFFFFF?text=B"
                        alt="Avatar pelanggan"
                        fill
                        className="rounded-full object-cover"
                      />
                    </div>
                    <div className="ml-3">
                      <p className="font-semibold text-dark">Budi Santoso</p>
                      <p className="text-sm text-gray-500">Pelanggan, Malang</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Galeri Section */}
          <section id="galeri" className="py-20 bg-white">
            <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="text-center">
                <h2 className="text-3xl md:text-4xl font-extrabold text-dark">Galeri Armada & Kegiatan</h2>
                <p className="mt-4 text-lg text-gray-600">Lihat armada kami yang siap melayani Anda.</p>
              </div>

              <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="group aspect-square relative">
                  <Image
                    src="https://placehold.co/400x400/CCCCCC/FFFFFF?text=Armada+Luar"
                    alt="Armada eksterior travel banyuwangi"
                    fill
                    className="object-cover rounded-lg shadow-md group-hover:opacity-80 transition-opacity"
                  />
                </div>
                <div className="group aspect-square relative">
                  <Image
                    src="https://placehold.co/400x400/BBBBBB/FFFFFF?text=Interior+Mobil"
                    alt="Armada interior travel banyuwangi"
                    fill
                    className="object-cover rounded-lg shadow-md group-hover:opacity-80 transition-opacity"
                  />
                </div>
                <div className="group aspect-square relative">
                  <Image
                    src="https://placehold.co/400x400/AAAAAA/FFFFFF?text=Kegiatan+Wisata+Wali"
                    alt="Kegiatan wisata wali"
                    fill
                    className="object-cover rounded-lg shadow-md group-hover:opacity-80 transition-opacity"
                  />
                </div>
                <div className="group aspect-square relative">
                  <Image
                    src="https://placehold.co/400x400/999999/FFFFFF?text=Pelanggan+Umroh"
                    alt="Pelanggan umroh travel banyuwangi"
                    fill
                    className="object-cover rounded-lg shadow-md group-hover:opacity-80 transition-opacity"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section id="faq" className="py-20 bg-light">
            <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="text-center">
                <h2 className="text-3xl md:text-4xl font-extrabold text-dark">Pertanyaan Umum (FAQ)</h2>
                <p className="mt-4 text-lg text-gray-600">Jawaban untuk pertanyaan yang sering diajukan.</p>
              </div>

              <div className="mt-12 max-w-3xl mx-auto space-y-6">
                <details className="bg-white p-6 rounded-lg shadow-md group" open>
                  <summary className="flex justify-between items-center font-semibold text-lg text-primary cursor-pointer">
                    Apakah ada jadwal travel Banyuwangi – Surabaya setiap hari?
                    <ChevronDown className="w-5 h-5 transition-transform duration-300 group-open:rotate-180" />
                  </summary>
                  <p className="mt-4 text-gray-700 leading-relaxed">
                    Ya, kami memiliki jadwal keberangkatan setiap hari untuk rute Banyuwangi ke Surabaya dan
                    sebaliknya. Kami ada jadwal pagi, siang, dan malam. Silakan hubungi admin kami via WhatsApp untuk
                    detail jam keberangkatan.
                  </p>
                </details>

                <details className="bg-white p-6 rounded-lg shadow-md group">
                  <summary className="flex justify-between items-center font-semibold text-lg text-primary cursor-pointer">
                    Bagaimana cara pesan travel via WhatsApp?
                    <ChevronDown className="w-5 h-5 transition-transform duration-300 group-open:rotate-180" />
                  </summary>
                  <p className="mt-4 text-gray-700 leading-relaxed">
                    Sangat mudah. Cukup klik tombol &quot;Pesan Sekarang via WhatsApp&quot; di website ini. Anda akan
                    langsung terhubung dengan admin kami. Informasikan nama, jumlah penumpang, rute (misal: Banyuwangi
                    ke Malang), tanggal berangkat, dan alamat jemput.
                  </p>
                </details>

                <details className="bg-white p-6 rounded-lg shadow-md group">
                  <summary className="flex justify-between items-center font-semibold text-lg text-primary cursor-pointer">
                    Apakah bisa dijemput di rumah?
                    <ChevronDown className="w-5 h-5 transition-transform duration-300 group-open:rotate-180" />
                  </summary>
                  <p className="mt-4 text-gray-700 leading-relaxed">
                    Tentu saja. Layanan kami adalah door-to-door. Kami akan menjemput Anda di alamat yang Anda berikan
                    (selama masih dalam area jangkauan kami) dan mengantar Anda langsung ke alamat tujuan.
                  </p>
                </details>

                <details className="bg-white p-6 rounded-lg shadow-md group">
                  <summary className="flex justify-between items-center font-semibold text-lg text-primary cursor-pointer">
                    Apakah melayani pengiriman paket kilat?
                    <ChevronDown className="w-5 h-5 transition-transform duration-300 group-open:rotate-180" />
                  </summary>
                  <p className="mt-4 text-gray-700 leading-relaxed">
                    Ya, kami melayani &quot;Paket Express&quot; atau pengiriman barang cepat. Paket Anda bisa sampai di
                    hari yang sama untuk rute-rute tertentu. Silakan hubungi admin untuk informasi biaya dan jadwal.
                  </p>
                </details>
              </div>
            </div>
          </section>

          {/* Kontak Section */}
          <section id="kontak" className="py-20 bg-primary text-white">
            <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-3xl md:text-4xl font-extrabold">Siap Berangkat? Hubungi Kami Sekarang!</h2>
                  <p className="mt-4 text-lg text-gray-200">
                    Booking mudah, cepat, dan aman. Tim kami siap melayani kebutuhan perjalanan Anda 24 jam.
                  </p>
                  <div className="mt-8 space-y-4">
                    <div className="flex items-center">
                      <MapPin className="w-6 h-6 mr-3 text-accent" />
                      <span className="text-lg">Jl. Raya Jember No. 1, Banyuwangi, Jawa Timur</span>
                    </div>
                    <div className="flex items-center">
                      <Phone className="w-6 h-6 mr-3 text-accent" />
                      <span className="text-lg">0812-3456-7890 (WhatsApp 24 Jam)</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-6 h-6 mr-3 text-accent" />
                      <span className="text-lg">Jam Operasional: 24 Jam Non-Stop</span>
                    </div>
                  </div>
                  <a
                    href="https://wa.me/628123456789"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-10 inline-block bg-accent text-white px-10 py-3 rounded-lg font-bold text-lg shadow-lg hover:bg-opacity-90 transition-all transform hover:-translate-y-1"
                  >
                    Pesan via WhatsApp (Respon Cepat)
                  </a>
                </div>

                <div className="h-64 md:h-full rounded-lg shadow-xl overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=..."
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    title="Lokasi travelbanyuwangi.id"
                  ></iframe>
                </div>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
}
