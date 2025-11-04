import { Metadata } from 'next';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { ChevronDown } from 'lucide-react';

export const metadata: Metadata = {
  title: 'FAQ (Pertanyaan Umum) | Juragan Travel',
  description: 'Temukan jawaban atas pertanyaan umum seputar layanan travel Banyuwangi ke Surabaya, Malang, Denpasar, pengiriman paket, dan cara pembayaran.',
  keywords: 'faq travel banyuwangi, pertanyaan umum travel, travel banyuwangi setiap hari, bayar travel di tempat, kirim paket via travel',
  authors: [{ name: 'Juragan Travel' }],
  openGraph: {
    title: 'FAQ (Pertanyaan Umum) | Juragan Travel',
    description: 'Temukan jawaban atas pertanyaan umum seputar layanan travel Banyuwangi.',
    type: 'website',
    url: 'https://juragantravel.com/faq',
    images: [
      {
        url: '/img/hero.webp',
        width: 1200,
        height: 630,
        alt: 'FAQ Juragan Travel',
      },
    ],
    siteName: 'Juragan Travel',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FAQ (Pertanyaan Umum) | Juragan Travel',
    description: 'Temukan jawaban atas pertanyaan umum seputar layanan travel Banyuwangi.',
    images: ['/img/hero.webp'],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://juragantravel.com/faq',
  },
};

// Structured Data for FAQPage
const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Apakah Juragan Travel berangkat setiap hari?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ya, kami beroperasi setiap hari (Senin - Minggu) untuk semua rute travel populer kami, termasuk Banyuwangi - Surabaya, Banyuwangi - Malang, dan Banyuwangi - Denpasar. Kami memiliki jadwal pagi, siang, dan malam.',
      },
    },
    {
      '@type': 'Question',
      name: 'Apakah bisa dijemput di rumah (door-to-door)?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Tentu saja. Layanan utama kami adalah \'door-to-door\'. Kami akan menjemput Anda di alamat yang Anda berikan (selama masih dalam area jangkauan kami) dan mengantar Anda langsung ke alamat tujuan.',
      },
    },
    {
      '@type': 'Question',
      name: 'Apakah saya bisa kirim barang saja?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ya, kami melayani pengiriman barang atau dokumen melalui layanan \'Paket Express\'. Paket Anda bisa tiba di hari yang sama untuk rute-rute tertentu (seperti Banyuwangi ke Surabaya atau Malang). Silakan hubungi admin kami untuk informasi lebih lanjut.',
      },
    },
    {
      '@type': 'Question',
      name: 'Bagaimana cara pembayarannya? Apakah bisa bayar di tempat?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Kami sangat fleksibel. Anda bisa melakukan pembayaran melalui transfer bank (BCA, BRI, Mandiri) saat booking, atau membayar secara tunai (cash) langsung kepada driver kami saat Anda dijemput. Kami juga sedang dalam proses penambahan metode pembayaran QRIS.',
      },
    },
    {
      '@type': 'Question',
      name: 'Bagaimana cara memesan travel?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Cara termudah dan tercepat adalah dengan menekan tombol \'Pesan via WA\' di website ini. Anda akan langsung terhubung dengan admin kami. Cukup informasikan: Nama, Jumlah Penumpang, Rute (misal: Banyuwangi ke Surabaya), Tanggal Berangkat, dan Alamat Jemput & Tujuan.',
      },
    },
    {
      '@type': 'Question',
      name: 'Armada apa yang digunakan?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Kami menggunakan armada terbaru yang bersih, terawat, dan full AC untuk kenyamanan Anda. Pilihan armada kami bervariasi, umumnya menggunakan Toyota HiAce, Isuzu Elf, atau Innova Reborn, tergantung ketersediaan dan jumlah penumpang.',
      },
    },
  ],
};

// Breadcrumb Structured Data
const breadcrumbStructuredData = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Beranda',
      item: 'https://juragantravel.com',
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'FAQ',
      item: 'https://juragantravel.com/faq',
    },
  ],
};

