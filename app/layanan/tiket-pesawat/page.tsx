import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { StructuredData } from "../../components/SEO";
import {
  Plane,
  PlaneTakeoff,
  DollarSign,
  Smartphone,
  UserCheck,
  BadgeCheck,
  ClipboardCheck,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Agen Tiket Pesawat Banyuwangi (Domestik & Internasional) | travelbanyuwangi.id",
  description:
    "Cari tiket pesawat Banyuwangi? Kami agen resmi tiket pesawat domestik (Garuda, Citilink, Lion) & internasional. Pesan mudah via WA, harga resmi.",
  keywords:
    "tiket pesawat banyuwangi, agen tiket pesawat banyuwangi, harga tiket pesawat banyuwangi, pesan tiket pesawat banyuwangi, tiket pesawat banyuwangi jakarta, tiket pesawat banyuwangi surabaya, tiket pesawat bwx",
  authors: [{ name: "travelbanyuwangi.id" }],
  openGraph: {
    title: "Agen Tiket Pesawat Banyuwangi (Domestik & Internasional) | travelbanyuwangi.id",
    description: "Agen resmi tiket pesawat domestik & internasional dari Banyuwangi (BWX). Pesan mudah via WA.",
    type: "website",
    url: "https://travelbanyuwangi.id/layanan/tiket-pesawat",
    images: [
      {
        url: "https://placehold.co/1200x630/0077B6/FFFFFF?text=Tiket+Pesawat",
        width: 1200,
        height: 630,
      },
    ],
    siteName: "travelbanyuwangi.id",
  },
  twitter: {
    card: "summary_large_image",
    title: "Agen Tiket Pesawat Banyuwangi (Domestik & Internasional) | travelbanyuwangi.id",
    description: "Agen resmi tiket pesawat domestik & internasional dari Banyuwangi (BWX). Pesan mudah via WA.",
    images: ["https://placehold.co/1200x630/0077B6/FFFFFF?text=Tiket+Pesawat"],
  },
  alternates: {
    canonical: "https://travelbanyuwangi.id/layanan/tiket-pesawat",
  },
};

const serviceData = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Ticket",
  provider: {
    "@type": "TravelAgency",
    name: "travelbanyuwangi.id",
    url: "https://travelbanyuwangi.id/",
  },
  name: "Penjualan Tiket Pesawat Banyuwangi (Domestik & Internasional)",
  description:
    "Agen resmi penjualan tiket pesawat domestik (Garuda, Citilink, Lion Air, Super Air Jet) dan internasional dari Bandara Banyuwangi (BWX).",
  areaServed: [{ "@type": "City", name: "Banyuwangi" }],
  offers: {
    "@type": "Offer",
    name: "Tiket Pesawat Domestik & Internasional",
    category: "FlightTicket",
    priceCurrency: "IDR",
    description: "Harga tiket pesawat bervariasi tergantung maskapai, rute, dan tanggal. Hubungi untuk harga terbaru.",
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
      name: "Layanan",
      item: "https://travelbanyuwangi.id/layanan",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Tiket Pesawat",
      item: "https://travelbanyuwangi.id/layanan/tiket-pesawat",
    },
  ],
};

const airlines = [
  { name: "Garuda Indonesia", icon: Plane, color: "text-primary" },
  { name: "Citilink", icon: Plane, color: "text-primary" },
  { name: "Batik Air", icon: Plane, color: "text-primary" },
  { name: "Lion Air", icon: Plane, color: "text-accent" },
  { name: "Super Air Jet", icon: Plane, color: "text-accent" },
  { name: "Internasional", icon: PlaneTakeoff, color: "text-accent" },
];

const benefits = [
  {
    icon: DollarSign,
    title: "Harga Resmi",
    description: "Harga jujur, sama dengan harga resmi maskapai. Tanpa mark-up.",
  },
  {
    icon: Smartphone,
    title: "Proses Cepat via WA",
    description: "Pesan tanpa aplikasi. Cukup chat, bayar, e-ticket terkirim.",
  },
  {
    icon: PlaneTakeoff,
    title: "Semua Maskapai",
    description: "Akses ke semua maskapai domestik & internasional.",
  },
  {
    icon: UserCheck,
    title: "Admin Responsif",
    description: "Tim kami siap membantu mencarikan jadwal & harga terbaik.",
  },
  {
    icon: BadgeCheck,
    title: "Aman & Terpercaya",
    description: "Agen resmi. E-ticket Anda valid dan terjamin keamanannya.",
  },
  {
    icon: ClipboardCheck,
    title: "Bantu Online Check-in",
    description: "Kami bisa membantu proses online check-in Anda jika diminta.",
  },
];

