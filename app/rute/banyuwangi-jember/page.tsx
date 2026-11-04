import { Metadata } from "next";
import { ArrowRight, Home, Shield, ChevronDown, Map, Plane, Mountain } from "lucide-react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { StructuredData } from "../../components/SEO";
import BookingForm from "../../components/BookingForm";
import Image from "next/image";
import Link from "next/link";
import WhatsAppLink from "../../components/WhatsAppLink";

export const metadata: Metadata = {
  title: "Travel Banyuwangi Jember (PP) – Door to Door, Cepat & Nyaman | Juragan Travel",
  description:
    "Layanan travel Banyuwangi Jember dan travel Jember Banyuwangi PP dengan sistem door to door. Berangkat setiap hari pagi, siang, dan malam. Armada nyaman, driver berpengalaman, cocok untuk mahasiswa dan pekerja.",
  keywords:
    "travel banyuwangi jember, travel jember banyuwangi, harga travel banyuwangi jember, jadwal travel banyuwangi jember, travel banyuwangi jember pagi, travel banyuwangi jember malam, travel banyuwangi jember mahasiswa",
  openGraph: {
    title: "Travel Banyuwangi Jember (PP) – Door to Door, Cepat & Nyaman | Juragan Travel",
    description:
      "Jadwal & harga travel Banyuwangi Jember (PP) terbaru. Layanan door to door, armada nyaman, dan jadwal setiap hari untuk mahasiswa dan pekerja.",
    type: "website",
    url: "https://juragantravel.com/rute/banyuwangi-jember",
    images: [
      {
        url: "https://juragantravel.com/img/hero.webp",
        width: 1200,
        height: 630,
        alt: "Travel Banyuwangi Jember door to door",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Travel Banyuwangi Jember (PP) – Door to Door, Cepat & Nyaman | Juragan Travel",
    description:
      "Travel Banyuwangi Jember dan Jember Banyuwangi PP dengan layanan door to door, jadwal pagi, siang, malam setiap hari.",
    images: ["https://juragantravel.com/img/hero.webp"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://juragantravel.com/rute/banyuwangi-jember",
  },
};

const busTripData = {
  "@context": "https://schema.org",
  "@type": "BusTrip",
  provider: {
    "@type": "TravelAgency",
    name: "Juragan Travel",
    url: "https://juragantravel.com/",
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
    name: "Area Jember (Door-to-door)",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Jember",
      addressRegion: "Jawa Timur",
      addressCountry: "ID",
    },
  },
  name: "Travel Banyuwangi Jember (PP) Door to Door",
  description:
    "Layanan travel Banyuwangi Jember dan travel Jember Banyuwangi PP dengan sistem door to door, jadwal pagi, siang, dan malam setiap hari. Cocok untuk mahasiswa dan pekerja.",
  offers: {
    "@type": "Offer",
    price: "150000",
    priceCurrency: "IDR",
    name: "Harga Tiket Travel Banyuwangi Jember",
    description:
      "Harga travel Banyuwangi Jember dan Jember Banyuwangi mulai Rp 150.000 per orang. Harga dapat berbeda tergantung titik jemput dan tujuan. Hubungi admin untuk harga pasti.",
    url: "https://juragantravel.com/rute/banyuwangi-jember",
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
      name: "Banyuwangi - Jember",
      item: "https://juragantravel.com/rute/banyuwangi-jember"
    }
  ]
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Berapa jam perjalanan travel Banyuwangi ke Jember?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Estimasi waktu tempuh normal adalah sekitar 2 hingga 3 jam, tergantung kondisi lalu lintas dan rute penjemputan/pengantaran."
      }
    },
    {
      "@type": "Question",
      name: "Area penjemputan di Banyuwangi meliputi mana saja?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Kami melayani penjemputan di area Kota Banyuwangi, Rogojampi, Srono, Genteng, dan Jajag. Untuk area di luar jalur utama, mungkin ada sedikit biaya tambahan. Silakan konfirmasi alamat Anda ke admin."
      }
    },
    {
      "@type": "Question",
      name: "Area pengantaran di Jember meliputi mana saja?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Kami melayani pengantaran ke seluruh area Kota Jember, termasuk area Kampus Universitas Jember (UNEJ), Politeknik, Alun-alun, dan sekitarnya."
      }
    },
    {
      "@type": "Question",
      name: "Berapa harga carter/private travel Banyuwangi ke Jember?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Harga carter (1 mobil Avanza/Xenia) untuk rute Banyuwangi ↔ Jember adalah mulai dari Rp 350.000,- (All-in: mobil, driver, bbm). Harga bisa berbeda jika menggunakan unit Innova atau HiAce."
      }
    }
  ]
};

