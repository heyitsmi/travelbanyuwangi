import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import { getBlogPost, getBlogPosts } from '@/lib/blog';
import ReactMarkdown from 'react-markdown';
import { Facebook, MessageCircle, Twitter } from 'lucide-react';

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export const dynamicParams = true;

export async function generateStaticParams() {
  try {
    const posts = await getBlogPosts();
    return posts.map((post) => ({
      slug: post.slug,
    }));
  } catch (error) {
    console.error('Error generating static params:', error);
    return [];
  }
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getBlogPost(slug);

  if (!post) {
    return {
      title: 'Post Not Found | travelbanyuwangi.id',
    };
  }

  return {
    title: `${post.title} | travelbanyuwangi.id`,
    description: post.excerpt,
    keywords: `${post.category}, blog travel banyuwangi, ${post.title}`,
    authors: [{ name: post.author }],
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.date,
      authors: [post.author],
      tags: [post.category, 'Travel Banyuwangi'],
      url: `https://travelbanyuwangi.id/blog/${post.slug}`,
      images: [
        {
          url: post.image || 'https://placehold.co/1200x630/0077B6/FFFFFF?text=Blog+Post',
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
      siteName: 'travelbanyuwangi.id',
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
      images: [post.image || 'https://placehold.co/1200x630/0077B6/FFFFFF?text=Blog+Post'],
    },
    robots: {
      index: true,
      follow: true,
    },
    alternates: {
      canonical: `https://travelbanyuwangi.id/blog/${post.slug}`,
    },
  };
}

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

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = await getBlogPost(slug);

  if (!post || !post.published) {
    notFound();
  }

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://travelbanyuwangi.id/blog/${post.slug}`,
    },
    headline: post.title,
    description: post.excerpt,
    image: post.image,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      '@type': 'Organization',
      name: post.author,
      url: 'https://travelbanyuwangi.id/',
    },
    publisher: {
      '@type': 'Organization',
      name: 'travelbanyuwangi.id',
      logo: {
        '@type': 'ImageObject',
        url: 'https://placehold.co/32x32/0077B6/FFFFFF?text=T',
      },
    },
  };

  const breadcrumbStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Beranda',
        item: 'https://travelbanyuwangi.id',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Blog',
        item: 'https://travelbanyuwangi.id/blog',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: post.title,
        item: `https://travelbanyuwangi.id/blog/${post.slug}`,
      },
    ],
  };

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
        {/* Article Content Section */}
        <section id="blog-post" className="py-20 bg-white">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              
              {/* Main Article Column */}
              <article className="lg:col-span-2">
                {/* Breadcrumbs */}
                <nav className="text-sm mb-6">
                  <Link href="/" className="text-gray-600 hover:text-primary">
                    Beranda
                  </Link>
                  <span className="text-gray-400 mx-2">/</span>
                  <Link href="/blog" className="text-gray-600 hover:text-primary">
                    Blog
                  </Link>
                  <span className="text-gray-400 mx-2">/</span>
                  <span className="text-dark font-medium">
                    {post.title.substring(0, 30)}...
                  </span>
                </nav>

                {/* Category Badge & Title */}
                <span className="text-sm font-semibold text-primary uppercase">
                  {post.category}
                </span>
                <h1 className="mt-2 text-4xl md:text-5xl font-extrabold text-dark leading-tight">
                  {post.title}
                </h1>
                <p className="mt-4 text-lg text-gray-500">
                  Dipublikasikan pada{' '}
                  {new Date(post.date).toLocaleDateString('id-ID', {
                    day: 'numeric',
                    month: 'long',
                    year: 'numeric',
                  })}{' '}
                  oleh {post.author}
                </p>

                {/* Featured Image */}
                {post.image && (
                  <div className="relative w-full h-auto max-h-[500px] my-8 rounded-lg shadow-lg overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      width={800}
                      height={500}
                      className="w-full h-auto object-cover"
                      priority
                    />
                  </div>
                )}

                {/* Article Content */}
                <div className="prose prose-lg max-w-none text-lg text-gray-700 leading-relaxed space-y-6 prose-headings:text-dark prose-headings:font-bold prose-h2:text-3xl prose-h2:mt-8 prose-h2:mb-4 prose-h3:text-2xl prose-h3:mt-6 prose-h3:mb-3 prose-p:mb-4 prose-a:text-primary prose-a:no-underline hover:prose-a:text-accent prose-strong:text-dark prose-strong:font-semibold prose-ul:list-disc prose-ul:ml-6 prose-ol:list-decimal prose-ol:ml-6 prose-li:mb-2 prose-blockquote:border-l-4 prose-blockquote:border-primary prose-blockquote:pl-4 prose-blockquote:italic prose-blockquote:text-gray-700 prose-img:rounded-lg prose-img:shadow-lg">
                  <ReactMarkdown>{post.content}</ReactMarkdown>
                </div>

                {/* Share Buttons */}
                <div className="mt-12 pt-8 border-t">
                  <h3 className="text-xl font-semibold text-dark">
                    Bagikan Artikel Ini:
                  </h3>
                  <div className="flex space-x-4 mt-4">
                    <a
                      href={`https://www.facebook.com/sharer/sharer.php?u=https://travelbanyuwangi.id/blog/${post.slug}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2 hover:bg-blue-700 transition-colors"
                    >
                      <Facebook className="w-5 h-5" />
                      <span>Facebook</span>
                    </a>
                    <a
                      href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=https://travelbanyuwangi.id/blog/${post.slug}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gray-800 text-white px-4 py-2 rounded-lg flex items-center space-x-2 hover:bg-gray-900 transition-colors"
                    >
                      <Twitter className="w-5 h-5" />
                      <span>Twitter/X</span>
                    </a>
                  </div>
                </div>
              </article>

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
                    {popularPosts.map((popularPost, index) => (
                      <li key={index}>
                        <a
                          href="#"
                          className="font-medium text-gray-800 hover:text-primary leading-tight"
                        >
                          {popularPost}
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
                  <a
                    href="https://wa.me/6282143258744"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-block bg-accent text-white px-6 py-2 rounded-lg font-semibold hover:bg-opacity-90 transition-all"
                  >
                    Pesan Sekarang
                  </a>
                </div>
              </aside>
            </div>
          </div>
        </section>

        {/* Back to Blog Link */}
        <section className="py-8 bg-light">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <Link
              href="/blog"
              className="inline-flex items-center font-semibold text-primary hover:text-secondary transition-colors"
            >
              ← Kembali ke Blog
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
