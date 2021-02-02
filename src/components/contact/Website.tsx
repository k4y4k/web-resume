import * as React from 'react'
import { FiGlobe } from '@react-icons/all-files/fi/FiGlobe'

interface WebsiteTypes {
  url: string
}

const Website = ({ url }: WebsiteTypes): JSX.Element => {
  if (url === '') return <a>Error: No Website</a>

  const stripped = url?.replace(/https?:\/\//i, '')

  return (
    <p>
      <FiGlobe />{' '}
      <a href={url} target='_blank'>
        {stripped}
      </a>
    </p>
  )
}

export default Website
