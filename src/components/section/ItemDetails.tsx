import * as React from 'react'
import tw, { css } from 'twin.macro'
import ReactMarkdown from 'react-markdown'

interface ItemDetailsTypes {
  // accepts markdown
  details?: string
}

const detailsStyles = css`
  ${tw`mt-2`}
  li {
    list-style-type: circle;
    list-style-position: inside;
  }
`

const ItemDetails = ({ details }: ItemDetailsTypes): JSX.Element | null => {
  if (details === '' || details === undefined) return null

  return (
    <div css={detailsStyles} data-testid='sectionItemDetails'>
      <ReactMarkdown children={details} />
    </div>
  )
}

export default ItemDetails
