import * as React from 'react'
import Email from './Email'
import { fake } from 'faker'

export default {
  title: 'Contact/Email',
  component: Email,
}

const Template = (args): JSX.Element => <Email {...args} />

export const Primary = Template.bind({})
Primary.args = { email: fake('{{internet.exampleEmail}}') }

export const NoData = Template.bind({})
NoData.args = { email: '' }
