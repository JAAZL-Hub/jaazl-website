import { render, screen } from '@testing-library/react'
import { NavigationLink, DropdownLink } from '../NavigationLink'

// Mock the LanguageContext
jest.mock('@/contexts/LanguageContext', () => ({
  useLanguage: () => ({
    language: 'en',
    toggleLanguage: jest.fn(),
  }),
}))

// Mock usePathname
jest.mock('next/navigation', () => ({
  usePathname: () => '/test-path',
}))

describe('NavigationLink', () => {
  it('renders navigation link with correct href', () => {
    render(
      <NavigationLink href="/test">
        Test Link
      </NavigationLink>
    )

    const link = screen.getByRole('link', { name: /test link/i })
    expect(link).toBeInTheDocument()
    expect(link).toHaveAttribute('href', '/test')
  })

  it('applies active styles when isActive is true', () => {
    render(
      <NavigationLink href="/test" isActive={true} scrolled={true}>
        Active Link
      </NavigationLink>
    )

    const link = screen.getByRole('link', { name: /active link/i })
    expect(link).toHaveClass('text-blue-900', 'bg-blue-50')
  })

  it('applies scrolled styles when scrolled is true', () => {
    render(
      <NavigationLink href="/test" scrolled={true}>
        Scrolled Link
      </NavigationLink>
    )

    const link = screen.getByRole('link', { name: /scrolled link/i })
    expect(link).toHaveClass('text-gray-800')
  })

  it('applies default styles when not scrolled', () => {
    render(
      <NavigationLink href="/test" scrolled={false}>
        Default Link
      </NavigationLink>
    )

    const link = screen.getByRole('link', { name: /default link/i })
    expect(link).toHaveClass('text-white')
  })

  it('applies custom className', () => {
    render(
      <NavigationLink href="/test" className="custom-class">
        Custom Link
      </NavigationLink>
    )

    const link = screen.getByRole('link', { name: /custom link/i })
    expect(link).toHaveClass('custom-class')
  })
})

describe('DropdownLink', () => {
  it('renders dropdown link with correct href', () => {
    render(
      <DropdownLink href="/dropdown" pathname="/current">
        Dropdown Link
      </DropdownLink>
    )

    const link = screen.getByRole('link', { name: /dropdown link/i })
    expect(link).toBeInTheDocument()
    expect(link).toHaveAttribute('href', '/dropdown')
  })

  it('applies active styles when pathname starts with href', () => {
    render(
      <DropdownLink href="/services" pathname="/services/test" scrolled={true}>
        Services Link
      </DropdownLink>
    )

    const link = screen.getByRole('link', { name: /services link/i })
    expect(link).toHaveClass('text-blue-900', 'bg-blue-50')
  })

  it('does not apply active styles when pathname does not match', () => {
    render(
      <DropdownLink href="/services" pathname="/about" scrolled={true}>
        Services Link
      </DropdownLink>
    )

    const link = screen.getByRole('link', { name: /services link/i })
    expect(link).not.toHaveClass('text-blue-900', 'bg-blue-50')
    expect(link).toHaveClass('text-gray-800')
  })
})