import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { StructuredData } from "../../components/SEO";
import { Ship, Home, Plane, ChevronDown, Map, Mountain } from "lucide-react";
import BookingForm from "../../components/BookingForm";
import WhatsAppLink from "../../components/WhatsAppLink";

export const metadata: Metadata = {
  title: "Travel Banyuwangi Denpasar (PP) – Termasuk Tiket Kapal Ferry | Juragan Travel",
  description:
    "Butuh travel Banyuwangi Denpasar yang aman dan nyaman? Juragan Travel melayani travel Banyuwangi Denpasar dan Denpasar Banyuwangi setiap hari (pagi, siang, malam), layanan door-to-door, sudah termasuk tiket kapal ferry Ketapang–Gilimanuk.",
  keywords:
    "travel banyuwangi denpasar, travel denpasar banyuwangi, harga travel banyuwangi denpasar, jadwal travel banyuwangi denpasar, travel banyuwangi ke bali, travel banyuwangi denpasar pagi, travel banyuwangi denpasar malam",
  authors: [{ name: "Juragan Travel" }],
  openGraph: {
    title: "Travel Banyuwangi Denpasar (PP) – Termasuk Tiket Kapal Ferry | Juragan Travel",
    description:
      "Travel Banyuwangi Denpasar (PP) dengan layanan door-to-door, sudah termasuk tiket kapal ferry Ketapang–Gilimanuk. Berangkat setiap hari, pagi, siang, dan malam.",
    type: "website",
    url: "https://juragantravel.com/rute/banyuwangi-denpasar",
    images: [
      {
        url: "https://juragantravel.com/img/rute/banyuwangi-denpasar.webp",
        width: 1200,
        height: 630,
      },
    ],
    siteName: "Juragan Travel",
  },
  twitter: {
    card: "summary_large_image",
    title: "Travel Banyuwangi Denpasar (PP) – Termasuk Tiket Kapal Ferry | Juragan Travel",
    description:
      "Travel Banyuwangi Denpasar dengan layanan door-to-door dan sudah termasuk tiket kapal ferry Ketapang–Gilimanuk. Cek jadwal & pesan melalui formulir kontak.",
    images: ["https://juragantravel.com/img/rute/banyuwangi-denpasar.webp"],
  },
  alternates: {
    canonical: "https://juragantravel.com/rute/banyuwangi-denpasar",
  },
};

const busTripData = {
  "@context": "https://schema.org",
  "@type": "BusTrip",
  provider: {
    "@type": "TravelAgency",
    name: "Juragan Travel",
    url: "https://juragantravel.com/",
    image: "https://juragantravel.com/img/rute/banyuwangi-denpasar.webp",
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
    name: "Area Denpasar & Bali Selatan (Door-to-door)",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Denpasar",
      addressRegion: "Bali",
      addressCountry: "ID",
    },
  },
  name: "Travel Banyuwangi Denpasar (PP) via Ketapang–Gilimanuk",
  description:
    "Layanan travel Banyuwangi Denpasar dan travel Denpasar Banyuwangi dengan sistem door-to-door, sudah termasuk tiket kapal ferry Ketapang–Gilimanuk dan jadwal pagi, siang, malam setiap hari.",
  offers: {
    "@type": "Offer",
    price: "200000",
    priceCurrency: "IDR",
    name: "Harga Tiket Travel Banyuwangi Denpasar",
    description: "Harga travel Banyuwangi Denpasar sudah termasuk tiket kapal ferry. Hubungi admin untuk harga terbaru.",
    url: "https://juragantravel.com/rute/banyuwangi-denpasar",
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
      name: "Banyuwangi - Denpasar",
      item: "https://juragantravel.com/rute/banyuwangi-denpasar",
    },
  ],
};

