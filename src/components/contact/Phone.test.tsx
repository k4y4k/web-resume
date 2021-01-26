import * as React from 'react'
import { render, screen } from '@testing-library/react'
import Phone from './Phone'

describe('<Phone />', () => {
  test('handles no phone data', () => {
    render(<Phone />)

    const phone = screen.getByText('Error: No Phone')
    expect(phone).not.toBeFalsy()
  })

  test('displays phone number', () => {
    render(<Phone num='0123456789' />)

    const phone = screen.getByText('012 345 6789')
    expect(phone).not.toBeFalsy()
  })

  test.todo('has cute little phone logo')
})
