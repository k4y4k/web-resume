import * as React from 'react'
import SectionTitle from './SectionTitle'
import ItemContainer from './ItemContainer'

interface SectionContainerTypes {
  title?: string
}

const SectionContainer = ({ title }: SectionContainerTypes): JSX.Element => (
  <>
    <SectionTitle title={title} />
    <ItemContainer />
  </>
)

export default SectionContainer
