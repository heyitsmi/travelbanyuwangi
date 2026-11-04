import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { StructuredData } from "./components/SEO";
import { formatPrice } from "../lib/priceConfig";
import WhatsAppLink from "./components/WhatsAppLink";
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
  Bus,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Travel Banyuwangi - Surabaya, Malang, Denpasar | Juragan Travel",
  description:
    "Layanan travel antar kota aman & nyaman dari Banyuwangi ke Surabaya, Malang, Denpasar, dan seluruh Jawa Bali. Berangkat setiap hari. Kirim permintaan melalui formulir online.",
  keywords:
    "travel banyuwangi, travel banyuwangi surabaya, travel banyuwangi malang, travel banyuwangi denpasar, travel banyuwangi solo, agen travel banyuwangi",
  authors: [{ name: "Juragan Travel" }],
  openGraph: {
    title: "Travel Banyuwangi - Surabaya, Malang, Denpasar | Juragan Travel",
    description:
      "Layanan travel antar kota aman & nyaman dari Banyuwangi ke Surabaya, Malang, Denpasar, dan seluruh Jawa Bali. Berangkat setiap hari.",
    type: "website",
    url: "https://juragantravel.com/",
    images: [
      {
        url: "https://juragantravel.com/img/hero.webp",
        width: 1200,
        height: 630,
        alt: "Travel Banyuwangi - Juragan Travel",
      },
    ],
    siteName: "Juragan Travel",
    locale: "id_ID",
  },
  twitter: {
    card: "summary_large_image",
    title: "Travel Banyuwangi - Surabaya, Malang, Denpasar | Juragan Travel",
    description: "Layanan travel antar kota aman & nyaman. Berangkat setiap hari.",
    images: ["https://juragantravel.com/img/hero.webp"],
    creator: "@juragantravel",
    site: "@juragantravel",
  },
  alternates: {
    canonical: "https://juragantravel.com/",
  }
};

