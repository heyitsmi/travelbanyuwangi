import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { StructuredData } from "../components/SEO";
import { Star } from "lucide-react";

export const metadata: Metadata = {
  title: "Testimoni Pelanggan | Juragan Travel",
  description:
    "Lihat apa kata pelanggan kami. Kumpulan testimoni asli dari pelanggan travel, wisata wali, dan umroh di Juragan Travel. Agen terpercaya di Banyuwangi.",
  keywords:
    "testimoni travel banyuwangi, ulasan Juragan Travel, review travel banyuwangi terpercaya, testimoni travel banyuwangi surabaya",
  authors: [{ name: "Juragan Travel" }],
  openGraph: {
    title: "Testimoni Pelanggan | Juragan Travel",
    description: "Kumpulan testimoni asli dari pelanggan travel, wisata wali, dan umroh di Juragan Travel.",
    type: "website",
    url: "https://juragantravel.com/testimoni",
    images: [
      {
        url: "https://juragantravel.com/img/hero.webp",
        width: 1200,
        height: 630,
      },
    ],
    siteName: "Juragan Travel",
  },
  twitter: {
    card: "summary_large_image",
    title: "Testimoni Pelanggan | Juragan Travel",
    description: "Kumpulan testimoni asli dari pelanggan travel, wisata wali, dan umroh di Juragan Travel.",
    images: ["https://juragantravel.com/img/hero.webp"],
  },
  alternates: {
    canonical: "https://juragantravel.com/testimoni",
  },
};

