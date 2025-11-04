import { Metadata } from "next";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Banknote, Lock, QrCode } from "lucide-react";

export const metadata: Metadata = {
  title: "Cara Pembayaran | Juragan Travel",
  description:
    "Metode pembayaran yang kami terima untuk layanan travel Banyuwangi. Kami menerima tunai (cash), transfer bank (BCA, BRI, Mandiri), dan QRIS (OVO, GoPay, Dana).",
  keywords:
    "cara bayar travel banyuwangi, metode pembayaran travel, bayar travel via qris, bayar travel cash, transfer travel banyuwangi",
  authors: [{ name: "Juragan Travel" }],
  openGraph: {
    title: "Cara Pembayaran | Juragan Travel",
    description: "Metode pembayaran yang kami terima: Tunai (Cash), Transfer Bank, dan QRIS.",
    type: "website",
    url: "https://juragantravel.com/cara-pembayaran",
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
    title: "Cara Pembayaran | Juragan Travel",
    description: "Metode pembayaran yang kami terima: Tunai (Cash), Transfer Bank, dan QRIS.",
    images: ["https://juragantravel.com/img/hero.webp"],
  },
  alternates: {
    canonical: "https://juragantravel.com/cara-pembayaran",
  },
};

export default function CaraPembayaranPage() {
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
              <span className="text-dark font-medium">Cara Pembayaran</span>
            </nav>
            <h1 className="text-4xl md:text-5xl font-extrabold text-dark">Cara Pembayaran</h1>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
              Kami menyediakan berbagai metode pembayaran yang mudah, cepat, dan aman untuk kenyamanan Anda.
            </p>
          </div>
        </section>

        {/* Metode Pembayaran */}
        <section id="metode-pembayaran" className="py-20 bg-white">
          <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-dark">Metode Pembayaran yang Tersedia</h2>
              <p className="mt-3 text-lg text-gray-600">Pilih metode yang paling sesuai untuk Anda.</p>
            </div>

            <div className="space-y-12">
              {/* Metode 1: Tunai (Cash) */}
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="shrink-0 w-24 h-24 bg-secondary text-white rounded-full flex items-center justify-center shadow-lg">
                  <Banknote className="w-10 h-10" />
                </div>
                <div className="flex-1">
                  <span className="text-sm font-semibold uppercase text-secondary">METODE 1</span>
                  <h3 className="text-2xl font-bold text-dark mt-1">Pembayaran Tunai (Cash)</h3>
                  <p className="mt-2 text-lg text-gray-700">
                    Metode ini adalah yang paling umum untuk layanan travel antar kota. Anda dapat membayar secara
                    tunai langsung kepada sopir (driver) kami pada saat penjemputan di lokasi Anda.
                  </p>
                  <ul className="list-disc list-inside mt-2 text-gray-700 space-y-1">
                    <li>
                      Berlaku untuk layanan: <strong>Travel Antar Kota, Paket Express</strong>.
                    </li>
                    <li>Harap siapkan uang pas jika memungkinkan.</li>
                    <li>Konfirmasi total biaya kepada admin kami terlebih dahulu.</li>
                  </ul>
                </div>
              </div>

              {/* Metode 2: Transfer Bank */}
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="shrink-0 w-24 h-24 bg-primary text-white rounded-full flex items-center justify-center shadow-lg">
                  <Lock className="w-10 h-10" />
                </div>
                <div className="flex-1">
                  <span className="text-sm font-semibold uppercase text-primary">METODE 2</span>
                  <h3 className="text-2xl font-bold text-dark mt-1">Transfer Bank</h3>
                  <p className="mt-2 text-lg text-gray-700">
                    Anda dapat melakukan pembayaran penuh atau DP (Down Payment) melalui transfer bank. Metode ini
                    biasanya diperlukan untuk booking layanan rombongan atau tiket.
                  </p>
                  <p className="mt-2 text-lg text-gray-700">
                    Nomor rekening resmi kami akan diinformasikan oleh admin kami melalui WhatsApp. Kami menyediakan
                    rekening:
                  </p>
                  <ul className="list-disc list-inside mt-2 text-gray-700 space-y-1">
                    <li>
                      <strong>BCA</strong>
                    </li>
                    <li>
                      <strong>BRI</strong>
                    </li>
                    <li>
                      <strong>Mandiri</strong>
                    </li>
                  </ul>
                  <p className="mt-2 text-sm text-red-600 font-semibold">
                    PENTING: Harap hanya melakukan transfer ke nomor rekening yang diberikan oleh admin resmi kami via
                    WhatsApp untuk menghindari penipuan.
                  </p>
                </div>
              </div>

              {/* Metode 3: QRIS (E-Wallet) */}
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="shrink-0 w-24 h-24 bg-accent text-white rounded-full flex items-center justify-center shadow-lg">
                  <QrCode className="w-10 h-10" />
                </div>
                <div className="flex-1">
                  <span className="text-sm font-semibold uppercase text-accent">METODE 3</span>
                  <h3 className="text-2xl font-bold text-dark mt-1">QRIS (E-Wallet)</h3>
                  <p className="mt-2 text-lg text-gray-700">
                    Kami juga menerima pembayaran modern melalui QRIS. Admin kami akan mengirimkan kode QRIS yang
                    dapat Anda pindai (scan) menggunakan aplikasi E-Wallet favorit Anda.
                  </p>
                  <ul className="list-disc list-inside mt-2 text-gray-700 space-y-1">
                    <li>
                      Mendukung: <strong>GoPay, OVO, DANA, ShopeePay, LinkAja,</strong> dan semua aplikasi m-banking
                      yang mendukung QRIS.
                    </li>
                    <li>Pembayaran cepat dan tercatat otomatis.</li>
                    <li>
                      Pastikan nama <em>merchant</em> yang muncul saat scan adalah &quot;Juragan Travel&quot;.
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="text-center mt-20">
              <h3 className="text-2xl font-bold text-dark">Ada Pertanyaan Seputar Pembayaran?</h3>
              <p className="mt-3 text-lg text-gray-600 max-w-2xl mx-auto">
                Jangan ragu untuk menghubungi admin kami jika Anda memiliki pertanyaan lebih lanjut mengenai proses
                pembayaran.
              </p>
              <a
                href="https://wa.me/6282143258744"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-8 bg-primary text-white px-10 py-4 rounded-lg font-bold text-lg shadow-lg hover:bg-opacity-90 transition-all transform hover:-translate-y-1"
              >
                Hubungi Admin Kami
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
