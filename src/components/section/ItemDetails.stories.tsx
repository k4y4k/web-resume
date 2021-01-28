import * as React from 'react'
import ItemDetails from './ItemDetails'

export default {
  title: 'Section Item/Details',
  component: ItemDetails,
}

const Template = (args): JSX.Element => <ItemDetails {...args} />

export const NoData = Template.bind({})

export const Primary = Template.bind({})
const details = `
- aaa
- bbbb
- ccccc
`
Primary.args = { details }
