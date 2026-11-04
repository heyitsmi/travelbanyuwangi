import { Metadata } from "next";
import Header from "../components/Header";
import Footer from "../components/Footer";
import CekHargaForm from "../components/CekHargaForm";
import WhatsAppLink from "../components/WhatsAppLink";
import { ChevronDown } from "lucide-react";

export const metadata: Metadata = {
  title: "Cek Harga Travel Antar Kota | Juragan Travel Banyuwangi",
  description:
    "Cek harga dan estimasi biaya travel antar kota dari Juragan Travel. Dapatkan harga terbaru untuk rute Banyuwangi, Surabaya, Malang, Denpasar, Solo, dan lainnya secara instan.",
  keywords:
    "cek harga travel, harga travel banyuwangi, estimasi biaya travel, harga travel antar kota, tarif travel banyuwangi surabaya",
  authors: [{ name: "Juragan Travel" }],
  openGraph: {
    title: "Cek Harga Travel Antar Kota | Juragan Travel",
    description:
      "Cek harga dan estimasi biaya travel antar kota dari Juragan Travel secara instan. Harga terbaru untuk semua rute.",
    type: "website",
    url: "https://juragantravel.com/cek-harga",
    images: [
      {
        url: "https://juragantravel.com/img/hero.webp",
        width: 1200,
        height: 630,
        alt: "Cek Harga Travel Juragan Travel",
      },
    ],
    siteName: "Juragan Travel",
    locale: "id_ID",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cek Harga Travel Antar Kota | Juragan Travel",
    description:
      "Cek harga dan estimasi biaya travel antar kota dari Juragan Travel secara instan.",
    images: ["https://juragantravel.com/img/hero.webp"],
    creator: "@juragantravel",
    site: "@juragantravel",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://juragantravel.com/cek-harga",
  },
};

// Structured Data untuk FAQPage
const faqStructuredData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Apakah harga travel yang muncul sudah pasti?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Harga yang ditampilkan adalah estimasi biaya per orang untuk layanan travel reguler. Harga ini sudah termasuk tol dan bensin, namun dapat berubah sewaktu-waktu. Selalu konfirmasi harga final dengan admin kami saat melakukan pemesanan.",
      },
    },
    {
      "@type": "Question",
      name: "Rute yang saya cari tidak ada di daftar. Bagaimana?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Daftar ini hanya menampilkan rute reguler terpopuler kami. Jika rute Anda tidak ada (misal ke luar provinsi), silakan hubungi admin kami. Kami juga melayani carter mobil/drop off ke semua tujuan di Jawa & Bali dengan harga yang sangat kompetitif.",
      },
    },
    {
      "@type": "Question",
      name: "Apakah harga untuk penjemputan di Bandara (seperti Juanda) berbeda?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ya, biasanya ada sedikit penyesuaian harga untuk penjemputan/pengantaran di bandara (seperti Bandara Juanda atau Ngurah Rai) karena perbedaan lokasi dan waktu tunggu. Anda bisa melihat estimasinya di database kami (contoh: 'Banyuwangi' ke 'Bandara Juanda') atau tanyakan langsung ke admin.",
      },
    },
  ],
};

// Breadcrumb Structured Data
const breadcrumbStructuredData = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Beranda",
      item: "https://juragantravel.com",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Cek Harga Travel",
      item: "https://juragantravel.com/cek-harga",
    },
  ],
};

