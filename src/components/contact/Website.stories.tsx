import * as React from 'react'
import { fake } from 'faker'
import Website from './Website'

export default {
  title: 'Contact/Website',
  component: Website,
}

const Template = (args): JSX.Element => <Website {...args} />

export const Primary = Template.bind({})
Primary.args = { url: fake('{{internet.url}}') }

export const HTTP = Template.bind({})
HTTP.args = { url: fake('{{internet.url}}') }

export const NoData = Template.bind({})
NoData.args = { url: '' }
