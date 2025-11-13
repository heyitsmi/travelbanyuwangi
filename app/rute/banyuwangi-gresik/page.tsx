import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { StructuredData } from "../../components/SEO";
import { Map, Home, Clock, ChevronDown } from "lucide-react";
import BookingForm from "../../components/BookingForm";

export const metadata: Metadata = {
  title: "Travel Banyuwangi Gresik (PP) - Jadwal & Harga Terbaru | Juragan Travel",
  description:
    "Jadwal & harga travel Banyuwangi Gresik (PP) terbaru. Layanan door-to-door, via tol, berangkat setiap hari. Harga mulai Rp 350.000. Pesan sekarang!",
  keywords:
    "travel banyuwangi gresik, travel gresik banyuwangi, harga travel banyuwangi gresik, jadwal travel banyuwangi gresik, travel banyuwangi gresik via tol, travel banyuwangi gresik pagi, travel banyuwangi gresik malam",
  authors: [{ name: "Juragan Travel" }],
  openGraph: {
    title: "Travel Banyuwangi Gresik (PP) - Jadwal & Harga Terbaru | Juragan Travel",
    description:
      "Jadwal & harga travel Banyuwangi Gresik (PP) terbaru. Layanan door-to-door, via tol, berangkat setiap hari. Harga mulai Rp 350.000.",
    type: "website",
    url: "https://juragantravel.com/rute/banyuwangi-gresik",
    images: [
      {
        url: "https://juragantravel.com/img/rute/banyuwangi-gresik.webp",
        width: 1200,
        height: 630,
      },
    ],
    siteName: "Juragan Travel",
  },
  twitter: {
    card: "summary_large_image",
    title: "Travel Banyuwangi Gresik (PP) - Jadwal & Harga Terbaru | Juragan Travel",
    description:
      "Jadwal & harga travel Banyuwangi Gresik (PP) terbaru. Layanan door-to-door, via tol, berangkat setiap hari. Harga mulai Rp 350.000.",
    images: ["https://juragantravel.com/img/rute/banyuwangi-gresik.webp"],
  },
  alternates: {
    canonical: "https://juragantravel.com/rute/banyuwangi-gresik",
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
    route: "Banyuwangi → Gresik",
    schedule: "Pagi (09:00), Siang (15:00), Malam (21:00)",
    price: "Rp 350.000",
  },
  {
    route: "Gresik → Banyuwangi",
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

export default function BanyuwangiGresikPage() {
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
                <span className="text-dark font-medium">Banyuwangi - Gresik</span>
              </nav>
              <h1 className="text-4xl md:text-5xl font-extrabold text-dark">Travel Banyuwangi - Gresik (PP)</h1>
              <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
                Jadwal travel Banyuwangi Gresik via tol berangkat setiap hari (pagi, siang, malam). Layanan
                door-to-door, aman, dan nyaman dengan harga mulai Rp 350.000.
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
                    alt="Armada travel Banyuwangi Gresik via tol"
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
              <a
                href="https://wa.me/6282143258744"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-10 inline-block bg-accent text-white px-10 py-3 rounded-lg font-bold text-lg shadow-lg hover:bg-opacity-90 transition-all transform hover:-translate-y-1"
              >
                Pesan Rute Gresik via WA
              </a>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
}
