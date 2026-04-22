"use client";

import { useState } from "react";

export default function EditBookingModal({ booking, onClose, onSuccess }: { booking: any, onClose: () => void, onSuccess: () => void }) {
  const [formData, setFormData] = useState({
    name: booking.name || "",
    phone: booking.phone || "",
    origin: booking.origin || "",
    destination: booking.destination || "",
    departure_date: booking.departure_date ? booking.departure_date.split('T')[0] : "",
    passengers: booking.passengers || 1,
    payment_method: booking.payment_method || "",
    notes: booking.notes || "",
    status: booking.status || "pending",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch(`/api/leads/${booking.id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        onSuccess();
        onClose();
      } else {
        console.error('Failed to update booking');
        alert('Gagal menyimpan perubahan.');
      }
    } catch (error) {
      console.error('Error updating booking:', error);
      alert('Terjadi kesalahan.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-brand-900/60 backdrop-blur-sm">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto overflow-x-hidden relative flex flex-col">
        <div className="sticky top-0 bg-white/90 backdrop-blur-sm z-10 px-6 py-4 border-b border-gray-100 flex items-center justify-between">
          <h3 className="text-xl font-bold text-gray-900">Edit Booking Data</h3>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600 focus:outline-none bg-gray-100 hover:bg-gray-200 p-2 rounded-full transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
          </button>
        </div>
        
        <form onSubmit={handleSubmit} className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-1.5">Customer Name</label>
              <input type="text" name="name" value={formData.name} onChange={handleChange} required className="w-full bg-gray-50 text-sm font-medium text-gray-900 border border-gray-200 rounded-xl px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-brand-500/30 focus:border-brand-400 transition-all" />
            </div>
            <div>
              <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-1.5">Phone Number</label>
              <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required className="w-full bg-gray-50 text-sm font-medium text-gray-900 border border-gray-200 rounded-xl px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-brand-500/30 focus:border-brand-400 transition-all" />
            </div>
            
            <div>
              <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-1.5">Origin / Pick-up</label>
              <input type="text" name="origin" value={formData.origin} onChange={handleChange} required className="w-full bg-gray-50 text-sm font-medium text-gray-900 border border-gray-200 rounded-xl px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-brand-500/30 focus:border-brand-400 transition-all" />
            </div>
            <div>
              <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-1.5">Destination / Drop-off</label>
              <input type="text" name="destination" value={formData.destination} onChange={handleChange} required className="w-full bg-gray-50 text-sm font-medium text-gray-900 border border-gray-200 rounded-xl px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-brand-500/30 focus:border-brand-400 transition-all" />
            </div>

            <div>
              <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-1.5">Departure Date</label>
              <input type="date" name="departure_date" value={formData.departure_date} onChange={handleChange} required className="w-full bg-gray-50 text-sm font-medium text-gray-900 border border-gray-200 rounded-xl px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-brand-500/30 focus:border-brand-400 transition-all cursor-text" />
            </div>
            <div className="flex gap-4">
              <div className="flex-1">
                <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-1.5">Pax</label>
                <input type="number" min="1" name="passengers" value={formData.passengers} onChange={handleChange} required className="w-full bg-gray-50 text-sm font-medium text-gray-900 border border-gray-200 rounded-xl px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-brand-500/30 focus:border-brand-400 transition-all" />
              </div>
              <div className="flex-[2]">
                <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-1.5">Payment Method</label>
                <select name="payment_method" value={formData.payment_method} onChange={handleChange} className="w-full bg-gray-50 text-sm font-medium text-gray-900 border border-gray-200 rounded-xl px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-brand-500/30 focus:border-brand-400 transition-all appearance-none">
                  <option value="">- Select -</option>
                  <option value="QRIS">QRIS</option>
                  <option value="Bank Transfer">Bank Transfer</option>
                  <option value="Cash">Cash</option>
                </select>
              </div>
            </div>

            <div className="md:col-span-2">
              <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-1.5">Status</label>
              <select name="status" value={formData.status} onChange={handleChange} className="w-full bg-gray-50 text-sm font-medium text-gray-900 border border-gray-200 rounded-xl px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-brand-500/30 focus:border-brand-400 transition-all appearance-none">
                <option value="pending">Pending</option>
                <option value="success">Success</option>
                <option value="canceled">Canceled</option>
              </select>
            </div>

            <div className="md:col-span-2">
              <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-1.5">Special Notes</label>
              <textarea name="notes" value={formData.notes} onChange={handleChange} rows={3} className="w-full bg-gray-50 text-sm font-medium text-gray-900 border border-gray-200 rounded-xl px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-brand-500/30 focus:border-brand-400 transition-all resize-none"></textarea>
            </div>
          </div>

          <div className="mt-8 flex items-center justify-end gap-3 pt-4 border-t border-gray-100">
            <button type="button" onClick={onClose} className="px-5 py-2.5 rounded-xl text-sm font-bold text-gray-600 bg-gray-100 hover:bg-gray-200 transition-colors">
              Cancel
            </button>
            <button type="submit" disabled={isSubmitting} className="px-5 py-2.5 rounded-xl text-sm font-bold text-white bg-brand-600 hover:bg-brand-700 transition-colors shadow-lg shadow-brand-600/20 disabled:opacity-70 flex items-center gap-2">
              {isSubmitting && <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>}
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
