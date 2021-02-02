import 'twin.macro'
import * as React from 'react'

interface ItemTitleTypes {
  title: string | undefined
}

const ItemTitle = ({ title }: ItemTitleTypes): JSX.Element => {
  if (title === '' || title === undefined) return <h1>Error: No Item Title</h1>

  return <h1 tw='uppercase font-black text-2xl'>{title}</h1>
}

export default ItemTitle
