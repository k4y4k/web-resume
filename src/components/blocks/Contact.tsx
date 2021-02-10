import * as React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import tw, { css } from 'twin.macro'
import Address from '../contact/Address'
import Email from '../contact/Email'
import getNetworkUsernames from '../../helpers/getNetworkUsernames'
import GitHub from '../contact/GitHub'
import LinkedIn from '../contact/LinkedIn'
import Twitter from '../contact/Twitter'
import Website from '../contact/Website'

interface PureContactTypes {
  restrictDisplay?: boolean
  email: string
  twitter: string
  github: string
  website: string
  linkedin: string
  address?: string
  postalCode?: string
  city: string
  countryCode: string
  region: string
}

export const ContactStyles = css`
  ${tw`flex flex-wrap text-white place-content-evenly`}
  background-color: #2b0e26;

  a,
  p {
    ${tw`p-4 hover:bg-deeporange transition-all`}
    ${tw`print:p-2`}
  }
`

export const PureContact = ({
  restrictDisplay = true,
  email,
  twitter,
  github,
  website,
  linkedin,
  city,
  region,
  countryCode,
  address,
  postalCode,
}: PureContactTypes): JSX.Element => {
  return (
    <section css={[ContactStyles]} id='contact' data-testid='contact'>
      <Website url={website} />
      <Twitter username={twitter} />
      <GitHub username={github} />
      <LinkedIn username={linkedin} />
      <Email email={email} />
      <Address
        restrictDisplay={restrictDisplay}
        city={city}
        region={region}
        countryCode={countryCode}
        address={address}
        postalCode={postalCode}
      />
    </section>
  )
}

export const Contact = (): JSX.Element => {
  const data = useStaticQuery(graphql`
    {
      file(extension: { eq: "json" }, name: { eq: "data" }) {
        childDataJson {
          basics {
            email
            website
            location {
              city
              region
              countryCode
            }
            profiles {
              network
              username
            }
          }
        }
      }
    }
  `)

  const { email, website } = data?.file.childDataJson.basics

  // extract list of networks
  const { profiles } = data?.file.childDataJson.basics
  const twitter = getNetworkUsernames(profiles, 'twitter')
  const github = getNetworkUsernames(profiles, 'github')
  const linkedin = getNetworkUsernames(profiles, 'linkedin')

  const { city, countryCode, region } = data?.file.childDataJson.basics.location

  const props = {
    email,
    website,
    twitter,
    github,
    linkedin,
    city,
    region,
    countryCode,
  }
  return <PureContact {...props} />
}

export default Contact
