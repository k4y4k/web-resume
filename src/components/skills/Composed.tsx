import * as React from 'react'
import tw, { TwStyle } from 'twin.macro'
import Bucket from './Bucket'
import Title from './Title'

interface ComposedTypes {
  heading: string
  bucket: string[]
}

const skillsStyles = (): Array<TwStyle | string> => [
  tw`px-6 py-2 mx-6 mb-2`,
  tw` print:(p-0 m-0 mx-6 py-3)`,
]

const Composed = ({ heading, bucket }: ComposedTypes): JSX.Element => (
  <div css={skillsStyles()}>
    <Title category={heading} />
    <Bucket skills={bucket} />
  </div>
)

export default Composed
