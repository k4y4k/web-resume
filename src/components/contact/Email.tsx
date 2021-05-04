import * as React from 'react'
import { FiMail } from '@react-icons/all-files/fi/FiMail'

interface EmailTypes {
  email: string
}

const Email = ({ email }: EmailTypes): JSX.Element | null => {
  if (email === '') return null

  return (
    <li>
      <a data-testid='contactEmail' href={`mailto:${email}`}>
        <FiMail /> {email}
      </a>
    </li>
  )
}

export default Email
