import * as React from 'react'
import tw, { css } from 'twin.macro'

interface SubtitleProps {
  subtitle: string
}

const subtitleStyles = css`
  ${tw`self-start p-2 bg-black`}
  ${tw`print:self-center print:px-6`}
`

const Subtitle = ({ subtitle }: SubtitleProps): JSX.Element | null => {
  if (subtitle === '') return null

  return (
    <h2 data-testid='headerSubtitle' css={subtitleStyles}>
      {subtitle}
    </h2>
  )
}

export default Subtitle
