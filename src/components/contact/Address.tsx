import * as React from 'react'
import { FiMapPin } from '@react-icons/all-files/fi/FiMapPin'

interface AddressTypes {
  address?: string
  postalCode?: string
  city: string
  countryCode: string
  region: string
  restrictDisplay?: boolean
}

const Address = ({
  address = undefined,
  postalCode,
  city,
  countryCode,
  region,
  // restrict showing Address by default
  restrictDisplay = true,
}: AddressTypes): JSX.Element => {
  // if there isn't a 123 Example Rd-type datum (non-restricted) or a city (restricted), assume there's nothing else
  if (
    address === 'undefined' ||
    address === '' ||
    city === '' ||
    city === undefined
  )
    return (
      <div data-testid='address' id='address'>
        <p>Error: No Address</p>
      </div>
    )

  // The Internet only needs the city / state
  if (restrictDisplay)
    return (
      <div data-testid='address' id='address'>
        <p>
          <FiMapPin /> {city}, {region}, {countryCode}
        </p>
      </div>
    )

  // pass restrictDisplay = false to render this
  return (
    <div data-testid='address' id='address'>
      <p>{address}</p>
      <p>
        {city}, {region}
      </p>
      <p>
        {postalCode} {countryCode}
      </p>
    </div>
  )
}

export default Address