// FAQ Data
const faqItems = [
  {
    id: 1,
    question: 'Apakah Juragan Travel berangkat setiap hari?',
    answer: 'Ya, kami beroperasi setiap hari (Senin - Minggu) untuk semua rute travel populer kami, termasuk Banyuwangi - Surabaya, Banyuwangi - Malang, dan Banyuwangi - Denpasar. Kami memiliki jadwal pagi, siang, dan malam.',
    defaultOpen: true,
  },
  {
    id: 2,
    question: 'Apakah bisa dijemput di rumah (door-to-door)?',
    answer: 'Tentu saja. Layanan utama kami adalah \'door-to-door\'. Kami akan menjemput Anda di alamat yang Anda berikan (selama masih dalam area jangkauan kami) dan mengantar Anda langsung ke alamat tujuan.',
    defaultOpen: false,
  },
  {
    id: 3,
    question: 'Apakah saya bisa kirim barang saja?',
    answer: 'Ya, kami melayani pengiriman barang atau dokumen melalui layanan \'Paket Express\'. Paket Anda bisa tiba di hari yang sama untuk rute-rute tertentu (seperti Banyuwangi ke Surabaya atau Malang). Silakan hubungi admin kami untuk informasi lebih lanjut.',
    defaultOpen: false,
  },
  {
    id: 4,
    question: 'Bagaimana cara pembayarannya? Apakah bisa bayar di tempat?',
    answer: 'Kami sangat fleksibel. Anda bisa melakukan pembayaran melalui transfer bank (BCA, BRI, Mandiri) saat booking, atau membayar secara tunai (cash) langsung kepada driver kami saat Anda dijemput. Kami juga sedang dalam proses penambahan metode pembayaran QRIS.',
    defaultOpen: false,
  },
  {
    id: 5,
    question: 'Bagaimana cara memesan travel?',
    answer: 'Cara termudah dan tercepat adalah dengan menekan tombol \'Pesan via WA\' di website ini. Anda akan langsung terhubung dengan admin kami. Cukup informasikan: Nama, Jumlah Penumpang, Rute (misal: Banyuwangi ke Surabaya), Tanggal Berangkat, dan Alamat Jemput & Tujuan.',
    defaultOpen: false,
  },
  {
    id: 6,
    question: 'Armada apa yang digunakan?',
    answer: 'Kami menggunakan armada terbaru yang bersih, terawat, dan full AC untuk kenyamanan Anda. Pilihan armada kami bervariasi, umumnya menggunakan Toyota HiAce, Isuzu Elf, atau Innova Reborn, tergantung ketersediaan dan jumlah penumpang.',
    defaultOpen: false,
  },
];

export default function FAQPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbStructuredData) }}
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
              <span className="text-dark font-medium">FAQ</span>
            </nav>
            <h1 className="text-4xl md:text-5xl font-extrabold text-dark">
              Pertanyaan Umum (FAQ)
            </h1>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
              Temukan jawaban singkat atas pertanyaan yang paling sering diajukan oleh pelanggan kami.
            </p>
          </div>
        </section>

        {/* FAQ Content Section */}
        <section id="faq-list" className="py-20 bg-white">
          <div className="container mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <div className="space-y-6">
              {faqItems.map((faq) => (
                <details
                  key={faq.id}
                  className="bg-light p-6 rounded-lg shadow-md group"
                  open={faq.defaultOpen}
                >
                  <summary className="flex justify-between items-center font-semibold text-lg text-primary cursor-pointer">
                    {faq.question}
                    <ChevronDown className="w-5 h-5 transition-transform duration-300 group-open:rotate-180" />
                  </summary>
                  <p className="mt-4 text-gray-700 leading-relaxed">
                    {faq.answer}
                  </p>
                </details>
              ))}
            </div>

            {/* Additional Help Section */}
            <div className="mt-16 text-center bg-light p-10 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold text-dark">
                Masih Punya Pertanyaan Lain?
              </h2>
              <p className="mt-3 text-lg text-gray-700">
                Tim admin kami siap membantu Anda 24 jam. Jangan ragu untuk bertanya!
              </p>
              <a
                href="https://wa.me/6282143258744"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-block bg-secondary text-white px-8 py-3 rounded-lg font-bold text-lg shadow-lg hover:bg-opacity-90 transition-all"
              >
                Hubungi via WhatsApp
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
