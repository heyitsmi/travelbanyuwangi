import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Rute Travel Banyuwangi – Surabaya, Malang, Denpasar, & Lainnya | Juragan Travel",
  description:
    "Daftar rute travel dari Banyuwangi ke Surabaya, Malang, Denpasar, Juanda, Tanjung Perak, Solo, Tulungagung, Jember, Lumajang, Sidoarjo, Gresik, Pasuruan. Jadwal setiap hari, door-to-door.",
  keywords:
    "rute travel banyuwangi, travel banyuwangi surabaya, travel banyuwangi malang, travel banyuwangi denpasar, travel banyuwangi juanda, travel banyuwangi tanjung perak, travel banyuwangi solo, travel banyuwangi tulungagung, travel banyuwangi jember, travel banyuwangi lumajang, travel banyuwangi sidoarjo, travel banyuwangi gresik, travel banyuwangi pasuruan",
  authors: [{ name: "Juragan Travel" }],
  openGraph: {
    title: "Rute Travel Banyuwangi – Jadwal & Harga | Juragan Travel",
    description:
      "Semua rute travel dari Banyuwangi: Surabaya, Malang, Denpasar, Juanda, Tanjung Perak, dan lainnya. Berangkat tiap hari, door-to-door.",
    type: "website",
    url: "https://juragantravel.com/rute",
    images: [
      { url: "https://juragantravel.com/img/hero.webp", width: 1200, height: 630, alt: "Rute travel dari Banyuwangi" },
    ],
    siteName: "Juragan Travel",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rute Travel Banyuwangi – Jadwal & Harga",
    description:
      "Pilih rute travel Banyuwangi ke Surabaya, Malang, Denpasar, dan lainnya. Berangkat setiap hari, door-to-door.",
    images: ["https://juragantravel.com/img/hero.webp"],
  },
  alternates: { canonical: "https://juragantravel.com/rute" },
  robots: { index: true, follow: true },
};

export default function RuteLayout({ children }: { children: React.ReactNode }) {
  return children;
}
