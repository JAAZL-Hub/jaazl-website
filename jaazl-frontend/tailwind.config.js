/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      animation: {
        'fadeIn': 'fadeIn 0.3s ease-in-out',
        'expandDown': 'expandDown 0.3s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        expandDown: {
          '0%': { maxHeight: '0', opacity: '0' },
          '100%': { maxHeight: '1000px', opacity: '1' },
        },
      },
      colors: {
        // Primary blues
        'primary': {
          900: '#1e3a8a',
          800: '#1e40af',
          700: '#1d4ed8',
          600: '#2563eb',
          500: '#3b82f6',
          400: '#60a5fa',
          300: '#93c5fd',
          200: '#bfdbfe',
          100: '#dbeafe',
          50: '#eff6ff',
        },
        // Secondary oranges
        'secondary': {
          600: '#ea580c',
          500: '#f97316',
          400: '#fb923c',
          300: '#fdba74',
          200: '#fed7aa',
          100: '#ffedd5',
          50: '#fff7ed',
        },
        // Accent colors
        'accent': {
          'yellow': {
            500: '#eab308',
            400: '#facc15',
          },
          'green': {
            500: '#22c55e',
            400: '#4ade80',
          },
          'cyan': {
            600: '#0891b2',
            500: '#06b6d4',
          },
          'purple': {
            600: '#9333ea',
            500: '#a855f7',
          },
          'red': {
            600: '#dc2626',
            500: '#ef4444',
          },
        },
      },
      backgroundImage: {
        // Linear gradients
        'gradient-hero': 'linear-gradient(135deg, #1e3a8a 0%, #0f172a 50%, #1e3a8a 100%)',
        'gradient-blue-orange': 'linear-gradient(135deg, #1e3a8a 0%, #f97316 100%)',
        'gradient-blue-slate': 'linear-gradient(135deg, #1e40af 0%, #1e293b 100%)',
        'gradient-service-blue': 'linear-gradient(135deg, #2563eb 0%, #1e40af 100%)',
        'gradient-service-cyan': 'linear-gradient(135deg, #0891b2 0%, #1d4ed8 100%)',
        'gradient-service-purple': 'linear-gradient(135deg, #9333ea 0%, #4338ca 100%)',
        'gradient-service-orange': 'linear-gradient(135deg, #ea580c 0%, #dc2626 100%)',
        'gradient-gray-white': 'linear-gradient(135deg, #f9fafb 0%, #ffffff 100%)',
        'gradient-gray-blue': 'linear-gradient(135deg, #f9fafb 0%, #eff6ff 100%)',
        'gradient-orange-cta': 'linear-gradient(135deg, #f97316 0%, #ea580c 25%, #dc2626 100%)',
        'gradient-dark-overlay': 'linear-gradient(135deg, rgba(30, 58, 138, 0.9) 0%, rgba(15, 23, 42, 0.95) 50%, rgba(30, 58, 138, 0.9) 100%)',
        'gradient-light-overlay': 'linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)',
      },
      boxShadow: {
        'logo': '0 4px 14px rgba(30, 58, 138, 0.3)',
        'btn-primary': '0 4px 14px rgba(30, 58, 138, 0.3)',
        'btn-primary-hover': '0 8px 25px rgba(30, 58, 138, 0.4)',
        'btn-secondary': '0 4px 14px rgba(249, 115, 22, 0.3)',
        'btn-secondary-hover': '0 8px 25px rgba(249, 115, 22, 0.4)',
        'btn-cta': '0 8px 32px rgba(0, 0, 0, 0.2)',
        'btn-cta-hover': '0 12px 40px rgba(0, 0, 0, 0.25)',
        'card': '0 1px 3px rgba(0, 0, 0, 0.1)',
        'card-hover': '0 10px 15px rgba(0, 0, 0, 0.1)',
        'card-active': '0 20px 25px rgba(30, 58, 138, 0.1)',
        'industry-hover': '0 20px 25px rgba(37, 99, 235, 0.1)',
        'stats': '0 4px 6px rgba(0, 0, 0, 0.05)',
        'stats-hover': '0 20px 25px rgba(0, 0, 0, 0.1)',
      },
      fontSize: {
        'logo': ['20px', { lineHeight: '1', fontWeight: '700' }],
      },
      animation: {
        'pulse-slow': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      backdropFilter: {
        'navigation': 'blur(12px)',
        'button': 'blur(4px)',
        'feature': 'blur(4px)',
      },
      borderRadius: {
        'logo': '12px',
        'button': '12px',
        'button-large': '16px',
        'card': '16px',
        'card-large': '24px',
      },
    },
  },
  plugins: [],
}
