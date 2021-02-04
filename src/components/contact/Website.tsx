import * as React from 'react'
import { FiGlobe } from '@react-icons/all-files/fi/FiGlobe'

interface WebsiteTypes {
  url: string
}

const Website = ({ url }: WebsiteTypes): JSX.Element => {
  if (url === '') return <p>Error: No Website</p>

  const stripped = url?.replace(/https?:\/\//i, '')

  return (
    <a href={url} target='_blank'>
      <FiGlobe /> {stripped}
    </a>
  )
}

export default Website
