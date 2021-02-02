import * as React from 'react'
import { render, screen } from '@testing-library/react'
import ItemDetails from './ItemDetails'

describe('<ItemDetails />', () => {
  test('no data', () => {
    render(<ItemDetails details='' />)

    const details = screen.getByTestId('sectionItemDetails')
    expect(details).toHaveTextContent('this section intentionally left blank')
  })

  test('renders markdown', () => {
    const string = `
- a
- b
- c
`

    render(<ItemDetails details={string} />)

    const details = screen.getByTestId('sectionItemDetails')
    expect(details).toBeInTheDocument()

    expect(details).toHaveTextContent('abc')
  })
})
