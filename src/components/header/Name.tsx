import * as React from 'react'
import tw, { css } from 'twin.macro'

interface NameProps {
  name: string
}
const NameStyles = css`
  ${tw`self-start p-2 mb-2 font-mono text-6xl font-black bg-black`}
`

const Name = ({ name }: NameProps): JSX.Element => {
  if (name === '') return <h1 css={[NameStyles]}>Error: No Name</h1>

  return <h1 css={[NameStyles]}>{name}</h1>
}

export default Name
