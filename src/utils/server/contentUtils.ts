'use server';

import fs from 'fs/promises';
import path from 'path';
import matter from 'gray-matter';
import { cache } from 'react';

export type Language = 'en' | 'ar';

export interface BaseContent {
  // Only require a slug field since that's used in queries
  slug: string;
  // Allow any additional properties
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
}

/**
 * Server-only function to get content from markdown files
 */
export const getContent = cache(async <T extends BaseContent>(
  collection: string,
  locale: Language = 'en',
  slugFilter?: string
): Promise<T[]> => {
  const collectionPath = path.join(process.cwd(), 'content', collection, locale);
  
  try {
    // Check if directory exists
    await fs.access(collectionPath);
    
    const files = await fs.readdir(collectionPath);
    const markdownFiles = files.filter(file => file.endsWith('.md') || file.endsWith('.mdx'));
    
    const items = await Promise.all(
      markdownFiles.map(async (file) => {
        const filePath = path.join(collectionPath, file);
        const fileContent = await fs.readFile(filePath, 'utf8');
        const { data, content } = matter(fileContent);
        
        const slug = data.slug || file.replace(/\.mdx?$/, '');
        
        // Create result with properly typed object
        const result = {
          ...data,
          slug,
          content,
        };
        
        return result as unknown as T;
      })
    );
    
    // If slug is provided, filter by it
    if (slugFilter) {
      return items.filter(item => item.slug === slugFilter);
    }
    
    return items;
  } catch (error) {
    console.error(`Error reading collection: ${collection}`, error);
    return [];
  }
});

/**
 * Server-only function to get a single content item by slug
 */
export const getContentBySlug = cache(async <T extends BaseContent>(
  collection: string,
  slug: string,
  locale: Language = 'en'
): Promise<T | null> => {
  const items = await getContent<T>(collection, locale, slug);
  return items.length > 0 ? items[0] : null;
});

/**
 * Server-only function to get YAML config file
 */
export const getConfigFile = cache(async <T>(
  collection: string,
  fileName: string
): Promise<T | null> => {
  const filePath = path.join(process.cwd(), 'content', collection, `${fileName}.yml`);
  
  try {
    // Check if file exists
    await fs.access(filePath);
    
    const fileContent = await fs.readFile(filePath, 'utf8');
    const { data } = matter(fileContent);
    
    return data as T;
  } catch (error) {
    console.error(`Error reading config file: ${fileName}`, error);
    return null;
  }
});
