"use client";

import { usePathname } from "next/navigation";

export default function Header({ onMobileMenuClick }: { onMobileMenuClick: () => void }) {
  const pathname = usePathname();
  
  let title = "Overview";
  if (pathname.includes("/admin/bookings")) title = "Bookings";
  if (pathname.match(/\/admin\/bookings\/[a-zA-Z0-9-]/)) title = "Booking Details";

  return (
    <header className="bg-white/80 backdrop-blur-lg h-20 px-6 sm:px-8 flex items-center justify-between z-10 border-b border-gray-200 shrink-0">
      <div className="flex items-center gap-4">
        <button 
          onClick={onMobileMenuClick}
          className="lg:hidden text-gray-500 hover:text-brand-600 focus:outline-none p-2 bg-gray-100 rounded-xl hover:bg-brand-50 transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
        </button>
        <h1 className="text-xl sm:text-2xl font-extrabold text-gray-800 tracking-tight hidden sm:block">{title}</h1>
      </div>

      <div className="flex items-center gap-4 sm:gap-6">
        <div className="hidden md:flex relative group">
          <svg className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 group-hover:text-brand-500 transition-colors" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
          <input type="text" placeholder="Search..." className="bg-gray-100 text-sm font-medium text-gray-800 rounded-full pl-10 pr-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-brand-500/50 focus:bg-white w-64 transition-all" />
        </div>

        <button className="relative p-2.5 text-gray-500 hover:text-brand-600 hover:bg-brand-50 rounded-full transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/></svg>
          <span className="absolute top-2 right-2.5 w-2 h-2 bg-red-500 rounded-full animate-pulse border border-white"></span>
        </button>
      </div>
    </header>
  );
}
