import * as React from 'react'
import { render, screen } from '@testing-library/react'
import ItemContainer from './ItemContainer'
import SectionContainer from './SectionContainer'

describe('<SectionContainer />', () => {
  test('composes title and >1  items', () => {
    const Item = (
      <ItemContainer
        collectionLength={1}
        currentIndex={0}
        title=''
        subtitle=''
        fromDate=''
        toDate=''
        details=''
      />
    )
    render(<SectionContainer children={Item} title='Reason #8: Regret' />)

    const title = screen.getByText('Reason #8: Regret')
    expect(title).toBeInTheDocument()

    const item = screen.getAllByTestId('sectionItemContainer')
    expect(item.length).toBeGreaterThanOrEqual(1)
  })
})
