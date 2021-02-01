import * as React from 'react'
import ReactMarkdown from 'react-markdown'
import 'twin.macro'

interface ItemDetailsTypes {
  // accepts markdown
  details: string
}

const ItemDetails = ({ details }: ItemDetailsTypes): JSX.Element => {
  if (details === '')
    return (
      <div data-testid='sectionItemDetails'>
        {' '}
        <ReactMarkdown>
          *this section intentionally left blank*
        </ReactMarkdown>{' '}
      </div>
    )

  return (
    <div tw='mb-4' data-testid='sectionItemDetails'>
      <ReactMarkdown children={details} />
    </div>
  )
}

export default ItemDetails
