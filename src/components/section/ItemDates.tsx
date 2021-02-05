import * as React from 'react'
import tw, { TwStyle } from 'twin.macro'
import customParseFormat from 'dayjs/plugin/customParseFormat'
import dayjs from 'dayjs'

interface ItemDatesTypes {
  to?: string
  from: string
}

const datesStyles = (): Array<TwStyle | string> => [
  tw`inline-block`,
  tw`print:text-sm`,
]

const ItemDates = ({ to, from }: ItemDatesTypes): JSX.Element => {
  // no dates
  if (to === undefined || to === '')
    if (from === undefined || from === '')
      return <p css={datesStyles()}>Error: No Item Dates</p>

  dayjs.extend(customParseFormat)

  const toDate = dayjs(to, ['YYYY-MM-DD', 'YYYY-MM'], true)
  const fromDate = dayjs(from, ['YYYY-MM-DD', 'YYYY-MM'], true)

  // dates not valid
  if (!fromDate.isValid() || (to !== undefined && !toDate.isValid()))
    return <p css={datesStyles()}>Error: Dates Not Valid</p>

  // to later than from
  if (fromDate > toDate)
    return <p css={datesStyles()}>Error: Dates Not Chronological</p>

  // no to date / "to present"
  if (from !== undefined && to === undefined)
    return (
      <p css={datesStyles()} data-testid='sectionItemDates'>
        {fromDate.format('MMM YYYY')} - Present
      </p>
    )

  return (
    <p css={datesStyles()} data-testid='sectionItemDates'>
      {fromDate.format('MMM YYYY')} - {toDate.format('MMM YYYY')}
    </p>
  )
}

export default ItemDates
