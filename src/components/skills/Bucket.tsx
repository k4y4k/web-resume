import * as React from 'react'

interface BucketTypes {
  skills: string[]
}

const Bucket = ({ skills }: BucketTypes): JSX.Element | null => {
  if (skills.length === 1 && skills[0] === '') return null

  return (
    <div data-testid='skillsBucket'>
      {skills.map(el => (
        <span key={el}>{`${el} `}</span>
      ))}
    </div>
  )
}

export default Bucket
