import * as React from 'react'
import Email from './Email'
import Twitter from './Twitter'
import GitHub from './GitHub'
import Website from './Website'
import LinkedIn from './LinkedIn'
import Address from './Address'
import { useStaticQuery, graphql } from 'gatsby'
import getNetworkUsernames from '../../helpers/getNetworkUsernames'

interface PureContactTypes {
  restrictDisplay?: boolean
  email: string
  twitter: string
  github?: string
  website: string
  linkedin?: string
  address?: string
  postalCode?: string
  city: string
  countryCode: string
  region: string
}

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
}: PureContactTypes): JSX.Element => {
  return (
    <section id='contact' data-testid='contact'>
      <Email email={email} />
      <Twitter username={twitter} />
      <GitHub username={github} />
      <LinkedIn username={linkedin} />
      <Website url={website} />
      <Address
        restrictDisplay={restrictDisplay}
        city={city}
        region={region}
        countryCode={countryCode}
      />
    </section>
  )
}

const Contact = (): JSX.Element => {
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
