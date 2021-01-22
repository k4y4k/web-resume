import * as React from 'react'

interface NameProps {
  // if no name specified from data, display error text
  name?: string
}

const Name = ({ name = 'Error: No Name' }: NameProps): JSX.Element => (
  <h1>{name}</h1>
)

export default Name
