import * as React from 'react'
import faker from 'faker'
import GitHub from './GitHub'

export default {
  title: 'Contact/GitHub',
  component: GitHub,
}

const Template = (args): JSX.Element => <GitHub {...args} />

export const Primary = Template.bind({})
Primary.args = { username: faker.internet.userName() }

export const NoData = Template.bind({})
NoData.args = { username: '' }
