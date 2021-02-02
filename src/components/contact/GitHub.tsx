import * as React from 'react'
import { FiGithub } from '@react-icons/all-files/fi/FiGithub'

interface GitHubTypes {
  username: string
}

const GitHub = ({ username }: GitHubTypes): JSX.Element => {
  if (username === '') return <p>Error: No GitHub</p>

  return (
    <p>
      <FiGithub />{' '}
      <a target='_blank' href={`https://github.com/${username}`}>
        {username}
      </a>
    </p>
  )
}

export default GitHub
