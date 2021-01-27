import * as React from 'react'
import Phone from './Phone'

export default {
  title: 'Contact/Phone',
  component: Phone,
}

const Template = (args): JSX.Element => <Phone {...args} />

export const Primary = Template.bind({})
Primary.args = { num: '0123456789' }

export const Unrestricted = Template.bind({})
Unrestricted.args = { num: '0123456789', restrictDisplay: false }

export const NoData = Template.bind({})
NoData.args = {}
