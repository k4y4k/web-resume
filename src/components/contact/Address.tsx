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
  address,
  postalCode,
  city,
  countryCode,
  region,
  // restrict showing Address by default
  restrictDisplay = true,
}: AddressTypes): JSX.Element | null => {
  // if there isn't a 123 Example Rd-type datum (non-restricted) or
  // a city (restricted), assume there's nothing else

  if (address === '' || city === '') return null

  if (!restrictDisplay)
    return (
      <div data-testid='contactAddress' id='address'>
        <p>
          <FiMapPin /> {address}, {city}, {region}, {postalCode} {countryCode}
        </p>
      </div>
    )

  // restricted mode enabled by default
  return (
    <div data-testid='contactAddress' id='address'>
      <p>
        <FiMapPin /> {city}, {region + ','} {countryCode}
      </p>
    </div>
  )
}

export default Address
