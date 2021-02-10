import * as React from 'react'
import { Contact, PureContact } from './Contact'
import { render, screen } from '@testing-library/react'

import { useStaticQuery } from 'gatsby'

describe('<Contact />', () => {
  beforeAll(() =>
    (useStaticQuery as jest.Mock).mockReturnValue({
      file: {
        childDataJson: {
          basics: {
            email: 'john@gmail.com',
            website: 'http://johndoe.com',
            location: {
              city: 'San Francisco',
              region: 'California',
              countryCode: 'US',
            },
            profiles: [
              {
                network: 'Twitter',
                username: 'john',
              },
            ],
          },
        },
      },
    })
  )

  test('handles no data', () => {
    render(
      <PureContact
        address=''
        email=''
        website=''
        twitter=''
        github=''
        linkedin=''
        postalCode=''
        city=''
        countryCode=''
        region=''
      />
    )

    const contact = screen.getByTestId('contact')

    // everything returns null in the absurd case that absolutely nothing is passed in
    expect(contact.children).toHaveLength(0)
  })

  test('Hides things appropriately by default', () => {
    render(
      <PureContact
        email='kayak@example.com'
        twitter='kayakSinger1'
        github='octocat'
        website='example.com'
        linkedin='exampledin'
        city='Example City'
        address='2712 Broadway St'
        postalCode='CA 94115'
        countryCode='US'
        region='California'
      />
    )

    const address = screen.getByTestId('contactAddress')
    expect(address).toHaveTextContent('Example City, California')
    expect(address).not.toHaveTextContent('2712')
  })

  test('Shows things when told', () => {
    render(
      <PureContact
        email='kayak@example.com'
        twitter='kayakSinger1'
        github='octocat'
        website='example.com'
        linkedin='exampledin'
        city='Example City'
        address='2712 Broadway St'
        postalCode='CA 94115'
        countryCode='US'
        region='California'
        restrictDisplay={false}
      />
    )

    const address = screen.getByTestId('contactAddress')
    expect(address).toHaveTextContent(/example city/i)
    expect(address).toHaveTextContent(/2712 broadway st/i)
    expect(address).toHaveTextContent(/ca 94115/i)
    expect(address).toHaveTextContent(/us/i)
    expect(address).toHaveTextContent(/California/i)
  })

  test('renders OK', () => {
    render(<Contact />)

    expect(screen.getByTestId('contact')).toMatchSnapshot()
  })
})
