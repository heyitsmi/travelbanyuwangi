import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { StructuredData } from "../../components/SEO";
import { CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Travel Banyuwangi - Surabaya, Malang, Denpasar (PP) | travelbanyuwangi.id",
  description:
    "Jadwal travel Banyuwangi ke Surabaya, Malang, dan Denpasar (PP) setiap hari. Layanan door-to-door aman, nyaman, dengan harga terbaik. Pesan sekarang!",
  keywords:
    "travel banyuwangi surabaya, travel banyuwangi malang, travel banyuwangi denpasar, travel surabaya banyuwangi, travel malang banyuwangi, travel denpasar banyuwangi, jadwal travel banyuwangi, harga travel banyuwangi",
  authors: [{ name: "travelbanyuwangi.id" }],
  openGraph: {
    title: "Travel Banyuwangi - Surabaya, Malang, Denpasar (PP) | travelbanyuwangi.id",
    description: "Jadwal travel Banyuwangi ke Surabaya, Malang, dan Denpasar (PP) setiap hari. Layanan door-to-door aman dan nyaman.",
    type: "website",
    url: "https://travelbanyuwangi.id/layanan/travel-antar-kota",
    images: [
      {
        url: "/img/layanan/travel.webp",
        width: 1200,
        height: 630,
      },
    ],
    siteName: "travelbanyuwangi.id",
  },
  twitter: {
    card: "summary_large_image",
    title: "Travel Banyuwangi - Surabaya, Malang, Denpasar (PP) | travelbanyuwangi.id",
    description: "Jadwal travel Banyuwangi ke Surabaya, Malang, dan Denpasar (PP) setiap hari. Layanan door-to-door aman dan nyaman.",
    images: ["/img/layanan/travel.webp"],
  },
  alternates: {
    canonical: "https://travelbanyuwangi.id/layanan/travel-antar-kota",
  },
};

const serviceData = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "TravelAgency",
  provider: {
    "@type": "TravelAgency",
    name: "travelbanyuwangi.id",
    url: "https://travelbanyuwangi.id/",
  },
  name: "Travel Antar Kota Banyuwangi (Surabaya, Malang, Denpasar)",
  description:
    "Layanan travel door-to-door dari Banyuwangi ke Surabaya, Malang, Denpasar, dan sebaliknya. Jadwal setiap hari, armada nyaman, harga terjangkau.",
  areaServed: [
    { "@type": "City", name: "Banyuwangi" },
    { "@type": "City", name: "Surabaya" },
    { "@type": "City", name: "Malang" },
    { "@type": "City", name: "Denpasar" },
  ],
  offers: [
    {
      "@type": "Offer",
      name: "Travel Banyuwangi - Surabaya",
      category: "Travel",
      priceCurrency: "IDR",
      price: "150000",
    },
    {
      "@type": "Offer",
      name: "Travel Banyuwangi - Malang",
      category: "Travel",
      priceCurrency: "IDR",
      price: "140000",
    },
    {
      "@type": "Offer",
      name: "Travel Banyuwangi - Denpasar",
      category: "Travel",
      priceCurrency: "IDR",
      price: "170000",
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
      name: "Layanan",
      item: "https://travelbanyuwangi.id/layanan",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Travel Antar Kota",
      item: "https://travelbanyuwangi.id/layanan/travel-antar-kota",
    },
  ],
};

