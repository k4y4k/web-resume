import * as React from 'react'
import tw, { TwStyle } from 'twin.macro'
import ReactMarkdown from 'react-markdown'

interface ItemDetailsTypes {
  // accepts markdown
  details?: string
}

const detailsStyles = (): Array<TwStyle | string> => [tw`mt-2`]

const ItemDetails = ({ details }: ItemDetailsTypes): JSX.Element => {
  if (details === '' || details === undefined)
    return (
      <div css={detailsStyles()} data-testid='sectionItemDetails'>
        <ReactMarkdown>*this section intentionally left blank*</ReactMarkdown>
      </div>
    )

  return (
    <div css={detailsStyles()} data-testid='sectionItemDetails'>
      <ReactMarkdown children={details} />
    </div>
  )
}

export default ItemDetails