export default function TiketPesawatPage() {
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
                <span className="text-dark font-medium">Tiket Pesawat</span>
              </nav>
              <h1 className="text-4xl md:text-5xl font-extrabold text-dark">Agen Tiket Pesawat Banyuwangi</h1>
              <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
                Pesan tiket pesawat domestik & internasional. Agen resmi, harga jujur, proses cepat via WhatsApp.
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
                    src="https://placehold.co/600x450/0077B6/FFFFFF?text=Tiket+Pesawat+Banyuwangi"
                    alt="Agen tiket pesawat Banyuwangi (BWX)"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="rounded-lg shadow-xl object-cover"
                  />
                </div>
                <div className="md:w-1/2">
                  <span className="text-primary font-semibold uppercase">HARGA RESMI, PROSES MUDAH</span>
                  <h2 className="mt-2 text-3xl md:text-4xl font-extrabold text-dark">
                    Cari Tiket Pesawat Murah Banyuwangi?
                  </h2>
                  <p className="mt-4 text-lg text-gray-700 leading-relaxed">
                    Kami adalah <strong>agen tiket pesawat Banyuwangi</strong> tepercaya yang siap membantu Anda. Tidak
                    perlu repot membandingkan harga di banyak aplikasi. Hubungi kami via WA, dan tim kami akan
                    mencarikan harga tiket pesawat terbaik untuk Anda.
                  </p>
                  <p className="mt-4 text-lg text-gray-700 leading-relaxed">
                    Kami melayani pemesanan <strong>tiket pesawat dari Banyuwangi (BWX)</strong> ke semua rute domestik
                    seperti Jakarta, Surabaya, dan Denpasar, serta rute internasional. Dapatkan e-ticket resmi langsung
                    di WhatsApp Anda.
                  </p>
                </div>
              </div>

              {/* Maskapai yang Dilayani */}
              <div className="mb-20">
                <div className="text-center">
                  <h2 className="text-3xl md:text-4xl font-extrabold text-dark">Melayani Semua Maskapai Populer</h2>
                  <p className="mt-4 text-lg text-gray-600">Rute domestik dan internasional, kami siap bantu.</p>
                </div>
                <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6">
                  {airlines.map((airline, index) => {
                    const IconComponent = airline.icon;
                    return (
                      <div
                        key={index}
                        className="bg-light p-6 rounded-lg shadow-md text-center group hover:bg-white hover:shadow-lg transition-all"
                      >
                        <IconComponent className={`w-12 h-12 ${airline.color} mx-auto`} />
                        <h3 className="mt-4 text-xl font-bold text-dark">{airline.name}</h3>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </section>

          {/* Keunggulan Layanan Section */}
          <section id="keunggulan" className="py-20 bg-light">
            <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              {/* Judul Section */}
              <div className="text-center">
                <h2 className="text-3xl md:text-4xl font-extrabold text-dark">Kenapa Beli Tiket Pesawat di Sini?</h2>
                <p className="mt-4 text-lg text-gray-600">Pelayanan personal, cepat, dan terpercaya.</p>
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
              <h2 className="text-3xl md:text-4xl font-extrabold">Cari Jadwal & Harga Tiket Pesawat</h2>
              <p className="mt-4 text-lg text-gray-200 max-w-2xl mx-auto">
                Rencanakan perjalanan Anda. Hubungi kami untuk mendapatkan penawaran harga{" "}
                <strong>tiket pesawat Banyuwangi</strong> terbaik hari ini.
              </p>
              <a
                href="https://wa.me/6282143258744"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-10 inline-block bg-accent text-white px-10 py-3 rounded-lg font-bold text-lg shadow-lg hover:bg-opacity-90 transition-all transform hover:-translate-y-1"
              >
                Tanya Harga Tiket via WA
              </a>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
}
