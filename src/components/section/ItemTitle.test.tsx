import * as React from 'react'
import { screen, render } from '@testing-library/react'
import ItemTitle from './ItemTitle'

describe('<ItemTitle />', () => {
  test('handles no data', () => {
    render(<ItemTitle title='' />)

    const title = screen.getByText('Error: No Item Title')
    expect(title).not.toBeFalsy()
  })

  test('displays title', () => {
    render(<ItemTitle title='My Frankly Astounding Thing' />)

    const title = screen.getByText('My Frankly Astounding Thing')
    expect(title).toBeInTheDocument()
  })
})
