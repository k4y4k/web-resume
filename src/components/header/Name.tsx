import * as React from 'react'

interface NameProps {
  name: string
}

const Name = ({ name = 'Error: No Name' }: NameProps): JSX.Element => (
  <h1>{name}</h1>
)

export default Name
