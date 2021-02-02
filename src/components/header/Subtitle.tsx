import 'twin.macro'
import * as React from 'react'

interface SubtitleProps {
  subtitle: string | undefined
}

const Subtitle = ({ subtitle = '' }: SubtitleProps): JSX.Element => {
  if (subtitle === '' ?? subtitle === undefined)
    return <h2>Error: No Subtitle</h2>

  return <h2>{subtitle}</h2>
}

export default Subtitle
