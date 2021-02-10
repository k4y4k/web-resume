import * as React from 'react'
import { FiGithub } from '@react-icons/all-files/fi/FiGithub'

interface GitHubTypes {
  username: string
}

const GitHub = ({ username }: GitHubTypes): JSX.Element | null => {
  if (username === '') return null

  return (
    <a
      data-testid='contactGithub'
      rel='noreferrer'
      target='_blank'
      href={`https://github.com/${username}`}
    >
      <FiGithub /> {username}
    </a>
  )
}

export default GitHub
