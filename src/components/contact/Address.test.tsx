import * as React from 'react'
import { screen, render, within } from '@testing-library/react'
import Address from './Address'

describe('<Address />', () => {
  test('Handles no data', () => {
    render(
      <Address address='' postalCode='' city='' countryCode='' region='' />
    )

    const address = screen.getByTestId('address')

    expect(address).not.toBeFalsy()
    expect(address).toHaveTextContent('Error: No Address')
  })

  describe('Is formatted correctly (AU style)', () => {
    test('street name + number on one line', () => {
      render(
        <Address
          city='Example City'
          address='75 Example Rd'
          postalCode='PE 8888'
          countryCode='EX'
          region='Example State'
          restrictDisplay={false}
        />
      )
      const addressContainer = document.getElementById('address') as HTMLElement
      const address = within(addressContainer).getByText('75 Example Rd')

      expect(address).not.toBeFalsy()
    })

    test('city, state on one line', () => {
      render(
        <Address
          city='Example City'
          postalCode='8877'
          address='83 Example Rd'
          countryCode='ZZ'
          restrictDisplay={false}
          region='Example State'
        />
      )

      const addressContainer = document.getElementById('address') as HTMLElement
      const address = within(addressContainer).getByText(
        'Example City, Example State'
      )

      expect(address).not.toBeFalsy()
    })
  })

  describe('Is not about to dox me', () => {
    test('only displays City / State when RESTRICT_ADDRESS env var is passed in', () => {
      process.env.RESTRICT_ADDRESS = 'true'

      render(
        <Address
          city='Example City'
          postalCode='8877'
          address='83 Example Rd'
          countryCode='ZZ'
          region='Example State'
        />
      )

      const address = screen.getByTestId('address')

      expect(address).not.toBeFalsy()
      expect(address).not.toHaveTextContent('Example Rd')
      expect(address).toHaveTextContent('Example City, Example State')
    })
  })
})
