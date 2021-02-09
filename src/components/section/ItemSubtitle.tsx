import 'twin.macro'
import * as React from 'react'

interface ItemSubtitleTypes {
  subtitle: string | undefined
}

const ItemSubtitle = ({ subtitle }: ItemSubtitleTypes): JSX.Element => {
  if (subtitle === '') return <span>Error: No Item Subtitle</span>

  return <span tw='inline-block'>{subtitle}</span>
}

export default ItemSubtitle
