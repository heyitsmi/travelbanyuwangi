"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect, useRef } from "react";

export default function Sidebar({ 
  collapsed, 
  setCollapsed, 
  mobileOpen
}: { 
  collapsed: boolean, 
  setCollapsed: (v: boolean) => void,
  mobileOpen: boolean
}) {
  const pathname = usePathname();
  const [profileMenuOpen, setProfileMenuOpen] = useState(false);
  const profileMenuRef = useRef<HTMLDivElement>(null);

  const isActive = (path: string) => pathname === path || pathname.startsWith(`${path}/`);

  // Handle outside click for profile menu
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (profileMenuRef.current && !profileMenuRef.current.contains(event.target as Node)) {
        setProfileMenuOpen(false);
      }
    }
    if (profileMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [profileMenuOpen]);

  return (
    <aside 
      className={`bg-brand-900 text-white flex flex-col transition-all duration-300 z-30 fixed lg:relative h-full shadow-xl lg:shadow-none
        ${mobileOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        ${collapsed ? 'w-20' : 'w-64'}
      `}
    >
      {/* Header */}
      <div className={`relative h-20 flex items-center px-6 border-b border-brand-800/50 transition-all duration-300 ${collapsed ? 'flex-col justify-center px-0 gap-1.5' : ''}`}>
        <Link href="/admin/dashboard" className={`flex items-center gap-3 overflow-hidden ${collapsed ? 'gap-0' : ''}`}>
          <div className="bg-brand-500 text-white p-2 rounded-xl shrink-0 shadow-lg shadow-brand-500/20">
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2"/><circle cx="7" cy="17" r="2"/><path d="M9 17h6"/><circle cx="17" cy="17" r="2"/></svg>
          </div>
          {!collapsed && (
            <span className="font-bold text-xl tracking-tight whitespace-nowrap">Juragan<span className="text-brand-400">Travel</span></span>
          )}
        </Link>

        {/* Desktop Collapse Toggle */}
        <button 
          onClick={() => setCollapsed(!collapsed)}
          className="hidden lg:flex absolute -right-3.5 top-1/2 -translate-y-1/2 w-7 h-7 items-center justify-center shrink-0 rounded-lg bg-brand-800 hover:bg-brand-700 text-brand-100 hover:text-white transition-colors focus:outline-none shadow-md z-50 border border-brand-900" 
          title="Toggle Sidebar"
        >
          <svg className={`transition-transform duration-300 ${collapsed ? 'rotate-180' : ''}`} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
        </button>
      </div>

      {/* Nav */}
      <div className="flex-1 overflow-y-auto py-6 px-4 no-scrollbar flex flex-col gap-2">
        {!collapsed && <p className="text-xs font-bold text-brand-800 uppercase tracking-widest px-2 mb-2">Main Menu</p>}

        <Link 
          href="/admin/dashboard" 
          className={`flex items-center gap-3 px-3 py-3 rounded-xl transition-colors group relative ${isActive('/admin/dashboard') ? 'bg-brand-500/20 text-brand-100' : 'text-gray-400 hover:text-white hover:bg-brand-800/50'}`}
          title="Dashboard"
        >
          <svg className={`shrink-0 ${isActive('/admin/dashboard') ? '' : 'group-hover:text-brand-400 transition-colors'}`} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="7" height="9" x="3" y="3" rx="1"/><rect width="7" height="5" x="14" y="3" rx="1"/><rect width="7" height="9" x="14" y="12" rx="1"/><rect width="7" height="5" x="3" y="16" rx="1"/></svg>
          {!collapsed && <span className="font-semibold text-sm">Dashboard</span>}
          {isActive('/admin/dashboard') && <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-accent-400 rounded-r-full"></div>}
        </Link>

        <Link 
          href="/admin/bookings" 
          className={`flex items-center gap-3 px-3 py-3 rounded-xl transition-colors group relative ${isActive('/admin/bookings') ? 'bg-brand-500/20 text-brand-100' : 'text-gray-400 hover:text-white hover:bg-brand-800/50'}`}
          title="Bookings"
        >
          <svg className={`shrink-0 ${isActive('/admin/bookings') ? '' : 'group-hover:text-brand-400 transition-colors'}`} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
          {!collapsed && <span className="font-semibold text-sm">Bookings</span>}
          {isActive('/admin/bookings') && <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-accent-400 rounded-r-full"></div>}
          {!collapsed && <span className="ml-auto bg-accent-500 text-brand-900 text-xs font-bold px-2 py-0.5 rounded-full">12</span>}
        </Link>

        <a href="#" className="flex items-center gap-3 px-3 py-3 rounded-xl text-gray-400 hover:text-white hover:bg-brand-800/50 transition-colors group" title="Schedule & Routes">
            <svg className="shrink-0 group-hover:text-brand-400 transition-colors" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 11a9 9 0 0 1 9 9"/><path d="M4 4a16 16 0 0 1 16 16"/><circle cx="5" cy="19" r="1"/></svg>
            {!collapsed && <span className="font-semibold text-sm">Schedule & Routes</span>}
        </a>

        <a href="#" className="flex items-center gap-3 px-3 py-3 rounded-xl text-gray-400 hover:text-white hover:bg-brand-800/50 transition-colors group" title="Active Fleet">
            <svg className="shrink-0 group-hover:text-brand-400 transition-colors" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2"/><circle cx="7" cy="17" r="2"/><path d="M9 17h6"/><circle cx="17" cy="17" r="2"/></svg>
            {!collapsed && <span className="font-semibold text-sm">Active Fleet</span>}
        </a>

        <div className="h-px bg-brand-800/50 my-4"></div>
        
        {!collapsed && <p className="text-xs font-bold text-brand-800 uppercase tracking-widest px-2 mb-2">System</p>}

        <a href="#" className="flex items-center gap-3 px-3 py-3 rounded-xl text-gray-400 hover:text-white hover:bg-brand-800/50 transition-colors group" title="Reports">
            <svg className="shrink-0 group-hover:text-brand-400 transition-colors" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21.21 15.89A10 10 0 1 1 8 2.83"/><path d="M22 12A10 10 0 0 0 12 2v10z"/></svg>
            {!collapsed && <span className="font-semibold text-sm">Reports</span>}
        </a>
        
        <a href="#" className="flex items-center gap-3 px-3 py-3 rounded-xl text-gray-400 hover:text-white hover:bg-brand-800/50 transition-colors group" title="Settings">
            <svg className="shrink-0 group-hover:text-brand-400 transition-colors" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>
            {!collapsed && <span className="font-semibold text-sm">Settings</span>}
        </a>
      </div>

      {/* Footer Profile */}
      <div className="border-t border-brand-800/50 p-4 relative" ref={profileMenuRef}>
        <button 
          onClick={() => setProfileMenuOpen(!profileMenuOpen)}
          className="w-full flex items-center justify-between px-2 py-2 hover:bg-brand-800/50 rounded-xl transition-colors text-left focus:outline-none group"
        >
          <div className="flex items-center gap-3 overflow-hidden">
            <img src="https://ui-avatars.com/api/?name=Admin+Budi&background=10b981&color=fff" alt="Admin" className="w-10 h-10 rounded-full border-2 border-brand-700 shrink-0" />
            {!collapsed && (
              <div className="flex flex-col whitespace-nowrap">
                  <span className="text-sm font-bold text-white">Budi Santoso</span>
                  <span className="text-xs font-medium text-brand-400">Super Admin</span>
              </div>
            )}
          </div>
          {!collapsed && (
            <svg className="text-gray-400 group-hover:text-white transition-colors shrink-0" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m7 15 5 5 5-5"/><path d="m7 9 5-5 5 5"/></svg>
          )}
        </button>

        {/* Profile Menu Dropdown */}
        <div 
          className={`absolute mb-2 bg-brand-800 border border-brand-700 rounded-xl shadow-lg shadow-black/20 overflow-hidden z-50 transition-all duration-200 origin-bottom
            ${profileMenuOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'}
            ${collapsed ? 'left-[calc(100%+0.5rem)] bottom-0 w-48' : 'left-4 right-4 bottom-full'}
          `}
        >
          <a href="#" className="flex items-center gap-3 px-4 py-3 text-sm text-gray-200 hover:bg-brand-700 hover:text-white font-bold transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
              My Profile
          </a>
          <a href="#" className="flex items-center gap-3 px-4 py-3 text-sm text-gray-200 hover:bg-brand-700 hover:text-white font-bold transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/><circle cx="12" cy="12" r="3"/></svg>
              Account Settings
          </a>
          <div className="h-px bg-brand-700/50"></div>
          <a href="#" className="flex items-center gap-3 px-4 py-3 text-sm text-red-400 hover:bg-red-500/10 hover:text-red-300 font-bold transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" x2="9" y1="12" y2="12"/></svg>
              Logout
          </a>
        </div>
      </div>
    </aside>
  );
}
