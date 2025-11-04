"use client";

import Link from "next/link";
import Image from "next/image";
import { Menu } from "lucide-react";
import { useState } from "react";
import { usePathname } from "next/navigation";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <nav className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-2xl font-bold text-primary">
            <Image src="/img/brand/juragantravel-dark.webp" alt="Juragan Travel" width={120} height={32} className="h-8 w-auto" />
          </Link>

          <div className="hidden md:flex md:items-center md:space-x-6">
            <Link href="/" className="text-gray-700 hover:text-primary transition-colors">
              Beranda
            </Link>
            <Link
              href="/rute"
              className={`${
                pathname === "/rute" ? "text-primary font-semibold" : "text-gray-700"
              } hover:text-primary transition-colors`}
            >
              Rute
            </Link>
            <Link
              href="/layanan"
              className={`${
                pathname === "/layanan" ? "text-primary font-semibold" : "text-gray-700"
              } hover:text-primary transition-colors`}
            >
              Layanan
            </Link>
            <Link
              href="/blog"
              className={`${
                pathname === "/blog" ? "text-primary font-semibold" : "text-gray-700"
              } hover:text-primary transition-colors`}
            >
              Blog
            </Link>
            <Link
              href="/faq"
              className={`${
                pathname === "/faq" ? "text-primary font-semibold" : "text-gray-700"
              } hover:text-primary transition-colors`}
            >
              FAQ
            </Link>
          </div>

          <a
            href="https://wa.me/6282143258744"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-block bg-secondary text-white px-5 py-2 rounded-lg font-medium hover:bg-opacity-90 transition-all"
          >
            Pesan via WA
          </a>

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
              className="block text-gray-700 hover:text-primary transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Beranda
            </Link>
            <Link
              href="/rute"
              className={`block ${
                pathname === "/rute" ? "text-primary font-semibold" : "text-gray-700"
              } hover:text-primary transition-colors`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Rute
            </Link>
            <Link
              href="/layanan"
              className={`block ${
                pathname === "/layanan" ? "text-primary font-semibold" : "text-gray-700"
              } hover:text-primary transition-colors`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Layanan
            </Link>
            <Link
              href="/blog"
              className={`block ${
                pathname === "/blog" ? "text-primary font-semibold" : "text-gray-700"
              } hover:text-primary transition-colors`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Blog
            </Link>
            <Link
              href="/faq"
              className={`block ${
                pathname === "/faq" ? "text-primary font-semibold" : "text-gray-700"
              } hover:text-primary transition-colors`}
              onClick={() => setMobileMenuOpen(false)}
            >
              FAQ
            </Link>
            <a
              href="https://wa.me/6282143258744"
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-secondary text-white px-5 py-2 rounded-lg font-medium hover:bg-opacity-90 transition-all text-center"
            >
              Pesan via WA
            </a>
          </div>
        )}
      </nav>
    </header>
  );
}
