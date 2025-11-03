import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const contentDirectory = path.join(process.cwd(), 'content');

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  author: string;
  category: string;
  image: string;
  published: boolean;
}

/**
 * Get all published blog posts from the content directory
 */
export async function getBlogPosts(): Promise<BlogPost[]> {
  // Check if content directory exists
  if (!fs.existsSync(contentDirectory)) {
    return [];
  }

  const files = fs.readdirSync(contentDirectory);
  const mdFiles = files.filter((file) => file.endsWith('.md'));

  const posts = mdFiles.map((filename) => {
    const slug = filename.replace('.md', '');
    const filePath = path.join(contentDirectory, filename);
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const { data, content } = matter(fileContents);

    return {
      slug,
      title: data.title || 'Untitled',
      excerpt: data.excerpt || '',
      content,
      date: data.date || new Date().toISOString(),
      author: data.author || 'Admin',
      category: data.category || 'Umum',
      image: data.image || '',
      published: data.published !== false, // default to true if not specified
    };
  });

  // Filter only published posts
  const publishedPosts = posts.filter((post) => post.published);

  // Sort by date (newest first)
  publishedPosts.sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });

  return publishedPosts;
}

/**
 * Get a single blog post by slug
 */
export async function getBlogPost(slug: string): Promise<BlogPost | null> {
  try {
    const filePath = path.join(contentDirectory, `${slug}.md`);
    
    if (!fs.existsSync(filePath)) {
      return null;
    }

    const fileContents = fs.readFileSync(filePath, 'utf8');
    const { data, content } = matter(fileContents);

    return {
      slug,
      title: data.title || 'Untitled',
      excerpt: data.excerpt || '',
      content,
      date: data.date || new Date().toISOString(),
      author: data.author || 'Admin',
      category: data.category || 'Umum',
      image: data.image || '',
      published: data.published !== false,
    };
  } catch (error) {
    console.error(`Error reading blog post ${slug}:`, error);
    return null;
  }
}
