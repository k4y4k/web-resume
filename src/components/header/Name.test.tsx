import * as React from 'react'
import { render, screen } from '@testing-library/react'
import Name from './Name'

describe('<Name />', () => {
  test('Handles not having any data properly', () => {
    render(<Name />)

    const name = screen.getByText('Error: No Name')

    expect(name).not.toBeFalsy()
  })

  test('displays name', () => {
    render(<Name name='kayak kayak' />)

    const name = screen.getByText('kayak kayak')

    expect(name).not.toBeFalsy()
  })
})
