import * as React from 'react'
import ItemContainer from './ItemContainer'

export default {
  title: 'Section Item/Container',
  component: ItemContainer,
}

const Template = (args): JSX.Element => <ItemContainer {...args} />

export const Primary = Template.bind({})
Primary.args = {
  title: 'Yowza!',
  subtitle: "Anything less and it wouldn't've been me",
  fromDate: '2020-01-01',
  details: `- did things;
- did more things;
- took a break`,
}
