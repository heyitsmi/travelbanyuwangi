import { Metadata } from "next";
import Link from "next/link";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { AlertTriangle } from "lucide-react";

export const metadata: Metadata = {
  title: "404 - Halaman Tidak Ditemukan | Juragan Travel",
  description:
    "Oops! Halaman yang Anda cari tidak dapat ditemukan. Kembali ke beranda JuraganTravel.com untuk mencari layanan travel, rute, atau promo terbaru.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function NotFound() {
  return (
    <div className="bg-white antialiased">
      <Header />

      <main>
        {/* 404 Content Section */}
        <section className="bg-white py-24 sm:py-32">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            {/* Warning Icon */}
            <AlertTriangle className="w-16 h-16 text-accent mx-auto mb-4" />

            <p className="text-3xl font-semibold text-primary">404</p>
            <h1 className="mt-4 text-4xl md:text-5xl font-extrabold text-dark tracking-tight">
              Halaman Tidak Ditemukan
            </h1>
            <p className="mt-6 text-lg text-gray-600 max-w-xl mx-auto">
              Oops! Sepertinya halaman yang Anda cari tidak ada atau sudah dipindahkan.
            </p>

            {/* Action Buttons */}
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-x-6">
              <Link
                href="/"
                className="inline-block bg-primary text-white px-8 py-3 rounded-lg font-bold text-lg shadow-lg hover:bg-opacity-90 transition-all transform hover:-translate-y-1"
              >
                Kembali ke Beranda
              </Link>
              <Link
                href="/kontak"
                className="font-semibold text-dark hover:text-primary transition-colors"
              >
                Hubungi Bantuan <span aria-hidden="true">&rarr;</span>
              </Link>
            </div>

            {/* Helpful Links */}
            <div className="mt-16 pt-8 border-t border-gray-200">
              <p className="text-sm font-medium text-gray-700 mb-4">
                Mungkin Anda mencari halaman ini?
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="/rute"
                  className="inline-block bg-light text-dark px-5 py-2 rounded-lg hover:bg-gray-200 transition-colors"
                >
                  Rute Travel
                </Link>
                <Link
                  href="/layanan"
                  className="inline-block bg-light text-dark px-5 py-2 rounded-lg hover:bg-gray-200 transition-colors"
                >
                  Layanan Kami
                </Link>
                <Link
                  href="/promo"
                  className="inline-block bg-light text-dark px-5 py-2 rounded-lg hover:bg-gray-200 transition-colors"
                >
                  Promo Terbaru
                </Link>
                <Link
                  href="/blog"
                  className="inline-block bg-light text-dark px-5 py-2 rounded-lg hover:bg-gray-200 transition-colors"
                >
                  Artikel & Tips
                </Link>
                <Link
                  href="/faq"
                  className="inline-block bg-light text-dark px-5 py-2 rounded-lg hover:bg-gray-200 transition-colors"
                >
                  FAQ
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
