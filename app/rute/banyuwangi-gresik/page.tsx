import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { StructuredData } from "../../components/SEO";
import { Map, Home, Clock, ChevronDown, Plane, Mountain } from "lucide-react";
import BookingForm from "../../components/BookingForm";
import WhatsAppLink from "../../components/WhatsAppLink";

export const metadata: Metadata = {
  title: "Travel Banyuwangi Gresik via Tol (PP) – Jadwal & Harga | Juragan Travel",
  description:
    "Travel Banyuwangi Gresik (PP) via tol, door-to-door, berangkat setiap hari (pagi/siang/malam). Harga mulai Rp 350.000. Driver berpengalaman, armada nyaman. Pesan via WhatsApp.",
  keywords:
    "travel banyuwangi gresik, travel gresik banyuwangi, harga travel banyuwangi gresik, jadwal travel banyuwangi gresik, travel via tol, door to door, travel malam banyuwangi gresik",
  authors: [{ name: "Juragan Travel" }],
  openGraph: {
    title: "Travel Banyuwangi Gresik via Tol – Jadwal & Harga | Juragan Travel",
    description:
      "Rute travel Banyuwangi Gresik via tol, door-to-door. Berangkat setiap hari. Harga mulai Rp 350.000. Pesan cepat via WhatsApp.",
    type: "article",
    url: "https://juragantravel.com/rute/banyuwangi-gresik",
    images: [
      {
        url: "https://juragantravel.com/img/hero.webp",
        width: 1200,
        height: 630,
        alt: "Travel Banyuwangi ke Gresik via tol door-to-door",
      },
    ],
    siteName: "Juragan Travel",
  },
  twitter: {
    card: "summary_large_image",
    title: "Travel Banyuwangi Gresik via Tol – Jadwal & Harga",
    description:
      "Door-to-door, via tol, berangkat tiap hari. Harga mulai Rp 350.000. Pesan via WhatsApp.",
    images: ["https://juragantravel.com/img/hero.webp"],
  },
  alternates: {
    canonical: "https://juragantravel.com/rute/banyuwangi-gresik",
  },
  robots: { index: true, follow: true },
};

const busTripData = {
  "@context": "https://schema.org",
  "@type": "BusTrip",
  provider: {
    "@type": "TravelAgency",
    name: "Juragan Travel",
    url: "https://juragantravel.com/",
    telephone: "+6282143258744",
    image: "https://juragantravel.com/img/hero.webp",
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
    name: "Area Gresik (Door-to-door)",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Gresik",
      addressRegion: "Jawa Timur",
      addressCountry: "ID",
    },
  },
  name: "Travel Banyuwangi - Gresik (PP)",
  description:
    "Layanan travel door-to-door antara Banyuwangi dan Gresik via tol dengan jadwal fleksibel setiap hari.",
  offers: {
    "@type": "Offer",
    price: "350000",
    priceCurrency: "IDR",
    name: "Harga Tiket Travel Banyuwangi Gresik",
    description: "Harga dapat bervariasi. Hubungi admin untuk harga pasti.",
    url: "https://juragantravel.com/rute/banyuwangi-gresik",
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
      name: "Banyuwangi - Gresik",
      item: "https://juragantravel.com/rute/banyuwangi-gresik",
    },
  ],
};

const schedules = [
  {
    route: "Travel Banyuwangi → Gresik",
    schedule: "Pagi (09:00), Siang (15:00), Malam (21:00)",
    price: "Rp 350.000",
  },
  {
    route: "Travel Gresik → Banyuwangi",
    schedule: "Pagi (09:00), Siang (15:00), Malam (21:00)",
    price: "Rp 350.000",
  },
];

const benefits = [
  {
    icon: Map,
    title: "Via Tol Cepat",
    description: "Perjalanan lebih cepat dan hemat waktu lewat Tol Trans-Jawa.",
  },
  {
    icon: Home,
    title: "Door to Door",
    description: "Kami jemput di rumah Anda (Banyuwangi) dan antar sampai alamat tujuan (Gresik).",
  },
  {
    icon: Clock,
    title: "Jadwal Fleksibel",
    description: "Jadwal berangkat setiap hari dengan pilihan pagi, siang, dan malam.",
  },
];

