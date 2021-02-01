import * as React from 'react'

interface SectionTitleTypes {
  title: string
}

const SectionTitle = ({ title }: SectionTitleTypes): JSX.Element => {
  if (title === '') return <h2>Error: No Section Title</h2>

  return <h2>{title}</h2>
}

export default SectionTitle
