import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { StructuredData } from "../components/SEO";
import { ChevronDown } from "lucide-react";

export const metadata: Metadata = {
  title: "Rute Travel Populer dari Banyuwangi | Juragan Travel",
  description:
    "Daftar rute travel populer dari Banyuwangi ke Surabaya, Malang, Denpasar, Solo, Tulungagung, dan kota lain di Jawa Bali. Berangkat setiap hari.",
  keywords:
    "rute travel banyuwangi, travel banyuwangi surabaya, travel banyuwangi malang, travel banyuwangi denpasar, travel banyuwangi solo, travel banyuwangi tulungagung",
  authors: [{ name: "Juragan Travel" }],
  openGraph: {
    title: "Rute Travel Populer dari Banyuwangi | Juragan Travel",
    description:
      "Daftar rute travel populer dari Banyuwangi ke Surabaya, Malang, Denpasar, Solo, Tulungagung, dan kota lain di Jawa Bali.",
    type: "website",
    url: "https://juragantravel.com/rute",
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
    title: "Rute Travel Populer dari Banyuwangi | Juragan Travel",
    description:
      "Daftar rute travel populer dari Banyuwangi ke Surabaya, Malang, Denpasar, Solo, Tulungagung, dan kota lain di Jawa Bali.",
    images: ["https://juragantravel.com/img/hero.webp"],
  },
  alternates: {
    canonical: "https://juragantravel.com/rute",
  },
};

const itemListData = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Rute Travel Populer Juragan Travel",
  description: "Daftar rute perjalanan travel antar kota populer dari Banyuwangi.",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      item: {
        "@type": "Service",
        name: "Travel Banyuwangi - Surabaya",
        url: "https://juragantravel.com/rute/banyuwangi-surabaya",
      },
    },
    {
      "@type": "ListItem",
      position: 2,
      item: {
        "@type": "Service",
        name: "Travel Banyuwangi - Bandara Juanda",
        url: "https://juragantravel.com/rute/banyuwangi-juanda",
      },
    },
    {
      "@type": "ListItem",
      position: 3,
      item: {
        "@type": "Service",
        name: "Travel Banyuwangi - Bandara Ngurah Rai",
        url: "https://juragantravel.com/rute/banyuwangi-ngurah-rai",
      },
    },
    {
      "@type": "ListItem",
      position: 4,
      item: {
        "@type": "Service",
        name: "Travel Banyuwangi - Pelabuhan Tanjung Perak",
        url: "https://juragantravel.com/rute/banyuwangi-tanjung-perak",
      },
    },
    {
      "@type": "ListItem",
      position: 5,
      item: {
        "@type": "Service",
        name: "Travel Banyuwangi - Malang",
        url: "https://juragantravel.com/rute/banyuwangi-malang",
      },
    },
    {
      "@type": "ListItem",
      position: 6,
      item: {
        "@type": "Service",
        name: "Travel Banyuwangi - Denpasar",
        url: "https://juragantravel.com/rute/banyuwangi-denpasar",
      },
    },
    {
      "@type": "ListItem",
      position: 7,
      item: {
        "@type": "Service",
        name: "Travel Banyuwangi - Solo",
        url: "https://juragantravel.com/rute/banyuwangi-solo",
      },
    },
    {
      "@type": "ListItem",
      position: 8,
      item: {
        "@type": "Service",
        name: "Travel Banyuwangi - Tulungagung",
        url: "https://juragantravel.com/rute/banyuwangi-tulungagung",
      },
    },
    {
      "@type": "ListItem",
      position: 9,
      item: {
        "@type": "Service",
        name: "Travel Banyuwangi - Sidoarjo",
        url: "https://juragantravel.com/rute/banyuwangi-sidoarjo",
      },
    },
    {
      "@type": "ListItem",
      position: 10,
      item: {
        "@type": "Service",
        name: "Travel Banyuwangi - Gresik",
        url: "https://juragantravel.com/rute/banyuwangi-gresik",
      },
    },
    {
      "@type": "ListItem",
      position: 11,
      item: {
        "@type": "Service",
        name: "Travel Banyuwangi - Pasuruan",
        url: "https://juragantravel.com/rute/banyuwangi-pasuruan",
      },
    },
    {
      "@type": "ListItem",
      position: 12,
      item: {
        "@type": "Service",
        name: "Travel Banyuwangi - Jember",
        url: "https://juragantravel.com/rute/banyuwangi-jember",
      },
    },
  ],
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
      name: "Rute Perjalanan",
      item: "https://juragantravel.com/rute",
    },
  ],
};

