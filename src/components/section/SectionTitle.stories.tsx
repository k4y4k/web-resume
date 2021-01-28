import * as React from 'react'
import SectionTitle from './SectionTitle'

export default {
  title: 'Section/Title',
  component: SectionTitle,
}

const Template = (args): JSX.Element => <SectionTitle {...args} />

export const NoData = Template.bind({})

export const Primary = Template.bind({})
Primary.args = { title: 'Congratulations! You are literate.' }
