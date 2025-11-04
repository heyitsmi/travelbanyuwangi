import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { StructuredData } from "../components/SEO";

export const metadata: Metadata = {
  title: "Rute Travel Populer dari Banyuwangi | travelbanyuwangi.id",
  description:
    "Daftar rute travel populer dari Banyuwangi ke Surabaya, Malang, Denpasar, Solo, Tulungagung, dan kota lain di Jawa Bali. Berangkat setiap hari.",
  keywords:
    "rute travel banyuwangi, travel banyuwangi surabaya, travel banyuwangi malang, travel banyuwangi denpasar, travel banyuwangi solo, travel banyuwangi tulungagung",
  authors: [{ name: "travelbanyuwangi.id" }],
  openGraph: {
    title: "Rute Travel Populer dari Banyuwangi | travelbanyuwangi.id",
    description:
      "Daftar rute travel populer dari Banyuwangi ke Surabaya, Malang, Denpasar, Solo, Tulungagung, dan kota lain di Jawa Bali.",
    type: "website",
    url: "https://travelbanyuwangi.id/rute",
    images: [
      {
        url: "/img/hero.webp",
        width: 1200,
        height: 630,
      },
    ],
    siteName: "travelbanyuwangi.id",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rute Travel Populer dari Banyuwangi | travelbanyuwangi.id",
    description:
      "Daftar rute travel populer dari Banyuwangi ke Surabaya, Malang, Denpasar, Solo, Tulungagung, dan kota lain di Jawa Bali.",
    images: ["/img/hero.webp"],
  },
  alternates: {
    canonical: "https://travelbanyuwangi.id/rute",
  },
};

const itemListData = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Rute Travel Populer travelbanyuwangi.id",
  description: "Daftar rute perjalanan travel antar kota populer dari Banyuwangi.",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      item: {
        "@type": "Service",
        name: "Travel Banyuwangi - Surabaya",
        url: "https://travelbanyuwangi.id/rute/banyuwangi-surabaya",
      },
    },
    {
      "@type": "ListItem",
      position: 2,
      item: {
        "@type": "Service",
        name: "Travel Banyuwangi - Malang",
        url: "https://travelbanyuwangi.id/rute/banyuwangi-malang",
      },
    },
    {
      "@type": "ListItem",
      position: 3,
      item: {
        "@type": "Service",
        name: "Travel Banyuwangi - Denpasar",
        url: "https://travelbanyuwangi.id/rute/banyuwangi-denpasar",
      },
    },
    {
      "@type": "ListItem",
      position: 4,
      item: {
        "@type": "Service",
        name: "Travel Banyuwangi - Solo",
        url: "https://travelbanyuwangi.id/rute/banyuwangi-solo",
      },
    },
    {
      "@type": "ListItem",
      position: 5,
      item: {
        "@type": "Service",
        name: "Travel Banyuwangi - Tulungagung",
        url: "https://travelbanyuwangi.id/rute/banyuwangi-tulungagung",
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
      item: "https://travelbanyuwangi.id/",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Rute Perjalanan",
      item: "https://travelbanyuwangi.id/rute",
    },
  ],
};

const routes = [
  {
    title: "Banyuwangi ↔ Surabaya",
    description: "Perjalanan nyaman via tol, dijemput di rumah dan diantar sampai tujuan.",
    image: "/img/rute/banyuwangi-surabaya.webp",
    alt: "Rute travel Banyuwangi ke Surabaya",
    link: "/rute/banyuwangi-surabaya",
  },
  {
    title: "Banyuwangi ↔ Malang",
    description: "Armada terbaik menuju kota pendidikan dan wisata. Berangkat setiap hari.",
    image: "/img/rute/banyuwangi-malang.webp",
    alt: "Rute travel Banyuwangi ke Malang",
    link: "/rute/banyuwangi-malang",
  },
  {
    title: "Banyuwangi ↔ Denpasar",
    description: "Lintasi selat Bali dengan aman dan nyaman, langsung ke tujuan Anda.",
    image: "/img/rute/banyuwangi-denpasar.webp",
    alt: "Rute travel Banyuwangi ke Denpasar Bali",
    link: "/rute/banyuwangi-denpasar",
  },
  {
    title: "Banyuwangi ↔ Solo",
    description: "Jelajahi Jawa Tengah dengan layanan travel via tol yang cepat dan aman.",
    image: "/img/rute/banyuwangi-solo.webp",
    alt: "Rute travel Banyuwangi ke Solo",
    link: "/rute/banyuwangi-solo",
  },
  {
    title: "Banyuwangi ↔ Tulungagung",
    description: "Layanan rute selatan Jawa Timur, melayani juga Blitar dan Kediri.",
    image: "/img/rute/banyuwangi-tulungagung.webp",
    alt: "Rute travel Banyuwangi ke Tulungagung",
    link: "/rute/banyuwangi-tulungagung",
  },
  {
    title: "Rute Lainnya (Jember, dll)",
    description: "Kami juga melayani rute-rute transit utama di Jawa Timur.",
    image: "/img/rute/rute-lainnya.webp",
    alt: "Rute travel Banyuwangi ke Jember dan Probolinggo",
    link: "#kontak",
  },
];

export default function RutePage() {
  return (
    <>
      <StructuredData data={itemListData} />
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
