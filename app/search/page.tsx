'use client';

import { useSearchParams, useRouter } from "next/navigation";
import { useEffect } from "react";

export default function SearchPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const query = searchParams.get('q') || '';

  useEffect(() => {
    // Redirect ke halaman rute dengan query parameter
    if (query) {
      router.push(`/rute?q=${encodeURIComponent(query)}`);
    } else {
      router.push('/rute');
    }
  }, [query, router]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
        <p className="text-gray-600">Mencari rute...</p>
      </div>
    </div>
  );
}
