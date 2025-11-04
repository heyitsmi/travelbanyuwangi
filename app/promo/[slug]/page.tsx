import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { getAllPromos, getPromoBySlug } from "@/lib/promo";
import ReactMarkdown from "react-markdown";

// Generate static paths for all promo slugs
export const dynamicParams = false; // Return 404 for unknown slugs

interface PromoPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const promos = getAllPromos();
  return promos.map((promo) => ({
    slug: promo.slug,
  }));
}

export async function generateMetadata({ params }: PromoPageProps): Promise<Metadata> {
  const { slug } = await params;
  const promo = getPromoBySlug(slug);

  if (!promo) {
    return {
      title: "Promo Tidak Ditemukan | travelbanyuwangi.id",
    };
  }

  return {
    title: `${promo.frontmatter.title} | Promo travelbanyuwangi.id`,
    description: promo.frontmatter.description,
    openGraph: {
      title: promo.frontmatter.title,
      description: promo.frontmatter.description,
      type: "article",
      url: `https://travelbanyuwangi.id/promo/${slug}`,
      images: [
        {
          url: promo.frontmatter.image,
          width: 1200,
          height: 630,
        },
      ],
    },
    alternates: {
      canonical: `https://travelbanyuwangi.id/promo/${slug}`,
    },
  };
}

export default async function PromoDetailPage({ params }: PromoPageProps) {
  const { slug } = await params;
  const promo = getPromoBySlug(slug);

  if (!promo) {
    notFound();
  }

  const validUntil = new Date(promo.frontmatter.validUntil);
  const formattedDate = validUntil.toLocaleDateString("id-ID", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <div className="bg-white antialiased">
      <Header />

      <main>
        {/* Hero Section */}
        <section className="bg-light py-20">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <nav className="text-sm mb-4">
              <Link href="/" className="text-gray-600 hover:text-primary">
                Beranda
              </Link>
              <span className="text-gray-400 mx-2">/</span>
              <Link href="/promo" className="text-gray-600 hover:text-primary">
                Promo
              </Link>
              <span className="text-gray-400 mx-2">/</span>
              <span className="text-dark font-medium">{promo.frontmatter.title}</span>
            </nav>
            <span className="inline-block bg-accent text-white text-sm font-semibold px-4 py-2 rounded-full uppercase tracking-wider mb-4">
              {promo.frontmatter.category}
            </span>
            <h1 className="text-4xl md:text-5xl font-extrabold text-dark">{promo.frontmatter.title}</h1>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">{promo.frontmatter.description}</p>
            <div className="mt-6">
              <span className="inline-block bg-red-100 text-red-700 px-4 py-2 rounded-lg font-semibold">
                Berlaku sampai: {formattedDate}
              </span>
            </div>
          </div>
        </section>

        {/* Promo Content */}
        <section className="py-20 bg-white">
          <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            {/* Gambar Promo */}
            <div className="relative h-96 w-full rounded-lg overflow-hidden shadow-xl mb-12">
              <Image
                src={promo.frontmatter.image}
                alt={promo.frontmatter.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 896px"
                priority
              />
            </div>

            {/* Kode Promo Box */}
            <div className="bg-accent bg-opacity-10 border-2 border-accent rounded-lg p-6 mb-12">
              <div className="text-center">
                <p className="text-sm font-semibold text-gray-700 uppercase tracking-wider mb-2">
                  Kode Promo
                </p>
                <p className="text-3xl font-extrabold text-white">{promo.frontmatter.promoCode}</p>
                <p className="mt-3 text-sm text-gray-600">
                  Sebutkan kode ini saat melakukan pemesanan via WhatsApp
                </p>
              </div>
            </div>

            {/* Markdown Content */}
            <div className="prose prose-lg max-w-none">
              <ReactMarkdown
                components={{
                  h2: ({ children }) => (
                    <h2 className="text-3xl font-bold text-dark mt-12 mb-6">{children}</h2>
                  ),
                  h3: ({ children }) => (
                    <h3 className="text-2xl font-bold text-dark mt-8 mb-4">{children}</h3>
                  ),
                  p: ({ children }) => <p className="text-lg text-gray-700 mb-4 leading-relaxed">{children}</p>,
                  ul: ({ children }) => <ul className="list-disc list-inside space-y-2 mb-6 text-gray-700">{children}</ul>,
                  ol: ({ children }) => <ol className="list-decimal list-inside space-y-2 mb-6 text-gray-700">{children}</ol>,
                  li: ({ children }) => <li className="text-lg">{children}</li>,
                  strong: ({ children }) => <strong className="font-semibold text-dark">{children}</strong>,
                  em: ({ children }) => <em className="italic">{children}</em>,
                }}
              >
                {promo.content}
              </ReactMarkdown>
            </div>

            {/* CTA Section */}
            <div className="mt-16 bg-primary text-white rounded-lg p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">Siap Klaim Promo Ini?</h3>
              <p className="text-lg mb-6">
                Hubungi admin kami sekarang dan sebutkan kode promo: <strong>{promo.frontmatter.promoCode}</strong>
              </p>
              <a
                href={`https://wa.me/6282143258744?text=Halo,%20saya%20ingin%20klaim%20promo%20${encodeURIComponent(promo.frontmatter.promoCode)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-accent text-white px-10 py-4 rounded-lg font-bold text-lg shadow-lg hover:bg-opacity-90 transition-all transform hover:-translate-y-1"
              >
                Klaim via WhatsApp
              </a>
            </div>

            {/* Back to Promo List */}
            <div className="mt-12 text-center">
              <Link
                href="/promo"
                className="inline-block text-primary font-semibold hover:text-opacity-80 transition-colors"
              >
                ← Kembali ke Daftar Promo
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
