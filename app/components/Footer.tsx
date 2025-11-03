import { Facebook, Instagram, Music2, MapPin, Phone } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-dark text-gray-300 py-16">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">travelbanyuwangi.id</h3>
            <p className="text-gray-400">
              Travel Aman & Terpercaya dari Banyuwangi untuk seluruh kebutuhan perjalanan Anda.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="text-gray-400 hover:text-white">
                <span className="sr-only">Facebook</span>
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <span className="sr-only">Instagram</span>
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <span className="sr-only">TikTok</span>
                <Music2 className="w-6 h-6" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white">Navigasi Cepat</h4>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href="/tentang-kami" className="hover:text-white transition-colors">
                  Tentang Kami
                </Link>
              </li>
              <li>
                <Link href="/testimoni" className="hover:text-white transition-colors">
                  Testimoni
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-white transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/kontak" className="hover:text-white transition-colors">
                  Kontak
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white">Layanan Utama</h4>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href="/layanan" className="hover:text-white transition-colors">
                  Travel Antar Kota
                </Link>
              </li>
              <li>
                <Link href="/layanan" className="hover:text-white transition-colors">
                  Pengurusan Visa & Paspor
                </Link>
              </li>
              <li>
                <Link href="/layanan" className="hover:text-white transition-colors">
                  Wisata Wali 5 & Wali 9
                </Link>
              </li>
              <li>
                <Link href="/layanan" className="hover:text-white transition-colors">
                  Paket Express
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white">Hubungi Kami</h4>
            <ul className="mt-4 space-y-3">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 mr-3 mt-1 shrink-0 text-accent" />
                <span>Jl. Raya Jember No. 1, Banyuwangi, Jawa Timur 68416</span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 mr-3 shrink-0 text-accent" />
                <span>0821-4325-8744</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-gray-400 text-center md:text-left">
              © 2025 travelbanyuwangi.id — Dikelola oleh CV Rizky Cella, terdaftar sejak 2016. Travel resmi & terpercaya dari Banyuwangi.
            </p>
            <div className="flex flex-wrap justify-center md:justify-end gap-4 text-sm">
              <Link href="/syarat-ketentuan" className="text-gray-400 hover:text-white transition-colors">
                Syarat & Ketentuan
              </Link>
              <span className="text-gray-600">|</span>
              <Link href="/kebijakan-privasi" className="text-gray-400 hover:text-white transition-colors">
                Kebijakan Privasi
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
