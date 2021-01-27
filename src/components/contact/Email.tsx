import * as React from 'react'

interface EmailTypes {
  email?: string
}

const Email = ({ email = 'Error: No Email' }: EmailTypes): JSX.Element => {
  if (email === 'Error: No Email') return <p>{email}</p>

  return (
    <p>
      <a href={`mailto:${email}`}>{email}</a>
    </p>
  )
}

export default Email
