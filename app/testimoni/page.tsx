import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { StructuredData } from "../components/SEO";
import { Star } from "lucide-react";

export const metadata: Metadata = {
  title: "Testimoni Pelanggan | travelbanyuwangi.id",
  description:
    "Lihat apa kata pelanggan kami. Kumpulan testimoni asli dari pelanggan travel, wisata wali, dan umroh di travelbanyuwangi.id. Agen terpercaya di Banyuwangi.",
  keywords:
    "testimoni travel banyuwangi, ulasan travelbanyuwangi.id, review travel banyuwangi terpercaya, testimoni travel banyuwangi surabaya",
  authors: [{ name: "travelbanyuwangi.id" }],
  openGraph: {
    title: "Testimoni Pelanggan | travelbanyuwangi.id",
    description: "Kumpulan testimoni asli dari pelanggan travel, wisata wali, dan umroh di travelbanyuwangi.id.",
    type: "website",
    url: "https://travelbanyuwangi.id/testimoni",
    images: [
      {
        url: "/img/hero.webp",
        width: 1200,
        height: 630,
      },
    ],
    siteName: "travelbanyuwangi.id",
  },
  twitter: {
    card: "summary_large_image",
    title: "Testimoni Pelanggan | travelbanyuwangi.id",
    description: "Kumpulan testimoni asli dari pelanggan travel, wisata wali, dan umroh di travelbanyuwangi.id.",
    images: ["https://placehold.co/1200x630/0077B6/FFFFFF?text=Testimoni+Pelanggan"],
  },
  alternates: {
    canonical: "https://travelbanyuwangi.id/testimoni",
  },
};

const collectionPageData = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Testimoni Pelanggan travelbanyuwangi.id",
  description: "Kumpulan ulasan dan testimoni asli dari pelanggan kami.",
  url: "https://travelbanyuwangi.id/testimoni",
  about: {
    "@type": "TravelAgency",
    name: "travelbanyuwangi.id",
  },
  mainEntity: [
    {
      "@type": "Review",
      author: {
        "@type": "Person",
        name: "Ahmad Yusuf",
      },
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
        bestRating: "5",
      },
      reviewBody:
        "Pelayanannya cepat dan sopirnya ramah banget. Mobilnya bersih dan nyaman. Pasti langganan di sini buat travel Banyuwangi-Surabaya.",
      itemReviewed: {
        "@type": "Service",
        name: "Travel Banyuwangi Surabaya",
      },
    },
    {
      "@type": "Review",
      author: {
        "@type": "Person",
        name: "Siti Fatimah",
      },
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
        bestRating: "5",
      },
      reviewBody:
        "Booking untuk travel ke Denpasar mendadak, tapi tetap dilayani dengan baik. Dijemput tepat waktu dan sampai tujuan dengan aman. Recommended!",
      itemReviewed: {
        "@type": "Service",
        name: "Travel Banyuwangi Denpasar",
      },
    },
    {
      "@type": "Review",
      author: {
        "@type": "Person",
        name: "Rombongan Bapak H. Sodiq",
      },
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
        bestRating: "5",
      },
      reviewBody:
        "Alhamdulillah perjalanan Wisata Wali 5 lancar. Busnya nyaman, krunya ramah, dan bimbingannya sangat membantu. Terima kasih travelbanyuwangi.id.",
      itemReviewed: {
        "@type": "Service",
        name: "Paket Wisata Wali 5",
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
      item: "https://travelbanyuwangi.id/",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Testimoni",
      item: "https://travelbanyuwangi.id/testimoni",
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
    text: "Pakai jasa kirim paket express Banyuwangi-Malang, sehari sampai. Harganya juga oke. Mantap travelbanyuwangi.id!",
    avatar: "/avatar.webp",
    name: "Budi Santoso",
    service: "Pelanggan, Paket Express Malang",
  },
  {
    rating: 5,
    text: "Alhamdulillah perjalanan Wisata Wali 5 lancar. Busnya nyaman, krunya ramah, dan bimbingannya sangat membantu. Terima kasih.",
    avatar: "/avatar.webp",
    name: "Rombongan Bpk. H. Sodiq",
    service: "Peserta, Wisata Wali 5",
  },
  {
    rating: 5,
    text: "Sangat terbantu dengan jasa pengurusan paspor. Tidak perlu antri dan ribet, tahu-tahu sudah jadi. Prosesnya cepat dan amanah.",
    avatar: "/avatar.webp",
    name: "Dewi Lestari",
    service: "Pelanggan, Jasa Paspor",
  },
  {
    rating: 5,
    text: "Charter mobil untuk perjalanan dinas ke Surabaya. Driver on-time, mobil Innova Reborn bersih dan wangi. Pelayanan profesional.",
    avatar: "/avatar.webp",
    name: "Ibu Indah (Dinas PU)",
    service: "Pelanggan, Perjalanan Dinas",
  },
];

export default function TestimoniPage() {
  return (
    <>
      <StructuredData data={collectionPageData} />
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
                Apa kata mereka yang telah menggunakan layanan travelbanyuwangi.id. Kepuasan Anda adalah prioritas kami.
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
