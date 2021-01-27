import * as React from 'react'
import Contact from './Contact'

export default {
  title: 'Contact/Container',
  component: Contact,
}

const Template = (args): JSX.Element => <Contact {...args} />

export const Primary = Template.bind({})
Primary.args = {
  email: 'kayak@example.com',
  twitter: 'kayakSinger1',
  phone: '0123456789',
  github: 'octocat',
  website: 'example.com',
  linkedin: 'exampledin',
  streetNum: 75,
  streetName: 'Example Rd',
  suburb: 'Example Suburb',
  city: 'Example City',
  state: 'Example State',
  postcode: 8888,
}

export const NoData = Template.bind({})
NoData.args = {}

export const NotHidden = Template.bind({})
NotHidden.args = {
  restrictDisplay: false,
  email: 'kayak@example.com',
  twitter: 'kayakSinger1',
  phone: '0123456789',
  github: 'octocat',
  website: 'example.com',
  linkedin: 'exampledin',
  streetNum: 75,
  streetName: 'Example Rd',
  suburb: 'Example Suburb',
  city: 'Example City',
  state: 'Example State',
  postcode: 8888,
}
