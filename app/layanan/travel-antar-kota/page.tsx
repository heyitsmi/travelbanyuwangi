import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import WhatsAppLink from "../../components/WhatsAppLink";
import { StructuredData } from "../../components/SEO";
import { CheckCircle, Clock, Shield, Users, Star, Wifi } from "lucide-react";
import BookingForm from "../../components/BookingForm";

export const metadata: Metadata = {
  title: "Travel Banyuwangi - Surabaya, Malang, Denpasar (PP) | Door to Door 24 Jam",
  description:
    "Layanan travel antar kota Banyuwangi ke Surabaya, Malang, Denpasar (PP) dengan sistem door-to-door. Harga mulai Rp 150.000. Armada nyaman, berangkat setiap hari. Booking melalui formulir kontak 24 jam.",
  keywords:
    "travel banyuwangi surabaya, travel banyuwangi malang, travel banyuwangi denpasar, travel surabaya banyuwangi, travel malang banyuwangi, travel denpasar banyuwangi, jadwal travel banyuwangi, harga travel banyuwangi, travel door to door banyuwangi, travel banyuwangi 24 jam",
  authors: [{ name: "Juragan Travel" }],
  openGraph: {
    title: "Travel Banyuwangi - Surabaya, Malang, Denpasar (PP) | Door to Door 24 Jam",
    description: "Layanan travel antar kota door-to-door dari Banyuwangi. Harga mulai Rp 150.000. Armada nyaman, berangkat setiap hari. Booking mudah melalui formulir kontak.",
    type: "website",
    url: "https://juragantravel.com/layanan/travel-antar-kota",
    images: [
      {
        url: "/img/layanan/travel.webp",
        width: 1200,
        height: 630,
      },
    ],
    siteName: "Juragan Travel",
  },
  twitter: {
    card: "summary_large_image",
    title: "Travel Banyuwangi - Surabaya, Malang, Denpasar (PP) | Door to Door 24 Jam",
    description: "Layanan travel antar kota door-to-door dari Banyuwangi. Harga mulai Rp 150.000. Armada nyaman, berangkat setiap hari.",
    images: ["/img/layanan/travel.webp"],
  },
  alternates: {
    canonical: "https://juragantravel.com/layanan/travel-antar-kota",
  },
};

const serviceData = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "TravelAgency",
  provider: {
    "@type": "TravelAgency",
    name: "Juragan Travel",
    url: "https://juragantravel.com/",
  },
  name: "Travel Antar Kota Banyuwangi (Surabaya, Malang, Denpasar)",
  description:
    "Layanan travel door-to-door dari Banyuwangi ke Surabaya, Malang, Denpasar, dan sebaliknya. Jadwal setiap hari, armada nyaman, harga terjangkau.",
  areaServed: [
    { "@type": "City", name: "Banyuwangi" },
    { "@type": "City", name: "Surabaya" },
    { "@type": "City", name: "Malang" },
    { "@type": "City", name: "Denpasar" },
  ],
  offers: [
    {
      "@type": "Offer",
      name: "Travel Banyuwangi - Surabaya",
      category: "Travel",
      priceCurrency: "IDR",
      price: "200000",
    },
    {
      "@type": "Offer",
      name: "Travel Banyuwangi - Malang",
      category: "Travel",
      priceCurrency: "IDR",
      price: "200000",
    },
    {
      "@type": "Offer",
      name: "Travel Banyuwangi - Denpasar",
      category: "Travel",
      priceCurrency: "IDR",
      price: "200000",
    },
  ],
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
      name: "Layanan",
      item: "https://juragantravel.com/layanan",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Travel Antar Kota",
      item: "https://juragantravel.com/layanan/travel-antar-kota",
    },
  ],
};

