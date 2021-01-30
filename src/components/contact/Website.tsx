import * as React from 'react'

interface WebsiteTypes {
  url: string
}

const Website = ({ url }: WebsiteTypes): JSX.Element => {
  if (url === '') return <a>Error: No Website</a>

  const stripped = url?.replace(/https?:\/\//i, '')

  return (
    <p>
      <a href={url} target='_blank'>
        {stripped}
      </a>
    </p>
  )
}

export default Website
