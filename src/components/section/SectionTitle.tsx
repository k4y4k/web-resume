import * as React from 'react'

interface SectionTitleTypes {
  title?: string
}

const SectionTitle = ({
  title = 'Error: No Section Title',
}: SectionTitleTypes): JSX.Element => <h2>{title}</h2>

export default SectionTitle
