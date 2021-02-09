import * as React from 'react'
import tw, { css } from 'twin.macro'

interface SectionTitleTypes {
  title: string
}

const sectionTitleStyles = css`
  ${tw`inline-block p-2 py-1 font-mono text-xl bg-black`}
  ${tw`print:text-base`}
`

const SectionTitle = ({ title }: SectionTitleTypes): JSX.Element => {
  if (title === '')
    return <h2 css={sectionTitleStyles}>Error: No Section Title</h2>

  return (
    <>
      <h2 css={sectionTitleStyles}>{title}</h2> <br />{' '}
    </>
  )
}

export default SectionTitle