export default function BanyuwangiJemberPage() {
  const whatsappLinks = {
    toJember: `/kontak#contact-form`,
    fromJember: `/kontak#contact-form`,
    carter: `/kontak#contact-form`,
    general: `/kontak#contact-form`
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
              <span className="text-dark font-medium">Banyuwangi - Jember</span>
            </nav>
            <h1 className="text-4xl md:text-5xl font-extrabold text-dark">Travel Banyuwangi - Jember (PP)</h1>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
              Juragan Travel melayani <strong>travel Banyuwangi Jember</strong> dan{" "}
              <strong>travel Jember Banyuwangi</strong> setiap hari dengan layanan door-to-door.
              Cocok untuk mahasiswa, pekerja, maupun keluarga yang membutuhkan perjalanan cepat dan nyaman.
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
                  alt="Armada travel Banyuwangi ke Jember" 
                  width={600}
                  height={450}
                  className="rounded-lg shadow-xl w-full h-full object-cover"
                />
              </div>
              <div className="md:w-1/2">
                <span className="text-primary font-semibold uppercase">RUTE LOKAL POPULER</span>
                <h2 className="mt-2 text-3xl md:text-4xl font-extrabold text-dark">
                  Travel Banyuwangi ke Jember (PP)
                </h2>
                <p className="mt-4 text-lg text-gray-700 leading-relaxed">
                  Kami menyediakan layanan <strong>travel Banyuwangi ke Jember</strong> (dan sebaliknya) setiap hari. Rute ini sangat diminati oleh mahasiswa dan pekerja yang beraktivitas di kedua kota.
                </p>
                <p className="mt-4 text-lg text-gray-700 leading-relaxed">
                  Dengan layanan door-to-door, kami menjemput Anda di alamat Banyuwangi dan mengantar langsung ke tujuan Anda di Jember, termasuk area kampus, perkantoran, dan pusat kota.
                </p>
              </div>
            </div>

            {/* Jadwal & Harga */}
            <div className="bg-light p-8 md:p-12 rounded-lg shadow-lg mb-20">
              <div className="text-center">
                <h2 className="text-3xl md:text-4xl font-extrabold text-dark">Jadwal & Harga Travel Banyuwangi Jember</h2>
                <p className="mt-4 text-lg text-gray-600">
                  Jadwal <strong>travel Banyuwangi Jember</strong> dan{" "}
                  <strong>travel Jember Banyuwangi</strong> tersedia pagi, siang, dan malam setiap hari
                  dengan harga terjangkau. Pesan kursi travel Anda sekarang sebelum penuh.
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
                      <td className="p-4 font-medium text-gray-700">Banyuwangi → Jember</td>
                      <td className="p-4 text-gray-700">Pagi (07:00), Siang (13:00), Malam (19:00)</td>
                      <td className="p-4 font-bold text-primary text-lg">Rp 150.000</td>
                      <td className="p-4">
                        <WhatsAppLink
                          message="Halo, saya mau pesan travel Banyuwangi ke Jember"
                          title="Pesan Travel Banyuwangi Jember melalui formulir kontak"
                          className="bg-secondary text-white px-4 py-2 rounded-lg font-medium hover:bg-opacity-90"
                        >
                          Pesan
                        </WhatsAppLink>
                      </td>
                    </tr>
                    <tr className="hover:bg-white transition-colors">
                      <td className="p-4 font-medium text-gray-700">Jember → Banyuwangi</td>
                      <td className="p-4 text-gray-700">Pagi (07:00), Siang (13:00), Malam (19:00)</td>
                      <td className="p-4 font-bold text-primary text-lg">Rp 150.000</td>
                      <td className="p-4">
                        <WhatsAppLink
                          message="Halo, saya mau pesan travel dari Jember ke Banyuwangi"
                          title="Pesan Travel Jember Banyuwangi melalui formulir kontak"
                          className="bg-secondary text-white px-4 py-2 rounded-lg font-medium hover:bg-opacity-90"
                        >
                          Pesan
                        </WhatsAppLink>
                      </td>
                    </tr>
                    {/* <tr className="hover:bg-white transition-colors">
                      <td className="p-4 font-medium text-gray-700">Carter Drop (Private) Banyuwangi - Jember</td>
                      <td className="p-4 text-gray-700">Fleksibel 24 Jam (Sesuai Pesanan)</td>
                      <td className="p-4 font-bold text-primary text-lg">Rp 450.000</td>
                      <td className="p-4">
                        <a 
                          href={whatsappLinks.carter}
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="bg-secondary text-white px-4 py-2 rounded-lg font-medium hover:bg-opacity-90"
                        >
                          Pesan
                        </a>
                      </td>
                    </tr> */}
                  </tbody>
                </table>
              </div>
              <p className="text-center mt-6 text-sm text-gray-600 max-w-5xl mx-auto">
                *Harga <strong>travel Banyuwangi Jember</strong> dan{" "}
                <strong>travel Jember Banyuwangi</strong> mulai Rp 150.000 per orang per sekali jalan.
                Harga dapat berubah sewaktu-waktu tergantung titik penjemputan dan pengantaran.
                Silakan hubungi admin melalui formulir kontak untuk konfirmasi harga dan jadwal terbaru.
              </p>
            </div>

            {/* Keunggulan Rute */}
            <div className="mb-20">
              <div className="text-center">
                <h2 className="text-3xl md:text-4xl font-extrabold text-dark">Keunggulan Rute Travel Banyuwangi Jember</h2>
              </div>
              <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-white p-6 rounded-lg shadow-lg flex items-start space-x-4">
                  <ArrowRight className="w-12 h-12 text-secondary shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold text-dark">Perjalanan Cepat</h3>
                    <p className="text-gray-600 mt-1">Perjalanan cepat dan efisien, estimasi 2-3 jam perjalanan.</p>
                  </div>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-lg flex items-start space-x-4">
                  <Home className="w-12 h-12 text-secondary shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold text-dark">Door to Door</h3>
                    <p className="text-gray-600 mt-1">Kami jemput di rumah Anda dan antar sampai alamat tujuan (area kota/kampus).</p>
                  </div>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-lg flex items-start space-x-4">
                  <Shield className="w-12 h-12 text-secondary shrink-0" />
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
                  Area Layanan Travel Banyuwangi Jember
                </h2>
                <p className="mt-3 text-base md:text-lg text-gray-600 max-w-5xl mx-auto px-2">
                  Layanan door-to-door kami mencakup penjemputan dan pengantaran di seluruh area Banyuwangi dan Jember
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
                  Kampus UNEJ
                </span>
                <span className="bg-white px-3 py-1.5 md:px-4 md:py-2 rounded-lg text-xs md:text-sm font-medium text-gray-700 shadow-sm hover:shadow-md transition-shadow">
                  Politeknik Negeri Jember
                </span>
                <span className="bg-white px-3 py-1.5 md:px-4 md:py-2 rounded-lg text-xs md:text-sm font-medium text-gray-700 shadow-sm hover:shadow-md transition-shadow">
                  Alun-alun Jember
                </span>
                <span className="bg-white px-3 py-1.5 md:px-4 md:py-2 rounded-lg text-xs md:text-sm font-medium text-gray-700 shadow-sm hover:shadow-md transition-shadow">
                  Patrang
                </span>
                <span className="bg-white px-3 py-1.5 md:px-4 md:py-2 rounded-lg text-xs md:text-sm font-medium text-gray-700 shadow-sm hover:shadow-md transition-shadow">
                  Sumbersari
                </span>
              </div>
            </div>

            {/* Testimonial Section */}
            <div className="mb-20 bg-white">
              <div className="text-center mb-12">
                <h2 className="text-2xl md:text-4xl font-extrabold text-dark">
                  Apa Kata Pelanggan Travel Banyuwangi Jember
                </h2>
                <p className="mt-3 text-base md:text-lg text-gray-600 max-w-5xl mx-auto px-2">
                  Testimoni pelanggan rute travel Banyuwangi Jember yang sudah menggunakan layanan door to door kami.
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
                      <h4 className="font-bold text-dark">Farah Diba</h4>
                      <p className="text-sm text-gray-600">Mahasiswa UNEJ, Jember</p>
                    </div>
                  </div>
                  <div className="flex mb-3">
                    <span className="text-accent text-xl">★★★★★</span>
                  </div>
                  <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                    "Saya kuliah di Jember, setiap weekend pulang ke Banyuwangi pakai travel ini. Pelayanan door-to-door sangat membantu mahasiswa seperti saya. Driver ramah dan harga terjangkau!"
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
                      <h4 className="font-bold text-dark">Budi Santoso</h4>
                      <p className="text-sm text-gray-600">Karyawan, Jember</p>
                    </div>
                  </div>
                  <div className="flex mb-3">
                    <span className="text-accent text-xl">★★★★★</span>
                  </div>
                  <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                    "Rutin pakai travel ini untuk pulang ke Banyuwangi. Perjalanan cepat, mobilnya nyaman dan bersih. Paling suka karena bisa dijemput dari kantor langsung!"
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
                      <h4 className="font-bold text-dark">Linda Ayu</h4>
                      <p className="text-sm text-gray-600">Ibu Rumah Tangga, Banyuwangi</p>
                    </div>
                  </div>
                  <div className="flex mb-3">
                    <span className="text-accent text-xl">★★★★★</span>
                  </div>
                  <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                    "Travel paling nyaman untuk rute Banyuwangi-Jember! Saya sering ke Jember untuk belanja dan ngurusin surat-surat. Sangat recommended!"
                  </p>
                  <p className="text-xs text-gray-500 mt-4">Januari 2025</p>
                </div>
              </div>

              <div className="text-center mt-10">
                <p className="text-sm md:text-base text-gray-600 mb-6">Ingin jadi pelanggan berikutnya yang puas dengan travel Banyuwangi Jember kami?</p>
                <WhatsAppLink
                  message="Halo Admin, saya mau pesan travel Banyuwangi-Jember."
                  title="Hubungi Admin untuk Pesan Travel Banyuwangi Jember"
                  className="inline-block bg-accent text-white px-6 py-2.5 md:px-8 md:py-3 rounded-lg text-sm md:text-base font-semibold shadow-lg hover:bg-opacity-90 transition-all"
                >
                  Pesan Travel Banyuwangi Jember melalui formulir kontak
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
                  Selain rute Banyuwangi - Jember, kami juga melayani berbagai rute populer lainnya
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
              <h2 className="text-3xl md:text-4xl font-extrabold text-dark text-center mb-10">FAQ – Travel Banyuwangi Jember</h2>
              <div className="space-y-6">
                
                <details className="bg-light p-6 rounded-lg shadow-md group" open>
                  <summary className="flex justify-between items-center font-semibold text-lg text-primary cursor-pointer">
                    Berapa jam perjalanan travel Banyuwangi ke Jember?
                    <ChevronDown className="w-5 h-5 transition-transform duration-300 group-open:rotate-180" />
                  </summary>
                  <p className="mt-4 text-gray-700 leading-relaxed">
                    Estimasi waktu tempuh normal adalah sekitar 2 hingga 3 jam, tergantung kondisi lalu lintas dan rute penjemputan/pengantaran.
                  </p>
                </details>

                <details className="bg-light p-6 rounded-lg shadow-md group">
                  <summary className="flex justify-between items-center font-semibold text-lg text-primary cursor-pointer">
                    Area penjemputan di Banyuwangi meliputi mana saja?
                    <ChevronDown className="w-5 h-5 transition-transform duration-300 group-open:rotate-180" />
                  </summary>
                  <p className="mt-4 text-gray-700 leading-relaxed">
                    Kami melayani penjemputan di area Kota Banyuwangi, Rogojampi, Srono, Genteng, dan Jajag. Untuk area di luar jalur utama, mungkin ada sedikit biaya tambahan. Silakan konfirmasi alamat Anda ke admin.
                  </p>
                </details>

                <details className="bg-light p-6 rounded-lg shadow-md group">
                  <summary className="flex justify-between items-center font-semibold text-lg text-primary cursor-pointer">
                    Area pengantaran di Jember meliputi mana saja?
                    <ChevronDown className="w-5 h-5 transition-transform duration-300 group-open:rotate-180" />
                  </summary>
                  <p className="mt-4 text-gray-700 leading-relaxed">
                    Kami melayani pengantaran ke seluruh area Kota Jember, termasuk area Kampus Universitas Jember (UNEJ), Politeknik, Alun-alun, dan sekitarnya.
                  </p>
                </details>

                <details className="bg-light p-6 rounded-lg shadow-md group">
                  <summary className="flex justify-between items-center font-semibold text-lg text-primary cursor-pointer">
                    Berapa harga carter/private travel Banyuwangi ke Jember?
                    <ChevronDown className="w-5 h-5 transition-transform duration-300 group-open:rotate-180" />
                  </summary>
                  <p className="mt-4 text-gray-700 leading-relaxed">
                    Harga carter (1 mobil Avanza/Xenia) untuk rute Banyuwangi ↔ Jember adalah mulai dari <strong>Rp 350.000,-</strong> (All-in: mobil, driver, bbm). Harga bisa berbeda jika menggunakan unit Innova atau HiAce.
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
              <h2 className="text-xl md:text-4xl font-extrabold text-dark">
                Pesan Travel Banyuwangi - Jember
              </h2>
              <p className="mt-4 text-sm md:text-lg text-gray-600">
                Isi formulir di bawah ini untuk pesan tiket <strong>travel Banyuwangi Jember</strong> secara online.
                Tim kami akan menghubungi Anda untuk konfirmasi jadwal dan penjemputan.
              </p>
            </div>

            <BookingForm routeName="Banyuwangi → Jember" />
          </div>
        </section>

        {/* CTA Section */}
        <section id="kontak" className="py-20 bg-primary text-white">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-extrabold">
              Pesan Travel Banyuwangi Jember Sekarang
            </h2>
            <p className="mt-4 text-lg text-gray-200 max-w-2xl mx-auto">
              Baik untuk kuliah, kerja, atau pulang kampung. Amankan kursi Anda sekarang.
              Hubungi admin kami melalui formulir kontak untuk booking cepat rute{" "}
              <strong>travel Banyuwangi Jember</strong> maupun{" "}
              <strong>travel Jember Banyuwangi</strong>.
            </p>
            <WhatsAppLink
              message="Halo Admin, saya mau pesan travel Banyuwangi-Jember."
              title="Kirim Permintaan Booking Travel Banyuwangi Jember"
              className="mt-10 inline-block bg-accent text-white px-10 py-3 rounded-lg font-bold text-lg shadow-lg hover:bg-opacity-90 transition-all transform hover:-translate-y-1"
            >
              Pesan Travel Banyuwangi Jember melalui formulir kontak
            </WhatsAppLink>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}