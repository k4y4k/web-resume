import * as React from 'react'
import { screen, render } from '@testing-library/react'
import SectionContainer from './SectionContainer'

describe('<SectionContainer />', () => {
  test('composes title and >1  items', () => {
    render(<SectionContainer />)

    const title = screen.getByText('Error: No Section Title')
    expect(title).toBeInTheDocument()

    const item = screen.getAllByTestId('sectionItemContainer')
    expect(item.length).toBeGreaterThanOrEqual(1)
  })
})
