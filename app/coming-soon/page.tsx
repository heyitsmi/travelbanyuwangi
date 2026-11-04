import type { Metadata } from "next";
import Image from "next/image";
import {
  ArrowUpRight,
  Bus,
  MessageCircle,
  MapPin,
  PackageCheck,
  Ticket,
} from "lucide-react";
import styles from "./coming-soon.module.css";

const siteUrl = "https://juragantravel.com";
function contactLink() {
  return `/kontak#contact-form`;
}

export const metadata: Metadata = {
  title: "Juragan Travel - Travel Banyuwangi, Surabaya, Malang & Bali",
  description:
    "Juragan Travel melayani perjalanan antar kota dari Banyuwangi ke Surabaya, Malang, dan Bali. Tersedia travel, tiket bus, dan paket express. Kirim permintaan melalui formulir kontak.",
  alternates: { canonical: siteUrl },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Perjalanan Lebih Nyaman, Segera Hadir | Juragan Travel",
    description:
      "Website Juragan Travel sedang diperbarui. Layanan travel, tiket bus, dan paket express tetap tersedia melalui formulir kontak.",
    url: siteUrl,
    siteName: "Juragan Travel",
    locale: "id_ID",
    type: "website",
    images: [
      {
        url: "/img/hero.webp",
        width: 1920,
        height: 1080,
        alt: "Armada travel melintasi jalan di Jawa Timur",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Perjalanan Lebih Nyaman, Segera Hadir | Juragan Travel",
    description:
      "Layanan dan pemesanan tetap berjalan selama website Juragan Travel diperbarui.",
    images: ["/img/hero.webp"],
  },
};

const services = [
  {
    icon: Bus,
    title: "Travel antar kota",
    description:
      "Perjalanan door-to-door dari Banyuwangi ke berbagai kota di Jawa dan Bali, sesuai cakupan rute.",
  },
  {
    icon: Ticket,
    title: "Tiket bus",
    description:
      "Bantu pilih tiket dan kelas bus yang tersedia untuk perjalanan antar kota Anda.",
  },
  {
    icon: PackageCheck,
    title: "Paket express",
    description:
      "Kirim barang dengan praktis melalui layanan paket antar kota pada rute yang tersedia.",
  },
];

const popularRoutes = [
  "Banyuwangi – Surabaya",
  "Banyuwangi – Malang",
  "Banyuwangi – Denpasar",
  "Surabaya – Banyuwangi",
];

const travelAgencyData = {
  "@context": "https://schema.org",
  "@type": "TravelAgency",
  "@id": `${siteUrl}/#organization`,
  name: "Juragan Travel",
  url: siteUrl,
  description:
    "Penyedia layanan travel antar kota dari Banyuwangi, Jawa Timur, serta pemesanan tiket bus dan paket express.",
  logo: `${siteUrl}/img/brand/juragantravel-dark.webp`,
  image: `${siteUrl}/img/hero.webp`,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Jl. Raya Jember No. 1",
    addressLocality: "Banyuwangi",
    addressRegion: "Jawa Timur",
    postalCode: "68416",
    addressCountry: "ID",
  },
};

