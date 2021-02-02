import * as React from 'react'
import { FiTwitter } from '@react-icons/all-files/fi/FiTwitter'

interface TwitterTypes {
  username: string
}

const Twitter = ({ username }: TwitterTypes): JSX.Element => {
  if (username === '') return <p>Error: No Twitter</p>

  return (
    <p>
      <FiTwitter />{' '}
      <a href={`https://twitter.com/${username}`} target='_blank'>
        {`@${username}`}
      </a>
    </p>
  )
}

export default Twitter
