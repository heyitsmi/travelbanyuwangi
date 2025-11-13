import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { StructuredData } from "../../components/SEO";
import { Map, Home, Plane, ChevronDown } from "lucide-react";
import BookingForm from "../../components/BookingForm";

export const metadata: Metadata = {
  title: "Travel Banyuwangi Surabaya (PP) - Jadwal & Harga Terbaru | Juragan Travel",
  description:
    "Jadwal & harga travel Banyuwangi Surabaya (PP) terbaru. Layanan door-to-door, via tol, berangkat setiap hari (pagi, siang, malam). Pesan sekarang!",
  keywords:
    "travel banyuwangi surabaya, travel surabaya banyuwangi, harga travel banyuwangi surabaya, jadwal travel banyuwangi surabaya, travel banyuwangi juanda, travel banyuwangi surabaya via tol, travel banyuwangi surabaya pagi, travel banyuwangi surabaya malam",
  authors: [{ name: "Juragan Travel" }],
  openGraph: {
    title: "Travel Banyuwangi Surabaya (PP) - Jadwal & Harga Terbaru | Juragan Travel",
    description:
      "Jadwal & harga travel Banyuwangi Surabaya (PP) terbaru. Layanan door-to-door, via tol, berangkat setiap hari.",
    type: "website",
    url: "https://juragantravel.com/rute/banyuwangi-surabaya",
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
    title: "Travel Banyuwangi Surabaya (PP) - Jadwal & Harga Terbaru | Juragan Travel",
    description:
      "Jadwal & harga travel Banyuwangi Surabaya (PP) terbaru. Layanan door-to-door, via tol, berangkat setiap hari.",
    images: ["/img/rute/banyuwangi-surabaya.webp"],
  },
  alternates: {
    canonical: "https://juragantravel.com/rute/banyuwangi-surabaya",
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
    image: "/img/rute/banyuwangi-surabaya.webp",
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
    name: "Area Surabaya (Door-to-door)",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Surabaya",
      addressRegion: "Jawa Timur",
      addressCountry: "ID",
    },
  },
  name: "Travel Banyuwangi - Surabaya (PP)",
  description:
    "Layanan travel door-to-door antara Banyuwangi dan Surabaya via tol dengan jadwal pagi, siang, dan malam.",
  offers: {
    "@type": "Offer",
    price: "200000",
    priceCurrency: "IDR",
    name: "Harga Tiket Travel Banyuwangi Surabaya",
    description: "Harga dapat bervariasi. Hubungi admin untuk harga pasti.",
    url: "https://juragantravel.com/rute/banyuwangi-surabaya",
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
      name: "Banyuwangi - Surabaya",
      item: "https://juragantravel.com/rute/banyuwangi-surabaya",
    },
  ],
};

const schedules = [
  {
    route: "Banyuwangi → Surabaya",
    schedule: "Pagi (09:00), Siang (15:00), Malam (21:00)",
    price: "Rp 200.000",
  },
  {
    route: "Surabaya → Banyuwangi",
    schedule: "Pagi (09:00), Siang (15:00), Malam (21:00)",
    price: "Rp 200.000",
  },
  {
    route: "Banyuwangi → Bandara Juanda",
    schedule: "Hubungi Admin (Menyesuaikan Jadwal)",
    price: "Rp 250.000",
  },
  {
    route: "Bandara Juanda → Banyuwangi",
    schedule: "Hubungi Admin (Menyesuaikan Jadwal)",
    price: "Rp 250.000",
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
    description: "Kami jemput di rumah Anda (Banyuwangi) dan antar sampai alamat tujuan (Surabaya).",
  },
  {
    icon: Plane,
    title: "Support Bandara Juanda",
    description: "Melayani antar-jemput di Bandara Juanda (Terminal 1 & 2).",
  },
];

const faqs = [
  {
    question: "Berapa jam perjalanan travel Banyuwangi ke Surabaya via tol?",
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
    question: "Area pengantaran di Surabaya meliputi mana saja?",
    answer:
      "Kami melayani pengantaran ke seluruh area Kota Surabaya, Sidoarjo, dan Bandara Juanda. Untuk area seperti Gresik atau Surabaya Barat (yang jauh dari rute tol), mohon konfirmasi terlebih dahulu.",
    defaultOpen: false,
  },
  {
    question: "Apakah ada jadwal travel Banyuwangi Surabaya malam?",
    answer:
      "Ya, kami memiliki jadwal malam sekitar pukul 21:00 WIB. Jadwal ini cocok bagi Anda yang ingin tiba di Surabaya pada pagi hari.",
    defaultOpen: false,
  },
];

