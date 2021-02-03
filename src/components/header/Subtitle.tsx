import * as React from 'react'
import tw, { TwStyle } from 'twin.macro'

interface SubtitleProps {
  subtitle: string
}

const subtitleStyles = (): Array<TwStyle | string> => [
  tw`self-start p-2 bg-black`,
]

const Subtitle = ({ subtitle = '' }: SubtitleProps): JSX.Element => {
  if (subtitle === '') return <h2 css={subtitleStyles()}>Error: No Subtitle</h2>

  return <h2 css={subtitleStyles()}>{subtitle}</h2>
}

export default Subtitle
