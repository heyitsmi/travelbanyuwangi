import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { StructuredData } from "../../components/SEO";
import { Ship, Home, Plane, ChevronDown } from "lucide-react";

export const metadata: Metadata = {
  title: "Travel Banyuwangi Denpasar (PP) - Jadwal & Harga Terbaru | travelbanyuwangi.id",
  description:
    "Jadwal & harga travel Banyuwangi Denpasar (PP) terbaru. Layanan door-to-door, sudah termasuk tiket kapal, berangkat setiap hari (pagi, siang, malam). Pesan sekarang!",
  keywords:
    "travel banyuwangi denpasar, travel denpasar banyuwangi, harga travel banyuwangi denpasar, jadwal travel banyuwangi denpasar, travel banyuwangi ke bali, travel banyuwangi denpasar pagi, travel banyuwangi denpasar malam",
  authors: [{ name: "travelbanyuwangi.id" }],
  openGraph: {
    title: "Travel Banyuwangi Denpasar (PP) - Jadwal & Harga Terbaru | travelbanyuwangi.id",
    description:
      "Jadwal & harga travel Banyuwangi Denpasar (PP) terbaru. Layanan door-to-door, sudah termasuk tiket kapal.",
    type: "website",
    url: "https://travelbanyuwangi.id/rute/banyuwangi-denpasar",
    images: [
      {
        url: "/img/rute/banyuwangi-denpasar.webp",
        width: 1200,
        height: 630,
      },
    ],
    siteName: "travelbanyuwangi.id",
  },
  twitter: {
    card: "summary_large_image",
    title: "Travel Banyuwangi Denpasar (PP) - Jadwal & Harga Terbaru | travelbanyuwangi.id",
    description:
      "Jadwal & harga travel Banyuwangi Denpasar (PP) terbaru. Layanan door-to-door, sudah termasuk tiket kapal.",
    images: ["/img/rute/banyuwangi-denpasar.webp"],
  },
  alternates: {
    canonical: "https://travelbanyuwangi.id/rute/banyuwangi-denpasar",
  },
};

const busTripData = {
  "@context": "https://schema.org",
  "@type": "BusTrip",
  provider: {
    "@type": "TravelAgency",
    name: "travelbanyuwangi.id",
    url: "https://travelbanyuwangi.id/",
    telephone: "+6282143258744",
    image: "/img/hero.webp",
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
    name: "Area Denpasar (Door-to-door)",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Denpasar",
      addressRegion: "Bali",
      addressCountry: "ID",
    },
  },
  name: "Travel Banyuwangi - Denpasar (PP)",
  description:
    "Layanan travel door-to-door antara Banyuwangi dan Denpasar (Bali) dengan jadwal pagi, siang, dan malam.",
  offers: {
    "@type": "Offer",
    price: "160000",
    priceCurrency: "IDR",
    name: "Harga Tiket Travel Banyuwangi Denpasar",
    description: "Harga dapat bervariasi. Hubungi admin untuk harga pasti.",
    url: "https://travelbanyuwangi.id/rute/banyuwangi-denpasar",
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
      item: "https://travelbanyuwangi.id/",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Rute",
      item: "https://travelbanyuwangi.id/rute",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Banyuwangi ↔ Denpasar",
      item: "https://travelbanyuwangi.id/rute/banyuwangi-denpasar",
    },
  ],
};

const schedules = [
  {
    route: "Banyuwangi → Denpasar",
    schedule: "Pagi (09:00), Siang (15:00), Malam (21:00)",
    price: "Rp 160.000",
  },
  {
    route: "Denpasar → Banyuwangi",
    schedule: "Pagi (09:00), Siang (15:00), Malam (21:00)",
    price: "Rp 160.000",
  },
  {
    route: "Banyuwangi → Kuta / Jimbaran",
    schedule: "Hubungi Admin (Menyesuaikan Jadwal)",
    price: "Rp 170.000",
  },
];

const benefits = [
  {
    icon: Ship,
    title: "Termasuk Tiket Kapal",
    description: "Harga travel sudah termasuk tiket kapal ferry Ketapang-Gilimanuk.",
  },
  {
    icon: Home,
    title: "Door to Door",
    description: "Kami jemput di rumah Anda (Banyuwangi) dan antar sampai alamat tujuan (Denpasar).",
  },
  {
    icon: Plane,
    title: "Support Bandara Ngurah Rai",
    description: "Melayani antar-jemput di Bandara Internasional I Gusti Ngurah Rai.",
  },
];

