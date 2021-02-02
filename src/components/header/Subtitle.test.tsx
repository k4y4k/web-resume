import * as React from 'react'
import { render, screen } from '@testing-library/react'
import Subtitle from './Subtitle'

describe('<Subtitle />', () => {
  test('Handles not having data', () => {
    render(<Subtitle subtitle='' />)
    const subtitle = screen.getByText('Error: No Subtitle')

    expect(subtitle).not.toBeFalsy()
  })

  test('Displays subtitle', () => {
    render(<Subtitle subtitle='lead singer of kayak and the kayaks' />)
    const subtitle = screen.getByText('lead singer of kayak and the kayaks')

    expect(subtitle).not.toBeFalsy()
  })
})
