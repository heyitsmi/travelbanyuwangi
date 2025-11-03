"use client";

import Link from "next/link";
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
            travelbanyuwangi.id
          </Link>

          <div className="hidden md:flex md:items-center md:space-x-6">
            <Link href="/" className="text-gray-700 hover:text-primary transition-colors">
              Beranda
            </Link>
            <a href="/#rute" className="text-gray-700 hover:text-primary transition-colors">
              Rute
            </a>
            <Link
              href="/layanan"
              className={`${
                pathname === "/layanan" ? "text-primary font-semibold" : "text-gray-700"
              } hover:text-primary transition-colors`}
            >
              Layanan
            </Link>
            <a href="/#tentang" className="text-gray-700 hover:text-primary transition-colors">
              Tentang Kami
            </a>
            <a href="/#faq" className="text-gray-700 hover:text-primary transition-colors">
              FAQ
            </a>
          </div>

          <a
            href="https://wa.me/628123456789"
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
            <a
              href="/#rute"
              className="block text-gray-700 hover:text-primary transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Rute
            </a>
            <Link
              href="/layanan"
              className={`block ${
                pathname === "/layanan" ? "text-primary font-semibold" : "text-gray-700"
              } hover:text-primary transition-colors`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Layanan
            </Link>
            <a
              href="/#tentang"
              className="block text-gray-700 hover:text-primary transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Tentang Kami
            </a>
            <a
              href="/#faq"
              className="block text-gray-700 hover:text-primary transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              FAQ
            </a>
            <a
              href="https://wa.me/628123456789"
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
