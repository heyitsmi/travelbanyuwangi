import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { StructuredData } from "../../components/SEO";
import {
  User,
  Bike,
  CarFront,
  Truck,
  Anchor,
  CalendarClock,
  Smartphone,
  BadgeCheck,
  Timer,
  DollarSign,
  ShieldCheck,
  CalendarCheck,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Agen Tiket Kapal Banyuwangi - Bali (Ketapang-Gilimanuk) | travelbanyuwangi.id",
  description:
    "Pesan tiket kapal Banyuwangi ke Bali (Ketapang - Gilimanuk) dengan mudah. Kami melayani tiket kapal laut online untuk penumpang, motor, dan mobil. Proses cepat via WA.",
  keywords:
    "tiket kapal banyuwangi bali, tiket kapal ketapang gilimanuk, tiket kapal online banyuwangi, harga tiket kapal banyuwangi bali, agen tiket kapal banyuwangi, tiket ferry banyuwangi bali",
  authors: [{ name: "travelbanyuwangi.id" }],
  openGraph: {
    title: "Agen Tiket Kapal Banyuwangi - Bali (Ketapang-Gilimanuk) | travelbanyuwangi.id",
    description:
      "Pesan tiket kapal ferry online rute Banyuwangi (Ketapang) - Bali (Gilimanuk). Layanan tiket penumpang, motor, & mobil.",
    type: "website",
    url: "https://travelbanyuwangi.id/layanan/tiket-kapal",
    images: [
      {
        url: "https://placehold.co/1200x630/0077B6/FFFFFF?text=Tiket+Kapal+Laut",
        width: 1200,
        height: 630,
      },
    ],
    siteName: "travelbanyuwangi.id",
  },
  twitter: {
    card: "summary_large_image",
    title: "Agen Tiket Kapal Banyuwangi - Bali (Ketapang-Gilimanuk) | travelbanyuwangi.id",
    description:
      "Pesan tiket kapal ferry online rute Banyuwangi (Ketapang) - Bali (Gilimanuk). Layanan tiket penumpang, motor, & mobil.",
    images: ["https://placehold.co/1200x630/0077B6/FFFFFF?text=Tiket+Kapal+Laut"],
  },
  alternates: {
    canonical: "https://travelbanyuwangi.id/layanan/tiket-kapal",
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
  name: "Penjualan Tiket Kapal Laut Banyuwangi - Bali (Ketapang-Gilimanuk)",
  description:
    "Agen resmi penjualan tiket kapal laut / ferry online untuk rute Banyuwangi (Ketapang) ke Bali (Gilimanuk) untuk penumpang, motor, dan mobil.",
  areaServed: [
    { "@type": "City", name: "Banyuwangi" },
    { "@type": "City", name: "Gilimanuk" },
  ],
  offers: {
    "@type": "Offer",
    name: "Tiket Kapal Penumpang & Kendaraan (Ketapang-Gilimanuk)",
    category: "FerryTicket",
    priceCurrency: "IDR",
    description: "Harga tiket kapal bervariasi tergantung jenis (penumpang/kendaraan). Hubungi untuk harga terbaru.",
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
      name: "Tiket Kapal Laut",
      item: "https://travelbanyuwangi.id/layanan/tiket-kapal",
    },
  ],
};

const ticketTypes = [
  {
    icon: User,
    title: "Tiket Penumpang",
    description: "Untuk perorangan (dewasa & anak).",
    color: "text-primary",
  },
  {
    icon: Bike,
    title: "Tiket Motor",
    description: "Kendaraan roda 2 (semua CC).",
    color: "text-primary",
  },
  {
    icon: CarFront,
    title: "Tiket Mobil Pribadi",
    description: "Kendaraan roda 4 (Sedan, SUV, MPV).",
    color: "text-primary",
  },
  {
    icon: Truck,
    title: "Tiket Truk & Bus",
    description: "Kendaraan besar/logistik (hubungi admin).",
    color: "text-accent",
  },
  {
    icon: Anchor,
    title: "Tiket Rute Lain",
    description: "Melayani rute lain (misal: Jawa-Sumatera).",
    color: "text-accent",
  },
  {
    icon: CalendarClock,
    title: "Cek Jadwal 24 Jam",
    description: "Informasi jadwal kapal terbaru 24 jam.",
    color: "text-accent",
  },
];

