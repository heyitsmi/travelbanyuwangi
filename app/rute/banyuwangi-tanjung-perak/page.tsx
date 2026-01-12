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
  title: "Travel Banyuwangi Tanjung Perak – Door to Port Surabaya | Juragan Travel",
  description:
    "Layanan travel Banyuwangi Tanjung Perak dan travel Tanjung Perak Banyuwangi PP dengan sistem door to port. Berangkat setiap hari via tol, armada nyaman, tepat waktu menyesuaikan jadwal kapal di Pelabuhan Tanjung Perak Surabaya.",
  keywords:
    "travel banyuwangi tanjung perak, travel banyuwangi ke pelabuhan tanjung perak, travel tanjung perak banyuwangi, travel pelabuhan tanjung perak banyuwangi, harga travel banyuwangi tanjung perak, jadwal travel banyuwangi tanjung perak, travel banyuwangi surabaya pelabuhan",
  openGraph: {
    title: "Travel Banyuwangi Tanjung Perak – Door to Port Surabaya | Juragan Travel",
    description:
      "Jadwal & harga travel Banyuwangi Tanjung Perak PP terbaru. Layanan door to port dari Banyuwangi ke Pelabuhan Tanjung Perak Surabaya, aman dan tepat waktu untuk jadwal kapal Anda.",
    type: "website",
    url: "https://juragantravel.com/rute/banyuwangi-tanjung-perak",
    images: [
      {
        url: "https://juragantravel.com/img/hero.webp",
        width: 1200,
        height: 630,
        alt: "Travel Banyuwangi Tanjung Perak door to port",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Travel Banyuwangi Tanjung Perak – Door to Port Surabaya",
    description:
      "Travel Banyuwangi ke Pelabuhan Tanjung Perak dan Tanjung Perak ke Banyuwangi dengan layanan door to port via tol, armada nyaman dan driver berpengalaman.",
    images: ["https://juragantravel.com/img/hero.webp"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://juragantravel.com/rute/banyuwangi-tanjung-perak",
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
    name: "Pelabuhan Tanjung Perak (Terminal Penumpang)",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Surabaya",
      addressRegion: "Jawa Timur",
      addressCountry: "ID",
    },
  },
  name: "Travel Banyuwangi Tanjung Perak (Pelabuhan) PP Door to Port",
  description:
    "Layanan travel Banyuwangi Tanjung Perak dan travel Tanjung Perak Banyuwangi PP dengan sistem door to port via tol. Antar jemput langsung dari alamat di Banyuwangi ke Terminal Penumpang Pelabuhan Tanjung Perak Surabaya.",
  offers: {
    "@type": "Offer",
    price: "200000",
    priceCurrency: "IDR",
    name: "Harga Tiket Travel Banyuwangi Tanjung Perak",
    description:
      "Harga travel Banyuwangi ke Pelabuhan Tanjung Perak dan sebaliknya mulai Rp 200.000 per orang. Harga dapat berbeda tergantung titik jemput dan tujuan, hubungi admin untuk detail terbaru.",
    url: "https://juragantravel.com/rute/banyuwangi-tanjung-perak",
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
      name: "Banyuwangi - Pelabuhan Tanjung Perak",
      item: "https://juragantravel.com/rute/banyuwangi-tanjung-perak"
    }
  ]
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Berapa jam perjalanan travel Banyuwangi ke Pelabuhan Tanjung Perak?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Estimasi waktu tempuh normal adalah sekitar 6-7 jam via tol. Untuk mengejar jadwal kapal, kami sangat menyarankan Anda mengambil jadwal keberangkatan minimal 9-10 jam sebelum jam berangkat."
      }
    },
    {
      "@type": "Question",
      name: "Apakah harga travel sudah termasuk tol?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ya, harga yang tertera di tabel (Rp 200.000) sudah termasuk biaya tol via Trans-Jawa."
      }
    },
    {
      "@type": "Question",
      name: "Bagaimana jika kapal saya delay (penjemputan di Tanjung Perak)?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Untuk penjemputan di Pelabuhan Tanjung Perak, harap selalu informasikan nama kapal Anda. Driver kami akan memantau jadwal sandar. Jika terjadi delay, harap segera konfirmasi ke admin agar kami bisa mengatur ulang jadwal penjemputan Anda."
      }
    },
    {
      "@type": "Question",
      name: "Berapa harga carter/private travel Banyuwangi ke Tanjung Perak?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Harga carter (1 mobil) untuk rute Banyuwangi - Tanjung Perak sekali jalan adalah Rp 1.200.000,- sedangkan untuk PP (pulang-pergi) adalah Rp 2.100.000,- (All-in: mobil, driver, BBM, tol, parkir)."
      }
    }
  ]
};

