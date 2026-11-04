import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { StructuredData } from "../../components/SEO";
import { Map, Home, Plane, ChevronDown, Mountain } from "lucide-react";
import BookingForm from "../../components/BookingForm";
import WhatsAppLink from "../../components/WhatsAppLink";

export const metadata: Metadata = {
  title: "Travel Banyuwangi Sidoarjo (PP) – Via Tol, Door to Door & Nyaman | Juragan Travel",
  description:
    "Butuh travel Banyuwangi Sidoarjo via tol? Juragan Travel melayani travel Banyuwangi Sidoarjo dan Sidoarjo Banyuwangi setiap hari dengan layanan door to door, armada nyaman, dan booking cepat melalui formulir kontak.",
  keywords:
    "travel banyuwangi sidoarjo, travel sidoarjo banyuwangi, harga travel banyuwangi sidoarjo, jadwal travel banyuwangi sidoarjo, travel banyuwangi sidoarjo via tol, travel banyuwangi sidoarjo malam, travel banyuwangi sidoarjo pagi, travel banyuwangi sidoarjo murah",
  authors: [{ name: "Juragan Travel" }],
  openGraph: {
    title: "Travel Banyuwangi Sidoarjo (PP) – Via Tol, Door to Door & Nyaman | Juragan Travel",
    description:
      "Travel Banyuwangi Sidoarjo via tol, berangkat tiap hari, jemput di rumah dan antar sampai tujuan Sidoarjo. Booking cepat melalui formulir kontak.",
    type: "website",
    url: "https://juragantravel.com/rute/banyuwangi-sidoarjo",
    images: [
      {
        url: "/img/rute/banyuwangi-surabaya.webp",
        width: 1200,
        height: 630,
      },
    ],
    siteName: "Juragan Travel",
  },
  twitter: {
    card: "summary_large_image",
    title: "Travel Banyuwangi Sidoarjo (PP) – Via Tol, Door to Door & Nyaman | Juragan Travel",
    description:
      "Travel Banyuwangi Sidoarjo via tol, berangkat tiap hari, jemput di rumah dan antar sampai tujuan Sidoarjo. Booking cepat melalui formulir kontak.",
    images: ["/img/rute/banyuwangi-surabaya.webp"],
  },
  alternates: {
    canonical: "https://juragantravel.com/rute/banyuwangi-sidoarjo",
  },
};

const busTripData = {
  "@context": "https://schema.org",
  "@type": "BusTrip",
  provider: {
    "@type": "TravelAgency",
    name: "Juragan Travel",
    url: "https://juragantravel.com/",
    image: "https://juragantravel.com/img/rute/banyuwangi-surabaya.webp",
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
    name: "Area Sidoarjo (Door-to-door)",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Sidoarjo",
      addressRegion: "Jawa Timur",
      addressCountry: "ID",
    },
  },
  name: "Travel Banyuwangi Sidoarjo (PP) via Tol",
  description:
    "Layanan travel Banyuwangi Sidoarjo dan travel Sidoarjo Banyuwangi via tol dengan jadwal pagi, siang, dan malam serta layanan door to door.",
  offers: {
    "@type": "Offer",
    price: "200000",
    priceCurrency: "IDR",
    name: "Harga Tiket Travel Banyuwangi Sidoarjo",
    description: "Harga travel Banyuwangi Sidoarjo dapat bervariasi. Hubungi admin untuk harga terbaru.",
    url: "https://juragantravel.com/rute/banyuwangi-sidoarjo",
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
      name: "Banyuwangi - Sidoarjo",
      item: "https://juragantravel.com/rute/banyuwangi-sidoarjo",
    },
  ],
};

const schedules = [
  {
    route: "Travel Banyuwangi → Sidoarjo",
    schedule: "Pagi (09:00), Siang (15:00), Malam (21:00)",
    price: "Rp 200.000",
  },
  {
    route: "Travel Sidoarjo → Banyuwangi",
    schedule: "Pagi (09:00), Siang (15:00), Malam (21:00)",
    price: "Rp 200.000",
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
    description: "Kami jemput di rumah Anda (Banyuwangi) dan antar sampai alamat tujuan (Sidoarjo).",
  },
  {
    icon: Plane,
    title: "Dekat Bandara Juanda",
    description: "Sangat ideal jika tujuan Anda adalah Sidoarjo atau area sekitar Bandara Juanda.",
  },
];

