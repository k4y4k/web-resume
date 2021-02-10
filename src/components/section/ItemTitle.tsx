import * as React from 'react'
import tw, { css } from 'twin.macro'

interface ItemTitleTypes {
  title: string
}

const itemTitleStyles = css`
  ${tw`text-2xl font-thin uppercase`}
  ${tw`print:text-lg`}
`

const ItemTitle = ({ title }: ItemTitleTypes): JSX.Element | null => {
  if (title === '') return null

  return (
    <h1 data-testid='itemTitle' css={itemTitleStyles}>
      {title}
    </h1>
  )
}

export default ItemTitle
