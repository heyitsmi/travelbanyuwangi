import fs from "fs";
import path from "path";
import matter from "gray-matter";

const promoDirectory = path.join(process.cwd(), "content/promo");

export interface PromoFrontmatter {
  title: string;
  description: string;
  category: string;
  image: string;
  active: boolean;
  validUntil: string;
  promoCode: string;
}

export interface Promo {
  slug: string;
  frontmatter: PromoFrontmatter;
  content: string;
}

export function getAllPromos(): Promo[] {
  // Buat folder jika belum ada
  if (!fs.existsSync(promoDirectory)) {
    fs.mkdirSync(promoDirectory, { recursive: true });
  }

  const fileNames = fs.readdirSync(promoDirectory);
  const allPromos = fileNames
    .filter((fileName) => fileName.endsWith(".md"))
    .map((fileName) => {
      const slug = fileName.replace(/\.md$/, "");
      const fullPath = path.join(promoDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, "utf8");
      const { data, content } = matter(fileContents);

      return {
        slug,
        frontmatter: data as PromoFrontmatter,
        content,
      };
    });

  // Filter hanya promo yang aktif dan belum expired
  const activePromos = allPromos.filter((promo) => {
    if (!promo.frontmatter.active) return false;
    
    const validUntil = new Date(promo.frontmatter.validUntil);
    const today = new Date();
    
    return validUntil >= today;
  });

  // Urutkan berdasarkan tanggal validUntil (yang paling dekat expired di atas)
  return activePromos.sort((a, b) => {
    const dateA = new Date(a.frontmatter.validUntil);
    const dateB = new Date(b.frontmatter.validUntil);
    return dateA.getTime() - dateB.getTime();
  });
}

export function getPromoBySlug(slug: string): Promo | null {
  try {
    const fullPath = path.join(promoDirectory, `${slug}.md`);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);

    return {
      slug,
      frontmatter: data as PromoFrontmatter,
      content,
    };
  } catch (error) {
    return null;
  }
}
