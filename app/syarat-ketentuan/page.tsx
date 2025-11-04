import { Metadata } from "next";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { StructuredData } from "../components/SEO";

export const metadata: Metadata = {
  title: "Syarat dan Ketentuan | Juragan Travel",
  description:
    "Harap baca syarat dan ketentuan layanan Juragan Travel sebelum melakukan pemesanan. Termasuk kebijakan pemesanan, pembayaran, dan pembatalan.",
  keywords:
    "syarat dan ketentuan travel, kebijakan travel banyuwangi, terms and conditions travel",
  authors: [{ name: "Juragan Travel" }],
  robots: "index, follow",
  openGraph: {
    title: "Syarat dan Ketentuan | Juragan Travel",
    description:
      "Kebijakan layanan Juragan Travel terkait pemesanan, pembayaran, dan pembatalan.",
    type: "website",
    url: "https://juragantravel.com/syarat-ketentuan",
    images: [
      {
        url: "https://placehold.co/1200x630/1E293B/FFFFFF?text=Syarat+Ketentuan",
        width: 1200,
        height: 630,
      },
    ],
    siteName: "Juragan Travel",
  },
  twitter: {
    card: "summary_large_image",
    title: "Syarat dan Ketentuan | Juragan Travel",
    description:
      "Kebijakan layanan Juragan Travel terkait pemesanan, pembayaran, dan pembatalan.",
    images: ["https://placehold.co/1200x630/1E293B/FFFFFF?text=Syarat+Ketentuan"],
  },
  alternates: {
    canonical: "https://juragantravel.com/syarat-ketentuan",
  },
  icons: {
    icon: "https://placehold.co/32x32/0077B6/FFFFFF?text=T",
  },
};

const webPageData = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Syarat dan Ketentuan",
  description:
    "Kebijakan layanan Juragan Travel terkait pemesanan, pembayaran, dan pembatalan.",
  url: "https://juragantravel.com/syarat-ketentuan",
  publisher: {
    "@type": "Organization",
    name: "Juragan Travel",
    url: "https://juragantravel.com",
  },
};

