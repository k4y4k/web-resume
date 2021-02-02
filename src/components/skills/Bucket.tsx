import 'twin.macro'
import * as React from 'react'

interface BucketTypes {
  skills?: string[]
}

const Bucket = ({ skills }: BucketTypes): JSX.Element => {
  if (skills === undefined) return <div data-testid='skillsBucket'></div>

  const res = skills.sort((a, b) => a.localeCompare(b))

  return (
    <div data-testid='skillsBucket'>
      {res.map(el => (
        <span key={el} tw='p-1 m-1 whitespace-nowrap'>{`${el} `}</span>
      ))}
    </div>
  )
}

export default Bucket
