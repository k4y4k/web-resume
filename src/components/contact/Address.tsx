import * as React from 'react'

interface AddressTypes {
  address: string | undefined
  postalCode: string
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
  // if there isn't a 123 Example Rd-type datum, assume there's nothing else
  if (address === undefined || address === '')
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
          {city}, {region}
        </p>
      </div>
    )

  return (
    <div data-test1='address' id='address'>
      <p>{address}</p>
      <p>{city}</p>
      <p>
        {region} {postalCode} {countryCode}
      </p>
    </div>
  )
}

export default Address
