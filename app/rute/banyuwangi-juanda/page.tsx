import { Metadata } from "next";
import { Clock, Home, Zap, ChevronDown, Map, Plane, Mountain } from "lucide-react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { StructuredData } from "../../components/SEO";
import Image from "next/image";
import Link from "next/link";
import BookingForm from "../../components/BookingForm";
import WhatsAppLink from "../../components/WhatsAppLink";

export const metadata: Metadata = {
  title: "Travel Banyuwangi Juanda (Bandara) – Door to Door Tepat Waktu | Juragan Travel",
  description:
    "Layanan travel Banyuwangi Juanda dan travel Juanda Banyuwangi PP dengan sistem door to door. Berangkat setiap hari, menyesuaikan jadwal penerbangan Anda. Armada nyaman, via tol, driver berpengalaman.",
  keywords:
    "travel banyuwangi juanda, travel banyuwangi bandara juanda, travel juanda banyuwangi, travel banyuwangi ke bandara juanda, travel bandara juanda ke banyuwangi, harga travel banyuwangi juanda, jadwal travel banyuwangi juanda",
  openGraph: {
    title: "Travel Banyuwangi Juanda (Bandara) – Door to Door Tepat Waktu | Juragan Travel",
    description:
      "Jadwal & harga travel Banyuwangi Juanda (Bandara) PP terbaru. Door to door dari Banyuwangi ke Bandara Juanda Surabaya (T1 & T2), tepat waktu untuk penerbangan Anda.",
    type: "website",
    url: "https://juragantravel.com/rute/banyuwangi-juanda",
    images: [
      {
        url: "https://juragantravel.com/img/hero.webp",
        width: 1200,
        height: 630,
        alt: "Travel Banyuwangi Juanda door to door",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Travel Banyuwangi Juanda (Bandara) – Door to Door Tepat Waktu",
    description:
      "Travel Banyuwangi ke Bandara Juanda dan Juanda ke Banyuwangi dengan layanan door to door, jadwal fleksibel, dan armada nyaman.",
    images: ["https://juragantravel.com/img/hero.webp"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://juragantravel.com/rute/banyuwangi-juanda",
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
    name: "Bandara Internasional Juanda (Terminal 1 & 2)",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Sidoarjo",
      addressRegion: "Jawa Timur",
      addressCountry: "ID",
    },
  },
  name: "Travel Banyuwangi Juanda (Bandara) PP Door to Door",
  description:
    "Layanan travel Banyuwangi Juanda dan travel Juanda Banyuwangi PP dengan sistem door to door, antar jemput langsung ke Terminal 1 dan Terminal 2 Bandara Juanda via tol.",
  offers: {
    "@type": "Offer",
    price: "200000",
    priceCurrency: "IDR",
    name: "Harga Tiket Travel Banyuwangi Juanda",
    description:
      "Harga travel Banyuwangi ke Bandara Juanda dan sebaliknya mulai Rp 200.000 per orang. Harga dapat berbeda tergantung titik jemput dan tujuan. Hubungi admin untuk harga pasti.",
    url: "https://juragantravel.com/rute/banyuwangi-juanda",
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
      item: "https://juragantravel.com/"
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Rute",
      item: "https://juragantravel.com/rute"
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Banyuwangi - Bandara Juanda",
      item: "https://juragantravel.com/rute/banyuwangi-juanda"
    }
  ]
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Berapa jam perjalanan travel Banyuwangi ke Juanda?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Estimasi waktu tempuh normal adalah sekitar 6-7 jam via tol. Untuk mengejar penerbangan, kami sangat menyarankan Anda mengambil jadwal keberangkatan minimal 9-10 jam sebelum jam terbang."
      }
    },
    {
      "@type": "Question",
      name: "Apakah bisa jemput/antar di Terminal 1 dan Terminal 2 Juanda?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ya, tentu saja. Kami melayani antar jemput di Terminal 1 (T1) dan Terminal 2 (T2) Bandara Internasional Juanda. Mohon informasikan terminal Anda saat memesan."
      }
    },
    {
      "@type": "Question",
      name: "Bagaimana jika pesawat saya delay (untuk penjemputan di Juanda)?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Untuk penjemputan di Juanda, harap selalu informasikan nomor penerbangan Anda. Driver kami akan memantau jadwal landing. Jika terjadi delay, harap segera konfirmasi ke admin agar kami bisa mengatur ulang jadwal penjemputan Anda."
      }
    },
    {
      "@type": "Question",
      name: "Berapa harga carter/private travel Banyuwangi ke Juanda?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Harga carter (1 mobil) untuk rute Banyuwangi - Juanda sekali jalan adalah Rp 1.200.000,- sedangkan untuk PP (pulang-pergi) adalah Rp 2.100.000,- (All-in: mobil, driver, BBM, tol, parkir)."
      }
    }
  ]
};

