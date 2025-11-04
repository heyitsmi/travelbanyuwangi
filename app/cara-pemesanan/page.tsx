import { Metadata } from "next";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Phone, FileText, CheckCircle, Truck } from "lucide-react";

export const metadata: Metadata = {
  title: "Cara Pemesanan | Juragan Travel",
  description:
    "Cara mudah memesan layanan travel Banyuwangi, wisata, dan tiket di Juragan Travel. Cukup 3 langkah mudah via WhatsApp. Cepat, aman, dan responsif 24 jam.",
  keywords:
    "cara pesan travel banyuwangi, cara booking travel banyuwangi, format pemesanan travel, cara order travel banyuwangi",
  authors: [{ name: "Juragan Travel" }],
  openGraph: {
    title: "Cara Pemesanan | Juragan Travel",
    description:
      "Cara mudah memesan layanan travel Banyuwangi, wisata, dan tiket di Juragan Travel. Cukup 3 langkah mudah via WhatsApp.",
    type: "website",
    url: "https://juragantravel.com/cara-pemesanan",
    images: [
      {
        url: "/img/hero.webp",
        width: 1200,
        height: 630,
      },
    ],
    siteName: "Juragan Travel",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cara Pemesanan | Juragan Travel",
    description:
      "Cara mudah memesan layanan travel Banyuwangi, wisata, dan tiket di Juragan Travel. Cukup 3 langkah mudah via WhatsApp.",
    images: ["/img/hero.webp"],
  },
  alternates: {
    canonical: "https://juragantravel.com/cara-pemesanan",
  },
};

export default function CaraPemesananPage() {
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
              <span className="text-dark font-medium">Cara Pemesanan</span>
            </nav>
            <h1 className="text-4xl md:text-5xl font-extrabold text-dark">Cara Pemesanan</h1>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
              Hanya butuh 3 langkah mudah untuk memesan layanan kami. Cepat, mudah, dan aman.
            </p>
          </div>
        </section>

        {/* Langkah-langkah Pemesanan */}
        <section id="langkah-pemesanan" className="py-20 bg-white">
          <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-dark">Cara Booking via WhatsApp (Respon Cepat)</h2>
              <p className="mt-3 text-lg text-gray-600">
                Ini adalah cara tercepat dan paling kami rekomendasikan.
              </p>
            </div>

            <div className="space-y-12">
              {/* Langkah 1 */}
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="shrink-0 w-24 h-24 bg-primary text-white rounded-full flex items-center justify-center shadow-lg">
                  <Phone className="w-10 h-10" />
                </div>
                <div className="flex-1">
                  <span className="text-sm font-semibold uppercase text-primary">LANGKAH 1</span>
                  <h3 className="text-2xl font-bold text-dark mt-1">Hubungi Admin Kami</h3>
                  <p className="mt-2 text-lg text-gray-700">
                    Klik tombol WhatsApp di website ini untuk langsung terhubung dengan admin kami yang siaga 24 jam.
                    Anda juga bisa menelepon langsung ke nomor{" "}
                    <strong className="text-dark">0821-4325-8744</strong>.
                  </p>
                </div>
              </div>

              {/* Langkah 2 */}
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="shrink-0 w-24 h-24 bg-primary text-white rounded-full flex items-center justify-center shadow-lg">
                  <FileText className="w-10 h-10" />
                </div>
                <div className="flex-1">
                  <span className="text-sm font-semibold uppercase text-primary">LANGKAH 2</span>
                  <h3 className="text-2xl font-bold text-dark mt-1">Isi Format Pemesanan</h3>
                  <p className="mt-2 text-lg text-gray-700">
                    Admin kami akan meminta Anda mengisi format pemesanan singkat. Cukup kirimkan data berikut melalui
                    chat:
                  </p>
                  <ul className="list-disc list-inside mt-2 text-gray-700 space-y-1">
                    <li>
                      <strong>Nama Pemesan:</strong>
                    </li>
                    <li>
                      <strong>Nomor HP Aktif:</strong>
                    </li>
                    <li>
                      <strong>Layanan:</strong> (Contoh: Travel Antar Kota)
                    </li>
                    <li>
                      <strong>Rute:</strong> (Contoh: Banyuwangi ke Surabaya)
                    </li>
                    <li>
                      <strong>Tanggal Berangkat:</strong>
                    </li>
                    <li>
                      <strong>Jumlah Penumpang:</strong>
                    </li>
                    <li>
                      <strong>Alamat Jemput:</strong> (Jelaskan sedetail mungkin)
                    </li>
                    <li>
                      <strong>Alamat Tujuan:</strong> (Jelaskan sedetail mungkin)
                    </li>
                  </ul>
                </div>
              </div>

              {/* Langkah 3 */}
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="shrink-0 w-24 h-24 bg-primary text-white rounded-full flex items-center justify-center shadow-lg">
                  <CheckCircle className="w-10 h-10" />
                </div>
                <div className="flex-1">
                  <span className="text-sm font-semibold uppercase text-primary">LANGKAH 3</span>
                  <h3 className="text-2xl font-bold text-dark mt-1">Konfirmasi & Pembayaran</h3>
                  <p className="mt-2 text-lg text-gray-700">
                    Admin akan segera mengecek ketersediaan kursi/layanan dan mengkonfirmasi total biayanya. Anda bisa
                    melakukan pembayaran DP (Down Payment) atau pembayaran lunas melalui Transfer Bank, QRIS, atau bayar
                    tunai langsung ke sopir saat penjemputan.
                  </p>
                </div>
              </div>

              {/* Langkah 4 */}
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="shrink-0 w-24 h-24 bg-primary text-white rounded-full flex items-center justify-center shadow-lg">
                  <Truck className="w-10 h-10" />
                </div>
                <div className="flex-1">
                  <span className="text-sm font-semibold uppercase text-primary">LANGKAH 4</span>
                  <h3 className="text-2xl font-bold text-dark mt-1">Penjemputan</h3>
                  <p className="mt-2 text-lg text-gray-700">
                    Selesai! Pesanan Anda sudah terkonfirmasi. Driver kami akan menghubungi Anda 1 jam sebelum jadwal
                    penjemputan untuk konfirmasi ulang dan segera menjemput Anda di lokasi yang telah ditentukan.
                    Selamat menikmati perjalanan!
                  </p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="text-center mt-20">
              <a
                href="https://wa.me/6282143258744"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-accent text-white px-10 py-4 rounded-lg font-bold text-lg shadow-lg hover:bg-opacity-90 transition-all transform hover:-translate-y-1"
              >
                Pesan Sekarang via WhatsApp
              </a>
            </div>

            {/* Alternatif via Form */}
            <div className="mt-16 pt-10 border-t border-gray-200 text-center">
              <h3 className="text-2xl font-bold text-dark">Alternatif: Booking via Form Online</h3>
              <p className="mt-3 text-lg text-gray-600 max-w-2xl mx-auto">
                Anda juga dapat mengisi{" "}
                <Link href="/pemesanan" className="text-primary font-semibold hover:underline">
                  Formulir Pemesanan Online
                </Link>{" "}
                di website kami. Tim kami akan memproses pesanan Anda dan menghubungi Anda kembali untuk konfirmasi.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