const benefits = [
  {
    icon: Smartphone,
    title: "Pesan Cepat via WA",
    description: "Tidak perlu download aplikasi, cukup chat admin kami.",
  },
  {
    icon: BadgeCheck,
    title: "Tiket Resmi (E-Ticket)",
    description: "Kami kirimkan e-ticket resmi yang valid untuk check-in.",
  },
  {
    icon: Timer,
    title: "Hindari Antrian",
    description: "Hemat waktu berharga Anda, tidak perlu antri di pelabuhan.",
  },
  {
    icon: DollarSign,
    title: "Harga Resmi",
    description: "Harga jujur sesuai tarif resmi, tanpa biaya tersembunyi.",
  },
  {
    icon: ShieldCheck,
    title: "Aman & Terpercaya",
    description: "Agen resmi. Pembayaran aman dan data Anda terjamin.",
  },
  {
    icon: CalendarCheck,
    title: "Bantu Cek Jadwal",
    description: "Bingung jadwal? Tim kami siap membantu cek jadwal terbaru.",
  },
];

export default function TiketKapalPage() {
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
                <span className="text-dark font-medium">Tiket Kapal Laut</span>
              </nav>
              <h1 className="text-4xl md:text-5xl font-extrabold text-dark">Agen Tiket Kapal Laut Banyuwangi</h1>
              <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
                Pesan tiket kapal Banyuwangi ke Bali (Ketapang - Gilimanuk) dengan mudah. Layanan tiket online untuk
                penumpang, motor, dan mobil.
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
                    src="https://placehold.co/600x450/0077B6/FFFFFF?text=Kapal+Ferry+Ketapang"
                    alt="Agen tiket kapal Banyuwangi Bali (Ketapang-Gilimanuk)"
                    fill
                    className="rounded-lg shadow-xl object-cover"
                  />
                </div>
                <div className="md:w-1/2">
                  <span className="text-primary font-semibold uppercase">MUDAH, CEPAT, TANPA ANTRI</span>
                  <h2 className="mt-2 text-3xl md:text-4xl font-extrabold text-dark">
                    Butuh Tiket Kapal Banyuwangi ke Bali?
                  </h2>
                  <p className="mt-4 text-lg text-gray-700 leading-relaxed">
                    Kami adalah <strong>agen tiket kapal Banyuwangi</strong> yang melayani pemesanan tiket ferry untuk
                    penyeberangan dari <strong>Pelabuhan Ketapang (Banyuwangi) ke Gilimanuk (Bali)</strong> dan
                    sebaliknya.
                  </p>
                  <p className="mt-4 text-lg text-gray-700 leading-relaxed">
                    Hindari antrian panjang di pelabuhan. Pesan <strong>tiket kapal online</strong> Anda melalui kami.
                    Proses cepat dan mudah via WhatsApp. Kami melayani tiket untuk penumpang, kendaraan roda 2 (motor),
                    dan kendaraan roda 4 (mobil pribadi/truk).
                  </p>
                </div>
              </div>

              {/* Layanan Tiket Kapal */}
              <div className="mb-20">
                <div className="text-center">
                  <h2 className="text-3xl md:text-4xl font-extrabold text-dark">
                    Melayani Semua Kebutuhan Tiket Kapal
                  </h2>
                  <p className="mt-4 text-lg text-gray-600">Tiket resmi untuk penumpang dan semua jenis kendaraan.</p>
                </div>
                <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                  {ticketTypes.map((ticket, index) => {
                    const IconComponent = ticket.icon;
                    return (
                      <div
                        key={index}
                        className="bg-light p-6 rounded-lg shadow-md text-center group hover:bg-white hover:shadow-lg transition-all"
                      >
                        <IconComponent className={`w-12 h-12 ${ticket.color} mx-auto`} />
                        <h3 className="mt-4 text-xl font-bold text-dark">{ticket.title}</h3>
                        <p className="text-gray-600">{ticket.description}</p>
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
                <h2 className="text-3xl md:text-4xl font-extrabold text-dark">Kenapa Pesan Tiket Kapal di Sini?</h2>
                <p className="mt-4 text-lg text-gray-600">Layanan cepat, resmi, dan mempermudah perjalanan Anda.</p>
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
              <h2 className="text-3xl md:text-4xl font-extrabold">Pesan Tiket Kapal Anda Sekarang</h2>
              <p className="mt-4 text-lg text-gray-200 max-w-2xl mx-auto">
                Jangan ambil risiko antri panjang di pelabuhan. Amankan{" "}
                <strong>tiket kapal Banyuwangi Bali</strong> Anda sekarang juga, baik untuk penumpang maupun kendaraan.
              </p>
              <a
                href="https://wa.me/6282143258744"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-10 inline-block bg-accent text-white px-10 py-3 rounded-lg font-bold text-lg shadow-lg hover:bg-opacity-90 transition-all transform hover:-translate-y-1"
              >
                Pesan Tiket Kapal via WA
              </a>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
}
