import * as React from 'react'

interface EmailTypes {
  email?: string
}

const Email = ({ email = 'Error: No Email' }: EmailTypes): JSX.Element => (
  <p>{email}</p>
)

export default Email
