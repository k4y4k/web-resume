import * as React from 'react'

interface ItemTitleTypes {
  title?: string
}

const ItemTitle = ({
  title = 'Error: No Item Title',
}: ItemTitleTypes): JSX.Element => <h1>{title}</h1>

export default ItemTitle
