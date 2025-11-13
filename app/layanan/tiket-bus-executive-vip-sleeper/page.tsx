import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { StructuredData } from "../../components/SEO";
import { Shield, UserCheck, MessageCircle, ChevronDown } from "lucide-react";
import { 
  HANDOYO_TICKETS, 
  GUNUNG_HARTA_SCHEDULES, 
  formatBusPrice 
} from "@/lib/busTicketConfig";

export const metadata: Metadata = {
  title: "Tiket Bus Handoyo & Gunung Harta Banyuwangi | Juragan Travel",
  description:
    "Jadwal & harga tiket bus PO. Handoyo dan PO. Gunung Harta dari Banyuwangi ke Jakarta, Bogor, Bandung, Palembang, Pekanbaru. Cek harga executive & sleeper di sini.",
  keywords:
    "tiket bus handoyo banyuwangi, tiket bus gunung harta banyuwangi, harga tiket bus handoyo, harga tiket bus gunung harta, agen tiket bus handoyo, agen tiket bus gunung harta banyuwangi",
  authors: [{ name: "Juragan Travel" }],
  openGraph: {
    title: "Tiket Bus Handoyo & Gunung Harta Banyuwangi | Juragan Travel",
    description:
      "Jadwal & harga tiket bus PO. Handoyo dan PO. Gunung Harta dari Banyuwangi ke Jakarta, Bogor, Bandung, Palembang, Pekanbaru.",
    type: "website",
    url: "https://juragantravel.com/layanan/tiket-bus",
    images: [
      {
        url: "https://juragantravel.com/img/layanan/tiket-bus-executive.webp",
        width: 1200,
        height: 630,
      },
    ],
    siteName: "Juragan Travel",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tiket Bus Handoyo & Gunung Harta Banyuwangi | Juragan Travel",
    description:
      "Jadwal & harga tiket bus PO. Handoyo dan PO. Gunung Harta dari Banyuwangi.",
    images: ["https://juragantravel.com/img/layanan/tiket-bus-executive.webp"],
  },
  alternates: {
    canonical: "https://juragantravel.com/layanan/tiket-bus",
  },
};


const serviceData = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Ticket",
  provider: {
    "@type": "TravelAgency",
    name: "Juragan Travel",
    url: "https://juragantravel.com/",
    telephone: "+6282143258744",
  },
  name: "Tiket Bus Executive PO. Handoyo & PO. Gunung Harta dari Banyuwangi",
  description:
    "Agen resmi tiket bus PO. Handoyo dan PO. Gunung Harta keberangkatan Banyuwangi ke Jakarta, Bogor, Bandung, dan kota-kota di Sumatera.",
  areaServed: [{ "@type": "City", name: "Banyuwangi" }],
  offers: [
    {
      "@type": "Offer",
      name: "Tiket Bus PO. Handoyo (Executive & VIP)",
      category: "BusTicket",
    },
    {
      "@type": "Offer",
      name: "Tiket Bus PO. Gunung Harta (Executive & Sleeper)",
      category: "BusTicket",
    },
  ],
};

const faqData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Bagaimana cara memesan tiket bus Handoyo atau Gunung Harta di sini?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Cara termudah adalah dengan menghubungi admin kami via WhatsApp. Informasikan rute (misal: Banyuwangi - Jakarta), tanggal berangkat, dan jumlah penumpang. Admin kami akan mengecek ketersediaan kursi dan harga terbaru untuk Anda.",
      },
    },
    {
      "@type": "Question",
      name: "Apakah harga yang tertera di website sudah pasti?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Harga yang tertera adalah harga estimasi dan dapat berubah sewaktu-waktu mengikuti kebijakan dari masing-masing PO Bus, terutama saat musim liburan atau high season. Selalu konfirmasi harga final kepada admin kami saat melakukan pemesanan.",
      },
    },
    {
      "@type": "Question",
      name: "Apakah saya bisa memilih kursi bus?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ya, tentu saja. Selama kursi masih tersedia, Anda bisa meminta untuk memilih nomor kursi yang Anda inginkan. Admin kami akan membantu mengecek ketersediaan kursi tersebut.",
      },
    },
    {
      "@type": "Question",
      name: "Apakah JuraganTravel adalah agen resmi?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ya, kami adalah agen resmi dari PO. Handoyo, PO. Gunung Harta, dan banyak PO bus lainnya. Tiket yang kami keluarkan adalah e-ticket resmi yang sah untuk perjalanan Anda.",
      },
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
      item: "https://juragantravel.com/",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Layanan",
      item: "https://juragantravel.com/layanan",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Tiket Bus",
      item: "https://juragantravel.com/layanan/tiket-bus",
    },
  ],
};

