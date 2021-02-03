import * as React from 'react'
import tw, { TwStyle } from 'twin.macro'
import SectionTitle from './SectionTitle'

interface SectionContainerTypes {
  title: string
  children: React.ReactNode
}

const sectionContainerStyles = (): Array<TwStyle | string> => [
  tw`m-4 border border-black`,
]

const SectionContainer = ({
  title,
  children,
}: SectionContainerTypes): JSX.Element => (
  <div css={sectionContainerStyles()}>
    <SectionTitle title={title} />
    {children}
  </div>
)

export default SectionContainer
