import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { StructuredData } from "../../components/SEO";
import {
  PackageCheck,
  PlusCircle,
  Timer,
  ShieldCheck,
  Package,
  MapPin,
  DollarSign,
  Smartphone,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Pengiriman Paket Cepat Banyuwangi (Sehari Sampai) | travelbanyuwangi.id",
  description:
    "Layanan pengiriman paket cepat Banyuwangi ke Surabaya, Malang, Denpasar. Paket express sehari sampai (same day delivery). Aman, terpercaya, harga terjangkau.",
  keywords:
    "pengiriman paket cepat banyuwangi, paket express banyuwangi, kirim paket sehari sampai banyuwangi, travel paket banyuwangi surabaya, travel paket banyuwangi malang, travel paket banyuwangi denpasar",
  authors: [{ name: "travelbanyuwangi.id" }],
  openGraph: {
    title: "Pengiriman Paket Cepat Banyuwangi (Sehari Sampai) | travelbanyuwangi.id",
    description:
      "Layanan pengiriman paket express (same day) dari Banyuwangi ke Surabaya, Malang, Denpasar. Aman & terpercaya.",
    type: "website",
    url: "https://travelbanyuwangi.id/layanan/paket-express",
    images: [
      {
        url: "https://placehold.co/1200x630/F79E1B/FFFFFF?text=Paket+Express+Cepat",
        width: 1200,
        height: 630,
      },
    ],
    siteName: "travelbanyuwangi.id",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pengiriman Paket Cepat Banyuwangi (Sehari Sampai) | travelbanyuwangi.id",
    description:
      "Layanan pengiriman paket express (same day) dari Banyuwangi ke Surabaya, Malang, Denpasar. Aman & terpercaya.",
    images: ["https://placehold.co/1200x630/F79E1B/FFFFFF?text=Paket+Express+Cepat"],
  },
  alternates: {
    canonical: "https://travelbanyuwangi.id/layanan/paket-express",
  },
};

const serviceData = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "DeliveryService",
  provider: {
    "@type": "TravelAgency",
    name: "travelbanyuwangi.id",
    url: "https://travelbanyuwangi.id/",
  },
  name: "Pengiriman Paket Cepat Banyuwangi (Paket Express)",
  description:
    "Layanan pengiriman paket cepat (same day service) dari Banyuwangi ke Surabaya, Malang, Denpasar, dan sebaliknya via armada travel.",
  areaServed: [
    { "@type": "City", name: "Banyuwangi" },
    { "@type": "City", name: "Surabaya" },
    { "@type": "City", name: "Malang" },
    { "@type": "City", name: "Denpasar" },
    { "@type": "City", name: "Jember" },
  ],
  offers: {
    "@type": "Offer",
    name: "Pengiriman Paket Express (Same Day)",
    category: "Delivery",
    priceCurrency: "IDR",
    description: "Harga tergantung berat, ukuran, dan tujuan. Hubungi admin untuk penawaran.",
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
      name: "Paket Express",
      item: "https://travelbanyuwangi.id/layanan/paket-express",
    },
  ],
};

const routes = [
  {
    icon: PackageCheck,
    title: "Banyuwangi ↔ Surabaya",
    description: "Paket tiba di hari yang sama.",
    color: "text-primary",
  },
  {
    icon: PackageCheck,
    title: "Banyuwangi ↔ Malang",
    description: "Paket tiba di hari yang sama.",
    color: "text-primary",
  },
  {
    icon: PackageCheck,
    title: "Banyuwangi ↔ Denpasar",
    description: "Paket tiba di hari yang sama.",
    color: "text-primary",
  },
  {
    icon: PackageCheck,
    title: "Banyuwangi ↔ Jember",
    description: "Paket tiba di hari yang sama.",
    color: "text-primary",
  },
  {
    icon: PackageCheck,
    title: "Banyuwangi ↔ Solo",
    description: "Tiba esok hari (Next Day).",
    color: "text-primary",
  },
  {
    icon: PlusCircle,
    title: "Rute Lainnya",
    description: "Silakan tanyakan admin kami.",
    color: "text-secondary",
  },
];

const benefits = [
  {
    icon: Timer,
    title: "Sehari Sampai (Same Day)",
    description: "Paket tiba di hari yang sama untuk rute Surabaya, Malang, Denpasar.",
  },
  {
    icon: ShieldCheck,
    title: "Aman & Terpercaya",
    description: "Paket Anda dibawa langsung di armada, bukan via gudang sortir.",
  },
  {
    icon: Package,
    title: "Berbagai Jenis Barang",
    description: "Menerima dokumen, pakaian, oleh-oleh (non-ilegal & non-berbahaya).",
  },
  {
    icon: MapPin,
    title: "Fleksibel",
    description: "Bisa diantar ke alamat (door-to-door) atau ambil di agen (port-to-port).",
  },
  {
    icon: DollarSign,
    title: "Harga Terjangkau",
    description: "Lebih hemat dibanding kargo udara untuk pengiriman super cepat.",
  },
  {
    icon: Smartphone,
    title: "Booking Mudah",
    description: "Cukup foto barang dan kirim alamat via WhatsApp ke admin kami.",
  },
];

