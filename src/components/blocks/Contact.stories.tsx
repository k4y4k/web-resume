import * as React from 'react'
import { PureContact as Contact } from './Contact'

export default {
  title: 'Contact/Container',
  component: Contact,
}

const Template = (args): JSX.Element => <Contact {...args} />

export const Primary = Template.bind({})
Primary.args = {
  email: 'kayak@example.com',
  twitter: 'john',
  github: 'k4y4k',
  linkedin: 'linkyloo',
  website: 'http://johndoe.com',
  city: 'San Francisco',
  region: 'California',
  countryCode: 'US',
}

export const NoData = Template.bind({})
NoData.args = {
  email: '',
  twitter: '',
  github: '',
  linkedin: '',
  website: '',
  address: '',
  postalCode: '',
  city: '',
  countryCode: '',
  region: '',
}

export const NotHidden = Template.bind({})
NotHidden.args = {
  restrictDisplay: false,
  email: 'kayak@example.com',
  twitter: 'john',
  github: 'k4y4k',
  linkedin: 'linkyloo',
  website: 'http://johndoe.com',
  phone: '(912) 555-4321',
  address: '2712 Broadway St',
  postalCode: 'CA 94115',
  city: 'San Francisco',
  countryCode: 'US',
  region: 'California',
}
