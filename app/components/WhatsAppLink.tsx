"use client";

import { ReactNode, useState, FormEvent, useEffect } from "react";
import { X, MessageCircle } from "lucide-react";

interface WhatsAppLinkProps {
  children: ReactNode;
  className?: string;
  message?: string;
  title?: string;
}

export default function WhatsAppLink({
  children,
  className = "",
  message = "",
  title = "",
}: WhatsAppLinkProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    origin: "",
    date: "",
    passengers: "1",
    notes: "",
  });

  // Hydrate textarea specifically if the prop message exists
  useEffect(() => {
    if (message && isOpen) {
      setFormData(prev => ({ ...prev, notes: prev.notes || message }));
    }
  }, [message, isOpen]);

  // Lock body scroll when modal is open to prevent double scrollbars
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    
    // Cleanup on unmount
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsOpen(true);
  };

  const handleClose = () => setIsOpen(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const phoneNumber = "6282143258744";
    
    // Construct predefine chat message
    let finalMessage = `Halo Juragan Travel,\n\nNama: ${formData.name}\nNo WhatsApp: ${formData.phone}\nAsal/Tujuan: ${formData.origin || '-'}\nTgl Berangkat: ${formData.date || '-'}\nJumlah Pax: ${formData.passengers} Orang\n\nPesan:\n${formData.notes}`;
    
    const encodedMessage = encodeURIComponent(finalMessage);
    const url = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    
    setIsOpen(false);
    
    // Reset form after submit
    setFormData({ name: "", phone: "", origin: "", date: "", passengers: "1", notes: "" });
    
    window.open(url, "_blank");
  };

  return (
    <>
      <button
        type="button"
        onClick={handleClick}
        className={`cursor-pointer ${className}`}
        title={title}
        aria-label={title || "Hubungi via WhatsApp"}
      >
        {children}
      </button>

      {/* Modal Overlay */}
      {isOpen && (
         <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-gray-900/60 backdrop-blur-sm transition-opacity overflow-y-auto">
          <div 
            className="w-full max-w-md bg-white rounded-2xl shadow-2xl overflow-hidden relative my-8"
            style={{ animation: 'fade-in-up 0.3s ease-out forwards' }}
          >
            {/* Header Modal */}
            <div className="p-5 border-b border-gray-100 flex justify-between items-center bg-gray-50/80 sticky top-0 z-10">
              <div className="flex items-center gap-3">
                <div className="bg-green-100 p-2 rounded-full text-green-600">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 leading-tight">Hubungi Kami</h3>
                  <p className="text-xs text-gray-500">Isi data agar kami bisa membalas lebih cepat</p>
                </div>
              </div>
              <button 
                onClick={handleClose} 
                className="p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-full transition-colors focus:outline-none"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Form Content */}
            <form onSubmit={handleSubmit} className="p-6 space-y-4 text-left">
              <div>
                <label htmlFor="wa-name" className="block text-sm font-bold text-gray-700 mb-1.5">
                  Nama Lengkap <span className="text-red-500">*</span>
                </label>
                <input 
                  type="text" 
                  id="wa-name" 
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full px-4 py-2.5 text-gray-900 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500/20 focus:border-green-500 outline-none transition-all"
                  placeholder="Contoh: Budi Santoso"
                  autoFocus
                />
              </div>

              <div>
                <label htmlFor="wa-phone" className="block text-sm font-bold text-gray-700 mb-1.5">
                  Nomor HP / WhatsApp <span className="text-red-500">*</span>
                </label>
                <input 
                  type="tel" 
                  id="wa-phone" 
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  className="w-full px-4 py-2.5 text-gray-900 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500/20 focus:border-green-500 outline-none transition-all"
                  placeholder="Contoh: 08123456789"
                />
              </div>

              <div>
                <label htmlFor="wa-origin" className="block text-sm font-bold text-gray-700 mb-1.5">
                  Asal / Tujuan (Opsional)
                </label>
                <input 
                  type="text" 
                  id="wa-origin" 
                  value={formData.origin}
                  onChange={(e) => setFormData({...formData, origin: e.target.value})}
                  className="w-full px-4 py-2.5 text-gray-900 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500/20 focus:border-green-500 outline-none transition-all"
                  placeholder="Contoh: Surabaya ke Banyuwangi"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col">
                  <label htmlFor="wa-date" className="block text-sm font-bold text-gray-700 mb-1.5">
                    Tgl Berangkat <span className="text-gray-400 font-normal text-xs">(Opsional)</span>
                  </label>
                  <input 
                    type="date" 
                    id="wa-date" 
                    value={formData.date}
                    onChange={(e) => setFormData({...formData, date: e.target.value})}
                    className="w-full mt-auto px-4 py-2.5 text-gray-900 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500/20 focus:border-green-500 outline-none transition-all"
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="wa-pax" className="block text-sm font-bold text-gray-700 mb-1.5">
                    Penumpang
                  </label>
                  <input 
                    type="number" 
                    id="wa-pax" 
                    min="1"
                    max="20"
                    value={formData.passengers}
                    onChange={(e) => setFormData({...formData, passengers: e.target.value})}
                    className="w-full mt-auto px-4 py-2.5 text-gray-900 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500/20 focus:border-green-500 outline-none transition-all"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="wa-notes" className="block text-sm font-bold text-gray-700 mb-1.5">
                  Catatan / Pertanyaan <span className="text-red-500">*</span>
                </label>
                <textarea 
                  id="wa-notes" 
                  rows={2}
                  required
                  value={formData.notes}
                  onChange={(e) => setFormData({...formData, notes: e.target.value})}
                  className="w-full px-4 py-2.5 text-gray-900 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500/20 focus:border-green-500 outline-none transition-all resize-none"
                  placeholder="Halo, saya mau nanya..."
                ></textarea>
              </div>

              <div className="pt-2">
                <button 
                  type="submit" 
                  className="w-full py-3 bg-[#25D366] text-white font-bold rounded-xl hover:bg-[#1ebd5b] focus:ring-4 focus:ring-[#25D366]/30 transition-all flex items-center justify-center gap-2 shadow-lg shadow-green-500/20"
                >
                  <MessageCircle className="w-5 h-5 fill-current" />
                  Kirim ke WhatsApp
                </button>
              </div>
            </form>
          </div>
          
          <style dangerouslySetInnerHTML={{__html: `
            @keyframes fade-in-up {
              0% { opacity: 0; transform: translateY(10px) scale(0.95); }
              100% { opacity: 1; transform: translateY(0) scale(1); }
            }
          `}} />
        </div>
      )}
    </>
  );
}
