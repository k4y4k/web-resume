import * as React from 'react'
import Bucket from './Bucket'
import Title from './Title'

interface ComposedTypes {
  heading?: string
  bucket?: string[]
}

const Composed = ({ heading, bucket }: ComposedTypes): JSX.Element => (
  <>
    <Title category={heading} />
    <Bucket skills={bucket} />
  </>
)

export default Composed