const faqData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Rute mana yang paling populer dari Banyuwangi?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Rute paling populer dari Banyuwangi adalah ke Surabaya, Malang, dan Denpasar. Ketiga rute ini memiliki jadwal keberangkatan setiap hari dengan beberapa waktu keberangkatan yang bisa dipilih sesuai kebutuhan Anda.",
      },
    },
    {
      "@type": "Question",
      name: "Berapa lama perjalanan dari Banyuwangi ke Surabaya?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Perjalanan dari Banyuwangi ke Surabaya memakan waktu sekitar 5-6 jam via tol Gempol-Pasuruan-Probolinggo-Banyuwangi (GEPPRO). Waktu tempuh bisa bervariasi tergantung kondisi lalu lintas dan titik penjemputan/pengantaran Anda.",
      },
    },
    {
      "@type": "Question",
      name: "Apakah tersedia layanan travel ke bandara?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ya, kami menyediakan layanan khusus ke Bandara Juanda (Surabaya) dan Bandara Ngurah Rai (Bali). Layanan ini sudah termasuk estimasi waktu tunggu untuk memastikan Anda tiba tepat waktu sesuai jadwal penerbangan.",
      },
    },
    {
      "@type": "Question",
      name: "Bagaimana jika rute tujuan saya tidak ada di daftar?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Jika rute tujuan Anda tidak ada di daftar rute reguler kami, silakan hubungi admin melalui WhatsApp. Kami melayani layanan carter mobil dan drop off ke seluruh tujuan di Jawa dan Bali dengan harga yang kompetitif.",
      },
    },
    {
      "@type": "Question",
      name: "Apakah bisa dijemput dan diantar langsung ke alamat tujuan?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ya, semua layanan travel kami menggunakan sistem door-to-door. Kami akan menjemput Anda di alamat yang Anda tentukan dan mengantar langsung ke alamat tujuan, selama masih dalam area jangkauan rute yang dipilih.",
      },
    },
  ],
};

const routes = [
  {
    title: "Banyuwangi - Surabaya",
    description: "Perjalanan nyaman via tol, dijemput di rumah dan diantar sampai tujuan.",
    image: "/img/rute/banyuwangi-surabaya.webp",
    alt: "Rute travel Banyuwangi ke Surabaya",
    link: "/rute/banyuwangi-surabaya",
  },
  {
    title: "Banyuwangi - Bandara Juanda",
    description: "Layanan khusus bandara, tepat waktu untuk jadwal penerbangan Anda.",
    image: "/img/armada.webp",
    alt: "Rute travel Banyuwangi ke Bandara Juanda",
    link: "/rute/banyuwangi-juanda",
  },
  {
    title: "Banyuwangi - Bandara Ngurah Rai",
    description: "Layanan ke Bandara Bali, sudah termasuk tiket feri. Tepat waktu untuk penerbangan.",
    image: "/img/armada.webp",
    alt: "Rute travel Banyuwangi ke Bandara Ngurah Rai",
    link: "/rute/banyuwangi-ngurah-rai",
  },
  {
    title: "Banyuwangi - Pelabuhan Tanjung Perak",
    description: "Layanan ke pelabuhan kapal laut Surabaya. Door-to-port tepat waktu untuk jadwal kapal.",
    image: "/img/armada.webp",
    alt: "Rute travel Banyuwangi ke Pelabuhan Tanjung Perak",
    link: "/rute/banyuwangi-tanjung-perak",
  },
  {
    title: "Banyuwangi - Malang",
    description: "Armada terbaik menuju kota pendidikan dan wisata. Berangkat setiap hari.",
    image: "/img/rute/banyuwangi-malang.webp",
    alt: "Rute travel Banyuwangi ke Malang",
    link: "/rute/banyuwangi-malang",
  },
  {
    title: "Banyuwangi - Denpasar",
    description: "Lintasi selat Bali dengan aman dan nyaman, langsung ke tujuan Anda.",
    image: "/img/rute/banyuwangi-denpasar.webp",
    alt: "Rute travel Banyuwangi ke Denpasar Bali",
    link: "/rute/banyuwangi-denpasar",
  },
  {
    title: "Banyuwangi - Solo",
    description: "Jelajahi Jawa Tengah dengan layanan travel via tol yang cepat dan aman.",
    image: "/img/rute/banyuwangi-solo.webp",
    alt: "Rute travel Banyuwangi ke Solo",
    link: "/rute/banyuwangi-solo",
  },
  {
    title: "Banyuwangi - Tulungagung",
    description: "Layanan rute selatan Jawa Timur, melayani juga Blitar dan Kediri.",
    image: "/img/rute/banyuwangi-tulungagung.webp",
    alt: "Rute travel Banyuwangi ke Tulungagung",
    link: "/rute/banyuwangi-tulungagung",
  },
  {
    title: "Banyuwangi - Sidoarjo",
    description: "Rute via tol ke kawasan industri Sidoarjo. Dekat Bandara Juanda dan pusat bisnis.",
    image: "/img/armada.webp",
    alt: "Rute travel Banyuwangi ke Sidoarjo",
    link: "/rute/banyuwangi-sidoarjo",
  },
  {
    title: "Banyuwangi - Gresik",
    description: "Layanan travel ke kawasan industri Gresik. Berangkat setiap hari dengan jadwal fleksibel.",
    image: "/img/armada.webp",
    alt: "Rute travel Banyuwangi ke Gresik",
    link: "/rute/banyuwangi-gresik",
  },
  {
    title: "Banyuwangi - Pasuruan",
    description: "Rute via tol ke kota industri Pasuruan. Melayani area Bangil, Gempol, dan sekitarnya.",
    image: "/img/armada.webp",
    alt: "Rute travel Banyuwangi ke Pasuruan",
    link: "/rute/banyuwangi-pasuruan",
  },
  {
    title: "Banyuwangi - Jember",
    description: "Rute lokal populer untuk mahasiswa dan pekerja. Berangkat 3x sehari dengan jadwal pagi, siang, malam.",
    image: "/img/armada.webp",
    alt: "Rute travel Banyuwangi ke Jember",
    link: "/rute/banyuwangi-jember",
  },
];

