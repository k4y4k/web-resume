import * as React from 'react'
import tw, { css } from 'twin.macro'
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

  // link
  link?: string
}

const itemStyles = css`
  ${tw`my-4`}

  :nth-of-type(1) {
    ${tw`mt-2`}
  }
`

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
  link,
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
    <div data-testid='sectionItemContainer' css={itemStyles}>
      <Title title={title ?? studyTitle} />
      <div data-testid='byline' tw='italic'>
        {subtitle !== undefined || institution !== undefined ? (
          <>
            <Subtitle
              link={link ?? undefined}
              subtitle={subtitle ?? institution}
            />
            {' | '}
          </>
        ) : null}

        <Dates from={fromDate} to={toDate} />
      </div>
      <Details details={summary ?? studyDetails} />
    </div>
  )
}

export default ItemContainer
