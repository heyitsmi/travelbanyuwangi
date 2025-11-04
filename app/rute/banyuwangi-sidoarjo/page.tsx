import { Metadata } from 'next';
import Image from 'next/image';
import { ArrowRight, Home, Zap, ChevronDown } from 'lucide-react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export const metadata: Metadata = {
  title: 'Travel Banyuwangi - Sidoarjo (PP) | Jadwal & Harga | Juragan Travel',
  description: 'Jadwal & harga travel Banyuwangi ke Sidoarjo (PP) terbaru. Layanan door-to-door, carter, dan drop-off via tol. Berangkat setiap hari (pagi, siang, malam).',
  keywords: 'travel banyuwangi sidoarjo, travel sidoarjo banyuwangi, harga travel banyuwangi sidoarjo, jadwal travel banyuwangi sidoarjo, travel banyuwangi sidoarjo via tol, travel banyuwangi sidoarjo pagi, travel banyuwangi sidoarjo malam',
  authors: [{ name: 'Juragan Travel' }],
  openGraph: {
    title: 'Travel Banyuwangi - Sidoarjo (PP) | Jadwal & Harga | Juragan Travel',
    description: 'Jadwal & harga travel Banyuwangi ke Sidoarjo (PP) terbaru. Layanan door-to-door, carter, dan drop-off via tol. Berangkat setiap hari.',
    type: 'website',
    url: 'https://juragantravel.com/rute/banyuwangi-sidoarjo',
    images: [
      {
        url: 'https://placehold.co/1200x630/0077B6/FFFFFF?text=Travel+Banyuwangi+Sidoarjo',
        width: 1200,
        height: 630,
        alt: 'Travel Banyuwangi Sidoarjo'
      }
    ],
    siteName: 'Juragan Travel'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Travel Banyuwangi - Sidoarjo (PP) | Jadwal & Harga | Juragan Travel',
    description: 'Jadwal & harga travel Banyuwangi ke Sidoarjo (PP) terbaru. Layanan door-to-door, carter, dan drop-off via tol.',
    images: ['https://placehold.co/1200x630/0077B6/FFFFFF?text=Travel+Banyuwangi+Sidoarjo']
  },
  alternates: {
    canonical: 'https://juragantravel.com/rute/banyuwangi-sidoarjo'
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function BanyuwangiSidoarjoPage() {
  const whatsappNumber = '6282143258744';
  
  const whatsappLinks = {
    toSidoarjo: `https://wa.me/${whatsappNumber}?text=Halo%2C%20saya%20mau%20pesan%20travel%20Banyuwangi%20ke%20Sidoarjo`,
    fromSidoarjo: `https://wa.me/${whatsappNumber}?text=Halo%2C%20saya%20mau%20pesan%20travel%20dari%20Sidoarjo%20ke%20Banyuwangi`,
    carter: `https://wa.me/${whatsappNumber}?text=Halo%2C%20saya%20mau%20tanya%20harga%20carter%20Banyuwangi-Sidoarjo`,
    general: `https://wa.me/${whatsappNumber}?text=Halo%20Admin,%20saya%20mau%20pesan%20travel%20Banyuwangi-Sidoarjo.`
  };

  return (
    <>
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
              "telephone": `+${whatsappNumber}`,
              "image": "https://placehold.co/1200x630/0077B6/FFFFFF?text=Juragan Travel"
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
              "name": "Area Sidoarjo (Door-to-door)",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Sidoarjo",
                "addressRegion": "Jawa Timur",
                "addressCountry": "ID"
              }
            },
            "name": "Travel Banyuwangi - Sidoarjo (PP)",
            "description": "Layanan travel door-to-door antara Banyuwangi dan Sidoarjo.",
            "offers": {
              "@type": "Offer",
              "price": "150000",
              "priceCurrency": "IDR",
              "name": "Harga Tiket Travel Banyuwangi Sidoarjo",
              "description": "Harga dapat bervariasi. Hubungi admin untuk harga pasti.",
              "url": "https://juragantravel.com/rute/banyuwangi-sidoarjo",
              "availability": "https://schema.org/InStock"
            }
          })
        }}
      />

      <Header />

      <main>
        {/* Hero Section */}
        <section className="bg-light py-20">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <nav className="text-sm mb-4">
              <a href="/" className="text-gray-600 hover:text-primary">Beranda</a>
              <span className="text-gray-400 mx-2">/</span>
              <a href="/rute" className="text-gray-600 hover:text-primary">Rute</a>
              <span className="text-gray-400 mx-2">/</span>
              <span className="text-dark font-medium">Banyuwangi - Sidoarjo</span>
            </nav>
            <h1 className="text-4xl md:text-5xl font-extrabold text-dark">Travel Banyuwangi - Sidoarjo (PP)</h1>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
              Jadwal travel Banyuwangi Sidoarjo via tol berangkat setiap hari. Layanan door-to-door, aman, dan nyaman.
            </p>
          </div>
        </section>

        {/* Detail Rute Section */}
        <section id="detail-rute" className="py-20 bg-white">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            
            {/* Deskripsi Rute */}
            <div className="flex flex-col md:flex-row items-center gap-12 mb-20">
              <div className="md:w-1/2">
                <Image 
                  src="https://placehold.co/600x450/0077B6/FFFFFF?text=Armada+Menuju+Sidoarjo" 
                  alt="Armada travel Banyuwangi ke Sidoarjo" 
                  width={600}
                  height={450}
                  className="rounded-lg shadow-xl w-full h-full object-cover"
                />
              </div>
              <div className="md:w-1/2">
                <span className="text-primary font-semibold uppercase">RUTE VIA TOL</span>
                <h2 className="mt-2 text-3xl md:text-4xl font-extrabold text-dark">
                  Travel Banyuwangi ke Sidoarjo (PP)
                </h2>
                <p className="mt-4 text-lg text-gray-700 leading-relaxed">
                  Kami menyediakan layanan <strong>travel Banyuwangi ke Sidoarjo</strong> (dan sebaliknya) setiap hari. Rute ini adalah bagian dari rute utama kami ke Surabaya, melewati Tol Trans-Jawa untuk perjalanan yang lebih cepat.
                </p>
                <p className="mt-4 text-lg text-gray-700 leading-relaxed">
                  Dengan layanan door-to-door, kami menjemput Anda di alamat Banyuwangi dan mengantar langsung ke tujuan Anda di Sidoarjo, termasuk area kota, Candi, Gedangan, Waru, dan dekat Bandara Juanda.
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
                      <td className="p-4 font-medium text-gray-700">Banyuwangi → Sidoarjo</td>
                      <td className="p-4 text-gray-700">Pagi (09:00), Siang (15:00), Malam (21:00)</td>
                      <td className="p-4 font-bold text-primary text-lg">Rp 150.000</td>
                      <td className="p-4">
                        <a href={whatsappLinks.toSidoarjo} target="_blank" rel="noopener noreferrer" className="bg-secondary text-white px-4 py-2 rounded-lg font-medium hover:bg-opacity-90">Pesan</a>
                      </td>
                    </tr>
                    <tr className="hover:bg-white transition-colors">
                      <td className="p-4 font-medium text-gray-700">Sidoarjo → Banyuwangi</td>
                      <td className="p-4 text-gray-700">Pagi (09:00), Siang (15:00), Malam (21:00)</td>
                      <td className="p-4 font-bold text-primary text-lg">Rp 150.000</td>
                      <td className="p-4">
                        <a href={whatsappLinks.fromSidoarjo} target="_blank" rel="noopener noreferrer" className="bg-secondary text-white px-4 py-2 rounded-lg font-medium hover:bg-opacity-90">Pesan</a>
                      </td>
                    </tr>
                    <tr className="hover:bg-white transition-colors">
                      <td className="p-4 font-medium text-gray-700">Carter Drop (Private) Banyuwangi - Sidoarjo</td>
                      <td className="p-4 text-gray-700">Fleksibel 24 Jam (Sesuai Pesanan)</td>
                      <td className="p-4 font-bold text-primary text-lg">Rp 700.000</td>
                      <td className="p-4">
                        <a href={whatsappLinks.carter} target="_blank" rel="noopener noreferrer" className="bg-secondary text-white px-4 py-2 rounded-lg font-medium hover:bg-opacity-90">Pesan</a>
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
                <h2 className="text-3xl md:text-4xl font-extrabold text-dark">Keunggulan Rute Travel Banyuwangi Sidoarjo</h2>
              </div>
              <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-white p-6 rounded-lg shadow-lg flex items-start space-x-4">
                  <ArrowRight className="w-12 h-12 text-secondary shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold text-dark">Cepat via Tol</h3>
                    <p className="text-gray-600 mt-1">Perjalanan lebih cepat dan hemat waktu lewat Tol Trans-Jawa.</p>
                  </div>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-lg flex items-start space-x-4">
                  <Home className="w-12 h-12 text-secondary shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold text-dark">Door to Door</h3>
                    <p className="text-gray-600 mt-1">Kami jemput di rumah Anda dan antar sampai alamat tujuan di area Sidoarjo.</p>
                  </div>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-lg flex items-start space-x-4">
                  <Zap className="w-12 h-12 text-secondary shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold text-dark">Dekat Bandara Juanda</h3>
                    <p className="text-gray-600 mt-1">Sangat ideal jika tujuan Anda adalah Sidoarjo atau area sekitar Bandara Juanda.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* FAQ Rute Spesifik */}
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-extrabold text-dark text-center mb-10">FAQ - Rute Banyuwangi Sidoarjo</h2>
              <div className="space-y-6">
                <details className="bg-light p-6 rounded-lg shadow-md group" open>
                  <summary className="flex justify-between items-center font-semibold text-lg text-primary cursor-pointer">
                    Berapa jam perjalanan travel Banyuwangi ke Sidoarjo?
                    <ChevronDown className="w-5 h-5 transition-transform duration-300 group-open:rotate-180" />
                  </summary>
                  <p className="mt-4 text-gray-700 leading-relaxed">
                    Estimasi waktu tempuh normal adalah sekitar 6-7 jam via tol, tergantung kondisi lalu lintas dan titik penjemputan/pengantaran.
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
                    Area pengantaran di Sidoarjo meliputi mana saja?
                    <ChevronDown className="w-5 h-5 transition-transform duration-300 group-open:rotate-180" />
                  </summary>
                  <p className="mt-4 text-gray-700 leading-relaxed">
                    Kami melayani pengantaran ke seluruh area Kota Sidoarjo, Waru, Gedangan, Candi, dan area lain yang berdekatan dengan pintu keluar tol.
                  </p>
                </details>
                <details className="bg-light p-6 rounded-lg shadow-md group">
                  <summary className="flex justify-between items-center font-semibold text-lg text-primary cursor-pointer">
                    Berapa harga carter/private travel Banyuwangi ke Sidoarjo?
                    <ChevronDown className="w-5 h-5 transition-transform duration-300 group-open:rotate-180" />
                  </summary>
                  <p className="mt-4 text-gray-700 leading-relaxed">
                    Harga carter (1 mobil Avanza/Xenia) untuk rute Banyuwangi - Sidoarjo adalah mulai dari <strong>Rp 700.000,-</strong> (All-in: mobil, driver, bbm, tol). Harga bisa berbeda jika menggunakan unit Innova atau HiAce.
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
              Pesan Travel ke Sidoarjo Sekarang
            </h2>
            <p className="mt-4 text-lg text-gray-200 max-w-2xl mx-auto">
              Perjalanan nyaman dan cepat via tol. Amankan kursi Anda sekarang. Hubungi admin kami via WhatsApp untuk booking cepat.
            </p>
            <a href={whatsappLinks.general} target="_blank" rel="noopener noreferrer"
               className="mt-10 inline-block bg-accent text-white px-10 py-3 rounded-lg font-bold text-lg shadow-lg hover:bg-opacity-90 transition-all transform hover:-translate-y-1">
              Pesan Rute Sidoarjo via WA
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}