import * as React from 'react'
import { PureContact as Contact } from './Contact'
import { screen, render, within } from '@testing-library/react'

describe('<Contact />', () => {
  test('handles no data', () => {
    render(
      <Contact
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

    const contactSectionContents = screen.getAllByText('Error', {
      exact: false,
    })

    // github, email, twitter, website, address, linkedin
    expect(contactSectionContents).toHaveLength(6)
  })

  describe('composes all other elements', () => {
    test('email', () => {
      render(
        <Contact
          email='kayak@example.com'
          address=''
          twitter=''
          website=''
          github=''
          linkedin=''
          postalCode=''
          city=''
          countryCode=''
          region=''
        />
      )

      const contactSection = screen.getByTestId('contact')
      const email = within(contactSection).getByText(/@example.com/gi)
      expect(email).not.toBeFalsy()
    })

    test('twitter', () => {
      render(
        <Contact
          address=''
          email=''
          github=''
          website=''
          linkedin=''
          postalCode=''
          city=''
          countryCode=''
          region=''
          twitter='kayakSinger1'
        />
      )

      const contactSection = screen.getByTestId('contact')
      const twitter = within(contactSection).getByText(/@kayakSinger1/gi)
      expect(twitter).not.toBeFalsy()
    })

    test('github', () => {
      render(
        <Contact
          address=''
          email=''
          twitter=''
          linkedin=''
          website=''
          postalCode=''
          city=''
          countryCode=''
          region=''
          github='octocat'
        />
      )

      const contactSection = screen.getByTestId('contact')
      const github = within(contactSection).getByText(/octocat/gi)

      expect(github).not.toBeFalsy()
    })

    test('website', () => {
      render(
        <Contact
          address=''
          email=''
          twitter=''
          github=''
          linkedin=''
          postalCode=''
          city=''
          countryCode=''
          region=''
          website='example.com'
        />
      )

      const contactSection = screen.getByTestId('contact')
      const website = within(contactSection).getByText(/example.com/)
      expect(website).not.toBeFalsy()
    })

    test('address', () => {
      render(
        <Contact
          email=''
          twitter=''
          website=''
          github=''
          linkedin=''
          address='2712 Broadway St'
          postalCode='CA 94115'
          city='San Francisco'
          countryCode='US'
          region='California'
        />
      )

      const contactSection = screen.getByTestId('contact')
      const address = within(contactSection).getByText(
        /San Francisco, California/gi
      )
      expect(address).not.toBeFalsy()
    })

    test('linkedin', () => {
      render(
        <Contact
          address=''
          email=''
          website=''
          twitter=''
          github=''
          postalCode=''
          city=''
          countryCode=''
          region=''
          linkedin='exampledin'
        />
      )

      const contactSection = screen.getByTestId('contact')
      const linkedin = within(contactSection).getByText(/exampledin/)
      expect(linkedin).not.toBeFalsy()
      expect(linkedin).toHaveAttribute(
        'href',
        'https://linkedin.com/in/exampledin'
      )
    })
  })

  test('Hides things appropriately by default', () => {
    render(
      <Contact
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

    const address = screen.getByTestId('address')
    expect(address).toHaveTextContent('Example City, California')
    expect(address).not.toHaveTextContent('2712')
  })
})
