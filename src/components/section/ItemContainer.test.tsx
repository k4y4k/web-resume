import * as React from 'react'
import { render, screen } from '@testing-library/react'
import ItemContainer from './ItemContainer'

describe('<ItemContainer />', () => {
  test('experience item', () => {
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

    const dates = screen.queryByTestId('sectionItemDates')
    expect(dates).not.toBeInTheDocument()

    const details = screen.queryByTestId('sectionItemDetails')
    expect(details).not.toBeInTheDocument()

    expect(screen.getByTestId('sectionItemContainer')).toMatchSnapshot()
  })

  describe('education item', () => {
    test('education item', () => {
      render(
        <ItemContainer
          currentIndex={0}
          collectionLength={1}
          institution='University'
          area='Software Development'
          studyType='Bachelor'
          fromDate='2011-01-01'
          toDate='2013-01-01'
          courses={['DB1101 - Basic SQL']}
        />
      )

      const title = screen.getByText('Bachelor of Software Development')
      expect(title).toBeInTheDocument()

      const byline = screen.getByTestId('byline')
      expect(byline).toHaveTextContent('University|2011 - 2013')

      const list = screen.getByText('DB1101 - Basic SQL')
      expect(list).toBeInTheDocument()

      expect(screen.getByTestId('sectionItemContainer')).toMatchSnapshot()
    })

    test('no courses? get nothing', () => {
      render(
        <ItemContainer
          currentIndex={0}
          collectionLength={1}
          institution='University'
          area='Software Development'
          studyType='Bachelor'
          fromDate='2011-01-01'
          toDate='2013-01-01'
        />
      )

      expect(screen.getByTestId('sectionItemContainer')).toMatchSnapshot()
    })
  })
})
