import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Home, Lock, ChevronDown, Map, Plane, Mountain } from 'lucide-react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { StructuredData } from '../../components/SEO';
import BookingForm from '../../components/BookingForm';
import WhatsAppLink from "../../components/WhatsAppLink";

export const metadata: Metadata = {
  title: "Travel Banyuwangi Pasuruan (PP) – Via Tol, Door to Door & Nyaman | Juragan Travel",
  description:
    "Travel Banyuwangi Pasuruan PP via tol dengan layanan door to door, berangkat pagi, siang, dan malam setiap hari. Armada nyaman, driver berpengalaman, booking mudah lewat WhatsApp.",
  keywords:
    "travel banyuwangi pasuruan, travel pasuruan banyuwangi, harga travel banyuwangi pasuruan, jadwal travel banyuwangi pasuruan, travel banyuwangi pasuruan via tol, travel banyuwangi pasuruan malam, travel banyuwangi pasuruan pagi",
  authors: [{ name: "Juragan Travel" }],
  openGraph: {
    title: "Travel Banyuwangi Pasuruan (PP) – Via Tol, Door to Door & Nyaman | Juragan Travel",
    description:
      "Jadwal & harga travel Banyuwangi Pasuruan (PP) via tol dengan layanan door to door. Berangkat setiap hari, armada nyaman, booking cepat via WhatsApp.",
    type: "website",
    url: "https://juragantravel.com/rute/banyuwangi-pasuruan",
    images: [
      {
        url: "https://juragantravel.com/img/hero.webp",
        width: 1200,
        height: 630,
        alt: "Travel Banyuwangi Pasuruan via tol door to door",
      },
    ],
    siteName: "Juragan Travel",
  },
  twitter: {
    card: "summary_large_image",
    title: "Travel Banyuwangi Pasuruan (PP) – Via Tol, Door to Door & Nyaman | Juragan Travel",
    description:
      "Travel Banyuwangi Pasuruan PP via tol dengan layanan door to door, armada nyaman, dan jadwal setiap hari (pagi, siang, malam).",
    images: ["https://juragantravel.com/img/hero.webp"],
  },
  alternates: {
    canonical: "https://juragantravel.com/rute/banyuwangi-pasuruan",
  },
  robots: {
    index: true,
    follow: true,
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
    name: "Area Pasuruan (Door-to-door)",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Pasuruan",
      addressRegion: "Jawa Timur",
      addressCountry: "ID",
    },
  },
  name: "Travel Banyuwangi Pasuruan (PP) via Tol",
  description:
    "Layanan travel Banyuwangi Pasuruan dan travel Pasuruan Banyuwangi door-to-door via tol dengan jadwal pagi, siang, dan malam setiap hari.",
  offers: {
    "@type": "Offer",
    price: "200000",
    priceCurrency: "IDR",
    name: "Harga Tiket Travel Banyuwangi Pasuruan",
    description:
      "Harga travel Banyuwangi Pasuruan dapat berbeda tergantung titik jemput dan tujuan. Hubungi admin untuk harga pasti.",
    url: "https://juragantravel.com/rute/banyuwangi-pasuruan",
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
      name: "Banyuwangi - Pasuruan",
      item: "https://juragantravel.com/rute/banyuwangi-pasuruan"
    }
  ]
};

