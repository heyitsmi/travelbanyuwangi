"use client";

import { FormEvent, useEffect, useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "sent" | "error">("idle");
  const [message, setMessage] = useState("");

  useEffect(() => {
    const promoCode = new URLSearchParams(window.location.search).get("promo");
    if (promoCode) setMessage(`Saya ingin mengklaim promo ${promoCode}.`);
  }, []);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("submitting");

    const form = event.currentTarget;
    const formData = new FormData(form);
    const response = await fetch("/api/leads", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: formData.get("name"),
        phone: formData.get("phone"),
        source: "/kontak",
        notes: `Email: ${formData.get("email")}\n\nPesan: ${message}`,
      }),
    }).catch(() => null);

    if (!response?.ok) {
      setStatus("error");
      return;
    }

    form.reset();
    setMessage("");
    setStatus("sent");
  };

  if (status === "sent") {
    return (
      <p role="status" className="rounded-lg border border-green-200 bg-green-50 p-5 text-center text-green-800">
        Terima kasih. Permintaan Anda sudah terkirim dan tim kami akan menindaklanjutinya.
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="mt-8 space-y-6">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">Nama Lengkap</label>
        <input id="name" name="name" autoComplete="name" required className="mt-1 w-full rounded-md border border-gray-300 px-4 py-2 text-gray-900 focus:border-primary focus:ring-primary" />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
        <input id="email" name="email" type="email" autoComplete="email" required className="mt-1 w-full rounded-md border border-gray-300 px-4 py-2 text-gray-900 focus:border-primary focus:ring-primary" />
      </div>
      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Nomor HP untuk dihubungi</label>
        <input id="phone" name="phone" type="tel" autoComplete="tel" required className="mt-1 w-full rounded-md border border-gray-300 px-4 py-2 text-gray-900 focus:border-primary focus:ring-primary" />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700">Pesan</label>
        <textarea id="message" name="message" rows={4} required value={message} onChange={(event) => setMessage(event.target.value)} className="mt-1 w-full rounded-md border border-gray-300 px-4 py-2 text-gray-900 focus:border-primary focus:ring-primary" />
      </div>
      {status === "error" && (
        <p role="alert" className="text-sm text-red-700">Pesan belum berhasil dikirim. Silakan coba lagi.</p>
      )}
      <button type="submit" disabled={status === "submitting"} className="w-full rounded-lg bg-primary px-4 py-3 text-lg font-bold text-white transition hover:bg-opacity-90 disabled:cursor-not-allowed disabled:opacity-70">
        {status === "submitting" ? "Mengirim..." : "Kirim Pesan"}
      </button>
    </form>
  );
}
