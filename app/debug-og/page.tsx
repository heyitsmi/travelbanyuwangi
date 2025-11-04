import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Debug Open Graph | Juragan Travel",
  description: "Debug page untuk testing Open Graph tags",
  robots: {
    index: false,
    follow: false,
  },
};

export default function DebugOGPage() {
  return (
    <div className="min-h-screen bg-gray-100 py-20">
      <div className="container mx-auto max-w-4xl px-4">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Debug Open Graph Tags</h1>
        
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-semibold mb-6 text-gray-800">Test URLs untuk Social Sharing</h2>
          
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-lg text-blue-600">Homepage</h3>
              <p className="text-gray-600">https://juragantravel.com/</p>
            </div>
            
            <div>
              <h3 className="font-semibold text-lg text-blue-600">Kontak</h3>
              <p className="text-gray-600">https://juragantravel.com/kontak</p>
            </div>
            
            <div>
              <h3 className="font-semibold text-lg text-blue-600">Layanan</h3>
              <p className="text-gray-600">https://juragantravel.com/layanan</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-semibold mb-6 text-gray-800">Tools untuk Testing OG Tags</h2>
          
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-lg text-green-600">Facebook Sharing Debugger</h3>
              <a 
                href="https://developers.facebook.com/tools/debug/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-500 underline hover:text-blue-700"
              >
                https://developers.facebook.com/tools/debug/
              </a>
            </div>
            
            <div>
              <h3 className="font-semibold text-lg text-blue-600">Twitter Card Validator</h3>
              <a 
                href="https://cards-dev.twitter.com/validator" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-500 underline hover:text-blue-700"
              >
                https://cards-dev.twitter.com/validator
              </a>
            </div>
            
            <div>
              <h3 className="font-semibold text-lg text-purple-600">LinkedIn Post Inspector</h3>
              <a 
                href="https://www.linkedin.com/post-inspector/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-500 underline hover:text-blue-700"
              >
                https://www.linkedin.com/post-inspector/
              </a>
            </div>
            
            <div>
              <h3 className="font-semibold text-lg text-red-600">Open Graph Debugger (General)</h3>
              <a 
                href="https://www.opengraph.xyz/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-500 underline hover:text-blue-700"
              >
                https://www.opengraph.xyz/
              </a>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-semibold mb-6 text-gray-800">Meta Tags yang Diterapkan</h2>
          
          <div className="space-y-4 text-sm">
            <div>
              <h4 className="font-semibold text-gray-700">OpenGraph Tags:</h4>
              <ul className="list-disc list-inside text-gray-600 space-y-1 ml-4">
                <li>og:title - Judul halaman yang SEO-friendly</li>
                <li>og:description - Deskripsi singkat dan menarik</li>
                <li>og:image - URL absolut https://juragantravel.com/img/hero.webp</li>
                <li>og:url - URL absolut halaman</li>
                <li>og:type - website</li>
                <li>og:site_name - Juragan Travel</li>
                <li>og:locale - id_ID</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-gray-700">Twitter Card Tags:</h4>
              <ul className="list-disc list-inside text-gray-600 space-y-1 ml-4">
                <li>twitter:card - summary_large_image</li>
                <li>twitter:title - Judul untuk Twitter</li>
                <li>twitter:description - Deskripsi untuk Twitter</li>
                <li>twitter:image - URL absolut gambar</li>
                <li>twitter:creator - @juragantravel</li>
                <li>twitter:site - @juragantravel</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="mt-8 text-center">
          <a 
            href="/" 
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            ← Kembali ke Homepage
          </a>
        </div>
      </div>
    </div>
  );
}