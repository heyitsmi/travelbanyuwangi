import { Metadata } from "next";
import { Clock, Home, Ship, ChevronDown } from "lucide-react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Image from "next/image";
import Link from "next/link";
import BookingForm from "../../components/BookingForm";

export const metadata: Metadata = {
  title: "Travel Banyuwangi - Bandara Ngurah Rai (PP) | Jadwal & Harga | travelbanyuwangi.id",
  description: "Jadwal & harga travel Banyuwangi ke Bandara Ngurah Rai (PP) terbaru. Layanan door-to-door, carter, dan drop-off. Berangkat setiap hari, tepat waktu untuk penerbangan di Bali.",
  keywords: "travel banyuwangi ngurah rai, travel banyuwangi ke bandara bali, travel bandara ngurah rai banyuwangi, harga travel banyuwangi ngurah rai, jadwal travel banyuwangi ngurah rai, travel banyuwangi denpasar bandara",
  openGraph: {
    title: "Travel Banyuwangi - Bandara Ngurah Rai (PP) | Jadwal & Harga | travelbanyuwangi.id",
    description: "Jadwal & harga travel Banyuwangi ke Bandara Ngurah Rai (PP) terbaru. Layanan door-to-door, carter, dan drop-off. Berangkat setiap hari, tepat waktu.",
    type: "website",
    url: "https://travelbanyuwangi.id/rute/banyuwangi-ngurah-rai",
    images: [
      {
        url: "/img/hero.webp",
        width: 1200,
        height: 630,
        alt: "Travel Banyuwangi Ngurah Rai"
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Travel Banyuwangi - Bandara Ngurah Rai (PP) | Jadwal & Harga | travelbanyuwangi.id",
    description: "Jadwal & harga travel Banyuwangi ke Bandara Ngurah Rai (PP) terbaru. Layanan door-to-door, carter, dan drop-off.",
    images: ["/img/hero.webp"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://travelbanyuwangi.id/rute/banyuwangi-ngurah-rai",
  },
};

export default function BanyuwangiNgurahRaiPage() {
  const whatsappNumber = "6282143258744";
  
  const whatsappLinks = {
    toNgurahRai: `https://wa.me/${whatsappNumber}?text=Halo%2C%20saya%20mau%20pesan%20travel%20Banyuwangi%20ke%20Bandara%20Ngurah%20Rai`,
    fromNgurahRai: `https://wa.me/${whatsappNumber}?text=Halo%2C%20saya%20mau%20pesan%20travel%20dari%20Bandara%20Ngurah%20Rai%20ke%20Banyuwangi`,
    carter: `https://wa.me/${whatsappNumber}?text=Halo%2C%20saya%20mau%20tanya%20harga%20carter%20Banyuwangi-Ngurah%20Rai`,
    general: `https://wa.me/${whatsappNumber}?text=Halo%20Admin,%20saya%20mau%20pesan%20travel%20Banyuwangi-Ngurah%20Rai.`
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
              <span className="text-dark font-medium">Banyuwangi - Bandara Ngurah Rai</span>
            </nav>
            <h1 className="text-4xl md:text-5xl font-extrabold text-dark">Travel Banyuwangi - Bandara Ngurah Rai (PP)</h1>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
              Jadwal travel Banyuwangi ke Bandara I Gusti Ngurah Rai, Bali. Tepat waktu untuk penerbangan Anda. Layanan door-to-airport aman dan nyaman.
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
                  alt="Armada travel Banyuwangi ke Bandara Ngurah Rai" 
                  width={600}
                  height={450}
                  className="rounded-lg shadow-xl w-full h-full object-cover"
                />
              </div>
              <div className="md:w-1/2">
                <span className="text-primary font-semibold uppercase">RUTE KHUSUS BANDARA BALI</span>
                <h2 className="mt-2 text-3xl md:text-4xl font-extrabold text-dark">
                  Travel Banyuwangi ke Bandara Ngurah Rai (Bali)
                </h2>
                <p className="mt-4 text-lg text-gray-700 leading-relaxed">
                  Kami menyediakan layanan <strong>travel Banyuwangi ke Bandara Ngurah Rai</strong> (dan sebaliknya) untuk memudahkan perjalanan Anda ke Bali. Layanan ini dirancang khusus untuk memastikan Anda tiba tepat waktu untuk mengejar jadwal penerbangan.
                </p>
                <p className="mt-4 text-lg text-gray-700 leading-relaxed">
                  Kami melayani penjemputan di alamat Anda (door-to-door) di area Banyuwangi, mengantar Anda menyeberangi Selat Bali, dan langsung menuju terminal keberangkatan Bandara I Gusti Ngurah Rai. Begitu pula sebaliknya.
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
                      <td className="p-4 font-medium text-gray-700">Banyuwangi → Bandara Ngurah Rai</td>
                      <td className="p-4 text-gray-700">Hubungi Admin (Menyesuaikan Jadwal Pesawat)</td>
                      <td className="p-4 font-bold text-primary text-lg">Rp 180.000</td>
                      <td className="p-4">
                        <a 
                          href={whatsappLinks.toNgurahRai}
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="bg-secondary text-white px-4 py-2 rounded-lg font-medium hover:bg-opacity-90"
                        >
                          Pesan
                        </a>
                      </td>
                    </tr>
                    <tr className="hover:bg-white transition-colors">
                      <td className="p-4 font-medium text-gray-700">Bandara Ngurah Rai → Banyuwangi</td>
                      <td className="p-4 text-gray-700">Hubungi Admin (Menyesuaikan Jadwal Landing)</td>
                      <td className="p-4 font-bold text-primary text-lg">Rp 180.000</td>
                      <td className="p-4">
                        <a 
                          href={whatsappLinks.fromNgurahRai}
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="bg-secondary text-white px-4 py-2 rounded-lg font-medium hover:bg-opacity-90"
                        >
                          Pesan
                        </a>
                      </td>
                    </tr>
                    <tr className="hover:bg-white transition-colors">
                      <td className="p-4 font-medium text-gray-700">Carter Drop (Private) Banyuwangi - Ngurah Rai</td>
                      <td className="p-4 text-gray-700">Fleksibel 24 Jam (Sesuai Pesanan)</td>
                      <td className="p-4 font-bold text-primary text-lg">Rp 800.000</td>
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
                *Harga dapat berubah sewaktu-waktu. Harga sudah termasuk tiket kapal feri.
              </p>
            </div>

            {/* Keunggulan Rute */}
            <div className="mb-20">
              <div className="text-center">
                <h2 className="text-3xl md:text-4xl font-extrabold text-dark">Keunggulan Rute Travel Banyuwangi Ngurah Rai</h2>
              </div>
              <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-white p-6 rounded-lg shadow-lg flex items-start space-x-4">
                  <Clock className="w-12 h-12 text-secondary shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold text-dark">Tepat Waktu</h3>
                    <p className="text-gray-600 mt-1">Kami memprioritaskan jadwal Anda agar tidak ketinggalan pesawat.</p>
                  </div>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-lg flex items-start space-x-4">
                  <Home className="w-12 h-12 text-secondary shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold text-dark">Door to Airport</h3>
                    <p className="text-gray-600 mt-1">Kami jemput di rumah Anda dan antar langsung ke Terminal Keberangkatan.</p>
                  </div>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-lg flex items-start space-x-4">
                  <Ship className="w-12 h-12 text-secondary shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold text-dark">Termasuk Tiket Feri</h3>
                    <p className="text-gray-600 mt-1">Harga yang Anda bayar sudah termasuk tiket penyeberangan Ketapang-Gilimanuk.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* FAQ Rute Spesifik */}
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-extrabold text-dark text-center mb-10">FAQ - Rute Banyuwangi Ngurah Rai</h2>
              <div className="space-y-6">
                
                <details className="bg-light p-6 rounded-lg shadow-md group" open>
                  <summary className="flex justify-between items-center font-semibold text-lg text-primary cursor-pointer">
                    Berapa jam perjalanan travel Banyuwangi ke Bandara Ngurah Rai?
                    <ChevronDown className="w-5 h-5 transition-transform duration-300 group-open:rotate-180" />
                  </summary>
                  <p className="mt-4 text-gray-700 leading-relaxed">
                    Estimasi waktu tempuh normal adalah sekitar 4-5 jam, sudah termasuk penyeberangan feri. Untuk mengejar penerbangan, kami menyarankan berangkat 7-8 jam sebelum jam terbang.
                  </p>
                </details>

                <details className="bg-light p-6 rounded-lg shadow-md group">
                  <summary className="flex justify-between items-center font-semibold text-lg text-primary cursor-pointer">
                    Apakah harga travel sudah termasuk tiket kapal feri?
                    <ChevronDown className="w-5 h-5 transition-transform duration-300 group-open:rotate-180" />
                  </summary>
                  <p className="mt-4 text-gray-700 leading-relaxed">
                    Ya, tentu saja. Harga yang tertera di tabel (Rp 180.000) sudah termasuk biaya tiket kapal feri penyeberangan di Selat Bali untuk penumpang.
                  </p>
                </details>

                <details className="bg-light p-6 rounded-lg shadow-md group">
                  <summary className="flex justify-between items-center font-semibold text-lg text-primary cursor-pointer">
                    Bagaimana jika pesawat saya delay (penjemputan di Ngurah Rai)?
                    <ChevronDown className="w-5 h-5 transition-transform duration-300 group-open:rotate-180" />
                  </summary>
                  <p className="mt-4 text-gray-700 leading-relaxed">
                    Untuk penjemputan di Bandara Ngurah Rai, harap selalu informasikan nomor penerbangan Anda. Driver kami akan memantau jadwal landing. Jika terjadi delay, harap segera konfirmasi ke admin agar kami bisa mengatur ulang jadwal penjemputan Anda.
                  </p>
                </details>

                <details className="bg-light p-6 rounded-lg shadow-md group">
                  <summary className="flex justify-between items-center font-semibold text-lg text-primary cursor-pointer">
                    Berapa harga carter/private travel Banyuwangi ke Ngurah Rai?
                    <ChevronDown className="w-5 h-5 transition-transform duration-300 group-open:rotate-180" />
                  </summary>
                  <p className="mt-4 text-gray-700 leading-relaxed">
                    Harga carter (1 mobil Avanza/Xenia) untuk rute Banyuwangi - Ngurah Rai adalah mulai dari <strong>Rp 800.000,-</strong> (All-in: mobil, driver, bbm, tiket feri). Harga bisa berbeda jika menggunakan unit Innova atau HiAce.
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
                Pesan Travel Banyuwangi - Bandara Ngurah Rai
            </h2>
            <p className="mt-4 text-lg text-gray-600">
                Isi formulir di bawah ini untuk pesan tiket travel dengan mudah dan cepat
            </p>
            </div>

            <BookingForm routeName="Banyuwangi → Bandara Ngurah Rai" />
        </div>
        </section>

        {/* CTA Section */}
        <section id="kontak" className="py-20 bg-primary text-white">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-extrabold">
              Pesan Travel ke Bandara Ngurah Rai Sekarang
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
              Pesan Rute Ngurah Rai via WA
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
              "name": "travelbanyuwangi.id",
              "url": "https://travelbanyuwangi.id/",
              "telephone": "+6282143258744",
              "image": "https://travelbanyuwangi.id/img/hero.webp"
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
              "name": "Bandara Internasional I Gusti Ngurah Rai (Bali)",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Badung",
                "addressRegion": "Bali",
                "addressCountry": "ID"
              }
            },
            "name": "Travel Banyuwangi - Bandara I Gusti Ngurah Rai (PP)",
            "description": "Layanan travel door-to-door antara Banyuwangi dan Bandara I Gusti Ngurah Rai, Bali.",
            "offers": {
              "@type": "Offer",
              "price": "180000",
              "priceCurrency": "IDR",
              "name": "Harga Tiket Travel Banyuwangi Ngurah Rai",
              "description": "Harga dapat bervariasi. Hubungi admin untuk harga pasti.",
              "url": "https://travelbanyuwangi.id/rute/banyuwangi-ngurah-rai",
              "availability": "https://schema.org/InStock"
            }
          })
        }}
      />
    </>
  );
}