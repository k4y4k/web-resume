import * as React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import tw, { css } from 'twin.macro'
import Address from '../contact/Address'
import Email from '../contact/Email'
import getNetworkUsernames from '../../helpers/getNetworkUsernames'
import GitHub from '../contact/GitHub'
import LinkedIn from '../contact/LinkedIn'
import Phone from '../contact/Phone'
import SectionContainer from '../section/SectionContainer'
import Twitter from '../contact/Twitter'
import Website from '../contact/Website'

interface PureContactTypes {
  restrictDisplay?: boolean
  compact?: boolean
  email: string
  twitter: string | null
  github: string | null
  website: string
  linkedin: string | null
  city: string
  region: string
  countryCode: string
}

interface ContactTypes {
  restrictDisplay?: boolean
  compact?: boolean
}

const iconStyles = css`
  ${tw`p-0 m-0`}

  .icon {
    ${tw`inline-block mx-1 text-base align-middle text-orchid-700`}
    margin-bottom: 0.125rem;
    max-width: 15px;
  }

  li {
    ${tw`py-1 mx-1 -ml-1 list-none whitespace-nowrap`}

    a {
      ${tw`py-1 text-black no-underline`}
    }

    a:hover {
      ${tw`text-white bg-purple-800 rounded-md`}

      .icon {
        color: white;
      }
    }
  }

  a::after {
    content: ' ➜';
    ${tw`mr-1`}
  }
`

const compactStyles = css`
  .icon {
    ${tw`text-white`}
  }

  a {
    ${tw`pr-1`}
  }

  li,
  a {
    ${tw`text-white!`}
  }

  li {
    ${tw`p-0 m-0 my-4 `}

    a::after {
      content: none;
    }
  }

  li:nth-of-type(1) {
    ${tw`mt-0`}
  }
`

export const PureContact = ({
  restrictDisplay = true,
  compact = false,
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
    <SectionContainer onCoverLetter={compact} title='Contact'>
      <ul css={[iconStyles, compact && compactStyles]} data-testid='contact'>
        {compact && <Phone restrictDisplay={restrictDisplay} />}
        {!compact && <Website url={website} />}
        <Email email={email} />
        {!compact && <Twitter username={twitter} />}
        {!compact && <GitHub username={github} />}
        <LinkedIn username={linkedin} />
        <Address
          restrictDisplay={restrictDisplay}
          city={city}
          region={region}
          countryCode={countryCode}
        />
      </ul>
    </SectionContainer>
  )
}

export const Contact = ({
  compact,
  restrictDisplay,
}: ContactTypes): JSX.Element => {
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
  return (
    <PureContact
      {...props}
      compact={compact}
      restrictDisplay={restrictDisplay}
    />
  )
}

export default Contact
