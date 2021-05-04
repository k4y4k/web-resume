import 'twin.macro'
import * as React from 'react'

interface SubtitleProps {
  subtitle: string
}

const Subtitle = ({ subtitle }: SubtitleProps): JSX.Element | null => {
  if (subtitle === '') return null

  return (
    <h2 tw='text-2xl font-mono my-2' data-testid='headerSubtitle'>
      {subtitle}
    </h2>
  )
}

export default Subtitle
