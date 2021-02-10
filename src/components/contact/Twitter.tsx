import * as React from 'react'
import { FiTwitter } from '@react-icons/all-files/fi/FiTwitter'

interface TwitterTypes {
  username: string | null
}

const Twitter = ({ username }: TwitterTypes): JSX.Element | null => {
  if (username === '' || username === null) return null

  return (
    <a
      data-testid='contactTwitter'
      href={`https://twitter.com/${username}`}
      rel='noreferrer'
      target='_blank'
    >
      <FiTwitter /> {`@${username}`}
    </a>
  )
}

export default Twitter