export default function PaketExpressPage() {
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
                <span className="text-dark font-medium">Paket Express</span>
              </nav>
              <h1 className="text-4xl md:text-5xl font-extrabold text-dark">Layanan Paket Express</h1>
              <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
                Pengiriman paket cepat Banyuwangi ke Surabaya, Malang, Denpasar, dan kota lain. Aman, cepat, dan bisa
                sehari sampai.
              </p>
            </div>
          </section>

          {/* Detail Paket Section */}
          <section id="detail-paket" className="py-20 bg-white">
            <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              {/* Deskripsi Paket */}
              <div className="flex flex-col md:flex-row items-center gap-12 mb-20">
                <div className="md:w-1/2 relative h-96 w-full">
                  <Image
                    src="https://placehold.co/600x450/F79E1B/FFFFFF?text=Paket+Express+Sehari+Sampai"
                    alt="Layanan pengiriman paket cepat Banyuwangi"
                    fill
                    className="rounded-lg shadow-xl object-cover"
                  />
                </div>
                <div className="md:w-1/2">
                  <span className="text-accent font-semibold uppercase">KIRIM BARANG SEHARI SAMPAI</span>
                  <h2 className="mt-2 text-3xl md:text-4xl font-extrabold text-dark">
                    Pengiriman Paket Cepat via Travel
                  </h2>
                  <p className="mt-4 text-lg text-gray-700 leading-relaxed">
                    Butuh kirim barang mendesak? Manfaatkan layanan <strong>pengiriman paket cepat Banyuwangi</strong>{" "}
                    kami. Kami menggunakan armada travel reguler kami (Banyuwangi-Surabaya, Banyuwangi-Malang, dll)
                    untuk mengirimkan paket Anda sehingga bisa tiba di hari yang sama (same day service).
                  </p>
                  <p className="mt-4 text-lg text-gray-700 leading-relaxed">
                    Layanan ini sangat cocok untuk dokumen penting, oleh-oleh, bahan makanan segar, atau barang
                    kebutuhan mendesak lainnya. Jauh lebih cepat dan aman dibanding jasa ekspedisi reguler.
                  </p>
                </div>
              </div>

              {/* Rute Pengiriman */}
              <div className="mb-20">
                <div className="text-center">
                  <h2 className="text-3xl md:text-4xl font-extrabold text-dark">Rute Pengiriman Utama</h2>
                  <p className="mt-4 text-lg text-gray-600">Kami melayani pengiriman ke semua rute travel reguler kami.</p>
                </div>
                <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                  {routes.map((route, index) => {
                    const IconComponent = route.icon;
                    return (
                      <div
                        key={index}
                        className="bg-light p-6 rounded-lg shadow-md text-center group hover:bg-white hover:shadow-lg transition-all"
                      >
                        <IconComponent className={`w-12 h-12 ${route.color} mx-auto`} />
                        <h3 className="mt-4 text-xl font-bold text-dark">{route.title}</h3>
                        <p className="text-gray-600">{route.description}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </section>

          {/* Keunggulan Section */}
          <section id="keunggulan" className="py-20 bg-light">
            <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              {/* Judul Section */}
              <div className="text-center">
                <h2 className="text-3xl md:text-4xl font-extrabold text-dark">Keunggulan Paket Express Kami</h2>
                <p className="mt-4 text-lg text-gray-600">Mengapa kirim paket via travelbanyuwangi.id?</p>
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
              <h2 className="text-3xl md:text-4xl font-extrabold">Kirim Paket Anda Sekarang!</h2>
              <p className="mt-4 text-lg text-gray-200 max-w-2xl mx-auto">
                Harga <strong>pengiriman paket cepat Banyuwangi</strong> kami ditentukan berdasarkan berat, ukuran
                (dimensi), dan kota tujuan. Hubungi kami untuk mendapatkan penawaran harga terbaik.
              </p>
              <a
                href="https://wa.me/628123456789"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-10 inline-block bg-accent text-white px-10 py-3 rounded-lg font-bold text-lg shadow-lg hover:bg-opacity-90 transition-all transform hover:-translate-y-1"
              >
                Cek Harga via WhatsApp
              </a>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
}
