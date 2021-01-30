import * as React from 'react'
import 'twin.macro'

interface NameProps {
  // if no name specified from data, display error text
  name?: string
}

const Name = ({ name = 'Error: No Name' }: NameProps): JSX.Element => (
  <h1 tw='text-6xl font-black mb-2'>{name}</h1>
)

export default Name
