import { Metadata } from "next";
import { Clock, Home, Zap, ChevronDown } from "lucide-react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Travel Banyuwangi - Pelabuhan Tanjung Perak (PP) | Jadwal & Harga | Juragan Travel",
  description: "Jadwal & harga travel Banyuwangi ke Pelabuhan Tanjung Perak (PP) terbaru. Layanan door-to-door, carter, dan drop-off. Berangkat setiap hari, tepat waktu untuk jadwal kapal.",
  keywords: "travel banyuwangi tanjung perak, travel banyuwangi ke pelabuhan perak, travel tanjung perak banyuwangi, harga travel banyuwangi tanjung perak, jadwal travel banyuwangi tanjung perak, travel banyuwangi surabaya pelabuhan",
  openGraph: {
    title: "Travel Banyuwangi - Pelabuhan Tanjung Perak (PP) | Jadwal & Harga | Juragan Travel",
    description: "Jadwal & harga travel Banyuwangi ke Pelabuhan Tanjung Perak (PP) terbaru. Layanan door-to-door, carter, dan drop-off. Berangkat setiap hari, tepat waktu.",
    type: "website",
    url: "https://juragantravel.com/rute/banyuwangi-tanjung-perak",
    images: [
      {
        url: "https://juragantravel.com/img/hero.webp",
        width: 1200,
        height: 630,
        alt: "Travel Banyuwangi Tanjung Perak"
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Travel Banyuwangi - Pelabuhan Tanjung Perak (PP) | Jadwal & Harga | Juragan Travel",
    description: "Jadwal & harga travel Banyuwangi ke Pelabuhan Tanjung Perak (PP) terbaru. Layanan door-to-door, carter, dan drop-off.",
    images: ["https://juragantravel.com/img/hero.webp"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://juragantravel.com/rute/banyuwangi-tanjung-perak",
  },
};

export default function BanyuwangiTanjungPerakPage() {
  const whatsappNumber = "6282143258744";
  
  const whatsappLinks = {
    toTanjungPerak: `https://wa.me/${whatsappNumber}?text=Halo%2C%20saya%20mau%20pesan%20travel%20Banyuwangi%20ke%20Pelabuhan%20Tanjung%20Perak`,
    fromTanjungPerak: `https://wa.me/${whatsappNumber}?text=Halo%2C%20saya%20mau%20pesan%20travel%20dari%20Pelabuhan%20Tanjung%20Perak%20ke%20Banyuwangi`,
    carter: `https://wa.me/${whatsappNumber}?text=Halo%2C%20saya%20mau%20tanya%20harga%20carter%20Banyuwangi-Tanjung%20Perak`,
    general: `https://wa.me/${whatsappNumber}?text=Halo%20Admin,%20saya%20mau%20pesan%20travel%20Banyuwangi-Tanjung%20Perak.`
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
              <span className="text-dark font-medium">Banyuwangi - Pelabuhan Tanjung Perak</span>
            </nav>
            <h1 className="text-4xl md:text-5xl font-extrabold text-dark">Travel Banyuwangi - Pelabuhan Tanjung Perak (PP)</h1>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
              Jadwal travel Banyuwangi ke Pelabuhan Tanjung Perak, Surabaya. Tepat waktu untuk jadwal kapal Anda. Layanan door-to-port aman dan nyaman.
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
                  alt="Armada travel Banyuwangi ke Pelabuhan Tanjung Perak" 
                  width={600}
                  height={450}
                  className="rounded-lg shadow-xl w-full h-full object-cover"
                />
              </div>
              <div className="md:w-1/2">
                <span className="text-primary font-semibold uppercase">RUTE KHUSUS PELABUHAN</span>
                <h2 className="mt-2 text-3xl md:text-4xl font-extrabold text-dark">
                  Travel Banyuwangi ke Pelabuhan Tanjung Perak (Surabaya)
                </h2>
                <p className="mt-4 text-lg text-gray-700 leading-relaxed">
                  Kami menyediakan layanan <strong>travel Banyuwangi ke Pelabuhan Tanjung Perak</strong> (dan sebaliknya) untuk memudahkan perjalanan Anda via kapal laut dari Surabaya. Layanan ini dirancang khusus untuk memastikan Anda tiba tepat waktu untuk mengejar jadwal kapal.
                </p>
                <p className="mt-4 text-lg text-gray-700 leading-relaxed">
                  Kami melayani penjemputan di alamat Anda (door-to-door) di area Banyuwangi, mengantar Anda via tol, dan langsung menuju terminal penumpang Pelabuhan Tanjung Perak. Begitu pula sebaliknya.
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
                      <td className="p-4 font-medium text-gray-700">Banyuwangi → Pelabuhan Tanjung Perak</td>
                      <td className="p-4 text-gray-700">Hubungi Admin (Menyesuaikan Jadwal Kapal)</td>
                      <td className="p-4 font-bold text-primary text-lg">Rp 200.000</td>
                      <td className="p-4">
                        <a 
                          href={whatsappLinks.toTanjungPerak}
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="bg-secondary text-white px-4 py-2 rounded-lg font-medium hover:bg-opacity-90"
                        >
                          Pesan
                        </a>
                      </td>
                    </tr>
                    <tr className="hover:bg-white transition-colors">
                      <td className="p-4 font-medium text-gray-700">Pelabuhan Tanjung Perak → Banyuwangi</td>
                      <td className="p-4 text-gray-700">Hubungi Admin (Menyesuaikan Jadwal Sandar)</td>
                      <td className="p-4 font-bold text-primary text-lg">Rp 200.000</td>
                      <td className="p-4">
                        <a 
                          href={whatsappLinks.fromTanjungPerak}
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="bg-secondary text-white px-4 py-2 rounded-lg font-medium hover:bg-opacity-90"
                        >
                          Pesan
                        </a>
                      </td>
                    </tr>
                    {/* <tr className="hover:bg-white transition-colors">
                      <td className="p-4 font-medium text-gray-700">Carter Drop (Private) Banyuwangi - Tanjung Perak</td>
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
                    </tr> */}
                  </tbody>
                </table>
              </div>
              <p className="text-center mt-6 text-sm text-gray-600">
                *Harga dapat berubah sewaktu-waktu. Harga sudah termasuk tol.
              </p>
            </div>

            {/* Keunggulan Rute */}
            <div className="mb-20">
              <div className="text-center">
                <h2 className="text-3xl md:text-4xl font-extrabold text-dark">Keunggulan Rute Travel Banyuwangi Tanjung Perak</h2>
              </div>
              <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-white p-6 rounded-lg shadow-lg flex items-start space-x-4">
                  <Clock className="w-12 h-12 text-secondary shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold text-dark">Tepat Waktu</h3>
                    <p className="text-gray-600 mt-1">Kami memprioritaskan jadwal Anda agar tidak ketinggalan kapal.</p>
                  </div>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-lg flex items-start space-x-4">
                  <Home className="w-12 h-12 text-secondary shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold text-dark">Door to Port</h3>
                    <p className="text-gray-600 mt-1">Kami jemput di rumah Anda dan antar langsung ke Terminal Penumpang.</p>
                  </div>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-lg flex items-start space-x-4">
                  <Zap className="w-12 h-12 text-secondary shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold text-dark">Layanan 24 Jam</h3>
                    <p className="text-gray-600 mt-1">Jadwal kami fleksibel menyesuaikan jam keberangkatan atau kedatangan kapal Anda.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* FAQ Rute Spesifik */}
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-extrabold text-dark text-center mb-10">FAQ - Rute Banyuwangi Tanjung Perak</h2>
              <div className="space-y-6">
                
                <details className="bg-light p-6 rounded-lg shadow-md group" open>
                  <summary className="flex justify-between items-center font-semibold text-lg text-primary cursor-pointer">
                    Berapa jam perjalanan travel Banyuwangi ke Pelabuhan Tanjung Perak?
                    <ChevronDown className="w-5 h-5 transition-transform duration-300 group-open:rotate-180" />
                  </summary>
                  <p className="mt-4 text-gray-700 leading-relaxed">
                    Estimasi waktu tempuh normal adalah sekitar 6-7 jam via tol. Untuk mengejar jadwal kapal, kami sangat menyarankan Anda mengambil jadwal keberangkatan minimal 9-10 jam sebelum jam berangkat.
                  </p>
                </details>

                <details className="bg-light p-6 rounded-lg shadow-md group">
                  <summary className="flex justify-between items-center font-semibold text-lg text-primary cursor-pointer">
                    Apakah harga travel sudah termasuk tol?
                    <ChevronDown className="w-5 h-5 transition-transform duration-300 group-open:rotate-180" />
                  </summary>
                  <p className="mt-4 text-gray-700 leading-relaxed">
                    Ya, harga yang tertera di tabel (Rp 170.000) sudah termasuk biaya tol via Trans-Jawa.
                  </p>
                </details>

                <details className="bg-light p-6 rounded-lg shadow-md group">
                  <summary className="flex justify-between items-center font-semibold text-lg text-primary cursor-pointer">
                    Bagaimana jika kapal saya delay (penjemputan di Tanjung Perak)?
                    <ChevronDown className="w-5 h-5 transition-transform duration-300 group-open:rotate-180" />
                  </summary>
                  <p className="mt-4 text-gray-700 leading-relaxed">
                    Untuk penjemputan di Pelabuhan Tanjung Perak, harap selalu informasikan nama kapal Anda. Driver kami akan memantau jadwal sandar. Jika terjadi delay, harap segera konfirmasi ke admin agar kami bisa mengatur ulang jadwal penjemputan Anda.
                  </p>
                </details>

                <details className="bg-light p-6 rounded-lg shadow-md group">
                  <summary className="flex justify-between items-center font-semibold text-lg text-primary cursor-pointer">
                    Berapa harga carter/private travel Banyuwangi ke Tanjung Perak?
                    <ChevronDown className="w-5 h-5 transition-transform duration-300 group-open:rotate-180" />
                  </summary>
                  <p className="mt-4 text-gray-700 leading-relaxed">
                    Harga carter (1 mobil Avanza/Xenia) untuk rute Banyuwangi - Tanjung Perak adalah mulai dari <strong>Rp 750.000,-</strong> (All-in: mobil, driver, bbm, tol). Harga bisa berbeda jika menggunakan unit Innova atau HiAce.
                  </p>
                </details>

              </div>
            </div>

          </div>
        </section>

        {/* CTA Section */}
        <section id="kontak" className="py-20 bg-primary text-white">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-extrabold">
              Pesan Travel ke Pelabuhan Tanjung Perak Sekarang
            </h2>
            <p className="mt-4 text-lg text-gray-200 max-w-2xl mx-auto">
              Jangan sampai ketinggalan kapal. Amankan kursi Anda sekarang. Hubungi admin kami via WhatsApp untuk booking cepat dan penjemputan tepat waktu.
            </p>
            <a 
              href={whatsappLinks.general}
              target="_blank" 
              rel="noopener noreferrer"
              className="mt-10 inline-block bg-accent text-white px-10 py-3 rounded-lg font-bold text-lg shadow-lg hover:bg-opacity-90 transition-all transform hover:-translate-y-1"
            >
              Pesan Rute Tanjung Perak via WA
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
              "name": "Pelabuhan Tanjung Perak (Surabaya)",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Surabaya",
                "addressRegion": "Jawa Timur",
                "addressCountry": "ID"
              }
            },
            "name": "Travel Banyuwangi - Pelabuhan Tanjung Perak (PP)",
            "description": "Layanan travel door-to-door antara Banyuwangi dan Pelabuhan Tanjung Perak, Surabaya.",
            "offers": {
              "@type": "Offer",
              "price": "170000",
              "priceCurrency": "IDR",
              "name": "Harga Tiket Travel Banyuwangi Tanjung Perak",
              "description": "Harga dapat bervariasi. Hubungi admin untuk harga pasti.",
              "url": "https://juragantravel.com/rute/banyuwangi-tanjung-perak",
              "availability": "https://schema.org/InStock"
            }
          })
        }}
      />
    </>
  );
}