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
  summary?: string

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

const Seperator = tw.div`mx-2 inline-block sm:(block h-0 overflow-hidden)`

const itemContainerStyles = ({
  currentIndex,
  collectionLength,
}: // eslint-disable-next-line
ItemStyleTypes): Array<TwStyle | string | any> => [
  tw`flex flex-col p-6 m-6 my-0 border-b border-black bg-opacity-75`,
  tw`print:(print:p-0 print:m-0 print:mx-6 print:py-3 print:border-0)`,
  // don't have bottom border on last elemeent, even if it's odd
  currentIndex + 1 === collectionLength && tw`border-none`,
  tw`sm:(py-6 px-2)`,
]

const itemBylineStyles = (): Array<TwStyle | string> => [
  tw`my-1 italic`,
  tw`print:m-0`,
]

const ItemContainer = ({
  title,
  subtitle,
  fromDate,
  toDate,
  summary,
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
    // area and type
    if (studyType !== '' && area !== '') {
      studyTitle = `${studyType} of ${area}`
    }

    // area but no type (e.g. online cert)
    if (studyType === '' && area !== '') studyTitle = area

    if (courses !== undefined) {
      studyDetails = transformArrayToBulletPoints(courses)
    }
  }

  return (
    <div
      data-testid='sectionItemContainer'
      css={itemContainerStyles({ currentIndex, collectionLength })}
    >
      <Title title={title ?? studyTitle} />
      <div data-testid='byline' css={itemBylineStyles()}>
        <Subtitle subtitle={subtitle ?? institution} />
        <Seperator>|</Seperator>
        <Dates from={fromDate} to={toDate} />
      </div>
      <Details details={summary ?? studyDetails} />
    </div>
  )
}

export default ItemContainer
