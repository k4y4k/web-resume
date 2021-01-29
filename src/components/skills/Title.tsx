import * as React from 'react'

interface TitleTypes {
  category?: string
}

const Title = ({
  category = 'Error: No Skills Category',
}: TitleTypes): JSX.Element => <h2>{category}</h2>

export default Title
