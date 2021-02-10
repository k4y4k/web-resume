import * as React from 'react'
import Address from './Address'
import faker from 'faker'

export default {
  title: 'Contact/Address',
  component: Address,
}

const Template = (args): JSX.Element => <Address {...args} />

export const NonRestricted = Template.bind({})
NonRestricted.args = {
  address: faker.address.streetAddress(),
  postalCode: faker.address.zipCode(),
  city: faker.address.city(),
  countryCode: faker.address.countryCode(),
  region: faker.address.state(),
  restrictDisplay: false,
}

export const Primary = Template.bind({})
Primary.args = {
  address: faker.address.streetAddress(),
  postalCode: faker.address.zipCode(),
  city: faker.address.city(),
  countryCode: faker.address.countryCode(),
  region: faker.address.state(),
}

export const NoData = Template.bind({})
NoData.args = {
  address: '',
  postalCode: '',
  city: '',
  countryCode: '',
  region: '',
}
