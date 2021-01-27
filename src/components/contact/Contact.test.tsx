import * as React from 'react'
import Contact from './Contact'
import { screen, render, within } from '@testing-library/react'

describe('<Contact />', () => {
  test('handles no data', () => {
    render(<Contact />)

    const contactSectionContents = screen.getAllByText('Error', {
      exact: false,
    })

    expect(contactSectionContents).toHaveLength(7)
  })

  describe('composes all other elements', () => {
    test('email', () => {
      render(<Contact email='kayak@example.com' />)
      const contactSection = screen.getByTestId('contact')
      const email = within(contactSection).getByText(/@example.com/gi)
      expect(email).not.toBeFalsy()
    })

    test('twitter', () => {
      render(<Contact twitter='kayakSinger1' />)
      const contactSection = screen.getByTestId('contact')
      const twitter = within(contactSection).getByText(/@kayakSinger1/gi)
      expect(twitter).not.toBeFalsy()
    })

    test('github', () => {
      render(<Contact github='octocat' />)
      const contactSection = screen.getByTestId('contact')
      const github = within(contactSection).getByText(/octocat/gi)

      expect(github).not.toBeFalsy()
    })

    test('website', () => {
      render(<Contact website='example.com' />)
      const contactSection = screen.getByTestId('contact')
      const website = within(contactSection).getByText(/example.com/)
      expect(website).not.toBeFalsy()
    })

    test('phone', () => {
      render(<Contact restrictDisplay={false} phone='0123456789' />)
      const contactSection = screen.getByTestId('contact')
      const phone = within(contactSection).getByText(/[0-9]/gi)
      expect(phone).not.toBeFalsy()
    })

    test('address', () => {
      render(
        <Contact
          streetName='Example Rd'
          streetNum='75'
          suburb='Example Suburb'
          city='Example City'
          state='Example State'
          postcode='Example Postcode'
        />
      )
      const contactSection = screen.getByTestId('contact')
      const address = within(contactSection).getByText(/Example City/gi)
      expect(address).not.toBeFalsy()
    })

    test('linkedin', () => {
      render(<Contact linkedin='exampledin' />)
      const contactSection = screen.getByTestId('contact')
      const linkedin = within(contactSection).getByText(/exampledin/)
      expect(linkedin).not.toBeFalsy()
      expect(linkedin).toHaveAttribute('href')
    })
  })

  test('Hides things appropriately by default', () => {
    render(
      <Contact
        email='kayak@example.com'
        twitter='kayakSinger1'
        phone='0123456789'
        github='octocat'
        website='example.com'
        linkedin='exampledin'
        streetNum={75}
        streetName='Example Rd'
        suburb='Example Suburb'
        city='Example City'
        state='Example State'
        postcode={8888}
      />
    )

    const phone = screen.getByTestId('phone')
    expect(phone).not.toHaveTextContent(/\W/gi)

    const address = screen.getByTestId('address')
    expect(address).toHaveTextContent('Example City, Example State')
    expect(address).not.toHaveTextContent('75')
  })
})
