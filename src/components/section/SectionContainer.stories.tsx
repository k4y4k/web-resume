import * as React from 'react'
import SectionContainer from './SectionContainer'

export default {
  title: 'Section/Container',
  component: SectionContainer,
}

const Template = (args): JSX.Element => <SectionContainer {...args} />

export const Primary = Template.bind({})
Primary.args = { title: 'Hey!' }
