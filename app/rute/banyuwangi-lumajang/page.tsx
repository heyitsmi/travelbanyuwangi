import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { StructuredData } from "../../components/SEO";
import { ArrowRight, Home, Mountain, ChevronDown, Map, Plane } from "lucide-react";
import BookingForm from "../../components/BookingForm";
import WhatsAppLink from "../../components/WhatsAppLink";

export const metadata: Metadata = {
  title: "Travel Banyuwangi Lumajang – Jadwal, Harga, Carter (Via Jember) | Juragan Travel",
  description:
    "Layanan travel Banyuwangi Lumajang & travel Lumajang Banyuwangi (PP) via Jember. Door-to-door tiap hari (pagi/malam), armada nyaman, driver berpengalaman. Harga mulai Rp 170.000.",
  keywords:
    "travel banyuwangi lumajang, travel lumajang banyuwangi, travel banyuwangi lumajang via jember, harga travel banyuwangi lumajang, jadwal travel banyuwangi lumajang, carter banyuwangi lumajang",
  authors: [{ name: "Juragan Travel" }],
  openGraph: {
    title: "Travel Banyuwangi Lumajang – Jadwal & Harga (Via Jember) | Juragan Travel",
    description:
      "Travel Banyuwangi ke Lumajang & sebaliknya via Jember. Door-to-door tiap hari, aman & nyaman. Harga mulai Rp 170.000.",
    type: "website",
    url: "https://juragantravel.com/rute/banyuwangi-lumajang",
    images: [{ url: "https://juragantravel.com/img/hero.webp", width: 1200, height: 630, alt: "Travel Banyuwangi Lumajang via Jember" }],
    siteName: "Juragan Travel",
  },
  twitter: {
    card: "summary_large_image",
    title: "Travel Banyuwangi Lumajang – Via Jember | Juragan Travel",
    description:
      "Door-to-door tiap hari (pagi/malam), armada nyaman. Travel Banyuwangi Lumajang & Lumajang Banyuwangi mulai Rp 170.000.",
    images: ["https://juragantravel.com/img/hero.webp"],
  },
  alternates: { canonical: "https://juragantravel.com/rute/banyuwangi-lumajang" },
};

const busTripData = {
  "@context": "https://schema.org",
  "@type": "BusTrip",
  name: "Travel Banyuwangi ⇄ Lumajang (Via Jember) – Door to Door",
  description:
    "Travel Banyuwangi ke Lumajang dan Lumajang ke Banyuwangi via Jember. Layanan door-to-door setiap hari, armada nyaman, tepat waktu.",
  provider: {
    "@type": "TravelAgency",
    name: "Juragan Travel",
    url: "https://juragantravel.com/",
    telephone: "+6282143258744",
    image: "https://juragantravel.com/img/hero.webp"
  },
  departureBusStop: {
    "@type": "BusStop",
    name: "Area Banyuwangi (Door-to-door)",
    address: { "@type": "PostalAddress", addressLocality: "Banyuwangi", addressRegion: "Jawa Timur", addressCountry: "ID" }
  },
  arrivalBusStop: {
    "@type": "BusStop",
    name: "Area Lumajang (Door-to-door)",
    address: { "@type": "PostalAddress", addressLocality: "Lumajang", addressRegion: "Jawa Timur", addressCountry: "ID" }
  },
  offers: {
    "@type": "Offer",
    price: "170000",
    priceCurrency: "IDR",
    name: "Harga Tiket Travel Banyuwangi Lumajang",
    description:
      "Harga mulai Rp 170.000 per orang (door-to-door). Tersedia carter private dengan jadwal fleksibel. Hubungi admin untuk detail titik jemput & promo.",
    url: "https://juragantravel.com/rute/banyuwangi-lumajang",
    availability: "https://schema.org/InStock"
  }
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
      name: "Banyuwangi - Lumajang",
      item: "https://juragantravel.com/rute/banyuwangi-lumajang",
    },
  ],
};

const schedules = [
  {
    route: "Travel Banyuwangi → Lumajang",
    schedule: "Pagi (09:00), Malam (21:00)",
    price: "Rp 170.000",
  },
  {
    route: "Travel Lumajang → Banyuwangi",
    schedule: "Pagi (09:00), Malam (21:00)",
    price: "Rp 170.000",
  }
];

