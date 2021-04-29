import * as React from 'react'
import SectionTitle from './SectionTitle'

interface SectionContainerTypes {
  title: string
  children: React.ReactNode
}

const SectionContainer = ({
  title,
  children,
}: SectionContainerTypes): JSX.Element => (
  <div data-testid='sectionContainer'>
    <SectionTitle title={title} />
    {children}
  </div>
)

export default SectionContainer
