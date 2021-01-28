import * as React from 'react'
import ItemDates from './ItemDates'

export default {
  title: 'Section Item/Date',
  component: ItemDates,
}

const Template = (args): JSX.Element => <ItemDates {...args} />

export const NoData = Template.bind({})

export const Primary = Template.bind({})
Primary.args = { from: '2013-05', to: '2015-06' }

export const ToPresent = Template.bind({})
ToPresent.args = { from: '2017-02-03' }
