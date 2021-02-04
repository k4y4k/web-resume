import * as React from 'react'
import { render, screen } from '@testing-library/react'
import Website from './Website'

describe('<Website />', () => {
  test('handles no data', () => {
    render(<Website url='' />)

    const website = screen.getByText('Error: No Website')
    expect(website).not.toBeFalsy()
  })

  test('strips out protocol to display website', () => {
    render(<Website url='https://example.com' />)

    const website = screen.getByText('example.com')
    expect(website).not.toBeFalsy()
  })

  test('links to website', () => {
    render(<Website url='https://example.com' />)

    const website = screen.getByText('example.com')
    expect(website).toHaveAttribute('href', 'https://example.com')
  })

  test('link opens in new tab', () => {
    render(<Website url='https://example.com' />)

    const website = screen.getByText('example.com')
    expect(website).toHaveAttribute('target', '_blank')
  })
})