const faqs = [
  {
    question: "Berapa jam perjalanan travel Banyuwangi Sidoarjo via tol?",
    answer:
      "Estimasi waktu tempuh normal adalah sekitar 6-7 jam, sudah termasuk 1x istirahat di rest area. Waktu bisa bervariasi tergantung kondisi lalu lintas dan titik penjemputan/pengantaran.",
    defaultOpen: true,
  },
  {
    question: "Area penjemputan di Banyuwangi meliputi mana saja?",
    answer:
      "Kami melayani penjemputan di area Kota Banyuwangi, Rogojampi, Srono, Genteng, Jajag, dan Kalibaru. Untuk area di luar jalur utama, mungkin ada sedikit biaya tambahan. Silakan konfirmasi alamat Anda ke admin.",
    defaultOpen: false,
  },
  {
    question: "Area pengantaran di Sidoarjo meliputi mana saja?",
    answer:
      "Kami melayani pengantaran ke seluruh area Kota Sidoarjo, Waru, Gedangan, Candi, Taman, Sepanjang, dan area lain yang berdekatan dengan akses tol maupun Bandara Juanda.",
    defaultOpen: false,
  },
  {
    question: "Apakah ada jadwal travel Banyuwangi Sidoarjo malam hari?",
    answer:
      "Ya, kami memiliki jadwal malam sekitar pukul 21:00 WIB. Jadwal ini cocok bagi Anda yang ingin tiba di Sidoarjo pada pagi hari.",
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

export default function BanyuwangiSidoarjoPage() {
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
                <span className="text-dark font-medium">Banyuwangi - Sidoarjo</span>
              </nav>
              <h1 className="text-2xl md:text-4xl font-extrabold text-dark">Travel Banyuwangi Sidoarjo (PP) – Via Tol, Door to Door</h1>
              <p className="mt-4 text-sm md:text-lg text-gray-600 max-w-4xl mx-auto">
                Juragan Travel melayani travel Banyuwangi Sidoarjo via tol setiap hari dengan sistem jemput di rumah dan antar sampai tujuan (door to door) di seluruh area Sidoarjo dan sekitarnya, termasuk Waru, Gedangan, Candi, dan dekat Bandara Juanda.
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
                    src="/img/rute/banyuwangi-surabaya.webp"
                    alt="Armada travel Banyuwangi Sidoarjo via tol"
                    fill
                    className="rounded-lg shadow-xl object-cover"
                  />
                </div>
                <div className="md:w-1/2">
                  <span className="text-sm md:text-base text-primary font-semibold uppercase">RUTE VIA TOL</span>
                  <h2 className="mt-2 text-xl md:text-4xl font-extrabold text-dark">
                    Travel Banyuwangi Sidoarjo Cepat via Tol
                  </h2>
                  <p className="mt-4 text-sm md:text-lg text-gray-700 leading-relaxed">
                    Kami melayani <strong>travel Banyuwangi Sidoarjo</strong> dan{" "}
                    <strong>travel Sidoarjo Banyuwangi</strong> setiap hari. Rute ini adalah bagian dari rute utama kami, menggunakan armada terbaik dan driver berpengalaman yang hafal rute.
                  </p>
                  <p className="mt-4 text-sm md:text-lg text-gray-700 leading-relaxed">
                    Perjalanan Anda akan lebih cepat dan nyaman karena kami menggunakan{" "}
                    <strong>Jalan Tol Probolinggo-Surabaya</strong>. Kami juga melayani pengantaran di area dekat{" "}
                    <strong>Bandara Juanda</strong> dengan penyesuaian jadwal.
                  </p>
                  <p className="mt-4 text-sm md:text-lg text-gray-700 leading-relaxed">
                    Rute travel Banyuwangi ke Sidoarjo kami semuanya lewat Jalan Tol sehingga perjalanan lebih cepat dan minim macet.
                  </p>
                </div>
              </div>

              {/* Jadwal & Harga */}
              <div className="bg-light p-8 md:p-12 rounded-lg shadow-lg mb-20">
                <div className="text-center">
                  <h2 className="text-xl md:text-4xl font-extrabold text-dark">Jadwal & Harga Travel Banyuwangi Sidoarjo</h2>
                  <p className="mt-4 text-sm md:text-lg text-gray-600">
                    Jadwal pasti, harga terjangkau. Pesan kursi travel Banyuwangi Sidoarjo Anda sekarang!
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
                              title="Pesan Travel Banyuwangi Sidoarjo melalui formulir kontak"
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
                <p className="text-center mt-6 text-sm text-gray-600 max-w-4xl mx-auto">
                  *Harga travel Banyuwangi Sidoarjo mulai Rp 200.000 dengan jadwal keberangkatan pagi, siang, dan malam setiap hari. Harga dapat berubah sewaktu-waktu, hubungi kami melalui formulir kontak untuk info harga terbaru atau{" "}
                  <a href="#form-pemesanan" className="text-primary font-semibold underline" title="Isi Formulir Pemesanan Travel Banyuwangi Sidoarjo">
                    pesan travel Banyuwangi Sidoarjo melalui formulir pemesanan
                  </a>.
                </p>
              </div>

              {/* Keunggulan Rute */}
              <div className="mb-20">
                <div className="text-center">
                  <h2 className="text-xl md:text-4xl font-extrabold text-dark">
                    Keunggulan Travel Banyuwangi Sidoarjo Kami
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
                    Area Layanan Travel Banyuwangi Sidoarjo
                  </h2>
                  <p className="mt-3 text-base md:text-lg text-gray-600 max-w-5xl mx-auto px-2">
                    Layanan door-to-door kami mencakup penjemputan dan pengantaran di seluruh area Banyuwangi dan Sidoarjo
                  </p>
                  <p className="mt-2 text-sm md:text-base text-gray-600 max-w-4xl mx-auto px-2">
                    Jadi, baik Anda berangkat dari Banyuwangi ke Sidoarjo maupun dari Sidoarjo ke Banyuwangi, Anda bisa menggunakan layanan travel kami tanpa perlu datang ke terminal.
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
                  
                  {/* Sidoarjo Areas */}
                  <span className="bg-white px-3 py-1.5 md:px-4 md:py-2 rounded-lg text-xs md:text-sm font-medium text-gray-700 shadow-sm hover:shadow-md transition-shadow">
                    Sidoarjo Kota
                  </span>
                  <span className="bg-white px-3 py-1.5 md:px-4 md:py-2 rounded-lg text-xs md:text-sm font-medium text-gray-700 shadow-sm hover:shadow-md transition-shadow">
                    Waru
                  </span>
                  <span className="bg-white px-3 py-1.5 md:px-4 md:py-2 rounded-lg text-xs md:text-sm font-medium text-gray-700 shadow-sm hover:shadow-md transition-shadow">
                    Gedangan
                  </span>
                  <span className="bg-white px-3 py-1.5 md:px-4 md:py-2 rounded-lg text-xs md:text-sm font-medium text-gray-700 shadow-sm hover:shadow-md transition-shadow">
                    Candi
                  </span>
                  <span className="bg-white px-3 py-1.5 md:px-4 md:py-2 rounded-lg text-xs md:text-sm font-medium text-gray-700 shadow-sm hover:shadow-md transition-shadow">
                    Taman
                  </span>
                  <span className="bg-white px-3 py-1.5 md:px-4 md:py-2 rounded-lg text-xs md:text-sm font-medium text-gray-700 shadow-sm hover:shadow-md transition-shadow">
                    Sepanjang
                  </span>
                  <span className="bg-white px-3 py-1.5 md:px-4 md:py-2 rounded-lg text-xs md:text-sm font-medium text-gray-700 shadow-sm hover:shadow-md transition-shadow">
                    Bandara Juanda
                  </span>
                  <span className="bg-white px-3 py-1.5 md:px-4 md:py-2 rounded-lg text-xs md:text-sm font-medium text-gray-700 shadow-sm hover:shadow-md transition-shadow">
                    Buduran
                  </span>
                  <span className="bg-white px-3 py-1.5 md:px-4 md:py-2 rounded-lg text-xs md:text-sm font-medium text-gray-700 shadow-sm hover:shadow-md transition-shadow">
                    Sedati
                  </span>
                  <span className="bg-white px-3 py-1.5 md:px-4 md:py-2 rounded-lg text-xs md:text-sm font-medium text-gray-700 shadow-sm hover:shadow-md transition-shadow">
                    Porong
                  </span>
                </div>
              </div>

              {/* Testimonial Section - Route Specific */}
              <div className="mb-20 bg-white">
                <div className="text-center mb-12">
                  <h2 className="text-2xl md:text-4xl font-extrabold text-dark">
                    Apa Kata Pelanggan Travel Banyuwangi Sidoarjo
                  </h2>
                  <p className="mt-3 text-base md:text-lg text-gray-600 max-w-5xl mx-auto px-2">
                    Testimoni pelanggan rute travel Banyuwangi Sidoarjo yang sudah menggunakan layanan door to door kami.
                  </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                  {/* Testimonial 1 */}
                  <div className="bg-light p-6 rounded-lg shadow-lg">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-xl">
                        F
                      </div>
                      <div className="ml-4">
                        <h4 className="font-bold text-dark">Fitri Handayani</h4>
                        <p className="text-sm text-gray-600">Mahasiswi, Sidoarjo</p>
                      </div>
                    </div>
                    <div className="flex mb-3">
                      <span className="text-accent text-xl">★★★★★</span>
                    </div>
                    <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                      "Saya kuliah di Sidoarjo, rutin pulang ke Banyuwangi pakai travel ini. Pelayanan door-to-door sangat membantu, tidak perlu ribet ke terminal. Driver juga ramah dan harga terjangkau!"
                    </p>
                    <p className="text-xs text-gray-500 mt-4">Januari 2025</p>
                  </div>

                  {/* Testimonial 2 */}
                  <div className="bg-light p-6 rounded-lg shadow-lg">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-secondary text-white rounded-full flex items-center justify-center font-bold text-xl">
                        B
                      </div>
                      <div className="ml-4">
                        <h4 className="font-bold text-dark">Bambang Susilo</h4>
                        <p className="text-sm text-gray-600">Pengusaha, Banyuwangi</p>
                      </div>
                    </div>
                    <div className="flex mb-3">
                      <span className="text-accent text-xl">★★★★★</span>
                    </div>
                    <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                      "Sering ke Sidoarjo untuk urusan bisnis. Juragan Travel solusi terbaik! Tepat waktu, via tol jadi cepat, dan bisa dijemput dari rumah. Sangat recommended!"
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
                        <h4 className="font-bold text-dark">Linda Wahyuni</h4>
                        <p className="text-sm text-gray-600">Karyawan, Sidoarjo</p>
                      </div>
                    </div>
                    <div className="flex mb-3">
                      <span className="text-accent text-xl">★★★★★</span>
                    </div>
                    <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                      "Travel paling nyaman untuk rute Sidoarjo-Banyuwangi! Mobilnya bersih, AC dingin, dan driver sangat membantu dengan bagasi. Pasti pakai lagi!"
                    </p>
                    <p className="text-xs text-gray-500 mt-4">Januari 2025</p>
                  </div>
                </div>

                <div className="text-center mt-10">
                  <p className="text-sm md:text-base text-gray-600 mb-6">Ingin jadi pelanggan berikutnya yang puas dengan travel Banyuwangi Sidoarjo kami?</p>
                  <WhatsAppLink
                    message="Halo Admin, saya mau pesan travel Banyuwangi-Sidoarjo."
                    title="Hubungi Admin untuk Pesan Travel Banyuwangi Sidoarjo"
                    className="inline-block bg-accent text-white px-6 py-2.5 md:px-8 md:py-3 rounded-lg text-sm md:text-base font-semibold shadow-lg hover:bg-opacity-90 transition-all"
                  >
                    Pesan Travel Banyuwangi Sidoarjo melalui formulir kontak
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
                    Selain rute Banyuwangi - Sidoarjo, kami juga melayani berbagai rute populer lainnya
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
                        Travel Banyuwangi Surabaya via tol dengan layanan door-to-door ke seluruh area Surabaya & Bandara Juanda.
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-primary font-bold text-lg">Mulai Rp 200.000</span>
                        <span className="text-secondary group-hover:translate-x-1 transition-transform">→</span>
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
                          <p className="text-sm text-gray-600">Cepat & Nyaman</p>
                        </div>
                      </div>
                      <p className="text-sm md:text-base text-gray-700 mb-4">
                        Travel Banyuwangi Gresik dengan layanan door-to-door ke seluruh area Gresik & sekitarnya.
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
              <div className="max-w-3xl mx-auto">
                <h2 className="text-xl md:text-4xl font-extrabold text-dark mb-8 text-center">
                  FAQ Travel Banyuwangi Sidoarjo (Rute & Layanan)
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
                  Pesan Travel Banyuwangi - Sidoarjo
                </h2>
                <p className="mt-4 text-sm md:text-lg text-gray-600">
                  Isi formulir di bawah ini untuk pesan tiket travel Banyuwangi Sidoarjo dengan mudah dan cepat.
                </p>
              </div>

              <BookingForm routeName="Banyuwangi → Sidoarjo" />
            </div>
          </section>

          {/* CTA Section */}
          <section id="kontak" className="py-20 bg-primary text-white">
            <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
              <h2 className="text-xl md:text-4xl font-extrabold">Pesan Tiket Travel Banyuwangi Sidoarjo Anda</h2>
              <p className="mt-4 text-sm md:text-lg text-gray-200 max-w-2xl mx-auto">
                Amankan kursi Anda sekarang. Hubungi admin kami melalui formulir kontak untuk booking cepat dan informasi jadwal
                travel Banyuwangi Sidoarjo hari ini.
              </p>
              <WhatsAppLink
                message="Halo Admin, saya mau pesan travel Banyuwangi-Sidoarjo."
                title="Kirim Permintaan Booking Travel Banyuwangi Sidoarjo"
                className="mt-10 inline-block bg-accent text-white px-6 py-2.5 md:px-10 md:py-3 rounded-lg font-bold text-sm md:text-lg shadow-lg hover:bg-opacity-90 transition-all transform hover:-translate-y-1"
              >
                Pesan Travel Banyuwangi Sidoarjo melalui formulir kontak
              </WhatsAppLink>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
}
