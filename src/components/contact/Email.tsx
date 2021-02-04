import * as React from 'react'
import { FiMail } from '@react-icons/all-files/fi/FiMail'

interface EmailTypes {
  email: string
}

const Email = ({ email }: EmailTypes): JSX.Element => {
  if (email === '') return <p>Error: No Email</p>

  return (
    <a href={`mailto:${email}`}>
      <FiMail /> {email}
    </a>
  )
}

export default Email
