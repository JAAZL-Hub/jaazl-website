/** @type {import('tailwindcss').Config} */
module.exports = {
  // Safelist to prevent Tailwind from purging important classes in production
  safelist: [
    // Preserve all text color classes
    { pattern: /text-(.+)-(\d+)/, variants: ['hover', 'focus', 'group-hover'] },
    { pattern: /bg-(.+)-(\d+)/, variants: ['hover', 'focus', 'group-hover'] },
    { pattern: /border-(.+)-(\d+)/, variants: ['hover', 'focus', 'group-hover'] },
    // Preserve gradient classes
    { pattern: /from-(.+)-(\d+)/, variants: ['hover', 'focus'] },
    { pattern: /to-(.+)-(\d+)/, variants: ['hover', 'focus'] },
    { pattern: /via-(.+)-(\d+)/, variants: ['hover', 'focus'] },
  ],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      // RTL and Direction utilities
      direction: {
        'ltr': 'ltr',
        'rtl': 'rtl',
      },
      // Mobile-specific screen sizes
      screens: {
        'xs': '375px',
        'sm-mobile': '414px',
        'lg-mobile': '768px',
        'tablet': '1024px',
        'mobile': {'max': '767px'},
        'touch': {'max': '1024px'},
      },
      // Touch-friendly spacing
      spacing: {
        '18': '4.5rem',  // 72px
        '88': '22rem',   // 352px
        'touch': '2.75rem', // 44px minimum touch target
        'safe-top': 'env(safe-area-inset-top)',
        'safe-bottom': 'env(safe-area-inset-bottom)',
        'safe-left': 'env(safe-area-inset-left)',
        'safe-right': 'env(safe-area-inset-right)',
      },
      // Mobile-optimized font sizes
      fontSize: {
        'xs-mobile': ['0.75rem', { lineHeight: '1.6' }],
        'sm-mobile': ['0.875rem', { lineHeight: '1.6' }],
        'base-mobile': ['0.9375rem', { lineHeight: '1.6' }],
        'lg-mobile': ['1.0625rem', { lineHeight: '1.6' }],
      },
      animation: {
        'fadeIn': 'fadeIn 0.3s ease-in-out',
        'expandDown': 'expandDown 0.3s ease-in-out',
        'slideUp': 'slideUp 0.4s ease-out',
        'slideDown': 'slideDown 0.4s ease-out',
        'slideLeft': 'slideLeft 0.4s ease-out',
        'slideRight': 'slideRight 0.4s ease-out',
        'scaleIn': 'scaleIn 0.3s ease-out',
        'bounce-gentle': 'bounce-gentle 0.6s ease-out',
        'pulse-gentle': 'pulse-gentle 2s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'shimmer': 'shimmer 2s linear infinite',
        'morphing': 'morphing 8s ease-in-out infinite',
        'gradient-x': 'gradient-x 15s ease infinite',
        'gradient-y': 'gradient-y 15s ease infinite',
        'gradient-xy': 'gradient-xy 15s ease infinite',
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
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideDown: {
          '0%': { opacity: '0', transform: 'translateY(-20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideLeft: {
          '0%': { opacity: '0', transform: 'translateX(20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideRight: {
          '0%': { opacity: '0', transform: 'translateX(-20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.9)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        'bounce-gentle': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-5px)' },
        },
        'pulse-gentle': {
          '0%, 100%': { opacity: '0.7' },
          '50%': { opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 20px rgba(59, 130, 246, 0.5)' },
          '100%': { boxShadow: '0 0 30px rgba(59, 130, 246, 0.8)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        morphing: {
          '0%, 100%': { borderRadius: '20% 80% 30% 70% / 50% 20% 80% 50%' },
          '25%': { borderRadius: '70% 30% 50% 50% / 30% 80% 20% 70%' },
          '50%': { borderRadius: '50% 50% 80% 20% / 70% 30% 50% 80%' },
          '75%': { borderRadius: '30% 70% 20% 80% / 50% 50% 70% 30%' },
        },
        'gradient-x': {
          '0%, 100%': { backgroundSize: '200% 200%', backgroundPosition: 'left center' },
          '50%': { backgroundSize: '200% 200%', backgroundPosition: 'right center' },
        },
        'gradient-y': {
          '0%, 100%': { backgroundSize: '200% 200%', backgroundPosition: 'center top' },
          '50%': { backgroundSize: '200% 200%', backgroundPosition: 'center bottom' },
        },
        'gradient-xy': {
          '0%, 100%': { backgroundSize: '400% 400%', backgroundPosition: 'left center' },
          '50%': { backgroundSize: '400% 400%', backgroundPosition: 'right center' },
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
        // Enhanced Linear gradients
        'gradient-hero': 'linear-gradient(135deg, #1e3a8a 0%, #0f172a 30%, #1e40af 60%, #1e3a8a 100%)',
        'gradient-hero-modern': 'linear-gradient(135deg, #667eea 0%, #764ba2 25%, #f093fb 50%, #f5576c 75%, #4facfe 100%)',
        'gradient-blue-orange': 'linear-gradient(135deg, #1e3a8a 0%, #2563eb 25%, #f97316 75%, #ea580c 100%)',
        'gradient-blue-slate': 'linear-gradient(135deg, #1e40af 0%, #3b82f6 25%, #1e293b 75%, #0f172a 100%)',
        'gradient-service-blue': 'linear-gradient(135deg, #2563eb 0%, #3b82f6 25%, #1e40af 75%, #1d4ed8 100%)',
        'gradient-service-cyan': 'linear-gradient(135deg, #06b6d4 0%, #0891b2 25%, #1d4ed8 75%, #2563eb 100%)',
        'gradient-service-purple': 'linear-gradient(135deg, #a855f7 0%, #9333ea 25%, #4338ca 75%, #3730a3 100%)',
        'gradient-service-orange': 'linear-gradient(135deg, #f97316 0%, #ea580c 25%, #dc2626 75%, #b91c1c 100%)',
        'gradient-service-green': 'linear-gradient(135deg, #22c55e 0%, #16a34a 25%, #15803d 75%, #166534 100%)',
        'gradient-gray-white': 'linear-gradient(135deg, #f9fafb 0%, #ffffff 50%, #f3f4f6 100%)',
        'gradient-gray-blue': 'linear-gradient(135deg, #f9fafb 0%, #eff6ff 50%, #dbeafe 100%)',
        'gradient-orange-cta': 'linear-gradient(135deg, #f97316 0%, #ea580c 25%, #dc2626 50%, #b91c1c 75%, #dc2626 100%)',
        'gradient-dark-overlay': 'linear-gradient(135deg, rgba(30, 58, 138, 0.95) 0%, rgba(15, 23, 42, 0.98) 50%, rgba(30, 58, 138, 0.95) 100%)',
        'gradient-light-overlay': 'linear-gradient(135deg, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0.05) 50%, rgba(255, 255, 255, 0.1) 100%)',
        
        // Modern mesh gradients
        'mesh-gradient-1': 'radial-gradient(at 40% 20%, hsla(228,100%,74%,1) 0px, transparent 50%), radial-gradient(at 80% 0%, hsla(189,100%,56%,1) 0px, transparent 50%), radial-gradient(at 0% 50%, hsla(355,100%,93%,1) 0px, transparent 50%), radial-gradient(at 80% 50%, hsla(340,100%,76%,1) 0px, transparent 50%), radial-gradient(at 0% 100%, hsla(22,100%,77%,1) 0px, transparent 50%), radial-gradient(at 80% 100%, hsla(242,100%,70%,1) 0px, transparent 50%), radial-gradient(at 0% 0%, hsla(343,100%,76%,1) 0px, transparent 50%)',
        'mesh-gradient-2': 'radial-gradient(at 0% 0%, hsla(253,16%,7%,1) 0px, transparent 50%), radial-gradient(at 50% 0%, hsla(225,39%,25%,1) 0px, transparent 50%), radial-gradient(at 100% 0%, hsla(339,49%,30%,1) 0px, transparent 50%), radial-gradient(at 0% 100%, hsla(225,39%,25%,1) 0px, transparent 50%), radial-gradient(at 50% 100%, hsla(253,16%,7%,1) 0px, transparent 50%), radial-gradient(at 100% 100%, hsla(222,47%,11%,1) 0px, transparent 50%)',
        'mesh-gradient-3': 'radial-gradient(circle at 20% 80%, rgba(120, 119, 198, 0.3) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(255, 119, 198, 0.3) 0%, transparent 50%), radial-gradient(circle at 40% 40%, rgba(120, 200, 255, 0.3) 0%, transparent 50%)',
        
        // Animated gradients
        'animated-gradient': 'linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab)',
        'animated-gradient-slow': 'linear-gradient(-45deg, #1e3a8a, #2563eb, #3b82f6, #60a5fa, #93c5fd)',
        
        // Shimmer effects
        'shimmer': 'linear-gradient(110deg, rgba(255, 255, 255, 0) 40%, rgba(255, 255, 255, 0.5) 50%, rgba(255, 255, 255, 0) 60%)',
        'shimmer-dark': 'linear-gradient(110deg, rgba(0, 0, 0, 0) 40%, rgba(255, 255, 255, 0.1) 50%, rgba(0, 0, 0, 0) 60%)',
        
        // Glass morphism
        'glass': 'linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05))',
        'glass-dark': 'linear-gradient(135deg, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.05))',
        
        // Noise texture overlay
        'noise': "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E\")",
      },
      boxShadow: {
        // Enhanced existing shadows
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
        
        // Modern shadow system
        'soft': '0 2px 4px rgba(0, 0, 0, 0.04), 0 1px 2px rgba(0, 0, 0, 0.06)',
        'soft-md': '0 4px 8px rgba(0, 0, 0, 0.04), 0 2px 4px rgba(0, 0, 0, 0.06)',
        'soft-lg': '0 8px 16px rgba(0, 0, 0, 0.04), 0 4px 8px rgba(0, 0, 0, 0.06)',
        'soft-xl': '0 16px 32px rgba(0, 0, 0, 0.04), 0 8px 16px rgba(0, 0, 0, 0.06)',
        
        // Colored shadows
        'blue-soft': '0 4px 14px rgba(59, 130, 246, 0.15)',
        'blue-strong': '0 8px 25px rgba(59, 130, 246, 0.25)',
        'orange-soft': '0 4px 14px rgba(249, 115, 22, 0.15)',
        'orange-strong': '0 8px 25px rgba(249, 115, 22, 0.25)',
        'purple-soft': '0 4px 14px rgba(168, 85, 247, 0.15)',
        'purple-strong': '0 8px 25px rgba(168, 85, 247, 0.25)',
        'green-soft': '0 4px 14px rgba(34, 197, 94, 0.15)',
        'green-strong': '0 8px 25px rgba(34, 197, 94, 0.25)',
        'cyan-soft': '0 4px 14px rgba(6, 182, 212, 0.15)',
        'cyan-strong': '0 8px 25px rgba(6, 182, 212, 0.25)',
        
        // Glow effects
        'glow-blue': '0 0 20px rgba(59, 130, 246, 0.6), 0 0 40px rgba(59, 130, 246, 0.4)',
        'glow-orange': '0 0 20px rgba(249, 115, 22, 0.6), 0 0 40px rgba(249, 115, 22, 0.4)',
        'glow-purple': '0 0 20px rgba(168, 85, 247, 0.6), 0 0 40px rgba(168, 85, 247, 0.4)',
        'glow-green': '0 0 20px rgba(34, 197, 94, 0.6), 0 0 40px rgba(34, 197, 94, 0.4)',
        'glow-white': '0 0 20px rgba(255, 255, 255, 0.6), 0 0 40px rgba(255, 255, 255, 0.4)',
        
        // Inset shadows
        'inset-soft': 'inset 0 2px 4px rgba(0, 0, 0, 0.06)',
        'inset-strong': 'inset 0 4px 8px rgba(0, 0, 0, 0.1)',
        
        // Layered shadows
        'layered': '0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24)',
        'layered-hover': '0 3px 6px rgba(0, 0, 0, 0.15), 0 2px 4px rgba(0, 0, 0, 0.12)',
        'layered-strong': '0 10px 20px rgba(0, 0, 0, 0.15), 0 3px 6px rgba(0, 0, 0, 0.10)',
        'layered-xl': '0 20px 40px rgba(0, 0, 0, 0.1), 0 5px 10px rgba(0, 0, 0, 0.15)',
        
        // Neumorphism shadows
        'neu-flat': '6px 6px 12px rgba(0, 0, 0, 0.1), -6px -6px 12px rgba(255, 255, 255, 0.7)',
        'neu-raised': '6px 6px 12px rgba(0, 0, 0, 0.15), -6px -6px 12px rgba(255, 255, 255, 0.9)',
        'neu-inset': 'inset 6px 6px 12px rgba(0, 0, 0, 0.1), inset -6px -6px 12px rgba(255, 255, 255, 0.7)',
        
        // Glass morphism
        'glass': '0 8px 32px rgba(0, 0, 0, 0.1)',
        'glass-strong': '0 8px 32px rgba(0, 0, 0, 0.2), 0 2px 8px rgba(0, 0, 0, 0.1)',
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
