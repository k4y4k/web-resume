import * as React from 'react'

interface GitHubTypes {
  username?: string
}

const GitHub = ({
  username = 'Error: No GitHub',
}: GitHubTypes): JSX.Element => {
  if (username === 'Error: No GitHub') return <p>{username}</p>

  return (
    <p>
      <a target='_blank' href={`https://github.com/${username}`}>
        {username}
      </a>
    </p>
  )
}

export default GitHub
