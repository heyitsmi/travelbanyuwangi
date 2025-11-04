import { Metadata } from "next";
import { Clock, Home, Zap, ChevronDown } from "lucide-react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Image from "next/image";
import Link from "next/link";
import BookingForm from "../../components/BookingForm";

export const metadata: Metadata = {
  title: "Travel Banyuwangi - Bandara Juanda (PP) | Jadwal & Harga | Juragan Travel",
  description: "Jadwal & harga travel Banyuwangi ke Bandara Juanda (PP) terbaru. Layanan door-to-door, carter, dan drop-off. Berangkat setiap hari, tepat waktu untuk penerbangan.",
  keywords: "travel banyuwangi juanda, travel banyuwangi ke bandara juanda, travel juanda banyuwangi, harga travel banyuwangi juanda, jadwal travel banyuwangi juanda, travel banyuwangi surabaya bandara",
  openGraph: {
    title: "Travel Banyuwangi - Bandara Juanda (PP) | Jadwal & Harga | Juragan Travel",
    description: "Jadwal & harga travel Banyuwangi ke Bandara Juanda (PP) terbaru. Layanan door-to-door, carter, dan drop-off. Berangkat setiap hari, tepat waktu.",
    type: "website",
    url: "https://juragantravel.com/rute/banyuwangi-juanda",
    images: [
      {
        url: "/img/hero.webp",
        width: 1200,
        height: 630,
        alt: "Travel Banyuwangi Juanda"
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Travel Banyuwangi - Bandara Juanda (PP) | Jadwal & Harga | Juragan Travel",
    description: "Jadwal & harga travel Banyuwangi ke Bandara Juanda (PP) terbaru. Layanan door-to-door, carter, dan drop-off.",
    images: ["/img/hero.webp"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://juragantravel.com/rute/banyuwangi-juanda",
  },
};

export default function BanyuwangiJuandaPage() {
  const whatsappNumber = "6282143258744";
  
  const whatsappLinks = {
    toJuanda: `https://wa.me/${whatsappNumber}?text=Halo%2C%20saya%20mau%20pesan%20travel%20Banyuwangi%20ke%20Bandara%20Juanda`,
    fromJuanda: `https://wa.me/${whatsappNumber}?text=Halo%2C%20saya%20mau%20pesan%20travel%20dari%20Bandara%20Juanda%20ke%20Banyuwangi`,
    carter: `https://wa.me/${whatsappNumber}?text=Halo%2C%20saya%20mau%20tanya%20harga%20carter%20Banyuwangi-Juanda`,
    general: `https://wa.me/${whatsappNumber}?text=Halo%20Admin,%20saya%20mau%20pesan%20travel%20Banyuwangi-Juanda.`
  };

  return (
    <>
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="bg-light py-20">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <nav className="text-sm mb-4">
              <Link href="/" className="text-gray-600 hover:text-primary">Beranda</Link>
              <span className="text-gray-400 mx-2">/</span>
              <Link href="/rute" className="text-gray-600 hover:text-primary">Rute</Link>
              <span className="text-gray-400 mx-2">/</span>
              <span className="text-dark font-medium">Banyuwangi - Bandara Juanda</span>
            </nav>
            <h1 className="text-4xl md:text-5xl font-extrabold text-dark">Travel Banyuwangi - Bandara Juanda (PP)</h1>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
              Jadwal travel Banyuwangi ke Bandara Juanda via tol. Tepat waktu untuk jadwal penerbangan Anda. Layanan door-to-airport aman dan nyaman.
            </p>
          </div>
        </section>

        {/* Detail Rute */}
        <section id="detail-rute" className="py-20 bg-white">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            
            {/* Deskripsi Rute */}
            <div className="flex flex-col md:flex-row items-center gap-12 mb-20">
              <div className="md:w-1/2">
                <Image 
                  src="/img/armada.webp"
                  alt="Armada travel Banyuwangi ke Bandara Juanda" 
                  width={600}
                  height={450}
                  className="rounded-lg shadow-xl w-full h-full object-cover"
                />
              </div>
              <div className="md:w-1/2">
                <span className="text-primary font-semibold uppercase">RUTE KHUSUS BANDARA</span>
                <h2 className="mt-2 text-3xl md:text-4xl font-extrabold text-dark">
                  Travel Banyuwangi ke Bandara Juanda (Surabaya)
                </h2>
                <p className="mt-4 text-lg text-gray-700 leading-relaxed">
                  Kami menyediakan layanan <strong>travel Banyuwangi ke Bandara Juanda</strong> (dan sebaliknya) sebagai rute bandara terpopuler kami. Layanan ini dirancang khusus untuk memastikan Anda tiba tepat waktu untuk mengejar jadwal penerbangan.
                </p>
                <p className="mt-4 text-lg text-gray-700 leading-relaxed">
                  Kami melayani penjemputan di alamat Anda (door-to-door) di area Banyuwangi dan mengantar Anda langsung ke terminal keberangkatan Bandara Juanda (T1 atau T2). Begitu pula sebaliknya, kami siap menjemput Anda di terminal kedatangan Juanda untuk kembali ke Banyuwangi.
                </p>
              </div>
            </div>

            {/* Jadwal & Harga */}
            <div className="bg-light p-8 md:p-12 rounded-lg shadow-lg mb-20">
              <div className="text-center">
                <h2 className="text-3xl md:text-4xl font-extrabold text-dark">Jadwal & Harga Travel</h2>
                <p className="mt-4 text-lg text-gray-600">Jadwal fleksibel, harga pasti. Pesan kursi Anda sekarang!</p>
              </div>
              <div className="mt-10 overflow-x-auto">
                <table className="w-full min-w-max text-left">
                  <thead>
                    <tr className="border-b border-gray-300">
                      <th className="p-4 text-lg font-semibold text-dark">Rute</th>
                      <th className="p-4 text-lg font-semibold text-dark">Jadwal Berangkat</th>
                      <th className="p-4 text-lg font-semibold text-dark">Harga (mulai)</th>
                      <th className="p-4 text-lg font-semibold text-dark">Aksi</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr className="hover:bg-white transition-colors">
                      <td className="p-4 font-medium text-gray-700">Banyuwangi → Bandara Juanda</td>
                      <td className="p-4 text-gray-700">Hubungi Admin (Menyesuaikan Jadwal Pesawat)</td>
                      <td className="p-4 font-bold text-primary text-lg">Rp 170.000</td>
                      <td className="p-4">
                        <a 
                          href={whatsappLinks.toJuanda}
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="bg-secondary text-white px-4 py-2 rounded-lg font-medium hover:bg-opacity-90"
                        >
                          Pesan
                        </a>
                      </td>
                    </tr>
                    <tr className="hover:bg-white transition-colors">
                      <td className="p-4 font-medium text-gray-700">Bandara Juanda → Banyuwangi</td>
                      <td className="p-4 text-gray-700">Hubungi Admin (Menyesuaikan Jadwal Landing)</td>
                      <td className="p-4 font-bold text-primary text-lg">Rp 170.000</td>
                      <td className="p-4">
                        <a 
                          href={whatsappLinks.fromJuanda}
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="bg-secondary text-white px-4 py-2 rounded-lg font-medium hover:bg-opacity-90"
                        >
                          Pesan
                        </a>
                      </td>
                    </tr>
                    <tr className="hover:bg-white transition-colors">
                      <td className="p-4 font-medium text-gray-700">Carter Drop (Private) Banyuwangi - Juanda</td>
                      <td className="p-4 text-gray-700">Fleksibel 24 Jam (Sesuai Pesanan)</td>
                      <td className="p-4 font-bold text-primary text-lg">Rp 750.000</td>
                      <td className="p-4">
                        <a 
                          href={whatsappLinks.carter}
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="bg-secondary text-white px-4 py-2 rounded-lg font-medium hover:bg-opacity-90"
                        >
                          Pesan
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-center mt-6 text-sm text-gray-600">
                *Harga dapat berubah sewaktu-waktu. Hubungi admin via WA untuk harga pasti dan promo terbaru.
              </p>
            </div>

            {/* Keunggulan Rute */}
            <div className="mb-20">
              <div className="text-center">
                <h2 className="text-3xl md:text-4xl font-extrabold text-dark">Keunggulan Rute Travel Banyuwangi Juanda</h2>
              </div>
              <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-white p-6 rounded-lg shadow-lg flex items-start space-x-4">
                  <Clock className="w-12 h-12 text-secondary flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold text-dark">Tepat Waktu</h3>
                    <p className="text-gray-600 mt-1">Kami memprioritaskan jadwal Anda agar tidak ketinggalan pesawat.</p>
                  </div>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-lg flex items-start space-x-4">
                  <Home className="w-12 h-12 text-secondary flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold text-dark">Door to Airport</h3>
                    <p className="text-gray-600 mt-1">Kami jemput di rumah Anda dan antar langsung ke Terminal T1 atau T2.</p>
                  </div>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-lg flex items-start space-x-4">
                  <Zap className="w-12 h-12 text-secondary flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold text-dark">Layanan 24 Jam</h3>
                    <p className="text-gray-600 mt-1">Jadwal kami fleksibel menyesuaikan jam kedatangan atau keberangkatan pesawat Anda.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* FAQ Rute Spesifik */}
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-extrabold text-dark text-center mb-10">FAQ - Rute Banyuwangi Juanda</h2>
              <div className="space-y-6">
                
                <details className="bg-light p-6 rounded-lg shadow-md group" open>
                  <summary className="flex justify-between items-center font-semibold text-lg text-primary cursor-pointer">
                    Berapa jam perjalanan travel Banyuwangi ke Juanda?
                    <ChevronDown className="w-5 h-5 transition-transform duration-300 group-open:rotate-180" />
                  </summary>
                  <p className="mt-4 text-gray-700 leading-relaxed">
                    Estimasi waktu tempuh normal adalah sekitar 6-7 jam via tol. Untuk mengejar penerbangan, kami sangat menyarankan Anda mengambil jadwal keberangkatan minimal 9-10 jam sebelum jam terbang.
                  </p>
                </details>

                <details className="bg-light p-6 rounded-lg shadow-md group">
                  <summary className="flex justify-between items-center font-semibold text-lg text-primary cursor-pointer">
                    Apakah bisa jemput/antar di Terminal 1 dan Terminal 2 Juanda?
                    <ChevronDown className="w-5 h-5 transition-transform duration-300 group-open:rotate-180" />
                  </summary>
                  <p className="mt-4 text-gray-700 leading-relaxed">
                    Ya, tentu saja. Kami melayani antar jemput di Terminal 1 (T1) dan Terminal 2 (T2) Bandara Internasional Juanda. Mohon informasikan terminal Anda saat memesan.
                  </p>
                </details>

                <details className="bg-light p-6 rounded-lg shadow-md group">
                  <summary className="flex justify-between items-center font-semibold text-lg text-primary cursor-pointer">
                    Bagaimana jika pesawat saya delay (untuk penjemputan di Juanda)?
                    <ChevronDown className="w-5 h-5 transition-transform duration-300 group-open:rotate-180" />
                  </summary>
                  <p className="mt-4 text-gray-700 leading-relaxed">
                    Untuk penjemputan di Juanda, harap selalu informasikan nomor penerbangan Anda. Driver kami akan memantau jadwal landing. Jika terjadi delay, harap segera konfirmasi ke admin agar kami bisa mengatur ulang jadwal penjemputan Anda.
                  </p>
                </details>

                <details className="bg-light p-6 rounded-lg shadow-md group">
                  <summary className="flex justify-between items-center font-semibold text-lg text-primary cursor-pointer">
                    Berapa harga carter/private travel Banyuwangi ke Juanda?
                    <ChevronDown className="w-5 h-5 transition-transform duration-300 group-open:rotate-180" />
                  </summary>
                  <p className="mt-4 text-gray-700 leading-relaxed">
                    Harga carter (1 mobil Avanza/Xenia) untuk rute Banyuwangi - Juanda adalah mulai dari <strong>Rp 750.000,-</strong> (All-in: mobil, driver, bbm, tol, parkir). Harga bisa berbeda jika menggunakan unit Innova atau HiAce.
                  </p>
                </details>

              </div>
            </div>

          </div>
        </section>

        {/* Form Pemesanan Section */}
        <section id="form-pemesanan" className="py-20 bg-white">
        <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-dark">
                Pesan Travel Banyuwangi - Bandara Juanda
            </h2>
            <p className="mt-4 text-lg text-gray-600">
                Isi formulir di bawah ini untuk pesan tiket travel dengan mudah dan cepat
            </p>
            </div>

            <BookingForm routeName="Banyuwangi → Juanda" />
        </div>
        </section>

        {/* CTA Section */}
        <section id="kontak" className="py-20 bg-primary text-white">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-extrabold">
              Pesan Travel ke Bandara Juanda Sekarang
            </h2>
            <p className="mt-4 text-lg text-gray-200 max-w-2xl mx-auto">
              Jangan sampai ketinggalan pesawat. Amankan kursi Anda sekarang. Hubungi admin kami via WhatsApp untuk booking cepat dan penjemputan tepat waktu.
            </p>
            <a 
              href={whatsappLinks.general}
              target="_blank" 
              rel="noopener noreferrer"
              className="mt-10 inline-block bg-accent text-white px-10 py-3 rounded-lg font-bold text-lg shadow-lg hover:bg-opacity-90 transition-all transform hover:-translate-y-1"
            >
              Pesan Rute Juanda via WA
            </a>
          </div>
        </section>
      </main>

      <Footer />

      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BusTrip",
            "provider": {
              "@type": "TravelAgency",
              "name": "Juragan Travel",
              "url": "https://juragantravel.com/",
              "telephone": "+6282143258744",
              "image": "https://juragantravel.com/img/hero.webp"
            },
            "departureBusStop": {
              "@type": "BusStop",
              "name": "Area Banyuwangi (Door-to-door)",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Banyuwangi",
                "addressRegion": "Jawa Timur",
                "addressCountry": "ID"
              }
            },
            "arrivalBusStop": {
              "@type": "BusStop",
              "name": "Bandara Internasional Juanda (Terminal 1 & 2)",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Sidoarjo",
                "addressRegion": "Jawa Timur",
                "addressCountry": "ID"
              }
            },
            "name": "Travel Banyuwangi - Bandara Juanda (PP)",
            "description": "Layanan travel door-to-door antara Banyuwangi dan Bandara Juanda Surabaya via tol.",
            "offers": {
              "@type": "Offer",
              "price": "170000",
              "priceCurrency": "IDR",
              "name": "Harga Tiket Travel Banyuwangi Juanda",
              "description": "Harga dapat bervariasi. Hubungi admin untuk harga pasti.",
              "url": "https://juragantravel.com/rute/banyuwangi-juanda",
              "availability": "https://schema.org/InStock"
            }
          })
        }}
      />
    </>
  );
}