const organizationData = {
  "@context": "https://schema.org",
  "@type": "TravelAgency",
  name: "Juragan Travel",
  url: "https://juragantravel.com",
  logo: "https://juragantravel.com/img/brand/logo.webp",
  description: "Agen travel terpercaya di Banyuwangi untuk perjalanan antar kota, wisata religi, dan layanan perjalanan lainnya.",
  telephone: "+6282143258744",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Kec. Bangorejo",
    addressLocality: "Banyuwangi",
    addressRegion: "Jawa Timur",
    addressCountry: "ID",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "15",
    bestRating: "5",
    worstRating: "1",
  },
  review: [
    {
      "@type": "Review",
      itemReviewed: {
        "@type": "TravelAgency",
        name: "Juragan Travel",
        image: "https://juragantravel.com/img/brand/logo.webp",
      },
      author: {
        "@type": "Person",
        name: "Ahmad Yusuf",
      },
      datePublished: "2025-01-10",
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
        bestRating: "5",
      },
      reviewBody:
        "Pelayanannya cepat dan sopirnya ramah banget. Mobilnya bersih dan nyaman. Pasti langganan di sini buat travel Banyuwangi-Surabaya.",
    },
    {
      "@type": "Review",
      itemReviewed: {
        "@type": "TravelAgency",
        name: "Juragan Travel",
        image: "https://juragantravel.com/img/brand/logo.webp",
      },
      author: {
        "@type": "Person",
        name: "Siti Fatimah",
      },
      datePublished: "2025-01-08",
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
        bestRating: "5",
      },
      reviewBody:
        "Booking untuk travel ke Denpasar mendadak, tapi tetap dilayani dengan baik. Dijemput tepat waktu dan sampai tujuan dengan aman. Recommended!",
    },
    {
      "@type": "Review",
      itemReviewed: {
        "@type": "TravelAgency",
        name: "Juragan Travel",
        image: "https://juragantravel.com/img/brand/logo.webp",
      },
      author: {
        "@type": "Person",
        name: "Budi Santoso",
      },
      datePublished: "2025-01-05",
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
        bestRating: "5",
      },
      reviewBody:
        "Pakai jasa kirim paket express Banyuwangi-Malang, sehari sampai. Harganya juga oke. Mantap Juragan Travel!",
    },
    {
      "@type": "Review",
      itemReviewed: {
        "@type": "TravelAgency",
        name: "Juragan Travel",
        image: "https://juragantravel.com/img/brand/logo.webp",
      },
      author: {
        "@type": "Person",
        name: "Nurul Hidayah",
      },
      datePublished: "2024-12-28",
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
        bestRating: "5",
      },
      reviewBody:
        "Travel Banyuwangi-Jember sangat nyaman dan cepat. Dijemput di rumah, langsung antar sampai tujuan. Harga terjangkau dan pelayanan memuaskan.",
    },
    {
      "@type": "Review",
      itemReviewed: {
        "@type": "TravelAgency",
        name: "Juragan Travel",
        image: "https://juragantravel.com/img/brand/logo.webp",
      },
      author: {
        "@type": "Person",
        name: "Dewi Lestari",
      },
      datePublished: "2024-12-20",
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
        bestRating: "5",
      },
      reviewBody:
        "Beli tiket bus Gunung Harta sleeper ke Bandung di sini. Admin bantu pilih kursi terbaik, harga lebih murah dari agen lain. Recommended!",
    },
    {
      "@type": "Review",
      itemReviewed: {
        "@type": "TravelAgency",
        name: "Juragan Travel",
        image: "https://juragantravel.com/img/brand/logo.webp",
      },
      author: {
        "@type": "Person",
        name: "Ibu Indah",
      },
      datePublished: "2024-12-15",
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
        bestRating: "5",
      },
      reviewBody:
        "Travel ke Lumajang tepat waktu, sopir ramah dan menguasai medan. Armada bersih dan nyaman. Harga sesuai dengan kualitas pelayanan.",
    },
    {
      "@type": "Review",
      itemReviewed: {
        "@type": "TravelAgency",
        name: "Juragan Travel",
        image: "https://juragantravel.com/img/brand/logo.webp",
      },
      author: {
        "@type": "Person",
        name: "Eko Prasetyo",
      },
      datePublished: "2024-12-10",
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
        bestRating: "5",
      },
      reviewBody:
        "Travel ke Malang jam berangkat tepat waktu, tidak menunggu lama. Sopir berpengalaman dan mengerti jalan pintas. Harga juga masuk akal.",
    },
    {
      "@type": "Review",
      itemReviewed: {
        "@type": "TravelAgency",
        name: "Juragan Travel",
        image: "https://juragantravel.com/img/brand/logo.webp",
      },
      author: {
        "@type": "Person",
        name: "Rini Anggraini",
      },
      datePublished: "2024-12-05",
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
        bestRating: "5",
      },
      reviewBody:
        "Pesan tiket bus Handoyo ke Jakarta di sini, prosesnya mudah dan cepat. Admin responsif banget. E-ticket langsung dikirim via WA. Mantap!",
    },
    {
      "@type": "Review",
      itemReviewed: {
        "@type": "TravelAgency",
        name: "Juragan Travel",
        image: "https://juragantravel.com/img/brand/logo.webp",
      },
      author: {
        "@type": "Person",
        name: "Agus Setiawan",
      },
      datePublished: "2024-11-28",
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
        bestRating: "5",
      },
      reviewBody:
        "Saya sering ke Bandara Juanda, selalu pakai Juragan Travel. Armadanya bagus, sopir ramah, dan yang penting tepat waktu. Tidak pernah telat!",
    },
    {
      "@type": "Review",
      itemReviewed: {
        "@type": "TravelAgency",
        name: "Juragan Travel",
        image: "https://juragantravel.com/img/brand/logo.webp",
      },
      author: {
        "@type": "Person",
        name: "Fitri Wulandari",
      },
      datePublished: "2024-11-22",
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
        bestRating: "5",
      },
      reviewBody:
        "Perjalanan ke Solo lancar jaya. Meskipun jarak jauh, tapi mobil nyaman dan driver profesional. Worth it untuk harga yang ditawarkan.",
    },
    {
      "@type": "Review",
      itemReviewed: {
        "@type": "TravelAgency",
        name: "Juragan Travel",
        image: "https://juragantravel.com/img/brand/logo.webp",
      },
      author: {
        "@type": "Person",
        name: "Hendra Kurniawan",
      },
      datePublished: "2024-11-18",
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
        bestRating: "5",
      },
      reviewBody:
        "Travel Banyuwangi-Probolinggo sangat nyaman. Dijemput door to door, armada bagus, dan sopir berpengalaman. Perjalanan jadi lebih praktis.",
    },
    {
      "@type": "Review",
      itemReviewed: {
        "@type": "TravelAgency",
        name: "Juragan Travel",
        image: "https://juragantravel.com/img/brand/logo.webp",
      },
      author: {
        "@type": "Person",
        name: "Linda Permatasari",
      },
      datePublished: "2024-11-12",
      reviewRating: {
        "@type": "Rating",
        ratingValue: "4",
        bestRating: "5",
      },
      reviewBody:
        "Travel ke Denpasar nyaman, cuma agak telat 20 menit dari jadwal. Tapi overall pelayanannya bagus dan sopir ramah. Next time pasti pakai lagi.",
    },
    {
      "@type": "Review",
      itemReviewed: {
        "@type": "TravelAgency",
        name: "Juragan Travel",
        image: "https://juragantravel.com/img/brand/logo.webp",
      },
      author: {
        "@type": "Person",
        name: "Bambang Tri Hartono",
      },
      datePublished: "2024-11-08",
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
        bestRating: "5",
      },
      reviewBody:
        "Sudah 3 kali pakai jasa Juragan Travel untuk ke Gresik. Selalu memuaskan! Booking mudah, harga jelas, dan tidak ada biaya tersembunyi.",
    },
    {
      "@type": "Review",
      itemReviewed: {
        "@type": "TravelAgency",
        name: "Juragan Travel",
        image: "https://juragantravel.com/img/brand/logo.webp",
      },
      author: {
        "@type": "Person",
        name: "Yulia Rahmawati",
      },
      datePublished: "2024-11-02",
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
        bestRating: "5",
      },
      reviewBody:
        "Kirim paket express ke Surabaya pagi, sore sudah sampai. Fast response dari admin dan harga kompetitif. Terima kasih Juragan Travel!",
    },
    {
      "@type": "Review",
      itemReviewed: {
        "@type": "TravelAgency",
        name: "Juragan Travel",
        image: "https://juragantravel.com/img/brand/logo.webp",
      },
      author: {
        "@type": "Person",
        name: "Muhammad Rizki",
      },
      datePublished: "2024-10-28",
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
        bestRating: "5",
      },
      reviewBody:
        "Beli tiket bus Handoyo Executive ke Jakarta sangat mudah. Admin kasih info lengkap jadwal keberangkatan. Bus nyaman dan driver profesional.",
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
      name: "Testimoni",
      item: "https://juragantravel.com/testimoni",
    },
  ],
};

