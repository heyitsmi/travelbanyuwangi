import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { StructuredData } from "../../components/SEO";
import {
  Book,
  FilePlus2,
  Stamp,
  Briefcase,
  MoonStar,
  FileText,
  BadgeCheck,
  FileCheck2,
  ShieldCheck,
  Smartphone,
  Timer,
  DollarSign,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Jasa Pengurusan Visa & Paspor Banyuwangi | Juragan Travel",
  description:
    "Biro jasa pengurusan visa dan paspor di Banyuwangi. Layanan cepat & terpercaya untuk visa turis, visa umroh, paspor baru, dan perpanjangan paspor. Hubungi melalui formulir kontak.",
  keywords:
    "jasa pengurusan visa banyuwangi, jasa pembuatan paspor banyuwangi, biro jasa paspor banyuwangi, biro jasa visa banyuwangi, jasa visa turis banyuwangi, jasa visa umroh banyuwangi",
  authors: [{ name: "Juragan Travel" }],
  openGraph: {
    title: "Jasa Pengurusan Visa & Paspor Banyuwangi | Juragan Travel",
    description:
      "Layanan biro jasa cepat & terpercaya untuk pengurusan visa turis, visa umroh, paspor baru, dan perpanjangan paspor di Banyuwangi.",
    type: "website",
    url: "https://juragantravel.com/layanan/visa-paspor",
    images: [
      {
        url: "https://juragantravel.com/img/layanan/visa-paspor.webp",
        width: 1200,
        height: 630,
      },
    ],
    siteName: "Juragan Travel",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jasa Pengurusan Visa & Paspor Banyuwangi | Juragan Travel",
    description:
      "Layanan biro jasa cepat & terpercaya untuk pengurusan visa turis, visa umroh, paspor baru, dan perpanjangan paspor di Banyuwangi.",
    images: ["https://juragantravel.com/img/layanan/visa-paspor.webp"],
  },
  alternates: {
    canonical: "https://juragantravel.com/layanan/visa-paspor",
  },
};

const serviceData = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "GovernmentPermit",
  provider: {
    "@type": "TravelAgency",
    name: "Juragan Travel",
    url: "https://juragantravel.com/",
  },
  name: "Jasa Pengurusan Visa & Paspor Banyuwangi",
  description:
    "Layanan biro jasa untuk pembuatan paspor baru, perpanjangan paspor, dan pengurusan berbagai jenis visa, seperti visa turis, visa kerja, atau visa umroh di Banyuwangi.",
  areaServed: [{ "@type": "City", name: "Banyuwangi" }],
  offers: {
    "@type": "Offer",
    name: "Jasa Pengurusan Visa (Turis, Umroh, Kerja)",
    category: "VisaService",
  },
  additionalType: {
    "@type": "Offer",
    name: "Jasa Pengurusan Paspor (Baru & Perpanjang)",
    category: "PassportService",
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
      name: "Pengurusan Visa & Paspor",
      item: "https://juragantravel.com/layanan/visa-paspor",
    },
  ],
};

const documentServices = [
  {
    icon: Book,
    title: "Pengurusan Paspor Baru",
    description: "Pembuatan paspor baru (E-Paspor & Biasa).",
    color: "text-primary",
  },
  {
    icon: FilePlus2,
    title: "Perpanjangan Paspor",
    description: "Jasa perpanjang paspor habis masa berlaku.",
    color: "text-primary",
  },
  {
    icon: Stamp,
    title: "Jasa Visa Turis",
    description: "Pengurusan visa kunjungan/turis ke berbagai negara.",
    color: "text-primary",
  },
  {
    icon: Briefcase,
    title: "Jasa Visa Kerja",
    description: "Membantu pengurusan visa kerja (hubungi admin).",
    color: "text-accent",
  },
  {
    icon: MoonStar,
    title: "Visa Umroh & Haji",
    description: "Pengurusan visa khusus untuk ibadah.",
    color: "text-accent",
  },
  {
    icon: FileText,
    title: "Layanan Lain",
    description: "Dokumen perjalanan lainnya (KITAS, dll).",
    color: "text-accent",
  },
];

