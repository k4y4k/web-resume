import * as React from 'react'
import { screen, render, within } from '@testing-library/react'
import Address from './Address'

describe('<Address />', () => {
  test('Handles no data', () => {
    render(<Address />)

    expect(address).not.toBeFalsy()
  })

  describe('Is formatted correctly (AU style)', () => {
    test('street name + number on one line', () => {
      render(
        <Address
          streetName='Example Rd'
          streetNum={75}
          suburb='Example Suburb'
          city='Example City'
          state='Example State'
          postcode={8877}
          restrictAddress={false}
        />
      )
      const addressContainer = document.getElementById('address') as HTMLElement
      const address = within(addressContainer).getByText('75 Example Rd')

      expect(address).not.toBeFalsy()
    })

    test('suburb, city, state, postcode on one line', () => {
      render(
        <Address
          streetName='Example Rd'
          streetNum={75}
          suburb='Example Suburb'
          city='Example City'
          state='Example State'
          postcode={8877}
          restrictAddress={false}
        />
      )

      const addressContainer = document.getElementById('address') as HTMLElement
      const address = within(addressContainer).getByText(
        'Example Suburb, Example City, Example State, 8877'
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
          state='Example State'
          streetName='Example Rd'
        />
      )

      const address = screen.getByTestId('address')

      expect(address).not.toBeFalsy()
      expect(address).not.toHaveTextContent('Example Rd')
      expect(address).toHaveTextContent('Example City, Example State')
    })
  })
})
