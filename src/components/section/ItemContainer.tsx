import * as React from 'react'
import tw, { TwStyle } from 'twin.macro'
import Dates from './ItemDates'
import Details from './ItemDetails'
import Subtitle from './ItemSubtitle'
import Title from './ItemTitle'
import transformArrayToBulletPoints from '../../helpers/transformArrayToBulletPoints'

interface ItemContainerTypes {
  // experience
  title?: string
  subtitle?: string
  fromDate: string
  toDate?: string
  details?: string

  // education
  institution?: string
  area?: string
  studyType?: string
  courses?: string[]

  // css logic
  currentIndex: number
  collectionLength: number
}

interface ItemStyleTypes {
  currentIndex: number
  collectionLength: number
}

const Seperator = tw.div`mx-2 inline-block`

const itemContainerStyles = ({
  currentIndex,
  collectionLength,
}: // eslint-disable-next-line
ItemStyleTypes): Array<TwStyle | string | any> => [
  tw`flex flex-col p-6 m-6 my-0 bg-opacity-75`,

  // borders between elements
  tw`border-b border-black`,

  // don't have bottom border on last elemeent, even if it's odd
  currentIndex + 1 === collectionLength && tw`border-none`,
]

const ItemContainer = ({
  title,
  subtitle,
  fromDate,
  toDate,
  details,
  institution,
  area,
  studyType,
  courses,
  currentIndex,
  collectionLength,
}: ItemContainerTypes): JSX.Element => {
  let studyTitle = ''
  let studyDetails = ''

  if (studyType !== undefined && area !== undefined) {
    studyTitle = `${studyType} of ${area}`
  }

  if (courses !== undefined) {
    studyDetails = transformArrayToBulletPoints(courses)
  }

  console.log({ currentIndex, collectionLength })

  return (
    <div
      data-testid='sectionItemContainer'
      css={itemContainerStyles({ currentIndex, collectionLength })}
    >
      <Title title={title ?? studyTitle} />
      <div tw='my-1 italic'>
        <Subtitle subtitle={subtitle ?? institution} />
        <Seperator>|</Seperator>
        <Dates from={fromDate} to={toDate} />
      </div>
      <Details details={details ?? studyDetails} />
    </div>
  )
}

export default ItemContainer