export default function TravelAntarKotaPage() {
  return (
    <>
      <StructuredData data={serviceData} />
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
                <Link href="/layanan" className="text-gray-600 hover:text-primary">
                  Layanan
                </Link>
                <span className="text-gray-400 mx-2">/</span>
                <span className="text-dark font-medium">Travel Antar Kota</span>
              </nav>
              <h1 className="text-4xl md:text-5xl font-extrabold text-dark">Layanan Travel Antar Kota</h1>
              <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
                Jasa travel door-to-door premium dari Banyuwangi ke Surabaya, Malang, Denpasar, dan kota-kota lain di
                Jawa & Bali.
              </p>
            </div>
          </section>

          {/* Detail Rute Section */}
          <section id="detail-rute" className="py-20 bg-white">
            <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              {/* Rute 1: Banyuwangi - Surabaya */}
              <div className="flex flex-col md:flex-row items-center gap-12 mb-20">
                <div className="md:w-1/2 relative h-96 w-full">
                  <Image
                    src="/img/rute/banyuwangi-surabaya.webp"
                    alt="Armada travel Banyuwangi ke Surabaya via tol"
                    fill
                    className="rounded-lg shadow-xl object-cover"
                  />
                </div>
                <div className="md:w-1/2">
                  <h2 className="text-3xl md:text-4xl font-extrabold text-dark">Travel Banyuwangi - Surabaya (PP)</h2>
                  <p className="mt-4 text-lg text-gray-700 leading-relaxed">
                    Nikmati perjalanan cepat dan nyaman untuk rute <strong>travel Banyuwangi - Surabaya</strong> (atau{" "}
                    <strong>travel Surabaya - Banyuwangi</strong>) dengan layanan door-to-door kami. Kami menjemput Anda
                    di rumah dan mengantar hingga ke alamat tujuan di Surabaya, Sidoarjo, atau Gresik.
                  </p>
                  <ul className="mt-6 space-y-3 text-lg text-gray-700">
                    <li className="flex items-center">
                      <CheckCircle className="w-6 h-6 text-secondary mr-3 shrink-0" />
                      <span>
                        Layanan <strong>Door-to-Door</strong> (Jemput & Antar Alamat)
                      </span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-6 h-6 text-secondary mr-3 shrink-0" />
                      <span>
                        Perjalanan Cepat via <strong>Tol Trans Jawa</strong>
                      </span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-6 h-6 text-secondary mr-3 shrink-0" />
                      <span>
                        Jadwal Berangkat <strong>Pagi, Siang, dan Malam</strong>
                      </span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-6 h-6 text-secondary mr-3 shrink-0" />
                      <span>Armada Hiace & Elf Terbaru (Full AC, Reclining Seat)</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Rute 2: Banyuwangi - Malang */}
              <div className="flex flex-col md:flex-row-reverse items-center gap-12 mb-20">
                <div className="md:w-1/2 relative h-96 w-full">
                  <Image
                    src="/img/rute/banyuwangi-malang.webp"
                    alt="Armada travel Banyuwangi ke Malang"
                    fill
                    className="rounded-lg shadow-xl object-cover"
                  />
                </div>
                <div className="md:w-1/2">
                  <h2 className="text-3xl md:text-4xl font-extrabold text-dark">Travel Banyuwangi - Malang (PP)</h2>
                  <p className="mt-4 text-lg text-gray-700 leading-relaxed">
                    Kami adalah solusi terbaik untuk rute <strong>travel Banyuwangi - Malang</strong> (atau{" "}
                    <strong>travel Malang - Banyuwangi</strong>). Sering digunakan oleh mahasiswa atau wisatawan, kami
                    melayani penjemputan di seluruh area Banyuwangi untuk diantar ke kota Malang, Batu, dan sekitarnya.
                  </p>
                  <ul className="mt-6 space-y-3 text-lg text-gray-700">
                    <li className="flex items-center">
                      <CheckCircle className="w-6 h-6 text-secondary mr-3 shrink-0" />
                      <span>Jemput di Rumah, Antar sampai Kampus atau Hotel</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-6 h-6 text-secondary mr-3 shrink-0" />
                      <span>Melayani rute via Jember atau Probolinggo</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-6 h-6 text-secondary mr-3 shrink-0" />
                      <span>Jadwal Keberangkatan Fleksibel Setiap Hari</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Rute 3: Banyuwangi - Denpasar */}
              <div className="flex flex-col md:flex-row items-center gap-12 mb-20">
                <div className="md:w-1/2 relative h-96 w-full">
                  <Image
                    src="/img/rute/banyuwangi-denpasar.webp"
                    alt="Armada travel Banyuwangi ke Denpasar Bali"
                    fill
                    className="rounded-lg shadow-xl object-cover"
                  />
                </div>
                <div className="md:w-1/2">
                  <h2 className="text-3xl md:text-4xl font-extrabold text-dark">Travel Banyuwangi - Denpasar (PP)</h2>
                  <p className="mt-4 text-lg text-gray-700 leading-relaxed">
                    Perjalanan lintas pulau kini lebih mudah dengan layanan <strong>travel Banyuwangi - Denpasar</strong>{" "}
                    (atau <strong>travel Denpasar - Banyuwangi</strong>). Kami mengurus semua kebutuhan Anda, termasuk
                    kenyamanan saat penyeberangan.
                  </p>
                  <ul className="mt-6 space-y-3 text-lg text-gray-700">
                    <li className="flex items-center">
                      <CheckCircle className="w-6 h-6 text-secondary mr-3 shrink-0" />
                      <span>Layanan Door-to-Door area Denpasar, Kuta, Jimbaran</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-6 h-6 text-secondary mr-3 shrink-0" />
                      <span>
                        Harga Sudah <strong>Termasuk Tiket Kapal Ferry</strong>
                      </span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-6 h-6 text-secondary mr-3 shrink-0" />
                      <span>Antar Jemput ke Bandara Ngurah Rai (sesuai request)</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Jadwal & Harga Section */}
          <section id="jadwal-harga" className="py-20 bg-light">
            <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              {/* Judul Section */}
              <div className="text-center">
                <h2 className="text-3xl md:text-4xl font-extrabold text-dark">Jadwal & Harga Travel</h2>
                <p className="mt-4 text-lg text-gray-600">Jadwal pasti, berangkat setiap hari, dengan harga terbaik.</p>
              </div>

              {/* Tabel Harga */}
              <div className="mt-12 max-w-4xl mx-auto bg-white shadow-xl rounded-lg overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full text-left">
                    <thead className="bg-dark text-white">
                      <tr>
                        <th className="py-4 px-6 font-semibold">Rute Travel</th>
                        <th className="py-4 px-6 font-semibold">Jadwal Keberangkatan</th>
                        <th className="py-4 px-6 font-semibold">Harga Mulai (IDR)</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      <tr className="hover:bg-gray-50">
                        <td className="py-4 px-6 font-medium text-primary">Banyuwangi ↔ Surabaya</td>
                        <td className="py-4 px-6 text-gray-700">07:00, 13:00, 21:00</td>
                        <td className="py-4 px-6 font-semibold text-gray-900">Rp 150.000</td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="py-4 px-6 font-medium text-primary">Banyuwangi ↔ Malang</td>
                        <td className="py-4 px-6 text-gray-700">07:00, 13:00, 21:00</td>
                        <td className="py-4 px-6 font-semibold text-gray-900">Rp 140.000</td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="py-4 px-6 font-medium text-primary">Banyuwangi ↔ Denpasar</td>
                        <td className="py-4 px-6 text-gray-700">08:00, 14:00, 20:00</td>
                        <td className="py-4 px-6 font-semibold text-gray-900">Rp 170.000</td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="py-4 px-6 font-medium text-primary">Banyuwangi ↔ Solo</td>
                        <td className="py-4 px-6 text-gray-700">07:00, 20:00</td>
                        <td className="py-4 px-6 font-semibold text-gray-900">Rp 250.000</td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="py-4 px-6 font-medium text-primary">Banyuwangi ↔ Tulungagung</td>
                        <td className="py-4 px-6 text-gray-700">07:00, 20:00</td>
                        <td className="py-4 px-6 font-semibold text-gray-900">Rp 180.000</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <p className="text-center mt-6 text-gray-600">
                *Harga dapat berubah sewaktu-waktu. Hubungi admin untuk harga pasti dan diskon rombongan.
              </p>
            </div>
          </section>

          {/* Kontak & CTA Section */}
          <section id="kontak" className="py-20 bg-primary text-white">
            <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
              <h2 className="text-3xl md:text-4xl font-extrabold">Pesan Tiket Travel Anda Sekarang!</h2>
              <p className="mt-4 text-lg text-gray-200 max-w-2xl mx-auto">
                Jangan tunda perjalanan Anda. Hubungi admin kami via WhatsApp untuk booking kursi dan konfirmasi jadwal
                jemput.
              </p>
              <a
                href="https://wa.me/6282143258744"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-10 inline-block bg-accent text-white px-10 py-3 rounded-lg font-bold text-lg shadow-lg hover:bg-opacity-90 transition-all transform hover:-translate-y-1"
              >
                Booking via WhatsApp (Respon Cepat)
              </a>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
}