const faqs = [
  {
    question: "Berapa jam perjalanan travel Banyuwangi ke Gresik via tol?",
    answer:
      "Estimasi waktu tempuh normal adalah sekitar 7-8 jam, sudah termasuk 1x istirahat di rest area. Waktu bisa bervariasi tergantung kondisi lalu lintas dan titik penjemputan/pengantaran.",
    defaultOpen: true,
  },
  {
    question: "Area penjemputan di Banyuwangi meliputi mana saja?",
    answer:
      "Kami melayani penjemputan di area Kota Banyuwangi, Rogojampi, Srono, Genteng, Jajag, dan Kalibaru. Untuk area di luar jalur utama, mungkin ada sedikit biaya tambahan. Silakan konfirmasi alamat Anda ke admin.",
    defaultOpen: false,
  },
  {
    question: "Area pengantaran di Gresik meliputi mana saja?",
    answer:
      "Kami melayani pengantaran ke seluruh area Kabupaten dan Kota Gresik. Untuk area yang jauh dari rute utama, mohon konfirmasi terlebih dahulu ke admin kami.",
    defaultOpen: false,
  },
  {
    question: "Apakah ada jadwal travel Banyuwangi Gresik malam?",
    answer:
      "Ya, kami memiliki jadwal malam sekitar pukul 21:00 WIB. Jadwal ini cocok bagi Anda yang ingin tiba di Gresik pada pagi hari.",
    defaultOpen: false,
  },
];

const faqData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Berapa jam perjalanan travel Banyuwangi ke Gresik via tol?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Estimasi waktu tempuh normal sekitar 7–8 jam termasuk 1x istirahat. Durasi bergantung pada lalu lintas dan titik jemput/antar."
      }
    },
    {
      "@type": "Question",
      "name": "Apakah tersedia jadwal travel Banyuwangi Gresik malam?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Ya, tersedia keberangkatan malam sekitar pukul 21:00 WIB. Cocok untuk tiba pagi hari di Gresik."
      }
    },
    {
      "@type": "Question",
      "name": "Apakah layanan bersifat door-to-door?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Ya, kami menjemput dari alamat di Banyuwangi dan mengantar sampai alamat tujuan di Gresik selama masih dalam area cakupan rute."
      }
    },
    {
      "@type": "Question",
      "name": "Bagaimana cara pesan travel Banyuwangi Gresik?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Anda bisa memesan melalui WhatsApp di 0821-4325-8744 atau mengisi formulir pemesanan di halaman ini."
      }
    }
  ]
};

const serviceData = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Travel Banyuwangi - Gresik (PP)",
  "serviceType": "Door-to-door Intercity Travel",
  "provider": {
    "@type": "TravelAgency",
    "name": "Juragan Travel",
    "url": "https://juragantravel.com/",
    "telephone": "+6282143258744",
    "image": "https://juragantravel.com/img/hero.webp",
    "areaServed": [
      { "@type": "City", "name": "Banyuwangi" },
      { "@type": "City", "name": "Gresik" },
      { "@type": "City", "name": "Surabaya" },
      { "@type": "City", "name": "Sidoarjo" }
    ]
  },
  "areaServed": [
    "Banyuwangi", "Genteng", "Kalibaru",
    "Gresik", "Manyar", "Driyorejo", "Kebomas", "Cerme", "Ujungpangkah"
  ],
  "availableChannel": [
    {
      "@type": "ServiceChannel",
      "serviceUrl": "https://juragantravel.com/rute/banyuwangi-gresik",
      "name": "Online Booking Form"
    },
    {
      "@type": "ServiceChannel",
      "name": "WhatsApp",
      "servicePhone": { "@type": "ContactPoint", "telephone": "+6282143258744" },
      "url": "https://wa.me/6282143258744"
    }
  ],
  "offers": {
    "@type": "Offer",
    "price": "350000",
    "priceCurrency": "IDR",
    "availability": "https://schema.org/InStock",
    "url": "https://juragantravel.com/rute/banyuwangi-gresik",
    "priceValidUntil": "2026-12-31"
  }
};

