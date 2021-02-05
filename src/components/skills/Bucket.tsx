import * as React from 'react'
import tw, { TwStyle } from 'twin.macro'

interface BucketTypes {
  skills: string[]
}

const bucketStyles = (): Array<TwStyle | string> => [
  tw`p-1 m-1 whitespace-nowrap`,
  tw`print:(p-0 m-0 mt-1)`,
]

const bucketItemStyles = (): Array<TwStyle | string> => [tw`p-2`]

const Bucket = ({ skills }: BucketTypes): JSX.Element => {
  if (skills === undefined)
    return <div css={bucketStyles()} data-testid='skillsBucket'></div>

  const res = skills.sort((a, b) => a.localeCompare(b))

  return (
    <div css={bucketStyles()} data-testid='skillsBucket'>
      {res.map(el => (
        <span css={bucketItemStyles()} key={el}>{`${el} `}</span>
      ))}
    </div>
  )
}

export default Bucket