export default function BanyuwangiTanjungPerakPage() {
  const whatsappNumber = "6282143258744";
  
  const whatsappLinks = {
    toTanjungPerak: `https://wa.me/${whatsappNumber}?text=Halo%2C%20saya%20mau%20pesan%20travel%20Banyuwangi%20ke%20Pelabuhan%20Tanjung%20Perak`,
    fromTanjungPerak: `https://wa.me/${whatsappNumber}?text=Halo%2C%20saya%20mau%20pesan%20travel%20dari%20Pelabuhan%20Tanjung%20Perak%20ke%20Banyuwangi`,
    carter: `https://wa.me/${whatsappNumber}?text=Halo%2C%20saya%20mau%20tanya%20harga%20carter%20Banyuwangi-Tanjung%20Perak`,
    general: `https://wa.me/${whatsappNumber}?text=Halo%20Admin,%20saya%20mau%20pesan%20travel%20Banyuwangi-Tanjung%20Perak.`
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
              <span className="text-dark font-medium">Banyuwangi - Pelabuhan Tanjung Perak</span>
            </nav>
            <h1 className="text-4xl md:text-5xl font-extrabold text-dark">Travel Banyuwangi - Pelabuhan Tanjung Perak (PP)</h1>
            <p className="mt-4 text-lg text-gray-600 max-w-4xl mx-auto">
              Juragan Travel melayani <strong>travel Banyuwangi Tanjung Perak</strong> dan{" "}
              <strong>travel Tanjung Perak Banyuwangi</strong> setiap hari via tol.
              Layanan door-to-port langsung ke Terminal Penumpang Pelabuhan Tanjung Perak
              Surabaya, aman, nyaman, dan tepat waktu mengikuti jadwal kapal Anda.
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
                  alt="Armada travel Banyuwangi ke Pelabuhan Tanjung Perak" 
                  width={600}
                  height={450}
                  className="rounded-lg shadow-xl w-full h-full object-cover"
                />
              </div>
              <div className="md:w-1/2">
                <span className="text-primary font-semibold uppercase">RUTE KHUSUS PELABUHAN</span>
                <h2 className="mt-2 text-3xl md:text-4xl font-extrabold text-dark">
                  Travel Banyuwangi ke Pelabuhan Tanjung Perak (Surabaya)
                </h2>
                <p className="mt-4 text-lg text-gray-700 leading-relaxed">
                  Kami menyediakan layanan <strong>travel Banyuwangi ke Pelabuhan Tanjung Perak</strong> (dan sebaliknya) untuk memudahkan perjalanan Anda via kapal laut dari Surabaya. Layanan ini dirancang khusus untuk memastikan Anda tiba tepat waktu untuk mengejar jadwal kapal.
                </p>
                <p className="mt-4 text-lg text-gray-700 leading-relaxed">
                  Kami melayani penjemputan di alamat Anda (door-to-door) di area Banyuwangi, mengantar Anda via tol, dan langsung menuju terminal penumpang Pelabuhan Tanjung Perak. Begitu pula sebaliknya.
                </p>
              </div>
            </div>

            {/* Jadwal & Harga */}
            <div className="bg-light p-8 md:p-12 rounded-lg shadow-lg mb-20">
              <div className="text-center">
                <h2 className="text-3xl md:text-4xl font-extrabold text-dark">
                  Jadwal & Harga Travel Banyuwangi Tanjung Perak
                </h2>
                <p className="mt-4 text-lg text-gray-600">
                  Jadwal <strong>travel Banyuwangi Tanjung Perak</strong> dan{" "}
                  <strong>travel Tanjung Perak Banyuwangi</strong> menyesuaikan jam berangkat dan
                  sandar kapal. Konsultasikan jadwal dengan admin agar Anda tiba lebih awal dan tidak
                  ketinggalan kapal.
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
                      <td className="p-4 font-medium text-gray-700">Banyuwangi → Pelabuhan Tanjung Perak</td>
                      <td className="p-4 text-gray-700">Hubungi Admin (Menyesuaikan Jadwal Kapal)</td>
                      <td className="p-4 font-bold text-primary text-lg">Rp 200.000</td>
                      <td className="p-4">
                        <WhatsAppLink
                          message="Halo, saya mau pesan travel Banyuwangi ke Pelabuhan Tanjung Perak"
                          title="Pesan Travel Banyuwangi Tanjung Perak via WhatsApp"
                          className="bg-secondary text-white px-4 py-2 rounded-lg font-medium hover:bg-opacity-90"
                        >
                          Pesan
                        </WhatsAppLink>
                      </td>
                    </tr>
                    <tr className="hover:bg-white transition-colors">
                      <td className="p-4 font-medium text-gray-700">Pelabuhan Tanjung Perak → Banyuwangi</td>
                      <td className="p-4 text-gray-700">Hubungi Admin (Menyesuaikan Jadwal Sandar)</td>
                      <td className="p-4 font-bold text-primary text-lg">Rp 200.000</td>
                      <td className="p-4">
                        <WhatsAppLink
                          message="Halo, saya mau pesan travel dari Pelabuhan Tanjung Perak ke Banyuwangi"
                          title="Pesan Travel Tanjung Perak Banyuwangi via WhatsApp"
                          className="bg-secondary text-white px-4 py-2 rounded-lg font-medium hover:bg-opacity-90"
                        >
                          Pesan
                        </WhatsAppLink>
                      </td>
                    </tr>
                    <tr className="hover:bg-white transition-colors">
                      <td className="p-4 font-medium text-gray-700">Carter Sekali Jalan Banyuwangi ↔ Tanjung Perak</td>
                      <td className="p-4 text-gray-700">Fleksibel 24 Jam (Sesuai Pesanan)</td>
                      <td className="p-4 font-bold text-primary text-lg">Rp 1.200.000</td>
                      <td className="p-4">
                        <WhatsAppLink
                          message="Halo, saya mau tanya harga carter Banyuwangi-Tanjung Perak"
                          title="Pesan Carter Sekali Jalan Banyuwangi Tanjung Perak via WhatsApp"
                          className="bg-secondary text-white px-4 py-2 rounded-lg font-medium hover:bg-opacity-90"
                        >
                          Pesan
                        </WhatsAppLink>
                      </td>
                    </tr>
                    <tr className="hover:bg-white transition-colors">
                      <td className="p-4 font-medium text-gray-700">Carter PP Banyuwangi ↔ Tanjung Perak</td>
                      <td className="p-4 text-gray-700">Fleksibel 24 Jam (Sesuai Pesanan)</td>
                      <td className="p-4 font-bold text-primary text-lg">Rp 2.100.000</td>
                      <td className="p-4">
                        <WhatsAppLink
                          message="Halo, saya mau tanya harga carter Banyuwangi-Tanjung Perak"
                          title="Pesan Carter PP Banyuwangi Tanjung Perak via WhatsApp"
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
                *Harga <strong>travel Banyuwangi ke Pelabuhan Tanjung Perak</strong> dan{" "}
                <strong>travel Pelabuhan Tanjung Perak ke Banyuwangi</strong> mulai Rp 200.000
                per orang. Harga dapat berubah sewaktu-waktu tergantung titik penjemputan, tujuan,
                dan jadwal kapal. Harga sudah termasuk tol, silakan hubungi admin untuk detail dan
                promo terbaru.
              </p>
            </div>

            {/* Keunggulan Rute */}
            <div className="mb-20">
              <div className="text-center">
                <h2 className="text-3xl md:text-4xl font-extrabold text-dark">Keunggulan Rute Travel Banyuwangi Tanjung Perak</h2>
              </div>
              <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-white p-6 rounded-lg shadow-lg flex items-start space-x-4">
                  <Clock className="w-12 h-12 text-secondary shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold text-dark">Tepat Waktu</h3>
                    <p className="text-gray-600 mt-1">Kami memprioritaskan jadwal Anda agar tidak ketinggalan kapal.</p>
                  </div>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-lg flex items-start space-x-4">
                  <Home className="w-12 h-12 text-secondary shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold text-dark">Door to Port</h3>
                    <p className="text-gray-600 mt-1">Kami jemput di rumah Anda dan antar langsung ke Terminal Penumpang.</p>
                  </div>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-lg flex items-start space-x-4">
                  <Zap className="w-12 h-12 text-secondary shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold text-dark">Layanan 24 Jam</h3>
                    <p className="text-gray-600 mt-1">Jadwal kami fleksibel menyesuaikan jam keberangkatan atau kedatangan kapal Anda.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Area Layanan Section */}
            <div className="mb-20 bg-light p-6 md:p-12 rounded-lg shadow-lg">
              <div className="text-center mb-8">
                <h2 className="text-2xl md:text-4xl font-extrabold text-dark">
                  Area Layanan Travel Banyuwangi ke Pelabuhan Tanjung Perak
                </h2>
                <p className="mt-3 text-base md:text-lg text-gray-600 max-w-5xl mx-auto px-2">
                  Layanan door-to-port kami mencakup penjemputan di seluruh area Banyuwangi dan pengantaran langsung ke Terminal Penumpang Pelabuhan Tanjung Perak
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
                
                {/* Pelabuhan Area */}
                <span className="bg-white px-3 py-1.5 md:px-4 md:py-2 rounded-lg text-xs md:text-sm font-medium text-gray-700 shadow-sm hover:shadow-md transition-shadow">
                  Terminal Penumpang Tanjung Perak
                </span>
              </div>
            </div>

            {/* Testimonial Section */}
            <div className="mb-20 bg-white">
              <div className="text-center mb-12">
                <h2 className="text-2xl md:text-4xl font-extrabold text-dark">
                  Apa Kata Pelanggan Travel Banyuwangi Tanjung Perak
                </h2>
                <p className="mt-3 text-base md:text-lg text-gray-600 max-w-5xl mx-auto px-2">
                  Testimoni pelanggan yang sudah menggunakan layanan{" "}
                  <strong>travel Banyuwangi Tanjung Perak</strong> dan{" "}
                  <strong>travel Tanjung Perak Banyuwangi</strong> dengan sistem door to port yang
                  praktis dan nyaman.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                {/* Testimonial 1 */}
                <div className="bg-light p-6 rounded-lg shadow-lg">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl">
                      A
                    </div>
                    <div className="ml-4">
                      <h4 className="font-bold text-dark">Ahmad Rizal</h4>
                      <p className="text-sm text-gray-500">Penumpang Kapal Pelni</p>
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
                    "Saya naik kapal Pelni dari Tanjung Perak, dijemput di rumah Banyuwangi pagi-pagi dan sampai pelabuhan tepat waktu. Driver sangat membantu dengan bagasi yang banyak!"
                  </p>
                  <p className="text-xs text-gray-500 mt-4">Januari 2025</p>
                </div>

                {/* Testimonial 2 */}
                <div className="bg-light p-6 rounded-lg shadow-lg">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl">
                      S
                    </div>
                    <div className="ml-4">
                      <h4 className="font-bold text-dark">Siti Nurhaliza</h4>
                      <p className="text-sm text-gray-500">Pelajar</p>
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
                    "Pertama kali naik kapal dari Tanjung Perak, takut tersesat. Tapi driver travel ini antar sampai ke depan kapal. Pelayanan sangat membantu!"
                  </p>
                  <p className="text-xs text-gray-500 mt-4">Desember 2024</p>
                </div>

                {/* Testimonial 3 */}
                <div className="bg-light p-6 rounded-lg shadow-lg">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl">
                      B
                    </div>
                    <div className="ml-4">
                      <h4 className="font-bold text-dark">Budi Santoso</h4>
                      <p className="text-sm text-gray-500">Wiraswasta</p>
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
                    "Rutin ke Tanjung Perak untuk urusan bisnis. Juragan Travel selalu tepat waktu dan driver hafal jalan menuju pelabuhan. Recommended!"
                  </p>
                  <p className="text-xs text-gray-500 mt-4">Januari 2025</p>
                </div>
              </div>

              <div className="text-center mt-10">
                <p className="text-sm md:text-base text-gray-600 mb-6">Ingin jadi pelanggan berikutnya yang puas dengan travel Banyuwangi Tanjung Perak kami?</p>
                <WhatsAppLink
                  message="Halo Admin, saya mau pesan travel Banyuwangi-Tanjung Perak."
                  title="Hubungi Admin untuk Pesan Travel Banyuwangi Tanjung Perak"
                  className="inline-block bg-accent text-white px-6 py-2.5 md:px-8 md:py-3 rounded-lg text-sm md:text-base font-semibold shadow-lg hover:bg-opacity-90 transition-all"
                >
                  Pesan Travel Banyuwangi Tanjung Perak via WhatsApp
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
                  Selain rute Banyuwangi - Tanjung Perak, kami juga melayani berbagai rute populer lainnya
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
                FAQ – Travel Banyuwangi Tanjung Perak
              </h2>
              <div className="space-y-6">
                
                <details className="bg-light p-6 rounded-lg shadow-md group" open>
                  <summary className="flex justify-between items-center font-semibold text-lg text-primary cursor-pointer">
                    Berapa jam perjalanan travel Banyuwangi ke Pelabuhan Tanjung Perak?
                    <ChevronDown className="w-5 h-5 transition-transform duration-300 group-open:rotate-180" />
                  </summary>
                  <p className="mt-4 text-gray-700 leading-relaxed">
                    Estimasi waktu tempuh normal adalah sekitar 6-7 jam via tol. Untuk mengejar jadwal kapal, kami sangat menyarankan Anda mengambil jadwal keberangkatan minimal 9-10 jam sebelum jam berangkat.
                  </p>
                </details>

                <details className="bg-light p-6 rounded-lg shadow-md group">
                  <summary className="flex justify-between items-center font-semibold text-lg text-primary cursor-pointer">
                    Apakah harga travel sudah termasuk tol?
                    <ChevronDown className="w-5 h-5 transition-transform duration-300 group-open:rotate-180" />
                  </summary>
                  <p className="mt-4 text-gray-700 leading-relaxed">
                    Ya, harga <strong>travel Banyuwangi Tanjung Perak</strong> yang tertera di tabel
                    (Rp 200.000) sudah termasuk biaya tol via Trans-Jawa. Tidak ada biaya tol tambahan
                    di luar harga tiket, kecuali ada permintaan rute khusus di luar jalur utama.
                  </p>
                </details>

                <details className="bg-light p-6 rounded-lg shadow-md group">
                  <summary className="flex justify-between items-center font-semibold text-lg text-primary cursor-pointer">
                    Bagaimana jika kapal saya delay (penjemputan di Tanjung Perak)?
                    <ChevronDown className="w-5 h-5 transition-transform duration-300 group-open:rotate-180" />
                  </summary>
                  <p className="mt-4 text-gray-700 leading-relaxed">
                    Untuk penjemputan di Pelabuhan Tanjung Perak, harap selalu informasikan nama kapal Anda. Driver kami akan memantau jadwal sandar. Jika terjadi delay, harap segera konfirmasi ke admin agar kami bisa mengatur ulang jadwal penjemputan Anda.
                  </p>
                </details>

                <details className="bg-light p-6 rounded-lg shadow-md group">
                  <summary className="flex justify-between items-center font-semibold text-lg text-primary cursor-pointer">
                    Berapa harga carter/private travel Banyuwangi ke Tanjung Perak?
                    <ChevronDown className="w-5 h-5 transition-transform duration-300 group-open:rotate-180" />
                  </summary>
                  <p className="mt-4 text-gray-700 leading-relaxed">
                    Harga carter (1 mobil) untuk rute Banyuwangi - Tanjung Perak sekali jalan adalah Rp 1.200.000,- sedangkan untuk PP (pulang-pergi) adalah Rp 2.100.000,- (All-in: mobil, driver, BBM, tol, parkir).
                  </p>
                </details>

              </div>
            </div>

          </div>
        </section>

        {/* Form Pemesanan Section */}
        <section id="form-pemesanan" className="py-20 bg-white">
          <div className="container mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-extrabold text-dark max-w-5xl mx-auto">
                Pesan Travel Banyuwangi – Pelabuhan Tanjung Perak
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                Isi formulir di bawah ini untuk pesan tiket travel Banyuwangi Tanjung Perak dengan
                mudah dan cepat. Tim kami akan menghubungi Anda untuk konfirmasi jadwal penjemputan
                dan jadwal kapal.
              </p>
            </div>

            <BookingForm routeName="Banyuwangi → Tanjung Perak" />
          </div>
        </section>

        {/* CTA Section */}
        <section id="kontak" className="py-20 bg-primary text-white">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-extrabold max-w-5xl mx-auto">
              Pesan Travel ke Pelabuhan Tanjung Perak Sekarang
            </h2>
            <p className="mt-4 text-lg text-gray-200 max-w-2xl mx-auto">
              Jangan sampai ketinggalan kapal. Amankan kursi{" "}
              <strong>travel Banyuwangi ke Pelabuhan Tanjung Perak</strong> atau{" "}
              <strong>travel Pelabuhan Tanjung Perak ke Banyuwangi</strong> sekarang. Hubungi
              admin via WhatsApp untuk booking cepat dan pengaturan jadwal penjemputan yang
              tepat waktu.
            </p>
            <WhatsAppLink
              message="Halo Admin, saya mau pesan travel Banyuwangi-Tanjung Perak."
              title="Chat WhatsApp untuk Booking Travel Banyuwangi Tanjung Perak"
              className="mt-10 inline-block bg-accent text-white px-10 py-3 rounded-lg font-bold text-lg shadow-lg hover:bg-opacity-90 transition-all transform hover:-translate-y-1"
            >
              Pesan Travel Banyuwangi Tanjung Perak via WA
            </WhatsAppLink>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}