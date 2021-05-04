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
  twitter: string | null
  linkedin: string | null
  github: string | null
  website: string
  address?: string
  postalCode?: string
  city: string
  countryCode: string
  region: string
}

const iconStyles = css`
  ${tw`flex flex-row flex-wrap place-content-evenly`}

  .icon {
    ${tw`inline-block align-middle`}
    margin-bottom: 0.125rem;
  }

  li {
    ${tw`px-1 py-2 hover:bg-blush-700 hover:text-white`}
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
    <ul tw='bg-blush-400' css={iconStyles} data-testid='contact'>
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
    </ul>
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
