import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Smartphone, Tag, CheckCircle } from "lucide-react";
import { getAllPromos } from "@/lib/promo";

export const metadata: Metadata = {
  title: "Promo & Penawaran Spesial | travelbanyuwangi.id",
  description:
    "Dapatkan promo travel Banyuwangi terbaru. Diskon spesial rute Surabaya, Malang, Denpasar. Promo rombongan wisata wali dan paket lainnya. Klaim sekarang!",
  keywords:
    "promo travel banyuwangi, diskon travel banyuwangi, promo wisata wali banyuwangi, penawaran spesial travel banyuwangi, travel banyuwangi murah",
  authors: [{ name: "travelbanyuwangi.id" }],
  openGraph: {
    title: "Promo & Penawaran Spesial | travelbanyuwangi.id",
    description:
      "Dapatkan promo travel Banyuwangi terbaru. Diskon spesial rute Surabaya, Malang, Denpasar.",
    type: "website",
    url: "https://travelbanyuwangi.id/promo",
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
    title: "Promo & Penawaran Spesial | travelbanyuwangi.id",
    description:
      "Dapatkan promo travel Banyuwangi terbaru. Diskon spesial rute Surabaya, Malang, Denpasar.",
    images: ["/img/hero.webp"],
  },
  alternates: {
    canonical: "https://travelbanyuwangi.id/promo",
  },
};

export default function PromoPage() {
  const promos = getAllPromos();

  return (
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
              <span className="text-dark font-medium">Promo</span>
            </nav>
            <h1 className="text-4xl md:text-5xl font-extrabold text-dark">Promo & Penawaran Spesial</h1>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
              Nikmati perjalanan lebih hemat dengan promo terbaru dari kami. Jangan sampai ketinggalan!
            </p>
          </div>
        </section>

        {/* Daftar Promo */}
        <section id="daftar-promo" className="py-20 bg-white">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-dark">Promo yang Sedang Berlangsung</h2>
              <p className="mt-3 text-lg text-gray-600">
                Berlaku untuk pemesanan di bulan ini. Syarat & ketentuan berlaku.
              </p>
            </div>

            {/* Grid Kartu Promo */}
            {promos.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {promos.map((promo) => {
                  const validUntil = new Date(promo.frontmatter.validUntil);
                  const formattedDate = validUntil.toLocaleDateString("id-ID", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  });

                  return (
                    <div
                      key={promo.slug}
                      className="bg-white rounded-lg shadow-lg overflow-hidden group transition-transform duration-300 hover:shadow-xl hover:-translate-y-1"
                    >
                      <div className="relative h-48 w-full">
                        <Image
                          src={promo.frontmatter.image}
                          alt={promo.frontmatter.title}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                      </div>
                      <div className="p-6">
                        <span className="inline-block bg-accent text-white text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider">
                          {promo.frontmatter.category}
                        </span>
                        <h3 className="mt-4 text-2xl font-bold text-primary">{promo.frontmatter.title}</h3>
                        <p className="mt-2 text-gray-600">{promo.frontmatter.description}</p>
                        <div className="mt-4 text-sm text-gray-500">
                          Berlaku sampai: <strong>{formattedDate}</strong>
                        </div>
                        <Link
                          href={`/promo/${promo.slug}`}
                          className="inline-block mt-5 text-secondary font-semibold hover:text-opacity-80 transition-colors"
                        >
                          Lihat Detail &rarr;
                        </Link>
                      </div>
                    </div>
                  );
                })}
              </div>
            ) : (
              <div className="text-center py-16">
                <p className="text-xl text-gray-600">Belum ada promo yang tersedia saat ini.</p>
                <p className="mt-2 text-gray-500">Pantau terus halaman ini untuk promo terbaru!</p>
              </div>
            )}
          </div>
        </section>

        {/* Cara Klaim Promo */}
        <section id="cara-klaim" className="py-20 bg-light">
          <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-dark">Cara Klaim Promo</h2>
              <p className="mt-3 text-lg text-gray-600">Sangat mudah, cukup ikuti langkah berikut.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              {/* Langkah 1 */}
              <div className="flex flex-col items-center">
                <Smartphone className="w-16 h-16 text-primary" />
                <h3 className="mt-4 text-xl font-bold text-dark">1. Hubungi via WhatsApp</h3>
                <p className="mt-2 text-gray-600">Hubungi admin kami melalui tombol WhatsApp di website ini.</p>
              </div>

              {/* Langkah 2 */}
              <div className="flex flex-col items-center">
                <Tag className="w-16 h-16 text-primary" />
                <h3 className="mt-4 text-xl font-bold text-dark">2. Sebutkan Kode Promo</h3>
                <p className="mt-2 text-gray-600">
                  Sebutkan promo yang ingin Anda gunakan (misal: &quot;PROMO SURABAYA&quot;) saat melakukan
                  pemesanan.
                </p>
              </div>

              {/* Langkah 3 */}
              <div className="flex flex-col items-center">
                <CheckCircle className="w-16 h-16 text-primary" />
                <h3 className="mt-4 text-xl font-bold text-dark">3. Dapatkan Konfirmasi</h3>
                <p className="mt-2 text-gray-600">
                  Admin kami akan memverifikasi dan menerapkan promo pada total tagihan Anda. Selesai!
                </p>
              </div>
            </div>

            {/* CTA */}
            <div className="text-center mt-16">
              <a
                href="https://wa.me/6282143258744"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-accent text-white px-10 py-4 rounded-lg font-bold text-lg shadow-lg hover:bg-opacity-90 transition-all transform hover:-translate-y-1"
              >
                Klaim Promo Sekarang
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
