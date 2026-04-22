"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { supabase } from "@/lib/supabase";
import EditBookingModal from "../components/EditBookingModal";

export default function DashboardPage() {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [bookings, setBookings] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [editingBooking, setEditingBooking] = useState<any>(null);
  const [stats, setStats] = useState({ revenue: 0, ticketsSold: 0, totalCustomers: 0 });

  const fetchDashboardData = async () => {
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
    } else if (data) {
      setBookings(data);
      
      // Calculate stats
      let ticketsSold = 0;
      let totalRevenue = 0;
      const uniqueCustomers = new Set();

      data.forEach(b => {
        uniqueCustomers.add(b.phone);
        if (b.status === 'success') {
          ticketsSold += (b.passengers || 1);
          totalRevenue += (b.passengers || 1) * 200000; // Assuming 200k per ticket
        }
      });

      setStats({
        revenue: totalRevenue,
        ticketsSold: ticketsSold,
        totalCustomers: uniqueCustomers.size
      });
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchDashboardData();
  }, []);

  const handleCancelBooking = async (id: string) => {
    if (!window.confirm("Are you sure you want to cancel this ticket?")) return;
    try {
      const res = await fetch(`/api/leads/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status: 'canceled' }),
      });
      if (res.ok) fetchDashboardData();
      else alert('Failed to cancel ticket');
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

  const formatDate = (dateString: string) => {
    if (!dateString) return "-";
    const options: Intl.DateTimeFormatOptions = { day: 'numeric', month: 'short', year: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-GB', options);
  };

  const formatTime = (dateString: string) => {
    if (!dateString) return "-";
    const options: Intl.DateTimeFormatOptions = { hour: '2-digit', minute: '2-digit' };
    return new Date(dateString).toLocaleTimeString('en-GB', options);
  };

  const getStatusStyle = (status: string) => {
    if (status === 'success') return { label: "Success", color: "bg-green-50 text-green-600 border-green-100", dot: "bg-green-500" };
    if (status === 'canceled') return { label: "Canceled", color: "bg-red-50 text-red-600 border-red-100", dot: "bg-red-500" };
    return { label: "Pending", color: "bg-accent-50 text-accent-600 border-accent-100", dot: "bg-accent-500 animate-pulse" };
  };

  const formatCurrency = (amount: number) => {
    if (amount >= 1000000) {
      return `Rp ${(amount / 1000000).toFixed(1)}M`;
    } else if (amount >= 1000) {
      return `Rp ${(amount / 1000).toFixed(0)}K`;
    }
    return `Rp ${amount}`;
  };

  return (
    <>
      {activeMenu && (
        <div 
          className="fixed inset-0 z-10"
          onClick={() => setActiveMenu(null)}
        ></div>
      )}

      <h2 className="text-lg font-bold text-gray-800 mb-6 sm:hidden">Overview</h2>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {/* Stat Card 1 */}
          <div className="bg-white p-6 rounded-3xl shadow-soft border border-gray-100 flex flex-col justify-between hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <div className="flex justify-between items-start mb-4">
                  <div>
                      <p className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-1">Total Revenue</p>
                      <h3 className="text-3xl font-extrabold text-gray-900 tracking-tight">{formatCurrency(stats.revenue)}</h3>
                  </div>
                  <div className="bg-brand-50 p-3 rounded-2xl text-brand-600">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" x2="12" y1="2" y2="22"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
                  </div>
              </div>
              <div className="flex items-center gap-2 text-sm">
                  <span className="text-gray-400 font-medium">All time successful</span>
              </div>
          </div>

          {/* Stat Card 2 */}
          <div className="bg-white p-6 rounded-3xl shadow-soft border border-gray-100 flex flex-col justify-between hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <div className="flex justify-between items-start mb-4">
                  <div>
                      <p className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-1">Tickets Sold</p>
                      <h3 className="text-3xl font-extrabold text-gray-900 tracking-tight">{stats.ticketsSold}</h3>
                  </div>
                  <div className="bg-accent-50 p-3 rounded-2xl text-accent-500">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                  </div>
              </div>
              <div className="flex items-center gap-2 text-sm">
                  <span className="text-gray-400 font-medium">Successful bookings</span>
              </div>
          </div>

          {/* Stat Card 3 */}
          <div className="bg-white p-6 rounded-3xl shadow-soft border border-gray-100 flex flex-col justify-between hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <div className="flex justify-between items-start mb-4">
                  <div>
                      <p className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-1">Active Fleet</p>
                      <h3 className="text-3xl font-extrabold text-gray-900 tracking-tight">8 <span className="text-lg text-gray-400 font-bold">/ 10</span></h3>
                  </div>
                  <div className="bg-blue-50 p-3 rounded-2xl text-blue-600">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2"/><circle cx="7" cy="17" r="2"/><path d="M9 17h6"/><circle cx="17" cy="17" r="2"/></svg>
                  </div>
              </div>
              <div className="flex items-center gap-2 text-sm">
                  <span className="text-gray-500 font-medium">2 Fleet in maintenance</span>
              </div>
          </div>

          {/* Stat Card 4 */}
          <div className="bg-white p-6 rounded-3xl shadow-soft border border-gray-100 flex flex-col justify-between hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <div className="flex justify-between items-start mb-4">
                  <div>
                      <p className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-1">Total Customers</p>
                      <h3 className="text-3xl font-extrabold text-gray-900 tracking-tight">{stats.totalCustomers}</h3>
                  </div>
                  <div className="bg-purple-50 p-3 rounded-2xl text-purple-600">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
                  </div>
              </div>
              <div className="flex items-center gap-2 text-sm">
                  <span className="text-gray-400 font-medium">Unique customers all time</span>
              </div>
          </div>
      </div>

      {/* Recent Bookings Table Section */}
      <div className="bg-white rounded-[2rem] shadow-soft border border-gray-100 overflow-hidden flex flex-col">
          <div className="p-6 sm:p-8 border-b border-gray-100 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div>
                  <h3 className="text-xl font-bold text-gray-900">Recent Bookings</h3>
                  <p className="text-sm text-gray-500 font-medium mt-1">List of recently received ticket reservations.</p>
              </div>
              <Link href="/admin/bookings" className="bg-brand-50 text-brand-600 font-bold px-4 py-2 rounded-xl text-sm hover:bg-brand-100 transition-colors border border-brand-100">
                  View All
              </Link>
          </div>
          
          <div className="overflow-x-auto min-h-[350px]">
              <table className="w-full text-left border-collapse min-w-[800px]">
                  <thead>
                      <tr className="bg-gray-50/50">
                          <th className="py-4 px-6 sm:px-8 text-xs font-bold text-gray-400 uppercase tracking-widest border-b border-gray-100">Order ID</th>
                          <th className="py-4 px-6 text-xs font-bold text-gray-400 uppercase tracking-widest border-b border-gray-100">Customer</th>
                          <th className="py-4 px-6 text-xs font-bold text-gray-400 uppercase tracking-widest border-b border-gray-100">Route</th>
                          <th className="py-4 px-6 text-xs font-bold text-gray-400 uppercase tracking-widest border-b border-gray-100">Date & Time</th>
                          <th className="py-4 px-6 text-xs font-bold text-gray-400 uppercase tracking-widest border-b border-gray-100">Status</th>
                          <th className="py-4 px-6 sm:px-8 text-xs font-bold text-gray-400 uppercase tracking-widest border-b border-gray-100 text-right">Action</th>
                      </tr>
                  </thead>
                  <tbody className="text-sm divide-y divide-gray-100">
                      {isLoading ? (
                          <tr>
                              <td colSpan={6} className="py-10 text-center text-gray-500">
                                  Loading data...
                              </td>
                          </tr>
                      ) : bookings.slice(0, 5).map((booking) => {
                          const statusStyle = getStatusStyle(booking.status);
                          const initial = booking.name ? booking.name.charAt(0).toUpperCase() : '?';
                          return (
                          <tr key={booking.id} className="hover:bg-brand-50/30 transition-colors group">
                              <td className="py-4 px-6 sm:px-8 font-bold text-brand-600">#{booking.booking_code}</td>
                              <td className="py-4 px-6">
                                  <div className="flex items-center gap-3">
                                      <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold bg-brand-100 text-brand-600`}>
                                          {initial}
                                      </div>
                                      <span className="font-bold text-gray-800">{booking.name}</span>
                                  </div>
                              </td>
                              <td className="py-4 px-6 font-semibold text-gray-700">{booking.origin || '?'} <span className="text-gray-400 mx-1">→</span> {booking.destination || '?'}</td>
                              <td className="py-4 px-6 text-gray-500 font-medium">{formatDate(booking.created_at)} <span className="text-gray-400 text-xs ml-1">{formatTime(booking.created_at)}</span></td>
                              <td className="py-4 px-6">
                                  <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-bold border ${statusStyle.color}`}>
                                      <span className={`w-1.5 h-1.5 rounded-full ${statusStyle.dot}`}></span> {statusStyle.label}
                                  </span>
                              </td>
                              <td className="py-4 px-6 sm:px-8 text-right relative">
                                  <button 
                                      onClick={(e) => toggleMenu(booking.id, e)}
                                      className="text-gray-400 hover:text-brand-600 transition-colors p-2 bg-white rounded-lg border border-gray-100 shadow-sm group-hover:border-brand-200 focus:outline-none focus:ring-2 focus:ring-brand-500/50 relative z-10"
                                  >
                                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/><circle cx="5" cy="12" r="1"/></svg>
                                  </button>
                                  
                                  <div className={`absolute right-6 sm:right-8 top-12 w-48 bg-white rounded-2xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.1)] border border-gray-100 py-2 z-20 text-left transform transition-all duration-200 origin-top-right
                                      ${activeMenu === booking.id ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'}
                                  `}>
                                      <Link href={`/admin/bookings/${booking.id}`} className="flex items-center gap-2.5 px-4 py-2.5 text-sm text-gray-700 hover:bg-brand-50 hover:text-brand-600 font-bold transition-colors">
                                          <svg className="text-gray-400" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>
                                          View Details
                                      </Link>
                                      <button onClick={() => openEditModal(booking)} className="w-full flex items-center gap-2.5 px-4 py-2.5 text-sm text-gray-700 hover:bg-brand-50 hover:text-brand-600 font-bold transition-colors">
                                          <svg className="text-gray-400" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4 12.5-12.5z"/></svg>
                                          Edit Booking
                                      </button>
                                      <div className="h-px bg-gray-100 my-1.5"></div>
                                      <button onClick={() => handleCancelBooking(booking.id)} className="w-full flex items-center gap-2.5 px-4 py-2.5 text-sm text-red-600 hover:bg-red-50 font-bold transition-colors">
                                          <svg className="text-red-400" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></svg>
                                          Cancel Ticket
                                      </button>
                                  </div>
                              </td>
                          </tr>
                      )})} 
                  </tbody>
              </table>
          </div>
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
          onSuccess={fetchDashboardData}
        />
      )}
    </>
  );
}
