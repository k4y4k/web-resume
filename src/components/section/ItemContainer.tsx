import * as React from 'react'
import Dates from './ItemDates'
import Details from './ItemDetails'
import Highlights from './ItemHighlights'
import Subtitle from './ItemSubtitle'
import Title from './ItemTitle'
import transformArrayToBulletPoints from '../../helpers/transformArrayToBulletPoints'
import tw from 'twin.macro'

interface ItemContainerTypes {
  // experience
  title?: string
  subtitle?: string
  fromDate: string
  toDate?: string
  details?: string
  highlights?: string[]

  // education
  institution?: string
  area?: string
  studyType?: string
  courses?: string[]
}

const Seperator = tw.div`mx-2 inline-block`

const ItemContainer = ({
  title,
  subtitle,
  fromDate,
  toDate,
  details,
  highlights,
  institution,
  area,
  studyType,
  courses,
}: ItemContainerTypes): JSX.Element => {
  let studyTitle = ''
  let studyDetails = ''

  if (studyType !== undefined && area !== undefined) {
    studyTitle = `${studyType} of ${area}`
  }

  if (courses !== undefined) {
    studyDetails = transformArrayToBulletPoints(courses)
  }

  return (
    <div data-testid='sectionItemContainer' tw='p-4 flex flex-col'>
      <Title title={title ?? studyTitle} />
      <div tw='my-1 italic'>
        <Subtitle subtitle={subtitle ?? institution} />
        <Seperator>|</Seperator>
        <Dates from={fromDate} to={toDate} />
      </div>
      <Details details={details ?? studyDetails} />
      {highlights !== undefined && <Highlights highlights={highlights} />}
    </div>
  )
}

export default ItemContainer
