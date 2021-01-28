import * as React from 'react'

interface ItemSubtitleTypes {
  subtitle?: string
}

const ItemSubtitle = ({
  subtitle = 'Error: No Item Subtitle',
}: ItemSubtitleTypes): JSX.Element => <h2>{subtitle}</h2>

export default ItemSubtitle
