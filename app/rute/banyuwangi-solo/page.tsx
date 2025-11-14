import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { StructuredData } from "../../components/SEO";
import { Zap, Home, Building2, ChevronDown, Map, Mountain, Plane } from "lucide-react";
import BookingForm from "../../components/BookingForm";

export const metadata: Metadata = {
  title: "Travel Banyuwangi Solo (PP) – Via Tol, Nyaman & Terpercaya",
  description:
    "Jadwal & harga travel Banyuwangi Solo (PP) terbaru. Layanan door-to-door, armada nyaman via Tol Transjawa, berangkat setiap hari (pagi & malam). Pesan sekarang!",
  keywords:
    "travel banyuwangi solo, travel solo banyuwangi, harga travel banyuwangi solo, jadwal travel banyuwangi solo, travel banyuwangi jogja, travel banyuwangi surakarta",
  authors: [{ name: "Juragan Travel" }],
  openGraph: {
    title: "Travel Banyuwangi Solo (PP) – Via Tol, Nyaman & Terpercaya",
    description:
      "Jadwal & harga travel Banyuwangi Solo (PP) terbaru. Layanan door-to-door via Tol Transjawa, berangkat setiap hari.",
    type: "website",
    url: "https://juragantravel.com/rute/banyuwangi-solo",
    images: [
      {
        url: "/img/rute/banyuwangi-solo.webp",
        width: 1200,
        height: 630,
      },
    ],
    siteName: "Juragan Travel",
  },
  twitter: {
    card: "summary_large_image",
    title: "Travel Banyuwangi Solo (PP) – Via Tol, Nyaman & Terpercaya",
    description:
      "Jadwal & harga travel Banyuwangi Solo (PP) terbaru. Layanan door-to-door via Tol Transjawa, berangkat setiap hari.",
    images: ["/img/rute/banyuwangi-solo.webp"],
  },
  alternates: {
    canonical: "https://juragantravel.com/rute/banyuwangi-solo",
  },
};

const busTripData = {
  "@context": "https://schema.org",
  "@type": "BusTrip",
  provider: {
    "@type": "TravelAgency",
    name: "Juragan Travel",
    url: "https://juragantravel.com/",
    telephone: "+6282143258744",
    image: "/img/rute/banyuwangi-solo.webp",
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
    name: "Area Solo (Door-to-door)",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Solo",
      addressRegion: "Jawa Tengah",
      addressCountry: "ID",
    },
  },
  name: "Travel Banyuwangi - Solo (PP)",
  description:
    "Layanan travel door-to-door antara Banyuwangi dan Solo (Surakarta), via Tol Transjawa dengan jadwal pagi dan malam.",
  offers: {
    "@type": "Offer",
    price: "400000",
    priceCurrency: "IDR",
    name: "Harga Tiket Travel Banyuwangi Solo",
    description: "Harga dapat bervariasi. Hubungi admin untuk harga pasti.",
    url: "https://juragantravel.com/rute/banyuwangi-solo",
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
      name: "Banyuwangi - Solo",
      item: "https://juragantravel.com/rute/banyuwangi-solo",
    },
  ],
};

const schedules = [
  {
    route: "Travel Banyuwangi → Solo",
    schedule: "Pagi (09:00), Malam (21:00)",
    price: "Rp 400.000",
  },
  {
    route: "Travel Solo → Banyuwangi",
    schedule: "Pagi (09:00), Malam (21:00)",
    price: "Rp 400.000",
  },
];

const benefits = [
  {
    icon: Zap,
    title: "Cepat via Tol",
    description: "Perjalanan cepat dan nyaman via Tol Transjawa.",
  },
  {
    icon: Home,
    title: "Door to Door",
    description: "Kami jemput di rumah Anda (Banyuwangi) dan antar sampai alamat tujuan (Solo).",
  },
  {
    icon: Building2,
    title: "Support Jogja & Sekitarnya",
    description: "Melayani antar-jemput di area Kota Solo, Sragen, dan Jogja (penyesuaian).",
  },
];

