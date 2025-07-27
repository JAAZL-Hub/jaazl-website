// Client-compatible content API for Next.js
// This file provides exports that are safe to use in both client and server components

// Re-export the Language type for use throughout the application
export type Language = 'en' | 'ar';

// Base content interface that all content types must implement
export interface BaseContent {
  // Only require a slug field since that's used in queries
  slug: string;
  // Allow any additional properties
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
}

// This comment directs Next.js to use the server-side version in Server Components
// and the client-side version in Client Components
export { getContent, getContentBySlug, getConfigFile } from './server/contentUtils';