export default function ComingSoonPage() {
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <div className={styles.headerInner}>
          <a className={styles.brand} href="/" aria-label="Juragan Travel, beranda">
            <Image
              src="/img/brand/juragantravel-dark.webp"
              alt="Juragan Travel"
              width={496}
              height={72}
              priority
              sizes="(max-width: 640px) 148px, 210px"
            />
          </a>
          <a
            className={styles.headerCta}
            href={contactLink()}
          >
            <MessageCircle size={17} strokeWidth={1.8} aria-hidden="true" />
            Hubungi kami
          </a>
        </div>
      </header>

      <main>
        <section className={styles.hero} aria-labelledby="hero-title">
          <div className={styles.heroInner}>
            <div className={styles.heroCopy}>
              <p className={styles.eyebrow}>A better journey is coming</p>
              <h1 id="hero-title">Perjalanan lebih nyaman, segera hadir.</h1>
              <p className={styles.heroDescription}>
                Kami sedang menyiapkan pengalaman digital baru untuk Juragan Travel.
                Selama pembaruan website, layanan dan pemesanan tetap tersedia melalui formulir kontak.
              </p>
              <div className={styles.heroActions}>
                <a
                  className={styles.primaryCta}
                  href={contactLink()}
                >
                  Kirim permintaan <ArrowUpRight size={18} aria-hidden="true" />
                </a>
                <span className={styles.availability}>
                  <span className={styles.availabilityDot} aria-hidden="true" />
                  Layanan tetap beroperasi
                </span>
              </div>
              <div className={styles.heroLocation}>
                <MapPin size={16} strokeWidth={1.8} aria-hidden="true" />
                Berangkat dari Banyuwangi, Jawa Timur
              </div>
            </div>

            <div className={styles.heroVisual}>
              <Image
                src="/img/hero.webp"
                alt="Armada travel melintasi jalan di Jawa Timur"
                fill
                priority
                sizes="(max-width: 800px) 100vw, 52vw"
                className={styles.heroImage}
              />
              <div className={styles.imageCaption}>
                <span className={styles.captionMark} aria-hidden="true" />
                Jalan lebih tenang dimulai dari sini
              </div>
              <div className={styles.routeNote}>
                <MapPin size={17} aria-hidden="true" />
                <span>
                  <strong>Jawa &amp; Bali</strong>
                  <small>Rute pilihan setiap hari</small>
                </span>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.intro} aria-labelledby="about-title">
          <div className={styles.introLabel}>Tentang Juragan Travel</div>
          <div className={styles.introContent}>
            <h2 id="about-title">Teman perjalanan dari Banyuwangi ke berbagai kota.</h2>
            <div>
              <p>
                Juragan Travel adalah penyedia layanan transportasi antar kota yang berbasis
                di Banyuwangi. Kami membantu perjalanan ke berbagai destinasi di Jawa dan Bali
                dengan layanan praktis dan nyaman.
              </p>
              <p>
                Pada rute yang tersedia, layanan door-to-door memudahkan Anda tanpa harus
                menuju terminal. Kami juga melayani pemesanan tiket bus dan pengiriman paket
                express.
              </p>
            </div>
          </div>
        </section>

        <section className={styles.servicesSection} aria-labelledby="services-title">
          <div className={styles.sectionHeading}>
            <p className={styles.eyebrow}>Layanan kami</p>
            <h2 id="services-title">Perjalanan dan kebutuhan kirim, lebih mudah.</h2>
          </div>
          <div className={styles.serviceGrid}>
            {services.map(({ icon: Icon, title, description }) => (
              <article className={styles.serviceCard} key={title}>
                <div className={styles.serviceIcon}>
                  <Icon size={22} strokeWidth={1.7} aria-hidden="true" />
                </div>
                <h3>{title}</h3>
                <p>{description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.routesSection} aria-labelledby="routes-title">
          <div>
            <p className={styles.eyebrow}>Cakupan perjalanan</p>
            <h2 id="routes-title">Rute pilihan dari dan menuju Banyuwangi.</h2>
          </div>
          <ul className={styles.routeList}>
            {popularRoutes.map((route) => (
              <li key={route}>
                <MapPin size={15} strokeWidth={1.8} aria-hidden="true" />
                {route}
              </li>
            ))}
          </ul>
        </section>

        <section className={styles.contactSection} aria-labelledby="contact-title">
          <div className={styles.contactCopy}>
            <p className={styles.contactEyebrow}>Kami siap membantu</p>
            <h2 id="contact-title">Perjalanan Anda, kami siapkan.</h2>
            <p>
              Butuh informasi jadwal, tarif, atau ingin memesan? Tim Juragan Travel siap
              membantu Anda melalui formulir kontak.
            </p>
          </div>
          <a
            className={styles.contactCta}
            href={contactLink()}
          >
            Hubungi kami <ArrowUpRight size={18} aria-hidden="true" />
          </a>
        </section>
      </main>

      <footer className={styles.footer}>
        <a className={styles.footerBrand} href="/" aria-label="Juragan Travel, beranda">
          <Image
            src="/img/brand/juragantravel-dark.webp"
            alt="Juragan Travel"
            width={496}
            height={72}
            sizes="174px"
          />
        </a>
        <p>
          Layanan travel antar kota dari Banyuwangi, Jawa Timur.
          <span> © {new Date().getFullYear()} Juragan Travel</span>
        </p>
      </footer>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(travelAgencyData) }}
      />
    </div>
  );
}
