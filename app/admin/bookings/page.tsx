"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { supabase } from "@/lib/supabase";
import EditBookingModal from "../components/EditBookingModal";

export default function OrdersPage() {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [bookings, setBookings] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [editingBooking, setEditingBooking] = useState<any>(null);


  const fetchBookings = async () => {
    setIsLoading(true);
    if (!supabase) {
      console.warn('Supabase not configured');
      setIsLoading(false);
      return;
    }

    const { data, error } = await supabase
      .from('jt_leads')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Error fetching leads:', error);
    } else {
      setBookings(data || []);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchBookings();
  }, []);

  const handleCancelBooking = async (id: string) => {
    if (!window.confirm("Are you sure you want to cancel this ticket?")) return;

    try {
      const res = await fetch(`/api/leads/${id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ status: 'canceled' }),
      });

      if (res.ok) {
        fetchBookings();
      } else {
        alert('Failed to cancel ticket');
      }
    } catch (error) {
      console.error("Error canceling booking:", error);
      alert('Failed to cancel ticket');
    }
  };

  const openEditModal = (booking: any) => {
    setEditingBooking(booking);
    setActiveMenu(null);
  };

  const toggleMenu = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    setActiveMenu(activeMenu === id ? null : id);
  };

  // Helper function to format date
  const formatDate = (dateString: string) => {
    if (!dateString) return "-";
    const options: Intl.DateTimeFormatOptions = { day: 'numeric', month: 'short', year: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-GB', options);
  };

  // Helper to determine status style
  const getStatusStyle = (status: string) => {
    if (status === 'success') return { label: "Success", color: "bg-green-50 text-green-600 border-green-100", dot: "bg-green-500" };
    if (status === 'canceled') return { label: "Canceled", color: "bg-red-50 text-red-600 border-red-100", dot: "bg-red-500" };
    return { label: "Pending", color: "bg-accent-50 text-accent-600 border-accent-100", dot: "bg-accent-500 animate-pulse" };
  };

  return (
    <>
      {/* Transparent Overlay for closing dropdown */}
      {activeMenu && (
        <div 
          className="fixed inset-0 z-10"
          onClick={() => setActiveMenu(null)}
        ></div>
      )}

      <h2 className="text-lg font-bold text-gray-800 mb-6 sm:hidden">Bookings</h2>

      {/* Page Actions & Filters */}
      <div className="mb-8">
          <div className="flex flex-col lg:flex-row justify-between gap-4 mb-6">
              {/* Advanced Filters */}
              <div className="flex flex-wrap lg:flex-nowrap items-center gap-3 w-full lg:w-auto">
                  <div className="relative w-full sm:w-auto min-w-[200px]">
                      <svg className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
                      <input type="text" placeholder="Customer Name / ID..." className="w-full bg-white text-sm font-medium text-gray-800 border border-gray-200 rounded-xl pl-9 pr-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-brand-500/30 focus:border-brand-400 transition-all" />
                  </div>
                  
                  <div className="relative w-full sm:w-auto min-w-[160px]">
                      <select className="w-full bg-white text-sm font-medium text-gray-800 border border-gray-200 rounded-xl px-4 py-2.5 appearance-none focus:outline-none focus:ring-2 focus:ring-brand-500/30 focus:border-brand-400 cursor-pointer">
                          <option value="">All Statuses</option>
                          <option value="sukses">Success</option>
                          <option value="menunggu">Pending</option>
                          <option value="batal">Canceled</option>
                      </select>
                      <svg className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
                  </div>

                  <div className="relative w-full sm:w-auto min-w-[160px]">
                      <input type="date" className="w-full bg-white text-sm font-medium text-gray-800 border border-gray-200 rounded-xl px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-brand-500/30 focus:border-brand-400 cursor-pointer" />
                  </div>
              </div>

              {/* Add New Action */}
              <button className="bg-brand-900 text-white font-bold px-5 py-2.5 rounded-xl text-sm hover:bg-brand-800 hover:-translate-y-0.5 transition-all shadow-lg shadow-brand-900/20 flex items-center justify-center gap-2 shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
                  New Booking
              </button>
          </div>
      </div>

      {/* Booking Data Table */}
      <div className="bg-white rounded-[2rem] shadow-soft border border-gray-100 overflow-hidden flex flex-col">
          <div className="overflow-x-auto min-h-[400px]">
              <table className="w-full text-left border-collapse min-w-[1000px]">
                  <thead>
                      <tr className="bg-gray-50/50 border-b border-gray-100">
                          <th className="py-5 px-6 sm:px-8 text-xs font-bold text-gray-400 uppercase tracking-widest whitespace-nowrap">Order ID</th>
                          <th className="py-5 px-6 text-xs font-bold text-gray-400 uppercase tracking-widest whitespace-nowrap">Customer</th>
                          <th className="py-5 px-6 text-xs font-bold text-gray-400 uppercase tracking-widest whitespace-nowrap">Route</th>
                          <th className="py-5 px-6 text-xs font-bold text-gray-400 uppercase tracking-widest whitespace-nowrap">Departure</th>
                          <th className="py-5 px-6 text-xs font-bold text-gray-400 uppercase tracking-widest whitespace-nowrap">Pax</th>
                          <th className="py-5 px-6 text-xs font-bold text-gray-400 uppercase tracking-widest whitespace-nowrap">Status</th>
                          <th className="py-5 px-6 sm:px-8 text-xs font-bold text-gray-400 uppercase tracking-widest whitespace-nowrap text-right">Action</th>
                      </tr>
                  </thead>
                  <tbody className="text-sm divide-y divide-gray-100">
                      {isLoading ? (
                          <tr>
                              <td colSpan={7} className="py-10 text-center text-gray-500">
                                  Loading data...
                              </td>
                          </tr>
                      ) : bookings.length === 0 ? (
                          <tr>
                              <td colSpan={7} className="py-10 text-center text-gray-500">
                                  No bookings found.
                              </td>
                          </tr>
                      ) : (
                          bookings.map((booking) => {
                              const statusStyle = getStatusStyle(booking.status);
                              const initial = booking.name ? booking.name.charAt(0).toUpperCase() : '?';
                              
                              return (
                                  <tr key={booking.id} className="hover:bg-brand-50/30 transition-colors group">
                                      <td className="py-4 px-6 sm:px-8 font-bold text-brand-600 whitespace-nowrap">#{booking.booking_code}</td>
                                      <td className="py-4 px-6 whitespace-nowrap">
                                          <div className="flex items-center gap-3">
                                              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold shrink-0 bg-brand-100 text-brand-600`}>
                                                  {initial}
                                              </div>
                                              <div className="flex flex-col">
                                                  <span className="font-bold text-gray-800">{booking.name}</span>
                                                  <span className="text-xs text-gray-400 font-medium">{booking.phone}</span>
                                              </div>
                                          </div>
                                      </td>
                                      <td className="py-4 px-6 font-semibold text-gray-700 whitespace-nowrap">
                                          <div className="flex items-center gap-1.5">
                                              {booking.origin || '?'} 
                                              <svg className="text-gray-300" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg> 
                                              {booking.destination || '?'}
                                          </div>
                                      </td>
                                      <td className="py-4 px-6 whitespace-nowrap">
                                          <div className="flex flex-col">
                                              <span className="text-gray-800 font-bold">{formatDate(booking.departure_date)}</span>
                                          </div>
                                      </td>
                                      <td className="py-4 px-6 font-bold text-gray-700 whitespace-nowrap">
                                          {booking.passengers} Pax
                                      </td>
                                      <td className="py-4 px-6 whitespace-nowrap">
                                          <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-bold border ${statusStyle.color}`}>
                                              <span className={`w-1.5 h-1.5 rounded-full ${statusStyle.dot}`}></span> {statusStyle.label}
                                          </span>
                                      </td>
                                      <td className="py-4 px-6 sm:px-8 text-right relative whitespace-nowrap">
                                          <button 
                                              onClick={(e) => toggleMenu(booking.id, e)}
                                              className="action-btn text-gray-400 hover:text-brand-600 transition-colors p-2 bg-white rounded-lg border border-gray-100 shadow-sm group-hover:border-brand-200 focus:outline-none focus:ring-2 focus:ring-brand-500/50 relative z-10"
                                          >
                                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/><circle cx="5" cy="12" r="1"/></svg>
                                          </button>
                                          <div className={`action-menu absolute right-6 sm:right-8 top-12 w-48 bg-white rounded-2xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.1)] border border-gray-100 py-2 z-20 text-left transform transition-all duration-200 origin-top-right
                                              ${activeMenu === booking.id ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'}
                                          `}>
                                              <Link href={`/admin/bookings/${booking.id}`} className="flex items-center gap-2.5 px-4 py-2.5 text-sm text-gray-700 hover:bg-brand-50 hover:text-brand-600 font-bold transition-colors">
                                                  <svg className="text-gray-400" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>
                                                  Booking Details
                                              </Link>
                                              <button onClick={() => openEditModal(booking)} className="w-full flex items-center gap-2.5 px-4 py-2.5 text-sm text-gray-700 hover:bg-brand-50 hover:text-brand-600 font-bold transition-colors">
                                                  <svg className="text-gray-400" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4 12.5-12.5z"/></svg>
                                                  Edit Data
                                              </button>
                                              <div className="h-px bg-gray-100 my-1.5"></div>
                                              <button onClick={() => handleCancelBooking(booking.id)} className="w-full flex items-center gap-2.5 px-4 py-2.5 text-sm text-red-600 hover:bg-red-50 font-bold transition-colors">
                                                  <svg className="text-red-400" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></svg>
                                                  Cancel Ticket
                                              </button>
                                          </div>
                                      </td>
                                  </tr>
                              );
                          })
                      )}
                  </tbody>
              </table>
          </div>

          {/* Pagination Footer */}
          {!isLoading && bookings.length > 0 && (
              <div className="p-6 sm:px-8 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <span className="text-sm font-medium text-gray-500">
                      Showing <span className="font-bold text-gray-900">1</span> to <span className="font-bold text-gray-900">{bookings.length}</span> of <span className="font-bold text-gray-900">{bookings.length}</span> entries
                  </span>
                  
                  <div className="flex items-center gap-1.5">
                      <button className="px-3 py-1.5 rounded-lg border border-gray-200 text-gray-400 hover:text-brand-600 hover:border-brand-200 hover:bg-brand-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed" disabled>
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
                      </button>
                      <button className="w-8 h-8 rounded-lg bg-brand-500 text-white font-bold shadow-md shadow-brand-500/20 flex items-center justify-center">1</button>
                      <button className="px-3 py-1.5 rounded-lg border border-gray-200 text-gray-600 hover:text-brand-600 hover:border-brand-200 hover:bg-brand-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed" disabled>
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
                      </button>
                  </div>
              </div>
          )}
      </div>

      {/* Footer Area */}
      <div className="mt-8 text-center sm:text-left text-sm font-medium text-gray-400 pb-4">
          &copy; 2026 JuraganTravel Admin System. All rights reserved.
      </div>

      {/* Edit Modal */}
      {editingBooking && (
        <EditBookingModal 
          booking={editingBooking} 
          onClose={() => setEditingBooking(null)}
          onSuccess={fetchBookings}
        />
      )}
    </>
  );
}
