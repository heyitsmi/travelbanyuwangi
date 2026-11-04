import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { StructuredData } from "../../components/SEO";
import { Map, Home, Mountain, ChevronDown, Plane } from "lucide-react";
import BookingForm from "../../components/BookingForm";
import WhatsAppLink from "../../components/WhatsAppLink";

export const metadata: Metadata = {
  title: "Travel Banyuwangi Malang (PP) – Jadwal, Harga & Door to Door | Juragan Travel",
  description:
    "Butuh travel Banyuwangi Malang yang aman dan nyaman? Juragan Travel melayani travel Banyuwangi Malang dan Malang Banyuwangi setiap hari (pagi, siang, malam) dengan layanan door-to-door ke kampus, kos, hotel, dan Kota Batu.",
  keywords:
    "travel banyuwangi malang, travel malang banyuwangi, harga travel banyuwangi malang, jadwal travel banyuwangi malang, travel banyuwangi batu, travel banyuwangi malang pagi, travel banyuwangi malang malam",
  authors: [{ name: "Juragan Travel" }],
  openGraph: {
    title: "Travel Banyuwangi Malang (PP) – Jadwal, Harga & Door to Door | Juragan Travel",
    description:
      "Travel Banyuwangi Malang (PP) dengan layanan door-to-door. Jemput di rumah, antar sampai Malang/Kota Batu dan area kampus UB, UM, UIN. Cek jadwal & pesan melalui formulir kontak sekarang.",
    type: "website",
    url: "https://juragantravel.com/rute/banyuwangi-malang",
    images: [
      {
        url: "https://juragantravel.com/img/rute/banyuwangi-malang.webp",
        width: 1200,
        height: 630,
      },
    ],
    siteName: "Juragan Travel",
  },
  twitter: {
    card: "summary_large_image",
    title: "Travel Banyuwangi Malang (PP) – Jadwal, Harga & Door to Door | Juragan Travel",
    description:
      "Travel Banyuwangi Malang (PP) via layanan door-to-door. Jemput di rumah, antar sampai Malang/Kota Batu. Cek jadwal & pesan melalui formulir kontak sekarang.",
    images: ["https://juragantravel.com/img/rute/banyuwangi-malang.webp"],
  },
  alternates: {
    canonical: "https://juragantravel.com/rute/banyuwangi-malang",
  },
};

const busTripData = {
  "@context": "https://schema.org",
  "@type": "BusTrip",
  provider: {
    "@type": "TravelAgency",
    name: "Juragan Travel",
    url: "https://juragantravel.com/",
    image: "https://juragantravel.com/img/rute/banyuwangi-malang.webp",
  },
  departureBusStop: {
    "@type": "BusStop",
    name: "Area Banyuwangi (Door-to-door)",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Banyuwangi",
      addressRegion: "Jawa Timur",
      addressCountry: "ID",
    },
  },
  arrivalBusStop: {
    "@type": "BusStop",
    name: "Area Malang & Kota Batu (Door-to-door)",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Malang",
      addressRegion: "Jawa Timur",
      addressCountry: "ID",
    },
  },
  name: "Travel Banyuwangi Malang (PP) via Jember/Probolinggo",
  description:
    "Layanan travel Banyuwangi Malang dan travel Malang Banyuwangi dengan sistem door-to-door, jadwal pagi, siang, dan malam, serta pengantaran ke kampus dan area wisata Kota Batu.",
  offers: {
    "@type": "Offer",
    price: "200000",
    priceCurrency: "IDR",
    name: "Harga Tiket Travel Banyuwangi Malang",
    description: "Harga travel Banyuwangi Malang dapat bervariasi. Hubungi admin untuk harga terbaru.",
    url: "https://juragantravel.com/rute/banyuwangi-malang",
    availability: "https://schema.org/InStock",
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
      name: "Rute",
      item: "https://juragantravel.com/rute",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Banyuwangi - Malang",
      item: "https://juragantravel.com/rute/banyuwangi-malang",
    },
  ],
};

const schedules = [
  {
    route: "Travel Banyuwangi → Malang",
    schedule: "Pagi (09:00), Siang (15:00), Malam (21:00)",
    price: "Rp 200.000",
  },
  {
    route: "Travel Malang → Banyuwangi",
    schedule: "Pagi (09:00), Siang (15:00), Malam (21:00)",
    price: "Rp 200.000",
  },
  {
    route: "Travel Banyuwangi → Kota Batu",
    schedule: "Hubungi Admin (Menyesuaikan Jadwal)",
    price: "Rp 250.000",
  },
];

const benefits = [
  {
    icon: Map,
    title: "Rute Nyaman",
    description: "Perjalanan nyaman via Jember/Probolinggo dengan istirahat teratur.",
  },
  {
    icon: Home,
    title: "Door to Door",
    description: "Kami jemput di rumah Anda (Banyuwangi) dan antar sampai alamat tujuan (Malang).",
  },
  {
    icon: Mountain,
    title: "Support Kota Batu",
    description: "Melayani antar-jemput di area wisata Kota Batu (Jatim Park, BNS, dll).",
  },
];

