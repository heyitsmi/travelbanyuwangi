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
                <Link href="/" className="hover:text-white transition-colors">
                  Beranda
                </Link>
              </li>
              <li>
                <a href="/#rute" className="hover:text-white transition-colors">
                  Rute Populer
                </a>
              </li>
              <li>
                <Link href="/layanan" className="hover:text-white transition-colors">
                  Layanan Kami
                </Link>
              </li>
              <li>
                <a href="/#tentang" className="hover:text-white transition-colors">
                  Tentang Kami
                </a>
              </li>
              <li>
                <a href="/#testimoni" className="hover:text-white transition-colors">
                  Testimoni
                </a>
              </li>
              <li>
                <a href="/#faq" className="hover:text-white transition-colors">
                  FAQ
                </a>
              </li>
              <li>
                <a href="/#kontak" className="hover:text-white transition-colors">
                  Kontak
                </a>
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
                  Tiket Pesawat & Bus
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
                  Umroh & Haji Khusus
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
                <span>0812-3456-7890</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-700 text-center">
          <p className="text-sm text-gray-400">
            © 2025 travelbanyuwangi.id — Travel Aman & Terpercaya dari Banyuwangi.
          </p>
          <p className="text-xs text-gray-500 mt-2">Website by Josjis Studio</p>
        </div>
      </div>
    </footer>
  );
}
