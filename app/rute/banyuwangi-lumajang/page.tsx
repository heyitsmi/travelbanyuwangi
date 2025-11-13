import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { StructuredData } from "../../components/SEO";
import { ArrowRight, Home, Mountain, ChevronDown } from "lucide-react";
import BookingForm from "../../components/BookingForm";

export const metadata: Metadata = {
  title: "Travel Banyuwangi Lumajang (PP) - Jadwal & Harga Terbaru | Juragan Travel",
  description:
    "Jadwal & harga travel Banyuwangi Lumajang (PP) terbaru. Layanan door-to-door, carter, dan drop-off. Berangkat setiap hari (pagi, malam). Harga mulai Rp 170.000.",
  keywords:
    "travel banyuwangi lumajang, travel lumajang banyuwangi, harga travel banyuwangi lumajang, jadwal travel banyuwangi lumajang, travel banyuwangi lumajang via jember, travel banyuwangi bromo",
  authors: [{ name: "Juragan Travel" }],
  openGraph: {
    title: "Travel Banyuwangi Lumajang (PP) - Jadwal & Harga Terbaru | Juragan Travel",
    description:
      "Jadwal & harga travel Banyuwangi Lumajang (PP) terbaru. Layanan door-to-door, carter, dan drop-off. Berangkat setiap hari. Harga mulai Rp 170.000.",
    type: "website",
    url: "https://juragantravel.com/rute/banyuwangi-lumajang",
    images: [
      {
        url: "https://juragantravel.com/img/hero.webp",
        width: 1200,
        height: 630,
      },
    ],
    siteName: "Juragan Travel",
  },
  twitter: {
    card: "summary_large_image",
    title: "Travel Banyuwangi Lumajang (PP) - Jadwal & Harga Terbaru | Juragan Travel",
    description:
      "Jadwal & harga travel Banyuwangi Lumajang (PP) terbaru. Layanan door-to-door, carter, dan drop-off. Berangkat setiap hari. Harga mulai Rp 170.000.",
    images: ["https://juragantravel.com/img/hero.webp"],
  },
  alternates: {
    canonical: "https://juragantravel.com/rute/banyuwangi-lumajang",
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
    name: "Area Lumajang (Door-to-door)",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Lumajang",
      addressRegion: "Jawa Timur",
      addressCountry: "ID",
    },
  },
  name: "Travel Banyuwangi - Lumajang (PP)",
  description:
    "Layanan travel door-to-door antara Banyuwangi dan Lumajang via Jember.",
  offers: {
    "@type": "Offer",
    price: "170000",
    priceCurrency: "IDR",
    name: "Harga Tiket Travel Banyuwangi Lumajang",
    description: "Harga dapat bervariasi. Hubungi admin untuk harga pasti.",
    url: "https://juragantravel.com/rute/banyuwangi-lumajang",
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
      name: "Banyuwangi - Lumajang",
      item: "https://juragantravel.com/rute/banyuwangi-lumajang",
    },
  ],
};

const schedules = [
  {
    route: "Banyuwangi → Lumajang",
    schedule: "Pagi (09:00), Malam (21:00)",
    price: "Rp 170.000",
  },
  {
    route: "Lumajang → Banyuwangi",
    schedule: "Pagi (09:00), Malam (21:00)",
    price: "Rp 170.000",
  },
  {
    route: "Carter Drop (Private) Banyuwangi ↔ Lumajang",
    schedule: "Fleksibel 24 Jam (Sesuai Pesanan)",
    price: "Rp 550.000",
  },
];

const benefits = [
  {
    icon: ArrowRight,
    title: "Rute Selatan via Jember",
    description: "Perjalanan nyaman via Jember, melintasi jalur selatan yang lancar.",
  },
  {
    icon: Home,
    title: "Door to Door",
    description: "Kami jemput di rumah Anda dan antar sampai alamat tujuan di area Kota Lumajang.",
  },
  {
    icon: Mountain,
    title: "Transit Bromo / Semeru",
    description: "Melayani antar-jemput di titik transit (hotel/basecamp) area Lumajang.",
  },
];