const benefits = [
  {
    icon: ArrowRight,
    title: "Rute Selatan via Jember",
    description: "Jalur utama selatan yang relatif lancar dan waktu tempuh stabil; cocok untuk keberangkatan pagi & malam."
  },
  {
    icon: Home,
    title: "Door to Door",
    description: "Kami jemput di rumah Anda dan antar sampai alamat tujuan di area Kota Lumajang.",
  },
  {
    icon: Mountain,
    title: "Transit Bromo / Semeru",
    description: "Melayani antar-jemput di titik transit (hotel/basecamp) area Lumajang.",
  },
];

const faqs = [
  {
    question: "Berapa jam perjalanan travel Banyuwangi ke Lumajang?",
    answer: "Estimasi 4–5 jam tergantung lalu lintas serta titik jemput/antar. Rute utama via Jember.",
    defaultOpen: true
  },
  {
    question: "Apakah tersedia jadwal pagi dan malam?",
    answer: "Ya. Umumnya keberangkatan pukul 09.00 dan 21.00 dari kedua arah. Silakan konfirmasi ke admin.",
    defaultOpen: false
  },
  {
    question: "Area penjemputan di Banyuwangi meliputi mana saja?",
    answer:
      "Kami melayani penjemputan di area Kota Banyuwangi, Rogojampi, Srono, Genteng, Jajag, dan Kalibaru. Untuk area di luar jalur utama, mungkin ada sedikit biaya tambahan.",
    defaultOpen: false,
  },
  {
    question: "Area pengantaran di Lumajang meliputi mana saja?",
    answer:
      "Kami melayani pengantaran ke seluruh area Kota Lumajang, Klakah, Sukodono, dan sekitarnya. Mohon konfirmasi alamat Anda ke admin saat memesan.",
    defaultOpen: false,
  },
  {
    question: "Berapa harga carter/private travel Banyuwangi ke Lumajang?",
    answer:
      "Harga carter (1 mobil Avanza/Xenia) untuk rute Banyuwangi ↔ Lumajang adalah mulai dari Rp 550.000,- (All-in: mobil, driver, bbm, tol). Harga bisa berbeda jika menggunakan unit Innova atau HiAce.",
    defaultOpen: false,
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Berapa jam perjalanan travel Banyuwangi ke Lumajang?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Estimasi waktu tempuh sekitar 4–5 jam tergantung lalu lintas serta titik jemput/antar. Rute utama via Jember (koridor selatan)."
      }
    },
    {
      "@type": "Question",
      "name": "Apakah tersedia jadwal pagi dan malam?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Ya. Umumnya keberangkatan pukul 09.00 dan 21.00 dari kedua arah. Silakan konfirmasi ke admin untuk ketersediaan kursi."
      }
    },
    {
      "@type": "Question",
      "name": "Berapa harga travel Banyuwangi Lumajang?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Harga mulai Rp 170.000 per orang (door-to-door). Tarif dapat bervariasi berdasarkan titik jemput/antar dan waktu keberangkatan."
      }
    },
    {
      "@type": "Question",
      "name": "Apakah bisa carter/private Banyuwangi ⇄ Lumajang?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Bisa. Carter private mulai sekitar Rp 550.000 (unit Avanza/Xenia). Jadwal fleksibel 24 jam. Untuk Innova/HiAce, hubungi admin."
      }
    }
  ]
};

