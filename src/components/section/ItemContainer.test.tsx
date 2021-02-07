import * as React from 'react'
import { render, screen } from '@testing-library/react'
import ItemContainer from './ItemContainer'

describe('<ItemContainer />', () => {
  test('composes all elements of a section item', () => {
    render(
      <ItemContainer
        currentIndex={0}
        collectionLength={1}
        title=''
        subtitle=''
        fromDate=''
        summary=''
      />
    )

    const title = screen.getByText('Error: No Item Title')
    expect(title).toBeInTheDocument()

    const subtitle = screen.getByText('Error: No Item Subtitle')
    expect(subtitle).toBeInTheDocument()

    const dates = screen.getByText('Error: No Item Dates')
    expect(dates).toBeInTheDocument()

    const details = screen.getByTestId('sectionItemDetails')
    expect(details).toHaveTextContent('this section intentionally left blank')
  })
})