const faqs = [
  {
    question: "Berapa jam perjalanan travel Banyuwangi ke Lumajang?",
    answer:
      "Estimasi waktu tempuh normal adalah sekitar 4-5 jam, tergantung kondisi lalu lintas dan titik penjemputan/pengantaran.",
    defaultOpen: true,
  },
  {
    question: "Area penjemputan di Banyuwangi meliputi mana saja?",
    answer:
      "Kami melayani penjemputan di area Kota Banyuwangi, Rogojampi, Srono, Genteng, Jajag, dan Kalibaru. Untuk area di luar jalur utama, mungkin ada sedikit biaya tambahan.",
    defaultOpen: false,
  },
  {
    question: "Area pengantaran di Lumajang meliputi mana saja?",
    answer:
      "Kami melayani pengantaran ke seluruh area Kota Lumajang, Klakah, Sukodono, dan sekitarnya. Mohon konfirmasi alamat Anda ke admin saat memesan.",
    defaultOpen: false,
  },
  {
    question: "Berapa harga carter/private travel Banyuwangi ke Lumajang?",
    answer:
      "Harga carter (1 mobil Avanza/Xenia) untuk rute Banyuwangi ↔ Lumajang adalah mulai dari Rp 550.000,- (All-in: mobil, driver, bbm, tol). Harga bisa berbeda jika menggunakan unit Innova atau HiAce.",
    defaultOpen: false,
  },
];

export default function BanyuwangiLumajangPage() {
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
                <span className="text-dark font-medium">Banyuwangi - Lumajang</span>
              </nav>
              <h1 className="text-4xl md:text-5xl font-extrabold text-dark">Travel Banyuwangi - Lumajang (PP)</h1>
              <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
                Jadwal travel Banyuwangi Lumajang berangkat setiap hari. Layanan door-to-door, aman, dan nyaman via Jember.
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
                    alt="Armada travel Banyuwangi ke Lumajang"
                    fill
                    className="rounded-lg shadow-xl object-cover"
                  />
                </div>
                <div className="md:w-1/2">
                  <span className="text-primary font-semibold uppercase">RUTE TRANSIT SELATAN</span>
                  <h2 className="mt-2 text-3xl md:text-4xl font-extrabold text-dark">
                    Travel Banyuwangi ke Lumajang (PP)
                  </h2>
                  <p className="mt-4 text-lg text-gray-700 leading-relaxed">
                    Kami menyediakan layanan <strong>travel Banyuwangi ke Lumajang</strong> (dan sebaliknya) setiap hari. Rute ini melayani koridor selatan Jawa Timur, melewati Jember.
                  </p>
                  <p className="mt-4 text-lg text-gray-700 leading-relaxed">
                    Layanan door-to-door kami memastikan Anda dijemput di alamat Banyuwangi dan diantar langsung ke tujuan Anda di area Kota Lumajang, Klakah, atau titik transit lain menuju Bromo atau Semeru.
                  </p>
                </div>
              </div>

              {/* Jadwal & Harga */}
              <div className="bg-light p-8 md:p-12 rounded-lg shadow-lg mb-20">
                <div className="text-center">
                  <h2 className="text-3xl md:text-4xl font-extrabold text-dark">Jadwal & Harga Travel</h2>
                  <p className="mt-4 text-lg text-gray-600">
                    Jadwal fleksibel, harga pasti. Pesan kursi Anda sekarang!
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
                    Keunggulan Rute Travel Banyuwangi Lumajang
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
                  FAQ - Rute Banyuwangi Lumajang
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
                  Pesan Travel Banyuwangi - Lumajang
                </h2>
                <p className="mt-4 text-lg text-gray-600">
                  Isi formulir di bawah ini untuk pesan tiket travel dengan mudah dan cepat
                </p>
              </div>

              <BookingForm routeName="Banyuwangi → Lumajang" />
            </div>
          </section>

          {/* CTA Section */}
          <section id="kontak" className="py-20 bg-primary text-white">
            <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
              <h2 className="text-3xl md:text-4xl font-extrabold">Pesan Travel ke Lumajang Sekarang</h2>
              <p className="mt-4 text-lg text-gray-200 max-w-2xl mx-auto">
                Perjalanan nyaman via Jember. Amankan kursi Anda sekarang. Hubungi admin kami via WhatsApp untuk booking cepat.
              </p>
              <a
                href="https://wa.me/6282143258744"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-10 inline-block bg-accent text-white px-10 py-3 rounded-lg font-bold text-lg shadow-lg hover:bg-opacity-90 transition-all transform hover:-translate-y-1"
              >
                Pesan Rute Lumajang via WA
              </a>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
}
