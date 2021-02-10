import * as React from 'react'
import tw, { css } from 'twin.macro'
import SectionTitle from './SectionTitle'

interface SectionContainerTypes {
  title: string
  children: React.ReactNode
}

const sectionContainerStyles = css`
  ${tw`m-4 border border-black transition-all`}
  ${tw`hover:bg-deeporange hover:bg-opacity-50`}
  ${tw`print:(m-0 mb-2 mx-1)`}

  &:hover {
    box-shadow: 0 2.8px 2.2px rgba(181, 61, 39, 0.07),
      0 6.7px 5.3px rgba(181, 61, 39, 0.05),
      0 12.5px 10px rgba(181, 61, 39, 0.042),
      0 22.3px 17.9px rgba(181, 61, 39, 0.035),
      0 41.8px 33.4px rgba(181, 61, 39, 0.028),
      0 100px 80px rgba(181, 61, 39, 0.02);
  }
`

const SectionContainer = ({
  title,
  children,
}: SectionContainerTypes): JSX.Element => (
  <div data-testid='sectionContainer' css={sectionContainerStyles}>
    <SectionTitle title={title} />
    {children}
  </div>
)

export default SectionContainer
