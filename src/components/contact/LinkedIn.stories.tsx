import * as React from 'react'
import { fake } from 'faker'
import LinkedIn from './LinkedIn'

export default {
  title: 'Contact/LinkedIn',
  component: LinkedIn,
}

const Template = (args): JSX.Element => <LinkedIn {...args} />

export const Primary = Template.bind({})
Primary.args = { username: fake('{{internet.userName}}') }

export const NoData = Template.bind({})
NoData.args = { username: '' }
