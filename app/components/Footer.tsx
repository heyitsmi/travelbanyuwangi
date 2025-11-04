'use client';

import { Facebook, Instagram, Music2, MapPin, Phone } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-dark text-gray-300 py-16">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Kolom 1: About & Social */}
          <div>
            <img src="/img/logo-footer.webp" alt="travelbanyuwangi.id" className="h-12 w-auto mb-4" />
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
            </div>
          </div>

          {/* Kolom 2: Navigasi Cepat */}
          <div>
            <h4 className="text-lg font-semibold text-white">Navigasi Cepat</h4>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href="/cara-pembayaran" className="hover:text-white transition-colors">
                  Cara Pembayaran
                </Link>
              </li>
              <li>
                <Link href="/pemesanan" className="hover:text-white transition-colors">
                  Form Pemesanan
                </Link>
              </li>
              <li>
                <Link href="/cara-pemesanan" className="hover:text-white transition-colors">
                  Cara Pemesanan
                </Link>
              </li>
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
                <Link href="/kontak" className="hover:text-white transition-colors">
                  Kontak
                </Link>
              </li>
              <li>
                <Link href="/promo" className="hover:text-white transition-colors">
                  Promo
                </Link>
              </li>
            </ul>
          </div>

          {/* Kolom 3: Layanan Utama */}
          <div>
            <h4 className="text-lg font-semibold text-white">Layanan Utama</h4>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href="/layanan/travel-antar-kota" className="hover:text-white transition-colors">
                  Travel Antar Kota
                </Link>
              </li>
              <li>
                <Link href="/rute/banyuwangi-surabaya" className="hover:text-white transition-colors">
                  Travel Banyuwangi - Tanjung Perak
                </Link>
              </li>
              <li>
                <Link href="/rute/banyuwangi-surabaya" className="hover:text-white transition-colors">
                  Travel Banyuwangi - Surabaya
                </Link>
              </li>
              <li>
                <Link href="/rute/banyuwangi-denpasar" className="hover:text-white transition-colors">
                  Travel Banyuwangi - Denpasar
                </Link>
              </li>
              <li>
                <Link href="/rute/banyuwangi-malang" className="hover:text-white transition-colors">
                  Travel Banyuwangi - Malang
                </Link>
              </li>
              <li>
                <Link href="/rute/banyuwangi-juanda" className="hover:text-white transition-colors">
                  Travel Banyuwangi - Juanda
                </Link>
              </li>
              <li>
                <Link href="/layanan/paket-express" className="hover:text-white transition-colors">
                  Jasa Kirim Paket Express
                </Link>
              </li>
            </ul>
          </div>

          {/* Kolom 4: Hubungi Kami */}
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
            
            {/* Metode Pembayaran */}
            <div className="mt-6">
              <h5 className="text-sm font-semibold text-white mb-3">Metode Pembayaran</h5>
              <div className="flex flex-wrap gap-2">
                {/* BCA */}
                <div className="bg-white rounded px-3 py-1.5 flex items-center justify-center h-10 min-w-[56px]">
                  <Image 
                    src="/img/payment/bca.webp" 
                    alt="BCA" 
                    width={50} 
                    height={28}
                    className="object-contain"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      const parent = target.parentElement;
                      if (parent) {
                        parent.innerHTML = '<span class="text-blue-600 font-bold text-xs">BCA</span>';
                      }
                    }}
                  />
                </div>
                {/* Mandiri */}
                <div className="bg-white rounded px-3 py-1.5 flex items-center justify-center h-10 min-w-[64px]">
                  <Image 
                    src="/img/payment/mandiri.webp" 
                    alt="Mandiri" 
                    width={60} 
                    height={28}
                    className="object-contain"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      const parent = target.parentElement;
                      if (parent) {
                        parent.innerHTML = '<span class="text-yellow-600 font-bold text-xs">Mandiri</span>';
                      }
                    }}
                  />
                </div>
                {/* QRIS */}
                <div className="bg-white rounded px-3 py-1.5 flex items-center justify-center h-10 min-w-[56px]">
                  <Image 
                    src="/img/payment/qris.webp" 
                    alt="QRIS" 
                    width={50} 
                    height={28}
                    className="object-contain"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      const parent = target.parentElement;
                      if (parent) {
                        parent.innerHTML = '<span class="text-red-600 font-bold text-xs">QRIS</span>';
                      }
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright & Footer Bottom */}
        <div className="mt-12 pt-8 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-start gap-6">
            {/* Kolom Kiri: Copyright & Developer */}
            <div className="space-y-2">
              <p className="text-sm text-gray-400">
                © 2025 travelbanyuwangi.id — Dikelola oleh CV Rizky Cella, penyedia layanan travel resmi dari
                Banyuwangi.
              </p>
              <p className="text-sm text-gray-500">
                Website dikembangkan oleh{" "}
                <a
                  href="https://josjis.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent hover:text-opacity-80 transition-colors font-medium"
                >
                  Josjis Studio
                </a>
                .
              </p>
            </div>

            {/* Kolom Kanan: Policy Links */}
            <div className="flex flex-wrap gap-4 text-sm">
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
