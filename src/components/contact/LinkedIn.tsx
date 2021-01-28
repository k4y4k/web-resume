import * as React from 'react'

interface LinkedInTypes {
  username?: string
}

const LinkedIn = ({
  username = 'Error: No LinkedIn',
}: LinkedInTypes): JSX.Element => {
  if (username === 'Error: No LinkedIn') return <p>{username}</p>

  return (
    <p>
      <a href={`https://linkedin.com/in/${username}`} target='_blank'>
        {username}
      </a>
    </p>
  )
}

export default LinkedIn