export default function BanyuwangiJuandaPage() {
  const whatsappNumber = "6282143258744";
  
  const whatsappLinks = {
    toJuanda: `https://wa.me/${whatsappNumber}?text=Halo%2C%20saya%20mau%20pesan%20travel%20Banyuwangi%20ke%20Bandara%20Juanda`,
    fromJuanda: `https://wa.me/${whatsappNumber}?text=Halo%2C%20saya%20mau%20pesan%20travel%20dari%20Bandara%20Juanda%20ke%20Banyuwangi`,
    carter: `https://wa.me/${whatsappNumber}?text=Halo%2C%20saya%20mau%20tanya%20harga%20carter%20Banyuwangi-Juanda`,
    general: `https://wa.me/${whatsappNumber}?text=Halo%20Admin,%20saya%20mau%20pesan%20travel%20Banyuwangi-Juanda.`
  };

  return (
    <>
      <StructuredData data={busTripData} />
      <StructuredData data={breadcrumbData} />
      <StructuredData data={faqSchema} />
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="bg-light py-20">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <nav className="text-sm mb-4">
              <Link href="/" className="text-gray-600 hover:text-primary" title="Kembali ke Beranda">Beranda</Link>
              <span className="text-gray-400 mx-2">/</span>
              <Link href="/rute" className="text-gray-600 hover:text-primary" title="Lihat Semua Rute Travel">Rute</Link>
              <span className="text-gray-400 mx-2">/</span>
              <span className="text-dark font-medium">Banyuwangi - Bandara Juanda</span>
            </nav>
            <h1 className="text-4xl md:text-5xl font-extrabold text-dark">Travel Banyuwangi - Bandara Juanda (PP)</h1>
            <p className="mt-4 text-lg text-gray-600 max-w-5xl mx-auto">
              Juragan Travel melayani <strong>travel Banyuwangi Juanda</strong> dan{" "}
              <strong>travel Juanda Banyuwangi</strong> setiap hari via tol. Layanan
              door-to-airport langsung ke Terminal 1 dan Terminal 2, tepat waktu untuk jadwal
              penerbangan Anda.
            </p>
          </div>
        </section>

        {/* Detail Rute */}
        <section id="detail-rute" className="py-20 bg-white">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            
            {/* Deskripsi Rute */}
            <div className="flex flex-col md:flex-row items-center gap-12 mb-20">
              <div className="md:w-1/2">
                <Image 
                  src="/img/armada.webp"
                  alt="Armada travel Banyuwangi ke Bandara Juanda" 
                  width={600}
                  height={450}
                  className="rounded-lg shadow-xl w-full h-full object-cover"
                />
              </div>
              <div className="md:w-1/2">
                <span className="text-primary font-semibold uppercase">RUTE KHUSUS BANDARA</span>
                <h2 className="mt-2 text-3xl md:text-4xl font-extrabold text-dark">
                  Travel Banyuwangi ke Bandara Juanda (Surabaya)
                </h2>
                <p className="mt-4 text-lg text-gray-700 leading-relaxed">
                  Kami menyediakan layanan <strong>travel Banyuwangi ke Bandara Juanda</strong> (dan sebaliknya) sebagai rute bandara terpopuler kami. Layanan ini dirancang khusus untuk memastikan Anda tiba tepat waktu untuk mengejar jadwal penerbangan.
                </p>
                <p className="mt-4 text-lg text-gray-700 leading-relaxed">
                  Kami melayani penjemputan di alamat Anda (door-to-door) di area Banyuwangi dan mengantar Anda langsung ke terminal keberangkatan Bandara Juanda (T1 atau T2). Begitu pula sebaliknya, kami siap menjemput Anda di terminal kedatangan Juanda untuk kembali ke Banyuwangi.
                </p>
              </div>
            </div>

            {/* Jadwal & Harga */}
            <div className="bg-light p-8 md:p-12 rounded-lg shadow-lg mb-20">
              <div className="text-center">
                <h2 className="text-3xl md:text-4xl font-extrabold text-dark">
                  Jadwal & Harga Travel Banyuwangi Juanda
                </h2>
                <p className="mt-4 text-lg text-gray-600">
                  Jadwal <strong>travel Banyuwangi Juanda</strong> dan{" "}
                  <strong>travel Juanda Banyuwangi</strong> menyesuaikan jam terbang dan landing
                  pesawat Anda. Konsultasikan jadwal dengan admin untuk menghindari keterlambatan.
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
                    <tr className="hover:bg-white transition-colors">
                      <td className="p-4 font-medium text-gray-700">Banyuwangi → Bandara Juanda</td>
                      <td className="p-4 text-gray-700">Hubungi Admin (Menyesuaikan Jadwal Pesawat)</td>
                      <td className="p-4 font-bold text-primary text-lg">Rp 200.000</td>
                      <td className="p-4">
                        <WhatsAppLink
                          message="Halo, saya mau pesan travel Banyuwangi ke Bandara Juanda"
                          title="Pesan Travel Banyuwangi Bandara Juanda via WhatsApp"
                          className="bg-secondary text-white px-4 py-2 rounded-lg font-medium hover:bg-opacity-90"
                        >
                          Pesan
                        </WhatsAppLink>
                      </td>
                    </tr>
                    <tr className="hover:bg-white transition-colors">
                      <td className="p-4 font-medium text-gray-700">Bandara Juanda → Banyuwangi</td>
                      <td className="p-4 text-gray-700">Hubungi Admin (Menyesuaikan Jadwal Landing)</td>
                      <td className="p-4 font-bold text-primary text-lg">Rp 200.000</td>
                      <td className="p-4">
                        <WhatsAppLink
                          message="Halo, saya mau pesan travel dari Bandara Juanda ke Banyuwangi"
                          title="Pesan Travel Bandara Juanda Banyuwangi via WhatsApp"
                          className="bg-secondary text-white px-4 py-2 rounded-lg font-medium hover:bg-opacity-90"
                        >
                          Pesan
                        </WhatsAppLink>
                      </td>
                    </tr>
                    <tr className="hover:bg-white transition-colors">
                      <td className="p-4 font-medium text-gray-700">Carter Sekali Jalan Banyuwangi ↔ Juanda</td>
                      <td className="p-4 text-gray-700">Fleksibel 24 Jam (Sesuai Pesanan)</td>
                      <td className="p-4 font-bold text-primary text-lg">Rp 1.200.000</td>
                      <td className="p-4">
                        <WhatsAppLink
                          message="Halo, saya mau tanya harga carter Banyuwangi-Juanda"
                          title="Pesan Carter Sekali Jalan Banyuwangi Juanda via WhatsApp"
                          className="bg-secondary text-white px-4 py-2 rounded-lg font-medium hover:bg-opacity-90"
                        >
                          Pesan
                        </WhatsAppLink>
                      </td>
                    </tr>
                    <tr className="hover:bg-white transition-colors">
                      <td className="p-4 font-medium text-gray-700">Carter PP Banyuwangi ↔ Juanda</td>
                      <td className="p-4 text-gray-700">Fleksibel 24 Jam (Sesuai Pesanan)</td>
                      <td className="p-4 font-bold text-primary text-lg">Rp 2.100.000</td>
                      <td className="p-4">
                        <WhatsAppLink
                          message="Halo, saya mau tanya harga carter Banyuwangi-Juanda"
                          title="Pesan Carter PP Banyuwangi Juanda via WhatsApp"
                          className="bg-secondary text-white px-4 py-2 rounded-lg font-medium hover:bg-opacity-90"
                        >
                          Pesan
                        </WhatsAppLink>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-center mt-6 text-sm text-gray-600 max-w-3xl mx-auto">
                *Harga <strong>travel Banyuwangi ke Bandara Juanda</strong> dan{" "}
                <strong>travel Bandara Juanda ke Banyuwangi</strong> mulai Rp 200.000 per orang.
                Harga dapat berubah sewaktu-waktu tergantung titik penjemputan, tujuan, dan jadwal
                penerbangan. Hubungi admin via WhatsApp untuk harga pasti dan promo terbaru.
              </p>
            </div>

            {/* Keunggulan Rute */}
            <div className="mb-20">
              <div className="text-center">
                <h2 className="text-3xl md:text-4xl font-extrabold text-dark">Keunggulan Rute Travel Banyuwangi Juanda</h2>
              </div>
              <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-white p-6 rounded-lg shadow-lg flex items-start space-x-4">
                  <Clock className="w-12 h-12 text-secondary flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold text-dark">Tepat Waktu</h3>
                    <p className="text-gray-600 mt-1">Kami memprioritaskan jadwal Anda agar tidak ketinggalan pesawat.</p>
                  </div>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-lg flex items-start space-x-4">
                  <Home className="w-12 h-12 text-secondary flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold text-dark">Door to Airport</h3>
                    <p className="text-gray-600 mt-1">Kami jemput di rumah Anda dan antar langsung ke Terminal T1 atau T2.</p>
                  </div>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-lg flex items-start space-x-4">
                  <Zap className="w-12 h-12 text-secondary flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold text-dark">Layanan 24 Jam</h3>
                    <p className="text-gray-600 mt-1">Jadwal kami fleksibel menyesuaikan jam kedatangan atau keberangkatan pesawat Anda.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Area Layanan Section */}
            <div className="mb-20 bg-light p-6 md:p-12 rounded-lg shadow-lg">
              <div className="text-center mb-8">
                <h2 className="text-2xl md:text-4xl font-extrabold text-dark">
                  Area Layanan Travel Banyuwangi Bandara Juanda
                </h2>
                <p className="mt-3 text-base md:text-lg text-gray-600 max-w-5xl mx-auto px-2">
                  Layanan door-to-airport kami mencakup penjemputan di seluruh area Banyuwangi dan pengantaran langsung ke Bandara Juanda (T1 & T2)
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
                
                {/* Airport Areas */}
                <span className="bg-white px-3 py-1.5 md:px-4 md:py-2 rounded-lg text-xs md:text-sm font-medium text-gray-700 shadow-sm hover:shadow-md transition-shadow">
                  Terminal 1 Bandara Juanda
                </span>
                <span className="bg-white px-3 py-1.5 md:px-4 md:py-2 rounded-lg text-xs md:text-sm font-medium text-gray-700 shadow-sm hover:shadow-md transition-shadow">
                  Terminal 2 Bandara Juanda
                </span>
              </div>
            </div>

            {/* Testimonial Section */}
            <div className="mb-20 bg-white">
              <div className="text-center mb-12">
                <h2 className="text-2xl md:text-4xl font-extrabold text-dark">
                  Apa Kata Pelanggan Travel Banyuwangi Juanda
                </h2>
                <p className="mt-3 text-base md:text-lg text-gray-600 max-w-5xl mx-auto px-2">
                  Testimoni pelanggan yang sudah menggunakan layanan{" "}
                  <strong>travel Banyuwangi ke Bandara Juanda</strong> dan{" "}
                  <strong>travel Juanda ke Banyuwangi</strong> dengan sistem door to airport kami.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                {/* Testimonial 1 */}
                <div className="bg-light p-6 rounded-lg shadow-lg">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-xl">
                      M
                    </div>
                    <div className="ml-4">
                      <h4 className="font-bold text-dark">Mega Putri</h4>
                      <p className="text-sm text-gray-600">Pegawai Swasta, Banyuwangi</p>
                    </div>
                  </div>
                  <div className="flex mb-3">
                    <span className="text-accent text-xl">★★★★★</span>
                  </div>
                  <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                    "Saya pakai travel ini untuk ke Bandara Juanda mengejar penerbangan pagi. Dijemput dari rumah jam 12 malam, sampai bandara tepat waktu. Driver sangat professional dan aman!"
                  </p>
                  <p className="text-xs text-gray-500 mt-4">Januari 2025</p>
                </div>

                {/* Testimonial 2 */}
                <div className="bg-light p-6 rounded-lg shadow-lg">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-secondary text-white rounded-full flex items-center justify-center font-bold text-xl">
                      H
                    </div>
                    <div className="ml-4">
                      <h4 className="font-bold text-dark">Hendra Wijaya</h4>
                      <p className="text-sm text-gray-600">Pengusaha, Banyuwangi</p>
                    </div>
                  </div>
                  <div className="flex mb-3">
                    <span className="text-accent text-xl">★★★★★</span>
                  </div>
                  <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                    "Rutin pakai Juragan Travel untuk ke Bandara Juanda. Pelayanan tepat waktu dan driver selalu menghubungi untuk konfirmasi jadwal. Sangat recommended!"
                  </p>
                  <p className="text-xs text-gray-500 mt-4">Desember 2024</p>
                </div>

                {/* Testimonial 3 */}
                <div className="bg-light p-6 rounded-lg shadow-lg">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-xl">
                      S
                    </div>
                    <div className="ml-4">
                      <h4 className="font-bold text-dark">Sari Indah</h4>
                      <p className="text-sm text-gray-600">Mahasiswa, Banyuwangi</p>
                    </div>
                  </div>
                  <div className="flex mb-3">
                    <span className="text-accent text-xl">★★★★★</span>
                  </div>
                  <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                    "Pertama kali pakai travel ke Juanda dan sangat puas! Mobilnya nyaman, AC dingin, dan driver sangat ramah membantu dengan bagasi. Pasti pakai lagi!"
                  </p>
                  <p className="text-xs text-gray-500 mt-4">Januari 2025</p>
                </div>
              </div>

              <div className="text-center mt-10">
                <p className="text-sm md:text-base text-gray-600 mb-6">Ingin jadi pelanggan berikutnya yang puas dengan travel Banyuwangi Bandara Juanda kami?</p>
                <WhatsAppLink
                  message="Halo Admin, saya mau pesan travel Banyuwangi-Juanda."
                  title="Hubungi Admin untuk Pesan Travel Banyuwangi Bandara Juanda"
                  className="inline-block bg-accent text-white px-6 py-2.5 md:px-8 md:py-3 rounded-lg text-sm md:text-base font-semibold shadow-lg hover:bg-opacity-90 transition-all"
                >
                  Pesan Travel Banyuwangi Bandara Juanda via WhatsApp
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
                  Selain rute Banyuwangi - Bandara Juanda, kami juga melayani berbagai rute populer lainnya
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
              <h2 className="text-3xl md:text-4xl font-extrabold text-dark text-center mb-10">FAQ – Travel Banyuwangi Juanda</h2>
              <div className="space-y-6">
                
                <details className="bg-light p-6 rounded-lg shadow-md group" open>
                  <summary className="flex justify-between items-center font-semibold text-lg text-primary cursor-pointer">
                    Berapa jam perjalanan travel Banyuwangi ke Juanda?
                    <ChevronDown className="w-5 h-5 transition-transform duration-300 group-open:rotate-180" />
                  </summary>
                  <p className="mt-4 text-gray-700 leading-relaxed">
                    Estimasi waktu tempuh normal adalah sekitar 6-7 jam via tol. Untuk mengejar penerbangan, kami sangat menyarankan Anda mengambil jadwal keberangkatan minimal 9-10 jam sebelum jam terbang.
                  </p>
                </details>

                <details className="bg-light p-6 rounded-lg shadow-md group">
                  <summary className="flex justify-between items-center font-semibold text-lg text-primary cursor-pointer">
                    Apakah bisa jemput/antar di Terminal 1 dan Terminal 2 Juanda?
                    <ChevronDown className="w-5 h-5 transition-transform duration-300 group-open:rotate-180" />
                  </summary>
                  <p className="mt-4 text-gray-700 leading-relaxed">
                    Ya, tentu saja. Kami melayani antar jemput di Terminal 1 (T1) dan Terminal 2 (T2) Bandara Internasional Juanda. Mohon informasikan terminal Anda saat memesan.
                  </p>
                </details>

                <details className="bg-light p-6 rounded-lg shadow-md group">
                  <summary className="flex justify-between items-center font-semibold text-lg text-primary cursor-pointer">
                    Bagaimana jika pesawat saya delay (untuk penjemputan di Juanda)?
                    <ChevronDown className="w-5 h-5 transition-transform duration-300 group-open:rotate-180" />
                  </summary>
                  <p className="mt-4 text-gray-700 leading-relaxed">
                    Untuk penjemputan di Juanda, harap selalu informasikan nomor penerbangan Anda. Driver kami akan memantau jadwal landing. Jika terjadi delay, harap segera konfirmasi ke admin agar kami bisa mengatur ulang jadwal penjemputan Anda.
                  </p>
                </details>

                <details className="bg-light p-6 rounded-lg shadow-md group">
                  <summary className="flex justify-between items-center font-semibold text-lg text-primary cursor-pointer">
                    Berapa harga carter/private travel Banyuwangi ke Juanda?
                    <ChevronDown className="w-5 h-5 transition-transform duration-300 group-open:rotate-180" />
                  </summary>
                  <p className="mt-4 text-gray-700 leading-relaxed">
                    Harga carter (1 mobil Avanza/Xenia) untuk rute Banyuwangi - Juanda adalah mulai dari <strong>Rp 750.000,-</strong> (All-in: mobil, driver, bbm, tol, parkir). Harga bisa berbeda jika menggunakan unit Innova atau HiAce.
                  </p>
                </details>

              </div>
            </div>

          </div>
        </section>

        {/* Form Pemesanan Section */}
        <section id="form-pemesanan" className="py-20 bg-white">
        <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-extrabold text-dark">
                Pesan Travel Banyuwangi – Bandara Juanda
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                Isi formulir di bawah ini untuk pesan tiket{" "}
                <strong>travel Banyuwangi Juanda</strong> dengan mudah dan cepat. Tim kami akan
                menghubungi Anda untuk konfirmasi jadwal penjemputan dan penerbangan.
              </p>
            </div>

            <BookingForm routeName="Banyuwangi → Juanda" />
        </div>
        </section>

        {/* CTA Section */}
        <section id="kontak" className="py-20 bg-primary text-white">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-extrabold">
              Pesan Travel Banyuwangi Juanda Sekarang
            </h2>
            <p className="mt-4 text-lg text-gray-200 max-w-2xl mx-auto">
              Jangan sampai ketinggalan pesawat. Amankan kursi{" "}
              <strong>travel Banyuwangi ke Bandara Juanda</strong> atau{" "}
              <strong>travel Bandara Juanda ke Banyuwangi</strong> sekarang. Hubungi admin kami
              via WhatsApp untuk booking cepat dan pengaturan jadwal yang tepat waktu.
            </p>
            <WhatsAppLink
              message="Halo Admin, saya mau pesan travel Banyuwangi-Juanda."
              title="Chat WhatsApp untuk Booking Travel Banyuwangi Bandara Juanda"
              className="mt-10 inline-block bg-accent text-white px-10 py-3 rounded-lg font-bold text-lg shadow-lg hover:bg-opacity-90 transition-all transform hover:-translate-y-1"
            >
              Pesan Travel Banyuwangi Juanda via WA
            </WhatsAppLink>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}