const faqs = [
  {
    question: "Berapa jam perjalanan travel Banyuwangi ke Denpasar?",
    answer:
      "Estimasi waktu tempuh normal adalah sekitar 5-6 jam. Waktu ini sudah termasuk penyeberangan kapal ferry (1 jam) dan 1x istirahat. Waktu bisa bervariasi tergantung kondisi lalu lintas dan antrian kapal.",
    defaultOpen: true,
  },
  {
    question: "Area penjemputan di Banyuwangi meliputi mana saja?",
    answer:
      "Kami melayani penjemputan di area Kota Banyuwangi, Rogojampi, Srono, Genteng, Jajag, dan Kalibaru. Untuk area di luar jalur utama, mungkin ada sedikit biaya tambahan. Silakan konfirmasi alamat Anda ke admin.",
    defaultOpen: false,
  },
  {
    question: "Area pengantaran di Denpasar meliputi mana saja?",
    answer:
      "Kami melayani pengantaran ke seluruh area Denpasar Kota (Renon, Teuku Umar), Sanur, Kuta, Jimbaran, dan Bandara Ngurah Rai. Untuk area seperti Ubud atau Canggu, mohon konfirmasi terlebih dahulu ke admin.",
    defaultOpen: false,
  },
  {
    question: "Apakah ada jadwal travel Banyuwangi Denpasar malam?",
    answer:
      "Ya, kami memiliki jadwal malam sekitar pukul 21:00 WIB. Jadwal ini cocok bagi Anda yang ingin tiba di Denpasar pada pagi hari.",
    defaultOpen: false,
  },
];

export default function BanyuwangiDenpasarPage() {
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
                <span className="text-dark font-medium">Banyuwangi ↔ Denpasar</span>
              </nav>
              <h1 className="text-4xl md:text-5xl font-extrabold text-dark">Travel Banyuwangi ↔ Denpasar (PP)</h1>
              <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
                Jadwal travel Banyuwangi Denpasar berangkat setiap hari (pagi, siang, malam). Layanan door-to-door,
                aman, nyaman, sudah termasuk tiket kapal.
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
                    src="/img/rute/banyuwangi-denpasar.webp"
                    alt="Armada travel Banyuwangi Denpasar nyaman ke Bali"
                    fill
                    className="rounded-lg shadow-xl object-cover"
                  />
                </div>
                <div className="md:w-1/2">
                  <span className="text-primary font-semibold uppercase">RUTE PULAU BALI</span>
                  <h2 className="mt-2 text-3xl md:text-4xl font-extrabold text-dark">
                    Travel Banyuwangi Denpasar (Kuta, Jimbaran)
                  </h2>
                  <p className="mt-4 text-lg text-gray-700 leading-relaxed">
                    Kami melayani <strong>travel Banyuwangi Denpasar</strong> dan{" "}
                    <strong>travel Denpasar Banyuwangi</strong> setiap hari. Rute ini adalah andalan kami untuk
                    menghubungkan Jawa dan Bali dengan layanan travel yang praktis.
                  </p>
                  <p className="mt-4 text-lg text-gray-700 leading-relaxed">
                    Harga sudah <strong>termasuk tiket kapal ferry</strong> Ketapang-Gilimanuk. Kami juga melayani
                    pengantaran ke area populer seperti <strong>Kuta, Sanur, Jimbaran,</strong> dan{" "}
                    <strong>Bandara Ngurah Rai</strong> dengan penyesuaian.
                  </p>
                </div>
              </div>

              {/* Jadwal & Harga */}
              <div className="bg-light p-8 md:p-12 rounded-lg shadow-lg mb-20">
                <div className="text-center">
                  <h2 className="text-3xl md:text-4xl font-extrabold text-dark">Jadwal & Harga Travel</h2>
                  <p className="mt-4 text-lg text-gray-600">Jadwal pasti, harga terjangkau. Pesan kursi Anda sekarang!</p>
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
                    Keunggulan Rute Banyuwangi-Denpasar Kami
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
                  FAQ - Rute Banyuwangi Denpasar
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

          {/* CTA Section */}
          <section id="kontak" className="py-20 bg-primary text-white">
            <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
              <h2 className="text-3xl md:text-4xl font-extrabold">Pesan Tiket Travel Banyuwangi Denpasar Anda</h2>
              <p className="mt-4 text-lg text-gray-200 max-w-2xl mx-auto">
                Amankan kursi Anda sekarang. Hubungi admin kami via WhatsApp untuk booking cepat dan informasi jadwal
                travel Banyuwangi Denpasar hari ini.
              </p>
              <a
                href="https://wa.me/6282143258744"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-10 inline-block bg-accent text-white px-10 py-3 rounded-lg font-bold text-lg shadow-lg hover:bg-opacity-90 transition-all transform hover:-translate-y-1"
              >
                Pesan Rute Denpasar via WA
              </a>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
}
