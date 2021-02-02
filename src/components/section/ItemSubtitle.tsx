import 'twin.macro'
import * as React from 'react'

interface ItemSubtitleTypes {
  subtitle: string | undefined
}

const ItemSubtitle = ({ subtitle }: ItemSubtitleTypes): JSX.Element => {
  if (subtitle === '' ?? subtitle === undefined)
    return <h2>Error: No Item Subtitle</h2>

  return <h2 tw='inline-block'>{subtitle}</h2>
}

export default ItemSubtitle