const siteSearchData = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Juragan Travel",
  "url": "https://juragantravel.com/",
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://juragantravel.com/search?q={search_term_string}",
    "query-input": "required name=search_term_string"
  }
};

export default function BanyuwangiGresikPage() {
  return (
    <>
      <StructuredData data={busTripData} />
      <StructuredData data={breadcrumbData} />
      <StructuredData data={breadcrumbData} />
      <StructuredData data={faqData} />
      <StructuredData data={serviceData} />
      <StructuredData data={siteSearchData} />
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
                <span className="text-dark font-medium">Banyuwangi - Gresik</span>
              </nav>
              <h1 className="text-4xl md:text-5xl font-extrabold text-dark">
                Travel Banyuwangi Gresik via Tol (PP)
              </h1>
              <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
                Layanan <strong>travel Banyuwangi Gresik</strong> door-to-door berangkat <strong>setiap hari</strong> (pagi, siang, malam), 
                <strong>via tol</strong>, driver berpengalaman. Harga mulai <strong>Rp 350.000</strong>.
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
                    src="/img/hero.webp"
                    alt="Travel Banyuwangi ke Gresik via tol, layanan door-to-door"
                    fill
                    className="rounded-lg shadow-xl object-cover"
                  />
                </div>
                <div className="md:w-1/2">
                  <span className="text-primary font-semibold uppercase">RUTE ANDALAN</span>
                  <h2 className="mt-2 text-3xl md:text-4xl font-extrabold text-dark">
                    Travel Banyuwangi Gresik Cepat via Tol
                  </h2>
                  <p className="mt-4 text-lg text-gray-700 leading-relaxed">
                    Kami melayani <strong>travel Banyuwangi Gresik</strong> dan{" "}
                    <strong>travel Gresik Banyuwangi</strong> setiap hari. Dengan armada terbaik dan driver
                    berpengalaman yang hafal rute, perjalanan Anda akan nyaman dan aman.
                  </p>
                  <p className="mt-4 text-lg text-gray-700 leading-relaxed">
                    Perjalanan Anda akan lebih cepat karena kami menggunakan{" "}
                    <strong>Jalan Tol Trans-Jawa</strong>. Layanan door-to-door kami memastikan Anda dijemput dari
                    rumah di Banyuwangi dan diantar sampai alamat tujuan di Gresik.
                  </p>
                </div>
              </div>

              {/* Jadwal & Harga */}
              <div className="bg-light p-8 md:p-12 rounded-lg shadow-lg mb-20">
                <div className="text-center">
                  <h2 className="text-3xl md:text-4xl font-extrabold text-dark">Jadwal & Harga Travel</h2>
                  <p className="mt-4 text-lg text-gray-600">
                    Jadwal pasti, harga terjangkau. Pesan kursi Anda sekarang!
                  </p>
                </div>
                <div className="mt-10 overflow-x-auto">
                  <table className="w-full min-w-max text-left">
                    <thead>
                      <tr className="border-b border-gray-300">
                        <th className="p-4 text-lg font-semibold text-dark">Rute</th>
                        <th className="p-4 text-lg font-semibold text-dark">Jadwal Berangkat</th>
                        <th className="p-4 text-lg font-semibold text-dark">Harga (mulai)</th>
                        <th className="p-4 text-lg font-semibold text-dark">Aksi</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      {schedules.map((schedule, index) => (
                        <tr key={index} className="hover:bg-white transition-colors">
                          <td className="p-4 font-medium text-gray-700">{schedule.route}</td>
                          <td className="p-4 text-gray-700">{schedule.schedule}</td>
                          <td className="p-4 font-bold text-primary text-lg">{schedule.price}</td>
                          <td className="p-4">
                            <WhatsAppLink
                              message={`Halo, saya mau pesan ${schedule.route}`}
                              title="Pesan Travel Banyuwangi Gresik via WhatsApp"
                              className="bg-secondary text-white px-4 py-2 rounded-lg font-medium hover:bg-opacity-90"
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
                  *Harga dapat berubah sewaktu-waktu. Hubungi admin via WA untuk harga pasti dan promo terbaru.
                </p>
              </div>

              {/* Keunggulan Rute */}
              <div className="mb-20">
                <div className="text-center">
                  <h2 className="text-3xl md:text-4xl font-extrabold text-dark">
                    Keunggulan Rute Banyuwangi-Gresik Kami
                  </h2>
                </div>
                <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
                  {benefits.map((benefit, index) => {
                    const IconComponent = benefit.icon;
                    return (
                      <div key={index} className="bg-white p-6 rounded-lg shadow-lg flex items-start space-x-4">
                        <IconComponent className="w-12 h-12 text-secondary shrink-0" />
                        <div>
                          <h3 className="text-xl font-bold text-dark">{benefit.title}</h3>
                          <p className="text-gray-600 mt-1">{benefit.description}</p>
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
                    Area Layanan Travel Banyuwangi Gresik
                  </h2>
                  <p className="mt-3 text-base md:text-lg text-gray-600 max-w-5xl mx-auto px-2">
                    Layanan door-to-door kami mencakup penjemputan dan pengantaran di seluruh area Banyuwangi, Gresik, serta area transit Surabaya dan Sidoarjo
                  </p>
                </div>

                {/* Tag Cloud Area Coverage */}
                <div className="flex flex-wrap justify-center gap-2 md:gap-3">
                  {/* Area Banyuwangi */}
                  <span className="bg-white px-3 py-1.5 md:px-4 md:py-2 rounded-lg text-xs md:text-sm font-medium text-gray-700 shadow-sm hover:shadow-md transition-shadow">
                    Banyuwangi Kota
                  </span>
                  <span className="bg-white px-3 py-1.5 md:px-4 md:py-2 rounded-lg text-xs md:text-sm font-medium text-gray-700 shadow-sm hover:shadow-md transition-shadow">
                    Banyuwangi
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
                  <span className="bg-white px-3 py-1.5 md:px-4 md:py-2 rounded-lg text-xs md:text-sm font-medium text-gray-700 shadow-sm hover:shadow-md transition-shadow">
                    Blimbingsari
                  </span>
                  <span className="bg-white px-3 py-1.5 md:px-4 md:py-2 rounded-lg text-xs md:text-sm font-medium text-gray-700 shadow-sm hover:shadow-md transition-shadow">
                    Gambiran
                  </span>
                  
                  {/* Area Transit Surabaya & Sidoarjo */}
                  <span className="bg-white px-3 py-1.5 md:px-4 md:py-2 rounded-lg text-xs md:text-sm font-medium text-gray-700 shadow-sm hover:shadow-md transition-shadow">
                    Surabaya Pusat
                  </span>
                  <span className="bg-white px-3 py-1.5 md:px-4 md:py-2 rounded-lg text-xs md:text-sm font-medium text-gray-700 shadow-sm hover:shadow-md transition-shadow">
                    Surabaya Utara
                  </span>
                  <span className="bg-white px-3 py-1.5 md:px-4 md:py-2 rounded-lg text-xs md:text-sm font-medium text-gray-700 shadow-sm hover:shadow-md transition-shadow">
                    Surabaya Barat
                  </span>
                  <span className="bg-white px-3 py-1.5 md:px-4 md:py-2 rounded-lg text-xs md:text-sm font-medium text-gray-700 shadow-sm hover:shadow-md transition-shadow">
                    Sidoarjo
                  </span>
                  <span className="bg-white px-3 py-1.5 md:px-4 md:py-2 rounded-lg text-xs md:text-sm font-medium text-gray-700 shadow-sm hover:shadow-md transition-shadow">
                    Waru
                  </span>
                  <span className="bg-white px-3 py-1.5 md:px-4 md:py-2 rounded-lg text-xs md:text-sm font-medium text-gray-700 shadow-sm hover:shadow-md transition-shadow">
                    Gedangan
                  </span>
                  
                  {/* Area Gresik */}
                  <span className="bg-white px-3 py-1.5 md:px-4 md:py-2 rounded-lg text-xs md:text-sm font-medium text-gray-700 shadow-sm hover:shadow-md transition-shadow">
                    Gresik Kota
                  </span>
                  <span className="bg-white px-3 py-1.5 md:px-4 md:py-2 rounded-lg text-xs md:text-sm font-medium text-gray-700 shadow-sm hover:shadow-md transition-shadow">
                    Kebomas
                  </span>
                  <span className="bg-white px-3 py-1.5 md:px-4 md:py-2 rounded-lg text-xs md:text-sm font-medium text-gray-700 shadow-sm hover:shadow-md transition-shadow">
                    Gresik
                  </span>
                  <span className="bg-white px-3 py-1.5 md:px-4 md:py-2 rounded-lg text-xs md:text-sm font-medium text-gray-700 shadow-sm hover:shadow-md transition-shadow">
                    Manyar
                  </span>
                  <span className="bg-white px-3 py-1.5 md:px-4 md:py-2 rounded-lg text-xs md:text-sm font-medium text-gray-700 shadow-sm hover:shadow-md transition-shadow">
                    Bungah
                  </span>
                  <span className="bg-white px-3 py-1.5 md:px-4 md:py-2 rounded-lg text-xs md:text-sm font-medium text-gray-700 shadow-sm hover:shadow-md transition-shadow">
                    Sidayu
                  </span>
                  <span className="bg-white px-3 py-1.5 md:px-4 md:py-2 rounded-lg text-xs md:text-sm font-medium text-gray-700 shadow-sm hover:shadow-md transition-shadow">
                    Ujungpangkah
                  </span>
                  <span className="bg-white px-3 py-1.5 md:px-4 md:py-2 rounded-lg text-xs md:text-sm font-medium text-gray-700 shadow-sm hover:shadow-md transition-shadow">
                    Cerme
                  </span>
                  <span className="bg-white px-3 py-1.5 md:px-4 md:py-2 rounded-lg text-xs md:text-sm font-medium text-gray-700 shadow-sm hover:shadow-md transition-shadow">
                    Benjeng
                  </span>
                  <span className="bg-white px-3 py-1.5 md:px-4 md:py-2 rounded-lg text-xs md:text-sm font-medium text-gray-700 shadow-sm hover:shadow-md transition-shadow">
                    Balongpanggang
                  </span>
                  <span className="bg-white px-3 py-1.5 md:px-4 md:py-2 rounded-lg text-xs md:text-sm font-medium text-gray-700 shadow-sm hover:shadow-md transition-shadow">
                    Duduksampeyan
                  </span>
                  <span className="bg-white px-3 py-1.5 md:px-4 md:py-2 rounded-lg text-xs md:text-sm font-medium text-gray-700 shadow-sm hover:shadow-md transition-shadow">
                    Driyorejo
                  </span>
                  <span className="bg-white px-3 py-1.5 md:px-4 md:py-2 rounded-lg text-xs md:text-sm font-medium text-gray-700 shadow-sm hover:shadow-md transition-shadow">
                    Menganti
                  </span>
                  <span className="bg-white px-3 py-1.5 md:px-4 md:py-2 rounded-lg text-xs md:text-sm font-medium text-gray-700 shadow-sm hover:shadow-md transition-shadow">
                    Sangkapura
                  </span>
                  <span className="bg-white px-3 py-1.5 md:px-4 md:py-2 rounded-lg text-xs md:text-sm font-medium text-gray-700 shadow-sm hover:shadow-md transition-shadow">
                    Tambak
                  </span>
                  <span className="bg-white px-3 py-1.5 md:px-4 md:py-2 rounded-lg text-xs md:text-sm font-medium text-gray-700 shadow-sm hover:shadow-md transition-shadow">
                    Wringinanom
                  </span>
                  <span className="bg-white px-3 py-1.5 md:px-4 md:py-2 rounded-lg text-xs md:text-sm font-medium text-gray-700 shadow-sm hover:shadow-md transition-shadow">
                    Panceng
                  </span>
                </div>
              </div>

              {/* Testimonial Section */}
              <div className="mb-20 bg-white">
                <div className="text-center mb-12">
                  <h2 className="text-2xl md:text-4xl font-extrabold text-dark">
                    Apa Kata Pelanggan Travel Banyuwangi Gresik
                  </h2>
                  <p className="mt-3 text-base md:text-lg text-gray-600 max-w-5xl mx-auto px-2">
                    Testimoni pelanggan rute travel Banyuwangi Gresik yang sudah menggunakan layanan door to door kami.
                  </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                  {/* Testimonial 1 */}
                  <div className="bg-light p-6 rounded-lg shadow-lg">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl">
                        F
                      </div>
                      <div className="ml-4">
                        <h3 className="font-bold text-dark">Farid Hermawan</h3>
                        <p className="text-sm text-gray-600">Wiraswasta</p>
                      </div>
                    </div>
                    <div className="flex mb-3">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 24 24">
                          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                        </svg>
                      ))}
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                      "Saya sering ke Gresik untuk urusan bisnis. Travel Banyuwangi Gresik ini sangat membantu karena door to door. Dijemput dari rumah, sampai Gresik langsung. Nyaman dan tepat waktu!"
                    </p>
                    <p className="text-sm text-gray-500 mt-4">Januari 2025</p>
                  </div>

                  {/* Testimonial 2 */}
                  <div className="bg-light p-6 rounded-lg shadow-lg">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl">
                        N
                      </div>
                      <div className="ml-4">
                        <h3 className="font-bold text-dark">Nur Azizah</h3>
                        <p className="text-sm text-gray-600">Mahasiswa</p>
                      </div>
                    </div>
                    <div className="flex mb-3">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 24 24">
                          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                        </svg>
                      ))}
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                      "Kuliah di Gresik, setiap libur pulang ke Banyuwangi pakai travel ini. Armada bersih, AC dingin, driver ramah. Perjalanan 7-8 jam jadi nggak terasa karena nyaman. Recommended!"
                    </p>
                    <p className="text-sm text-gray-500 mt-4">Desember 2024</p>
                  </div>

                  {/* Testimonial 3 */}
                  <div className="bg-light p-6 rounded-lg shadow-lg">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl">
                        A
                      </div>
                      <div className="ml-4">
                        <h3 className="font-bold text-dark">Ahmad Ridho</h3>
                        <p className="text-sm text-gray-600">Karyawan Swasta</p>
                      </div>
                    </div>
                    <div className="flex mb-3">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 24 24">
                          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                        </svg>
                      ))}
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                      "Bekerja di Gresik, sekali sebulan pulang ke Banyuwangi. Travel ini jadi pilihan terbaik. Harga terjangkau, lewat tol jadi cepat, dan pelayanan memuaskan. Terima kasih Juragan Travel!"
                    </p>
                    <p className="text-sm text-gray-500 mt-4">Desember 2024</p>
                  </div>
                </div>

                <div className="text-center mt-10">
                  <p className="text-sm md:text-base text-gray-600 mb-6">Ingin jadi pelanggan berikutnya yang puas dengan travel Banyuwangi Gresik kami?</p>
                  <WhatsAppLink
                    message="Halo Admin, saya mau pesan travel Banyuwangi-Gresik."
                    title="Hubungi Admin untuk Pesan Travel Banyuwangi Gresik"
                    className="inline-block bg-accent text-white px-6 py-2.5 md:px-8 md:py-3 rounded-lg text-sm md:text-base font-semibold shadow-lg hover:bg-opacity-90 transition-all"
                  >
                    Pesan Travel Banyuwangi Gresik via WhatsApp
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
                    Selain rute Banyuwangi - Gresik, kami juga melayani berbagai rute populer lainnya
                  </p>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                  {/* Rute 2: Solo */}
                  <Link href="/rute/banyuwangi-solo" className="group" title="Travel Banyuwangi Solo - Via Tol Nyaman Terpercaya">
                    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all transform hover:-translate-y-1">
                      <h3 className="text-xl font-bold text-dark text-center mb-2">Travel Banyuwangi - Solo</h3>
                      <p className="text-gray-600 text-center text-sm mb-3">
                        Jelajahi kota budaya Solo dengan perjalanan cepat via tol. Ideal untuk wisata kuliner, belanja batik di Pasar Klewer, atau mengunjungi Keraton Kasunanan.
                      </p>
                      <p className="text-primary font-bold text-center text-lg">Mulai Rp 400.000</p>
                    </div>
                  </Link>
                  {/* Rute 1: Tulungagung */}
                  <Link href="/rute/banyuwangi-tulungagung" className="group" title="Travel Banyuwangi Tulungagung - Door to Door Nyaman">
                    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all transform hover:-translate-y-1">
                      <h3 className="text-xl font-bold text-dark text-center mb-2">Travel Banyuwangi - Tulungagung</h3>
                      <p className="text-gray-600 text-center text-sm mb-3">
                        Perjalanan nyaman via tol Trans-Jawa dengan layanan door to door. Cocok untuk pulang kampung, wisata Pantai Popoh, atau kunjungan ke Goa Selomangleng.
                      </p>
                      <p className="text-primary font-bold text-center text-lg">Mulai Rp 400.000</p>
                    </div>
                  </Link>
                  {/* Rute 3: Jember */}
                  <Link href="/rute/banyuwangi-jember" className="group" title="Travel Banyuwangi Jember - Cepat dan Terpercaya">
                    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all transform hover:-translate-y-1">
                      <h3 className="text-xl font-bold text-dark text-center mb-2">Travel Banyuwangi - Jember</h3>
                      <p className="text-gray-600 text-center text-sm mb-3">
                        Rute terdekat dan tercepat! Sempurna untuk mahasiswa, pekerja, atau transit ke area kampus UMJ, Universitas Jember, dan pusat kota. Berangkat setiap hari.
                      </p>
                      <p className="text-primary font-bold text-center text-lg">Mulai Rp 150.000</p>
                    </div>
                  </Link>
                </div>

                <div className="text-center mt-8">
                  <Link
                    href="/rute"
                    title="Lihat Semua Rute Travel Banyuwangi"
                    className="inline-block bg-primary text-white px-6 py-2.5 md:px-8 md:py-3 rounded-lg text-sm md:text-base font-semibold shadow-lg hover:bg-opacity-90 transition-all"
                  >
                    Lihat Semua Rute Travel
                  </Link>
                </div>
              </div>

              {/* FAQ Rute Spesifik */}
              <div className="max-w-3xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-extrabold text-dark text-center mb-10">
                  FAQ - Rute Banyuwangi Gresik
                </h2>
                <div className="space-y-6">
                  {faqs.map((faq, index) => (
                    <details key={index} className="bg-light p-6 rounded-lg shadow-md group" open={faq.defaultOpen}>
                      <summary className="flex justify-between items-center font-semibold text-lg text-primary cursor-pointer">
                        {faq.question}
                        <ChevronDown className="w-5 h-5 transition-transform duration-300 group-open:rotate-180" />
                      </summary>
                      <p className="mt-4 text-gray-700 leading-relaxed">{faq.answer}</p>
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
                <h2 className="text-3xl md:text-4xl font-extrabold text-dark">
                  Pesan Travel Banyuwangi - Gresik
                </h2>
                <p className="mt-4 text-lg text-gray-600">
                  Isi formulir di bawah ini untuk pesan tiket travel dengan mudah dan cepat
                </p>
              </div>

              <BookingForm routeName="Banyuwangi → Gresik" />
            </div>
          </section>

          {/* CTA Section */}
          <section id="kontak" className="py-20 bg-primary text-white">
            <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
              <h2 className="text-3xl md:text-4xl font-extrabold">Pesan Tiket Travel Banyuwangi Gresik Anda</h2>
              <p className="mt-4 text-lg text-gray-200 max-w-2xl mx-auto">
                Amankan kursi Anda sekarang. Hubungi admin kami via WhatsApp untuk booking cepat dan informasi jadwal
                travel Banyuwangi Gresik hari ini.
              </p>
              <WhatsAppLink
                message="Halo Admin, saya mau pesan travel Banyuwangi-Gresik."
                title="Chat WhatsApp untuk Booking Travel Banyuwangi Gresik"
                className="mt-10 inline-block bg-accent text-white px-10 py-3 rounded-lg font-bold text-lg shadow-lg hover:bg-opacity-90 transition-all transform hover:-translate-y-1"
              >
                Pesan Travel Banyuwangi Gresik via WhatsApp
              </WhatsAppLink>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
}
