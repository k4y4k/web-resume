import * as React from 'react'
import Bucket from './Bucket'

export default {
  title: 'Skills/Bucket',
  component: Bucket,
}

const Template = (args): JSX.Element => <Bucket {...args} />

export const NoData = Template.bind({})

export const Primary = Template.bind({})
Primary.args = { skills: ['a', 'b', 'c', 'one', 'two', 'three'] }
