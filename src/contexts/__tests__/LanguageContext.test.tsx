import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import { LanguageProvider, useLanguage } from '../LanguageContext'

// Test component to consume the context
const TestComponent = () => {
  const { language, toggleLanguage } = useLanguage()
  
  return (
    <div>
      <div data-testid="current-language">{language}</div>
      <button onClick={toggleLanguage} data-testid="toggle-language">
        Toggle Language
      </button>
      <div data-testid="html-dir">{document.documentElement.dir}</div>
      <div data-testid="html-lang">{document.documentElement.lang}</div>
    </div>
  )
}

// Mock localStorage
const localStorageMock = {
  getItem: jest.fn(),
  setItem: jest.fn(),
  removeItem: jest.fn(),
  clear: jest.fn(),
}
Object.defineProperty(window, 'localStorage', {
  value: localStorageMock,
})

describe('LanguageContext', () => {
  beforeEach(() => {
    localStorageMock.getItem.mockClear()
    localStorageMock.setItem.mockClear()
    document.documentElement.dir = 'ltr'
    document.documentElement.lang = 'en'
  })

  it('provides default language as English', () => {
    localStorageMock.getItem.mockReturnValue(null)

    render(
      <LanguageProvider>
        <TestComponent />
      </LanguageProvider>
    )

    expect(screen.getByTestId('current-language')).toHaveTextContent('en')
  })

  it('loads saved language from localStorage', () => {
    localStorageMock.getItem.mockReturnValue('ar')

    render(
      <LanguageProvider>
        <TestComponent />
      </LanguageProvider>
    )

    expect(screen.getByTestId('current-language')).toHaveTextContent('ar')
  })

  it('toggles language from English to Arabic', async () => {
    localStorageMock.getItem.mockReturnValue('en')

    render(
      <LanguageProvider>
        <TestComponent />
      </LanguageProvider>
    )

    expect(screen.getByTestId('current-language')).toHaveTextContent('en')

    fireEvent.click(screen.getByTestId('toggle-language'))

    await waitFor(() => {
      expect(screen.getByTestId('current-language')).toHaveTextContent('ar')
    })

    expect(localStorageMock.setItem).toHaveBeenCalledWith('jaazl-language', 'ar')
  })

  it('toggles language from Arabic to English', async () => {
    localStorageMock.getItem.mockReturnValue('ar')

    render(
      <LanguageProvider>
        <TestComponent />
      </LanguageProvider>
    )

    expect(screen.getByTestId('current-language')).toHaveTextContent('ar')

    fireEvent.click(screen.getByTestId('toggle-language'))

    await waitFor(() => {
      expect(screen.getByTestId('current-language')).toHaveTextContent('en')
    })

    expect(localStorageMock.setItem).toHaveBeenCalledWith('jaazl-language', 'en')
  })

  it('sets HTML dir attribute to rtl for Arabic', () => {
    localStorageMock.getItem.mockReturnValue('ar')

    render(
      <LanguageProvider>
        <TestComponent />
      </LanguageProvider>
    )

    expect(document.documentElement.dir).toBe('rtl')
    expect(document.documentElement.lang).toBe('ar')
  })

  it('sets HTML dir attribute to ltr for English', () => {
    localStorageMock.getItem.mockReturnValue('en')

    render(
      <LanguageProvider>
        <TestComponent />
      </LanguageProvider>
    )

    expect(document.documentElement.dir).toBe('ltr')
    expect(document.documentElement.lang).toBe('en')
  })

  it('throws error when useLanguage is used outside provider', () => {
    // Suppress console.error for this test
    jest.spyOn(console, 'error').mockImplementation(() => {})

    expect(() => {
      render(<TestComponent />)
    }).toThrow('useLanguage must be used within a LanguageProvider')

    console.error.mockRestore()
  })
})