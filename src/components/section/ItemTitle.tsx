import * as React from 'react'
import tw, { TwStyle } from 'twin.macro'

interface ItemTitleTypes {
  title: string | undefined
}

const itemTitleStyles = (): Array<TwStyle | string> => [tw`text-2xl uppercase`]

const ItemTitle = ({ title }: ItemTitleTypes): JSX.Element => {
  if (title === '' || title === undefined)
    return <h1 css={itemTitleStyles()}>Error: No Item Title</h1>

  return <h1 css={itemTitleStyles()}>{title}</h1>
}

export default ItemTitle
