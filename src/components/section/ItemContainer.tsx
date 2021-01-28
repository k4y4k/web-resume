import * as React from 'react'
import Title from './ItemTitle'
import Subtitle from './ItemSubtitle'
import Dates from './ItemDates'
import Details from './ItemDetails'

interface ItemContainerTypes {
  title?: string
  subtitle?: string
  fromDate?: string
  toDate?: string
  details?: string
}

const ItemContainer = ({
  title,
  subtitle,
  fromDate,
  toDate,
  details,
}: ItemContainerTypes): JSX.Element => (
  <>
    <Title title={title} />
    <Subtitle subtitle={subtitle} />
    <Dates from={fromDate} to={toDate} />
    <Details details={details} />
  </>
)

export default ItemContainer
