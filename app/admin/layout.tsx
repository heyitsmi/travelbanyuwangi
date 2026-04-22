import type { Metadata } from "next";
import AdminLayoutClient from "./AdminLayoutClient";

export const metadata: Metadata = {
  title: "JuraganTravel Admin | Dashboard",
  description: "Admin panel for JuraganTravel",
  robots: "noindex, nofollow",
};

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link href="https://fonts.googleapis.com/css2?family=Google+Sans+Flex:opsz,wght@6..144,1..1000&display=swap" rel="stylesheet" />
      
      <div 
        className="text-gray-800 bg-gray-50 selection:bg-brand-500 selection:text-white flex h-screen overflow-hidden"
        style={{ fontFamily: '"Google Sans Flex", sans-serif' }}
      >
        <AdminLayoutClient>
          {children}
        </AdminLayoutClient>
      </div>
    </>
  );
}