const faqs = [
  {
    question: "Berapa jam perjalanan travel Banyuwangi ke Solo?",
    answer:
      "Estimasi waktu tempuh normal adalah sekitar 10-12 jam via tol Transjawa. Waktu ini sudah termasuk istirahat. Waktu bisa bervariasi tergantung kondisi lalu lintas dan titik penjemputan/pengantaran.",
    defaultOpen: true,
  },
  {
    question: "Area penjemputan di Banyuwangi meliputi mana saja?",
    answer:
      "Kami melayani penjemputan di area Kota Banyuwangi, Rogojampi, Srono, Genteng, Jajag, dan Kalibaru. Untuk area di luar jalur utama, mungkin ada sedikit biaya tambahan. Silakan konfirmasi alamat Anda ke admin.",
    defaultOpen: false,
  },
  {
    question: "Area pengantaran di Solo meliputi mana saja?",
    answer:
      "Kami melayani pengantaran ke seluruh area Kota Solo (Surakarta). Kami juga melayani pengantaran di area Sragen, Kartasura, dan Yogyakarta dengan sedikit penyesuaian.",
    defaultOpen: false,
  },
  {
    question: "Apakah ada jadwal travel Banyuwangi Solo malam?",
    answer:
      "Ya, kami memiliki jadwal malam sekitar pukul 21:00 WIB. Jadwal ini cocok bagi Anda yang ingin tiba di Solo pada pagi hari.",
    defaultOpen: false,
  },
  {
    question: "Apakah travel Banyuwangi Solo mendapat makan dan istirahat?",
    answer:
      "Ya, dalam perjalanan travel Banyuwangi Solo, kami menyediakan satu kali makan ringan dan beberapa kali istirahat di rest area yang nyaman untuk memastikan kenyamanan Anda selama perjalanan.",  
    defaultOpen: false,
  }
];

