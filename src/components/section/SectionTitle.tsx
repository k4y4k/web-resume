import * as React from 'react'

interface SectionTitleTypes {
  title: string
}

const SectionTitle = ({ title }: SectionTitleTypes): JSX.Element | null => {
  if (title === '') return null

  return (
    <>
      <h2 data-testid='sectionTitle'>{title}</h2>
    </>
  )
}

export default SectionTitle