const benefits = [
  {
    icon: Shield,
    title: "Agen Resmi & Terpercaya",
    description: "Kami adalah agen resmi PO. Handoyo dan PO. Gunung Harta. Tiket Anda dijamin valid.",
  },
  {
    icon: UserCheck,
    title: "Bisa Pilih Kursi",
    description: "Selama masih tersedia, Anda bisa request nomor kursi favorit Anda kepada admin kami.",
  },
  {
    icon: MessageCircle,
    title: "Proses Cepat via WA",
    description: "Tidak perlu aplikasi, pesan langsung, bayar, dan e-ticket dikirim ke WhatsApp Anda.",
  },
];

const faqs = [
  {
    question: "Bagaimana cara memesan tiket bus Handoyo atau Gunung Harta di sini?",
    answer:
      "Cara termudah adalah dengan menghubungi admin kami via WhatsApp. Informasikan rute (misal: Banyuwangi - Jakarta), tanggal berangkat, dan jumlah penumpang. Admin kami akan mengecek ketersediaan kursi dan harga terbaru untuk Anda.",
    defaultOpen: true,
  },
  {
    question: "Apakah harga yang tertera di website sudah pasti?",
    answer:
      "Harga yang tertera adalah harga estimasi dan dapat berubah sewaktu-waktu mengikuti kebijakan dari masing-masing PO Bus, terutama saat musim liburan atau high season. Selalu konfirmasi harga final kepada admin kami saat melakukan pemesanan.",
    defaultOpen: false,
  },
  {
    question: "Apakah saya bisa memilih kursi bus?",
    answer:
      "Ya, tentu saja. Selama kursi masih tersedia, Anda bisa meminta untuk memilih nomor kursi yang Anda inginkan. Admin kami akan membantu mengecek ketersediaan kursi tersebut.",
    defaultOpen: false,
  },
];

