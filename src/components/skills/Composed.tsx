import * as React from 'react'
import tw, { css } from 'twin.macro'
import Bucket from './Bucket'
import Title from './Title'

interface ComposedTypes {
  heading: string
  bucket: string[]
}

const skillsStyles = css`
  ${tw`px-6 py-2 mx-6 mb-2`}
  ${tw`print:(p-0 m-0 mx-6 py-3)`}
`

const Composed = ({ heading, bucket }: ComposedTypes): JSX.Element | null => {
  // switching the logic was the only way to make this work

  if (JSON.stringify(bucket) === '[]') return null

  if (JSON.stringify(bucket) === '[""]') return null

  if (heading === '') return null

  return (
    <div data-testid='skillsComposed' css={skillsStyles}>
      <Title category={heading} />
      <Bucket skills={bucket} />
    </div>
  )

  // return null
}

export default Composed
