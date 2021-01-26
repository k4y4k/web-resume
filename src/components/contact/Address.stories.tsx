import * as React from 'react'
import Address from './Address'

export default {
  title: 'Contact/Address',
  component: Address,
}

const Template = (args): JSX.Element => <Address {...args} />

export const NonRestricted = Template.bind({})
NonRestricted.args = {
  streetName: 'Example Rd',
  streetNum: 75,
  suburb: 'Example Suburb',
  city: 'Example City',
  state: 'Example',
  postcode: 8877,
  restrictAddress: false,
}

export const CI = Template.bind({})
CI.args = {
  streetName: 'Example Rd',
  streetNum: 75,
  suburb: 'Example Suburb',
  city: 'Example City',
  state: 'Example State',
  postcode: 8877,
  restrictAddress: true,
}

export const NoData = Template.bind({})
NoData.args = {}
