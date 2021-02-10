import * as React from 'react'
import tw, { TwStyle } from 'twin.macro'

interface ItemTitleTypes {
  title: string | undefined
}

const itemTitleStyles = (): Array<TwStyle | string> => [
  tw`text-2xl uppercase`,
  tw`print:text-lg font-black`,
]

const ItemTitle = ({ title }: ItemTitleTypes): JSX.Element | null => {
  if (title === '') return null

  return (
    <h1 data-testid='itemTitle' css={itemTitleStyles()}>
      {title}
    </h1>
  )
}

export default ItemTitle
