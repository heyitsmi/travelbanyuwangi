import { Metadata } from "next";
import { ArrowRight, Home, Shield, ChevronDown } from "lucide-react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Travel Banyuwangi - Jember (PP) | Jadwal & Harga | Juragan Travel",
  description: "Jadwal & harga travel Banyuwangi ke Jember (PP) terbaru. Layanan door-to-door, carter, dan drop-off. Berangkat setiap hari (pagi, siang, malam).",
  keywords: "travel banyuwangi jember, travel jember banyuwangi, harga travel banyuwangi jember, jadwal travel banyuwangi jember, travel banyuwangi jember pagi, travel banyuwangi jember malam",
  openGraph: {
    title: "Travel Banyuwangi - Jember (PP) | Jadwal & Harga | Juragan Travel",
    description: "Jadwal & harga travel Banyuwangi ke Jember (PP) terbaru. Layanan door-to-door, carter, dan drop-off. Berangkat setiap hari.",
    type: "website",
    url: "https://juragantravel.com/rute/banyuwangi-jember",
    images: [
      {
        url: "https://juragantravel.com/img/hero.webp",
        width: 1200,
        height: 630,
        alt: "Travel Banyuwangi Jember"
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Travel Banyuwangi - Jember (PP) | Jadwal & Harga | Juragan Travel",
    description: "Jadwal & harga travel Banyuwangi ke Jember (PP) terbaru. Layanan door-to-door, carter, dan drop-off.",
    images: ["https://juragantravel.com/img/hero.webp"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://juragantravel.com/rute/banyuwangi-jember",
  },
};

export default function BanyuwangiJemberPage() {
  const whatsappNumber = "6282143258744";
  
  const whatsappLinks = {
    toJember: `https://wa.me/${whatsappNumber}?text=Halo%2C%20saya%20mau%20pesan%20travel%20Banyuwangi%20ke%20Jember`,
    fromJember: `https://wa.me/${whatsappNumber}?text=Halo%2C%20saya%20mau%20pesan%20travel%20dari%20Jember%20ke%20Banyuwangi`,
    carter: `https://wa.me/${whatsappNumber}?text=Halo%2C%20saya%20mau%20tanya%20harga%20carter%20Banyuwangi-Jember`,
    general: `https://wa.me/${whatsappNumber}?text=Halo%20Admin,%20saya%20mau%20pesan%20travel%20Banyuwangi-Jember.`
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
              <span className="text-dark font-medium">Banyuwangi ↔ Jember</span>
            </nav>
            <h1 className="text-4xl md:text-5xl font-extrabold text-dark">Travel Banyuwangi ↔ Jember (PP)</h1>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
              Jadwal travel Banyuwangi Jember berangkat setiap hari. Layanan door-to-door, aman, dan nyaman untuk mahasiswa atau pekerja.
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
                  alt="Armada travel Banyuwangi ke Jember" 
                  width={600}
                  height={450}
                  className="rounded-lg shadow-xl w-full h-full object-cover"
                />
              </div>
              <div className="md:w-1/2">
                <span className="text-primary font-semibold uppercase">RUTE LOKAL POPULER</span>
                <h2 className="mt-2 text-3xl md:text-4xl font-extrabold text-dark">
                  Travel Banyuwangi ke Jember (PP)
                </h2>
                <p className="mt-4 text-lg text-gray-700 leading-relaxed">
                  Kami menyediakan layanan <strong>travel Banyuwangi ke Jember</strong> (dan sebaliknya) setiap hari. Rute ini sangat diminati oleh mahasiswa dan pekerja yang beraktivitas di kedua kota.
                </p>
                <p className="mt-4 text-lg text-gray-700 leading-relaxed">
                  Dengan layanan door-to-door, kami menjemput Anda di alamat Banyuwangi dan mengantar langsung ke tujuan Anda di Jember, termasuk area kampus, perkantoran, dan pusat kota.
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
                      <td className="p-4 font-medium">Banyuwangi → Jember</td>
                      <td className="p-4 text-gray-700">Pagi (07:00), Siang (13:00), Malam (19:00)</td>
                      <td className="p-4 font-bold text-primary text-lg">Rp 80.000</td>
                      <td className="p-4">
                        <a 
                          href={whatsappLinks.toJember}
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="bg-secondary text-white px-4 py-2 rounded-lg font-medium hover:bg-opacity-90"
                        >
                          Pesan
                        </a>
                      </td>
                    </tr>
                    <tr className="hover:bg-white transition-colors">
                      <td className="p-4 font-medium">Jember → Banyuwangi</td>
                      <td className="p-4 text-gray-700">Pagi (07:00), Siang (13:00), Malam (19:00)</td>
                      <td className="p-4 font-bold text-primary text-lg">Rp 80.000</td>
                      <td className="p-4">
                        <a 
                          href={whatsappLinks.fromJember}
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="bg-secondary text-white px-4 py-2 rounded-lg font-medium hover:bg-opacity-90"
                        >
                          Pesan
                        </a>
                      </td>
                    </tr>
                    <tr className="hover:bg-white transition-colors">
                      <td className="p-4 font-medium">Carter Drop (Private) Banyuwangi ↔ Jember</td>
                      <td className="p-4 text-gray-700">Fleksibel 24 Jam (Sesuai Pesanan)</td>
                      <td className="p-4 font-bold text-primary text-lg">Rp 350.000</td>
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
                *Harga dapat berubah sewaktu-waktu. Hubungi admin untuk harga pasti.
              </p>
            </div>

            {/* Keunggulan Rute */}
            <div className="mb-20">
              <div className="text-center">
                <h2 className="text-3xl md:text-4xl font-extrabold text-dark">Keunggulan Rute Travel Banyuwangi Jember</h2>
              </div>
              <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-white p-6 rounded-lg shadow-lg flex items-start space-x-4">
                  <ArrowRight className="w-12 h-12 text-secondary shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold text-dark">Perjalanan Cepat</h3>
                    <p className="text-gray-600 mt-1">Perjalanan cepat dan efisien, estimasi 2-3 jam perjalanan.</p>
                  </div>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-lg flex items-start space-x-4">
                  <Home className="w-12 h-12 text-secondary shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold text-dark">Door to Door</h3>
                    <p className="text-gray-600 mt-1">Kami jemput di rumah Anda dan antar sampai alamat tujuan (area kota/kampus).</p>
                  </div>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-lg flex items-start space-x-4">
                  <Shield className="w-12 h-12 text-secondary shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold text-dark">Aman & Nyaman</h3>
                    <p className="text-gray-600 mt-1">Armada bersih, ber-AC, dan dikemudikan oleh driver profesional.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* FAQ Rute Spesifik */}
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-extrabold text-dark text-center mb-10">FAQ - Rute Banyuwangi Jember</h2>
              <div className="space-y-6">
                
                <details className="bg-light p-6 rounded-lg shadow-md group" open>
                  <summary className="flex justify-between items-center font-semibold text-lg text-primary cursor-pointer">
                    Berapa jam perjalanan travel Banyuwangi ke Jember?
                    <ChevronDown className="w-5 h-5 transition-transform duration-300 group-open:rotate-180" />
                  </summary>
                  <p className="mt-4 text-gray-700 leading-relaxed">
                    Estimasi waktu tempuh normal adalah sekitar 2 hingga 3 jam, tergantung kondisi lalu lintas dan rute penjemputan/pengantaran.
                  </p>
                </details>

                <details className="bg-light p-6 rounded-lg shadow-md group">
                  <summary className="flex justify-between items-center font-semibold text-lg text-primary cursor-pointer">
                    Area penjemputan di Banyuwangi meliputi mana saja?
                    <ChevronDown className="w-5 h-5 transition-transform duration-300 group-open:rotate-180" />
                  </summary>
                  <p className="mt-4 text-gray-700 leading-relaxed">
                    Kami melayani penjemputan di area Kota Banyuwangi, Rogojampi, Srono, Genteng, dan Jajag. Untuk area di luar jalur utama, mungkin ada sedikit biaya tambahan. Silakan konfirmasi alamat Anda ke admin.
                  </p>
                </details>

                <details className="bg-light p-6 rounded-lg shadow-md group">
                  <summary className="flex justify-between items-center font-semibold text-lg text-primary cursor-pointer">
                    Area pengantaran di Jember meliputi mana saja?
                    <ChevronDown className="w-5 h-5 transition-transform duration-300 group-open:rotate-180" />
                  </summary>
                  <p className="mt-4 text-gray-700 leading-relaxed">
                    Kami melayani pengantaran ke seluruh area Kota Jember, termasuk area Kampus Universitas Jember (UNEJ), Politeknik, Alun-alun, dan sekitarnya.
                  </p>
                </details>

                <details className="bg-light p-6 rounded-lg shadow-md group">
                  <summary className="flex justify-between items-center font-semibold text-lg text-primary cursor-pointer">
                    Berapa harga carter/private travel Banyuwangi ke Jember?
                    <ChevronDown className="w-5 h-5 transition-transform duration-300 group-open:rotate-180" />
                  </summary>
                  <p className="mt-4 text-gray-700 leading-relaxed">
                    Harga carter (1 mobil Avanza/Xenia) untuk rute Banyuwangi ↔ Jember adalah mulai dari <strong>Rp 350.000,-</strong> (All-in: mobil, driver, bbm). Harga bisa berbeda jika menggunakan unit Innova atau HiAce.
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
              Pesan Travel ke Jember Sekarang
            </h2>
            <p className="mt-4 text-lg text-gray-200 max-w-2xl mx-auto">
              Baik untuk kuliah, kerja, atau pulang kampung. Amankan kursi Anda sekarang. Hubungi admin kami via WhatsApp untuk booking cepat.
            </p>
            <a 
              href={whatsappLinks.general}
              target="_blank" 
              rel="noopener noreferrer"
              className="mt-10 inline-block bg-accent text-white px-10 py-3 rounded-lg font-bold text-lg shadow-lg hover:bg-opacity-90 transition-all transform hover:-translate-y-1"
            >
              Pesan Rute Jember via WA
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
              "name": "Area Jember (Door-to-door)",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Jember",
                "addressRegion": "Jawa Timur",
                "addressCountry": "ID"
              }
            },
            "name": "Travel Banyuwangi - Jember (PP)",
            "description": "Layanan travel door-to-door antara Banyuwangi dan Jember.",
            "offers": {
              "@type": "Offer",
              "price": "80000",
              "priceCurrency": "IDR",
              "name": "Harga Tiket Travel Banyuwangi Jember",
              "description": "Harga dapat bervariasi. Hubungi admin untuk harga pasti.",
              "url": "https://juragantravel.com/rute/banyuwangi-jember",
              "availability": "https://schema.org/InStock"
            }
          })
        }}
      />
    </>
  );
}