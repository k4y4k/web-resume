import * as React from 'react'
import Address from './Address'

export default {
  title: 'Contact/Address',
  component: Address,
}

const Template = (args): JSX.Element => <Address {...args} />

export const NonRestricted = Template.bind({})
NonRestricted.args = {
  address: '2712 Broadway St',
  postalCode: 'CA 94115',
  city: 'San Francisco',
  countryCode: 'US',
  region: 'California',
  restrictDisplay: false,
}

export const Primary = Template.bind({})
Primary.args = {
  streetName: 'Example Rd',
  streetNum: 75,
  suburb: 'Example Suburb',
  city: 'Example City',
  state: 'Example State',
  postcode: 8877,
}

export const NoData = Template.bind({})
NoData.args = {}
