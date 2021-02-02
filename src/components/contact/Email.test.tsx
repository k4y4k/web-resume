import * as React from 'react'
import { render, screen } from '@testing-library/react'
import Email from './Email'

describe('<Email/>', () => {
  test('Handles no data case properly', () => {
    render(<Email email='' />)
    const email = screen.getByText('Error: No Email')

    expect(email).not.toBeFalsy()
  })

  test('displays email, properly formatted', () => {
    render(<Email email='kayak@example.com' />)

    const regex = /\S+@\S+\.\S+/
    const email = screen.getByText(regex)

    expect(email).not.toBeFalsy()
  })

  test('mailto: link', () => {
    render(<Email email='kayak@example.com' />)

    const regex = /\S+@\S+\.\S+/
    const email = screen.getByText(regex)

    expect(email).toHaveAttribute('href', 'mailto:kayak@example.com')
  })
})
