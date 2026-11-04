"use client";

import { useState, FormEvent } from "react";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Clock, Shield, CreditCard } from "lucide-react";

export default function PemesananPage() {
  const [formData, setFormData] = useState({
    layanan: "",
    nama: "",
    whatsapp: "",
    tanggal: "",
    penumpang: "1",
    alamatJemput: "",
    alamatTujuan: "",
    catatan: "",
  });

  const [visibleFields, setVisibleFields] = useState({
    tanggal: false,
    penumpang: false,
    alamatJemput: false,
    alamatTujuan: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "sent" | "error">("idle");

  const handleLayananChange = (value: string) => {
    setFormData((prev) => ({ ...prev, layanan: value }));

    // Reset semua field visibility
    let newVisibility = {
      tanggal: false,
      penumpang: false,
      alamatJemput: false,
      alamatTujuan: false,
    };

    // Tentukan field mana yang perlu ditampilkan
    if (value === "Travel Antar Kota" || value === "Perjalanan Dinas") {
      newVisibility = {
        tanggal: true,
        penumpang: true,
        alamatJemput: true,
        alamatTujuan: true,
      };
    } else if (value === "Wisata Wali 5 & 9" || value === "Umroh & Haji") {
      newVisibility = {
        tanggal: true,
        penumpang: true,
        alamatJemput: true,
        alamatTujuan: false,
      };
    } else if (value === "Paket Express") {
      newVisibility = {
        tanggal: true,
        penumpang: false,
        alamatJemput: true,
        alamatTujuan: true,
      };
    } else if (value === "Tiket Pesawat" || value === "Tiket Bus" || value === "Tiket Kapal") {
      newVisibility = {
        tanggal: true,
        penumpang: true,
        alamatJemput: false,
        alamatTujuan: true,
      };
    }

    setVisibleFields(newVisibility);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const response = await fetch("/api/leads", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: formData.nama,
        phone: formData.whatsapp,
        origin: visibleFields.alamatJemput ? formData.alamatJemput : "",
        destination: visibleFields.alamatTujuan ? formData.alamatTujuan : "",
        source: typeof window !== "undefined" ? window.location.pathname : "/pemesanan",
        date: visibleFields.tanggal ? formData.tanggal : "",
        passengers: visibleFields.penumpang ? formData.penumpang : "1",
        notes: `Layanan: ${formData.layanan}${formData.catatan ? `\nCatatan: ${formData.catatan}` : ""}`,
      }),
    }).catch(() => null);

    setIsSubmitting(false);
    setSubmitStatus(response?.ok ? "sent" : "error");
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Tanggal minimum adalah hari ini
  const today = new Date().toISOString().split("T")[0];

  return (
    <div className="bg-white antialiased">
      <Header />

      <main>
        {/* Hero Section */}
        <section className="bg-light py-20">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <nav className="text-sm mb-4">
              <Link href="/" className="text-gray-600 hover:text-primary">
                Beranda
              </Link>
              <span className="text-gray-400 mx-2">/</span>
              <Link href="/kontak" className="text-gray-600 hover:text-primary">
                Kontak
              </Link>
              <span className="text-gray-400 mx-2">/</span>
              <span className="text-dark font-medium">Form Pemesanan</span>
            </nav>
            <h1 className="text-4xl md:text-5xl font-extrabold text-dark">Form Pemesanan Online</h1>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
              Isi formulir di bawah ini untuk memesan layanan kami. Tim kami akan segera menghubungi Anda untuk
              konfirmasi.
            </p>
          </div>
        </section>

        {/* Form Section */}
        <section id="form-section" className="py-20 bg-white">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {/* Kolom Formulir */}
              <div className="md:col-span-2">
                <h2 className="text-3xl font-bold text-dark mb-6">Silakan Isi Detail Pemesanan</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Pilihan Layanan */}
                    <div className="sm:col-span-2">
                      <label htmlFor="layanan" className="block text-sm font-medium text-gray-700">
                        Pilih Layanan <span className="text-red-500">*</span>
                      </label>
                      <select
                        id="layanan"
                        name="layanan"
                        value={formData.layanan}
                        onChange={(e) => handleLayananChange(e.target.value)}
                        required
                        className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-primary focus:border-primary text-lg text-dark font-medium bg-white"
                      >
                        <option value="" disabled className="text-dark font-medium">
                          -- Pilih jenis layanan --
                        </option>
                        <option value="Travel Antar Kota" className="text-dark font-medium">
                          Travel Antar Kota (Banyuwangi-Surabaya, Malang, dll)
                        </option>
                        <option value="Wisata Wali 5 & 9" className="text-dark font-medium">
                          Wisata Wali 5 / Wali 9 (Rombongan)
                        </option>
                        <option value="Umroh & Haji" className="text-dark font-medium">
                          Umroh & Haji Khusus
                        </option>
                        <option value="Perjalanan Dinas" className="text-dark font-medium">
                          Perjalanan Dinas / Charter Mobil
                        </option>
                        <option value="Paket Express" className="text-dark font-medium">
                          Pengiriman Paket Express
                        </option>
                        <option value="Tiket Pesawat" className="text-dark font-medium">
                          Pemesanan Tiket Pesawat
                        </option>
                        <option value="Tiket Bus" className="text-dark font-medium">
                          Pemesanan Tiket Bus Executive
                        </option>
                        <option value="Tiket Kapal" className="text-dark font-medium">
                          Pemesanan Tiket Kapal (Banyuwangi-Bali)
                        </option>
                        <option value="Visa & Paspor" className="text-dark font-medium">
                          Pengurusan Visa & Paspor
                        </option>
                        <option value="Lainnya" className="text-dark font-medium">
                          Lainnya
                        </option>
                      </select>
                    </div>

                    {/* Nama Lengkap */}
                    <div>
                      <label htmlFor="nama" className="block text-sm font-medium text-gray-700">
                        Nama Lengkap <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="nama"
                        id="nama"
                        value={formData.nama}
                        onChange={handleChange}
                        required
                        className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-primary focus:border-primary text-lg text-dark font-medium placeholder:text-gray-400"
                        placeholder="contoh: Budi Santoso"
                      />
                    </div>

                    {/* Nomor yang dapat dihubungi */}
                    <div>
                      <label htmlFor="whatsapp" className="block text-sm font-medium text-gray-700">
                        Nomor HP yang bisa dihubungi <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        name="whatsapp"
                        id="whatsapp"
                        value={formData.whatsapp}
                        onChange={handleChange}
                        required
                        pattern="[0-9]{10,13}"
                        className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-primary focus:border-primary text-lg text-dark font-medium placeholder:text-gray-400"
                        placeholder="contoh: 081234567890"
                      />
                    </div>

                    {/* Tanggal Keberangkatan */}
                    {visibleFields.tanggal && (
                      <div>
                        <label htmlFor="tanggal" className="block text-sm font-medium text-gray-700">
                          Tanggal Keberangkatan <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="date"
                          name="tanggal"
                          id="tanggal"
                          value={formData.tanggal}
                          onChange={handleChange}
                          required
                          min={today}
                          className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-primary focus:border-primary text-lg text-dark font-medium"
                        />
                      </div>
                    )}

                    {/* Jumlah Penumpang */}
                    {visibleFields.penumpang && (
                      <div>
                        <label htmlFor="penumpang" className="block text-sm font-medium text-gray-700">
                          Jumlah Penumpang <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="number"
                          name="penumpang"
                          id="penumpang"
                          value={formData.penumpang}
                          onChange={handleChange}
                          required
                          min="1"
                          className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-primary focus:border-primary text-lg text-dark font-medium placeholder:text-gray-400"
                          placeholder="1"
                        />
                      </div>
                    )}

                    {/* Alamat Jemput */}
                    {visibleFields.alamatJemput && (
                      <div className="sm:col-span-2">
                        <label htmlFor="alamatJemput" className="block text-sm font-medium text-gray-700">
                          Alamat Jemput Lengkap <span className="text-red-500">*</span>
                        </label>
                        <textarea
                          id="alamatJemput"
                          name="alamatJemput"
                          value={formData.alamatJemput}
                          onChange={handleChange}
                          required
                          rows={3}
                          className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-primary focus:border-primary text-lg text-dark font-medium placeholder:text-gray-400"
                          placeholder="Tuliskan nama jalan, nomor rumah, kelurahan, kecamatan, dan kota penjemputan."
                        ></textarea>
                      </div>
                    )}

                    {/* Alamat Tujuan */}
                    {visibleFields.alamatTujuan && (
                      <div className="sm:col-span-2">
                        <label htmlFor="alamatTujuan" className="block text-sm font-medium text-gray-700">
                          Alamat Tujuan Lengkap <span className="text-red-500">*</span>
                        </label>
                        <textarea
                          id="alamatTujuan"
                          name="alamatTujuan"
                          value={formData.alamatTujuan}
                          onChange={handleChange}
                          required
                          rows={3}
                          className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-primary focus:border-primary text-lg text-dark font-medium placeholder:text-gray-400"
                          placeholder="Tuliskan nama jalan, nomor rumah, kelurahan, kecamatan, dan kota tujuan."
                        ></textarea>
                      </div>
                    )}

                    {/* Catatan Tambahan */}
                    <div className="sm:col-span-2">
                      <label htmlFor="catatan" className="block text-sm font-medium text-gray-700">
                        Catatan Tambahan (Opsional)
                      </label>
                      <textarea
                        id="catatan"
                        name="catatan"
                        value={formData.catatan}
                        onChange={handleChange}
                        rows={3}
                        className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-primary focus:border-primary text-lg text-dark font-medium placeholder:text-gray-400"
                        placeholder="Contoh: Bawa 2 koper besar, jemput di lobi hotel, dll."
                      ></textarea>
                    </div>
                  </div>

                  {/* Tombol Submit */}
                  <div>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full flex justify-center py-3 px-6 border border-transparent rounded-lg shadow-sm text-lg font-bold text-white bg-primary hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-all"
                    >
                      {isSubmitting ? "Mengirim..." : "Kirim Permintaan Booking"}
                    </button>
                    <p className="mt-4 text-sm text-gray-500 text-center">
                      {submitStatus === "sent"
                        ? "Permintaan terkirim. Tim kami akan segera menghubungi Anda untuk konfirmasi."
                        : "Tim kami akan segera menghubungi Anda untuk konfirmasi pesanan."}
                    </p>
                    {submitStatus === "error" && (
                      <p role="alert" className="mt-2 text-sm text-red-600 text-center">Permintaan belum berhasil dikirim. Silakan coba lagi.</p>
                    )}
                  </div>
                </form>
              </div>

              {/* Kolom Info (Sidebar) */}
              <div className="md:col-span-1">
                <div className="bg-light p-8 rounded-lg shadow-md sticky top-24">
                  <h3 className="text-2xl font-bold text-dark">Butuh bantuan?</h3>
                  <p className="mt-3 text-lg text-gray-700">
                    Kirim pertanyaan melalui formulir kontak dan tim kami akan membantu Anda.
                  </p>
                  <a
                    href="/kontak#contact-form"
                    className="mt-6 inline-block w-full text-center bg-secondary text-white px-6 py-3 rounded-lg font-bold text-lg shadow-lg hover:bg-opacity-90 transition-all"
                  >
                    Hubungi kami
                  </a>

                  <ul className="mt-8 space-y-4">
                    <li className="flex items-start">
                      <Clock className="w-6 h-6 text-primary shrink-0 mr-3 mt-1" />
                      <div>
                        <h4 className="font-semibold text-dark">Layanan 24 Jam</h4>
                        <p className="text-gray-600">Admin kami siap membantu Anda kapanpun.</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <Shield className="w-6 h-6 text-primary shrink-0 mr-3 mt-1" />
                      <div>
                        <h4 className="font-semibold text-dark">Data Anda Aman</h4>
                        <p className="text-gray-600">Kami menjamin kerahasiaan data pribadi Anda.</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <CreditCard className="w-6 h-6 text-primary shrink-0 mr-3 mt-1" />
                      <div>
                        <h4 className="font-semibold text-dark">Pembayaran Fleksibel</h4>
                        <p className="text-gray-600">
                          Bisa bayar via Transfer, QRIS, atau bayar tunai di sopir.
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