const schedules = [
  {
    route: "Travel Banyuwangi → Denpasar",
    schedule: "Pagi (09:00), Siang (15:00), Malam (21:00)",
    price: "Rp 200.000",
  },
  {
    route: "Travel Denpasar → Banyuwangi",
    schedule: "Pagi (09:00), Siang (15:00), Malam (21:00)",
    price: "Rp 200.000",
  },
  {
    route: "Travel Banyuwangi → Kuta / Jimbaran",
    schedule: "Hubungi Admin (Menyesuaikan Jadwal)",
    price: "Rp 200.000",
  },
];

const benefits = [
  {
    icon: Ship,
    title: "Termasuk Tiket Kapal",
    description: "Harga travel Banyuwangi Denpasar sudah termasuk tiket kapal ferry Ketapang-Gilimanuk.",
  },
  {
    icon: Home,
    title: "Door to Door",
    description: "Kami jemput di rumah Anda (Banyuwangi) dan antar sampai alamat tujuan (Denpasar atau area Bali lainnya).",
  },
  {
    icon: Plane,
    title: "Support Bandara Ngurah Rai",
    description: "Layanan travel Banyuwangi Denpasar kami melayani antar-jemput di Bandara Internasional I Gusti Ngurah Rai.",
  },
];

const faqs = [
  {
    question: "Berapa jam perjalanan travel Banyuwangi ke Denpasar?",
    answer:
      "Estimasi waktu tempuh normal adalah sekitar 5-6 jam. Waktu ini sudah termasuk penyeberangan kapal ferry (1 jam) dan 1x istirahat. Waktu bisa bervariasi tergantung kondisi lalu lintas dan antrian kapal.",
    defaultOpen: true,
  },
  {
    question: "Area penjemputan di Banyuwangi meliputi mana saja?",
    answer:
      "Kami melayani penjemputan di area Kota Banyuwangi, Rogojampi, Srono, Genteng, Jajag, dan Kalibaru. Untuk area di luar jalur utama, mungkin ada sedikit biaya tambahan. Silakan konfirmasi alamat Anda ke admin.",
    defaultOpen: false,
  },
  {
    question: "Area pengantaran di Denpasar meliputi mana saja?",
    answer:
      "Kami melayani pengantaran ke seluruh area Denpasar Kota (Renon, Teuku Umar), Sanur, Kuta, Jimbaran, dan Bandara Ngurah Rai. Untuk area seperti Ubud atau Canggu, mohon konfirmasi terlebih dahulu ke admin.",
    defaultOpen: false,
  },
  {
    question: "Apakah ada jadwal travel Banyuwangi Denpasar malam?",
    answer:
      "Ya, kami memiliki jadwal malam sekitar pukul 21:00 WIB. Jadwal ini cocok bagi Anda yang ingin tiba di Denpasar pada pagi hari.",
    defaultOpen: false,
  },
  {
    question: "Apakah harga travel Banyuwangi Denpasar sudah termasuk tiket kapal?",
    answer:
      "Ya, harga travel Banyuwangi Denpasar sudah termasuk tiket kapal ferry Ketapang-Gilimanuk. Anda tidak perlu membayar tambahan untuk tiket kapal saat penyeberangan.",
    defaultOpen: false,
  }
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

export default function BanyuwangiDenpasarPage() {
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
                <span className="text-dark font-medium">Banyuwangi - Denpasar</span>
              </nav>
              <h1 className="text-2xl md:text-4xl font-extrabold text-dark">Travel Banyuwangi Denpasar (PP) – Termasuk Tiket Kapal</h1>
              <p className="mt-4 text-sm md:text-lg text-gray-600 max-w-5xl mx-auto">
                Jadwal travel Banyuwangi Denpasar berangkat setiap hari (pagi, siang, malam). Layanan door-to-door,
  aman, nyaman, dan sudah termasuk tiket kapal ferry untuk perjalanan Banyuwangi Denpasar maupun Denpasar Banyuwangi.
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
                    src="/img/rute/banyuwangi-denpasar.webp"
                    alt="Armada travel Banyuwangi Denpasar nyaman ke Bali"
                    fill
                    className="rounded-lg shadow-xl object-cover"
                  />
                </div>
                <div className="md:w-1/2">
                  <span className="text-sm md:text-base text-primary font-semibold uppercase">RUTE PULAU BALI</span>
                  <h2 className="mt-2 text-xl md:text-4xl font-extrabold text-dark">
                    Travel Banyuwangi Denpasar (Kuta, Jimbaran)
                  </h2>
                  <p className="mt-4 text-sm md:text-lg text-gray-700 leading-relaxed">
                    Kami melayani <strong>travel Banyuwangi Denpasar</strong> dan{" "}
                    <strong>travel Denpasar Banyuwangi</strong> setiap hari. Rute ini adalah andalan kami untuk
                    menghubungkan Jawa dan Bali dengan layanan travel yang praktis.
                  </p>
                  <p className="mt-4 text-sm md:text-lg text-gray-700 leading-relaxed">
                    Harga sudah <strong>termasuk tiket kapal ferry</strong> Ketapang-Gilimanuk. Kami juga melayani
                    pengantaran ke area populer seperti <strong>Kuta, Sanur, Jimbaran,</strong> dan{" "}
                    <strong>Bandara Ngurah Rai</strong> dengan penyesuaian.
                  </p>
                  <p className="mt-4 text-sm md:text-lg text-gray-700 leading-relaxed">
                    Dengan memilih travel Banyuwangi Denpasar, Anda tidak perlu repot memikirkan tiket kapal dan
                    transportasi lanjutan karena kami mengantar langsung sampai alamat tujuan di Bali.
                  </p>
                </div>
              </div>

              {/* Jadwal & Harga */}
              <div className="bg-light p-8 md:p-12 rounded-lg shadow-lg mb-20">
                <div className="text-center">
                  <h2 className="text-xl md:text-4xl font-extrabold text-dark">Jadwal & Harga Travel Banyuwangi Denpasar</h2>
                  <p className="mt-4 text-sm md:text-lg text-gray-600">
                    Jadwal pasti, harga terjangkau. Pesan kursi travel Banyuwangi Denpasar Anda sekarang!
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
                              title="Pesan Travel Banyuwangi Denpasar melalui formulir kontak"
                              className="bg-secondary text-white px-3 py-1.5 md:px-4 md:py-2 rounded-lg text-xs md:text-base font-medium hover:bg-opacity-90 inline-block text-center"
                            >
                              Pesan
                            </WhatsAppLink>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p className="text-center mt-6 text-sm text-gray-600">
                  *Jadwal travel Banyuwangi Denpasar dapat berubah sesuai kondisi penyeberangan Ketapang–Gilimanuk, hubungi admin untuk konfirmasi jam terbaru. Harga travel Banyuwangi Denpasar dapat berubah sewaktu-waktu, silakan hubungi admin melalui formulir kontak untuk harga pasti dan promo terbaru.
                </p>
              </div>

              {/* Keunggulan Rute */}
              <div className="mb-20">
                <div className="text-center">
                  <h2 className="text-xl md:text-4xl font-extrabold text-dark">
                    Keunggulan Travel Banyuwangi Denpasar Kami
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
                    Area Layanan Travel Banyuwangi Denpasar
                  </h2>
                  <p className="mt-3 text-base md:text-lg text-gray-600 max-w-5xl mx-auto px-2">
                    Layanan door-to-door travel Banyuwangi Denpasar kami mencakup penjemputan di seluruh area Banyuwangi dan pengantaran di area Denpasar, Badung & sekitarnya.
                  </p>
                </div>

                {/* Tag Cloud Area Coverage */}
                <div className="flex flex-wrap justify-center gap-2 md:gap-3">
                  {/* Banyuwangi Areas - All 21 Kecamatan */}
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
                  
                  {/* Denpasar & Bali Areas */}
                  <span className="bg-white px-3 py-1.5 md:px-4 md:py-2 rounded-lg text-xs md:text-sm font-medium text-gray-700 shadow-sm hover:shadow-md transition-shadow">
                    Denpasar Pusat
                  </span>
                  <span className="bg-white px-3 py-1.5 md:px-4 md:py-2 rounded-lg text-xs md:text-sm font-medium text-gray-700 shadow-sm hover:shadow-md transition-shadow">
                    Denpasar Utara
                  </span>
                  <span className="bg-white px-3 py-1.5 md:px-4 md:py-2 rounded-lg text-xs md:text-sm font-medium text-gray-700 shadow-sm hover:shadow-md transition-shadow">
                    Denpasar Selatan
                  </span>
                  <span className="bg-white px-3 py-1.5 md:px-4 md:py-2 rounded-lg text-xs md:text-sm font-medium text-gray-700 shadow-sm hover:shadow-md transition-shadow">
                    Denpasar Timur
                  </span>
                  <span className="bg-white px-3 py-1.5 md:px-4 md:py-2 rounded-lg text-xs md:text-sm font-medium text-gray-700 shadow-sm hover:shadow-md transition-shadow">
                    Denpasar Barat
                  </span>
                  <span className="bg-white px-3 py-1.5 md:px-4 md:py-2 rounded-lg text-xs md:text-sm font-medium text-gray-700 shadow-sm hover:shadow-md transition-shadow">
                    Renon
                  </span>
                  <span className="bg-white px-3 py-1.5 md:px-4 md:py-2 rounded-lg text-xs md:text-sm font-medium text-gray-700 shadow-sm hover:shadow-md transition-shadow">
                    Sanur
                  </span>
                  <span className="bg-white px-3 py-1.5 md:px-4 md:py-2 rounded-lg text-xs md:text-sm font-medium text-gray-700 shadow-sm hover:shadow-md transition-shadow">
                    Teuku Umar
                  </span>
                  <span className="bg-white px-3 py-1.5 md:px-4 md:py-2 rounded-lg text-xs md:text-sm font-medium text-gray-700 shadow-sm hover:shadow-md transition-shadow">
                    Kuta
                  </span>
                  <span className="bg-white px-3 py-1.5 md:px-4 md:py-2 rounded-lg text-xs md:text-sm font-medium text-gray-700 shadow-sm hover:shadow-md transition-shadow">
                    Legian
                  </span>
                  <span className="bg-white px-3 py-1.5 md:px-4 md:py-2 rounded-lg text-xs md:text-sm font-medium text-gray-700 shadow-sm hover:shadow-md transition-shadow">
                    Seminyak
                  </span>
                  <span className="bg-white px-3 py-1.5 md:px-4 md:py-2 rounded-lg text-xs md:text-sm font-medium text-gray-700 shadow-sm hover:shadow-md transition-shadow">
                    Jimbaran
                  </span>
                  <span className="bg-white px-3 py-1.5 md:px-4 md:py-2 rounded-lg text-xs md:text-sm font-medium text-gray-700 shadow-sm hover:shadow-md transition-shadow">
                    Nusa Dua
                  </span>
                  <span className="bg-white px-3 py-1.5 md:px-4 md:py-2 rounded-lg text-xs md:text-sm font-medium text-gray-700 shadow-sm hover:shadow-md transition-shadow">
                    Bandara Ngurah Rai
                  </span>
                  <span className="bg-white px-3 py-1.5 md:px-4 md:py-2 rounded-lg text-xs md:text-sm font-medium text-gray-700 shadow-sm hover:shadow-md transition-shadow">
                    Canggu
                  </span>
                  <span className="bg-white px-3 py-1.5 md:px-4 md:py-2 rounded-lg text-xs md:text-sm font-medium text-gray-700 shadow-sm hover:shadow-md transition-shadow">
                    Ubud
                  </span>
                  <span className="bg-white px-3 py-1.5 md:px-4 md:py-2 rounded-lg text-xs md:text-sm font-medium text-gray-700 shadow-sm hover:shadow-md transition-shadow">
                    Tabanan
                  </span>
                  <span className="bg-white px-3 py-1.5 md:px-4 md:py-2 rounded-lg text-xs md:text-sm font-medium text-gray-700 shadow-sm hover:shadow-md transition-shadow">
                    Mengwi
                  </span>
                  
                  {/* Area Bali Lainnya */}
                  <span className="bg-primary px-3 py-1.5 md:px-4 md:py-2 rounded-lg text-xs md:text-sm font-semibold text-white shadow-sm hover:shadow-md transition-shadow">
                    Area Bali Lainnya
                  </span>
                </div>
              </div>

              {/* Testimonial Section - Route Specific */}
              <div className="mb-20 bg-white">
                <div className="text-center mb-12">
                  <h2 className="text-2xl md:text-4xl font-extrabold text-dark">
                    Apa Kata Pelanggan Travel Banyuwangi Denpasar
                  </h2>
                  <p className="mt-3 text-base md:text-lg text-gray-600 max-w-5xl mx-auto px-2">
                    Testimoni pelanggan rute travel Banyuwangi Denpasar yang sudah menggunakan layanan door to door kami.
                  </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                  {/* Testimonial 1 */}
                  <div className="bg-light p-6 rounded-lg shadow-lg">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-xl">
                        A
                      </div>
                      <div className="ml-4">
                        <h4 className="font-bold text-dark">Agus Prasetyo</h4>
                        <p className="text-sm text-gray-600">Wisatawan, Banyuwangi</p>
                      </div>
                    </div>
                    <div className="flex mb-3">
                      <span className="text-accent text-xl">★★★★★</span>
                    </div>
                    <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                      "Saya pakai travel Banyuwangi Denpasar Juragan Travel untuk liburan keluarga. Pelayanan bagus, driver ramah, dan proses naik kapal dibantu sampai tuntas. Recommended banget!"
                    </p>
                    <p className="text-xs text-gray-500 mt-4">Januari 2025</p>
                  </div>

                  {/* Testimonial 2 */}
                  <div className="bg-light p-6 rounded-lg shadow-lg">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-secondary text-white rounded-full flex items-center justify-center font-bold text-xl">
                        M
                      </div>
                      <div className="ml-4">
                        <h4 className="font-bold text-dark">Made Wardana</h4>
                        <p className="text-sm text-gray-600">Karyawan, Denpasar</p>
                      </div>
                    </div>
                    <div className="flex mb-3">
                      <span className="text-accent text-xl">★★★★★</span>
                    </div>
                    <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                      "Rutin pakai travel ini kalau pulang ke Banyuwangi. Harga terjangkau, tepat waktu, dan nyaman. Sudah langganan 6 bulan ini!"
                    </p>
                    <p className="text-xs text-gray-500 mt-4">Desember 2024</p>
                  </div>

                  {/* Testimonial 3 */}
                  <div className="bg-light p-6 rounded-lg shadow-lg">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-xl">
                        L
                      </div>
                      <div className="ml-4">
                        <h4 className="font-bold text-dark">Lina Kusuma</h4>
                        <p className="text-sm text-gray-600">Mahasiswa, Surabaya</p>
                      </div>
                    </div>
                    <div className="flex mb-3">
                      <span className="text-accent text-xl">★★★★★</span>
                    </div>
                    <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                      "Pertama kali ke Bali pakai travel ini. Diantar sampai hotel di Kuta, sangat membantu karena ga perlu bingung cari transportasi lagi. Thanks Juragan Travel!"
                    </p>
                    <p className="text-xs text-gray-500 mt-4">Januari 2025</p>
                  </div>
                </div>

                <div className="text-center mt-10">
                  <p className="text-sm md:text-base text-gray-600 mb-6">Ingin jadi pelanggan berikutnya yang puas dengan travel Banyuwangi Denpasar kami?</p>
                  <WhatsAppLink
                    message="Halo Admin, saya mau pesan travel Banyuwangi-Denpasar."
                    title="Hubungi Admin untuk Pesan Travel Banyuwangi Denpasar"
                    className="inline-block bg-accent text-white px-6 py-2.5 md:px-8 md:py-3 rounded-lg text-sm md:text-base font-semibold shadow-lg hover:bg-opacity-90 transition-all"
                  >
                    Pesan Travel Banyuwangi Denpasar melalui formulir kontak
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
                    Selain rute Banyuwangi - Denpasar, kami juga melayani berbagai rute populer lainnya
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

                  {/* Rute Malang */}
                  <Link href="/rute/banyuwangi-malang" className="group" title="Travel Banyuwangi Malang - Door to Door Nyaman">
                    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all transform hover:-translate-y-1">
                      <div className="flex items-center mb-4">
                        <div>
                          <h3 className="text-lg md:text-xl font-bold text-dark group-hover:text-primary transition-colors">
                            Banyuwangi - Malang
                          </h3>
                          <p className="text-sm text-gray-600">Door to Door, Nyaman</p>
                        </div>
                      </div>
                      <p className="text-sm md:text-base text-gray-700 mb-4">
                        Travel Banyuwangi Malang dengan layanan door-to-door ke seluruh area Malang, Kota Batu & kampus.
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-primary font-bold text-lg">Mulai Rp 200.000</span>
                        <span className="text-primary group-hover:translate-x-1 transition-transform">→</span>
                      </div>
                    </div>
                  </Link>

                  {/* Rute Solo */}
                  <Link href="/rute/banyuwangi-solo" className="group" title="Travel Banyuwangi Solo - Via Tol Nyaman Terpercaya">
                    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all transform hover:-translate-y-1">
                      <div className="flex items-center mb-4">
                        <div>
                          <h3 className="text-lg md:text-xl font-bold text-dark group-hover:text-primary transition-colors">
                            Banyuwangi - Solo
                          </h3>
                          <p className="text-sm text-gray-600">Perjalanan Jauh & Nyaman</p>
                        </div>
                      </div>
                      <p className="text-sm md:text-base text-gray-700 mb-4">
                        Travel Banyuwangi Solo dengan layanan door-to-door langsung ke alamat tujuan di area Solo & sekitarnya.
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-primary font-bold text-lg">Mulai Rp 400.000</span>
                        <span className="text-accent group-hover:translate-x-1 transition-transform">→</span>
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
              <div className="max-w-5xl mx-auto">
                <h2 className="text-xl md:text-4xl font-extrabold text-dark text-center mb-8">
                  FAQ Travel Banyuwangi Denpasar (Rute & Layanan)
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
                  Pesan Travel Banyuwangi - Denpasar
                </h2>
                <p className="mt-4 text-sm md:text-lg text-gray-600">
                  Isi formulir di bawah ini untuk pesan tiket travel Banyuwangi Denpasar dengan mudah dan cepat.
                </p>
              </div>

              <BookingForm routeName="Banyuwangi → Denpasar" />
            </div>
          </section>

          {/* CTA Section */}
          <section id="kontak" className="py-20 bg-primary text-white">
            <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
              <h2 className="text-xl md:text-4xl font-extrabold">Pesan Tiket Travel Banyuwangi Denpasar Anda</h2>
              <p className="mt-4 text-sm md:text-lg text-gray-200 max-w-2xl mx-auto">
                Amankan kursi Anda sekarang. Hubungi admin kami melalui formulir kontak untuk booking cepat dan informasi jadwal
                travel Banyuwangi Denpasar hari ini.
              </p>
              <WhatsAppLink
                message="Halo Admin, saya mau pesan travel Banyuwangi-Denpasar."
                title="Kirim Permintaan Booking Travel Banyuwangi Denpasar"
                className="mt-10 inline-block bg-accent text-white px-6 py-2.5 md:px-10 md:py-3 rounded-lg font-bold text-sm md:text-lg shadow-lg hover:bg-opacity-90 transition-all transform hover:-translate-y-1"
              >
                Pesan Travel Banyuwangi Denpasar melalui formulir kontak
              </WhatsAppLink>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
}