export default function TravelAntarKotaPage() {
  return (
    <>
      <StructuredData data={serviceData} />
      <StructuredData data={breadcrumbData} />
      <div className="bg-white antialiased">
        <Header />

        <main>
          {/* Hero Section */}
          <section className="bg-light py-20">
            <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
              <nav className="text-sm mb-4">
                <Link href="/" className="text-gray-600 hover:text-primary">
                  Beranda
                </Link>
                <span className="text-gray-400 mx-2">/</span>
                <Link href="/layanan" className="text-gray-600 hover:text-primary">
                  Layanan
                </Link>
                <span className="text-gray-400 mx-2">/</span>
                <span className="text-dark font-medium">Travel Antar Kota</span>
              </nav>
              <h1 className="text-4xl md:text-5xl font-extrabold text-dark">Layanan Travel Antar Kota</h1>
              <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
                Jasa travel door-to-door premium dari Banyuwangi ke Surabaya, Malang, Denpasar, dan kota-kota lain di
                Jawa & Bali.
              </p>
            </div>
          </section>

          {/* Detail Rute Section */}
          <section id="detail-rute" className="py-20 bg-white">
            <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              {/* Rute 1: Banyuwangi - Surabaya */}
              <div className="flex flex-col md:flex-row items-center gap-12 mb-20">
                <div className="md:w-1/2 relative h-96 w-full">
                  <Image
                    src="/img/rute/banyuwangi-surabaya.webp"
                    alt="Armada travel Banyuwangi ke Surabaya via tol"
                    fill
                    className="rounded-lg shadow-xl object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div className="md:w-1/2">
                  <h2 className="text-3xl md:text-4xl font-extrabold text-dark">Travel Banyuwangi - Surabaya (PP)</h2>
                  <p className="mt-4 text-lg text-gray-700 leading-relaxed">
                    Nikmati perjalanan cepat dan nyaman untuk rute <strong>travel Banyuwangi - Surabaya</strong> (atau{" "}
                    <strong>travel Surabaya - Banyuwangi</strong>) dengan layanan door-to-door kami. Kami menjemput Anda
                    di rumah dan mengantar hingga ke alamat tujuan di Surabaya, Sidoarjo, atau Gresik.
                  </p>
                  <ul className="mt-6 space-y-3 text-lg text-gray-700">
                    <li className="flex items-center">
                      <CheckCircle className="w-6 h-6 text-secondary mr-3 shrink-0" />
                      <span>
                        Layanan <strong>Door-to-Door</strong> (Jemput & Antar Alamat)
                      </span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-6 h-6 text-secondary mr-3 shrink-0" />
                      <span>
                        Perjalanan Cepat via <strong>Tol Trans Jawa</strong>
                      </span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-6 h-6 text-secondary mr-3 shrink-0" />
                      <span>
                        Jadwal Berangkat <strong>Pagi, Siang, dan Malam</strong>
                      </span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-6 h-6 text-secondary mr-3 shrink-0" />
                      <span>Armada Hiace & Elf Terbaru (Full AC, Reclining Seat)</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Rute 2: Banyuwangi - Malang */}
              <div className="flex flex-col md:flex-row-reverse items-center gap-12 mb-20">
                <div className="md:w-1/2 relative h-96 w-full">
                  <Image
                    src="/img/rute/banyuwangi-malang.webp"
                    alt="Armada travel Banyuwangi ke Malang"
                    fill
                    className="rounded-lg shadow-xl object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div className="md:w-1/2">
                  <h2 className="text-3xl md:text-4xl font-extrabold text-dark">Travel Banyuwangi - Malang (PP)</h2>
                  <p className="mt-4 text-lg text-gray-700 leading-relaxed">
                    Kami adalah solusi terbaik untuk rute <strong>travel Banyuwangi - Malang</strong> (atau{" "}
                    <strong>travel Malang - Banyuwangi</strong>). Sering digunakan oleh mahasiswa atau wisatawan, kami
                    melayani penjemputan di seluruh area Banyuwangi untuk diantar ke kota Malang, Batu, dan sekitarnya.
                  </p>
                  <ul className="mt-6 space-y-3 text-lg text-gray-700">
                    <li className="flex items-center">
                      <CheckCircle className="w-6 h-6 text-secondary mr-3 shrink-0" />
                      <span>Jemput di Rumah, Antar sampai Kampus atau Hotel</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-6 h-6 text-secondary mr-3 shrink-0" />
                      <span>Melayani rute via Jember atau Probolinggo</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-6 h-6 text-secondary mr-3 shrink-0" />
                      <span>Jadwal Keberangkatan Fleksibel Setiap Hari</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Rute 3: Banyuwangi - Denpasar */}
              <div className="flex flex-col md:flex-row items-center gap-12 mb-20">
                <div className="md:w-1/2 relative h-96 w-full">
                  <Image
                    src="/img/rute/banyuwangi-denpasar.webp"
                    alt="Armada travel Banyuwangi ke Denpasar Bali"
                    fill
                    className="rounded-lg shadow-xl object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div className="md:w-1/2">
                  <h2 className="text-3xl md:text-4xl font-extrabold text-dark">Travel Banyuwangi - Denpasar (PP)</h2>
                  <p className="mt-4 text-lg text-gray-700 leading-relaxed">
                    Perjalanan lintas pulau kini lebih mudah dengan layanan <strong>travel Banyuwangi - Denpasar</strong>{" "}
                    (atau <strong>travel Denpasar - Banyuwangi</strong>). Kami mengurus semua kebutuhan Anda, termasuk
                    kenyamanan saat penyeberangan.
                  </p>
                  <ul className="mt-6 space-y-3 text-lg text-gray-700">
                    <li className="flex items-center">
                      <CheckCircle className="w-6 h-6 text-secondary mr-3 shrink-0" />
                      <span>Layanan Door-to-Door area Denpasar, Kuta, Jimbaran</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-6 h-6 text-secondary mr-3 shrink-0" />
                      <span>
                        Harga Sudah <strong>Termasuk Tiket Kapal Ferry</strong>
                      </span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-6 h-6 text-secondary mr-3 shrink-0" />
                      <span>Antar Jemput ke Bandara Ngurah Rai (sesuai request)</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Jadwal & Harga Section */}
          <section id="jadwal-harga" className="py-20 bg-light">
            <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              {/* Judul Section */}
              <div className="text-center">
                <h2 className="text-3xl md:text-4xl font-extrabold text-dark">Jadwal & Harga Travel</h2>
                <p className="mt-4 text-lg text-gray-600">Jadwal pasti, berangkat setiap hari, dengan harga terbaik.</p>
              </div>

              {/* Tabel Harga */}
              <div className="mt-12 max-w-4xl mx-auto bg-white shadow-xl rounded-lg overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full text-left">
                    <thead className="bg-dark text-white">
                      <tr>
                        <th className="py-4 px-6 font-semibold">Rute Travel</th>
                        <th className="py-4 px-6 font-semibold">Jadwal Keberangkatan</th>
                        <th className="py-4 px-6 font-semibold">Harga Mulai (IDR)</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      <tr className="hover:bg-gray-50">
                        <td className="py-4 px-6 font-medium text-primary">Banyuwangi - Surabaya</td>
                        <td className="py-4 px-6 text-gray-700">07:00, 13:00, 21:00</td>
                        <td className="py-4 px-6 font-semibold text-gray-900">Rp 200.000</td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="py-4 px-6 font-medium text-primary">Banyuwangi - Malang</td>
                        <td className="py-4 px-6 text-gray-700">07:00, 13:00, 21:00</td>
                        <td className="py-4 px-6 font-semibold text-gray-900">Rp 200.000</td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="py-4 px-6 font-medium text-primary">Banyuwangi - Denpasar</td>
                        <td className="py-4 px-6 text-gray-700">08:00, 14:00, 20:00</td>
                        <td className="py-4 px-6 font-semibold text-gray-900">Rp 200.000</td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="py-4 px-6 font-medium text-primary">Banyuwangi - Jember</td>
                        <td className="py-4 px-6 text-gray-700">Setiap Hari</td>
                        <td className="py-4 px-6 font-semibold text-gray-900">Rp 150.000</td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="py-4 px-6 font-medium text-primary">Banyuwangi - Lumajang</td>
                        <td className="py-4 px-6 text-gray-700">Setiap Hari</td>
                        <td className="py-4 px-6 font-semibold text-gray-900">Rp 170.000</td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="py-4 px-6 font-medium text-primary">Banyuwangi - Probolinggo</td>
                        <td className="py-4 px-6 text-gray-700">Setiap Hari</td>
                        <td className="py-4 px-6 font-semibold text-gray-900">Rp 200.000</td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="py-4 px-6 font-medium text-primary">Banyuwangi - Solo</td>
                        <td className="py-4 px-6 text-gray-700">07:00, 20:00</td>
                        <td className="py-4 px-6 font-semibold text-gray-900">Rp 400.000</td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="py-4 px-6 font-medium text-primary">Banyuwangi - Tulungagung</td>
                        <td className="py-4 px-6 text-gray-700">07:00, 20:00</td>
                        <td className="py-4 px-6 font-semibold text-gray-900">Rp 400.000</td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="py-4 px-6 font-medium text-primary">Banyuwangi - Gresik</td>
                        <td className="py-4 px-6 text-gray-700">Setiap Hari</td>
                        <td className="py-4 px-6 font-semibold text-gray-900">Rp 350.000</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <p className="text-center mt-6 text-gray-600">
                *Harga dapat berubah sewaktu-waktu. Hubungi admin untuk harga pasti dan diskon rombongan.
              </p>
            </div>
          </section>

          {/* Form Pemesanan Section */}
          <section id="form-pemesanan" className="py-20 bg-white">
            <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-extrabold text-dark">
                  Pesan Travel Antar Kota Sekarang
                </h2>
                <p className="mt-4 text-lg text-gray-600">
                  Isi formulir di bawah ini untuk pesan tiket travel dengan mudah dan cepat
                </p>
              </div>

              <BookingForm routeName="" />
            </div>
          </section>

          {/* Keunggulan Layanan Section - SEO Content */}
          <section id="keunggulan-layanan" className="py-20 bg-light">
            <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-extrabold text-dark">
                  Mengapa Memilih Travel Antar Kota Kami?
                </h2>
                <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
                  Pengalaman perjalanan yang aman, nyaman, dan terpercaya untuk setiap destinasi Anda
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all">
                  <div className="flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-6">
                    <Shield className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-dark mb-3">Keamanan Terjamin</h3>
                  <p className="text-gray-600">
                    Armada terawat dengan asuransi perjalanan lengkap. Driver berpengalaman dan berlisensi resmi 
                    untuk keselamatan maksimal perjalanan Anda.
                  </p>
                </div>

                <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all">
                  <div className="flex items-center justify-center w-16 h-16 rounded-full bg-secondary/10 text-secondary mb-6">
                    <Clock className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-dark mb-3">Tepat Waktu</h3>
                  <p className="text-gray-600">
                    Komitmen ketepatan waktu penjemputan dan keberangkatan. Sistem tracking real-time untuk 
                    memantau perjalanan Anda setiap saat.
                  </p>
                </div>

                <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all">
                  <div className="flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 text-accent mb-6">
                    <Users className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-dark mb-3">Pelayanan Ramah</h3>
                  <p className="text-gray-600">
                    Tim customer service responsif 24/7. Driver yang ramah dan profesional siap membantu 
                    kebutuhan perjalanan Anda.
                  </p>
                </div>

                <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all">
                  <div className="flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-6">
                    <Star className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-dark mb-3">Armada Premium</h3>
                  <p className="text-gray-600">
                    Kendaraan baru dilengkapi AC, reclining seat, dan ruang kaki luas. Bersih dan nyaman 
                    untuk perjalanan jarak jauh.
                  </p>
                </div>

                <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all">
                  <div className="flex items-center justify-center w-16 h-16 rounded-full bg-secondary/10 text-secondary mb-6">
                    <Wifi className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-dark mb-3">Fasilitas Lengkap</h3>
                  <p className="text-gray-600">
                    WiFi gratis, charging port USB, dan entertainment system untuk kenyamanan maksimal 
                    selama perjalanan Anda.
                  </p>
                </div>

                <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all">
                  <div className="flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 text-accent mb-6">
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-dark mb-3">Harga Transparan</h3>
                  <p className="text-gray-600">
                    Tidak ada biaya tersembunyi. Harga yang tertera sudah termasuk jemput antar, 
                    tol, dan parkir di area jangkauan.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Informasi Lengkap Section - SEO Content */}
          <section id="informasi-lengkap" className="py-20 bg-white">
            <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-extrabold text-dark mb-8">
                  Panduan Lengkap Travel Antar Kota Banyuwangi
                </h2>

                {/* Area Layanan */}
                <div className="mb-12">
                  <h3 className="text-2xl font-bold text-primary mb-4">Area Layanan Door-to-Door</h3>
                  <p className="text-lg text-gray-700 mb-4">
                    Kami melayani penjemputan dan pengantaran di seluruh area Banyuwangi dan kota tujuan dengan 
                    jangkauan luas:
                  </p>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-light p-6 rounded-lg">
                      <h4 className="font-bold text-dark mb-3">Area Banyuwangi:</h4>
                      <ul className="space-y-2 text-gray-700">
                        <li>• Kota Banyuwangi (semua kecamatan)</li>
                        <li>• Genteng, Srono, Glagah</li>
                        <li>• Rogojampi, Kabat, Singojuruh</li>
                        <li>• Muncar, Cluring, Tegaldlimo</li>
                        <li>• Pesanggaran, Bangorejo, Purwoharjo</li>
                      </ul>
                    </div>
                    <div className="bg-light p-6 rounded-lg">
                      <h4 className="font-bold text-dark mb-3">Area Surabaya & Sekitar:</h4>
                      <ul className="space-y-2 text-gray-700">
                        <li>• Seluruh wilayah Surabaya</li>
                        <li>• Sidoarjo, Gresik, Mojokerto</li>
                        <li>• Bandara Juanda (Terminal 1 & 2)</li>
                        <li>• Pelabuhan Tanjung Perak</li>
                        <li>• Kawasan industri dan perkantoran</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Armada */}
                <div className="mb-12">
                  <h3 className="text-2xl font-bold text-primary mb-4">Pilihan Armada Travel Kami</h3>
                  <p className="text-lg text-gray-700 mb-4">
                    Kami menyediakan berbagai jenis kendaraan sesuai kebutuhan perjalanan Anda:
                  </p>
                  <div className="space-y-4">
                    <div className="border-l-4 border-primary pl-6 py-4">
                      <h4 className="font-bold text-dark mb-2">Toyota Hiace & Elf (Kapasitas 14-16 orang)</h4>
                      <p className="text-gray-700">
                        Pilihan terbaik untuk rombongan keluarga atau grup. Dilengkapi AC, reclining seat, 
                        bagasi luas, dan entertainment system. Ideal untuk perjalanan jarak jauh yang nyaman.
                      </p>
                    </div>
                    <div className="border-l-4 border-secondary pl-6 py-4">
                      <h4 className="font-bold text-dark mb-2">Toyota Innova Reborn (Kapasitas 6-7 orang)</h4>
                      <p className="text-gray-700">
                        Kendaraan premium dengan kenyamanan maksimal. Cocok untuk keluarga kecil atau 
                        eksekutif yang menginginkan privasi dan kenyamanan ekstra.
                      </p>
                    </div>
                    <div className="border-l-4 border-accent pl-6 py-4">
                      <h4 className="font-bold text-dark mb-2">Toyota Avanza / Xenia (Kapasitas 6-7 orang)</h4>
                      <p className="text-gray-700">
                        Pilihan ekonomis namun tetap nyaman. Cocok untuk keluarga dengan budget hemat 
                        tanpa mengurangi kualitas pelayanan.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Cara Pemesanan */}
                <div className="mb-12">
                  <h3 className="text-2xl font-bold text-primary mb-4">Cara Mudah Pesan Travel</h3>
                  <div className="bg-light p-8 rounded-lg">
                    <ol className="space-y-4 text-lg text-gray-700">
                      <li className="flex items-start">
                        <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold mr-4">
                          1
                        </span>
                        <div>
                          <strong>Hubungi kami melalui formulir online</strong>
                          <p className="text-gray-600 mt-1">
                            Sampaikan kebutuhan perjalanan Anda melalui formulir kontak. Tim kami siap membantu.
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold mr-4">
                          2
                        </span>
                        <div>
                          <strong>Informasikan Detail Perjalanan</strong>
                          <p className="text-gray-600 mt-1">
                            Beritahu rute, tanggal keberangkatan, jumlah penumpang, alamat jemput & tujuan.
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold mr-4">
                          3
                        </span>
                        <div>
                          <strong>Konfirmasi & Pembayaran</strong>
                          <p className="text-gray-600 mt-1">
                            Dapatkan konfirmasi booking dan lakukan pembayaran DP atau full. Transfer bank atau tunai.
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold mr-4">
                          4
                        </span>
                        <div>
                          <strong>Siap Diberangkatkan</strong>
                          <p className="text-gray-600 mt-1">
                            Driver akan menjemput Anda di alamat yang telah ditentukan. Nikmati perjalanan nyaman!
                          </p>
                        </div>
                      </li>
                    </ol>
                  </div>
                </div>

                {/* FAQ Tambahan */}
                <div className="mb-12">
                  <h3 className="text-2xl font-bold text-primary mb-4">Pertanyaan yang Sering Diajukan</h3>
                  <div className="space-y-4">
                    <details className="bg-light p-6 rounded-lg group">
                      <summary className="font-semibold text-lg text-dark cursor-pointer">
                        Apakah harga sudah termasuk antar jemput di rumah?
                      </summary>
                      <p className="mt-4 text-gray-700">
                        Ya, harga yang tercantum sudah termasuk layanan door-to-door (jemput di alamat Anda 
                        dan antar ke alamat tujuan) selama masih dalam area jangkauan kami. Tidak ada biaya tambahan 
                        untuk jemput antar di area kota.
                      </p>
                    </details>
                    <details className="bg-light p-6 rounded-lg group">
                      <summary className="font-semibold text-lg text-dark cursor-pointer">
                        Berapa lama estimasi waktu perjalanan?
                      </summary>
                      <p className="mt-4 text-gray-700">
                        Estimasi waktu perjalanan: Banyuwangi-Surabaya sekitar 5-6 jam, Banyuwangi-Malang 4-5 jam, 
                        Banyuwangi-Denpasar 4-5 jam (termasuk penyeberangan ferry). Waktu dapat bervariasi 
                        tergantung kondisi lalu lintas.
                      </p>
                    </details>
                    <details className="bg-light p-6 rounded-lg group">
                      <summary className="font-semibold text-lg text-dark cursor-pointer">
                        Apakah bisa pesan untuk hari ini (mendadak)?
                      </summary>
                      <p className="mt-4 text-gray-700">
                        Tentu bisa! Kami melayani booking dadakan dengan ketersediaan armada. Silakan hubungi 
                        Kirim permintaan melalui formulir kontak untuk mengecek ketersediaan mobil pada hari yang Anda inginkan.
                      </p>
                    </details>
                    <details className="bg-light p-6 rounded-lg group">
                      <summary className="font-semibold text-lg text-dark cursor-pointer">
                        Bagaimana sistem pembayaran?
                      </summary>
                      <p className="mt-4 text-gray-700">
                        Kami menerima pembayaran via transfer bank (BCA, Mandiri, BRI, BNI) atau tunai kepada 
                        driver. Untuk booking, Anda bisa DP 50% dan sisanya dibayar saat keberangkatan atau 
                        full payment di awal.
                      </p>
                    </details>
                    <details className="bg-light p-6 rounded-lg group">
                      <summary className="font-semibold text-lg text-dark cursor-pointer">
                        Apakah ada diskon untuk rombongan?
                      </summary>
                      <p className="mt-4 text-gray-700">
                        Ya! Kami memberikan harga spesial untuk rombongan atau sewa mobil penuh (charter). 
                        Hubungi admin kami untuk negosiasi harga terbaik sesuai kebutuhan rombongan Anda.
                      </p>
                    </details>
                    <details className="bg-light p-6 rounded-lg group">
                      <summary className="font-semibold text-lg text-dark cursor-pointer">
                        Apakah travel beroperasi setiap hari termasuk hari libur?
                      </summary>
                      <p className="mt-4 text-gray-700">
                        Ya, layanan travel kami beroperasi 365 hari setahun termasuk weekend dan hari libur 
                        nasional. Namun pada musim high season (lebaran, tahun baru), kami sarankan untuk 
                        booking jauh-jauh hari.
                      </p>
                    </details>
                  </div>
                </div>

                {/* Tips Perjalanan */}
                <div>
                  <h3 className="text-2xl font-bold text-primary mb-4">Tips Perjalanan Nyaman</h3>
                  <div className="bg-gradient-to-r from-primary/5 to-secondary/5 p-8 rounded-lg">
                    <ul className="space-y-3 text-gray-700">
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-secondary mr-3 mt-1 flex-shrink-0" />
                        <span>Booking minimal H-1 untuk memastikan ketersediaan kursi, terutama di weekend</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-secondary mr-3 mt-1 flex-shrink-0" />
                        <span>Siapkan alamat lengkap jemput & antar dengan patokan jelas untuk memudahkan driver</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-secondary mr-3 mt-1 flex-shrink-0" />
                        <span>Bawa jaket tipis karena AC mobil menyala selama perjalanan</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-secondary mr-3 mt-1 flex-shrink-0" />
                        <span>Informasikan jika ada permintaan khusus (berhenti makan, ibadah, dll)</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-secondary mr-3 mt-1 flex-shrink-0" />
                        <span>Pastikan nomor WhatsApp aktif untuk koordinasi dengan driver</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-secondary mr-3 mt-1 flex-shrink-0" />
                        <span>Tiba di titik jemput 10 menit lebih awal dari jadwal yang disepakati</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Kontak & CTA Section */}
          <section id="kontak" className="py-20 bg-primary text-white">
            <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
              <h2 className="text-3xl md:text-4xl font-extrabold">Pesan Tiket Travel Anda Sekarang!</h2>
              <p className="mt-4 text-lg text-gray-200 max-w-2xl mx-auto">
                Jangan tunda perjalanan Anda. Hubungi admin kami melalui formulir kontak untuk booking kursi dan konfirmasi jadwal
                jemput.
              </p>
              <WhatsAppLink
                className="mt-10 inline-block bg-accent text-white px-10 py-3 rounded-lg font-bold text-lg shadow-lg hover:bg-opacity-90 transition-all transform hover:-translate-y-1"
              >
                Booking melalui formulir kontak (Respon Cepat)
              </WhatsAppLink>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
}
