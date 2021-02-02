import * as React from 'react'
import Name from './Name'

export default {
  title: 'Header/Name',
  component: Name,
}

const Template = (args): JSX.Element => <Name {...args} />

export const Primary = Template.bind({})
Primary.args = { name: 'kayak kayak' }

export const NoData = Template.bind({})
NoData.args = { name: '' }
