import * as React from 'react'
import Title from './Title'

export default {
  title: 'Skills/Heading',
  component: Title,
}

const Template = (args): JSX.Element => <Title {...args} />

export const NoData = Template.bind({})

export const Primary = Template.bind({})
Primary.args = { category: 'Fine Baking' }
