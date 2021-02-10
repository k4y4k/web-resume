import * as React from 'react'
import { render, screen } from '@testing-library/react'
import ItemContainer from './ItemContainer'
import SectionContainer from './SectionContainer'

describe('<SectionContainer />', () => {
  test.only('composes title and >1  items', () => {
    const data = (
      <ItemContainer
        collectionLength={1}
        currentIndex={0}
        title=''
        subtitle=''
        fromDate=''
        toDate=''
        summary=''
      />
    )

    render(<SectionContainer children={data} title='Reason #8: Regret' />)

    const title = screen.getByText('Reason #8: Regret')
    expect(title).toBeInTheDocument()

    const item = screen.getAllByTestId('sectionItemContainer')
    expect(item.length).toBeGreaterThanOrEqual(1)

    expect(screen.getByTestId('sectionContainer')).toMatchSnapshot()
  })
})