export default function BanyuwangiLumajangPage() {
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
                <span className="text-dark font-medium">Banyuwangi - Lumajang</span>
              </nav>
              <h1 className="text-4xl md:text-5xl font-extrabold text-dark">Travel Banyuwangi - Lumajang (PP)</h1>
              <p className="mt-4 text-lg text-gray-600 max-w-4xl mx-auto">
                Juragan Travel melayani <strong>travel Banyuwangi Lumajang</strong> dan{" "}
                <strong>travel Lumajang Banyuwangi</strong> setiap hari via Jember. Layanan
                door-to-door yang nyaman, aman, dan tepat waktu (pagi & malam).
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
                    alt="Armada travel Banyuwangi Lumajang via Jember – door-to-door"
                    fill
                    className="rounded-lg shadow-xl object-cover"
                  />
                </div>
                <div className="md:w-1/2">
                  <span className="text-primary font-semibold uppercase">RUTE TRANSIT SELATAN</span>
                  <h2 className="mt-2 text-3xl md:text-4xl font-extrabold text-dark">
                    Travel Banyuwangi ke Lumajang (PP)
                  </h2>
                  <p className="mt-4 text-lg text-gray-700 leading-relaxed">
                    Kami menyediakan layanan <strong>travel Banyuwangi ke Lumajang</strong> (dan sebaliknya) setiap hari. Rute ini melayani koridor selatan Jawa Timur, melewati Jember.
                  </p>
                  <p className="mt-4 text-lg text-gray-700 leading-relaxed">
                    Layanan door-to-door kami memastikan Anda dijemput di alamat Banyuwangi dan diantar langsung ke
                    tujuan di Lumajang. Cek juga rute populer kami seperti{" "}
                    <Link href="/rute/banyuwangi-surabaya" className="text-primary underline hover:no-underline">travel Banyuwangi Surabaya</Link>{" "}
                    dan{" "}
                    <Link href="/rute/banyuwangi-malang" className="text-primary underline hover:no-underline">travel Banyuwangi Malang</Link>.
                  </p>
                </div>
              </div>

              {/* Jadwal & Harga */}
              <div className="bg-light p-8 md:p-12 rounded-lg shadow-lg mb-20">
                <div className="text-center">
                  <h2 className="text-3xl md:text-4xl font-extrabold text-dark">
                    Jadwal & Harga Travel Banyuwangi Lumajang
                  </h2>
                  <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
                    Jadwal <strong>travel Banyuwangi ke Lumajang</strong> dan{" "}
                    <strong>travel Lumajang ke Banyuwangi</strong> tersedia pagi & malam. Hubungi admin untuk ketersediaan kursi.
                  </p>
                </div>
                <div className="mt-10 overflow-x-auto">
                  <table className="w-full min-w-max text-left" aria-label="Jadwal dan harga travel Banyuwangi Lumajang">
                    <caption className="sr-only">Jadwal dan harga travel rute Banyuwangi ⇄ Lumajang</caption>
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
                              title="Pesan Travel Banyuwangi Lumajang via WhatsApp"
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
                    Keunggulan Travel Banyuwangi Lumajang di Juragan Travel
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
                    Area Layanan Travel Banyuwangi Lumajang
                  </h2>
                  <p className="mt-3 text-base md:text-lg text-gray-600 max-w-5xl mx-auto px-2">
                    Layanan door-to-door kami mencakup penjemputan di seluruh area Banyuwangi, pengantaran di Lumajang, serta transit di beberapa area Jember
                  </p>
                </div>

                {/* Tag Cloud Area Coverage */}
                <div className="flex flex-wrap justify-center gap-2 md:gap-3">
                  {/* Banyuwangi Areas */}
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
                  
                  {/* Jember Transit Areas */}
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
                    Rambipuji
                  </span>
                  <span className="bg-white px-3 py-1.5 md:px-4 md:py-2 rounded-lg text-xs md:text-sm font-medium text-gray-700 shadow-sm hover:shadow-md transition-shadow">
                    Tanggul
                  </span>
                  
                  {/* Lumajang Areas */}
                  <span className="bg-white px-3 py-1.5 md:px-4 md:py-2 rounded-lg text-xs md:text-sm font-medium text-gray-700 shadow-sm hover:shadow-md transition-shadow">
                    Lumajang Kota
                  </span>
                  <span className="bg-white px-3 py-1.5 md:px-4 md:py-2 rounded-lg text-xs md:text-sm font-medium text-gray-700 shadow-sm hover:shadow-md transition-shadow">
                    Sukodono
                  </span>
                  <span className="bg-white px-3 py-1.5 md:px-4 md:py-2 rounded-lg text-xs md:text-sm font-medium text-gray-700 shadow-sm hover:shadow-md transition-shadow">
                    Klakah
                  </span>
                  <span className="bg-white px-3 py-1.5 md:px-4 md:py-2 rounded-lg text-xs md:text-sm font-medium text-gray-700 shadow-sm hover:shadow-md transition-shadow">
                    Senduro
                  </span>
                  <span className="bg-white px-3 py-1.5 md:px-4 md:py-2 rounded-lg text-xs md:text-sm font-medium text-gray-700 shadow-sm hover:shadow-md transition-shadow">
                    Gucialit
                  </span>
                  <span className="bg-white px-3 py-1.5 md:px-4 md:py-2 rounded-lg text-xs md:text-sm font-medium text-gray-700 shadow-sm hover:shadow-md transition-shadow">
                    Kunir
                  </span>
                  <span className="bg-white px-3 py-1.5 md:px-4 md:py-2 rounded-lg text-xs md:text-sm font-medium text-gray-700 shadow-sm hover:shadow-md transition-shadow">
                    Tempeh
                  </span>
                  <span className="bg-white px-3 py-1.5 md:px-4 md:py-2 rounded-lg text-xs md:text-sm font-medium text-gray-700 shadow-sm hover:shadow-md transition-shadow">
                    Candipuro
                  </span>
                  <span className="bg-white px-3 py-1.5 md:px-4 md:py-2 rounded-lg text-xs md:text-sm font-medium text-gray-700 shadow-sm hover:shadow-md transition-shadow">
                    Pronojiwo
                  </span>
                  <span className="bg-white px-3 py-1.5 md:px-4 md:py-2 rounded-lg text-xs md:text-sm font-medium text-gray-700 shadow-sm hover:shadow-md transition-shadow">
                    Pasirian
                  </span>
                  <span className="bg-white px-3 py-1.5 md:px-4 md:py-2 rounded-lg text-xs md:text-sm font-medium text-gray-700 shadow-sm hover:shadow-md transition-shadow">
                    Randuagung
                  </span>
                </div>
              </div>

              {/* Testimonial Section */}
              <div className="mb-20 bg-white">
                <div className="text-center mb-12">
                  <h2 className="text-2xl md:text-4xl font-extrabold text-dark">
                    Apa Kata Pelanggan Travel Banyuwangi Lumajang
                  </h2>
                  <p className="mt-3 text-base md:text-lg text-gray-600 max-w-5xl mx-auto px-2">
                    Testimoni pelanggan yang sudah menggunakan layanan travel Banyuwangi Lumajang dengan sistem door to door kami.
                  </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                  {/* Testimonial 1 */}
                  <div className="bg-light p-6 rounded-lg shadow-lg">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl">
                        D
                      </div>
                      <div className="ml-4">
                        <h4 className="font-bold text-dark">Devi Kusuma</h4>
                        <p className="text-sm text-gray-500">Mahasiswa</p>
                      </div>
                    </div>
                    <div className="flex mb-3">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                          <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                        </svg>
                      ))}
                    </div>
                    <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                      "Saya kuliah di Lumajang, setiap libur pulang ke Banyuwangi pakai travel ini. Nyaman, tepat waktu, dan driver ramah. Recommended!"
                    </p>
                    <p className="text-xs text-gray-500 mt-4">Januari 2025</p>
                  </div>

                  {/* Testimonial 2 */}
                  <div className="bg-light p-6 rounded-lg shadow-lg">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl">
                        R
                      </div>
                      <div className="ml-4">
                        <h4 className="font-bold text-dark">Rian Pratama</h4>
                        <p className="text-sm text-gray-500">Pendaki Gunung</p>
                      </div>
                    </div>
                    <div className="flex mb-3">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                          <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                        </svg>
                      ))}
                    </div>
                    <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                      "Perjalanan dari Banyuwangi ke Lumajang untuk mendaki Semeru sangat lancar. Driver berpengalaman lewat rute selatan via Jember. Puas!"
                    </p>
                    <p className="text-xs text-gray-500 mt-4">Desember 2024</p>
                  </div>

                  {/* Testimonial 3 */}
                  <div className="bg-light p-6 rounded-lg shadow-lg">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl">
                        L
                      </div>
                      <div className="ml-4">
                        <h4 className="font-bold text-dark">Lina Safitri</h4>
                        <p className="text-sm text-gray-500">Guru</p>
                      </div>
                    </div>
                    <div className="flex mb-3">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                          <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                        </svg>
                      ))}
                    </div>
                    <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                      "Travel Banyuwangi Lumajang ini sangat membantu saya untuk pulang kampung. Harga terjangkau, armada bersih dan nyaman. Terima kasih!"
                    </p>
                    <p className="text-xs text-gray-500 mt-4">Januari 2025</p>
                  </div>
                </div>

                <div className="text-center mt-10">
                  <p className="text-sm md:text-base text-gray-600 mb-6">Ingin jadi pelanggan berikutnya yang puas dengan travel Banyuwangi Lumajang kami?</p>
                  <WhatsAppLink
                    message="Halo Admin, saya mau pesan travel Banyuwangi-Lumajang."
                    title="Hubungi Admin untuk Pesan Travel Banyuwangi Lumajang"
                    className="inline-block bg-accent text-white px-6 py-2.5 md:px-8 md:py-3 rounded-lg text-sm md:text-base font-semibold shadow-lg hover:bg-opacity-90 transition-all"
                  >
                    Pesan Travel Banyuwangi Lumajang via WhatsApp
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
                    Selain rute Banyuwangi - Lumajang, kami juga melayani berbagai rute populer lainnya
                  </p>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                  {/* Rute Surabaya */}
                  <Link href="/rute/banyuwangi-surabaya" className="group" title="Travel Banyuwangi Surabaya - Via Tol Door to Door">
                    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all transform hover:-translate-y-1">
                      <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mx-auto mb-4 group-hover:bg-blue-200 transition-colors">
                        <Map className="w-8 h-8 text-blue-600" />
                      </div>
                      <h3 className="text-xl font-bold text-dark text-center mb-2 group-hover:text-primary transition-colors">
                        Banyuwangi - Surabaya
                      </h3>
                      <p className="text-sm text-gray-600 text-center mb-4">
                        Via tol, door to door, jadwal pagi, siang, malam
                      </p>
                      <p className="text-center text-primary font-semibold">Mulai Rp 200.000</p>
                    </div>
                  </Link>

                  {/* Rute Malang */}
                  <Link href="/rute/banyuwangi-malang" className="group" title="Travel Banyuwangi Malang - Door to Door Nyaman">
                    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all transform hover:-translate-y-1">
                      <div className="flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mx-auto mb-4 group-hover:bg-green-200 transition-colors">
                        <Mountain className="w-8 h-8 text-green-600" />
                      </div>
                      <h3 className="text-xl font-bold text-dark text-center mb-2 group-hover:text-primary transition-colors">
                        Banyuwangi - Malang
                      </h3>
                      <p className="text-sm text-gray-600 text-center mb-4">
                        Rute cepat ke Kota Malang, door to door
                      </p>
                      <p className="text-center text-primary font-semibold">Mulai Rp 150.000</p>
                    </div>
                  </Link>

                  {/* Rute Denpasar */}
                  <Link href="/rute/banyuwangi-denpasar" className="group" title="Travel Banyuwangi Denpasar - Via Ferry Aman Nyaman">
                    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all transform hover:-translate-y-1">
                      <div className="flex items-center justify-center w-16 h-16 bg-orange-100 rounded-full mx-auto mb-4 group-hover:bg-orange-200 transition-colors">
                        <Plane className="w-8 h-8 text-orange-600" />
                      </div>
                      <h3 className="text-xl font-bold text-dark text-center mb-2 group-hover:text-primary transition-colors">
                        Banyuwangi - Denpasar
                      </h3>
                      <p className="text-sm text-gray-600 text-center mb-4">
                        Via ferry, door to door Bali
                      </p>
                      <p className="text-center text-primary font-semibold">Mulai Rp 250.000</p>
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
                <h2 className="text-3xl md:text-4xl font-extrabold text-dark text-center mb-10">
                  FAQ - Rute Banyuwangi Lumajang
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
                  Pesan Travel Banyuwangi - Lumajang
                </h2>
                <p className="mt-4 text-lg text-gray-600">
                  Isi formulir di bawah ini untuk pesan tiket travel dengan mudah dan cepat
                </p>
              </div>

              <BookingForm routeName="Banyuwangi → Lumajang" />
            </div>
          </section>

          {/* CTA Section */}
          <section id="kontak" className="py-20 bg-primary text-white">
            <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
              <h2 className="text-3xl md:text-4xl font-extrabold">
                Pesan Travel Banyuwangi Lumajang Sekarang
              </h2>
              <p className="mt-4 text-lg text-gray-200 max-w-2xl mx-auto">
                Amankan kursi <strong>travel Banyuwangi ke Lumajang</strong> atau{" "}
                <strong>travel Lumajang ke Banyuwangi</strong>. Booking cepat via WhatsApp—kami jemput di alamat Anda.
              </p>
              <WhatsAppLink
                message="Halo Admin, saya mau pesan travel Banyuwangi-Lumajang."
                title="Chat WhatsApp untuk Booking Travel Banyuwangi Lumajang"
                className="mt-10 inline-block bg-accent text-white px-10 py-3 rounded-lg font-bold text-lg shadow-lg hover:bg-opacity-90 transition-all transform hover:-translate-y-1"
              >
                Pesan Travel Banyuwangi Lumajang via WA
              </WhatsAppLink>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
}
