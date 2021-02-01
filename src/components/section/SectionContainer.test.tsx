import * as React from 'react'
import { screen, render } from '@testing-library/react'
import SectionContainer from './SectionContainer'
import ItemContainer from './ItemContainer'

describe('<SectionContainer />', () => {
  test('composes title and >1  items', () => {
    const Item = (
      <ItemContainer title='' subtitle='' fromDate='' toDate='' details='' />
    )
    render(<SectionContainer children={Item} title='Reason #8: Regret' />)

    const title = screen.getByText('Reason #8: Regret')
    expect(title).toBeInTheDocument()

    const item = screen.getAllByTestId('sectionItemContainer')
    expect(item.length).toBeGreaterThanOrEqual(1)
  })
})
