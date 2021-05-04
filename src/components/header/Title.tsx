import 'twin.macro'
import * as React from 'react'

interface TitleProps {
  title: string
}

const Title = ({ title }: TitleProps): JSX.Element | null => {
  if (title === '') return null

  return (
    <h1 data-testid='headerTitle' tw='font-bold font-mono text-6xl mb-0 '>
      {title}
    </h1>
  )
}

export default Title
