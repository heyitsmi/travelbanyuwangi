"use client";

import { useState } from "react";
import { CITIES, getPrice, formatPrice } from "@/lib/priceConfig";
import { ChevronDown, Check } from "lucide-react";
import WhatsAppLink from "./WhatsAppLink";

export default function CekHargaForm() {
  const [asal, setAsal] = useState<string>("");
  const [tujuan, setTujuan] = useState<string>("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<{
    type: "success" | "error" | null;
    message: string;
    price?: number;
    route?: string;
  }>({ type: null, message: "" });

  const handleCekHarga = () => {
    // Reset result
    setResult({ type: null, message: "" });
    setLoading(true);

    // Simulate loading for better UX
    setTimeout(() => {
      setLoading(false);

      // Validasi
      if (!asal || !tujuan) {
        setResult({
          type: "error",
          message: "Silakan pilih kota asal dan tujuan Anda.",
        });
        return;
      }

      if (asal === tujuan) {
        setResult({
          type: "error",
          message: "Kota asal dan tujuan tidak boleh sama.",
        });
        return;
      }

      // Cari harga dari config
      const price = getPrice(asal, tujuan);

      if (price) {
        setResult({
          type: "success",
          message: "Estimasi harga ditemukan!",
          price: price,
          route: `${asal} → ${tujuan}`,
        });
      } else {
        setResult({
          type: "error",
          message: `Maaf, estimasi biaya untuk rute ${asal} ke ${tujuan} tidak ditemukan. Silakan hubungi admin kami untuk informasi lebih lanjut atau layanan carter.`,
        });
      }
    }, 500);
  };



  return (
    <div className="container mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
      {/* Filter Box */}
      <div className="bg-light p-8 md:p-12 rounded-lg shadow-lg border border-gray-100">
        <h2 className="text-2xl md:text-3xl font-bold text-dark text-center mb-8">
          Pilih Rute Perjalanan Anda
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {/* Select Asal */}
          <div className="relative">
            <label
              htmlFor="asal"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Asal Keberangkatan
            </label>
            <select
              id="asal"
              name="asal"
              value={asal}
              onChange={(e) => setAsal(e.target.value)}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary shadow-sm text-lg appearance-none pr-10 text-gray-900"
            >
              <option value="">Pilih Kota Asal</option>
              {CITIES.map((city) => (
                <option key={`asal-${city}`} value={city}>
                  {city}
                </option>
              ))}
            </select>
            <ChevronDown className="w-5 h-5 text-gray-400 absolute right-4 top-1/2 transform -translate-y-1/2 mt-3 pointer-events-none" />
          </div>

          {/* Select Tujuan */}
          <div className="relative">
            <label
              htmlFor="tujuan"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Tujuan Perjalanan
            </label>
            <select
              id="tujuan"
              name="tujuan"
              value={tujuan}
              onChange={(e) => setTujuan(e.target.value)}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary shadow-sm text-lg appearance-none pr-10 text-gray-900"
            >
              <option value="">Pilih Kota Tujuan</option>
              {CITIES.map((city) => (
                <option key={`tujuan-${city}`} value={city}>
                  {city}
                </option>
              ))}
            </select>
            <ChevronDown className="w-5 h-5 text-gray-400 absolute right-4 top-1/2 transform -translate-y-1/2 mt-3 pointer-events-none" />
          </div>
        </div>

        {/* Tombol Cek */}
        <button
          onClick={handleCekHarga}
          disabled={loading}
          className="w-full bg-primary text-white px-8 py-3 rounded-lg font-bold text-lg hover:bg-opacity-90 transition-all shadow-md flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <Check className="w-5 h-5 mr-2" />
          {loading ? "Mencari harga..." : "Cek Estimasi Harga"}
        </button>
      </div>

      {/* Loading State */}
      {loading && (
        <div className="text-center mt-8">
          <p className="text-lg text-primary animate-pulse">Mencari harga...</p>
        </div>
      )}

      {/* Error Result */}
      {!loading && result.type === "error" && (
        <div className="text-center mt-8 p-6 bg-red-50 border border-red-200 rounded-lg">
          <h3 className="text-xl font-bold text-red-700">
            Oops! Terjadi Kesalahan
          </h3>
          <p className="text-red-600 mt-2">{result.message}</p>
          <WhatsAppLink
            message="Halo Admin, saya mau tanya layanan travel."
            title="Hubungi admin Juragan Travel via WhatsApp"
            className="mt-4 inline-block bg-accent text-white px-6 py-2 rounded-lg font-semibold hover:bg-opacity-90 transition-all"
          >
            Hubungi Admin
          </WhatsAppLink>
        </div>
      )}

      {/* Success Result */}
      {!loading && result.type === "success" && result.price && (
        <div className="text-center mt-8 p-6 md:p-8 bg-green-50 border border-green-200 rounded-lg shadow-lg">
          <h3 className="text-2xl font-bold text-dark">
            Estimasi Harga Ditemukan!
          </h3>
          <p className="text-lg text-gray-700 mt-2">
            Rute:{" "}
            <span className="font-semibold text-primary">{result.route}</span>
          </p>
          <p className="text-3xl font-extrabold text-secondary mt-4">
            {formatPrice(result.price)}
          </p>
          <p className="text-sm text-gray-500 mt-2">
            Harga adalah estimasi per orang untuk layanan reguler door-to-door.
          </p>
          <p className="text-sm text-gray-500">
            Harga dapat berubah sewaktu-waktu tanpa pemberitahuan.
          </p>

          <WhatsAppLink
            message={`Halo Admin, saya mau pesan travel rute ${asal} ke ${tujuan} dengan harga estimasi ${
              result.price ? formatPrice(result.price) : ""
            }`}
            title="Pesan travel sekarang via WhatsApp"
            className="mt-6 inline-block bg-accent text-white px-8 py-3 rounded-lg font-bold text-lg hover:bg-opacity-90 transition-all shadow-md"
          >
            Pesan Sekarang via WhatsApp
          </WhatsAppLink>
        </div>
      )}
    </div>
  );
}
