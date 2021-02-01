import * as React from 'react'
import 'twin.macro'

interface ItemSubtitleTypes {
  subtitle: string
}

const ItemSubtitle = ({ subtitle }: ItemSubtitleTypes): JSX.Element => {
  if (subtitle === '') return <h2>Error: No Item Subtitle</h2>

  return <h2 tw='inline-block'>{subtitle}</h2>
}

export default ItemSubtitle
