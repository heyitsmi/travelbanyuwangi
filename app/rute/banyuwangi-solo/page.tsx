import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { StructuredData } from "../../components/SEO";
import { Zap, Home, Building2, ChevronDown } from "lucide-react";

export const metadata: Metadata = {
  title: "Travel Banyuwangi Solo (PP) - Jadwal & Harga Terbaru | travelbanyuwangi.id",
  description:
    "Jadwal & harga travel Banyuwangi Solo (PP) terbaru. Layanan door-to-door, armada nyaman via Tol Transjawa, berangkat setiap hari (pagi & malam). Pesan sekarang!",
  keywords:
    "travel banyuwangi solo, travel solo banyuwangi, harga travel banyuwangi solo, jadwal travel banyuwangi solo, travel banyuwangi jogja, travel banyuwangi surakarta",
  authors: [{ name: "travelbanyuwangi.id" }],
  openGraph: {
    title: "Travel Banyuwangi Solo (PP) - Jadwal & Harga Terbaru | travelbanyuwangi.id",
    description:
      "Jadwal & harga travel Banyuwangi Solo (PP) terbaru. Layanan door-to-door via Tol Transjawa, berangkat setiap hari.",
    type: "website",
    url: "https://travelbanyuwangi.id/rute/banyuwangi-solo",
    images: [
      {
        url: "https://placehold.co/1200x630/555555/FFFFFF?text=Travel+Banyuwangi+Solo",
        width: 1200,
        height: 630,
      },
    ],
    siteName: "travelbanyuwangi.id",
  },
  twitter: {
    card: "summary_large_image",
    title: "Travel Banyuwangi Solo (PP) - Jadwal & Harga Terbaru | travelbanyuwangi.id",
    description:
      "Jadwal & harga travel Banyuwangi Solo (PP) terbaru. Layanan door-to-door via Tol Transjawa, berangkat setiap hari.",
    images: ["https://placehold.co/1200x630/555555/FFFFFF?text=Travel+Banyuwangi+Solo"],
  },
  alternates: {
    canonical: "https://travelbanyuwangi.id/rute/banyuwangi-solo",
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
    image: "https://placehold.co/1200x630/0077B6/FFFFFF?text=travelbanyuwangi.id",
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
    name: "Area Solo (Door-to-door)",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Solo",
      addressRegion: "Jawa Tengah",
      addressCountry: "ID",
    },
  },
  name: "Travel Banyuwangi - Solo (PP)",
  description:
    "Layanan travel door-to-door antara Banyuwangi dan Solo (Surakarta), via Tol Transjawa dengan jadwal pagi dan malam.",
  offers: {
    "@type": "Offer",
    price: "250000",
    priceCurrency: "IDR",
    name: "Harga Tiket Travel Banyuwangi Solo",
    description: "Harga dapat bervariasi. Hubungi admin untuk harga pasti.",
    url: "https://travelbanyuwangi.id/rute/banyuwangi-solo",
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
      name: "Banyuwangi ↔ Solo",
      item: "https://travelbanyuwangi.id/rute/banyuwangi-solo",
    },
  ],
};

const schedules = [
  {
    route: "Banyuwangi → Solo",
    schedule: "Pagi (09:00), Malam (21:00)",
    price: "Rp 250.000",
  },
  {
    route: "Solo → Banyuwangi",
    schedule: "Pagi (09:00), Malam (21:00)",
    price: "Rp 250.000",
  },
  {
    route: "Banyuwangi → Jogja (via Solo)",
    schedule: "Pagi (09:00), Malam (21:00)",
    price: "Rp 270.000",
  },
];

const benefits = [
  {
    icon: Zap,
    title: "Cepat via Tol",
    description: "Perjalanan cepat dan nyaman via Tol Transjawa.",
  },
  {
    icon: Home,
    title: "Door to Door",
    description: "Kami jemput di rumah Anda (Banyuwangi) dan antar sampai alamat tujuan (Solo).",
  },
  {
    icon: Building2,
    title: "Support Jogja & Sekitarnya",
    description: "Melayani antar-jemput di area Kota Solo, Sragen, dan Jogja (penyesuaian).",
  },
];

