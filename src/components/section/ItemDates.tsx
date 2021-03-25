import * as React from 'react'
import tw, { TwStyle } from 'twin.macro'
import customParseFormat from 'dayjs/plugin/customParseFormat'
import dayjs from 'dayjs'
import timezone from 'dayjs/plugin/timezone'
import utc from 'dayjs/plugin/utc'

interface ItemDatesTypes {
  to?: string
  from: string
}

const datesStyles = (): Array<TwStyle | string> => [
  tw`inline-block`,
  tw`print:text-sm`,
]

const ItemDates = ({ to, from }: ItemDatesTypes): JSX.Element | null => {
  if (from === '') return null

  dayjs.extend(customParseFormat)
  dayjs.extend(utc)
  dayjs.extend(timezone)

  const toDate = dayjs(to, ['YYYY-MM-DD', 'YYYY-MM', 'YYYY'], true)
  const fromDate = dayjs(from, ['YYYY-MM-DD', 'YYYY-MM', 'YYYY'], true)

  const isFromDateValid = fromDate.isValid()
  const isToDateValid = toDate.isValid()

  // no to date / "to present"
  if (from !== '' && to === '')
    return (
      <p css={datesStyles()} data-testid='sectionItemDates'>
        {fromDate.format('MMM YYYY')} - Present
      </p>
    )

  // dates not valid / supplied to date invalid
  if (!isFromDateValid || !isToDateValid)
    return (
      <p data-testid='sectionItemDates' css={datesStyles()}>
        Error: Dates Not Valid
      </p>
    )

  // to later than from
  if (fromDate > toDate)
    return (
      <p data-testid='sectionItemDates' css={datesStyles()}>
        Error: Dates Not Chronological
      </p>
    )

  // just years
  // we assume that anything set to Jan 01 20XX just wants 20XX

  // // get 20XX
  const fromDateYear = fromDate.get('year')
  const toDateYear = toDate.get('year')

  // check for sameness
  if (
    fromDate.isSame(`${fromDateYear}-01-01`, 'day') &&
    toDate.isSame(`${toDateYear}-01-01`, 'day')
  )
    if (fromDate.isSame(toDate, 'year'))
      // have two 20XX "just years" dates. Now, are they the same year?
      return (
        // yes
        <p css={datesStyles()} data-testid='sectionItemDates'>
          {fromDate.format('YYYY')}
        </p>
      )
    else
      return (
        // no
        <p css={datesStyles()} data-testid='sectionItemDates'>
          {fromDate.format('YYYY')} - {toDate.format('YYYY')}
        </p>
      )

  // same date (one day event?)
  if (fromDate.isSame(toDate, 'day'))
    return (
      <p css={datesStyles()} data-testid='sectionItemDates'>
        {toDate.format('MMM YYYY')}
      </p>
    )

  return (
    <p css={datesStyles()} data-testid='sectionItemDates'>
      {fromDate.format('MMM YYYY')} - {toDate.format('MMM YYYY')}
    </p>
  )
}

export default ItemDates
