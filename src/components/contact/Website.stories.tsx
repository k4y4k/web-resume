import * as React from 'react'
import Website from './Website'

export default {
  title: 'Contact/Website',
  component: Website,
}

const Template = (args): JSX.Element => <Website {...args} />

export const Primary = Template.bind({})
Primary.args = { url: 'example.com' }

export const HTTP = Template.bind({})
HTTP.args = { url: 'example.com', proto: 'http://' }

export const NoData = Template.bind({})
NoData.args = {}