export default function CekHargaPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbStructuredData),
        }}
      />

      <Header />

      <main>
        {/* Hero Section */}
        <section className="bg-light py-20">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <nav className="text-sm mb-4">
              <a href="/" className="text-gray-600 hover:text-primary">
                Beranda
              </a>
              <span className="text-gray-400 mx-2">/</span>
              <span className="text-dark font-medium">Cek Harga Travel</span>
            </nav>
            <h1 className="text-4xl md:text-5xl font-extrabold text-dark">
              Cek Harga Travel Antar Kota
            </h1>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
              Dapatkan estimasi biaya perjalanan Anda secara instan untuk
              rute-rute populer kami. Harga transparan dan kompetitif.
            </p>
          </div>
        </section>

        {/* Form Cek Harga Section */}
        <section id="cek-harga-form" className="py-20 bg-white">
          <CekHargaForm />
        </section>

        {/* Informasi Tambahan Section */}
        <section id="informasi-harga" className="py-20 bg-light">
          <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-extrabold text-dark">
                Tentang Harga Kami
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                Informasi penting seputar harga travel kami
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
                <h3 className="text-xl font-bold text-primary mb-3">
                  Harga Sudah Termasuk
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-secondary mr-2">✓</span>
                    <span>Biaya tol dan bensin</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-secondary mr-2">✓</span>
                    <span>Layanan door-to-door</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-secondary mr-2">✓</span>
                    <span>Driver berpengalaman</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-secondary mr-2">✓</span>
                    <span>Armada nyaman dan bersih</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-secondary mr-2">✓</span>
                    <span>Asuransi perjalanan</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
                <h3 className="text-xl font-bold text-primary mb-3">
                  Catatan Penting
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-accent mr-2">•</span>
                    <span>
                      Harga per orang untuk layanan reguler
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-2">•</span>
                    <span>
                      Harga dapat berubah sewaktu-waktu
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-2">•</span>
                    <span>
                      Konfirmasi harga saat pemesanan
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-2">•</span>
                    <span>
                      Tersedia layanan carter untuk rute khusus
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-2">•</span>
                    <span>
                      Harga spesial untuk group/rombongan
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq-page" className="py-20 bg-white">
          <div className="container mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-extrabold text-dark">
                Pertanyaan yang Sering Diajukan
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                Jawaban cepat untuk pertanyaan seputar pengecekan harga
              </p>
            </div>

            <div className="space-y-4">
              {/* FAQ 1 */}
              <details
                className="bg-light p-6 rounded-lg shadow-sm border border-gray-100 group"
                open
              >
                <summary className="flex justify-between items-center font-semibold text-lg text-dark cursor-pointer group-hover:text-primary">
                  Apakah harga travel yang muncul sudah pasti?
                  <ChevronDown className="w-5 h-5 text-primary transition-transform duration-300 group-open:rotate-180" />
                </summary>
                <p className="mt-4 text-gray-700 leading-relaxed">
                  Harga yang ditampilkan adalah <strong>estimasi biaya per orang</strong>{" "}
                  untuk layanan travel reguler. Harga ini sudah termasuk tol dan
                  bensin, namun dapat berubah sewaktu-waktu. Selalu konfirmasi
                  harga final dengan admin kami saat melakukan pemesanan.
                </p>
              </details>

              {/* FAQ 2 */}
              <details className="bg-light p-6 rounded-lg shadow-sm border border-gray-100 group">
                <summary className="flex justify-between items-center font-semibold text-lg text-dark cursor-pointer group-hover:text-primary">
                  Rute yang saya cari tidak ada di daftar. Bagaimana?
                  <ChevronDown className="w-5 h-5 text-primary transition-transform duration-300 group-open:rotate-180" />
                </summary>
                <p className="mt-4 text-gray-700 leading-relaxed">
                  Daftar ini hanya menampilkan rute reguler terpopuler kami.
                  Jika rute Anda tidak ada (misal ke luar provinsi), silakan
                  hubungi admin kami. Kami juga melayani{" "}
                  <strong>carter mobil/drop off</strong> ke semua tujuan di Jawa
                  & Bali dengan harga yang sangat kompetitif.
                </p>
              </details>

              {/* FAQ 3 */}
              <details className="bg-light p-6 rounded-lg shadow-sm border border-gray-100 group">
                <summary className="flex justify-between items-center font-semibold text-lg text-dark cursor-pointer group-hover:text-primary">
                  Apakah harga untuk penjemputan di Bandara (seperti Juanda)
                  berbeda?
                  <ChevronDown className="w-5 h-5 text-primary transition-transform duration-300 group-open:rotate-180" />
                </summary>
                <p className="mt-4 text-gray-700 leading-relaxed">
                  Ya, biasanya ada sedikit penyesuaian harga untuk
                  penjemputan/pengantaran di bandara (seperti Bandara Juanda atau
                  Ngurah Rai) karena perbedaan lokasi dan waktu tunggu. Anda bisa
                  melihat estimasinya di database kami (contoh: Banyuwangi ke
                  Bandara Juanda) atau tanyakan langsung ke admin.
                </p>
              </details>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="cta-section" className="py-20 bg-primary text-white">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-extrabold">
              Butuh Informasi Lebih Lanjut?
            </h2>
            <p className="mt-4 text-lg text-gray-200 max-w-2xl mx-auto">
              Tim kami siap membantu Anda melalui formulir kontak untuk memberikan
              informasi harga terbaru, promo spesial, atau layanan custom sesuai
              kebutuhan Anda.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <WhatsAppLink
                title="Hubungi Juragan Travel melalui formulir kontak"
                className="inline-block bg-accent text-white px-8 py-3 rounded-lg font-bold text-lg shadow-lg hover:bg-opacity-90 transition-all transform hover:-translate-y-1"
              >
                Hubungi Admin melalui formulir kontak
              </WhatsAppLink>
              <a
                href="/kontak"
                title="Lihat info kontak lengkap Juragan Travel"
                className="inline-block bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-bold text-lg hover:bg-white hover:text-primary transition-all"
              >
                Info Kontak Lengkap
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
