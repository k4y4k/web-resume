import * as React from 'react'
import { render, screen } from '@testing-library/react'
import Website from './Website'

describe('<Website />', () => {
  test('handles no data', () => {
    render(<Website url='' />)

    const website = screen.queryByTestId('contactWebsite')
    expect(website).not.toBeInTheDocument()
    expect(website).toMatchSnapshot()
  })

  test('strips out protocol to display website', () => {
    render(<Website url='https://example.com' />)

    const website = screen.getByTestId('contactWebsite')
    expect(website).toHaveTextContent('example.com')
  })

  test('links to website in new tab', () => {
    render(<Website url='https://example.com' />)

    const website = screen.getByTestId('contactWebsite')
    expect(website).toHaveAttribute('href', 'https://example.com')
    expect(website).toHaveAttribute('target', '_blank')
    expect(website).toMatchSnapshot()
  })
})
