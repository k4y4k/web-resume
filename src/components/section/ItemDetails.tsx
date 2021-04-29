import * as React from 'react'
import ReactMarkdown from 'react-markdown'

interface ItemDetailsTypes {
  // accepts markdown
  details?: string
}

const ItemDetails = ({ details }: ItemDetailsTypes): JSX.Element | null => {
  if (details === '' || details === undefined) return null

  return (
    <div data-testid='sectionItemDetails'>
      <ReactMarkdown children={details} />
    </div>
  )
}

export default ItemDetails
