import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { StructuredData } from "../../components/SEO";
import {
  BusFront,
  BadgeCheck,
  Smartphone,
  DollarSign,
  CalendarCheck,
  Armchair,
  Bus,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Agen Tiket Bus Executive Banyuwangi (Semua Tujuan) | Juragan Travel",
  description:
    "Jual tiket bus executive dari Banyuwangi ke Surabaya, Malang, Denpasar, Jakarta, Bandung. Agen resmi tiket bus malam Banyuwangi. Pesan online via WA.",
  keywords:
    "tiket bus banyuwangi, agen tiket bus banyuwangi, tiket bus executive banyuwangi, tiket bus malam banyuwangi, tiket bus banyuwangi surabaya, tiket bus banyuwangi denpasar, tiket bus banyuwangi jakarta",
  authors: [{ name: "Juragan Travel" }],
  openGraph: {
    title: "Agen Tiket Bus Executive Banyuwangi (Semua Tujuan) | Juragan Travel",
    description:
      "Agen resmi tiket bus executive & malam dari Banyuwangi ke semua tujuan di Jawa & Bali. Pesan mudah via WA.",
    type: "website",
    url: "https://juragantravel.com/layanan/tiket-bus",
    images: [
      {
        url: "/img/layanan/tiket-bus.webp",
        width: 1200,
        height: 630,
      },
    ],
    siteName: "Juragan Travel",
  },
  twitter: {
    card: "summary_large_image",
    title: "Agen Tiket Bus Executive Banyuwangi (Semua Tujuan) | Juragan Travel",
    description:
      "Agen resmi tiket bus executive & malam dari Banyuwangi ke semua tujuan di Jawa & Bali. Pesan mudah via WA.",
    images: ["/img/layanan/tiket-bus.webp"],
  },
  alternates: {
    canonical: "https://juragantravel.com/layanan/tiket-bus",
  },
};

const serviceData = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Ticket",
  provider: {
    "@type": "TravelAgency",
    name: "Juragan Travel",
    url: "https://juragantravel.com/",
  },
  name: "Penjualan Tiket Bus Executive Banyuwangi",
  description:
    "Agen resmi penjualan tiket bus executive dan bus malam dari Banyuwangi ke semua tujuan di Jawa dan Bali, termasuk Surabaya, Malang, Denpasar, Jakarta, Bandung.",
  areaServed: [{ "@type": "City", name: "Banyuwangi" }],
  offers: {
    "@type": "Offer",
    name: "Tiket Bus Executive (Semua PO)",
    category: "Ticket",
    priceCurrency: "IDR",
    description: "Harga tiket bus bervariasi tergantung PO dan tujuan. Hubungi untuk info jadwal dan harga terbaru.",
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
      name: "Layanan",
      item: "https://juragantravel.com/layanan",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Tiket Bus Executive",
      item: "https://juragantravel.com/layanan/tiket-bus",
    },
  ],
};

const routes = [
  {
    title: "Banyuwangi - Surabaya",
    description: "Jadwal pagi, siang, dan malam.",
    color: "text-primary",
  },
  {
    title: "Banyuwangi - Malang",
    description: "Berbagai pilihan PO.",
    color: "text-primary",
  },
  {
    title: "Banyuwangi - Denpasar",
    description: "Kelas executive nyaman.",
    color: "text-primary",
  },
  {
    title: "Banyuwangi - Yogyakarta/Solo",
    description: "Perjalanan lintas Jawa.",
    color: "text-accent",
  },
  {
    title: "Banyuwangi - Jakarta",
    description: "Bus malam executive / sleeper.",
    color: "text-accent",
  },
  {
    title: "Banyuwangi - Bandung",
    description: "Tersedia via rute utara & selatan.",
    color: "text-accent",
  },
];

const benefits = [
  {
    icon: BadgeCheck,
    title: "Agen Resmi",
    description: "Kami agen resmi dari puluhan PO bus ternama di Indonesia.",
  },
  {
    icon: Smartphone,
    title: "Proses Cepat via WA",
    description: "Tidak perlu aplikasi. Pesan, bayar, e-ticket dikirim via WhatsApp.",
  },
  {
    icon: DollarSign,
    title: "Harga Resmi (Jujur)",
    description: "Kami memberikan harga resmi dari PO, tanpa biaya tersembunyi.",
  },
  {
    icon: CalendarCheck,
    title: "Jadwal Lengkap",
    description: "Tersedia pilihan jadwal lengkap, dari pagi, siang, hingga malam.",
  },
  {
    icon: Armchair,
    title: "Pasti Dapat Kursi",
    description: "Amankan kursi Anda, terutama saat musim liburan, jauh-jauh hari.",
  },
  {
    icon: Bus,
    title: "Banyak Pilihan PO",
    description: "Akses ke PO. Lorena, Rosalia Indah, Gunung Harta, Pahala Kencana, dll.",
  },
];

