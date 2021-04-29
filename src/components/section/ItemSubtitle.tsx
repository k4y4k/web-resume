import * as React from 'react'

interface ItemSubtitleTypes {
  subtitle: string | undefined
}

const ItemSubtitle = ({ subtitle }: ItemSubtitleTypes): JSX.Element | null => {
  if (subtitle === '') return null

  return <span data-testid='itemSubtitle'>{subtitle}</span>
}

export default ItemSubtitle
