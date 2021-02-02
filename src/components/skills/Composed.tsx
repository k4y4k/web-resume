import * as React from 'react'
import Bucket from './Bucket'
import Title from './Title'
import 'twin.macro'

interface ComposedTypes {
  heading: string
  bucket: string[]
}

const Composed = ({ heading, bucket }: ComposedTypes): JSX.Element => (
  <div tw='p-2'>
    <Title category={heading} />
    <Bucket skills={bucket} />
  </div>
)

export default Composed
