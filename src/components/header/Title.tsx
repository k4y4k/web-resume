import * as React from 'react'
import tw, { css } from 'twin.macro'

interface TitleProps {
  title: string
}
const titleStyles = css`
  ${tw`self-start p-2 mb-2 font-mono text-6xl font-black bg-black`}
  ${tw`print:self-center print:px-6`}
`

const Title = ({ title }: TitleProps): JSX.Element | null => {
  if (title === '') return null

  return (
    <h1 data-testid='headerTitle' css={titleStyles}>
      {title}
    </h1>
  )
}

export default Title
