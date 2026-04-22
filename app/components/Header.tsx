"use client";

import Link from "next/link";
import Image from "next/image";
import { Menu, ChevronDown } from "lucide-react";
import { useState } from "react";
import { usePathname } from "next/navigation";
import WhatsAppLink from "./WhatsAppLink";


export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();


  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <nav className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-2xl font-bold text-primary">
            <Image src="/img/brand/logo-dark.webp" alt="Juragan Travel" width={120} height={32} className="h-8 w-auto" />
          </Link>

          <div className="hidden md:flex md:items-center md:space-x-6">
            <Link href="/" title="Beranda - Halaman utama Juragan Travel" className="text-gray-700 hover:text-primary transition-colors">
              Beranda
            </Link>
            <Link
              href="/rute"
              title="Rute Travel - Lihat semua rute perjalanan yang tersedia"
              className={`${
                pathname === "/rute" ? "text-primary font-semibold" : "text-gray-700"
              } hover:text-primary transition-colors`}
            >
              Rute
            </Link>
            <Link
              href="/layanan"
              title="Layanan Travel - Jelajahi layanan travel dan paket yang tersedia"
              className={`${
                pathname === "/layanan" ? "text-primary font-semibold" : "text-gray-700"
              } hover:text-primary transition-colors`}
            >
              Layanan
            </Link>
            <Link
              href="/blog"
              title="Blog Travel - Tips dan panduan perjalanan terbaru"
              className={`${
                pathname === "/blog" ? "text-primary font-semibold" : "text-gray-700"
              } hover:text-primary transition-colors`}
            >
              Blog
            </Link>
            <Link
              href="/cek-harga"
              title="Cek Harga Travel - Dapatkan estimasi biaya perjalanan Anda"
              className={`${
                pathname === "/cek-harga" ? "text-primary font-semibold" : "text-gray-700"
              } hover:text-primary transition-colors`}
            >
              Cek Harga
            </Link>
            <Link
              href="/faq"
              title="FAQ - Pertanyaan yang sering diajukan tentang layanan travel"
              className={`${
                pathname === "/faq" ? "text-primary font-semibold" : "text-gray-700"
              } hover:text-primary transition-colors`}
            >
              FAQ
            </Link>
          </div>

          <div className="hidden md:flex items-center gap-4">


            <WhatsAppLink
              title="Pesan travel Banyuwangi via WhatsApp - Hubungi kami sekarang"
              className="bg-secondary text-white px-5 py-2 rounded-lg font-medium hover:bg-opacity-90 transition-all"
            >
              Pesan via WA
            </WhatsAppLink>
          </div>

          <button
            className="md:hidden text-dark"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 space-y-3">
            <Link
              href="/"
              title="Beranda - Halaman utama Juragan Travel"
              className="block text-gray-700 hover:text-primary transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Beranda
            </Link>
            <Link
              href="/rute"
              title="Rute Travel - Lihat semua rute perjalanan yang tersedia"
              className={`block ${
                pathname === "/rute" ? "text-primary font-semibold" : "text-gray-700"
              } hover:text-primary transition-colors`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Rute
            </Link>
            <Link
              href="/layanan"
              title="Layanan Travel - Jelajahi layanan travel dan paket yang tersedia"
              className={`block ${
                pathname === "/layanan" ? "text-primary font-semibold" : "text-gray-700"
              } hover:text-primary transition-colors`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Layanan
            </Link>
            <Link
              href="/blog"
              title="Blog Travel - Tips dan panduan perjalanan terbaru"
              className={`block ${
                pathname === "/blog" ? "text-primary font-semibold" : "text-gray-700"
              } hover:text-primary transition-colors`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Blog
            </Link>
            <Link
              href="/cek-harga"
              title="Cek Harga Travel - Dapatkan estimasi biaya perjalanan Anda"
              className={`block ${
                pathname === "/cek-harga" ? "text-primary font-semibold" : "text-gray-700"
              } hover:text-primary transition-colors`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Cek Harga
            </Link>
            <Link
              href="/faq"
              title="FAQ - Pertanyaan yang sering diajukan tentang layanan travel"
              className={`block ${
                pathname === "/faq" ? "text-primary font-semibold" : "text-gray-700"
              } hover:text-primary transition-colors`}
              onClick={() => setMobileMenuOpen(false)}
            >
              FAQ
            </Link>

            <WhatsAppLink
              title="Pesan travel Banyuwangi via WhatsApp - Hubungi kami sekarang"
              className="block w-full bg-secondary text-white px-5 py-2 rounded-lg font-medium hover:bg-opacity-90 transition-all text-center"
            >
              Pesan via WA
            </WhatsAppLink>
          </div>
        )}
      </nav>
    </header>
  );
}
