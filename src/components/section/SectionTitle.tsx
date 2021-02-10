import * as React from 'react'
import tw, { css } from 'twin.macro'

interface SectionTitleTypes {
  title: string
}

const sectionTitleStyles = css`
  ${tw`inline-block p-2 py-1 font-mono text-xl bg-black`}
  ${tw`print:text-base`}
`

const SectionTitle = ({ title }: SectionTitleTypes): JSX.Element | null => {
  if (title === '') return null

  return (
    <>
      <h2 data-testid='sectionTitle' css={sectionTitleStyles}>
        {title}
      </h2>{' '}
      <br />{' '}
    </>
  )
}

export default SectionTitle
