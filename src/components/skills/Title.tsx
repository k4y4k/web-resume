import * as React from 'react'
import tw, { css } from 'twin.macro'

interface TitleTypes {
  category: string
}

const TitleStyles = css`
  ${tw`text-2xl font-black uppercase`}
  ${tw`print:(text-lg)`}
`

const Title = ({ category }: TitleTypes): JSX.Element => {
  if (category === '')
    return <h2 css={[TitleStyles]}>Error: No Skills Category</h2>

  return <h2 css={[TitleStyles]}>{category}</h2>
}
export default Title