export default function RutePage() {
  return (
    <>
      <StructuredData data={itemListData} />
      <StructuredData data={breadcrumbData} />
      <StructuredData data={faqData} />
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
                <span className="text-dark font-medium">Rute Perjalanan</span>
              </nav>
              <h1 className="text-4xl md:text-5xl font-extrabold text-dark">Rute Perjalanan Populer</h1>
              <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
                Kami melayani travel dari Banyuwangi ke berbagai kota besar di Jawa dan Bali dengan jadwal keberangkatan
                setiap hari.
              </p>
            </div>
          </section>

          {/* Daftar Rute Section */}
          <section id="daftar-rute" className="py-20 bg-white">
            <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              {/* Grid Daftar Rute */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {routes.map((route, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-lg shadow-lg overflow-hidden group transition-transform duration-300 hover:shadow-xl hover:-translate-y-1"
                  >
                    <div className="relative h-48 w-full">
                      <Image src={route.image} alt={route.alt} fill className="object-cover" sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw" />
                    </div>
                    <div className="p-6">
                      <h3 className="text-2xl font-bold text-primary">{route.title}</h3>
                      <p className="mt-2 text-gray-600">{route.description}</p>
                      {route.link === "#kontak" ? (
                        <a
                          href={route.link}
                          className="inline-block mt-4 bg-secondary text-white px-5 py-2 rounded-lg font-semibold hover:bg-opacity-90 transition-colors"
                        >
                          Hubungi Kami
                        </a>
                      ) : (
                        <Link
                          href={route.link}
                          className="inline-block mt-4 bg-secondary text-white px-5 py-2 rounded-lg font-semibold hover:bg-opacity-90 transition-colors"
                        >
                          Lihat Detail Rute
                        </Link>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section id="faq" className="py-20 bg-light">
            <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-extrabold text-dark">Pertanyaan Seputar Rute Travel</h2>
                <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
                  Jawaban untuk pertanyaan yang sering diajukan tentang rute perjalanan kami
                </p>
              </div>

              <div className="max-w-3xl mx-auto space-y-6">
                {/* FAQ 1 */}
                <details className="bg-white p-6 rounded-lg shadow-md group" open>
                  <summary className="flex justify-between items-center font-semibold text-lg text-primary cursor-pointer">
                    Rute mana yang paling populer dari Banyuwangi?
                    <ChevronDown className="w-5 h-5 transition-transform duration-300 group-open:rotate-180" />
                  </summary>
                  <p className="mt-4 text-gray-700 leading-relaxed">
                    Rute paling populer dari Banyuwangi adalah ke <strong>Surabaya, Malang, dan Denpasar</strong>. 
                    Ketiga rute ini memiliki jadwal keberangkatan setiap hari dengan beberapa waktu keberangkatan 
                    yang bisa dipilih sesuai kebutuhan Anda.
                  </p>
                </details>

                {/* FAQ 2 */}
                <details className="bg-white p-6 rounded-lg shadow-md group">
                  <summary className="flex justify-between items-center font-semibold text-lg text-primary cursor-pointer">
                    Berapa lama perjalanan dari Banyuwangi ke Surabaya?
                    <ChevronDown className="w-5 h-5 transition-transform duration-300 group-open:rotate-180" />
                  </summary>
                  <p className="mt-4 text-gray-700 leading-relaxed">
                    Perjalanan dari Banyuwangi ke Surabaya memakan waktu sekitar <strong>5-6 jam</strong> via tol 
                    Gempol-Pasuruan-Probolinggo-Banyuwangi (GEPPRO). Waktu tempuh bisa bervariasi tergantung kondisi 
                    lalu lintas dan titik penjemputan/pengantaran Anda.
                  </p>
                </details>

                {/* FAQ 3 */}
                <details className="bg-white p-6 rounded-lg shadow-md group">
                  <summary className="flex justify-between items-center font-semibold text-lg text-primary cursor-pointer">
                    Apakah tersedia layanan travel ke bandara?
                    <ChevronDown className="w-5 h-5 transition-transform duration-300 group-open:rotate-180" />
                  </summary>
                  <p className="mt-4 text-gray-700 leading-relaxed">
                    Ya, kami menyediakan layanan khusus ke <strong>Bandara Juanda (Surabaya)</strong> dan{" "}
                    <strong>Bandara Ngurah Rai (Bali)</strong>. Layanan ini sudah termasuk estimasi waktu tunggu 
                    untuk memastikan Anda tiba tepat waktu sesuai jadwal penerbangan.
                  </p>
                </details>

                {/* FAQ 4 */}
                <details className="bg-white p-6 rounded-lg shadow-md group">
                  <summary className="flex justify-between items-center font-semibold text-lg text-primary cursor-pointer">
                    Bagaimana jika rute tujuan saya tidak ada di daftar?
                    <ChevronDown className="w-5 h-5 transition-transform duration-300 group-open:rotate-180" />
                  </summary>
                  <p className="mt-4 text-gray-700 leading-relaxed">
                    Jika rute tujuan Anda tidak ada di daftar rute reguler kami, silakan hubungi admin melalui WhatsApp. 
                    Kami melayani <strong>layanan carter mobil dan drop off</strong> ke seluruh tujuan di Jawa dan Bali 
                    dengan harga yang kompetitif.
                  </p>
                </details>

                {/* FAQ 5 */}
                <details className="bg-white p-6 rounded-lg shadow-md group">
                  <summary className="flex justify-between items-center font-semibold text-lg text-primary cursor-pointer">
                    Apakah bisa dijemput dan diantar langsung ke alamat tujuan?
                    <ChevronDown className="w-5 h-5 transition-transform duration-300 group-open:rotate-180" />
                  </summary>
                  <p className="mt-4 text-gray-700 leading-relaxed">
                    Ya, semua layanan travel kami menggunakan sistem <strong>door-to-door</strong>. Kami akan menjemput 
                    Anda di alamat yang Anda tentukan dan mengantar langsung ke alamat tujuan, selama masih dalam area 
                    jangkauan rute yang dipilih.
                  </p>
                </details>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section id="kontak" className="py-20 bg-primary text-white">
            <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
              <h2 className="text-3xl md:text-4xl font-extrabold">Tidak Menemukan Rute Anda?</h2>
              <p className="mt-4 text-lg text-gray-200 max-w-2xl mx-auto">
                Tim kami siap membantu. Hubungi kami untuk permintaan rute khusus, carter mobil, atau perjalanan
                rombongan ke seluruh Jawa & Bali.
              </p>
              <a
                href="https://wa.me/6282143258744"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-10 inline-block bg-accent text-white px-10 py-3 rounded-lg font-bold text-lg shadow-lg hover:bg-opacity-90 transition-all transform hover:-translate-y-1"
              >
                Tanya Rute via WA
              </a>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
}
