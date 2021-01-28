import * as React from 'react'

interface BucketTypes {
  skills?: string[]
}

const Bucket = ({ skills }: BucketTypes): JSX.Element => {
  if (skills === undefined ?? skills?.length === 0)
    return <div data-testid='skillsBucket'></div>

  const res = skills?.sort().join(' ')

  return <p data-testid='skillsBucket'>{res}</p>
}

export default Bucket
