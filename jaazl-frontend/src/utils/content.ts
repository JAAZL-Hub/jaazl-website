import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { Language } from '@/contexts/LanguageContext';

// Base content directory
const contentDirectory = path.join(process.cwd(), 'content');

// Type definitions
export interface BaseContent {
  slug: string;
  [key: string]: any;
}

export interface LocalizedContent<T> {
  en: T;
  ar: T;
}

/**
 * Get content from a specific collection
 * @param collection Collection name (e.g., 'services', 'industries')
 * @param locale Language locale (e.g., 'en', 'ar')
 * @param slugFilter Optional slug to filter by
 */
export async function getContent<T extends BaseContent>(
  collection: string,
  locale: Language = 'en',
  slugFilter?: string
): Promise<T[]> {
  const collectionPath = path.join(contentDirectory, collection, locale);
  
  // Check if directory exists
  if (!fs.existsSync(collectionPath)) {
    return [];
  }
  
  const files = fs.readdirSync(collectionPath);
  const markdownFiles = files.filter(file => file.endsWith('.md') || file.endsWith('.mdx'));
  
  const items = markdownFiles.map(file => {
    const filePath = path.join(collectionPath, file);
    const fileContent = fs.readFileSync(filePath, 'utf8');
    const { data, content } = matter(fileContent);
    
    const slug = data.slug || file.replace(/\.mdx?$/, '');
    
    return {
      ...data,
      slug,
      content,
    } as T;
  });
  
  // If slug is provided, filter by it
  if (slugFilter) {
    return items.filter(item => item.slug === slugFilter);
  }
  
  return items;
}

/**
 * Get a single content item by slug
 * @param collection Collection name (e.g., 'services', 'industries')
 * @param slug Slug of the item
 * @param locale Language locale (e.g., 'en', 'ar')
 */
export async function getContentBySlug<T extends BaseContent>(
  collection: string,
  slug: string,
  locale: Language = 'en'
): Promise<T | null> {
  const items = await getContent<T>(collection, locale, slug);
  return items.length > 0 ? items[0] : null;
}

/**
 * Get YAML config file
 * @param collection Collection name (e.g., 'navigation', 'settings')
 * @param fileName File name without extension (e.g., 'header', 'footer')
 */
export async function getConfigFile<T>(
  collection: string,
  fileName: string
): Promise<T | null> {
  const filePath = path.join(contentDirectory, collection, `${fileName}.yml`);
  
  // Check if file exists
  if (!fs.existsSync(filePath)) {
    return null;
  }
  
  const fileContent = fs.readFileSync(filePath, 'utf8');
  const { data } = matter(fileContent);
  
  return data as T;
}
