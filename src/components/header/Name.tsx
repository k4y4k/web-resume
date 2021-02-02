import * as React from 'react'
import tw, { css } from 'twin.macro'

interface NameProps {
  // if no name specified from data, display error text
  name: string
}
const NameStyles = css`
  ${tw`text-6xl font-black mb-2`}
`

const Name = ({ name }: NameProps): JSX.Element => {
  if (name === '') return <h1 css={[NameStyles]}>Error: No Name</h1>

  return <h1 css={[NameStyles]}>{name}</h1>
}

export default Name