export default function TiketBusPage() {
  return (
    <>
      <StructuredData data={serviceData} />
      <StructuredData data={faqData} />
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
                <span className="text-dark font-medium">Tiket Bus</span>
              </nav>
              <h1 className="text-4xl md:text-5xl font-extrabold text-dark">Tiket Bus PO. Handoyo & PO. Gunung Harta</h1>
              <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
                Harga dan jadwal terbaru tiket bus executive dan sleeper PO. Handoyo & PO. Gunung Harta keberangkatan dari Banyuwangi.
              </p>
            </div>
          </section>

          {/* Detail Section */}
          <section id="detail-rute" className="py-20 bg-white">
            <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              {/* Deskripsi */}
              <div className="max-w-3xl mx-auto text-center mb-12">
                <p className="text-lg text-gray-700 leading-relaxed">
                  Kami adalah agen resmi yang melayani pemesanan tiket bus <strong>PO. Handoyo</strong> dan <strong>PO. Gunung Harta</strong> dari Banyuwangi. Pesan tiket Anda dengan mudah melalui WhatsApp kami untuk rute Jawa hingga Sumatera.
                </p>
                <p className="mt-4 text-md text-gray-500">
                  Catatan: Harga di bawah ini adalah estimasi dan dapat berubah sewaktu-waktu.
                </p>
              </div>

              {/* PO. HANDOYO */}
              <div className="bg-light p-8 md:p-12 rounded-lg shadow-lg mb-20">
                <div className="text-center mb-10">
                  <div className="mx-auto mb-4 h-16 flex items-center justify-center">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-dark">PO. Handoyo</h2>
                  </div>
                  <p className="mt-4 text-lg text-gray-600">Keberangkatan dari Banyuwangi ke Jawa & Sumatera.</p>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full min-w-max text-left">
                    <thead>
                      <tr className="border-b border-gray-300">
                        <th className="p-4 text-lg font-semibold text-dark">Tujuan</th>
                        <th className="p-4 text-lg font-semibold text-dark text-center">Executive</th>
                        <th className="p-4 text-lg font-semibold text-dark text-center">VIP</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      {HANDOYO_TICKETS.map((ticket, index) => (
                        <tr key={index} className="hover:bg-white transition-colors">
                          <td className="p-4 font-medium text-gray-700">{ticket.destination}</td>
                          <td className="p-4 text-gray-700 text-center">{formatBusPrice(ticket.executive!)}</td>
                          <td className="p-4 text-gray-700 text-center">{formatBusPrice(ticket.vip!)}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* PO. GUNUNG HARTA */}
              <div className="bg-light p-8 md:p-12 rounded-lg shadow-lg mb-20">
                <div className="text-center mb-10">
                  <div className="mx-auto mb-4 h-16 flex items-center justify-center">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-dark">PO. Gunung Harta</h2>
                  </div>
                  <p className="mt-4 text-lg text-gray-600">Keberangkatan dari Banyuwangi ke berbagai kota di Jawa.</p>
                </div>

                {GUNUNG_HARTA_SCHEDULES.map((schedule, scheduleIndex) => (
                  <div key={scheduleIndex} className="mb-8">
                    <h3 className="text-2xl font-bold text-dark mb-4">{schedule.label}</h3>
                    <div className="overflow-x-auto">
                      <table className="w-full min-w-max text-left">
                        <thead>
                          <tr className="border-b border-gray-300">
                            <th className="p-4 text-lg font-semibold text-dark">Tujuan</th>
                            {schedule.tickets[0].executive && schedule.tickets[0].sleeper ? (
                              <>
                                <th className="p-4 text-lg font-semibold text-dark text-center">Executive</th>
                                <th className="p-4 text-lg font-semibold text-dark text-center">Sleeper</th>
                              </>
                            ) : (
                              <th className="p-4 text-lg font-semibold text-dark text-center">Harga</th>
                            )}
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                          {schedule.tickets.map((ticket, ticketIndex) => (
                            <tr key={ticketIndex} className="hover:bg-white transition-colors">
                              <td className="p-4 font-medium text-gray-700">{ticket.destination}</td>
                              {ticket.executive && ticket.sleeper ? (
                                <>
                                  <td className="p-4 text-gray-700 text-center">{formatBusPrice(ticket.executive)}</td>
                                  <td className="p-4 text-gray-700 text-center">{formatBusPrice(ticket.sleeper)}</td>
                                </>
                              ) : (
                                <td className="p-4 text-gray-700 text-center">{formatBusPrice(ticket.executive!)}</td>
                              )}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Keunggulan Section */}
          <section id="keunggulan" className="py-20 bg-white">
            <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="text-center">
                <h2 className="text-3xl md:text-4xl font-extrabold text-dark">Mengapa Pesan Tiket Bus di Juragan Travel?</h2>
                <p className="mt-4 text-lg text-gray-600">Kami lebih dari sekedar agen tiket. Kami partner perjalanan Anda.</p>
              </div>

              <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
                {benefits.map((benefit, index) => {
                  const IconComponent = benefit.icon;
                  return (
                    <div key={index} className="bg-light p-6 rounded-lg shadow-lg flex items-start space-x-4">
                      <IconComponent className="w-10 h-10 text-secondary shrink-0 mt-1" />
                      <div>
                        <h3 className="text-xl font-bold text-dark">{benefit.title}</h3>
                        <p className="text-gray-600">{benefit.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>

          {/* Tentang PO Section */}
          <section id="tentang-po" className="py-20 bg-light">
            <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-extrabold text-dark">Mengenal PO Bus Terpercaya</h2>
                <p className="mt-4 text-lg text-gray-600">Partner bus pilihan kami untuk perjalanan jarak jauh yang nyaman dan aman</p>
              </div>

              {/* PO Handoyo */}
              <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
                <div className="relative h-80 md:h-96 rounded-xl overflow-hidden shadow-xl">
                  <Image
                    src="/img/layanan/po-handoyo-1.webp"
                    alt="PO Handoyo - Bus Executive dan VIP untuk perjalanan jarak jauh"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-dark mb-4">PO. Handoyo</h3>
                  <p className="text-lg text-gray-700 leading-relaxed mb-4">
                    <strong>PO. Handoyo</strong> adalah perusahaan otobus yang telah berpengalaman puluhan tahun melayani rute antar provinsi di Indonesia. Dengan armada bus <strong>Executive</strong> dan <strong>VIP</strong>, PO. Handoyo menawarkan kenyamanan maksimal untuk perjalanan jarak jauh.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <div className="w-2 h-2 rounded-full bg-primary mt-2 mr-3 shrink-0"></div>
                      <p className="text-gray-700"><strong>Rute Utama:</strong> Banyuwangi - Jakarta, Bogor, Bandung, Pekanbaru, Palembang, dan kota-kota besar lainnya</p>
                    </div>
                    <div className="flex items-start">
                      <div className="w-2 h-2 rounded-full bg-primary mt-2 mr-3 shrink-0"></div>
                      <p className="text-gray-700"><strong>Fasilitas:</strong> AC, kursi reclining, TV, audio entertainment, toilet, selimut, dan bantal</p>
                    </div>
                    <div className="flex items-start">
                      <div className="w-2 h-2 rounded-full bg-primary mt-2 mr-3 shrink-0"></div>
                      <p className="text-gray-700"><strong>Kelas Bus:</strong> Executive (2-2), VIP (2-2 semi sleeper)</p>
                    </div>
                    <div className="flex items-start">
                      <div className="w-2 h-2 rounded-full bg-primary mt-2 mr-3 shrink-0"></div>
                      <p className="text-gray-700"><strong>Keunggulan:</strong> Tepat waktu, armada terawat, driver profesional, dan harga kompetitif</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* PO Gunung Harta */}
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="order-2 md:order-1">
                  <h3 className="text-3xl font-bold text-dark mb-4">PO. Gunung Harta</h3>
                  <p className="text-lg text-gray-700 leading-relaxed mb-4">
                    <strong>PO. Gunung Harta</strong> merupakan salah satu perusahaan otobus terkemuka yang melayani rute Jawa dengan fokus pada kenyamanan penumpang. Armada bus <strong>Executive</strong> dan <strong>Sleeper</strong> menjadi pilihan favorit untuk perjalanan malam maupun siang.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <div className="w-2 h-2 rounded-full bg-secondary mt-2 mr-3 shrink-0"></div>
                      <p className="text-gray-700"><strong>Rute Utama:</strong> Banyuwangi - Jakarta, Bandung, Bogor, Semarang, Yogyakarta, dan wilayah Jawa lainnya</p>
                    </div>
                    <div className="flex items-start">
                      <div className="w-2 h-2 rounded-full bg-secondary mt-2 mr-3 shrink-0"></div>
                      <p className="text-gray-700"><strong>Fasilitas:</strong> Full AC, kursi sleeper berbaring 160°, LED TV, USB charging port, WiFi, toilet, dan snack gratis</p>
                    </div>
                    <div className="flex items-start">
                      <div className="w-2 h-2 rounded-full bg-secondary mt-2 mr-3 shrink-0"></div>
                      <p className="text-gray-700"><strong>Kelas Bus:</strong> Executive (2-2), Sleeper (2-1 full sleeper)</p>
                    </div>
                    <div className="flex items-start">
                      <div className="w-2 h-2 rounded-full bg-secondary mt-2 mr-3 shrink-0"></div>
                      <p className="text-gray-700"><strong>Keunggulan:</strong> Kursi sleeper premium, jadwal keberangkatan fleksibel, crew ramah, dan standar keamanan tinggi</p>
                    </div>
                  </div>
                </div>
                <div className="relative h-80 md:h-96 rounded-xl overflow-hidden shadow-xl order-1 md:order-2">
                  <Image
                    src="/img/layanan/po-gunung-harta.webp"
                    alt="PO Gunung Harta - Bus Executive dan Sleeper dengan fasilitas premium"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </div>

              {/* Info Box */}
              <div className="mt-16 bg-white p-8 rounded-xl shadow-lg border-l-4 border-primary">
                <h4 className="text-2xl font-bold text-dark mb-4">Kenapa Memilih Bus Executive & Sleeper?</h4>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h5 className="font-semibold text-dark mb-2">✨ Bus Executive</h5>
                    <p className="text-gray-600">Cocok untuk perjalanan siang atau malam dengan durasi menengah. Kursi nyaman, AC dingin, dan harga terjangkau.</p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-dark mb-2">🛏️ Bus Sleeper</h5>
                    <p className="text-gray-600">Pilihan terbaik untuk perjalanan malam jarak jauh. Kursi bisa rebahan hingga 160°, sehingga Anda bisa tidur nyenyak selama perjalanan.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section id="faq-page" className="py-20 bg-light">
            <div className="container mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-extrabold text-dark">
                  Sering Ditanyakan (FAQ)
                </h2>
                <p className="mt-4 text-lg text-gray-600">
                  Pertanyaan umum seputar pemesanan tiket bus.
                </p>
              </div>

              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <details
                    key={index}
                    className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 group"
                    open={faq.defaultOpen}
                  >
                    <summary className="flex justify-between items-center font-semibold text-lg text-dark cursor-pointer group-hover:text-primary">
                      {faq.question}
                      <ChevronDown className="w-5 h-5 text-primary transition-transform duration-300 group-open:rotate-180" />
                    </summary>
                    <p className="mt-4 text-gray-700 leading-relaxed">{faq.answer}</p>
                  </details>
                ))}
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section id="kontak" className="py-20 bg-primary text-white">
            <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
              <h2 className="text-3xl md:text-4xl font-extrabold">
                Pesan Tiket Bus Anda Sekarang
              </h2>
              <p className="mt-4 text-lg text-gray-200 max-w-2xl mx-auto">
                Amankan kursi Anda untuk perjalanan jauh. Hubungi admin kami via WhatsApp untuk booking cepat dan konfirmasi jadwal terbaru.
              </p>
              <a
                href="https://wa.me/6282143258744"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-10 inline-block bg-accent text-white px-10 py-3 rounded-lg font-bold text-lg shadow-lg hover:bg-opacity-90 transition-all transform hover:-translate-y-1"
              >
                Pesan Tiket Bus via WA
              </a>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
}
