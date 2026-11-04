import { Metadata } from "next";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { StructuredData } from "../components/SEO";

export const metadata: Metadata = {
  title: "Kebijakan Privasi | Juragan Travel",
  description:
    "Kebijakan privasi Juragan Travel. Kami menghargai privasi Anda dan berkomitmen melindungi data pribadi pelanggan kami.",
  keywords: "kebijakan privasi travel, privacy policy travel banyuwangi",
  authors: [{ name: "Juragan Travel" }],
  robots: "index, follow",
  openGraph: {
    title: "Kebijakan Privasi | Juragan Travel",
    description: "Kami menghargai privasi Anda dan berkomitmen melindungi data pribadi pelanggan kami.",
    type: "website",
    url: "https://juragantravel.com/kebijakan-privasi",
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
    title: "Kebijakan Privasi | Juragan Travel",
    description: "Kami menghargai privasi Anda dan berkomitmen melindungi data pribadi pelanggan kami.",
    images: ["https://juragantravel.com/img/hero.webp"],
  },
  alternates: {
    canonical: "https://juragantravel.com/kebijakan-privasi",
  },
  icons: {
    icon: "/favicon/favicon.ico",
  },
};

const webPageData = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Kebijakan Privasi",
  description:
    "Kebijakan privasi Juragan Travel terkait pengumpulan, penggunaan, dan perlindungan data pribadi pelanggan.",
  url: "https://juragantravel.com/kebijakan-privasi",
  publisher: {
    "@type": "Organization",
    name: "Juragan Travel",
    url: "https://juragantravel.com",
  },
};

