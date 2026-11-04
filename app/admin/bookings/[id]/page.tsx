"use client";

import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import { supabase } from "@/lib/supabase";
import EditBookingModal from "../../components/EditBookingModal";

export default function BookingDetailsPage() {
  const params = useParams();
  const router = useRouter();
  const id = params.id as string;

  const [booking, setBooking] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);

  const fetchBooking = async () => {
    setIsLoading(true);
    if (!supabase) {
      console.warn('Supabase not configured');
      setIsLoading(false);
      return;
    }

    const { data, error } = await supabase
      .from('jt_leads')
      .select('*')
      .eq('id', id)
      .single();

    if (error) {
      console.error('Error fetching lead:', error);
    } else {
      setBooking(data);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    if (id) fetchBooking();
  }, [id]);

  const handleDelete = async () => {
    if (!window.confirm("Are you sure you want to cancel and delete this order permanently?")) return;

    setIsDeleting(true);
    try {
      const res = await fetch(`/api/leads/${id}`, {
        method: 'DELETE',
      });
      if (res.ok) {
        router.push('/admin/bookings');
      } else {
        alert('Failed to delete booking');
      }
    } catch (error) {
      console.error("Error deleting booking:", error);
      alert('Failed to delete booking');
    }
    setIsDeleting(false);
  };

  if (isLoading) {
    return <div className="p-8 text-center text-gray-500">Loading details...</div>;
  }

  if (!booking) {
    return (
      <div className="p-8 text-center">
        <h2 className="text-xl font-bold text-gray-800">Booking not found</h2>
        <Link href="/admin/bookings" className="text-brand-600 hover:underline mt-4 inline-block">Back to Bookings</Link>
      </div>
    );
  }

  // Formatting helpers
  const formatDate = (dateString: string) => {
    if (!dateString) return "-";
    const options: Intl.DateTimeFormatOptions = { day: 'numeric', month: 'long', year: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  const formatDateTime = (dateString: string) => {
    if (!dateString) return "-";
    const options: Intl.DateTimeFormatOptions = { day: 'numeric', month: 'long', year: 'numeric', hour: '2-digit', minute: '2-digit' };
    return new Date(dateString).toLocaleDateString('en-US', options) + ' WIB';
  };

  const getStatusStyle = (status: string) => {
    if (status === 'success') return { label: "Success", color: "bg-green-50 text-green-600 border-green-100", dot: "bg-green-500" };
    if (status === 'canceled') return { label: "Canceled", color: "bg-red-50 text-red-600 border-red-100", dot: "bg-red-500" };
    return { label: "Pending", color: "bg-accent-50 text-accent-600 border-accent-100", dot: "bg-accent-500 animate-pulse" };
  };

  const statusStyle = getStatusStyle(booking.status);
  const initial = booking.name ? booking.name.charAt(0).toUpperCase() : '?';
  // Calculate simple price logic based on Pax (example logic: 200k per pax)
  const pricePerPax = 200000;
  const totalPrice = booking.passengers * pricePerPax;
  const formattedPrice = new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }).format(totalPrice);

  return (
    <>
      <h2 className="text-lg font-bold text-gray-800 mb-6 sm:hidden">Booking Details</h2>

      {/* Breadcrumb & Top Actions */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
          <div>
              <Link href="/admin/bookings" className="inline-flex items-center gap-2 text-sm font-bold text-gray-500 hover:text-brand-600 transition-colors mb-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
                  Back to Bookings
              </Link>
              <div className="flex items-center gap-3">
                  <h2 className="text-2xl font-extrabold text-gray-900 tracking-tight">Order #{booking.booking_code}</h2>
                  <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-bold border ${statusStyle.color}`}>
                      <span className={`w-2 h-2 rounded-full ${statusStyle.dot}`}></span> {statusStyle.label}
                  </span>
              </div>
              <p className="text-sm text-gray-500 font-medium mt-1">Booked on {formatDateTime(booking.created_at)}</p>
          </div>
          
          <div className="flex items-center gap-3 w-full sm:w-auto">
              <button className="w-full sm:w-auto px-4 py-2 bg-white border border-gray-200 rounded-xl text-sm font-bold text-gray-700 hover:bg-gray-50 transition-colors flex items-center justify-center gap-2 shadow-sm">
                  <svg className="text-gray-500" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/></svg>
                  Invoice
              </button>
              <button className="w-full sm:w-auto px-4 py-2 bg-brand-900 border border-transparent rounded-xl text-sm font-bold text-white hover:bg-brand-800 transition-colors flex items-center justify-center gap-2 shadow-lg shadow-brand-900/20">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 6 2 18 2 18 9"/><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/><rect width="12" height="8" x="6" y="14"/></svg>
                  Print Ticket
              </button>
          </div>
      </div>

      {/* Content Grid */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
          
          {/* Left Column (2/3 width) */}
          <div className="xl:col-span-2 space-y-6">
              
              {/* Journey Timeline Card */}
              <div className="bg-white p-6 sm:p-8 rounded-3xl shadow-soft border border-gray-100">
                  <div className="flex items-center justify-between mb-6">
                      <h3 className="text-lg font-bold text-gray-900">Journey Details</h3>
                      <span className="px-3 py-1 bg-brand-50 text-brand-600 rounded-lg text-xs font-bold border border-brand-100">
                        {booking.origin || '?'} → {booking.destination || '?'}
                      </span>
                  </div>

                  <div className="relative pl-6 sm:pl-8 py-2">
                      {/* Vertical dashed line */}
                      <div className="absolute left-[11px] sm:left-[15px] top-4 bottom-4 w-0.5 border-l-2 border-dashed border-gray-200"></div>
                      
                      {/* Pickup Point */}
                      <div className="relative mb-8">
                          <div className="absolute -left-6 sm:-left-8 w-6 h-6 rounded-full bg-brand-100 flex items-center justify-center border-4 border-white shadow-sm">
                              <div className="w-2 h-2 rounded-full bg-brand-500"></div>
                          </div>
                          <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2">
                              <div>
                                  <p className="text-xs font-bold text-brand-500 uppercase tracking-widest mb-1">Pick-up Location</p>
                                  <h4 className="text-base font-bold text-gray-900">{booking.origin || 'Not specified'}</h4>
                              </div>
                              <div className="text-left sm:text-right mt-2 sm:mt-0 bg-gray-50 px-3 py-2 rounded-xl border border-gray-100">
                                  <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Departure Date</p>
                                  <p className="text-sm font-extrabold text-gray-900">{formatDate(booking.departure_date)}</p>
                              </div>
                          </div>
                      </div>

                      {/* Dropoff Point */}
                      <div className="relative">
                          <div className="absolute -left-6 sm:-left-8 w-6 h-6 rounded-full bg-accent-100 flex items-center justify-center border-4 border-white shadow-sm">
                              <div className="w-2 h-2 rounded-full bg-accent-500"></div>
                          </div>
                          <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2">
                              <div>
                                  <p className="text-xs font-bold text-accent-500 uppercase tracking-widest mb-1">Drop-off Location</p>
                                  <h4 className="text-base font-bold text-gray-900">{booking.destination || 'Not specified'}</h4>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>

              {/* Source Info Card */}
              <div className="bg-white p-6 sm:p-8 rounded-3xl shadow-soft border border-gray-100">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Booking Source</h3>
                <p className="text-sm text-gray-600">
                  This booking was initiated from: <span className="font-bold text-brand-600">{booking.source || 'Direct melalui formulir kontak'}</span>
                </p>
              </div>
          </div>

          {/* Right Column (1/3 width) */}
          <div className="space-y-6">
              
              {/* Customer Summary Card */}
              <div className="bg-white p-6 rounded-3xl shadow-soft border border-gray-100">
                  <h3 className="text-lg font-bold text-gray-900 mb-5">Customer Info</h3>
                  <div className="flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 rounded-full bg-brand-100 flex items-center justify-center text-lg font-extrabold text-brand-600 shrink-0">
                          {initial}
                      </div>
                      <div>
                          <p className="text-base font-bold text-gray-900">{booking.name}</p>
                      </div>
                  </div>

                  <div className="space-y-4">
                      <div>
                          <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Phone Number</p>
                          <p className="text-sm font-semibold text-gray-800">{booking.phone}</p>
                      </div>
                      {booking.notes && (
                        <div>
                            <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Special Request / Note</p>
                            <div className="bg-yellow-50/50 p-3 rounded-xl border border-yellow-100">
                                <p className="text-sm font-medium text-gray-700 italic">"{booking.notes}"</p>
                            </div>
                        </div>
                      )}
                  </div>
              </div>

              {/* Payment Summary Card */}
              <div className="bg-white p-6 rounded-3xl shadow-soft border border-gray-100">
                  <h3 className="text-lg font-bold text-gray-900 mb-5">Payment Details</h3>
                  
                  <div className="space-y-3 text-sm font-medium text-gray-600 mb-6">
                      <div className="flex justify-between items-center">
                          <span>Ticket Price (x{booking.passengers} Pax)</span>
                          <span className="font-bold text-gray-900">{formattedPrice}</span>
                      </div>
                  </div>

                  <div className="border-t border-gray-100 pt-4 mb-6">
                      <div className="flex justify-between items-end">
                          <span className="text-sm font-bold text-gray-400 uppercase tracking-widest">Total Estimate</span>
                          <span className="text-2xl font-extrabold text-brand-600 tracking-tight">{formattedPrice}</span>
                      </div>
                      <div className="flex items-center justify-between mt-3">
                          <span className="text-xs font-medium text-gray-500">Method: {booking.payment_method || '-'}</span>
                      </div>
                  </div>

                  {/* Actions */}
                  <div className="space-y-3">
                      <button 
                        onClick={() => setIsEditModalOpen(true)}
                        className="w-full py-3 bg-brand-50 border border-brand-200 text-brand-600 rounded-xl text-sm font-bold hover:bg-brand-100 transition-colors flex items-center justify-center gap-2"
                      >
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4 12.5-12.5z"/></svg>
                          Edit Booking Data
                      </button>
                      <button 
                        onClick={handleDelete}
                        disabled={isDeleting}
                        className="w-full py-3 bg-white border border-red-200 text-red-500 rounded-xl text-sm font-bold hover:bg-red-50 transition-colors flex items-center justify-center gap-2 disabled:opacity-50"
                      >
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></svg>
                          {isDeleting ? 'Canceling...' : 'Cancel Order'}
                      </button>
                  </div>
              </div>

          </div>
      </div>

      {/* Edit Modal */}
      {isEditModalOpen && (
        <EditBookingModal 
          booking={booking} 
          onClose={() => setIsEditModalOpen(false)}
          onSuccess={fetchBooking}
        />
      )}
    </>
  );
}
