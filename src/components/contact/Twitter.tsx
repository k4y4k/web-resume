import * as React from 'react'

interface TwitterTypes {
  username: string
}

const Twitter = ({ username }: TwitterTypes): JSX.Element => {
  if (username === '') return <p>Error: No Twitter</p>

  return (
    <p>
      <a href={`https://twitter.com/${username}`} target='_blank'>
        {`@${username}`}
      </a>
    </p>
  )
}

export default Twitter
