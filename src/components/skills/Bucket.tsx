import * as React from 'react'

interface BucketTypes {
  skills: string[]
}

const Bucket = ({ skills }: BucketTypes): JSX.Element | null => {
  if (skills.length === 1 && skills[0] === '') return null

  return (
    <div data-testid='skillsBucket'>
      {skills.map(el => (
        <p
          style={{
            marginRight: '0.5rem',
            display: 'inline-block',
          }}
          key={el}
        >
          {`${el}`}
        </p>
      ))}
    </div>
  )
}

export default Bucket
