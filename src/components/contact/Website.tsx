import * as React from 'react'
import { FiGlobe } from '@react-icons/all-files/fi/FiGlobe'

interface WebsiteTypes {
  url: string
}

const Website = ({ url }: WebsiteTypes): JSX.Element | null => {
  if (url === '') return null

  const stripped = url?.replace(/https?:\/\//i, '')

  return (
    <a data-testid='contactWebsite' href={url} target='_blank' rel='noreferrer'>
      <FiGlobe /> {stripped}
    </a>
  )
}

export default Website
