import { render, screen, fireEvent } from '@testing-library/react'
import { ErrorBoundary, HeaderErrorBoundary, ComponentErrorBoundary } from '../ErrorBoundary'

// Mock component that throws an error
const ThrowError = ({ shouldThrow = false }: { shouldThrow?: boolean }) => {
  if (shouldThrow) {
    throw new Error('Test error')
  }
  return <div>No error</div>
}

describe('ErrorBoundary', () => {
  beforeEach(() => {
    jest.spyOn(console, 'error').mockImplementation(() => {})
  })

  afterEach(() => {
    jest.restoreAllMocks()
  })

  it('renders children when there is no error', () => {
    render(
      <ErrorBoundary>
        <ThrowError shouldThrow={false} />
      </ErrorBoundary>
    )

    expect(screen.getByText('No error')).toBeInTheDocument()
  })

  it('renders error UI when there is an error', () => {
    render(
      <ErrorBoundary>
        <ThrowError shouldThrow={true} />
      </ErrorBoundary>
    )

    expect(screen.getByText('Oops! Something went wrong')).toBeInTheDocument()
    expect(screen.getByText('We apologize for the inconvenience. An unexpected error has occurred.')).toBeInTheDocument()
  })

  it('displays custom fallback UI when provided', () => {
    const customFallback = <div>Custom error message</div>

    render(
      <ErrorBoundary fallback={customFallback}>
        <ThrowError shouldThrow={true} />
      </ErrorBoundary>
    )

    expect(screen.getByText('Custom error message')).toBeInTheDocument()
    expect(screen.queryByText('Oops! Something went wrong')).not.toBeInTheDocument()
  })

  it('provides retry functionality', () => {
    render(
      <ErrorBoundary>
        <ThrowError shouldThrow={true} />
      </ErrorBoundary>
    )

    const retryButton = screen.getByText('Try Again')
    expect(retryButton).toBeInTheDocument()

    fireEvent.click(retryButton)
    // After retry, error boundary should reset
    expect(screen.getByText('No error')).toBeInTheDocument()
  })

  it('includes support information', () => {
    render(
      <ErrorBoundary>
        <ThrowError shouldThrow={true} />
      </ErrorBoundary>
    )

    expect(screen.getByText('Call Support')).toBeInTheDocument()
    expect(screen.getByText('Contact Form')).toBeInTheDocument()
  })
})

describe('HeaderErrorBoundary', () => {
  beforeEach(() => {
    jest.spyOn(console, 'error').mockImplementation(() => {})
  })

  afterEach(() => {
    jest.restoreAllMocks()
  })

  it('renders custom header fallback on error', () => {
    render(
      <HeaderErrorBoundary>
        <ThrowError shouldThrow={true} />
      </HeaderErrorBoundary>
    )

    expect(screen.getByText('JAAZL')).toBeInTheDocument()
    expect(screen.getByText('Navigation temporarily unavailable')).toBeInTheDocument()
  })
})

describe('ComponentErrorBoundary', () => {
  beforeEach(() => {
    jest.spyOn(console, 'error').mockImplementation(() => {})
  })

  afterEach(() => {
    jest.restoreAllMocks()
  })

  it('renders component-specific fallback on error', () => {
    render(
      <ComponentErrorBoundary componentName="TestComponent">
        <ThrowError shouldThrow={true} />
      </ComponentErrorBoundary>
    )

    expect(screen.getByText('TestComponent component temporarily unavailable')).toBeInTheDocument()
  })

  it('renders generic fallback when no component name provided', () => {
    render(
      <ComponentErrorBoundary>
        <ThrowError shouldThrow={true} />
      </ComponentErrorBoundary>
    )

    expect(screen.getByText('Component temporarily unavailable')).toBeInTheDocument()
  })
})