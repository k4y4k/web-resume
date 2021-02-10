import * as React from 'react'
import { FiLinkedin } from '@react-icons/all-files/fi/FiLinkedin'

interface LinkedInTypes {
  username: string
}

const LinkedIn = ({ username }: LinkedInTypes): JSX.Element | null => {
  if (username === '' || username === 'undefined') return null

  return (
    <a
      data-testid='contactLinkedin'
      rel='noreferrer'
      href={`https://linkedin.com/in/${username}`}
      target='_blank'
    >
      <FiLinkedin /> {username}
    </a>
  )
}

export default LinkedIn
