import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { StructuredData } from "../../components/SEO";
import { Car, CarFront, BusFront, CarTaxiFront, Clock, UserCheck, ShieldCheck, CalendarDays, Receipt } from "lucide-react";

export const metadata: Metadata = {
  title: "Jasa Travel Perjalanan Dinas Banyuwangi | travelbanyuwangi.id",
  description:
    "Jasa travel dan sewa mobil (Innova, HiAce) untuk perjalanan dinas di Banyuwangi. Melayani instansi dan korporat dengan driver profesional, armada terawat, dan tepat waktu.",
  keywords:
    "jasa travel perjalanan dinas banyuwangi, sewa mobil dinas banyuwangi, carter mobil dinas banyuwangi, travel korporat banyuwangi, sewa mobil innova banyuwangi, sewa hiace banyuwangi",
  authors: [{ name: "travelbanyuwangi.id" }],
  openGraph: {
    title: "Jasa Travel Perjalanan Dinas Banyuwangi | travelbanyuwangi.id",
    description:
      "Layanan carter mobil dan travel untuk kebutuhan dinas instansi/korporat dari Banyuwangi. Profesional dan Tepat Waktu.",
    type: "website",
    url: "https://travelbanyuwangi.id/layanan/perjalanan-dinas",
    images: [
      {
        url: "https://placehold.co/1200x630/0077B6/FFFFFF?text=Perjalanan+Dinas",
        width: 1200,
        height: 630,
      },
    ],
    siteName: "travelbanyuwangi.id",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jasa Travel Perjalanan Dinas Banyuwangi | travelbanyuwangi.id",
    description:
      "Layanan carter mobil dan travel untuk kebutuhan dinas instansi/korporat dari Banyuwangi. Profesional dan Tepat Waktu.",
    images: ["https://placehold.co/1200x630/0077B6/FFFFFF?text=Perjalanan+Dinas"],
  },
  alternates: {
    canonical: "https://travelbanyuwangi.id/layanan/perjalanan-dinas",
  },
};

const serviceData = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "CarRental",
  provider: {
    "@type": "TravelAgency",
    name: "travelbanyuwangi.id",
    url: "https://travelbanyuwangi.id/",
  },
  name: "Jasa Travel & Carter Mobil Perjalanan Dinas Banyuwangi",
  description:
    "Layanan sewa mobil (Innova, HiAce, Elf) dengan sopir untuk perjalanan dinas, kunjungan kerja, dan kebutuhan korporat di Banyuwangi dan seluruh Jawa Bali.",
  areaServed: [
    { "@type": "City", name: "Banyuwangi" },
    { "@type": "AdministrativeArea", name: "Jawa Timur" },
    { "@type": "AdministrativeArea", name: "Bali" },
  ],
  offers: {
    "@type": "Offer",
    name: "Sewa Mobil + Driver untuk Perjalanan Dinas",
    category: "CarRental",
    priceCurrency: "IDR",
    description: "Harga harian, mingguan, atau per-trip. Hubungi untuk penawaran korporat.",
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
      name: "Perjalanan Dinas",
      item: "https://travelbanyuwangi.id/layanan/perjalanan-dinas",
    },
  ],
};

const vehicles = [
  {
    icon: Car,
    title: "Innova Reborn",
    description: "Kenyamanan eksekutif (Hingga 6 penumpang).",
  },
  {
    icon: CarFront,
    title: "HiAce Premio",
    description: "Kapasitas tim (Hingga 14 penumpang).",
  },
  {
    icon: BusFront,
    title: "Elf Giga / Long",
    description: "Rombongan besar (Hingga 19 penumpang).",
  },
  {
    icon: CarTaxiFront,
    title: "Avanza / Xenia",
    description: "Mobilitas harian (Hingga 6 penumpang).",
  },
];

const benefits = [
  {
    icon: Clock,
    title: "Tepat Waktu",
    description: "Kami memprioritaskan jadwal Anda. Penjemputan on-time adalah standar kami.",
  },
  {
    icon: UserCheck,
    title: "Driver Profesional",
    description: "Sopir kami berpengalaman, ramah, dan memahami etika layanan dinas.",
  },
  {
    icon: ShieldCheck,
    title: "Privasi Terjaga",
    description: "Kami menjamin kerahasiaan dan kenyamanan Anda selama di perjalanan.",
  },
  {
    icon: CalendarDays,
    title: "Jadwal Fleksibel",
    description: "Melayani carter harian, mingguan, bulanan, atau drop-off antar kota.",
  },
  {
    icon: CarFront,
    title: "Armada Prima",
    description: "Semua unit mobil dalam kondisi bersih, terawat, dan berasuransi.",
  },
  {
    icon: Receipt,
    title: "Administrasi Mudah",
    description: "Kami menyediakan invoice dan kwitansi resmi untuk kebutuhan SPJ instansi.",
  },
];

