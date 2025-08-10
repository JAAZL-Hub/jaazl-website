/**
 * Custom image loader for CDN optimization
 * This loader can be configured to use different CDN providers
 */

export default function imageLoader({ src, width, quality }) {
  // For local images, use default path
  if (src.startsWith('/')) {
    return `${src}?w=${width}&q=${quality || 75}`;
  }
  
  // For external images, you can add CDN logic here
  // Example for using a CDN like Cloudinary or ImageKit:
  // return `https://res.cloudinary.com/jaazl/image/fetch/w_${width},q_${quality || 75},f_auto/${encodeURIComponent(src)}`;
  
  return src;
}