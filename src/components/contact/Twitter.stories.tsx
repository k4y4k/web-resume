import * as React from 'react'
import { fake } from 'faker'
import Twitter from './Twitter'

export default {
  title: 'Contact/Twitter',
  component: Twitter,
}

const Template = (args): JSX.Element => <Twitter {...args} />

export const Primary = Template.bind({})
Primary.args = { username: fake('{{internet.userName}}') }

export const NoData = Template.bind({})
NoData.args = { username: '' }
