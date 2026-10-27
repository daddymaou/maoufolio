import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const blogDirectory = path.join(process.cwd(), 'content', 'blog');

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  category: string;
  date: string;
  content: string;
}

export function getSortedPosts() {
  const files = fs.readdirSync(blogDirectory);
  const posts = files
    .filter((file) => file.endsWith('.md'))
    .map((file) => {
      const filePath = path.join(blogDirectory, file);
      const fileContent = fs.readFileSync(filePath, 'utf-8');
      const { data, content } = matter(fileContent);
      return {
        slug: path.basename(file, '.md'),
        title: data.title,
        description: data.description,
        category: data.category,
        date: data.date,
        content: content,
      };
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  return posts;
}

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  const files = fs.readdirSync(blogDirectory);
  for (const file of files) {
    if (file.endsWith('.md')) {
      const filePath = path.join(blogDirectory, file);
      const fileContent = fs.readFileSync(filePath, 'utf-8');
      const { data } = matter(fileContent);
      if (path.basename(file, '.md') === slug) {
        return {
          slug,
          title: data.title,
          description: data.description,
          category: data.category,
          date: data.date,
          content: fileContent,
        };
      }
    }
  }
  return undefined;
}

export function getPostsByCategory(category: string) {
  return getSortedPosts().filter((post) => post.category === category);
}
