import * as React from 'react'
import Title from './ItemTitle'
import Subtitle from './ItemSubtitle'
import Dates from './ItemDates'
import Details from './ItemDetails'
import tw from 'twin.macro'
import Highlights from './ItemHighlights'

interface ItemContainerTypes {
  title: string
  subtitle: string
  fromDate: string
  toDate?: string
  details: string
  highlights?: string[]
}

const Seperator = tw.div`mx-3 inline-block`

const ItemContainer = ({
  title,
  subtitle,
  fromDate,
  toDate,
  details,
  highlights,
}: ItemContainerTypes): JSX.Element => (
  <div data-testid='sectionItemContainer' tw='p-4 flex flex-col'>
    <Title title={title} />
    <div tw='my-1 italic'>
      <Subtitle subtitle={subtitle} />
      <Seperator>|</Seperator>
      <Dates from={fromDate} to={toDate} />
    </div>
    <Details details={details} />
    <Highlights highlights={highlights} />
  </div>
)

export default ItemContainer
