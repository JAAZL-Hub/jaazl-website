/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
    ],
    unoptimized: true, // Use unoptimized images to avoid issues with spaces in filenames
    dangerouslyAllowSVG: true,
    domains: ['localhost', 'jaazl.com', 'www.jaazl.com'],
  },
  // Ensure Netlify plays well with Next.js static assets
  output: 'standalone',
  poweredByHeader: false,
  // Ensure Next.js loads all static files correctly
  assetPrefix: process.env.NODE_ENV === 'production' ? '' : undefined,
};

module.exports = nextConfig;
