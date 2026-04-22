"use client";

import { useState, FormEvent } from "react";
import { Phone } from "lucide-react";

interface BookingFormProps {
  routeName: string;
}

export default function BookingForm({ routeName }: BookingFormProps) {
  const [formData, setFormData] = useState({
    nama: "",
    nohp: "",
    asal: "",
    tujuan: "",
    tanggal: "",
    jumlah: "1",
    pembayaran: "QRIS",
    catatan: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // 1. Simpan ke Supabase via API route
      await fetch('/api/leads', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.nama,
          phone: formData.nohp,
          origin: formData.asal,
          destination: formData.tujuan,
          payment_method: formData.pembayaran,
          source: typeof window !== 'undefined' ? window.location.pathname : routeName,
          date: formData.tanggal,
          passengers: formData.jumlah,
          notes: formData.catatan,
        }),
      });
    } catch (error) {
      console.error("Error saving lead:", error);
      // Lanjutkan ke WA meskipun gagal simpan untuk mencegah user terblokir
    }

    // Format pesan WhatsApp
    const message = `Halo Juragan Travel 👋\nSaya ingin pesan travel:\n\nNama: ${formData.nama}\nRute: ${routeName}\nTanggal: ${formData.tanggal}\nJumlah: ${formData.jumlah} orang\nTitik Jemput: ${formData.asal}\nTitik Antar: ${formData.tujuan}\nMetode Pembayaran: ${formData.pembayaran}\nNo. HP: ${formData.nohp}${formData.catatan ? `\nCatatan: ${formData.catatan}` : ""}`;

    // Encode pesan untuk URL
    const encodedMessage = encodeURIComponent(message);
    
    // Nomor WhatsApp (ganti dengan nomor yang sesuai)
    const whatsappNumber = "6282143258744";
    
    setIsSubmitting(false);
    
    // Redirect ke WhatsApp
    window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, "_blank");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <form onSubmit={handleSubmit} className="bg-light p-8 rounded-lg shadow-xl">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Nama */}
        <div>
          <label htmlFor="nama" className="block text-sm font-semibold text-dark mb-2">
            Nama Lengkap <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="nama"
            name="nama"
            value={formData.nama}
            onChange={handleChange}
            required
            placeholder="Masukkan nama lengkap"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all text-dark font-medium placeholder:text-gray-400"
          />
        </div>

        {/* No. HP */}
        <div>
          <label htmlFor="nohp" className="block text-sm font-semibold text-dark mb-2">
            No. HP (WhatsApp) <span className="text-red-500">*</span>
          </label>
          <input
            type="tel"
            id="nohp"
            name="nohp"
            value={formData.nohp}
            onChange={handleChange}
            required
            placeholder="08123456789"
            pattern="[0-9]{10,13}"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all text-dark font-medium placeholder:text-gray-400"
          />
        </div>

        {/* Asal (Titik Jemput) */}
        <div>
          <label htmlFor="asal" className="block text-sm font-semibold text-dark mb-2">
            Titik Jemput (Asal) <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="asal"
            name="asal"
            value={formData.asal}
            onChange={handleChange}
            required
            placeholder="Contoh: Sobo, Banyuwangi"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all text-dark font-medium placeholder:text-gray-400"
          />
        </div>

        {/* Tujuan (Titik Antar) */}
        <div>
          <label htmlFor="tujuan" className="block text-sm font-semibold text-dark mb-2">
            Titik Antar (Tujuan) <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="tujuan"
            name="tujuan"
            value={formData.tujuan}
            onChange={handleChange}
            required
            placeholder="Contoh: Dinoyo, Surabaya"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all text-dark font-medium placeholder:text-gray-400"
          />
        </div>

        {/* Tanggal Keberangkatan */}
        <div>
          <label htmlFor="tanggal" className="block text-sm font-semibold text-dark mb-2">
            Tanggal Keberangkatan <span className="text-red-500">*</span>
          </label>
          <input
            type="date"
            id="tanggal"
            name="tanggal"
            value={formData.tanggal}
            onChange={handleChange}
            required
            min={new Date().toISOString().split("T")[0]}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all text-dark font-medium"
          />
        </div>

        {/* Jumlah Penumpang */}
        <div>
          <label htmlFor="jumlah" className="block text-sm font-semibold text-dark mb-2">
            Jumlah Penumpang <span className="text-red-500">*</span>
          </label>
          <select
            id="jumlah"
            name="jumlah"
            value={formData.jumlah}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all text-dark font-medium bg-white"
          >
            {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
              <option key={num} value={num} className="text-dark font-medium">
                {num} Orang
              </option>
            ))}
          </select>
        </div>

        {/* Metode Pembayaran */}
        <div className="md:col-span-2">
          <label htmlFor="pembayaran" className="block text-sm font-semibold text-dark mb-2">
            Metode Pembayaran <span className="text-red-500">*</span>
          </label>
          <select
            id="pembayaran"
            name="pembayaran"
            value={formData.pembayaran}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all text-dark font-medium bg-white"
          >
            <option value="QRIS" className="text-dark font-medium">QRIS (Scan & Pay)</option>
            <option value="Bank Transfer" className="text-dark font-medium">Bank Transfer</option>
            <option value="Cash" className="text-dark font-medium">Cash (Bayar di Mobil)</option>
          </select>
        </div>

        {/* Catatan Tambahan */}
        <div className="md:col-span-2">
          <label htmlFor="catatan" className="block text-sm font-semibold text-dark mb-2">
            Catatan Tambahan (Opsional)
          </label>
          <textarea
            id="catatan"
            name="catatan"
            value={formData.catatan}
            onChange={handleChange}
            rows={3}
            placeholder="Contoh: Ada bagasi besar, atau request khusus lainnya"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none text-dark font-medium placeholder:text-gray-400"
          ></textarea>
        </div>
      </div>

      {/* Submit Button */}
      <div className="mt-8 text-center">
        <button
          type="submit"
          disabled={isSubmitting}
          className="bg-accent text-white px-10 py-4 rounded-lg font-bold text-lg shadow-lg hover:bg-opacity-90 transition-all transform hover:-translate-y-1 inline-flex items-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none"
        >
          {isSubmitting ? (
            <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
          ) : (
            <Phone className="w-5 h-5" />
          )}
          {isSubmitting ? 'Memproses...' : 'Pesan via WhatsApp'}
        </button>
        <p className="mt-4 text-sm text-gray-600">
          Dengan menekan tombol di atas, Anda akan diarahkan ke WhatsApp untuk konfirmasi pesanan
        </p>
      </div>

      {/* Info Box */}
      <div className="mt-8 p-4 bg-blue-50 border border-blue-200 rounded-lg">
        <p className="text-sm text-blue-800">
          <strong>💡 Tips:</strong> Pastikan nomor HP Anda aktif di WhatsApp agar admin kami dapat menghubungi Anda
          untuk konfirmasi jadwal dan pembayaran.
        </p>
      </div>
    </form>
  );
}
