import * as React from 'react'
import { render, screen } from '@testing-library/react'
import ItemSubtitle from './ItemSubtitle'

describe('<ItemSubtitle />', () => {
  test('handles no data', () => {
    render(<ItemSubtitle subtitle='' />)

    const subtitle = screen.queryByTestId('itemSubtitle')
    expect(subtitle).not.toBeInTheDocument()
    expect(subtitle).toMatchSnapshot()
  })

  test('displays subtitle', () => {
    render(<ItemSubtitle subtitle='Yes, really! Really really!' />)

    const subtitle = screen.getByTestId('itemSubtitle')
    expect(subtitle).toHaveTextContent('Yes, really! Really really!')
    expect(subtitle).toMatchSnapshot()
  })
})