const faqs = [
  {
    question: "Berapa jam perjalanan travel Banyuwangi Malang?",
    answer:
      "Estimasi waktu tempuh normal adalah sekitar 6-7 jam, sudah termasuk 1x istirahat. Waktu bisa bervariasi tergantung kondisi lalu lintas dan titik penjemputan/pengantaran.",
    defaultOpen: true,
  },
  {
    question: "Area penjemputan di Banyuwangi meliputi mana saja?",
    answer:
      "Kami melayani penjemputan di area Kota Banyuwangi, Rogojampi, Srono, Genteng, Jajag, dan Kalibaru. Untuk area di luar jalur utama, mungkin ada sedikit biaya tambahan. Silakan konfirmasi alamat Anda ke admin.",
    defaultOpen: false,
  },
  {
    question: "Area pengantaran di Malang meliputi mana saja?",
    answer:
      "Kami melayani pengantaran ke seluruh area Kota Malang (area kampus UB, UM, UIN), Lowokwaru, Blimbing, Sukun, dan Sawojajar. Kami juga melayani pengantaran ke Kota Batu dengan sedikit biaya tambahan.",
    defaultOpen: false,
  },
  {
    question: "Apakah ada jadwal travel Banyuwangi Malang malam?",
    answer:
      "Ya, kami memiliki jadwal malam sekitar pukul 21:00 WIB. Jadwal ini cocok bagi Anda yang ingin tiba di Malang pada pagi hari.",
    defaultOpen: false,
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export default function BanyuwangiMalangPage() {
  return (
    <>
      <StructuredData data={busTripData} />
      <StructuredData data={breadcrumbData} />
      <StructuredData data={faqSchema} />
      <div className="bg-white antialiased">
        <Header />

        <main>
          {/* Hero Section */}
          <section className="bg-light py-20">
            <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
              <nav className="text-sm mb-4">
                <Link href="/" className="text-gray-600 hover:text-primary" title="Kembali ke Beranda">
                  Beranda
                </Link>
                <span className="text-gray-400 mx-2">/</span>
                <Link href="/rute" className="text-gray-600 hover:text-primary" title="Lihat Semua Rute Travel">
                  Rute
                </Link>
                <span className="text-gray-400 mx-2">/</span>
                <span className="text-dark font-medium">Banyuwangi - Malang</span>
              </nav>
              <h1 className="text-2xl md:text-4xl font-extrabold text-dark">Travel Banyuwangi Malang (PP) – Door to Door & Nyaman</h1>
              <p className="mt-4 text-sm md:text-lg text-gray-600 max-w-5xl mx-auto">
                Juragan Travel melayani travel Banyuwangi Malang dan travel Malang Banyuwangi setiap hari (pagi, siang, malam) dengan layanan door-to-door, armada nyaman, dan rute fleksibel via Jember atau Probolinggo.
              </p>
            </div>
          </section>

          {/* Detail Rute Section */}
          <section id="detail-rute" className="py-20 bg-white">
            <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              {/* Deskripsi Rute */}
              <div className="flex flex-col md:flex-row items-center gap-12 mb-20">
                <div className="md:w-1/2 relative h-96 w-full">
                  <Image
                    src="/img/rute/banyuwangi-malang.webp"
                    alt="Armada travel Banyuwangi Malang sejuk dan nyaman"
                    fill
                    className="rounded-lg shadow-xl object-cover"
                  />
                </div>
                <div className="md:w-1/2">
                  <span className="text-sm md:text-base text-primary font-semibold uppercase">RUTE KOTA WISATA</span>
                  <h2 className="mt-2 text-xl md:text-4xl font-extrabold text-dark">
                    Travel Banyuwangi Malang (Kota Batu)
                  </h2>
                  <p className="mt-4 text-sm md:text-lg text-gray-700 leading-relaxed">
                    Kami melayani <strong>travel Banyuwangi Malang</strong> dan{" "}
                    <strong>travel Malang Banyuwangi</strong> setiap hari. Rute ini sangat ideal untuk mahasiswa,
                    pekerja, atau wisatawan yang ingin berkunjung ke Malang dan Kota Batu.
                  </p>
                  <p className="mt-4 text-sm md:text-lg text-gray-700 leading-relaxed">
                    Perjalanan Anda akan nyaman dengan armada kami yang terawat. Kami juga melayani
                    penjemputan/pengantaran di area kampus (UB, UM, UIN) dan <strong>area wisata Kota Batu</strong>{" "}
                    dengan penyesuaian.
                  </p>
                  <p className="mt-4 text-sm md:text-lg text-gray-700 leading-relaxed">
                    Rute travel Banyuwangi ke Malang dan Kota Batu ini cocok untuk mahasiswa, pekerja, hingga wisatawan yang ingin berlibur ke Malang dan sekitarnya. Dengan memilih travel Banyuwangi Malang, Anda tidak perlu pindah kendaraan karena kami mengantar langsung sampai tujuan.
                  </p>
                </div>
              </div>

              {/* Jadwal & Harga */}
              <div className="bg-light p-8 md:p-12 rounded-lg shadow-lg mb-20">
                <div className="text-center">
                  <h2 className="text-xl md:text-4xl font-extrabold text-dark">Jadwal & Harga Travel Banyuwangi Malang</h2>
                  <p className="mt-4 text-sm md:text-lg text-gray-600">
                    Jadwal pasti, harga terjangkau. Pesan kursi travel Banyuwangi Malang Anda sekarang!
                  </p>
                </div>
                <div className="mt-10 overflow-x-auto">
                  <table className="w-full min-w-max text-left">
                    <thead>
                      <tr className="border-b border-gray-300">
                        <th className="p-2 md:p-4 text-sm md:text-lg font-semibold text-dark">Rute</th>
                        <th className="p-2 md:p-4 text-sm md:text-lg font-semibold text-dark">Jadwal Berangkat</th>
                        <th className="p-2 md:p-4 text-sm md:text-lg font-semibold text-dark">Harga (mulai)</th>
                        <th className="p-2 md:p-4 text-sm md:text-lg font-semibold text-dark">Aksi</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      {schedules.map((schedule, index) => (
                        <tr key={index} className="hover:bg-white transition-colors">
                          <td className="p-2 md:p-4 text-xs md:text-base font-medium text-gray-700">{schedule.route}</td>
                          <td className="p-2 md:p-4 text-xs md:text-base text-gray-700">{schedule.schedule}</td>
                          <td className="p-2 md:p-4 font-bold text-primary text-sm md:text-lg">{schedule.price}</td>
                          <td className="p-2 md:p-4">
                            <WhatsAppLink
                              message={`Halo, saya mau pesan ${schedule.route}`}
                              title="Pesan Travel Banyuwangi Malang melalui formulir kontak"
                              className="bg-secondary text-white px-3 py-1.5 md:px-4 md:py-2 rounded-lg text-xs md:text-base font-medium hover:bg-opacity-90"
                            >
                              Pesan
                            </WhatsAppLink>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p className="text-center mt-6 text-sm text-gray-600 max-w-3xl mx-auto">
                  *Jadwal travel Banyuwangi Malang tersedia pagi, siang, dan malam dengan harga mulai Rp 200.000 per orang. Harga dapat berubah sewaktu-waktu. Hubungi admin melalui formulir kontak untuk harga pasti dan promo terbaru.
                </p>
              </div>

              {/* Keunggulan Rute */}
              <div className="mb-20">
                <div className="text-center">
                  <h2 className="text-xl md:text-4xl font-extrabold text-dark">
                    Keunggulan Travel Banyuwangi Malang Kami
                  </h2>
                </div>
                <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
                  {benefits.map((benefit, index) => {
                    const IconComponent = benefit.icon;
                    return (
                      <div key={index} className="bg-white p-6 rounded-lg shadow-lg flex items-start space-x-4">
                        <IconComponent className="w-10 h-10 md:w-12 md:h-12 text-secondary shrink-0" />
                        <div>
                          <h3 className="text-lg md:text-xl font-bold text-dark">{benefit.title}</h3>
                          <p className="text-sm md:text-base text-gray-600 mt-1">{benefit.description}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Area Layanan Section */}
              <div className="mb-20 bg-light p-6 md:p-12 rounded-lg shadow-lg">
                <div className="text-center mb-8">
                  <h2 className="text-2xl md:text-4xl font-extrabold text-dark">
                    Area Layanan Travel Banyuwangi Malang
                  </h2>
                  <p className="mt-3 text-base md:text-lg text-gray-600 max-w-5xl mx-auto px-2">
                    Layanan travel Banyuwangi Malang kami mencakup penjemputan dan pengantaran di seluruh area Banyuwangi, Kota Malang, dan Kota Batu, termasuk kampus, kos, hotel, dan area wisata.
                  </p>
                </div>

                {/* Tag Cloud Area Coverage */}
                <div className="flex flex-wrap justify-center gap-2 md:gap-3">
                  {/* Banyuwangi Areas */}
                  <span className="bg-white px-3 py-1.5 md:px-4 md:py-2 rounded-lg text-xs md:text-sm font-medium text-gray-700 shadow-sm hover:shadow-md transition-shadow">
                    Banyuwangi Kota
                  </span>
                  <span className="bg-white px-3 py-1.5 md:px-4 md:py-2 rounded-lg text-xs md:text-sm font-medium text-gray-700 shadow-sm hover:shadow-md transition-shadow">
                    Rogojampi
                  </span>
                  <span className="bg-white px-3 py-1.5 md:px-4 md:py-2 rounded-lg text-xs md:text-sm font-medium text-gray-700 shadow-sm hover:shadow-md transition-shadow">
                    Kabat
                  </span>
                  <span className="bg-white px-3 py-1.5 md:px-4 md:py-2 rounded-lg text-xs md:text-sm font-medium text-gray-700 shadow-sm hover:shadow-md transition-shadow">
                    Genteng
                  </span>
                  <span className="bg-white px-3 py-1.5 md:px-4 md:py-2 rounded-lg text-xs md:text-sm font-medium text-gray-700 shadow-sm hover:shadow-md transition-shadow">
                    Srono
                  </span>
                  <span className="bg-white px-3 py-1.5 md:px-4 md:py-2 rounded-lg text-xs md:text-sm font-medium text-gray-700 shadow-sm hover:shadow-md transition-shadow">
                    Glenmore
                  </span>
                  <span className="bg-white px-3 py-1.5 md:px-4 md:py-2 rounded-lg text-xs md:text-sm font-medium text-gray-700 shadow-sm hover:shadow-md transition-shadow">
                    Kalibaru
                  </span>
                  <span className="bg-white px-3 py-1.5 md:px-4 md:py-2 rounded-lg text-xs md:text-sm font-medium text-gray-700 shadow-sm hover:shadow-md transition-shadow">
                    Glagah
                  </span>
                  <span className="bg-white px-3 py-1.5 md:px-4 md:py-2 rounded-lg text-xs md:text-sm font-medium text-gray-700 shadow-sm hover:shadow-md transition-shadow">
                    Singojuruh
                  </span>
                  <span className="bg-white px-3 py-1.5 md:px-4 md:py-2 rounded-lg text-xs md:text-sm font-medium text-gray-700 shadow-sm hover:shadow-md transition-shadow">
                    Cluring
                  </span>
                  <span className="bg-white px-3 py-1.5 md:px-4 md:py-2 rounded-lg text-xs md:text-sm font-medium text-gray-700 shadow-sm hover:shadow-md transition-shadow">
                    Purwoharjo
                  </span>
                  <span className="bg-white px-3 py-1.5 md:px-4 md:py-2 rounded-lg text-xs md:text-sm font-medium text-gray-700 shadow-sm hover:shadow-md transition-shadow">
                    Muncar
                  </span>
                  <span className="bg-white px-3 py-1.5 md:px-4 md:py-2 rounded-lg text-xs md:text-sm font-medium text-gray-700 shadow-sm hover:shadow-md transition-shadow">
                    Wongsorejo
                  </span>
                  <span className="bg-white px-3 py-1.5 md:px-4 md:py-2 rounded-lg text-xs md:text-sm font-medium text-gray-700 shadow-sm hover:shadow-md transition-shadow">
                    Songgon
                  </span>
                  <span className="bg-white px-3 py-1.5 md:px-4 md:py-2 rounded-lg text-xs md:text-sm font-medium text-gray-700 shadow-sm hover:shadow-md transition-shadow">
                    Sempu
                  </span>
                  <span className="bg-white px-3 py-1.5 md:px-4 md:py-2 rounded-lg text-xs md:text-sm font-medium text-gray-700 shadow-sm hover:shadow-md transition-shadow">
                    Giri
                  </span>
                  <span className="bg-white px-3 py-1.5 md:px-4 md:py-2 rounded-lg text-xs md:text-sm font-medium text-gray-700 shadow-sm hover:shadow-md transition-shadow">
                    Pesanggaran
                  </span>
                  <span className="bg-white px-3 py-1.5 md:px-4 md:py-2 rounded-lg text-xs md:text-sm font-medium text-gray-700 shadow-sm hover:shadow-md transition-shadow">
                    Bangorejo
                  </span>
                  <span className="bg-white px-3 py-1.5 md:px-4 md:py-2 rounded-lg text-xs md:text-sm font-medium text-gray-700 shadow-sm hover:shadow-md transition-shadow">
                    Tegalsari
                  </span>
                  <span className="bg-white px-3 py-1.5 md:px-4 md:py-2 rounded-lg text-xs md:text-sm font-medium text-gray-700 shadow-sm hover:shadow-md transition-shadow">
                    Licin
                  </span>
                  <span className="bg-white px-3 py-1.5 md:px-4 md:py-2 rounded-lg text-xs md:text-sm font-medium text-gray-700 shadow-sm hover:shadow-md transition-shadow">
                    Tegaldlimo
                  </span>
                  <span className="bg-white px-3 py-1.5 md:px-4 md:py-2 rounded-lg text-xs md:text-sm font-medium text-gray-700 shadow-sm hover:shadow-md transition-shadow">
                    Siliragung
                  </span>
                  
                  {/* Jember Areas */}
                  <span className="bg-white px-3 py-1.5 md:px-4 md:py-2 rounded-lg text-xs md:text-sm font-medium text-gray-700 shadow-sm hover:shadow-md transition-shadow">
                    Jember Kota
                  </span>
                  <span className="bg-white px-3 py-1.5 md:px-4 md:py-2 rounded-lg text-xs md:text-sm font-medium text-gray-700 shadow-sm hover:shadow-md transition-shadow">
                    Sumbersari
                  </span>
                  <span className="bg-white px-3 py-1.5 md:px-4 md:py-2 rounded-lg text-xs md:text-sm font-medium text-gray-700 shadow-sm hover:shadow-md transition-shadow">
                    Patrang
                  </span>
                  <span className="bg-white px-3 py-1.5 md:px-4 md:py-2 rounded-lg text-xs md:text-sm font-medium text-gray-700 shadow-sm hover:shadow-md transition-shadow">
                    Kaliwates
                  </span>
                  <span className="bg-white px-3 py-1.5 md:px-4 md:py-2 rounded-lg text-xs md:text-sm font-medium text-gray-700 shadow-sm hover:shadow-md transition-shadow">
                    Ambulu
                  </span>
                  <span className="bg-white px-3 py-1.5 md:px-4 md:py-2 rounded-lg text-xs md:text-sm font-medium text-gray-700 shadow-sm hover:shadow-md transition-shadow">
                    Arjasa
                  </span>
                  <span className="bg-white px-3 py-1.5 md:px-4 md:py-2 rounded-lg text-xs md:text-sm font-medium text-gray-700 shadow-sm hover:shadow-md transition-shadow">
                    Balung
                  </span>
                  <span className="bg-white px-3 py-1.5 md:px-4 md:py-2 rounded-lg text-xs md:text-sm font-medium text-gray-700 shadow-sm hover:shadow-md transition-shadow">
                    Rambipuji
                  </span>
                  <span className="bg-white px-3 py-1.5 md:px-4 md:py-2 rounded-lg text-xs md:text-sm font-medium text-gray-700 shadow-sm hover:shadow-md transition-shadow">
                    Umbulsari
                  </span>
                  <span className="bg-white px-3 py-1.5 md:px-4 md:py-2 rounded-lg text-xs md:text-sm font-medium text-gray-700 shadow-sm hover:shadow-md transition-shadow">
                    Wuluhan
                  </span>
                  <span className="bg-white px-3 py-1.5 md:px-4 md:py-2 rounded-lg text-xs md:text-sm font-medium text-gray-700 shadow-sm hover:shadow-md transition-shadow">
                    Tanggul
                  </span>
                  <span className="bg-white px-3 py-1.5 md:px-4 md:py-2 rounded-lg text-xs md:text-sm font-medium text-gray-700 shadow-sm hover:shadow-md transition-shadow">
                    Bangsalsari
                  </span>
                  <span className="bg-white px-3 py-1.5 md:px-4 md:py-2 rounded-lg text-xs md:text-sm font-medium text-gray-700 shadow-sm hover:shadow-md transition-shadow">
                    Panti
                  </span>
                  <span className="bg-white px-3 py-1.5 md:px-4 md:py-2 rounded-lg text-xs md:text-sm font-medium text-gray-700 shadow-sm hover:shadow-md transition-shadow">
                    Sukorambi
                  </span>
                  <span className="bg-white px-3 py-1.5 md:px-4 md:py-2 rounded-lg text-xs md:text-sm font-medium text-gray-700 shadow-sm hover:shadow-md transition-shadow">
                    Jenggawah
                  </span>
                  <span className="bg-white px-3 py-1.5 md:px-4 md:py-2 rounded-lg text-xs md:text-sm font-medium text-gray-700 shadow-sm hover:shadow-md transition-shadow">
                    Ajung
                  </span>
                  <span className="bg-white px-3 py-1.5 md:px-4 md:py-2 rounded-lg text-xs md:text-sm font-medium text-gray-700 shadow-sm hover:shadow-md transition-shadow">
                    Jombang
                  </span>
                  <span className="bg-white px-3 py-1.5 md:px-4 md:py-2 rounded-lg text-xs md:text-sm font-medium text-gray-700 shadow-sm hover:shadow-md transition-shadow">
                    Puger
                  </span>
                  <span className="bg-white px-3 py-1.5 md:px-4 md:py-2 rounded-lg text-xs md:text-sm font-medium text-gray-700 shadow-sm hover:shadow-md transition-shadow">
                    Kencong
                  </span>
                  
                  {/* Malang Areas */}
                  <span className="bg-white px-3 py-1.5 md:px-4 md:py-2 rounded-lg text-xs md:text-sm font-medium text-gray-700 shadow-sm hover:shadow-md transition-shadow">
                    Malang Kota
                  </span>
                  <span className="bg-white px-3 py-1.5 md:px-4 md:py-2 rounded-lg text-xs md:text-sm font-medium text-gray-700 shadow-sm hover:shadow-md transition-shadow">
                    Lowokwaru
                  </span>
                  <span className="bg-white px-3 py-1.5 md:px-4 md:py-2 rounded-lg text-xs md:text-sm font-medium text-gray-700 shadow-sm hover:shadow-md transition-shadow">
                    Blimbing
                  </span>
                  <span className="bg-white px-3 py-1.5 md:px-4 md:py-2 rounded-lg text-xs md:text-sm font-medium text-gray-700 shadow-sm hover:shadow-md transition-shadow">
                    Sukun
                  </span>
                  <span className="bg-white px-3 py-1.5 md:px-4 md:py-2 rounded-lg text-xs md:text-sm font-medium text-gray-700 shadow-sm hover:shadow-md transition-shadow">
                    Klojen
                  </span>
                  <span className="bg-white px-3 py-1.5 md:px-4 md:py-2 rounded-lg text-xs md:text-sm font-medium text-gray-700 shadow-sm hover:shadow-md transition-shadow">
                    Kedungkandang
                  </span>
                  <span className="bg-white px-3 py-1.5 md:px-4 md:py-2 rounded-lg text-xs md:text-sm font-medium text-gray-700 shadow-sm hover:shadow-md transition-shadow">
                    Dau
                  </span>
                  <span className="bg-white px-3 py-1.5 md:px-4 md:py-2 rounded-lg text-xs md:text-sm font-medium text-gray-700 shadow-sm hover:shadow-md transition-shadow">
                    Singosari
                  </span>
                  <span className="bg-white px-3 py-1.5 md:px-4 md:py-2 rounded-lg text-xs md:text-sm font-medium text-gray-700 shadow-sm hover:shadow-md transition-shadow">
                    Lawang
                  </span>
                  <span className="bg-white px-3 py-1.5 md:px-4 md:py-2 rounded-lg text-xs md:text-sm font-medium text-gray-700 shadow-sm hover:shadow-md transition-shadow">
                    Pakis
                  </span>
                  <span className="bg-white px-3 py-1.5 md:px-4 md:py-2 rounded-lg text-xs md:text-sm font-medium text-gray-700 shadow-sm hover:shadow-md transition-shadow">
                    Tumpang
                  </span>
                  <span className="bg-white px-3 py-1.5 md:px-4 md:py-2 rounded-lg text-xs md:text-sm font-medium text-gray-700 shadow-sm hover:shadow-md transition-shadow">
                    Wagir
                  </span>
                  <span className="bg-white px-3 py-1.5 md:px-4 md:py-2 rounded-lg text-xs md:text-sm font-medium text-gray-700 shadow-sm hover:shadow-md transition-shadow">
                    Pakisaji
                  </span>
                  <span className="bg-white px-3 py-1.5 md:px-4 md:py-2 rounded-lg text-xs md:text-sm font-medium text-gray-700 shadow-sm hover:shadow-md transition-shadow">
                    Tajinan
                  </span>
                  <span className="bg-white px-3 py-1.5 md:px-4 md:py-2 rounded-lg text-xs md:text-sm font-medium text-gray-700 shadow-sm hover:shadow-md transition-shadow">
                    Turen
                  </span>
                  <span className="bg-white px-3 py-1.5 md:px-4 md:py-2 rounded-lg text-xs md:text-sm font-medium text-gray-700 shadow-sm hover:shadow-md transition-shadow">
                    Kepanjen
                  </span>
                  <span className="bg-white px-3 py-1.5 md:px-4 md:py-2 rounded-lg text-xs md:text-sm font-medium text-gray-700 shadow-sm hover:shadow-md transition-shadow">
                    Gondanglegi
                  </span>
                  <span className="bg-white px-3 py-1.5 md:px-4 md:py-2 rounded-lg text-xs md:text-sm font-medium text-gray-700 shadow-sm hover:shadow-md transition-shadow">
                    Ngajum
                  </span>
                  <span className="bg-white px-3 py-1.5 md:px-4 md:py-2 rounded-lg text-xs md:text-sm font-medium text-gray-700 shadow-sm hover:shadow-md transition-shadow">
                    Wonosari
                  </span>
                  <span className="bg-white px-3 py-1.5 md:px-4 md:py-2 rounded-lg text-xs md:text-sm font-medium text-gray-700 shadow-sm hover:shadow-md transition-shadow">
                    Karangploso
                  </span>
                  <span className="bg-white px-3 py-1.5 md:px-4 md:py-2 rounded-lg text-xs md:text-sm font-medium text-gray-700 shadow-sm hover:shadow-md transition-shadow">
                    Jabung
                  </span>
                  <span className="bg-white px-3 py-1.5 md:px-4 md:py-2 rounded-lg text-xs md:text-sm font-medium text-gray-700 shadow-sm hover:shadow-md transition-shadow">
                    Poncokusumo
                  </span>
                  <span className="bg-white px-3 py-1.5 md:px-4 md:py-2 rounded-lg text-xs md:text-sm font-medium text-gray-700 shadow-sm hover:shadow-md transition-shadow">
                    Wajak
                  </span>
                  <span className="bg-white px-3 py-1.5 md:px-4 md:py-2 rounded-lg text-xs md:text-sm font-medium text-gray-700 shadow-sm hover:shadow-md transition-shadow">
                    Dampit
                  </span>
                  <span className="bg-white px-3 py-1.5 md:px-4 md:py-2 rounded-lg text-xs md:text-sm font-medium text-gray-700 shadow-sm hover:shadow-md transition-shadow">
                    Bululawang
                  </span>
                  <span className="bg-white px-3 py-1.5 md:px-4 md:py-2 rounded-lg text-xs md:text-sm font-medium text-gray-700 shadow-sm hover:shadow-md transition-shadow">
                    Kampus UB
                  </span>
                  <span className="bg-white px-3 py-1.5 md:px-4 md:py-2 rounded-lg text-xs md:text-sm font-medium text-gray-700 shadow-sm hover:shadow-md transition-shadow">
                    Kampus UM
                  </span>
                  <span className="bg-white px-3 py-1.5 md:px-4 md:py-2 rounded-lg text-xs md:text-sm font-medium text-gray-700 shadow-sm hover:shadow-md transition-shadow">
                    Kampus UIN
                  </span>
                  <span className="bg-white px-3 py-1.5 md:px-4 md:py-2 rounded-lg text-xs md:text-sm font-medium text-gray-700 shadow-sm hover:shadow-md transition-shadow">
                    Sawojajar
                  </span>
                  <span className="bg-white px-3 py-1.5 md:px-4 md:py-2 rounded-lg text-xs md:text-sm font-medium text-gray-700 shadow-sm hover:shadow-md transition-shadow">
                    Dinoyo
                  </span>
                  <span className="bg-white px-3 py-1.5 md:px-4 md:py-2 rounded-lg text-xs md:text-sm font-medium text-gray-700 shadow-sm hover:shadow-md transition-shadow">
                    Tlogomas
                  </span>
                  <span className="bg-white px-3 py-1.5 md:px-4 md:py-2 rounded-lg text-xs md:text-sm font-medium text-gray-700 shadow-sm hover:shadow-md transition-shadow">
                    Arjosari
                  </span>
                  <span className="bg-white px-3 py-1.5 md:px-4 md:py-2 rounded-lg text-xs md:text-sm font-medium text-gray-700 shadow-sm hover:shadow-md transition-shadow">
                    Landungsari
                  </span>
                  <span className="bg-white px-3 py-1.5 md:px-4 md:py-2 rounded-lg text-xs md:text-sm font-medium text-gray-700 shadow-sm hover:shadow-md transition-shadow">
                    Sumbersari
                  </span>
                  
                  {/* Kota Batu */}
                  <span className="bg-white px-3 py-1.5 md:px-4 md:py-2 rounded-lg text-xs md:text-sm font-medium text-gray-700 shadow-sm hover:shadow-md transition-shadow">
                    Kota Batu
                  </span>
                  <span className="bg-white px-3 py-1.5 md:px-4 md:py-2 rounded-lg text-xs md:text-sm font-medium text-gray-700 shadow-sm hover:shadow-md transition-shadow">
                    Jatim Park
                  </span>
                  <span className="bg-white px-3 py-1.5 md:px-4 md:py-2 rounded-lg text-xs md:text-sm font-medium text-gray-700 shadow-sm hover:shadow-md transition-shadow">
                    BNS (Batu Night Spectacular)
                  </span>
                  <span className="bg-white px-3 py-1.5 md:px-4 md:py-2 rounded-lg text-xs md:text-sm font-medium text-gray-700 shadow-sm hover:shadow-md transition-shadow">
                    Selecta
                  </span>
                  <span className="bg-white px-3 py-1.5 md:px-4 md:py-2 rounded-lg text-xs md:text-sm font-medium text-gray-700 shadow-sm hover:shadow-md transition-shadow">
                    Songgoriti
                  </span>
                </div>
              </div>

              {/* Testimonial Section - Route Specific */}
              <div className="mb-20 bg-white">
                <div className="text-center mb-12">
                  <h2 className="text-2xl md:text-4xl font-extrabold text-dark">
                    Apa Kata Pelanggan Travel Banyuwangi Malang
                  </h2>
                  <p className="mt-3 text-base md:text-lg text-gray-600 max-w-5xl mx-auto px-2">
                    Testimoni pelanggan rute travel Banyuwangi Malang yang sudah menggunakan layanan door to door kami.
                  </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                  {/* Testimonial 1 */}
                  <div className="bg-light p-6 rounded-lg shadow-lg">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-xl">
                        D
                      </div>
                      <div className="ml-4">
                        <h4 className="font-bold text-dark">Dinda Puspitasari</h4>
                        <p className="text-sm text-gray-600">Mahasiswa UB, Malang</p>
                      </div>
                    </div>
                    <div className="flex mb-3">
                      <span className="text-accent text-xl">★★★★★</span>
                    </div>
                    <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                      "Saya mahasiswa UB yang rutin pulang ke Banyuwangi setiap bulan. Juragan Travel selalu jadi pilihan pertama karena diantar langsung ke kost, ga perlu ribet cari ojek lagi. Drivernya juga ramah!"
                    </p>
                    <p className="text-xs text-gray-500 mt-4">Desember 2024</p>
                  </div>

                  {/* Testimonial 2 */}
                  <div className="bg-light p-6 rounded-lg shadow-lg">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-secondary text-white rounded-full flex items-center justify-center font-bold text-xl">
                        B
                      </div>
                      <div className="ml-4">
                        <h4 className="font-bold text-dark">Bayu Setiawan</h4>
                        <p className="text-sm text-gray-600">Karyawan Swasta, Banyuwangi</p>
                      </div>
                    </div>
                    <div className="flex mb-3">
                      <span className="text-accent text-xl">★★★★★</span>
                    </div>
                    <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                      "Beberapa kali pakai travel ini ke Malang untuk urusan kantor. Pelayanannya oke banget, tepat waktu dan mobilnya nyaman. Recommended untuk yang sering Banyuwangi-Malang!"
                    </p>
                    <p className="text-xs text-gray-500 mt-4">Januari 2025</p>
                  </div>

                  {/* Testimonial 3 */}
                  <div className="bg-light p-6 rounded-lg shadow-lg">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-xl">
                        F
                      </div>
                      <div className="ml-4">
                        <h4 className="font-bold text-dark">Fitri Handayani</h4>
                        <p className="text-sm text-gray-600">Wisatawan, Malang</p>
                      </div>
                    </div>
                    <div className="flex mb-3">
                      <span className="text-accent text-xl">★★★★★</span>
                    </div>
                    <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                      "Kemarin liburan ke Batu dengan keluarga, pakai travel ini dari Banyuwangi. Diantar langsung ke hotel dekat Jatim Park, sangat memudahkan. Next pasti pakai lagi!"
                    </p>
                    <p className="text-xs text-gray-500 mt-4">Januari 2025</p>
                  </div>
                </div>

                <div className="text-center mt-10">
                  <p className="text-sm md:text-base text-gray-600 mb-6">Ingin jadi pelanggan berikutnya yang puas dengan travel Banyuwangi Malang kami?</p>
                  <WhatsAppLink
                    message="Halo Admin, saya mau pesan travel Banyuwangi-Malang."
                    title="Hubungi Admin untuk Pesan Travel Banyuwangi Malang"
                    className="inline-block bg-accent text-white px-6 py-2.5 md:px-8 md:py-3 rounded-lg text-sm md:text-base font-semibold shadow-lg hover:bg-opacity-90 transition-all"
                  >
                    Pesan Travel Banyuwangi Malang melalui formulir kontak
                  </WhatsAppLink>
                </div>
              </div>

              {/* Rute Lainnya Section */}
              <div className="mb-20 bg-light p-8 md:p-12 rounded-lg shadow-lg">
                <div className="text-center mb-10">
                  <h2 className="text-2xl md:text-4xl font-extrabold text-dark">
                    Rute Travel Lainnya dari Banyuwangi
                  </h2>
                  <p className="mt-3 text-base md:text-lg text-gray-600 max-w-5xl mx-auto px-2">
                    Selain rute Banyuwangi - Malang, kami juga melayani berbagai rute populer lainnya
                  </p>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                  {/* Rute Surabaya */}
                  <Link href="/rute/banyuwangi-surabaya" className="group" title="Travel Banyuwangi Surabaya - Via Tol Door to Door">
                    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all transform hover:-translate-y-1">
                      <div className="flex items-center mb-4">
                        <div>
                          <h3 className="text-lg md:text-xl font-bold text-dark group-hover:text-primary transition-colors">
                            Banyuwangi - Surabaya
                          </h3>
                          <p className="text-sm text-gray-600">Via Tol, Door to Door</p>
                        </div>
                      </div>
                      <p className="text-sm md:text-base text-gray-700 mb-4">
                        Travel Banyuwangi Surabaya via tol dengan layanan door-to-door ke seluruh area Surabaya, Sidoarjo & Bandara Juanda.
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-primary font-bold text-lg">Mulai Rp 200.000</span>
                        <span className="text-secondary group-hover:translate-x-1 transition-transform">→</span>
                      </div>
                    </div>
                  </Link>

                  {/* Rute Denpasar */}
                  <Link href="/rute/banyuwangi-denpasar" className="group" title="Travel Banyuwangi Denpasar - Via Ferry Aman Nyaman">
                    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all transform hover:-translate-y-1">
                      <div className="flex items-center mb-4">
                        <div>
                          <h3 className="text-lg md:text-xl font-bold text-dark group-hover:text-primary transition-colors">
                            Banyuwangi - Denpasar
                          </h3>
                          <p className="text-sm text-gray-600">Via Ferry, Aman & Nyaman</p>
                        </div>
                      </div>
                      <p className="text-sm md:text-base text-gray-700 mb-4">
                        Travel Banyuwangi Denpasar via Ketapang-Gilimanuk dengan layanan antar ke seluruh area Denpasar & Ngurah Rai.
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-primary font-bold text-lg">Mulai Rp 200.000</span>
                        <span className="text-accent group-hover:translate-x-1 transition-transform">→</span>
                      </div>
                    </div>
                  </Link>

                  {/* Rute Gresik */}
                  <Link href="/rute/banyuwangi-gresik" className="group" title="Travel Banyuwangi Gresik - Cepat dan Nyaman">
                    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all transform hover:-translate-y-1">
                      <div className="flex items-center mb-4">
                        <div>
                          <h3 className="text-lg md:text-xl font-bold text-dark group-hover:text-primary transition-colors">
                            Banyuwangi - Gresik
                          </h3>
                          <p className="text-sm text-gray-600">Langsung & Terpercaya</p>
                        </div>
                      </div>
                      <p className="text-sm md:text-base text-gray-700 mb-4">
                        Travel Banyuwangi Gresik dengan layanan door-to-door langsung ke alamat tujuan di area Gresik & sekitarnya.
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-primary font-bold text-lg">Mulai Rp 350.000</span>
                        <span className="text-primary group-hover:translate-x-1 transition-transform">→</span>
                      </div>
                    </div>
                  </Link>
                </div>

                <div className="text-center mt-8">
                  <Link
                    href="/rute"
                    title="Lihat Semua Rute Travel Kami"
                    className="inline-block bg-primary text-white px-6 py-2.5 md:px-8 md:py-3 rounded-lg text-sm md:text-base font-semibold shadow-lg hover:bg-opacity-90 transition-all"
                  >
                    Lihat Semua Rute Travel
                  </Link>
                </div>
              </div>

              {/* FAQ Rute Spesifik */}
              <div className="max-w-3xl mx-auto">
                <h2 className="text-xl md:text-4xl font-extrabold text-dark text-center mb-8">
                  FAQ Travel Banyuwangi Malang (Rute & Layanan)
                </h2>
                <div className="space-y-6">
                  {faqs.map((faq, index) => (
                    <details key={index} className="bg-light p-4 md:p-6 rounded-lg shadow-md group" open={faq.defaultOpen}>
                      <summary className="flex justify-between items-center font-semibold text-sm md:text-lg text-primary cursor-pointer">
                        {faq.question}
                        <ChevronDown className="w-4 h-4 md:w-5 md:h-5 transition-transform duration-300 group-open:rotate-180" />
                      </summary>
                      <p className="mt-4 text-sm md:text-base text-gray-700 leading-relaxed">{faq.answer}</p>
                    </details>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Form Pemesanan Section */}
          <section id="form-pemesanan" className="py-20 bg-white">
            <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-xl md:text-4xl font-extrabold text-dark">
                  Pesan Travel Banyuwangi - Malang
                </h2>
                <p className="mt-4 text-sm md:text-lg text-gray-600">
                  Isi formulir ini untuk pesan tiket travel Banyuwangi Malang dengan mudah dan cepat.
                </p>
              </div>

              <BookingForm routeName="Banyuwangi → Malang" />
            </div>
          </section>

          {/* CTA Section */}
          <section id="kontak" className="py-20 bg-primary text-white">
            <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
              <h2 className="text-xl md:text-4xl font-extrabold">Pesan Tiket Travel Banyuwangi Malang Anda</h2>
              <p className="mt-4 text-sm md:text-lg text-gray-200 max-w-2xl mx-auto">
                Amankan kursi Anda sekarang. Hubungi admin kami melalui formulir kontak untuk booking cepat dan informasi jadwal
                travel Banyuwangi Malang hari ini.
              </p>
              <WhatsAppLink
                message="Halo Admin, saya mau pesan travel Banyuwangi-Malang."
                title="Kirim Permintaan Booking Travel Banyuwangi Malang"
                className="mt-10 inline-block bg-accent text-white px-6 py-2.5 md:px-10 md:py-3 rounded-lg font-bold text-sm md:text-lg shadow-lg hover:bg-opacity-90 transition-all transform hover:-translate-y-1"
              >
                Pesan Travel Banyuwangi Malang melalui formulir kontak
              </WhatsAppLink>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
}
