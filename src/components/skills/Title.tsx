import * as React from 'react'
import tw, { css } from 'twin.macro'

interface TitleTypes {
  category: string
}

const TitleStyles = css`
  ${tw`text-2xl font-thin uppercase`}
  ${tw`print:(text-lg)`}
`

const Title = ({ category }: TitleTypes): JSX.Element | null => {
  if (category === '') return null

  return (
    <h2 data-testid='skillsTitle' css={TitleStyles}>
      {category}
    </h2>
  )
}

export default Title
