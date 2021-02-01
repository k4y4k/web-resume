import * as React from 'react'
import dayjs from 'dayjs'
import customParseFormat from 'dayjs/plugin/customParseFormat'
import 'twin.macro'

interface ItemDatesTypes {
  to?: string
  from: string
}

const ItemDates = ({ to, from }: ItemDatesTypes): JSX.Element => {
  // no dates
  if (to === undefined || to === '')
    if (from === undefined || from === '') return <p>Error: No Item Dates</p>

  dayjs.extend(customParseFormat)

  const toDate = dayjs(to, ['YYYY-MM-DD', 'YYYY-MM'], true)
  const fromDate = dayjs(from, ['YYYY-MM-DD', 'YYYY-MM'], true)

  // dates not valid
  if (!fromDate.isValid() || (to !== undefined && !toDate.isValid()))
    return <p>Error: Dates Not Valid</p>

  // to later than from
  if (fromDate > toDate) return <p>Error: Dates Not Chronological</p>

  // no to date / "to present"
  if (from !== undefined && to === undefined)
    return (
      <p data-testid='sectionItemDates'>
        {fromDate.format('MMM YYYY')} - Present
      </p>
    )

  return (
    <p tw='inline-block' data-testid='sectionItemDates'>
      {fromDate.format('MMM YYYY')} - {toDate.format('MMM YYYY')}
    </p>
  )
}

export default ItemDates
