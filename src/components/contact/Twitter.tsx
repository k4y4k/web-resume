import * as React from 'react'

interface TwitterTypes {
  handle?: string
}

const Twitter = ({
  handle = 'Error: No Twitter',
}: TwitterTypes): JSX.Element => {
  if (handle === 'Error: No Twitter') return <p>{handle}</p>

  return <p> {`@${handle}`} </p>
}

export default Twitter
