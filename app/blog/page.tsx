import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';
import WhatsAppLink from '../components/WhatsAppLink';
import { getBlogPosts } from '@/lib/blog';

export const metadata: Metadata = {
  title: 'Blog & Artikel Perjalanan | Juragan Travel',
  description: 'Kumpulan tips, panduan, dan artikel perjalanan terbaru dari Banyuwangi. Temukan info rute, wisata, dan layanan travel kami.',
  keywords: 'blog travel banyuwangi, artikel perjalanan, tips travel, panduan wisata banyuwangi, info travel banyuwangi',
  authors: [{ name: 'Juragan Travel' }],
  openGraph: {
    title: 'Blog & Artikel Perjalanan | Juragan Travel',
    description: 'Kumpulan tips, panduan, dan artikel perjalanan terbaru dari Banyuwangi.',
    type: 'website',
    url: 'https://juragantravel.com/blog',
    images: [
      {
        url: '/img/hero.webp',
        width: 1200,
        height: 630,
        alt: 'Blog Juragan Travel',
      },
    ],
    siteName: 'Juragan Travel',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blog & Artikel Perjalanan | Juragan Travel',
    description: 'Kumpulan tips, panduan, dan artikel perjalanan terbaru dari Banyuwangi.',
    images: ['/img/hero.webp'],
  },
  alternates: {
    canonical: 'https://juragantravel.com/blog',
  },
};

// Structured Data for Blog
const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'Blog',
  name: 'Blog & Artikel Juragan Travel',
  description: 'Tips, panduan, dan artikel perjalanan terbaru dari Banyuwangi.',
  url: 'https://juragantravel.com/blog',
  publisher: {
    '@type': 'TravelAgency',
    name: 'Juragan Travel',
    url: 'https://juragantravel.com/',
  },
};

// Breadcrumb Structured Data
const breadcrumbStructuredData = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Beranda',
      item: 'https://juragantravel.com',
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'Blog',
      item: 'https://juragantravel.com/blog',
    },
  ],
};

// Sidebar data
const categories = [
  { name: 'Tips Travel', count: 5 },
  { name: 'Panduan Ziarah', count: 3 },
  { name: 'Info Rute', count: 4 },
  { name: 'Layanan Umroh', count: 2 },
  { name: 'Lainnya', count: 1 },
];

const popularPosts = [
  'Jadwal Baru & Harga Travel Banyuwangi Malang',
  'Perbedaan Visa Kunjungan dan Visa Umroh',
  'Biaya Paket Umroh 2025 dari Banyuwangi',
];

export default async function BlogPage() {
  // Get all published blog posts
  const posts = await getBlogPosts();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbStructuredData) }}
      />

      <Header />

      <main>
        {/* Hero Section */}
        <section className="bg-light py-20">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <nav className="text-sm mb-4">
              <a href="/" className="text-gray-600 hover:text-primary">
                Beranda
              </a>
              <span className="text-gray-400 mx-2">/</span>
              <span className="text-dark font-medium">Blog</span>
            </nav>
            <h1 className="text-4xl md:text-5xl font-extrabold text-dark">
              Blog & Artikel Perjalanan
            </h1>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
              Kumpulan tips, panduan, dan artikel perjalanan terbaru dari Banyuwangi.
            </p>
          </div>
        </section>

        {/* Blog Grid Section */}
        <section id="blog-grid" className="py-20 bg-white">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              
              {/* Main Column: Articles */}
              <div className="lg:col-span-2 space-y-16">
                {posts.length === 0 ? (
                  <div className="text-center py-12">
                    <p className="text-xl text-gray-600">
                      Belum ada artikel yang dipublikasikan.
                    </p>
                  </div>
                ) : (
                  posts.map((post) => (
                    <article key={post.slug} className="group">
                      <Link href={`/blog/${post.slug}`}>
                        <div className="relative w-full h-80 mb-6 rounded-lg shadow-lg overflow-hidden">
                          <Image
                            src={post.image || '/img/hero.webp'}
                            alt={post.title}
                            fill
                            sizes="(max-width: 768px) 100vw, 50vw"
                            className="object-cover transition-opacity duration-300 group-hover:opacity-90"
                          />
                        </div>
                      </Link>
                      <span className="text-sm font-semibold text-primary uppercase">
                        {post.category}
                      </span>
                      <h2 className="mt-2 text-3xl font-bold text-dark group-hover:text-primary transition-colors">
                        <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                      </h2>
                      <div className="mt-2 text-sm text-gray-500">
                        {post.date} • {post.author}
                      </div>
                      <p className="mt-4 text-lg text-gray-700 leading-relaxed">
                        {post.excerpt}
                      </p>
                      <Link
                        href={`/blog/${post.slug}`}
                        className="inline-block mt-4 font-semibold text-secondary hover:text-accent transition-colors"
                      >
                        Baca Selengkapnya &rarr;
                      </Link>
                    </article>
                  ))
                )}
              </div>

              {/* Sidebar */}
              <aside className="lg:col-span-1 space-y-10">
                {/* Categories */}
                <div className="bg-light p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold text-dark mb-4 border-b pb-2">
                    Kategori
                  </h3>
                  <ul className="space-y-3">
                    {categories.map((category, index) => (
                      <li key={index}>
                        <a
                          href="#"
                          className="flex justify-between text-gray-700 hover:text-primary"
                        >
                          <span>{category.name}</span> <span>({category.count})</span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Popular Posts */}
                <div className="bg-light p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold text-dark mb-4 border-b pb-2">
                    Artikel Populer
                  </h3>
                  <ul className="space-y-4">
                    {popularPosts.map((post, index) => (
                      <li key={index}>
                        <a
                          href="#"
                          className="font-medium text-gray-800 hover:text-primary leading-tight"
                        >
                          {post}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA Sidebar */}
                <div className="bg-primary p-6 rounded-lg shadow-lg text-white text-center sticky top-24">
                  <h3 className="text-2xl font-bold">Butuh Travel Cepat?</h3>
                  <p className="mt-2">
                    Berangkat setiap hari ke Surabaya, Malang, Denpasar.
                  </p>
                  <WhatsAppLink
                    className="mt-4 inline-block bg-accent text-white px-6 py-2 rounded-lg font-semibold hover:bg-opacity-90 transition-all"
                  >
                    Pesan Sekarang
                  </WhatsAppLink>
                </div>
              </aside>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="kontak" className="py-20 bg-primary text-white">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-extrabold">
              Siap Mengatur Perjalanan Anda?
            </h2>
            <p className="mt-4 text-lg text-gray-200 max-w-2xl mx-auto">
              Hubungi kami melalui formulir kontak untuk booking travel, sewa armada, atau konsultasi paket wisata dan umroh Anda.
            </p>
            <WhatsAppLink
              className="mt-10 inline-block bg-accent text-white px-10 py-3 rounded-lg font-bold text-lg shadow-lg hover:bg-opacity-90 transition-all transform hover:-translate-y-1"
            >
              Hubungi Kami Sekarang
            </WhatsAppLink>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
