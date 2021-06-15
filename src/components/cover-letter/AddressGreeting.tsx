import 'twin.macro'
import * as React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

const AddressGreeting = (): JSX.Element => {
  const { letterContents } = useStaticQuery(graphql`
    {
      letterContents: file(extension: { eq: "md" }, name: { eq: "letter" }) {
        childMarkdownRemark {
          frontmatter {
            recruiterName
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

  const { recruiterName, address, city, region, postalCode, countryCode } =
    letterContents.childMarkdownRemark.frontmatter

  return (
    <>
      <p tw='pb-0!'>{recruiterName}</p>
      <p tw='pb-0!'>
        {address}, {city}
      </p>
      <p>
        {region}, {postalCode}, {countryCode}
      </p>
      <p>Dear {recruiterName},</p>
    </>
  )
}

export default AddressGreeting
