import { Metadata } from "next";

export interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  canonicalUrl: string;
  ogImage?: string;
  author?: string;
  structuredData?: Record<string, any>;
}

export function generateMetadata({
  title,
  description,
  keywords,
  canonicalUrl,
  ogImage = "https://placehold.co/1200x630/0077B6/FFFFFF?text=travelbanyuwangi.id",
  author = "travelbanyuwangi.id",
}: SEOProps): Metadata {
  return {
    title,
    description,
    keywords: keywords || undefined,
    authors: [{ name: author }],
    openGraph: {
      title,
      description,
      type: "website",
      url: canonicalUrl,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      siteName: "travelbanyuwangi.id",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
    alternates: {
      canonical: canonicalUrl,
    },
    icons: {
      icon: "https://placehold.co/32x32/0077B6/FFFFFF?text=T",
    },
  };
}

// Component for structured data (JSON-LD)
export function StructuredData({ data }: { data: Record<string, any> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
