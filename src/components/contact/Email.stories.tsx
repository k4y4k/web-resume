import * as React from 'react'
import Email from './Email'

export default {
  title: 'Contact/Email',
  component: Email,
}

const Template = (args): JSX.Element => <Email {...args} />

export const Primary = Template.bind({})
Primary.args = { email: 'kayak@example.com' }

export const NoData = Template.bind({})
NoData.args = {}
