import * as React from 'react'
import Subtitle from './Subtitle'

export default {
  title: 'Header/Subtitle',
  component: Subtitle,
}

const Template = (args): JSX.Element => <Subtitle {...args} />

export const Primary = Template.bind({})
Primary.args = { subtitle: 'lead singer of kayak and the kayaks' }

export const NoData = Template.bind({})
NoData.args = {}
