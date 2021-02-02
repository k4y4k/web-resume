import * as React from 'react'
import { FiLinkedin } from '@react-icons/all-files/fi/FiLinkedin'

interface LinkedInTypes {
  username: string
}

const LinkedIn = ({ username }: LinkedInTypes): JSX.Element => {
  if (username === '') return <p>Error: No LinkedIn</p>

  return (
    <p>
      <FiLinkedin />{' '}
      <a href={`https://linkedin.com/in/${username}`} target='_blank'>
        {username}
      </a>
    </p>
  )
}

export default LinkedIn
