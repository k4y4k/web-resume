import 'twin.macro'
import * as React from 'react'

interface SectionTitleTypes {
  title: string
}

const SectionTitle = ({ title }: SectionTitleTypes): JSX.Element | null => {
  if (title === '') return null

  return (
    <h2
      data-testid='sectionTitle'
      tw='text-orchid-700 font-bold font-mono text-xl uppercase'
    >
      {title}
    </h2>
  )
}

export default SectionTitle
