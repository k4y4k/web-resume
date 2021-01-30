import * as React from 'react'
import Email from './Email'
import Twitter from './Twitter'
import GitHub from './GitHub'
import Website from './Website'
import LinkedIn from './LinkedIn'
import Phone from './Phone'
import Address from './Address'
import { useStaticQuery, graphql } from 'gatsby'
import getNetworkUsernames from '../../helpers/getNetworkUsernames'

interface PureContactTypes {
  restrictDisplay?: boolean
  email: string
  twitter: string
  github?: string
  website?: string
  linkedin?: string
  phone?: string
  address: string | undefined
  postalCode: string
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
  phone,
  address,
  postalCode,
  city,
  countryCode,
  region,
}: PureContactTypes): JSX.Element => {
  return (
    <section id='contact' data-testid='contact'>
      <Email email={email} />
      <Twitter username={twitter} />
      <GitHub username={github} />
      <LinkedIn username={linkedin} />
      <Website url={website} />
      <Phone restrictDisplay={restrictDisplay} num={phone} />
      <Address
        restrictDisplay={restrictDisplay}
        address={address}
        postalCode={postalCode}
        city={city}
        countryCode={countryCode}
        region={region}
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
            phone
            website
            location {
              address
              city
              countryCode
              postalCode
              region
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

  const { phone, email, website } = data?.file.childDataJson.basics

  // extract list of networks
  const { profiles } = data?.file.childDataJson.basics
  const twitter = getNetworkUsernames(profiles, 'twitter')
  const github = getNetworkUsernames(profiles, 'github')
  const linkedin = getNetworkUsernames(profiles, 'linkedin')

  const {
    address,
    city,
    countryCode,
    postalCode,
    region,
  } = data?.file.childDataJson.basics.location

  const props = {
    phone,
    email,
    website,
    twitter,
    github,
    linkedin,
    address,
    city,
    countryCode,
    postalCode,
    region,
  }
  return <PureContact {...props} />
}

export default Contact
