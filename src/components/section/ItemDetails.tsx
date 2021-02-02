import 'twin.macro'
import * as React from 'react'
import ReactMarkdown from 'react-markdown'

interface ItemDetailsTypes {
  // accepts markdown
  details?: string
}

const ItemDetails = ({ details }: ItemDetailsTypes): JSX.Element => {
  if (details === '' || details === undefined)
    return (
      <div data-testid='sectionItemDetails'>
        <ReactMarkdown>*this section intentionally left blank*</ReactMarkdown>
      </div>
    )

  return (
    <div tw='mb-4' data-testid='sectionItemDetails'>
      <ReactMarkdown children={details} />
    </div>
  )
}

export default ItemDetails
