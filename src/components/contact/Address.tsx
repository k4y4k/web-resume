import * as React from 'react'
import tw, { css } from 'twin.macro'
import { FiMapPin } from '@react-icons/all-files/fi/FiMapPin'

interface AddressTypes {
  address?: string
  postalCode?: string
  city: string
  countryCode: string
  region: string
  restrictDisplay?: boolean
}

const addressStyles = css`
  ${tw`cursor-default`}
`

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
      <div data-testid='contactAddress' css={addressStyles} id='address'>
        <p>{address}</p>
        <p>
          {city}, {region}
        </p>
        <p>
          {postalCode} {countryCode}
        </p>
      </div>
    )

  // restricted mode enabled by default
  return (
    <div data-testid='contactAddress' css={addressStyles} id='address'>
      <p>
        <FiMapPin /> {city}, {region + ','} {countryCode}
      </p>
    </div>
  )
}

export default Address