export default function SyaratKetentuanPage() {
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
                <span className="text-dark font-medium">Syarat dan Ketentuan</span>
              </nav>
              <h1 className="text-4xl md:text-5xl font-extrabold text-dark">Syarat dan Ketentuan</h1>
              <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
                Mohon baca dengan saksama syarat dan ketentuan layanan kami sebelum melakukan pemesanan.
              </p>
            </div>
          </section>

          {/* Content Section */}
          <section id="terms-content" className="py-20 bg-white">
            <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
              <div className="prose prose-lg lg:prose-xl max-w-none text-gray-700">
                <p className="text-xl text-gray-600 mb-8">Pembaruan terakhir: {currentDate}</p>

                <p>
                  Dengan melakukan pemesanan dan menggunakan layanan dari{" "}
                  <strong>Juragan Travel</strong>, Anda (&quot;Pelanggan&quot;) dianggap telah membaca,
                  memahami, dan menyetujui semua syarat dan ketentuan yang tercantum di bawah ini.
                </p>

                <h2 className="text-3xl font-bold text-dark mt-12 mb-6">1. Ketentuan Pemesanan</h2>
                <ol className="list-decimal pl-6 space-y-4">
                  <li>
                    Pemesanan dianggap sah setelah Pelanggan melakukan konfirmasi pemesanan melalui WhatsApp atau
                    telepon dan telah disetujui oleh admin kami.
                  </li>
                  <li>
                    Pelanggan wajib memberikan data yang valid dan lengkap, termasuk:
                    <ul className="list-disc pl-6 mt-2 space-y-1">
                      <li>Nama lengkap penumpang.</li>
                      <li>Nomor telepon aktif (penumpang dan penjemput/pengantar jika berbeda).</li>
                      <li>Alamat penjemputan yang jelas dan detail.</li>
                      <li>Alamat tujuan yang jelas dan detail.</li>
                      <li>Tanggal dan jadwal keberangkatan yang diinginkan.</li>
                    </ul>
                  </li>
                  <li>
                    Kami berhak menolak pemesanan jika data yang diberikan tidak lengkap, tidak valid, atau jika
                    area penjemputan/pengantaran berada di luar jangkauan layanan kami tanpa konfirmasi sebelumnya.
                  </li>
                  <li>
                    Untuk pemesanan rombongan (Wisata Wali, Perjalanan Dinas), DP (Down Payment) mungkin akan
                    diperlukan sebagai tanda jadi, yang akan diinformasikan oleh admin kami.
                  </li>
                </ol>

                <h2 className="text-3xl font-bold text-dark mt-12 mb-6">2. Pembayaran</h2>
                <ol className="list-decimal pl-6 space-y-4">
                  <li>Metode pembayaran yang diterima adalah: Tunai (Cash), Transfer Bank, dan QRIS.</li>
                  <li>
                    Pembayaran dapat dilakukan secara tunai langsung kepada sopir saat penjemputan, kecuali ada
                    kesepakatan lain (misal: untuk paket wisata atau rombongan).
                  </li>
                  <li>
                    Untuk pembayaran non-tunai (Transfer/QRIS), harap lakukan konfirmasi kepada admin kami setelah
                    pembayaran berhasil.
                  </li>
                  <li>
                    Harga yang tertera dapat berubah sewaktu-waktu (misalnya saat musim liburan, Lebaran, atau
                    kenaikan BBM) tanpa pemberitahuan sebelumnya. Harga final akan dikonfirmasi oleh admin saat
                    pemesanan.
                  </li>
                </ol>

                <h2 className="text-3xl font-bold text-dark mt-12 mb-6">3. Pembatalan dan Perubahan Jadwal</h2>
                <ol className="list-decimal pl-6 space-y-4">
                  <li>
                    <strong>Pembatalan oleh Pelanggan:</strong>
                    <ul className="list-disc pl-6 mt-2 space-y-1">
                      <li>Pembatalan harus dilakukan minimal 6 jam sebelum jadwal penjemputan yang disepakati.</li>
                      <li>
                        Pembatalan yang dilakukan kurang dari 6 jam sebelum jadwal penjemputan dapat dikenakan
                        biaya pembatalan penuh (100% dari harga tiket), terutama jika armada kami sudah dalam
                        perjalanan menjemput.
                      </li>
                      <li>
                        Untuk pemesanan rombongan yang menggunakan DP, DP tidak dapat dikembalikan (non-refundable)
                        jika pembatalan dilakukan secara sepihak oleh Pelanggan.
                      </li>
                    </ul>
                  </li>
                  <li>
                    <strong>Perubahan Jadwal oleh Pelanggan:</strong>
                    <ul className="list-disc pl-6 mt-2 space-y-1">
                      <li>
                        Perubahan jadwal (reschedule) harus diinformasikan minimal 6 jam sebelum keberangkatan dan
                        bergantung pada ketersediaan kursi/armada pada jadwal yang baru.
                      </li>
                    </ul>
                  </li>
                  <li>
                    <strong>Pembatalan oleh Juragan Travel:</strong>
                    <ul className="list-disc pl-6 mt-2 space-y-1">
                      <li>
                        Kami berhak membatalkan perjalanan jika terjadi kondisi di luar kendali (Force Majeure)
                        seperti bencana alam, kerusuhan, penutupan jalan total, atau kondisi darurat lainnya.
                      </li>
                      <li>
                        Jika terjadi pembatalan dari pihak kami (di luar Force Majeure), uang yang telah dibayarkan
                        akan dikembalikan penuh 100%.
                      </li>
                    </ul>
                  </li>
                </ol>

                <h2 className="text-3xl font-bold text-dark mt-12 mb-6">4. Ketentuan Perjalanan dan Bagasi</h2>
                <ol className="list-decimal pl-6 space-y-4">
                  <li>
                    Layanan kami adalah <em>door-to-door</em> (antar jemput alamat) dalam batas area layanan yang
                    ditentukan. Penjemputan atau pengantaran di luar area yang disepakati dapat dikenakan biaya
                    tambahan.
                  </li>
                  <li>
                    Jadwal keberangkatan adalah estimasi. Waktu penjemputan dapat bervariasi (lebih cepat atau lebih
                    lambat) tergantung kondisi lalu lintas dan urutan penjemputan penumpang lain. Mohon bersiap
                    30-60 menit sebelum jadwal yang ditentukan.
                  </li>
                  <li>
                    Estimasi waktu tempuh adalah perkiraan dan dapat berubah tergantung kondisi lalu lintas, cuaca,
                    dan hambatan di perjalanan.
                  </li>
                  <li>
                    Setiap penumpang berhak atas 1 (satu) tas/koper ukuran standar (maksimal 20kg) dan 1 (satu) tas
                    kabin/ransel.
                  </li>
                  <li>
                    Kelebihan bagasi akan dikenakan biaya tambahan sesuai kebijakan kami. Harap informasikan kepada
                    admin jika Anda membawa bagasi berlebih saat pemesanan.
                  </li>
                  <li>
                    Penumpang dilarang keras membawa barang-barang ilegal (narkotika, senjata tajam/api), barang
                    mudah terbakar/meledak, minuman keras, dan hewan peliharaan tanpa persetujuan khusus dari kami.
                  </li>
                  <li>
                    Kami tidak bertanggung jawab atas kehilangan atau kerusakan barang bawaan pribadi penumpang
                    (seperti dompet, gadget, perhiasan) yang disebabkan oleh kelalaian penumpang sendiri.
                  </li>
                </ol>

                <h2 className="text-3xl font-bold text-dark mt-12 mb-6">5. Layanan Paket Express</h2>
                <ol className="list-decimal pl-6 space-y-4">
                  <li>
                    Kami hanya menerima pengiriman paket berisi barang legal (dokumen, pakaian, makanan kering,
                    dll).
                  </li>
                  <li>
                    Kami tidak bertanggung jawab atas kerusakan paket yang disebabkan oleh pengemasan yang tidak
                    baik dari pihak pengirim.
                  </li>
                  <li>
                    Pengirim wajib menginformasikan isi paket secara jujur. Jika ditemukan barang ilegal atau
                    berbahaya, kami berhak menolak atau melaporkan kepada pihak berwajib.
                  </li>
                </ol>

                <h2 className="text-3xl font-bold text-dark mt-12 mb-6">6. Tanggung Jawab Penumpang</h2>
                <ol className="list-decimal pl-6 space-y-4">
                  <li>
                    Penumpang diharapkan menjaga kebersihan dan ketertiban di dalam armada selama perjalanan.
                  </li>
                  <li>
                    Dilarang merokok, makan makanan berbau menyengat, atau melakukan tindakan yang mengganggu
                    kenyamanan penumpang lain atau pengemudi.
                  </li>
                  <li>Anak-anak di bawah usia 10 tahun harus dalam pengawasan orang tua/wali.</li>
                </ol>

                <div className="bg-light p-6 rounded-lg mt-12">
                  <p className="text-gray-700 font-medium">
                    Syarat dan ketentuan ini dapat berubah sewaktu-waktu tanpa pemberitahuan terlebih dahulu. Dengan
                    melakukan pemesanan, Anda dianggap tunduk pada syarat dan ketentuan versi terbaru.
                  </p>
                </div>

                <div className="text-center mt-12">
                  <p className="text-gray-600 mb-6">
                    Jika Anda memiliki pertanyaan mengenai syarat dan ketentuan ini, silakan hubungi kami.
                  </p>
                  <a
                    href="https://wa.me/6282143258744"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-secondary text-white px-8 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-all transform hover:-translate-y-1 shadow-lg"
                  >
                    Hubungi Kami via WhatsApp
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