const faqs = [
  {
    question: "Berapa jam perjalanan travel Banyuwangi ke Solo?",
    answer:
      "Estimasi waktu tempuh normal adalah sekitar 10-12 jam via tol Transjawa. Waktu ini sudah termasuk istirahat. Waktu bisa bervariasi tergantung kondisi lalu lintas dan titik penjemputan/pengantaran.",
    defaultOpen: true,
  },
  {
    question: "Area penjemputan di Banyuwangi meliputi mana saja?",
    answer:
      "Kami melayani penjemputan di area Kota Banyuwangi, Rogojampi, Srono, Genteng, Jajag, dan Kalibaru. Untuk area di luar jalur utama, mungkin ada sedikit biaya tambahan. Silakan konfirmasi alamat Anda ke admin.",
    defaultOpen: false,
  },
  {
    question: "Area pengantaran di Solo meliputi mana saja?",
    answer:
      "Kami melayani pengantaran ke seluruh area Kota Solo (Surakarta). Kami juga melayani pengantaran di area Sragen, Kartasura, dan Yogyakarta dengan sedikit penyesuaian.",
    defaultOpen: false,
  },
  {
    question: "Apakah ada jadwal travel Banyuwangi Solo malam?",
    answer:
      "Ya, kami memiliki jadwal malam sekitar pukul 21:00 WIB. Jadwal ini cocok bagi Anda yang ingin tiba di Solo pada pagi hari.",
    defaultOpen: false,
  },
];

export default function BanyuwangiSoloPage() {
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
                <span className="text-dark font-medium">Banyuwangi ↔ Solo</span>
              </nav>
              <h1 className="text-4xl md:text-5xl font-extrabold text-dark">Travel Banyuwangi ↔ Solo (PP)</h1>
              <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
                Jadwal travel Banyuwangi Solo berangkat setiap hari (pagi & malam). Layanan door-to-door, aman, nyaman
                via Tol Transjawa, melayani juga Jogja.
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
                    src="/img/rute/banyuwangi-solo.webp"
                    alt="Armada travel Banyuwangi Solo via Tol Transjawa"
                    fill
                    className="rounded-lg shadow-xl object-cover"
                  />
                </div>
                <div className="md:w-1/2">
                  <span className="text-primary font-semibold uppercase">RUTE JAWA TENGAH</span>
                  <h2 className="mt-2 text-3xl md:text-4xl font-extrabold text-dark">
                    Travel Banyuwangi Solo (via Tol Transjawa)
                  </h2>
                  <p className="mt-4 text-lg text-gray-700 leading-relaxed">
                    Kami melayani rute <strong>travel Banyuwangi Solo</strong> dan{" "}
                    <strong>travel Solo Banyuwangi</strong> setiap hari. Rute ini adalah pilihan tercepat menuju
                    Surakarta dan sekitarnya, dengan memanfaatkan <strong>Tol Transjawa</strong> secara penuh.
                  </p>
                  <p className="mt-4 text-lg text-gray-700 leading-relaxed">
                    Dengan armada yang nyaman dan driver profesional, kami memastikan perjalanan Anda via Surabaya,
                    Ngawi, dan Sragen tetap nyaman dan aman sampai tujuan. Kami juga melayani tujuan{" "}
                    <strong>Yogyakarta (Jogja)</strong> via Solo.
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
                    Keunggulan Rute Banyuwangi-Solo Kami
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
                  FAQ - Rute Banyuwangi Solo
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
              <h2 className="text-3xl md:text-4xl font-extrabold">Pesan Tiket Travel Banyuwangi Solo Anda</h2>
              <p className="mt-4 text-lg text-gray-200 max-w-2xl mx-auto">
                Amankan kursi Anda sekarang. Hubungi admin kami via WhatsApp untuk booking cepat dan informasi jadwal
                travel Banyuwangi Solo hari ini.
              </p>
              <a
                href="https://wa.me/6282143258744"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-10 inline-block bg-accent text-white px-10 py-3 rounded-lg font-bold text-lg shadow-lg hover:bg-opacity-90 transition-all transform hover:-translate-y-1"
              >
                Pesan Rute Solo via WA
              </a>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
}