const faqs = [
  {
    question: "Berapa jam perjalanan travel Banyuwangi ke Pasuruan via tol?",
    answer:
      "Estimasi waktu tempuh normal sekitar 5–6 jam via tol, sudah termasuk 1x istirahat. Waktu bisa berubah tergantung lalu lintas serta titik jemput dan antar.",
    defaultOpen: true,
  },
  {
    question: "Apakah ada jadwal travel Banyuwangi Pasuruan malam hari?",
    answer:
      "Ada. Jadwal travel Banyuwangi Pasuruan malam biasanya sekitar pukul 21.00 WIB dan cocok bagi Anda yang ingin tiba di Pasuruan pagi hari.",
    defaultOpen: false,
  },
  {
    question: "Area penjemputan di Banyuwangi meliputi mana saja?",
    answer:
      "Kami melayani penjemputan di area Kota Banyuwangi, Rogojampi, Srono, Genteng, Jajag, Kalibaru, dan sekitarnya. Untuk area di luar jalur utama, mungkin dikenakan biaya tambahan.",
    defaultOpen: false,
  },
  {
    question: "Area pengantaran di Pasuruan meliputi mana saja?",
    answer:
      "Kami melayani pengantaran ke seluruh area Kota Pasuruan, Bangil, Gempol, Pandaan, Purwosari, dan area lain yang dekat dengan akses tol.",
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


export default function BanyuwangiPasuruanPage() {
  const whatsappNumber = '6282143258744';
  
  const whatsappLinks = {
    toPasuruan: `https://wa.me/${whatsappNumber}?text=Halo%2C%20saya%20mau%20pesan%20travel%20Banyuwangi%20ke%20Pasuruan`,
    fromPasuruan: `https://wa.me/${whatsappNumber}?text=Halo%2C%20saya%20mau%20pesan%20travel%20dari%20Pasuruan%20ke%20Banyuwangi`,
    carter: `https://wa.me/${whatsappNumber}?text=Halo%2C%20saya%20mau%20tanya%20harga%20carter%20Banyuwangi-Pasuruan`,
    general: `https://wa.me/${whatsappNumber}?text=Halo%20Admin,%20saya%20mau%20pesan%20travel%20Banyuwangi-Pasuruan.`
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
              <span className="text-dark font-medium">Banyuwangi - Pasuruan</span>
            </nav>
            <h1 className="text-4xl md:text-5xl font-extrabold text-dark">Travel Banyuwangi - Pasuruan (PP)</h1>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
              Juragan Travel melayani <strong>travel Banyuwangi Pasuruan</strong> dan{" "}
              <strong>travel Pasuruan Banyuwangi</strong> via tol dengan layanan door-to-door.
              Berangkat setiap hari pagi, siang, dan malam, cocok untuk kerja, kuliah, maupun mudik.
            </p>
          </div>
        </section>

        {/* Detail Rute Section */}
        <section id="detail-rute" className="py-20 bg-white">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            
            {/* Deskripsi Rute */}
            <div className="flex flex-col md:flex-row items-center gap-12 mb-20">
              <div className="md:w-1/2">
                <Image 
                  src="/img/hero.webp" 
                  alt="Armada travel Banyuwangi ke Pasuruan" 
                  width={600}
                  height={450}
                  className="rounded-lg shadow-xl w-full h-full object-cover"
                />
              </div>
              <div className="md:w-1/2">
                <span className="text-primary font-semibold uppercase">RUTE VIA TOL</span>
                <h2 className="mt-2 text-3xl md:text-4xl font-extrabold text-dark">
                  Travel Banyuwangi ke Pasuruan (PP)
                </h2>
                <p className="mt-4 text-lg text-gray-700 leading-relaxed">
                  Kami menyediakan layanan <strong>travel Banyuwangi ke Pasuruan</strong> (dan sebaliknya) setiap hari. Rute ini menjadi bagian dari perjalanan utama kami via Tol Trans-Jawa, memastikan perjalanan Anda cepat dan bebas hambatan.
                </p>
                <p className="mt-4 text-lg text-gray-700 leading-relaxed">
                  Layanan door-to-door kami mencakup penjemputan di alamat Banyuwangi dan pengantaran langsung ke tujuan Anda di area Kota Pasuruan, Bangil, Gempol, dan sekitarnya.
                </p>
              </div>
            </div>

            {/* Jadwal & Harga */}
            <div className="bg-light p-8 md:p-12 rounded-lg shadow-lg mb-20">
              <div className="text-center">
                <h2 className="text-3xl md:text-4xl font-extrabold text-dark">
                  Jadwal & Harga Travel Banyuwangi Pasuruan
                </h2>
                <p className="mt-4 text-lg text-gray-600">
                  Jadwal <strong>travel Banyuwangi Pasuruan</strong> dan{" "}
                  <strong>travel Pasuruan Banyuwangi</strong> tersedia setiap hari dengan harga terjangkau.
                  Pesan kursi travel Anda sekarang sebelum kehabisan.
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
                      <td className="p-4 font-medium text-gray-700">Banyuwangi → Pasuruan</td>
                      <td className="p-4 text-gray-700">Pagi (09:00), Siang (15:00), Malam (21:00)</td>
                      <td className="p-4 font-bold text-primary text-lg">Rp 200.000</td>
                      <td className="p-4">
                        <WhatsAppLink
                          message="Halo, saya mau pesan travel Banyuwangi ke Pasuruan"
                          title="Pesan Travel Banyuwangi Pasuruan via WhatsApp"
                          className="bg-secondary text-white px-4 py-2 rounded-lg font-medium hover:bg-opacity-90"
                        >
                          Pesan
                        </WhatsAppLink>
                      </td>
                    </tr>
                    <tr className="hover:bg-white transition-colors">
                      <td className="p-4 font-medium text-gray-700">Pasuruan → Banyuwangi</td>
                      <td className="p-4 text-gray-700">Pagi (09:00), Siang (15:00), Malam (21:00)</td>
                      <td className="p-4 font-bold text-primary text-lg">Rp 200.000</td>
                      <td className="p-4">
                        <WhatsAppLink
                          message="Halo, saya mau pesan travel dari Pasuruan ke Banyuwangi"
                          title="Pesan Travel Pasuruan Banyuwangi via WhatsApp"
                          className="bg-secondary text-white px-4 py-2 rounded-lg font-medium hover:bg-opacity-90"
                        >
                          Pesan
                        </WhatsAppLink>
                      </td>
                    </tr>
                    {/* <tr className="hover:bg-white transition-colors">
                      <td className="p-4 font-medium text-gray-700">Carter Drop (Private) Banyuwangi - Pasuruan</td>
                      <td className="p-4 text-gray-700">Fleksibel 24 Jam (Sesuai Pesanan)</td>
                      <td className="p-4 font-bold text-primary text-lg">Rp 650.000</td>
                      <td className="p-4">
                        <a href={whatsappLinks.carter} target="_blank" rel="noopener noreferrer" className="bg-secondary text-white px-4 py-2 rounded-lg font-medium hover:bg-opacity-90">Pesan</a>
                      </td>
                    </tr> */}
                  </tbody>
                </table>
              </div>
              <p className="text-center mt-6 text-sm text-gray-600 max-w-4xl mx-auto">
                *Harga <strong>travel Banyuwangi Pasuruan</strong> mulai Rp 200.000 per orang per sekali jalan.
                Harga dapat berubah sewaktu-waktu tergantung titik jemput dan tujuan. Hubungi admin via WhatsApp
                untuk info harga terbaru atau konfirmasi jadwal.
              </p>
            </div>

            {/* Keunggulan Rute */}
            <div className="mb-20">
              <div className="text-center">
                <h2 className="text-3xl md:text-4xl font-extrabold text-dark">Keunggulan Rute Travel Banyuwangi Pasuruan</h2>
              </div>
              <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-white p-6 rounded-lg shadow-lg flex items-start space-x-4">
                  <ArrowRight className="w-12 h-12 text-secondary shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold text-dark">Cepat via Tol</h3>
                    <p className="text-gray-600 mt-1">Perjalanan lebih cepat dan hemat waktu lewat Tol Trans-Jawa.</p>
                  </div>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-lg flex items-start space-x-4">
                  <Home className="w-12 h-12 text-secondary shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold text-dark">Door to Door</h3>
                    <p className="text-gray-600 mt-1">Kami jemput di rumah Anda dan antar sampai alamat tujuan di area Pasuruan.</p>
                  </div>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-lg flex items-start space-x-4">
                  <Lock className="w-12 h-12 text-secondary shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold text-dark">Aman & Nyaman</h3>
                    <p className="text-gray-600 mt-1">Armada bersih, ber-AC, dan dikemudikan oleh driver profesional.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Area Layanan Section */}
            <div className="mb-20 bg-light p-6 md:p-12 rounded-lg shadow-lg">
              <div className="text-center mb-8">
                <h2 className="text-2xl md:text-4xl font-extrabold text-dark">
                  Area Layanan Travel Banyuwangi Pasuruan
                </h2>
                <p className="mt-3 text-base md:text-lg text-gray-600 max-w-5xl mx-auto px-2">
                  Layanan door-to-door kami mencakup penjemputan dan pengantaran di seluruh area Banyuwangi dan Pasuruan
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
                
                {/* Pasuruan Areas */}
                <span className="bg-white px-3 py-1.5 md:px-4 md:py-2 rounded-lg text-xs md:text-sm font-medium text-gray-700 shadow-sm hover:shadow-md transition-shadow">
                  Pasuruan Kota
                </span>
                <span className="bg-white px-3 py-1.5 md:px-4 md:py-2 rounded-lg text-xs md:text-sm font-medium text-gray-700 shadow-sm hover:shadow-md transition-shadow">
                  Bangil
                </span>
                <span className="bg-white px-3 py-1.5 md:px-4 md:py-2 rounded-lg text-xs md:text-sm font-medium text-gray-700 shadow-sm hover:shadow-md transition-shadow">
                  Gempol
                </span>
                <span className="bg-white px-3 py-1.5 md:px-4 md:py-2 rounded-lg text-xs md:text-sm font-medium text-gray-700 shadow-sm hover:shadow-md transition-shadow">
                  Pandaan
                </span>
                <span className="bg-white px-3 py-1.5 md:px-4 md:py-2 rounded-lg text-xs md:text-sm font-medium text-gray-700 shadow-sm hover:shadow-md transition-shadow">
                  Pasrepan
                </span>
                <span className="bg-white px-3 py-1.5 md:px-4 md:py-2 rounded-lg text-xs md:text-sm font-medium text-gray-700 shadow-sm hover:shadow-md transition-shadow">
                  Purwosari
                </span>
              </div>
            </div>

            {/* Testimonial Section */}
            <div className="mb-20 bg-white">
              <div className="text-center mb-12">
                <h2 className="text-2xl md:text-4xl font-extrabold text-dark">
                  Apa Kata Pelanggan Travel Banyuwangi Pasuruan
                </h2>
                <p className="mt-3 text-base md:text-lg text-gray-600 max-w-5xl mx-auto px-2">
                  Testimoni pelanggan rute travel Banyuwangi Pasuruan yang sudah menggunakan layanan door to door kami.
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
                      <h4 className="font-bold text-dark">Arif Setiawan</h4>
                      <p className="text-sm text-gray-600">Mahasiswa, Pasuruan</p>
                    </div>
                  </div>
                  <div className="flex mb-3">
                    <span className="text-accent text-xl">★★★★★</span>
                  </div>
                  <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                    "Saya kuliah di Banyuwangi, rutin pulang ke Pasuruan pakai travel ini. Pelayanan door-to-door sangat membantu, tidak perlu ke terminal. Driver ramah dan harga terjangkau!"
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
                      <h4 className="font-bold text-dark">Dian Pratiwi</h4>
                      <p className="text-sm text-gray-600">Pengusaha, Banyuwangi</p>
                    </div>
                  </div>
                  <div className="flex mb-3">
                    <span className="text-accent text-xl">★★★★★</span>
                  </div>
                  <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                    "Sering ke Pasuruan untuk urusan bisnis. Juragan Travel solusi terbaik! Jadwal pasti, via tol jadi cepat, dan bisa dijemput dari rumah. Sangat recommended!"
                  </p>
                  <p className="text-xs text-gray-500 mt-4">Desember 2024</p>
                </div>

                {/* Testimonial 3 */}
                <div className="bg-light p-6 rounded-lg shadow-lg">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-xl">
                      R
                    </div>
                    <div className="ml-4">
                      <h4 className="font-bold text-dark">Rizki Gunawan</h4>
                      <p className="text-sm text-gray-600">Karyawan, Pasuruan</p>
                    </div>
                  </div>
                  <div className="flex mb-3">
                    <span className="text-accent text-xl">★★★★★</span>
                  </div>
                  <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                    "Travel paling nyaman untuk rute Pasuruan-Banyuwangi! Mobilnya bersih, AC dingin, dan driver sangat membantu dengan bagasi. Pasti pakai lagi!"
                  </p>
                  <p className="text-xs text-gray-500 mt-4">Januari 2025</p>
                </div>
              </div>

              <div className="text-center mt-10">
                <p className="text-sm md:text-base text-gray-600 mb-6">Ingin jadi pelanggan berikutnya yang puas dengan travel Banyuwangi Pasuruan kami?</p>
                <WhatsAppLink
                  message="Halo Admin, saya mau pesan travel Banyuwangi-Pasuruan."
                  title="Hubungi Admin untuk Pesan Travel Banyuwangi Pasuruan"
                  className="inline-block bg-accent text-white px-6 py-2.5 md:px-8 md:py-3 rounded-lg text-sm md:text-base font-semibold shadow-lg hover:bg-opacity-90 transition-all"
                >
                  Pesan Travel Banyuwangi Pasuruan via WhatsApp
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
                  Selain rute Banyuwangi - Pasuruan, kami juga melayani berbagai rute populer lainnya
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
              <h2 className="text-3xl md:text-4xl font-extrabold text-dark text-center mb-10">
                FAQ – Travel Banyuwangi Pasuruan
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
              <h2 className="text-xl md:text-4xl font-extrabold text-dark">
                Pesan Travel Banyuwangi - Pasuruan
              </h2>
              <p className="mt-4 text-sm md:text-lg text-gray-600">
                Isi formulir di bawah ini untuk pesan tiket travel Banyuwangi Pasuruan dengan mudah dan cepat.
              </p>
            </div>

            <BookingForm routeName="Banyuwangi → Pasuruan" />
          </div>
        </section>

        {/* CTA Section */}
        <section id="kontak" className="py-20 bg-primary text-white">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-extrabold">
              Pesan Travel Banyuwangi Pasuruan Sekarang
            </h2>
            <p className="mt-4 text-lg text-gray-200 max-w-2xl mx-auto">
              Perjalanan nyaman dan cepat via tol untuk rute{" "}
              <strong>travel Banyuwangi Pasuruan</strong> maupun{" "}
              <strong>travel Pasuruan Banyuwangi</strong>.
              Amankan kursi Anda sekarang dan hubungi admin kami via WhatsApp untuk booking cepat.
            </p>
            <WhatsAppLink
              message="Halo Admin, saya mau pesan travel Banyuwangi-Pasuruan."
              title="Chat WhatsApp untuk Booking Travel Banyuwangi Pasuruan"
              className="mt-10 inline-block bg-accent text-white px-10 py-3 rounded-lg font-bold text-lg shadow-lg hover:bg-opacity-90 transition-all transform hover:-translate-y-1"
            >
              Pesan Rute Pasuruan via WA
            </WhatsAppLink>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}