export default function TiketBusPage() {
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
                <span className="text-dark font-medium">Tiket Bus Executive</span>
              </nav>
              <h1 className="text-4xl md:text-5xl font-extrabold text-dark">Agen Tiket Bus Executive Banyuwangi</h1>
              <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
                Pesan tiket bus malam dan executive dari Banyuwangi ke semua tujuan. Agen resmi, proses mudah via
                WhatsApp.
              </p>
            </div>
          </section>

          {/* Detail Layanan Section */}
          <section id="detail-layanan" className="py-20 bg-white">
            <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              {/* Deskripsi Layanan */}
              <div className="flex flex-col md:flex-row items-center gap-12 mb-20">
                <div className="md:w-1/2 relative h-96 w-full">
                  <Image
                    src="/img/layanan/tiket-bus.webp"
                    alt="Agen tiket bus executive Banyuwangi"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="rounded-lg shadow-xl object-cover"
                  />
                </div>
                <div className="md:w-1/2">
                  <span className="text-primary font-semibold uppercase">PESAN ONLINE, PROSES CEPAT</span>
                  <h2 className="mt-2 text-3xl md:text-4xl font-extrabold text-dark">
                    Jual Tiket Bus Banyuwangi ke Semua Tujuan
                  </h2>
                  <p className="mt-4 text-lg text-gray-700 leading-relaxed">
                    Kami adalah <strong>agen tiket bus Banyuwangi</strong> resmi yang melayani pemesanan tiket untuk
                    berbagai Perusahaan Otobus (PO) ternama. Dapatkan kemudahan memesan{" "}
                    <strong>tiket bus executive Banyuwangi</strong> dan <strong>tiket bus malam Banyuwangi</strong>{" "}
                    tanpa harus antri di terminal.
                  </p>
                  <p className="mt-4 text-lg text-gray-700 leading-relaxed">
                    Cukup hubungi kami via WhatsApp, informasikan rute dan tanggal, dan kami akan bantu carikan jadwal
                    dan kursi terbaik untuk Anda. Kami melayani semua rute populer dari Banyuwangi ke Jawa dan Bali.
                  </p>
                </div>
              </div>

              {/* Rute Bus Populer */}
              <div className="mb-20">
                <div className="text-center">
                  <h2 className="text-3xl md:text-4xl font-extrabold text-dark">Rute Bus Populer dari Banyuwangi</h2>
                  <p className="mt-4 text-lg text-gray-600">Melayani kelas Executive, Patas AC, dan Suite Class.</p>
                </div>
                <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                  {routes.map((route, index) => (
                    <div
                      key={index}
                      className="bg-light p-6 rounded-lg shadow-md text-center group hover:bg-white hover:shadow-lg transition-all"
                    >
                      <BusFront className={`w-12 h-12 ${route.color} mx-auto`} />
                      <h3 className="mt-4 text-xl font-bold text-dark">{route.title}</h3>
                      <p className="text-gray-600">{route.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Keunggulan Layanan Section */}
          <section id="keunggulan" className="py-20 bg-light">
            <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              {/* Judul Section */}
              <div className="text-center">
                <h2 className="text-3xl md:text-4xl font-extrabold text-dark">Kemudahan Memesan Tiket di Sini</h2>
                <p className="mt-4 text-lg text-gray-600">Kami adalah mitra terpercaya perjalanan Anda.</p>
              </div>

              {/* Grid Keunggulan */}
              <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
                {benefits.map((benefit, index) => {
                  const IconComponent = benefit.icon;
                  return (
                    <div key={index} className="bg-white p-6 rounded-lg shadow-lg flex items-center space-x-4">
                      <IconComponent className="w-10 h-10 text-secondary shrink-0" />
                      <div>
                        <h3 className="text-xl font-bold text-dark">{benefit.title}</h3>
                        <p className="text-gray-600">{benefit.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section id="kontak" className="py-20 bg-primary text-white">
            <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
              <h2 className="text-3xl md:text-4xl font-extrabold">Cek Jadwal & Pesan Tiket Bus Anda</h2>
              <p className="mt-4 text-lg text-gray-200 max-w-2xl mx-auto">
                Jangan sampai kehabisan tiket! Hubungi admin kami sekarang untuk menanyakan jadwal, harga, dan
                ketersediaan kursi untuk <strong>tiket bus Banyuwangi</strong>.
              </p>
              <a
                href="https://wa.me/6282143258744"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-10 inline-block bg-accent text-white px-10 py-3 rounded-lg font-bold text-lg shadow-lg hover:bg-opacity-90 transition-all transform hover:-translate-y-1"
              >
                Tanya Jadwal via WhatsApp
              </a>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
}
