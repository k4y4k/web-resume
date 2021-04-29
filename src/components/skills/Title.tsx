import * as React from 'react'

interface TitleTypes {
  category: string
}

const Title = ({ category }: TitleTypes): JSX.Element | null => {
  if (category === '') return null

  return <h2 data-testid='skillsTitle'>{category}</h2>
}

export default Title
