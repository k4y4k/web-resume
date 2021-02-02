import * as React from 'react'
import tw, { css } from 'twin.macro'

interface SectionTitleTypes {
  title: string
}

const SectionTitleStyles = css`
  ${tw`text-3xl font-black mb-2`}
`

const SectionTitle = ({ title }: SectionTitleTypes): JSX.Element => {
  if (title === '')
    return <h2 css={[SectionTitleStyles]}>Error: No Section Title</h2>

  return <h2 css={[SectionTitleStyles]}>{title}</h2>
}

export default SectionTitle
