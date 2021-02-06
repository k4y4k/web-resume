import * as React from 'react'
import { FiLinkedin } from '@react-icons/all-files/fi/FiLinkedin'

interface LinkedInTypes {
  username: string
}

const LinkedIn = ({ username }: LinkedInTypes): JSX.Element => {
  if (username === '') return <p>Error: No LinkedIn</p>

  return (
    <a
      rel='noreferrer'
      href={`https://linkedin.com/in/${username}`}
      target='_blank'
    >
      <FiLinkedin /> {username}
    </a>
  )
}

export default LinkedIn
