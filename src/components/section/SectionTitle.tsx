import * as React from 'react'
import tw, { TwStyle } from 'twin.macro'

interface SectionTitleTypes {
  title: string
}

const SectionTitleStyles = (): Array<TwStyle | string> => [
  tw`inline-block p-2 py-1 font-mono text-xl bg-black`,

  tw`print:text-base`,
]

const SectionTitle = ({ title }: SectionTitleTypes): JSX.Element => {
  if (title === '')
    return <h2 css={SectionTitleStyles()}>Error: No Section Title</h2>

  return (
    <>
      <h2 css={SectionTitleStyles()}>{title}</h2> <br />{' '}
    </>
  )
}

export default SectionTitle
