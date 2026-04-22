"use client";

import { useState } from "react";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";

export default function AdminLayoutClient({ children }: { children: React.ReactNode }) {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <div 
        className={`fixed inset-0 bg-brand-900/60 backdrop-blur-sm z-20 lg:hidden transition-opacity duration-300 ${mobileMenuOpen ? 'opacity-100 block' : 'opacity-0 hidden'}`}
        onClick={() => setMobileMenuOpen(false)}
      ></div>

      <Sidebar 
        collapsed={sidebarCollapsed} 
        setCollapsed={setSidebarCollapsed} 
        mobileOpen={mobileMenuOpen}
      />

      <div className="flex-1 flex flex-col min-w-0 bg-gray-50/50 h-screen">
        <Header onMobileMenuClick={() => setMobileMenuOpen(true)} />
        <main className="flex-1 overflow-y-auto p-6 sm:p-8 no-scrollbar relative">
          {children}
        </main>
      </div>
    </>
  );
}
