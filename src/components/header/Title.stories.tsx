import * as React from 'react'
import Title from './Title'

export default {
  title: 'Header/Title',
  component: Title,
}

const Template = (args): JSX.Element => <Title {...args} />

export const Primary = Template.bind({})
Primary.args = { name: 'kayak kayak' }

export const NoData = Template.bind({})
NoData.args = { name: '' }