export default function KebijakanPrivasiPage() {
  const currentDate = new Date().toLocaleDateString("id-ID", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <>
      <StructuredData data={webPageData} />
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
                <span className="text-dark font-medium">Kebijakan Privasi</span>
              </nav>
              <h1 className="text-4xl md:text-5xl font-extrabold text-dark">Kebijakan Privasi</h1>
              <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
                Privasi Anda penting bagi kami. Dokumen ini menjelaskan bagaimana kami mengumpulkan dan menggunakan
                data pribadi Anda.
              </p>
            </div>
          </section>

          {/* Content Section */}
          <section id="privacy-content" className="py-20 bg-white">
            <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
              <div className="prose prose-lg lg:prose-xl max-w-none text-gray-700">
                <p className="text-xl text-gray-600 mb-8">Pembaruan terakhir: {currentDate}</p>

                <p>
                  Terima kasih telah mengunjungi <strong>Juragan Travel</strong>. Kebijakan Privasi ini
                  menjelaskan bagaimana kami mengumpulkan, menggunakan, mengungkapkan, dan melindungi informasi
                  pribadi Anda saat Anda menggunakan layanan kami atau mengunjungi situs web kami.
                </p>

                <h2 className="text-3xl font-bold text-dark mt-12 mb-6">1. Informasi yang Kami Kumpulkan</h2>
                <p>
                  Kami mengumpulkan informasi pribadi yang Anda berikan secara langsung kepada kami saat melakukan
                  pemesanan. Informasi ini meliputi:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <strong>Data Identitas:</strong> Nama lengkap penumpang.
                  </li>
                  <li>
                    <strong>Data Kontak:</strong> Nomor telepon (WhatsApp) dan alamat email.
                  </li>
                  <li>
                    <strong>Data Pemesanan:</strong> Alamat penjemputan lengkap dan alamat tujuan lengkap.
                  </li>
                  <li>
                    <strong>Data Perjalanan:</strong> Tanggal dan jadwal keberangkatan.
                  </li>
                </ul>

                <h2 className="text-3xl font-bold text-dark mt-12 mb-6">2. Bagaimana Kami Menggunakan Informasi Anda</h2>
                <p>Informasi pribadi yang kami kumpulkan digunakan untuk tujuan berikut:</p>
                <ol className="list-decimal pl-6 space-y-4">
                  <li>
                    <strong>Memproses Pemesanan:</strong> Untuk mengonfirmasi, menjadwalkan, dan melaksanakan
                    layanan travel, paket wisata, atau pemesanan tiket yang Anda pesan.
                  </li>
                  <li>
                    <strong>Komunikasi Layanan:</strong> Untuk menghubungi Anda terkait detail penjemputan,
                    konfirmasi pembayaran, perubahan jadwal, atau informasi penting lainnya terkait layanan kami.
                  </li>
                  <li>
                    <strong>Layanan Pelanggan:</strong> Untuk menanggapi pertanyaan, keluhan, atau permintaan bantuan
                    dari Anda.
                  </li>
                  <li>
                    <strong>Administrasi Internal:</strong> Untuk pencatatan, audit, dan analisis data internal guna
                    meningkatkan kualitas layanan kami.
                  </li>
                </ol>

                <h2 className="text-3xl font-bold text-dark mt-12 mb-6">3. Keamanan Data</h2>
                <p>
                  Kami berkomitmen untuk melindungi keamanan data pribadi Anda. Kami menerapkan langkah-langkah
                  keamanan administratif dan teknis yang wajar untuk melindungi informasi Anda dari akses, penggunaan,
                  atau pengungkapan yang tidak sah.
                </p>
                <p>
                  Data pribadi Anda (terutama nomor telepon dan alamat) hanya akan dibagikan kepada tim internal kami
                  (admin dan sopir) yang bertugas melaksanakan pesanan Anda. Kami tidak akan menjual atau menyewakan
                  data pribadi Anda kepada pihak ketiga mana pun.
                </p>

                <h2 className="text-3xl font-bold text-dark mt-12 mb-6">4. Penggunaan Cookie</h2>
                <p>
                  Situs web kami mungkin menggunakan &quot;cookie&quot; untuk meningkatkan pengalaman pengguna. Cookie
                  adalah file kecil yang disimpan di perangkat Anda. Kami menggunakannya untuk mengingat preferensi
                  Anda dan menganalisis lalu lintas situs secara anonim (misalnya melalui Google Analytics). Anda
                  dapat menonaktifkan cookie melalui pengaturan browser Anda, namun ini dapat memengaruhi
                  fungsionalitas situs.
                </p>

                <h2 className="text-3xl font-bold text-dark mt-12 mb-6">5. Tautan ke Situs Pihak Ketiga</h2>
                <p>
                  Situs web kami mungkin berisi tautan ke situs pihak ketiga (seperti WhatsApp atau Google Maps).
                  Kebijakan Privasi ini tidak berlaku untuk situs-situs tersebut. Kami tidak bertanggung jawab atas
                  praktik privasi atau konten dari situs pihak ketiga mana pun. Kami menganjurkan Anda untuk membaca
                  kebijakan privasi mereka.
                </p>

                <h2 className="text-3xl font-bold text-dark mt-12 mb-6">6. Perubahan pada Kebijakan Privasi</h2>
                <p>
                  Kami dapat memperbarui Kebijakan Privasi ini dari waktu ke waktu. Versi terbaru akan dipublikasikan
                  di halaman ini dengan tanggal pembaruan yang baru. Kami menganjurkan Anda untuk meninjau halaman ini
                  secara berkala.
                </p>

                <h2 className="text-3xl font-bold text-dark mt-12 mb-6">7. Hubungi Kami</h2>
                <p>
                  Jika Anda memiliki pertanyaan atau kekhawatiran mengenai Kebijakan Privasi ini atau pengelolaan data
                  pribadi Anda, silakan hubungi kami melalui informasi yang tersedia di halaman{" "}
                  <Link href="/kontak" className="text-primary hover:underline">
                    Kontak
                  </Link>{" "}
                  kami.
                </p>

                <div className="bg-light p-6 rounded-lg mt-12">
                  <p className="text-gray-700 font-medium mb-4">
                    Dengan menggunakan layanan kami, Anda menyetujui pengumpulan dan penggunaan informasi sesuai
                    dengan Kebijakan Privasi ini.
                  </p>
                  <p className="text-gray-600 text-sm">
                    Baca juga:{" "}
                    <Link href="/syarat-ketentuan" className="text-primary hover:underline font-semibold">
                      Syarat dan Ketentuan
                    </Link>
                  </p>
                </div>

                <div className="text-center mt-12">
                  <p className="text-gray-600 mb-6">
                    Ada pertanyaan tentang privasi data Anda? Jangan ragu untuk menghubungi kami.
                  </p>
                  <a
                    href="/kontak#contact-form"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-secondary text-white px-8 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-all transform hover:-translate-y-1 shadow-lg"
                  >
                    Hubungi Kami melalui formulir kontak
                  </a>
                </div>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
}
