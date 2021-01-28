import * as React from 'react'
import Email from './Email'
import Twitter from './Twitter'
import GitHub from './GitHub'
import Website from './Website'
import LinkedIn from './LinkedIn'
import Phone from './Phone'
import Address from './Address'

interface ContactTypes {
  restrictDisplay?: boolean
  email?: string
  twitter?: string
  github?: string
  website?: string
  linkedin?: string
  phone?: string
  streetNum?: string | number
  streetName?: string
  suburb?: string
  city?: string
  state?: string
  postcode?: string | number
}

const Contact = ({
  restrictDisplay = true,
  email,
  twitter,
  github,
  website,
  linkedin,
  phone,
  streetNum,
  streetName,
  suburb,
  city,
  state,
  postcode,
}: ContactTypes): JSX.Element => {
  return (
    <section id='contact' data-testid='contact'>
      <p>{restrictDisplay}</p>
      <Email email={email} />
      <Twitter handle={twitter} />
      <GitHub username={github} />
      <LinkedIn username={linkedin} />
      <Website url={website} />
      <Phone restrictDisplay={restrictDisplay} num={phone} />
      <Address
        restrictDisplay={restrictDisplay}
        streetNum={streetNum}
        streetName={streetName}
        suburb={suburb}
        city={city}
        state={state}
        postcode={postcode}
      />
    </section>
  )
}
export default Contact
