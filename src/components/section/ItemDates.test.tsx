import * as React from 'react'
import { screen, render } from '@testing-library/react'
import ItemDates from './ItemDates'

describe('<ItemDates />', () => {
  test('handles no dates', () => {
    render(<ItemDates from='' />)

    const sectionItemDates = screen.getByText('Error: No Item Dates')
    expect(sectionItemDates).toBeInTheDocument()
  })

  describe('handles badly formatted dates', () => {
    render(<ItemDates from='ABCD8' to='2020' />)
    const sectionItemDates = screen.getByText('Error: Dates Not Valid')

    expect(sectionItemDates).toBeInTheDocument()
  })

  test('bad from date', () => {
    render(<ItemDates from='2090' to='2007-05' />)
    const sectionItemDates = screen.getByText('Error: Dates Not Valid')

    expect(sectionItemDates).toBeInTheDocument()
  })

  test('bad to and from date', () => {
    render(<ItemDates to='111111' from='29470' />)

    const sectionItemDates = screen.getByText('Error: Dates Not Valid')
    expect(sectionItemDates).toBeInTheDocument()
  })
})

test('start date -> end date', () => {
  render(<ItemDates from='1970-01-01' to='2021-01-28' />)

  const sectionItemDates = screen.getByTestId('sectionItemDates')
  expect(sectionItemDates).toHaveTextContent('Jan 1970 - Jan 2021')
})

test('start date -> present (no end date)', () => {
  render(<ItemDates from='2012-05' />)

  const sectionItemDates = screen.getByTestId('sectionItemDates')
  expect(sectionItemDates).toBeInTheDocument()
  expect(sectionItemDates).toHaveTextContent('May 2012 - Present')
})

test('day, month, year date expressed as Month, Year', () => {
  render(<ItemDates from='1991-12-25' />)

  const sectionItemDates = screen.getByTestId('sectionItemDates')
  expect(sectionItemDates).toBeInTheDocument()
  expect(sectionItemDates).toHaveTextContent('Dec 1991 - Present')
})

test('month, year date expressed as Month, Year', () => {
  render(<ItemDates from='2020-10-27' to='2021-07-19' />)

  const sectionItemDates = screen.getByTestId('sectionItemDates')
  expect(sectionItemDates).toBeInTheDocument()
  expect(sectionItemDates).toHaveTextContent('Oct 2020 - Jul 2021')
})

test('dates must make chronological sense', () => {
  render(<ItemDates from='2021-06-14' to='2020-04-22' />)

  const sectionItemDates = screen.getByText('Error: Dates Not Chronological')
  expect(sectionItemDates).toBeInTheDocument()
})
