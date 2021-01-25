import * as React from 'react'

interface GitHubTypes {
  username?: string
}

const GitHub = ({
  username = 'Error: No GitHub',
}: GitHubTypes): JSX.Element => <p>{username}</p>

export default GitHub
