import * as React from 'react'
import ReactMarkdown from 'react-markdown'

interface ItemDetailsTypes {
  details?: string
}

const ItemDetails = ({
  details = '*this section intentionally left blank*',
}: ItemDetailsTypes): JSX.Element => (
  <div data-testid='sectionItemDetails'>
    <ReactMarkdown children={details} />
  </div>
)

export default ItemDetails
