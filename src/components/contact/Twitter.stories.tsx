import * as React from 'react'
import Twitter from './Twitter'

export default {
  title: 'Contact/Twitter',
  component: Twitter,
}

const Template = (args): JSX.Element => <Twitter {...args} />

export const Primary = Template.bind({})
Primary.args = { handle: 'kayakSinger1' }

export const NoData = Template.bind({})
NoData.args = {}