export default function BanyuwangiSurabayaPage() {
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
                <Link href="/" className="text-gray-600 hover:text-primary">
                  Beranda
                </Link>
                <span className="text-gray-400 mx-2">/</span>
                <Link href="/rute" className="text-gray-600 hover:text-primary">
                  Rute
                </Link>
                <span className="text-gray-400 mx-2">/</span>
                <span className="text-dark font-medium">Banyuwangi - Surabaya</span>
              </nav>
              <h1 className="text-4xl md:text-5xl font-extrabold text-dark">Travel Banyuwangi - Surabaya (PP)</h1>
              <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
                Jadwal travel Banyuwangi Surabaya via tol berangkat setiap hari (pagi, siang, malam). Layanan
                door-to-door, aman, dan nyaman.
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
                    alt="Armada travel Banyuwangi Surabaya via tol"
                    fill
                    className="rounded-lg shadow-xl object-cover"
                  />
                </div>
                <div className="md:w-1/2">
                  <span className="text-primary font-semibold uppercase">RUTE TERPOPULER</span>
                  <h2 className="mt-2 text-3xl md:text-4xl font-extrabold text-dark">
                    Travel Banyuwangi Surabaya Cepat via Tol
                  </h2>
                  <p className="mt-4 text-lg text-gray-700 leading-relaxed">
                    Kami melayani <strong>travel Banyuwangi Surabaya</strong> dan{" "}
                    <strong>travel Surabaya Banyuwangi</strong> setiap hari. Rute ini adalah salah satu rute
                    terpopuler kami, menggunakan armada terbaik dan driver berpengalaman yang hafal rute.
                  </p>
                  <p className="mt-4 text-lg text-gray-700 leading-relaxed">
                    Perjalanan Anda akan lebih cepat dan nyaman karena kami menggunakan{" "}
                    <strong>Jalan Tol Probolinggo-Surabaya</strong>. Kami juga melayani penjemputan/pengantaran di{" "}
                    <strong>Bandara Juanda</strong> dengan penyesuaian jadwal.
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
                            <a
                              href="https://wa.me/6282143258744"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="bg-secondary text-white px-4 py-2 rounded-lg font-medium hover:bg-opacity-90"
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
                  *Harga dapat berubah sewaktu-waktu. Hubungi admin via WA untuk harga pasti dan promo terbaru.
                </p>
              </div>

              {/* Keunggulan Rute */}
              <div className="mb-20">
                <div className="text-center">
                  <h2 className="text-3xl md:text-4xl font-extrabold text-dark">
                    Keunggulan Rute Banyuwangi-Surabaya Kami
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

              {/* FAQ Rute Spesifik */}
              <div className="max-w-3xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-extrabold text-dark text-center mb-10">
                  FAQ - Rute Banyuwangi Surabaya
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
                  Pesan Travel Banyuwangi - Surabaya
                </h2>
                <p className="mt-4 text-lg text-gray-600">
                  Isi formulir di bawah ini untuk pesan tiket travel dengan mudah dan cepat
                </p>
              </div>

              <BookingForm routeName="Banyuwangi → Surabaya" />
            </div>
          </section>

          {/* CTA Section */}
          <section id="kontak" className="py-20 bg-primary text-white">
            <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
              <h2 className="text-3xl md:text-4xl font-extrabold">Pesan Tiket Travel Banyuwangi Surabaya Anda</h2>
              <p className="mt-4 text-lg text-gray-200 max-w-2xl mx-auto">
                Amankan kursi Anda sekarang. Hubungi admin kami via WhatsApp untuk booking cepat dan informasi jadwal
                travel Banyuwangi Surabaya hari ini.
              </p>
              <a
                href="https://wa.me/6282143258744"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-10 inline-block bg-accent text-white px-10 py-3 rounded-lg font-bold text-lg shadow-lg hover:bg-opacity-90 transition-all transform hover:-translate-y-1"
              >
                Pesan Rute Surabaya via WA
              </a>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
}
