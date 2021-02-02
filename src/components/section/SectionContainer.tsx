import 'twin.macro'
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
  <div tw='p-4'>
    <SectionTitle title={title} />
    {children}
  </div>
)

export default SectionContainer