const testimonials = [
  {
    rating: 5,
    text: "Pelayanannya cepat dan sopirnya ramah banget. Mobilnya bersih dan nyaman. Pasti langganan di sini buat travel Banyuwangi-Surabaya.",
    avatar: "/avatar.webp",
    name: "Ahmad Yusuf",
    service: "Pelanggan, Travel Banyuwangi-Surabaya",
  },
  {
    rating: 5,
    text: "Booking untuk travel ke Denpasar mendadak, tapi tetap dilayani dengan baik. Dijemput tepat waktu dan sampai tujuan dengan aman. Recommended!",
    avatar: "/avatar.webp",
    name: "Siti Fatimah",
    service: "Pelanggan, Travel Banyuwangi-Denpasar",
  },
  {
    rating: 5,
    text: "Pakai jasa kirim paket express Banyuwangi-Malang, sehari sampai. Harganya juga oke. Mantap Juragan Travel!",
    avatar: "/avatar.webp",
    name: "Budi Santoso",
    service: "Pelanggan, Paket Express Malang",
  },
  {
    rating: 5,
    text: "Travel Banyuwangi-Jember sangat nyaman dan cepat. Dijemput di rumah, langsung antar sampai tujuan. Harga terjangkau dan pelayanan memuaskan.",
    avatar: "/avatar.webp",
    name: "Nurul Hidayah",
    service: "Pelanggan, Travel Banyuwangi-Jember",
  },
  {
    rating: 5,
    text: "Beli tiket bus Gunung Harta sleeper ke Bandung di sini. Admin bantu pilih kursi terbaik, harga lebih murah dari agen lain. Recommended!",
    avatar: "/avatar.webp",
    name: "Dewi Lestari",
    service: "Pelanggan, Tiket Bus Gunung Harta",
  },
  {
    rating: 5,
    text: "Travel ke Lumajang tepat waktu, sopir ramah dan menguasai medan. Armada bersih dan nyaman. Harga sesuai dengan kualitas pelayanan.",
    avatar: "/avatar.webp",
    name: "Ibu Indah",
    service: "Pelanggan, Travel Banyuwangi-Lumajang",
  },
  {
    rating: 5,
    text: "Travel ke Malang jam berangkat tepat waktu, tidak menunggu lama. Sopir berpengalaman dan mengerti jalan pintas. Harga juga masuk akal.",
    avatar: "/avatar.webp",
    name: "Eko Prasetyo",
    service: "Pelanggan, Travel Banyuwangi-Malang",
  },
  {
    rating: 5,
    text: "Pesan tiket bus Handoyo ke Jakarta di sini, prosesnya mudah dan cepat. Admin responsif banget. E-ticket langsung dikirim via WA. Mantap!",
    avatar: "/avatar.webp",
    name: "Rini Anggraini",
    service: "Pelanggan, Tiket Bus Handoyo",
  },
  {
    rating: 5,
    text: "Saya sering ke Bandara Juanda, selalu pakai Juragan Travel. Armadanya bagus, sopir ramah, dan yang penting tepat waktu. Tidak pernah telat!",
    avatar: "/avatar.webp",
    name: "Agus Setiawan",
    service: "Pelanggan, Travel Bandara Juanda",
  },
  {
    rating: 5,
    text: "Perjalanan ke Solo lancar jaya. Meskipun jarak jauh, tapi mobil nyaman dan driver profesional. Worth it untuk harga yang ditawarkan.",
    avatar: "/avatar.webp",
    name: "Fitri Wulandari",
    service: "Pelanggan, Travel Banyuwangi-Solo",
  },
  {
    rating: 5,
    text: "Travel Banyuwangi-Probolinggo sangat nyaman. Dijemput door to door, armada bagus, dan sopir berpengalaman. Perjalanan jadi lebih praktis.",
    avatar: "/avatar.webp",
    name: "Hendra Kurniawan",
    service: "Pelanggan, Travel Banyuwangi-Probolinggo",
  },
  {
    rating: 4,
    text: "Travel ke Denpasar nyaman, cuma agak telat 20 menit dari jadwal. Tapi overall pelayanannya bagus dan sopir ramah. Next time pasti pakai lagi.",
    avatar: "/avatar.webp",
    name: "Linda Permatasari",
    service: "Pelanggan, Travel Banyuwangi-Denpasar",
  },
  {
    rating: 5,
    text: "Sudah 3 kali pakai jasa Juragan Travel untuk ke Gresik. Selalu memuaskan! Booking mudah, harga jelas, dan tidak ada biaya tersembunyi.",
    avatar: "/avatar.webp",
    name: "Bambang Tri Hartono",
    service: "Pelanggan, Travel Banyuwangi-Gresik",
  },
  {
    rating: 5,
    text: "Kirim paket express ke Surabaya pagi, sore sudah sampai. Fast response dari admin dan harga kompetitif. Terima kasih Juragan Travel!",
    avatar: "/avatar.webp",
    name: "Yulia Rahmawati",
    service: "Pelanggan, Paket Express",
  },
  {
    rating: 5,
    text: "Beli tiket bus Handoyo Executive ke Jakarta sangat mudah. Admin kasih info lengkap jadwal keberangkatan. Bus nyaman dan driver profesional.",
    avatar: "/avatar.webp",
    name: "Muhammad Rizki",
    service: "Pelanggan, Tiket Bus Handoyo",
  },
];

