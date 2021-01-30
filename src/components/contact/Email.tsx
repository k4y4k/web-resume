import * as React from 'react'

interface EmailTypes {
  email: string
}

const Email = ({ email }: EmailTypes): JSX.Element => {
  if (email === '') return <p>Error: No Email</p>

  return (
    <p>
      <a href={`mailto:${email}`}>{email}</a>
    </p>
  )
}

export default Email
