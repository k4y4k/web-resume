import * as React from 'react'
import ItemTitle from './ItemTitle'

export default {
  title: 'Section Item/Title',
  component: ItemTitle,
}

const Template = (args): JSX.Element => <ItemTitle {...args} />

export const Primary = Template.bind({})
Primary.args = { title: "You Won't Believe This Next Part" }

export const NoData = Template.bind({})