const benefits = [
  {
    icon: BadgeCheck,
    title: "Anti Ribet",
    description: "Serahkan semua proses birokrasi kepada kami. Hemat waktu.",
  },
  {
    icon: FileCheck2,
    title: "Kelengkapan Dokumen",
    description: "Kami bantu cek dan pastikan semua syarat dokumen lengkap.",
  },
  {
    icon: ShieldCheck,
    title: "Aman & Terpercaya",
    description: "Data dan dokumen Anda aman bersama kami. Proses transparan.",
  },
  {
    icon: Smartphone,
    title: "Konsultasi Gratis",
    description: "Tanya-tanya dulu melalui formulir kontak? Boleh. Kami siap bantu kebutuhan Anda.",
  },
  {
    icon: Timer,
    title: "Proses Cepat",
    description: "Kami bantu proses secepat mungkin sesuai prosedur resmi.",
  },
  {
    icon: DollarSign,
    title: "Biaya Jasa Wajar",
    description: "Biaya jasa yang transparan dan kompetitif. Jujur adalah prioritas.",
  },
];

export default function VisaPasporPage() {
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
                <span className="text-dark font-medium">Pengurusan Visa & Paspor</span>
              </nav>
              <h1 className="text-4xl md:text-5xl font-extrabold text-dark">Layanan Visa & Paspor</h1>
              <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
                Jasa pengurusan visa dan paspor di Banyuwangi. Cepat, mudah, aman, dan tanpa ribet.
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
                    src="/img/layanan/visa-paspor.webp"
                    alt="Biro jasa pengurusan visa Banyuwangi"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="rounded-lg shadow-xl object-cover"
                  />
                </div>
                <div className="md:w-1/2">
                  <span className="text-secondary font-semibold uppercase">ANTI RIBET & TERPERCAYA</span>
                  <h2 className="mt-2 text-3xl md:text-4xl font-extrabold text-dark">
                    Jasa Pengurusan Visa & Paspor Banyuwangi
                  </h2>
                  <p className="mt-4 text-lg text-gray-700 leading-relaxed">
                    Mengurus dokumen perjalanan bisa memakan waktu dan membingungkan. Kami hadir sebagai{" "}
                    <strong>biro jasa pengurusan visa Banyuwangi</strong> yang siap membantu Anda, mulai dari
                    persiapan dokumen, pendaftaran, hingga dokumen Anda selesai.
                  </p>
                  <p className="mt-4 text-lg text-gray-700 leading-relaxed">
                    Kami melayani <strong>jasa pembuatan paspor Banyuwangi</strong> (paspor baru dan perpanjangan)
                    serta pengurusan berbagai jenis visa, seperti visa turis, visa umroh, atau visa kerja ke berbagai
                    negara. Serahkan proses birokrasi kepada kami dan hemat waktu berharga Anda.
                  </p>
                </div>
              </div>

              {/* Layanan Dokumen */}
              <div className="mb-20">
                <div className="text-center">
                  <h2 className="text-3xl md:text-4xl font-extrabold text-dark">Layanan Dokumen Perjalanan Kami</h2>
                  <p className="mt-4 text-lg text-gray-600">Kami membantu mengurus berbagai dokumen penting Anda.</p>
                </div>
                <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                  {documentServices.map((service, index) => {
                    const IconComponent = service.icon;
                    return (
                      <div
                        key={index}
                        className="bg-light p-6 rounded-lg shadow-md text-center group hover:bg-white hover:shadow-lg transition-all"
                      >
                        <IconComponent className={`w-12 h-12 ${service.color} mx-auto`} />
                        <h3 className="mt-4 text-xl font-bold text-dark">{service.title}</h3>
                        <p className="text-gray-600">{service.description}</p>
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
                <h2 className="text-3xl md:text-4xl font-extrabold text-dark">Mengapa Mengurus Dokumen di Sini?</h2>
                <p className="mt-4 text-lg text-gray-600">Proses birokrasi yang rumit, kami buat jadi mudah.</p>
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
              <h2 className="text-3xl md:text-4xl font-extrabold">Mulai Pengurusan Dokumen Anda</h2>
              <p className="mt-4 text-lg text-gray-200 max-w-2xl mx-auto">
                Hindari kesalahan dokumen yang membuang waktu. Hubungi admin kami untuk konsultasi gratis mengenai
                kebutuhan <strong>jasa pengurusan visa Banyuwangi</strong> atau paspor Anda.
              </p>
              <a
                href="/kontak#contact-form"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-10 inline-block bg-accent text-white px-10 py-3 rounded-lg font-bold text-lg shadow-lg hover:bg-opacity-90 transition-all transform hover:-translate-y-1"
              >
                Konsultasi Visa/Paspor melalui formulir kontak
              </a>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
}
