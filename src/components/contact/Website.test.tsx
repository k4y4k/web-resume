import * as React from 'react'
import { render, screen } from '@testing-library/react'
import Website from './Website'

describe('<Website />', () => {
  test('handles no data', () => {
    render(<Website />)

    const website = screen.getByText('Error: No Website')
    expect(website).not.toBeFalsy()
  })

  test('displays website', () => {
    render(<Website url='example.com' />)

    const website = screen.getByText('example.com')
    expect(website).not.toBeFalsy()
  })

  test('links to website', () => {
    render(<Website url='example.com' />)

    const website = screen.getByText('example.com')
    expect(website).toHaveAttribute('href')
  })

  test('link opens in new tab', () => {
    render(<Website url='example.com' />)

    const website = screen.getByText('example.com')
    expect(website).toHaveAttribute('target')
  })

  test.todo('little website icon displayed next to link')
})
