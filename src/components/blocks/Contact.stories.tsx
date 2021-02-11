import * as React from 'react'
import { PureContact as Contact } from './Contact'
import { fake } from 'faker'

export default {
  title: 'Contact/Container',
  component: Contact,
}

const Template = (args): JSX.Element => <Contact {...args} />

export const Primary = Template.bind({})
Primary.args = {
  email: fake('{{internet.exampleEmail}}'),
  twitter: fake('{{internet.userName}}'),
  github: fake('{{internet.userName}}'),
  website: fake('{{internet.url}}'),
  linkedin: fake('{{internet.userName}}'),
  city: fake('{{address.city}}'),
  region: fake('{{address.state}}'),
  countryCode: fake('{{address.countryCode}}'),
  address: fake('{{address.streetAddress}}'),
  postalCode: fake('{{address.zipCode}}'),
}

export const NoData = Template.bind({})
NoData.args = {
  email: '',
  twitter: '',
  github: '',
  website: '',
  linkedin: '',
  city: '',
  region: '',
  countryCode: '',
  address: '',
  postalCode: '',
}

export const NotHidden = Template.bind({})
NotHidden.args = {
  email: fake('{{internet.exampleEmail}}'),
  twitter: fake('{{internet.userName}}'),
  github: fake('{{internet.userName}}'),
  website: fake('{{internet.url}}'),
  linkedin: fake('{{internet.userName}}'),
  city: fake('{{address.city}}'),
  region: fake('{{address.state}}'),
  countryCode: fake('{{address.countryCode}}'),
  address: fake('{{address.streetAddress}}'),
  postalCode: fake('{{address.zipCode}}'),
  restrictDisplay: false,
}
