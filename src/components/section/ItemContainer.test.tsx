import * as React from 'react'
import { render, screen } from '@testing-library/react'
import ItemContainer from './ItemContainer'
const data = {
  company: 'Company',
  position: 'President',
  startDate: '2013-01-01',
  endDate: '2014-01-01',
  summary: 'Description...',
  highlights: ['Started the company'],
  link: 'https://duckduckgo.com',
}

describe('<ItemContainer />', () => {
  describe('experience item', () => {
    test('experience item', () => {
      render(
        <ItemContainer
          fromDate={data.startDate}
          summary={data.summary}
          toDate={data.endDate}
          title={data.position}
          subtitle={data.company}
          link={data.link}
        />
      )

      const title = screen.queryByText('Company')
      expect(title).toBeInTheDocument()

      const subtitle = screen.getByTestId('byline')
      expect(subtitle).toBeInTheDocument()

      const dates = screen.queryByTestId('sectionItemDates')
      expect(dates).toBeInTheDocument()

      const details = screen.queryByTestId('sectionItemDetails')
      expect(details).toBeInTheDocument()

      expect(screen.getByTestId('sectionItemContainer')).toMatchSnapshot()
    })
  })

  describe('education item', () => {
    test('education item', () => {
      render(
        <ItemContainer
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
      expect(byline).toHaveTextContent('University | 2011 - 2013')

      const list = screen.getByText('DB1101 - Basic SQL')
      expect(list).toBeInTheDocument()

      expect(screen.getByTestId('sectionItemContainer')).toMatchSnapshot()
    })

    test('no courses? get nothing', () => {
      render(
        <ItemContainer
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

  describe('conditionally add the seperator between name and date', () => {
    test('date only', () => {
      render(
        <ItemContainer
          fromDate={data.startDate}
          summary={data.summary}
          toDate={data.endDate}
          title={data.position}
          subtitle={''}
          link={data.link}
        />
      )

      expect(screen.getByTestId('sectionItemContainer')).toMatchSnapshot()
    })
  })
})
