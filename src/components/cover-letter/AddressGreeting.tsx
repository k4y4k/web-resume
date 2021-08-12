import 'twin.macro'
import * as React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

const AddressGreeting = (): JSX.Element => {
  const { letterContents } = useStaticQuery(graphql`
    {
      letterContents: file(extension: { eq: "md" }, name: { eq: "letter" }) {
        childMarkdownRemark {
          frontmatter {
            recruiterFirstName
            recruiterLastName
            address
            city
            countryCode
            postalCode
            region
          }
        }
      }
    }
  `)

  const {
    recruiterFirstName,
    recruiterLastName,
    address,
    city,
    region,
    postalCode,
    countryCode,
  } = letterContents.childMarkdownRemark.frontmatter

  return (
    <>
      <p tw='pb-0!'>
        {recruiterFirstName} {recruiterLastName}
      </p>
      <p tw='pb-0!'>{address}</p>
      <p>
        {city !== ' ' ? `${city}, ` : null}
        {region !== ' ' ? `${region}, ` : null}
        {postalCode !== ' ' ? `${postalCode}, ` : null}
        {countryCode !== ' ' ? `${countryCode}` : null}
      </p>

      <h1 tw='mt-4 mb-1'>Dear {recruiterFirstName},</h1>
    </>
  )
}

export default AddressGreeting
