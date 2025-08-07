/** @type {import('next').NextConfig} */
const nextConfig = {
  // Image Optimization Configuration
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
    ],
    // Enable modern formats for better performance
    formats: ['image/webp', 'image/avif'],
    // Optimized device sizes for responsive images
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    // Allow SVG for logo and icons
    dangerouslyAllowSVG: true,
    domains: ['localhost', 'jaazl.com', 'www.jaazl.com'],
    // Use unoptimized for static export compatibility
    unoptimized: true,
  },

  // Performance Optimizations
  experimental: {
    // Optimize package imports for better tree shaking
    optimizePackageImports: ['react-icons', 'framer-motion', '@splidejs/react-splide'],
    // Enable Turbopack optimizations for development
    turbo: {
      rules: {
        '*.svg': {
          loaders: ['@svgr/webpack'],
          as: '*.js',
        },
      },
    },
  },

  // Compiler Optimizations
  compiler: {
    // Remove console.log in production for better performance
    removeConsole: process.env.NODE_ENV === 'production',
  },

  // Bundle Analysis Configuration
  ...(process.env.ANALYZE === 'true' && {
    webpack: (config) => {
      config.plugins.push(
        new (require('@next/bundle-analyzer')({
          enabled: true,
        }))()
      );
      return config;
    },
  }),

  // Output Configuration
  output: 'export', // Static export for Netlify compatibility
  trailingSlash: true,
  poweredByHeader: false, // Remove X-Powered-By header for security
  
  // Asset handling
  assetPrefix: process.env.NODE_ENV === 'production' ? '' : undefined,
  
  // Compression for better performance
  compress: true,

  // Security and Performance Headers
  async headers() {
    return [
      {
        // Security headers for all routes
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on',
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=31536000; includeSubDomains; preload',
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()',
          },
        ],
      },
      {
        // Aggressive caching for images
        source: '/images/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        // Caching for static assets
        source: '/_next/static/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        // Caching for fonts
        source: '/Fonts/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
