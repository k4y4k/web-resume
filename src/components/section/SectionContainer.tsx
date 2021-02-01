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
  <>
    <SectionTitle title={title} />
    {children}
  </>
)

export default SectionContainer
