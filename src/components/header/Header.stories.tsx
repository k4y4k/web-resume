import * as React from 'react'
import { PureHeader as Header } from './Header'

export default {
  title: 'Header/Composed',
  components: Header,
}

const Template = (args): JSX.Element => <Header {...args} />

export const Composed = Template.bind({})
Composed.args = {
  name: 'kayak',
  subtitle: 'lead singer of kayak and the kayaks',
}

export const NoData = Template.bind({})
NoData.args = {}
