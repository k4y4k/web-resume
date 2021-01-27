import * as React from 'react'

interface AddressTypes {
  streetName?: string | undefined
  streetNum?: string | number | undefined
  suburb?: string
  city?: string
  state?: string
  postcode?: string | number
  restrictDisplay?: boolean
}

const Address = ({
  streetName = undefined,
  streetNum = undefined,
  suburb,
  city,
  state,
  postcode,
  // restrictAddress by default
  restrictDisplay = true,
}: AddressTypes): JSX.Element => {
  // if there isn't a 123 Example Rd-type datum, assume there's nothing else
  if (streetName === undefined && streetNum === undefined)
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
          {city}, {state}
        </p>
      </div>
    )

  return (
    <div data-testid='address' id='address'>
      <p>
        {streetNum} {streetName}
      </p>
      <p>
        {suburb}, {city}, {state}, {postcode}
      </p>
    </div>
  )
}

export default Address
