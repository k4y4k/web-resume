import * as React from 'react'

interface WebsiteTypes {
  url?: string
  // defaults to https, use proto to override
  proto?: string
}

const Website = ({
  url = 'Error: No Website',
  proto = 'https://',
}: WebsiteTypes): JSX.Element => {
  if (url === 'Error: No Website') return <a>{url}</a>

  return (
    <p>
      <a href={`${proto}${url}`} target='_blank'>
        {url}
      </a>
    </p>
  )
}

export default Website