export default function BanyuwangiSoloPage() {
  return (
    <>
      <StructuredData data={busTripData} />
      <StructuredData data={breadcrumbData} />
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
                <span className="text-dark font-medium">Banyuwangi - Solo</span>
              </nav>
              <h1 className="text-2xl md:text-4xl font-extrabold text-dark">Travel Banyuwangi Solo (PP) – Nyaman via Tol</h1>
              <p className="mt-4 text-sm md:text-lg text-gray-600 max-w-4xl mx-auto">
                Perjalanan nyaman dan aman travel dari Banyuwangi ke Solo (Surakarta) via tol dengan layanan door-to-door terpercaya. Hubungi kami sekarang!
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
                    src="/img/rute/banyuwangi-solo.webp"
                    alt="Armada travel Banyuwangi Solo via Tol Transjawa"
                    fill
                    className="rounded-lg shadow-xl object-cover"
                  />
                </div>
                <div className="md:w-1/2">
                  <span className="text-sm md:text-base text-primary font-semibold uppercase">RUTE JARAK JAUH</span>
                  <h2 className="mt-2 text-xl md:text-4xl font-extrabold text-dark">
                    Travel Banyuwangi Solo (Surakarta)
                  </h2>
                  <p className="mt-4 text-sm md:text-lg text-gray-700 leading-relaxed">
                    Kami melayani rute <strong>travel Banyuwangi Solo</strong> dan{" "}
                    <strong>travel Solo Banyuwangi</strong> setiap hari. Rute ini adalah pilihan tercepat menuju
                    Surakarta dan sekitarnya, dengan memanfaatkan <strong>Tol Transjawa</strong> secara penuh.
                  </p>
                  <p className="mt-4 text-sm md:text-lg text-gray-700 leading-relaxed">
                    Dengan armada yang nyaman dan driver profesional, kami memastikan perjalanan Anda via Surabaya,
                    Ngawi, dan Sragen tetap nyaman dan aman sampai tujuan. Kami juga melayani tujuan{" "}
                    <strong>Yogyakarta (Jogja)</strong> via Solo.
                  </p>
                </div>
              </div>

              {/* Jadwal & Harga */}
              <div className="bg-light p-8 md:p-12 rounded-lg shadow-lg mb-20">
                <div className="text-center">
                  <h2 className="text-xl md:text-4xl font-extrabold text-dark">Jadwal & Harga Travel</h2>
                  <p className="mt-4 text-sm md:text-lg text-gray-600">
                    Jadwal pasti, harga terjangkau. Pesan kursi Anda sekarang!
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
                            <a
                              href="https://wa.me/6282143258744"
                              target="_blank"
                              rel="noopener noreferrer"
                              title="Pesan Travel Banyuwangi Solo via WhatsApp"
                              className="bg-secondary text-white px-3 py-1.5 md:px-4 md:py-2 rounded-lg text-xs md:text-base font-medium hover:bg-opacity-90"
                            >
                              Pesan
                            </a>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p className="text-center mt-6 text-sm text-gray-600">
                  *Estimasi waktu tempuh travel Banyuwangi Solo sekitar 10–12 jam via tol Transjawa, sudah termasuk 1x makan dan beberapa kali istirahat. Waktu bisa berubah tergantung kondisi lalu lintas. Harga dapat berubah sewaktu-waktu. Hubungi admin via WA untuk harga pasti dan promo terbaru.
                </p>
              </div>

              {/* Keunggulan Rute */}
              <div className="mb-20">
                <div className="text-center">
                  <h2 className="text-xl md:text-4xl font-extrabold text-dark">
                    Keunggulan Rute Banyuwangi-Solo Kami
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
                    Area Layanan Travel Banyuwangi Solo
                  </h2>
                  <p className="mt-3 text-base md:text-lg text-gray-600 max-w-5xl mx-auto px-2">
                    Layanan door-to-door kami mencakup penjemputan di seluruh area Banyuwangi dan pengantaran di area Solo (Surakarta) & sekitarnya
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
                  
                  {/* Daerah yang dilewati menuju Solo */}
                  <span className="bg-white px-3 py-1.5 md:px-4 md:py-2 rounded-lg text-xs md:text-sm font-medium text-gray-700 shadow-sm hover:shadow-md transition-shadow">
                    Jember
                  </span>
                  <span className="bg-white px-3 py-1.5 md:px-4 md:py-2 rounded-lg text-xs md:text-sm font-medium text-gray-700 shadow-sm hover:shadow-md transition-shadow">
                    Lumajang
                  </span>
                  <span className="bg-white px-3 py-1.5 md:px-4 md:py-2 rounded-lg text-xs md:text-sm font-medium text-gray-700 shadow-sm hover:shadow-md transition-shadow">
                    Probolinggo
                  </span>
                  <span className="bg-white px-3 py-1.5 md:px-4 md:py-2 rounded-lg text-xs md:text-sm font-medium text-gray-700 shadow-sm hover:shadow-md transition-shadow">
                    Pasuruan
                  </span>
                  <span className="bg-white px-3 py-1.5 md:px-4 md:py-2 rounded-lg text-xs md:text-sm font-medium text-gray-700 shadow-sm hover:shadow-md transition-shadow">
                    Surabaya (Transit)
                  </span>
                  <span className="bg-white px-3 py-1.5 md:px-4 md:py-2 rounded-lg text-xs md:text-sm font-medium text-gray-700 shadow-sm hover:shadow-md transition-shadow">
                    Mojokerto
                  </span>
                  <span className="bg-white px-3 py-1.5 md:px-4 md:py-2 rounded-lg text-xs md:text-sm font-medium text-gray-700 shadow-sm hover:shadow-md transition-shadow">
                    Jombang
                  </span>
                  <span className="bg-white px-3 py-1.5 md:px-4 md:py-2 rounded-lg text-xs md:text-sm font-medium text-gray-700 shadow-sm hover:shadow-md transition-shadow">
                    Nganjuk
                  </span>
                  <span className="bg-white px-3 py-1.5 md:px-4 md:py-2 rounded-lg text-xs md:text-sm font-medium text-gray-700 shadow-sm hover:shadow-md transition-shadow">
                    Madiun
                  </span>
                  <span className="bg-white px-3 py-1.5 md:px-4 md:py-2 rounded-lg text-xs md:text-sm font-medium text-gray-700 shadow-sm hover:shadow-md transition-shadow">
                    Ngawi
                  </span>
                  <span className="bg-white px-3 py-1.5 md:px-4 md:py-2 rounded-lg text-xs md:text-sm font-medium text-gray-700 shadow-sm hover:shadow-md transition-shadow">
                    Sragen
                  </span>
                  
                  {/* Solo & Sekitarnya */}
                  <span className="bg-white px-3 py-1.5 md:px-4 md:py-2 rounded-lg text-xs md:text-sm font-medium text-gray-700 shadow-sm hover:shadow-md transition-shadow">
                    Solo Kota
                  </span>
                  <span className="bg-white px-3 py-1.5 md:px-4 md:py-2 rounded-lg text-xs md:text-sm font-medium text-gray-700 shadow-sm hover:shadow-md transition-shadow">
                    Surakarta
                  </span>
                  <span className="bg-white px-3 py-1.5 md:px-4 md:py-2 rounded-lg text-xs md:text-sm font-medium text-gray-700 shadow-sm hover:shadow-md transition-shadow">
                    Laweyan
                  </span>
                  <span className="bg-white px-3 py-1.5 md:px-4 md:py-2 rounded-lg text-xs md:text-sm font-medium text-gray-700 shadow-sm hover:shadow-md transition-shadow">
                    Banjarsari
                  </span>
                  <span className="bg-white px-3 py-1.5 md:px-4 md:py-2 rounded-lg text-xs md:text-sm font-medium text-gray-700 shadow-sm hover:shadow-md transition-shadow">
                    Jebres
                  </span>
                  <span className="bg-white px-3 py-1.5 md:px-4 md:py-2 rounded-lg text-xs md:text-sm font-medium text-gray-700 shadow-sm hover:shadow-md transition-shadow">
                    Pasar Kliwon
                  </span>
                  <span className="bg-white px-3 py-1.5 md:px-4 md:py-2 rounded-lg text-xs md:text-sm font-medium text-gray-700 shadow-sm hover:shadow-md transition-shadow">
                    Serengan
                  </span>
                  <span className="bg-white px-3 py-1.5 md:px-4 md:py-2 rounded-lg text-xs md:text-sm font-medium text-gray-700 shadow-sm hover:shadow-md transition-shadow">
                    Kampus UNS
                  </span>
                  <span className="bg-white px-3 py-1.5 md:px-4 md:py-2 rounded-lg text-xs md:text-sm font-medium text-gray-700 shadow-sm hover:shadow-md transition-shadow">
                    Manahan
                  </span>
                  <span className="bg-white px-3 py-1.5 md:px-4 md:py-2 rounded-lg text-xs md:text-sm font-medium text-gray-700 shadow-sm hover:shadow-md transition-shadow">
                    Mojosongo
                  </span>
                  <span className="bg-white px-3 py-1.5 md:px-4 md:py-2 rounded-lg text-xs md:text-sm font-medium text-gray-700 shadow-sm hover:shadow-md transition-shadow">
                    Karanganyar
                  </span>
                  <span className="bg-white px-3 py-1.5 md:px-4 md:py-2 rounded-lg text-xs md:text-sm font-medium text-gray-700 shadow-sm hover:shadow-md transition-shadow">
                    Sukoharjo
                  </span>
                </div>
              </div>

              {/* Testimonial Section - Route Specific */}
              <div className="mb-20 bg-white">
                <div className="text-center mb-12">
                  <h2 className="text-2xl md:text-4xl font-extrabold text-dark">
                    Apa Kata Pelanggan Travel Banyuwangi Solo
                  </h2>
                  <p className="mt-3 text-base md:text-lg text-gray-600 max-w-5xl mx-auto px-2">
                    Testimoni pelanggan rute travel Banyuwangi Solo yang sudah menggunakan layanan door to door kami.
                  </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                  {/* Testimonial 1 */}
                  <div className="bg-light p-6 rounded-lg shadow-lg">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-xl">
                        R
                      </div>
                      <div className="ml-4">
                        <h4 className="font-bold text-dark">Rizal Ramadhan</h4>
                        <p className="text-sm text-gray-600">Mahasiswa, Banyuwangi</p>
                      </div>
                    </div>
                    <div className="flex mb-3">
                      <span className="text-accent text-xl">★★★★★</span>
                    </div>
                    <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                      "Saya kuliah di UNS Solo, berangkat naik travel Banyuwangi Solo dari Juragan Travel. Meskipun perjalanan jauh, tapi nyaman banget. Driver ramah dan profesional. Recommended!"
                    </p>
                    <p className="text-xs text-gray-500 mt-4">Januari 2025</p>
                  </div>

                  {/* Testimonial 2 */}
                  <div className="bg-light p-6 rounded-lg shadow-lg">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-secondary text-white rounded-full flex items-center justify-center font-bold text-xl">
                        D
                      </div>
                      <div className="ml-4">
                        <h4 className="font-bold text-dark">Dewi Safitri</h4>
                        <p className="text-sm text-gray-600">Pengusaha, Solo</p>
                      </div>
                    </div>
                    <div className="flex mb-3">
                      <span className="text-accent text-xl">★★★★★</span>
                    </div>
                    <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                      "Beberapa kali ke Banyuwangi untuk urusan bisnis pakai travel ini. Tepat waktu, armada bagus, dan harga juga masih terjangkau untuk jarak sejauh itu."
                    </p>
                    <p className="text-xs text-gray-500 mt-4">Desember 2024</p>
                  </div>

                  {/* Testimonial 3 */}
                  <div className="bg-light p-6 rounded-lg shadow-lg">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-xl">
                        H
                      </div>
                      <div className="ml-4">
                        <h4 className="font-bold text-dark">Hendra Wijaya</h4>
                        <p className="text-sm text-gray-600">Karyawan, Banyuwangi</p>
                      </div>
                    </div>
                    <div className="flex mb-3">
                      <span className="text-accent text-xl">★★★★★</span>
                    </div>
                    <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                      "Perjalanan panjang Banyuwangi-Solo jadi ga terasa capek karena mobilnya nyaman dan bisa istirahat di rest area. Pelayanan memuaskan!"
                    </p>
                    <p className="text-xs text-gray-500 mt-4">Januari 2025</p>
                  </div>
                </div>

                <div className="text-center mt-10">
                  <p className="text-sm md:text-base text-gray-600 mb-6">Ingin jadi pelanggan berikutnya yang puas dengan travel Banyuwangi Solo kami?</p>
                  <a
                    href="https://wa.me/6282143258744"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Hubungi Admin untuk Pesan Travel Banyuwangi Solo"
                    className="inline-block bg-accent text-white px-6 py-2.5 md:px-8 md:py-3 rounded-lg text-sm md:text-base font-semibold shadow-lg hover:bg-opacity-90 transition-all"
                  >
                    Pesan Travel Banyuwangi Solo via WhatsApp
                  </a>
                </div>
              </div>

              {/* Rute Lainnya Section */}
              <div className="mb-20 bg-light p-8 md:p-12 rounded-lg shadow-lg">
                <div className="text-center mb-10">
                  <h2 className="text-2xl md:text-4xl font-extrabold text-dark">
                    Rute Travel Lainnya dari Banyuwangi
                  </h2>
                  <p className="mt-3 text-base md:text-lg text-gray-600 max-w-5xl mx-auto px-2">
                    Selain rute Banyuwangi - Solo, kami juga melayani berbagai rute populer lainnya
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
                  FAQ - Rute Banyuwangi Solo
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
                  Pesan Travel Banyuwangi - Solo
                </h2>
                <p className="mt-4 text-sm md:text-lg text-gray-600">
                  Isi formulir di bawah ini untuk pesan tiket travel Banyuwangi Solo via tol dengan mudah dan cepat.
                </p>
              </div>

              <BookingForm routeName="Banyuwangi → Solo" />
            </div>
          </section>

          {/* CTA Section */}
          <section id="kontak" className="py-20 bg-primary text-white">
            <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
              <h2 className="text-xl md:text-4xl font-extrabold">Pesan Tiket Travel Banyuwangi Solo Anda</h2>
              <p className="mt-4 text-sm md:text-lg text-gray-200 max-w-2xl mx-auto">
                Amankan kursi Anda sekarang. Hubungi admin kami via WhatsApp untuk booking cepat dan informasi jadwal
                travel Banyuwangi Solo hari ini.
              </p>
              <a
                href="https://wa.me/6282143258744"
                target="_blank"
                rel="noopener noreferrer"
                title="Chat WhatsApp untuk Booking Travel Banyuwangi Solo"
                className="mt-10 inline-block bg-accent text-white px-6 py-2.5 md:px-10 md:py-3 rounded-lg font-bold text-sm md:text-lg shadow-lg hover:bg-opacity-90 transition-all transform hover:-translate-y-1"
              >
                Pesan Travel Banyuwangi Solo via WhatsApp
              </a>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
}