const travelAgencyData = {
  "@context": "https://schema.org",
  "@type": "TravelAgency",
  name: "Juragan Travel",
  description:
    "Layanan travel antar kota aman & nyaman dari Banyuwangi ke Surabaya, Malang, Denpasar, dan seluruh Jawa Bali. Berangkat setiap hari.",
  url: "https://juragantravel.com/",
  image: "/img/hero.webp",
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
        text: "Ya, kami memiliki jadwal keberangkatan setiap hari untuk rute Banyuwangi ke Surabaya dan sebaliknya. Kami ada jadwal pagi, siang, dan malam. Silakan hubungi admin kami melalui formulir kontak untuk detail jam keberangkatan.",
      },
    },
    {
      "@type": "Question",
      name: "Bagaimana cara pesan travel melalui formulir kontak?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Cukup klik tombol Pesan Sekarang dan isi data perjalanan Anda. Tim kami akan menindaklanjuti permintaan melalui kontak yang Anda berikan.",
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
                src="/img/hero.webp"
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
              <p className="mt-6 text-xl lg:text-2xl text-gray-200 max-w-5xl mx-auto">
                Juragan Travel melayani perjalanan antar kota dari Banyuwangi ke Surabaya, Malang, Denpasar, dan kota-kota lain di Jawa–Bali. Kami menyediakan layanan door-to-door, jadwal fleksibel setiap hari, serta kenyamanan armada terbaik dengan sopir berpengalaman. Pesan travel Banyuwangi hari ini dan nikmati perjalanan tanpa repot!
              </p>
              <WhatsAppLink
                title="Pesan travel Banyuwangi melalui formulir kontak - Respon cepat 24 jam"
                className="mt-10 inline-block bg-accent text-white px-10 py-3 rounded-lg font-bold text-lg shadow-lg hover:bg-opacity-90 transition-all transform hover:-translate-y-1"
              >
                Pesan Sekarang
              </WhatsAppLink>
            </div>
          </section>

          {/* Keunggulan Section */}
          <section id="keunggulan" className="py-20 bg-gradient-to-br from-white to-light">
            <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-extrabold text-dark leading-tight">
                  Mengapa Memilih Juragan Travel?
                </h2>
                <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
                  Kami berkomitmen memberikan pengalaman perjalanan terbaik dengan beragam keunggulan yang membuat Anda nyaman.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                
                {/* Keunggulan 1: Armada Bersih & Nyaman */}
                <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                  <div className="flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-6">
                    <Truck className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-dark mb-2">Armada Bersih & Nyaman</h3>
                  <p className="text-gray-600">Kendaraan terbaru, terawat, dan selalu bersih untuk kenyamanan maksimal Anda.</p>
                </div>

                {/* Keunggulan 2: Berangkat Setiap Hari */}
                <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                  <div className="flex items-center justify-center w-16 h-16 rounded-full bg-secondary/10 text-secondary mb-6">
                    <Clock className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-dark mb-2">Berangkat Setiap Hari</h3>
                  <p className="text-gray-600">Jadwal keberangkatan fleksibel pagi, siang, dan malam, sesuai kebutuhan Anda.</p>
                </div>

                {/* Keunggulan 3: Driver Berpengalaman */}
                <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                  <div className="flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 text-accent mb-6">
                    <UserCheck className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-dark mb-2">Driver Berpengalaman</h3>
                  <p className="text-gray-600">Driver kami profesional, ramah, dan menguasai rute, menjamin perjalanan aman.</p>
                </div>

                {/* Keunggulan 4: Pemesanan cepat */}
                <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                  <div className="flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-6">
                    <Smartphone className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-dark mb-2">Pemesanan cepat</h3>
                  <p className="text-gray-600">Kirim permintaan pemesanan dengan mudah melalui formulir kontak.</p>
                </div>

                {/* Keunggulan 5: Aman & Terpercaya */}
                <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                  <div className="flex items-center justify-center w-16 h-16 rounded-full bg-secondary/10 text-secondary mb-6">
                    <ShieldCheck className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-dark mb-2">Aman & Terpercaya</h3>
                  <p className="text-gray-600">Prioritas kami adalah keamanan Anda. Kami berizin dan memiliki rekam jejak terpercaya.</p>
                </div>

                {/* Keunggulan 6: Pembayaran Fleksibel */}
                <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                  <div className="flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 text-accent mb-6">
                    <CreditCard className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-dark mb-2">Pembayaran Fleksibel</h3>
                  <p className="text-gray-600">Berbagai metode pembayaran tersedia, mulai dari transfer bank hingga pembayaran tunai.</p>
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
                      src="/img/rute/banyuwangi-surabaya.webp"
                      alt="Travel Banyuwangi Surabaya"
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-primary">Banyuwangi - Surabaya</h3>
                    <p className="mt-2 text-gray-600">
                      Perjalanan nyaman via tol, dijemput di rumah dan diantar sampai tujuan.
                    </p>
                    <Link
                      href="/rute/banyuwangi-surabaya"
                      className="inline-block mt-4 bg-secondary text-white px-5 py-2 rounded-lg font-semibold hover:bg-opacity-90 transition-colors"
                    >
                      Lihat Jadwal & Harga
                    </Link>
                  </div>
                </div>

                <div className="bg-white rounded-lg shadow-lg overflow-hidden group transition-transform duration-300 hover:shadow-xl hover:-translate-y-1">
                  <div className="relative h-48 w-full">
                    <Image
                      src="/img/rute/banyuwangi-malang.webp"
                      alt="Travel Banyuwangi Malang"
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-primary">Banyuwangi - Malang</h3>
                    <p className="mt-2 text-gray-600">
                      Armada terbaik menuju kota pendidikan dan wisata. Berangkat setiap hari.
                    </p>
                    <Link
                      href="/rute/banyuwangi-malang"
                      className="inline-block mt-4 bg-secondary text-white px-5 py-2 rounded-lg font-semibold hover:bg-opacity-90 transition-colors"
                    >
                      Lihat Jadwal & Harga
                    </Link>
                  </div>
                </div>

                <div className="bg-white rounded-lg shadow-lg overflow-hidden group transition-transform duration-300 hover:shadow-xl hover:-translate-y-1">
                  <div className="relative h-48 w-full">
                    <Image
                      src="/img/rute/banyuwangi-denpasar.webp"
                      alt="Travel Banyuwangi Denpasar"
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-primary">Banyuwangi - Denpasar</h3>
                    <p className="mt-2 text-gray-600">
                      Lintasi selat Bali dengan aman dan nyaman, langsung ke tujuan Anda di Denpasar.
                    </p>
                    <Link
                      href="/rute/banyuwangi-denpasar"
                      className="inline-block mt-4 bg-secondary text-white px-5 py-2 rounded-lg font-semibold hover:bg-opacity-90 transition-colors"
                    >
                      Lihat Jadwal & Harga
                    </Link>
                  </div>
                </div>

                <div className="bg-white rounded-lg shadow-lg overflow-hidden group transition-transform duration-300 hover:shadow-xl hover:-translate-y-1">
                  <div className="relative h-48 w-full">
                    <Image
                      src="/img/rute/banyuwangi-solo.webp"
                      alt="Travel Banyuwangi Solo"
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-primary">Banyuwangi - Solo</h3>
                    <p className="mt-2 text-gray-600">
                      Jelajahi Jawa Tengah dengan layanan travel via tol yang cepat dan aman.
                    </p>
                    <Link
                      href="/rute/banyuwangi-solo"
                      className="inline-block mt-4 bg-secondary text-white px-5 py-2 rounded-lg font-semibold hover:bg-opacity-90 transition-colors"
                    >
                      Lihat Jadwal & Harga
                    </Link>
                  </div>
                </div>

                <div className="bg-white rounded-lg shadow-lg overflow-hidden group transition-transform duration-300 hover:shadow-xl hover:-translate-y-1">
                  <div className="relative h-48 w-full">
                    <Image
                      src="/img/rute/banyuwangi-tulungagung.webp"
                      alt="Travel Banyuwangi Tulungagung"
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-primary">Banyuwangi - Tulungagung</h3>
                    <p className="mt-2 text-gray-600">
                      Layanan rute selatan Jawa Timur, melayani juga Blitar dan Kediri.
                    </p>
                    <Link
                      href="/rute/banyuwangi-tulungagung"
                      className="inline-block mt-4 bg-secondary text-white px-5 py-2 rounded-lg font-semibold hover:bg-opacity-90 transition-colors"
                    >
                      Lihat Jadwal & Harga
                    </Link>
                  </div>
                </div>

                <div className="bg-white rounded-lg shadow-lg overflow-hidden group transition-transform duration-300 hover:shadow-xl hover:-translate-y-1">
                  <div className="relative h-48 w-full">
                    <Image
                      src="/img/rute/rute-lainnya.webp"
                      alt="Travel Banyuwangi Jember Probolinggo"
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
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
                      title="Hubungi kami untuk informasi rute travel lainnya"
                      className="inline-block mt-4 bg-secondary text-white px-5 py-2 rounded-lg font-semibold hover:bg-opacity-90 transition-colors"
                    >
                      Hubungi Kami
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Jadwal & Harga Travel Section */}
          <section id="jadwal-harga" className="py-20 bg-light">
            <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-extrabold text-dark">Jadwal & Harga Travel</h2>
                <p className="mt-4 text-lg text-gray-600 max-w-4xl mx-auto">
                  Daftar lengkap rute travel dan harga terbaru. Berangkat setiap hari dengan jadwal fleksibel.
                </p>
              </div>

              <div className="max-w-5xl mx-auto">
                <div className="bg-white shadow-xl rounded-lg overflow-hidden">
                  <div className="overflow-x-auto -mx-4 sm:mx-0">
                    <table className="w-full min-w-[700px]">
                      <thead>
                        <tr className="bg-dark text-white">
                          <th className="py-4 px-4 sm:px-6 text-left font-semibold">Rute Travel</th>
                          <th className="py-4 px-3 sm:px-6 text-center font-semibold whitespace-nowrap">Jadwal</th>
                          <th className="py-4 px-4 sm:px-6 text-right font-semibold whitespace-nowrap">Harga</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200">
                        {/* Rute Utama */}
                        <tr className="hover:bg-gray-50 transition-colors">
                          <td className="py-3 px-4 sm:px-6">
                            <div className="flex items-center space-x-2 sm:space-x-2 sm:space-x-3">
                              <div className="w-2 h-2 rounded-full shrink-0 bg-primary shrink-0"></div>
                              <span className="font-semibold text-dark text-sm sm:text-base">Banyuwangi - Surabaya</span>
                            </div>
                          </td>
                          <td className="py-3 px-3 sm:px-6 text-center text-gray-700">
                            <span className="inline-block bg-light px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm whitespace-nowrap">
                              Setiap Hari
                            </span>
                          </td>
                          <td className="py-3 px-4 sm:px-6 text-right">
                            <span className="font-bold text-primary text-base sm:text-lg whitespace-nowrap">{formatPrice(200000)}</span>
                          </td>
                        </tr>
                        
                        <tr className="hover:bg-gray-50 transition-colors">
                          <td className="py-3 px-4 sm:px-6">
                            <div className="flex items-center space-x-2 sm:space-x-3">
                              <div className="w-2 h-2 rounded-full shrink-0 bg-primary"></div>
                              <span className="font-semibold text-dark text-sm sm:text-base">Banyuwangi - Malang</span>
                            </div>
                          </td>
                          <td className="py-4 px-6 text-center text-gray-700">
                            <span className="inline-block bg-light px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm whitespace-nowrap">
                              Setiap Hari
                            </span>
                          </td>
                          <td className="py-4 px-6 text-right">
                            <span className="font-bold text-primary text-base sm:text-lg whitespace-nowrap">{formatPrice(200000)}</span>
                          </td>
                        </tr>

                        <tr className="hover:bg-gray-50 transition-colors">
                          <td className="py-3 px-4 sm:px-6">
                            <div className="flex items-center space-x-2 sm:space-x-3">
                              <div className="w-2 h-2 rounded-full shrink-0 bg-primary"></div>
                              <span className="font-semibold text-dark text-sm sm:text-base">Banyuwangi - Denpasar</span>
                            </div>
                          </td>
                          <td className="py-4 px-6 text-center text-gray-700">
                            <span className="inline-block bg-light px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm whitespace-nowrap">
                              Setiap Hari
                            </span>
                          </td>
                          <td className="py-4 px-6 text-right">
                            <span className="font-bold text-primary text-base sm:text-lg whitespace-nowrap">{formatPrice(200000)}</span>
                          </td>
                        </tr>

                        <tr className="hover:bg-gray-50 transition-colors">
                          <td className="py-3 px-4 sm:px-6">
                            <div className="flex items-center space-x-2 sm:space-x-3">
                              <div className="w-2 h-2 rounded-full shrink-0 bg-secondary"></div>
                              <span className="font-semibold text-dark text-sm sm:text-base">Banyuwangi - Bandara Juanda</span>
                            </div>
                          </td>
                          <td className="py-4 px-6 text-center text-gray-700">
                            <span className="inline-block bg-light px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm whitespace-nowrap">
                              Setiap Hari
                            </span>
                          </td>
                          <td className="py-4 px-6 text-right">
                            <span className="font-bold text-primary text-base sm:text-lg whitespace-nowrap">{formatPrice(200000)}</span>
                          </td>
                        </tr>

                        <tr className="hover:bg-gray-50 transition-colors">
                          <td className="py-3 px-4 sm:px-6">
                            <div className="flex items-center space-x-2 sm:space-x-3">
                              <div className="w-2 h-2 rounded-full shrink-0 bg-secondary"></div>
                              <span className="font-semibold text-dark text-sm sm:text-base">Banyuwangi - Bandara Ngurah Rai</span>
                            </div>
                          </td>
                          <td className="py-4 px-6 text-center text-gray-700">
                            <span className="inline-block bg-light px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm whitespace-nowrap">
                              Setiap Hari
                            </span>
                          </td>
                          <td className="py-4 px-6 text-right">
                            <span className="font-bold text-primary text-base sm:text-lg whitespace-nowrap">{formatPrice(200000)}</span>
                          </td>
                        </tr>

                        {/* Rute Jarak Dekat */}
                        <tr className="hover:bg-gray-50 transition-colors">
                          <td className="py-3 px-4 sm:px-6">
                            <div className="flex items-center space-x-2 sm:space-x-3">
                              <div className="w-2 h-2 rounded-full shrink-0 bg-accent"></div>
                              <span className="font-semibold text-dark text-sm sm:text-base">Banyuwangi - Jember</span>
                            </div>
                          </td>
                          <td className="py-4 px-6 text-center text-gray-700">
                            <span className="inline-block bg-light px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm whitespace-nowrap">
                              Setiap Hari
                            </span>
                          </td>
                          <td className="py-4 px-6 text-right">
                            <span className="font-bold text-primary text-base sm:text-lg whitespace-nowrap">{formatPrice(150000)}</span>
                          </td>
                        </tr>

                        <tr className="hover:bg-gray-50 transition-colors">
                          <td className="py-3 px-4 sm:px-6">
                            <div className="flex items-center space-x-2 sm:space-x-3">
                              <div className="w-2 h-2 rounded-full shrink-0 bg-accent"></div>
                              <span className="font-semibold text-dark text-sm sm:text-base">Banyuwangi - Lumajang</span>
                            </div>
                          </td>
                          <td className="py-4 px-6 text-center text-gray-700">
                            <span className="inline-block bg-light px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm whitespace-nowrap">
                              Setiap Hari
                            </span>
                          </td>
                          <td className="py-4 px-6 text-right">
                            <span className="font-bold text-primary text-base sm:text-lg whitespace-nowrap">{formatPrice(170000)}</span>
                          </td>
                        </tr>

                        <tr className="hover:bg-gray-50 transition-colors">
                          <td className="py-3 px-4 sm:px-6">
                            <div className="flex items-center space-x-2 sm:space-x-3">
                              <div className="w-2 h-2 rounded-full shrink-0 bg-accent"></div>
                              <span className="font-semibold text-dark text-sm sm:text-base">Banyuwangi - Probolinggo</span>
                            </div>
                          </td>
                          <td className="py-4 px-6 text-center text-gray-700">
                            <span className="inline-block bg-light px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm whitespace-nowrap">
                              Setiap Hari
                            </span>
                          </td>
                          <td className="py-4 px-6 text-right">
                            <span className="font-bold text-primary text-base sm:text-lg whitespace-nowrap">{formatPrice(200000)}</span>
                          </td>
                        </tr>

                        {/* Rute Jarak Jauh */}
                        <tr className="hover:bg-gray-50 transition-colors">
                          <td className="py-3 px-4 sm:px-6">
                            <div className="flex items-center space-x-2 sm:space-x-3">
                              <div className="w-2 h-2 rounded-full shrink-0 bg-secondary"></div>
                              <span className="font-semibold text-dark text-sm sm:text-base">Banyuwangi - Solo</span>
                            </div>
                          </td>
                          <td className="py-4 px-6 text-center text-gray-700">
                            <span className="inline-block bg-light px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm whitespace-nowrap">
                              Setiap Hari
                            </span>
                          </td>
                          <td className="py-4 px-6 text-right">
                            <span className="font-bold text-primary text-base sm:text-lg whitespace-nowrap">{formatPrice(400000)}</span>
                          </td>
                        </tr>

                        <tr className="hover:bg-gray-50 transition-colors">
                          <td className="py-3 px-4 sm:px-6">
                            <div className="flex items-center space-x-2 sm:space-x-3">
                              <div className="w-2 h-2 rounded-full shrink-0 bg-secondary"></div>
                              <span className="font-semibold text-dark text-sm sm:text-base">Banyuwangi - Tulungagung</span>
                            </div>
                          </td>
                          <td className="py-4 px-6 text-center text-gray-700">
                            <span className="inline-block bg-light px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm whitespace-nowrap">
                              Setiap Hari
                            </span>
                          </td>
                          <td className="py-4 px-6 text-right">
                            <span className="font-bold text-primary text-base sm:text-lg whitespace-nowrap">{formatPrice(400000)}</span>
                          </td>
                        </tr>

                        <tr className="hover:bg-gray-50 transition-colors">
                          <td className="py-3 px-4 sm:px-6">
                            <div className="flex items-center space-x-2 sm:space-x-3">
                              <div className="w-2 h-2 rounded-full shrink-0 bg-secondary"></div>
                              <span className="font-semibold text-dark text-sm sm:text-base">Banyuwangi - Gresik</span>
                            </div>
                          </td>
                          <td className="py-4 px-6 text-center text-gray-700">
                            <span className="inline-block bg-light px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm whitespace-nowrap">
                              Setiap Hari
                            </span>
                          </td>
                          <td className="py-4 px-6 text-right">
                            <span className="font-bold text-primary text-base sm:text-lg whitespace-nowrap">{formatPrice(350000)}</span>
                          </td>
                        </tr>

                        <tr className="hover:bg-gray-50 transition-colors">
                          <td className="py-3 px-4 sm:px-6">
                            <div className="flex items-center space-x-2 sm:space-x-3">
                              <div className="w-2 h-2 rounded-full shrink-0 bg-accent"></div>
                              <span className="font-semibold text-dark text-sm sm:text-base">Banyuwangi - Sidoarjo</span>
                            </div>
                          </td>
                          <td className="py-4 px-6 text-center text-gray-700">
                            <span className="inline-block bg-light px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm whitespace-nowrap">
                              Setiap Hari
                            </span>
                          </td>
                          <td className="py-4 px-6 text-right">
                            <span className="font-bold text-primary text-base sm:text-lg whitespace-nowrap">{formatPrice(200000)}</span>
                          </td>
                        </tr>

                        <tr className="hover:bg-gray-50 transition-colors">
                          <td className="py-3 px-4 sm:px-6">
                            <div className="flex items-center space-x-2 sm:space-x-3">
                              <div className="w-2 h-2 rounded-full shrink-0 bg-accent"></div>
                              <span className="font-semibold text-dark text-sm sm:text-base">Banyuwangi - Pasuruan</span>
                            </div>
                          </td>
                          <td className="py-4 px-6 text-center text-gray-700">
                            <span className="inline-block bg-light px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm whitespace-nowrap">
                              Setiap Hari
                            </span>
                          </td>
                          <td className="py-4 px-6 text-right">
                            <span className="font-bold text-primary text-base sm:text-lg whitespace-nowrap">{formatPrice(200000)}</span>
                          </td>
                        </tr>

                        <tr className="hover:bg-gray-50 transition-colors">
                          <td className="py-3 px-4 sm:px-6">
                            <div className="flex items-center space-x-2 sm:space-x-3">
                              <div className="w-2 h-2 rounded-full shrink-0 bg-secondary"></div>
                              <span className="font-semibold text-dark text-sm sm:text-base">Banyuwangi - Batu</span>
                            </div>
                          </td>
                          <td className="py-4 px-6 text-center text-gray-700">
                            <span className="inline-block bg-light px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm whitespace-nowrap">
                              Setiap Hari
                            </span>
                          </td>
                          <td className="py-4 px-6 text-right">
                            <span className="font-bold text-primary text-base sm:text-lg whitespace-nowrap">{formatPrice(250000)}</span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="mt-8 text-center">
                  <Link
                    href="/rute"
                    className="inline-block bg-primary text-white px-8 py-3 rounded-lg font-bold hover:bg-opacity-90 transition-all"
                  >
                    Lihat Semua Rute &rarr;
                  </Link>
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
                      src="/img/layanan/travel.webp"
                      alt="Layanan Travel Antar Kota Banyuwangi"
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center space-x-2 sm:space-x-3">
                      <CarFront className="w-6 h-6 text-primary shrink-0" />
                      <h3 className="text-xl font-bold text-primary">Travel Antar Kota</h3>
                    </div>
                    <p className="mt-2 text-gray-600">Layanan door-to-door untuk rute Jawa - Bali (PP).</p>
                  </div>
                </div>

                <div className="bg-white rounded-lg shadow-lg overflow-hidden group transition-transform duration-300 hover:shadow-xl hover:-translate-y-1">
                  <div className="relative h-48 w-full">
                    <Image
                      src="/img/layanan/tiket-bus.webp"
                      alt="Layanan Tiket Bus Executive VIP dan Sleeper"
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center space-x-2 sm:space-x-3">
                      <Bus className="w-6 h-6 text-secondary shrink-0" />
                      <h3 className="text-xl font-bold text-secondary">Tiket Bus Executive, VIP & Sleeper</h3>
                    </div>
                    <p className="mt-2 text-gray-600">PO Handoyo & Gunung Harta untuk perjalanan jarak jauh.</p>
                  </div>
                </div>

                <div className="bg-white rounded-lg shadow-lg overflow-hidden group transition-transform duration-300 hover:shadow-xl hover:-translate-y-1 md:col-start-2 lg:col-start-auto">
                  <div className="relative h-48 w-full">
                    <Image
                      src="/img/layanan/paket-express.webp"
                      alt="Layanan Paket Express"
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center space-x-2 sm:space-x-3">
                      <PackageCheck className="w-6 h-6 text-accent shrink-0" />
                      <h3 className="text-xl font-bold text-accent">Paket Express</h3>
                    </div>
                    <p className="mt-2 text-gray-600">Kirim barang dan dokumen sehari sampai.</p>
                  </div>
                </div>
              </div>

              <div className="text-center mt-12">
                <Link
                  href="/layanan"
                  className="inline-block text-lg font-semibold text-white bg-primary hover:bg-opacity-90 px-8 py-3 rounded-lg transition-all"
                >
                  Lihat Semua Layanan &rarr;
                </Link>
              </div>
            </div>
          </section>

          {/* Tentang Section */}
          <section id="tentang" className="py-20 bg-white">
            <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="flex flex-col md:flex-row items-center gap-12">
                <div className="md:w-1/2 relative h-96 w-full">
                  <Image
                    src="/img/armada.webp"
                    alt="Tim dan armada Juragan Travel"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="rounded-lg shadow-xl object-cover"
                  />
                </div>
                <div className="md:w-1/2">
                  <h2 className="text-3xl md:text-4xl font-extrabold text-dark">Tentang Juragan Travel</h2>
                  <h3 className="mt-4 text-xl font-semibold text-primary">
                    Agen Travel Lokal Banyuwangi yang Aman, Cepat, dan Nyaman
                  </h3>
                  <p className="mt-4 text-lg text-gray-700 leading-relaxed">
                    Juragan Travel adalah agen travel lokal Banyuwangi yang melayani perjalanan antar kota ke
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
                    title="Hubungi Juragan Travel untuk informasi travel Banyuwangi"
                    className="inline-block mt-8 bg-primary text-white px-6 py-3 rounded-lg font-medium hover:bg-opacity-90 transition-all"
                  >
                    Hubungi Kami
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* Testimoni Section */}
          <section id="testimoni" className="py-20 bg-light overflow-hidden">
            <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="text-center">
                <h2 className="text-3xl md:text-4xl font-extrabold text-dark">Apa Kata Pelanggan Kami?</h2>
                <p className="mt-4 text-lg text-gray-600">Kepuasan Anda adalah prioritas utama kami.</p>
              </div>

              <div className="mt-12 relative">
                <div className="flex animate-marquee hover:pause-animation">
                  {/* First set of testimonials */}
                  <div className="shrink-0 w-96 mx-4">
                    <div className="bg-white p-8 rounded-lg shadow-lg h-full">
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
                            src="/avatar.webp"
                            alt="Avatar pelanggan"
                            fill
                            sizes="40px"
                            className="rounded-full object-cover"
                          />
                        </div>
                        <div className="ml-3">
                          <p className="font-semibold text-dark text-sm sm:text-base">Ahmad Yusuf</p>
                          <p className="text-sm text-gray-500">Pelanggan, Surabaya</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="shrink-0 w-96 mx-4">
                    <div className="bg-white p-8 rounded-lg shadow-lg h-full">
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
                            src="/avatar.webp"
                            alt="Avatar pelanggan"
                            fill
                            sizes="40px"
                            className="rounded-full object-cover"
                          />
                        </div>
                        <div className="ml-3">
                          <p className="font-semibold text-dark text-sm sm:text-base">Siti Fatimah</p>
                          <p className="text-sm text-gray-500">Pelanggan, Denpasar</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="shrink-0 w-96 mx-4">
                    <div className="bg-white p-8 rounded-lg shadow-lg h-full">
                      <div className="flex text-accent">
                        <Star className="w-5 h-5 fill-current" />
                        <Star className="w-5 h-5 fill-current" />
                        <Star className="w-5 h-5 fill-current" />
                        <Star className="w-5 h-5 fill-current" />
                        <Star className="w-5 h-5 fill-current" />
                      </div>
                      <p className="mt-4 text-lg text-gray-700 italic">
                        &quot;Pakai jasa kirim paket express Banyuwangi-Malang, sehari sampai. Harganya juga oke. Mantap
                        Juragan Travel!&quot;
                      </p>
                      <div className="flex items-center mt-6">
                        <div className="relative w-10 h-10">
                          <Image
                            src="/avatar.webp"
                            alt="Avatar pelanggan"
                            fill
                            sizes="40px"
                            className="rounded-full object-cover"
                          />
                        </div>
                        <div className="ml-3">
                          <p className="font-semibold text-dark text-sm sm:text-base">Budi Santoso</p>
                          <p className="text-sm text-gray-500">Pelanggan, Malang</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Duplicate set for seamless loop */}
                  <div className="shrink-0 w-96 mx-4">
                    <div className="bg-white p-8 rounded-lg shadow-lg h-full">
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
                            src="/avatar.webp"
                            alt="Avatar pelanggan"
                            fill
                            sizes="40px"
                            className="rounded-full object-cover"
                          />
                        </div>
                        <div className="ml-3">
                          <p className="font-semibold text-dark text-sm sm:text-base">Ahmad Yusuf</p>
                          <p className="text-sm text-gray-500">Pelanggan, Surabaya</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="shrink-0 w-96 mx-4">
                    <div className="bg-white p-8 rounded-lg shadow-lg h-full">
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
                            src="/avatar.webp"
                            alt="Avatar pelanggan"
                            fill
                            sizes="40px"
                            className="rounded-full object-cover"
                          />
                        </div>
                        <div className="ml-3">
                          <p className="font-semibold text-dark text-sm sm:text-base">Siti Fatimah</p>
                          <p className="text-sm text-gray-500">Pelanggan, Denpasar</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="shrink-0 w-96 mx-4">
                    <div className="bg-white p-8 rounded-lg shadow-lg h-full">
                      <div className="flex text-accent">
                        <Star className="w-5 h-5 fill-current" />
                        <Star className="w-5 h-5 fill-current" />
                        <Star className="w-5 h-5 fill-current" />
                        <Star className="w-5 h-5 fill-current" />
                        <Star className="w-5 h-5 fill-current" />
                      </div>
                      <p className="mt-4 text-lg text-gray-700 italic">
                        &quot;Pakai jasa kirim paket express Banyuwangi-Malang, sehari sampai. Harganya juga oke. Mantap
                        Juragan Travel!&quot;
                      </p>
                      <div className="flex items-center mt-6">
                        <div className="relative w-10 h-10">
                          <Image
                            src="/avatar.webp"
                            alt="Avatar pelanggan"
                            fill
                            sizes="40px"
                            className="rounded-full object-cover"
                          />
                        </div>
                        <div className="ml-3">
                          <p className="font-semibold text-dark text-sm sm:text-base">Budi Santoso</p>
                          <p className="text-sm text-gray-500">Pelanggan, Malang</p>
                        </div>
                      </div>
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
                    src="/img/car/elf.webp"
                    alt="Armada juragan travel banyuwangi (Elf)"
                    fill
                    sizes="(max-width: 768px) 50vw, 25vw"
                    className="object-cover rounded-lg shadow-md group-hover:opacity-80 transition-opacity"
                  />
                </div>
                <div className="group aspect-square relative">
                  <Image
                    src="/img/car/innova.webp"
                    alt="Armada juragan travel banyuwangi (Innova)"
                    fill
                    sizes="(max-width: 768px) 50vw, 25vw"
                    className="object-cover rounded-lg shadow-md group-hover:opacity-80 transition-opacity"
                  />
                </div>
                <div className="group aspect-square relative">
                  <Image
                    src="/img/car/veloz.webp"
                    alt="Armada juragan travel banyuwangi (Veloz)"
                    fill
                    sizes="(max-width: 768px) 50vw, 25vw"
                    className="object-cover rounded-lg shadow-md group-hover:opacity-80 transition-opacity"
                  />
                </div>
                <div className="group aspect-square relative">
                  <Image
                    src="/img/car/travello.webp"
                    alt="Armada juragan travel banyuwangi (Travello)"
                    fill
                    sizes="(max-width: 768px) 50vw, 25vw"
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
                    sebaliknya. Kami ada jadwal pagi, siang, dan malam. Silakan hubungi admin kami melalui formulir kontak untuk
                    detail jam keberangkatan.
                  </p>
                </details>

                <details className="bg-white p-6 rounded-lg shadow-md group">
                  <summary className="flex justify-between items-center font-semibold text-lg text-primary cursor-pointer">
                    Bagaimana cara pesan travel melalui formulir kontak?
                    <ChevronDown className="w-5 h-5 transition-transform duration-300 group-open:rotate-180" />
                  </summary>
                  <p className="mt-4 text-gray-700 leading-relaxed">
                    Klik tombol Pesan Sekarang dan isi data perjalanan, jumlah penumpang, tanggal, serta alamat jemput dan tujuan. Tim kami akan menindaklanjuti permintaan melalui kontak yang Anda berikan.
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

          {/* Area Layanan Kami Section */}
          <section id="area-layanan" className="py-20 bg-light">
            <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">Area Layanan Kami</h2>
                <p className="text-gray-600 max-w-3xl mx-auto">
                  Melayani perjalanan dari Banyuwangi ke berbagai kota di Jawa Timur, Jawa Tengah, dan Bali dengan 
                  layanan door-to-door yang nyaman dan terpercaya.
                </p>
              </div>

              <div className="max-w-6xl mx-auto">
                {/* Tag Cloud Container */}
                <div className="flex flex-wrap justify-center gap-3 mb-12">
                  {/* Kota Besar - Size XL */}
                  <Link 
                    href="/rute/banyuwangi-surabaya"
                    className="bg-white hover:bg-primary hover:text-white text-primary font-bold px-6 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 text-lg"
                  >
                    Surabaya
                  </Link>
                  <Link 
                    href="/rute/banyuwangi-malang"
                    className="bg-white hover:bg-primary hover:text-white text-primary font-bold px-6 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 text-lg"
                  >
                    Malang
                  </Link>
                  <Link 
                    href="/rute/banyuwangi-denpasar"
                    className="bg-white hover:bg-primary hover:text-white text-primary font-bold px-6 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 text-lg"
                  >
                    Denpasar
                  </Link>

                  {/* Kota Menengah - Size L */}
                  <Link 
                    href="/rute/banyuwangi-jember"
                    className="bg-white hover:bg-primary hover:text-white text-dark font-semibold px-5 py-2.5 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
                  >
                    Jember
                  </Link>
                  <Link 
                    href="/rute/banyuwangi-lumajang"
                    className="bg-white hover:bg-primary hover:text-white text-dark font-semibold px-5 py-2.5 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
                  >
                    Lumajang
                  </Link>
                  <Link 
                    href="/rute/banyuwangi-solo"
                    className="bg-white hover:bg-primary hover:text-white text-dark font-semibold px-5 py-2.5 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
                  >
                    Solo
                  </Link>
                  <Link 
                    href="/rute/banyuwangi-gresik"
                    className="bg-white hover:bg-primary hover:text-white text-dark font-semibold px-5 py-2.5 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
                  >
                    Gresik
                  </Link>

                  {/* Kota Kecil - Size M */}
                  <span className="bg-white hover:bg-primary hover:text-white text-gray-700 px-4 py-2 rounded-lg shadow hover:shadow-md transition-all duration-300 text-sm cursor-pointer">
                    Probolinggo
                  </span>
                  <span className="bg-white hover:bg-primary hover:text-white text-gray-700 px-4 py-2 rounded-lg shadow hover:shadow-md transition-all duration-300 text-sm cursor-pointer">
                    Pasuruan
                  </span>
                  <span className="bg-white hover:bg-primary hover:text-white text-gray-700 px-4 py-2 rounded-lg shadow hover:shadow-md transition-all duration-300 text-sm cursor-pointer">
                    Sidoarjo
                  </span>
                  <Link 
                    href="/rute/banyuwangi-tulungagung"
                    className="bg-white hover:bg-primary hover:text-white text-gray-700 px-4 py-2 rounded-lg shadow hover:shadow-md transition-all duration-300 text-sm"
                  >
                    Tulungagung
                  </Link>
                  <span className="bg-white hover:bg-primary hover:text-white text-gray-700 px-4 py-2 rounded-lg shadow hover:shadow-md transition-all duration-300 text-sm cursor-pointer">
                    Batu
                  </span>
                  <span className="bg-white hover:bg-primary hover:text-white text-gray-700 px-4 py-2 rounded-lg shadow hover:shadow-md transition-all duration-300 text-sm cursor-pointer">
                    Mojokerto
                  </span>

                  {/* Area Spesifik - Size S */}
                  <span className="bg-white hover:bg-primary hover:text-white text-gray-600 px-3 py-1.5 rounded-lg text-xs shadow-sm hover:shadow transition-all duration-300 cursor-pointer">
                    Bandara Juanda
                  </span>
                  <span className="bg-white hover:bg-primary hover:text-white text-gray-600 px-3 py-1.5 rounded-lg text-xs shadow-sm hover:shadow transition-all duration-300 cursor-pointer">
                    Bandara Ngurah Rai
                  </span>
                  <span className="bg-white hover:bg-primary hover:text-white text-gray-600 px-3 py-1.5 rounded-lg text-xs shadow-sm hover:shadow transition-all duration-300 cursor-pointer">
                    Tanjung Perak
                  </span>
                  <span className="bg-white hover:bg-primary hover:text-white text-gray-600 px-3 py-1.5 rounded-lg text-xs shadow-sm hover:shadow transition-all duration-300 cursor-pointer">
                    Kuta Bali
                  </span>
                  <span className="bg-white hover:bg-primary hover:text-white text-gray-600 px-3 py-1.5 rounded-lg text-xs shadow-sm hover:shadow transition-all duration-300 cursor-pointer">
                    Seminyak
                  </span>
                  <span className="bg-white hover:bg-primary hover:text-white text-gray-600 px-3 py-1.5 rounded-lg text-xs shadow-sm hover:shadow transition-all duration-300 cursor-pointer">
                    Sanur
                  </span>
                  <span className="bg-white hover:bg-primary hover:text-white text-gray-600 px-3 py-1.5 rounded-lg text-xs shadow-sm hover:shadow transition-all duration-300 cursor-pointer">
                    Ubud
                  </span>
                  <span className="bg-white hover:bg-primary hover:text-white text-gray-600 px-3 py-1.5 rounded-lg text-xs shadow-sm hover:shadow transition-all duration-300 cursor-pointer">
                    Jimbaran
                  </span>
                  <span className="bg-white hover:bg-primary hover:text-white text-gray-600 px-3 py-1.5 rounded-lg text-xs shadow-sm hover:shadow transition-all duration-300 cursor-pointer">
                    Nusa Dua
                  </span>
                  <span className="bg-white hover:bg-primary hover:text-white text-gray-600 px-3 py-1.5 rounded-lg text-xs shadow-sm hover:shadow transition-all duration-300 cursor-pointer">
                    Blitar
                  </span>
                  <span className="bg-white hover:bg-primary hover:text-white text-gray-600 px-3 py-1.5 rounded-lg text-xs shadow-sm hover:shadow transition-all duration-300 cursor-pointer">
                    Kediri
                  </span>
                  <span className="bg-white hover:bg-primary hover:text-white text-gray-600 px-3 py-1.5 rounded-lg text-xs shadow-sm hover:shadow transition-all duration-300 cursor-pointer">
                    Madiun
                  </span>
                  <span className="bg-white hover:bg-primary hover:text-white text-gray-600 px-3 py-1.5 rounded-lg text-xs shadow-sm hover:shadow transition-all duration-300 cursor-pointer">
                    Ponorogo
                  </span>
                  <span className="bg-white hover:bg-primary hover:text-white text-gray-600 px-3 py-1.5 rounded-lg text-xs shadow-sm hover:shadow transition-all duration-300 cursor-pointer">
                    Bondowoso
                  </span>
                  <span className="bg-white hover:bg-primary hover:text-white text-gray-600 px-3 py-1.5 rounded-lg text-xs shadow-sm hover:shadow transition-all duration-300 cursor-pointer">
                    Situbondo
                  </span>
                </div>
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
                      <span className="text-lg">Kec. Bangorejo, Banyuwangi, Jawa Timur</span>
                    </div>
                    <Link href="/kontak#contact-form" className="flex items-center hover:text-primary">
                      <Phone className="w-6 h-6 mr-3 text-accent" />
                      <span className="text-lg">Hubungi kami</span>
                    </Link>
                    <div className="flex items-center">
                      <Clock className="w-6 h-6 mr-3 text-accent" />
                      <span className="text-lg">Jam Operasional: 24 Jam Non-Stop</span>
                    </div>
                  </div>
                  <WhatsAppLink
                    title="Pesan travel Banyuwangi sekarang melalui formulir kontak - Respon cepat 24 jam"
                    className="mt-10 inline-block bg-accent text-white px-10 py-3 rounded-lg font-bold text-lg shadow-lg hover:bg-opacity-90 transition-all transform hover:-translate-y-1"
                  >
                    Kirim Permintaan (Respon Cepat)
                  </WhatsAppLink>
                </div>

                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent rounded-xl z-10"></div>
                  <div className="relative overflow-hidden rounded-xl shadow-2xl border-4 border-white/20 backdrop-blur-sm h-96">
                    <Image 
                      src="/img/contact.webp" 
                      alt="Kontak Juragan Travel" 
                      fill
                      className="object-cover transform hover:scale-105 transition-transform duration-500 filter brightness-110 contrast-105" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/30 via-transparent to-transparent"></div>
                  </div>
                  <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-accent/20 rounded-full blur-xl"></div>
                  <div className="absolute -top-4 -left-4 w-16 h-16 bg-secondary/20 rounded-full blur-lg"></div>
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
