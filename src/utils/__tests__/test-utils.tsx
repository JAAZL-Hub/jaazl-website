import { ReactElement } from 'react'
import { render, RenderOptions } from '@testing-library/react'
import { LanguageProvider } from '@/contexts/LanguageContext'

// Custom render function that includes providers
const AllTheProviders = ({ children }: { children: React.ReactNode }) => {
  return (
    <LanguageProvider>
      {children}
    </LanguageProvider>
  )
}

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>
) => render(ui, { wrapper: AllTheProviders, ...options })

// Re-export everything
export * from '@testing-library/react'

// Override render method
export { customRender as render }

// Common test utilities
export const testUtils = {
  // Mock window dimensions
  mockWindowDimensions: (width: number, height: number) => {
    Object.defineProperty(window, 'innerWidth', {
      writable: true,
      configurable: true,
      value: width,
    })
    Object.defineProperty(window, 'innerHeight', {
      writable: true,
      configurable: true,
      value: height,
    })
    window.dispatchEvent(new Event('resize'))
  },

  // Mock scroll position
  mockScrollPosition: (x: number, y: number) => {
    Object.defineProperty(window, 'scrollX', {
      writable: true,
      configurable: true,
      value: x,
    })
    Object.defineProperty(window, 'scrollY', {
      writable: true,
      configurable: true,
      value: y,
    })
    window.dispatchEvent(new Event('scroll'))
  },

  // Wait for next tick
  waitForNextTick: () => new Promise(resolve => setTimeout(resolve, 0)),

  // Create mock intersection observer entry
  createMockIntersectionObserverEntry: (isIntersecting: boolean = true) => ({
    isIntersecting,
    intersectionRatio: isIntersecting ? 1 : 0,
    boundingClientRect: {
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      width: 0,
      height: 0,
      x: 0,
      y: 0,
      toJSON: () => {},
    },
    rootBounds: null,
    target: document.createElement('div'),
    time: Date.now(),
  }),

  // Create mock service data
  createMockService: (overrides = {}) => ({
    id: 'test-service',
    name: { en: 'Test Service', ar: 'خدمة تجريبية' },
    slug: 'test-service',
    categoryId: 'test-category',
    shortDescription: { en: 'Test description', ar: 'وصف تجريبي' },
    fullDescription: { en: 'Full test description', ar: 'وصف تجريبي كامل' },
    image: '/images/test-service.jpg',
    features: [
      { en: 'Feature 1', ar: 'ميزة 1' },
      { en: 'Feature 2', ar: 'ميزة 2' }
    ],
    benefits: [
      { en: 'Benefit 1', ar: 'فائدة 1' },
      { en: 'Benefit 2', ar: 'فائدة 2' }
    ],
    applications: [
      { en: 'Application 1', ar: 'تطبيق 1' },
      { en: 'Application 2', ar: 'تطبيق 2' }
    ],
    relatedServices: [],
    ...overrides,
  }),

  // Create mock industry data
  createMockIndustry: (overrides = {}) => ({
    id: 'test-industry',
    name: { en: 'Test Industry', ar: 'صناعة تجريبية' },
    slug: 'test-industry',
    description: { en: 'Test industry description', ar: 'وصف الصناعة التجريبية' },
    image: '/images/test-industry.jpg',
    services: [],
    challenges: [
      { en: 'Challenge 1', ar: 'تحدي 1' },
      { en: 'Challenge 2', ar: 'تحدي 2' }
    ],
    solutions: [
      { en: 'Solution 1', ar: 'حل 1' },
      { en: 'Solution 2', ar: 'حل 2' }
    ],
    caseStudies: [],
    ...overrides,
  }),
}