export default function TestimoniPage() {
  return (
    <>
      <StructuredData data={organizationData} />
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
                <span className="text-dark font-medium">Testimoni</span>
              </nav>
              <h1 className="text-4xl md:text-5xl font-extrabold text-dark">Testimoni & Ulasan Pelanggan</h1>
              <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
                Apa kata mereka yang telah menggunakan layanan Juragan Travel. Kepuasan Anda adalah prioritas kami.
              </p>
            </div>
          </section>

          {/* Testimoni Grid Section */}
          <section id="testimoni-grid" className="py-20 bg-white">
            <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="bg-white p-8 rounded-lg shadow-lg border border-gray-100">
                    <div className="flex text-accent">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-current" />
                      ))}
                    </div>
                    <p className="mt-4 text-lg text-gray-700 italic">{testimonial.text}</p>
                    <div className="flex items-center mt-6">
                      <div className="relative w-10 h-10">
                        <Image
                          src={testimonial.avatar}
                          alt="Avatar pelanggan"
                          fill
                          sizes="(max-width: 768px) 100vw, 50vw"
                          className="rounded-full object-cover"
                        />
                      </div>
                      <div className="ml-3">
                        <p className="font-semibold text-dark">{testimonial.name}</p>
                        <p className="text-sm text-gray-500">{testimonial.service}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section id="kontak" className="py-20 bg-primary text-white">
            <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
              <h2 className="text-3xl md:text-4xl font-extrabold">Siap Menjadi Pelanggan Puas Kami Berikutnya?</h2>
              <p className="mt-4 text-lg text-gray-200 max-w-2xl mx-auto">
                Hubungi kami via WhatsApp untuk booking cepat dan rasakan layanan travel terbaik di Banyuwangi.
              </p>
              <a
                href="https://wa.me/6282143258744"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-10 inline-block bg-accent text-white px-10 py-3 rounded-lg font-bold text-lg shadow-lg hover:bg-opacity-90 transition-all transform hover:-translate-y-1"
              >
                Pesan Sekarang via WA
              </a>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
}
