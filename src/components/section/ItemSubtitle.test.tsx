import * as React from 'react'
import { render, screen } from '@testing-library/react'
import ItemSubtitle from './ItemSubtitle'

describe('<ItemSubtitle />', () => {
  test('handles no data', () => {
    render(<ItemSubtitle subtitle='' />)

    const subtitle = screen.getByText('Error: No Item Subtitle')
    expect(subtitle).toBeInTheDocument()
  })

  test('displays subtitle', () => {
    render(<ItemSubtitle subtitle='Yes, really! Really really!' />)

    const subtitle = screen.getByText('Yes, really! Really really!')
    expect(subtitle).toBeInTheDocument()
  })
})
