import * as React from 'react'
import { render, screen } from '@testing-library/react'
import Phone from './Phone'

describe('<Phone />', () => {
  test('handles no phone data', () => {
    render(<Phone />)

    const phone = screen.getByTestId('phone')
    expect(phone).not.toBeFalsy()
    expect(phone).toHaveTextContent('Error: No Phone')
  })

  test('hides phone number by default', () => {
    render(<Phone num='0123456789' />)

    const phone = screen.getByTestId('phone')
    expect(phone).not.toHaveTextContent(/\W+/gi)
  })

  test('displays phone number', () => {
    render(<Phone num='0123456789' restrictDisplay={false} />)

    const phone = screen.getByText('012 345 6789')
    expect(phone).not.toBeFalsy()
  })

  test.todo('has cute little phone logo')
})
