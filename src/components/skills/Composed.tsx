import 'twin.macro'
import * as React from 'react'
import Bucket from './Bucket'
import Title from './Title'

interface ComposedTypes {
  heading: string
  bucket: string[]
}

const Composed = ({ heading, bucket }: ComposedTypes): JSX.Element => (
  <div tw='mx-6 mb-4 p-4'>
    <Title category={heading} />
    <Bucket skills={bucket} />
  </div>
)

export default Composed
