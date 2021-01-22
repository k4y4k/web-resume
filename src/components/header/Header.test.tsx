import * as React from 'react'
import { screen, render } from '@testing-library/react'
import Header from './Header'

describe('<Header />', () => {
  test('Handles not having data', () => {
    render(<Header />)

    const name = screen.getByText('Error: No Name')
    const subtitle = screen.getByText('Error: No Subtitle')

    expect(name).not.toBeFalsy()
    expect(subtitle).not.toBeFalsy()
  })

  test('displays header', () => {
    render(<Header name='kayak' subtitle='CEO of supermarket cookie debates' />)

    const name = screen.getByText('kayak')
    const subtitle = screen.getByText('CEO of supermarket cookie debates')

    expect(name).not.toBeFalsy()
    expect(subtitle).not.toBeFalsy()
  })
})
