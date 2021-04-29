import * as React from 'react'

interface ItemTitleTypes {
  title: string
}

const ItemTitle = ({ title }: ItemTitleTypes): JSX.Element | null => {
  if (title === '') return null

  return <h1 data-testid='itemTitle'>{title}</h1>
}

export default ItemTitle