export default function PerjalananDinasPage() {
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
                <span className="text-dark font-medium">Perjalanan Dinas</span>
              </nav>
              <h1 className="text-4xl md:text-5xl font-extrabold text-dark">Layanan Travel Perjalanan Dinas</h1>
              <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
                Solusi transportasi profesional untuk instansi, korporat, dan kunjungan kerja di Banyuwangi.
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
                    src="https://placehold.co/600x450/0077B6/FFFFFF?text=Innova+Reborn+Dinas"
                    alt="Jasa travel perjalanan dinas Banyuwangi"
                    fill
                    className="rounded-lg shadow-xl object-cover"
                  />
                </div>
                <div className="md:w-1/2">
                  <span className="text-primary font-semibold uppercase">PROFESIONAL & TEPAT WAKTU</span>
                  <h2 className="mt-2 text-3xl md:text-4xl font-extrabold text-dark">
                    Jasa Travel Perjalanan Dinas Banyuwangi
                  </h2>
                  <p className="mt-4 text-lg text-gray-700 leading-relaxed">
                    Kami memahami bahwa perjalanan dinas membutuhkan ketepatan waktu, kenyamanan, dan privasi.{" "}
                    <strong>Jasa travel perjalanan dinas Banyuwangi</strong> dari kami dirancang khusus untuk memenuhi
                    kebutuhan instansi pemerintah, BUMN, dan perusahaan swasta.
                  </p>
                  <p className="mt-4 text-lg text-gray-700 leading-relaxed">
                    Kami menyediakan layanan <strong>carter mobil dinas Banyuwangi</strong> (sewa mobil + sopir) dengan
                    armada premium seperti Innova Reborn, HiAce Premio, dan Elf Long untuk memastikan mobilitas tim Anda
                    berjalan lancar, aman, dan profesional.
                  </p>
                </div>
              </div>

              {/* Pilihan Armada Dinas */}
              <div className="mb-20">
                <div className="text-center">
                  <h2 className="text-3xl md:text-4xl font-extrabold text-dark">Armada Pilihan untuk Dinas</h2>
                  <p className="mt-4 text-lg text-gray-600">Armada bersih, terawat, dan siap mendukung agenda Anda.</p>
                </div>
                <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                  {vehicles.map((vehicle, index) => {
                    const IconComponent = vehicle.icon;
                    return (
                      <div
                        key={index}
                        className="bg-light p-6 rounded-lg shadow-md text-center group hover:bg-white hover:shadow-lg transition-all"
                      >
                        <IconComponent className="w-12 h-12 text-primary mx-auto" />
                        <h3 className="mt-4 text-xl font-bold text-dark">{vehicle.title}</h3>
                        <p className="text-gray-600">{vehicle.description}</p>
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
                <h2 className="text-3xl md:text-4xl font-extrabold text-dark">
                  Mengapa Memilih Layanan Korporat Kami?
                </h2>
                <p className="mt-4 text-lg text-gray-600">Kami adalah mitra transportasi yang dapat diandalkan.</p>
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
              <h2 className="text-3xl md:text-4xl font-extrabold">Siap Mendukung Perjalanan Dinas Anda</h2>
              <p className="mt-4 text-lg text-gray-200 max-w-2xl mx-auto">
                Hubungi tim kami untuk mendapatkan penawaran harga korporat terbaik untuk{" "}
                <strong>jasa travel perjalanan dinas Banyuwangi</strong>. Kami siap menjadi mitra transportasi
                tepercaya Anda.
              </p>
              <a
                href="https://wa.me/628123456789"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-10 inline-block bg-accent text-white px-10 py-3 rounded-lg font-bold text-lg shadow-lg hover:bg-opacity-90 transition-all transform hover:-translate-y-1"
              >
                Hubungi Bagian Korporat
              </a>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
}
