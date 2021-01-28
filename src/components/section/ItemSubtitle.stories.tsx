import * as React from 'react'
import ItemSubtitle from './ItemSubtitle'

export default {
  title: 'Section Item/Subtitle',
  component: ItemSubtitle,
}

const Template = (args): JSX.Element => <ItemSubtitle {...args} />

export const Primary = Template.bind({})
Primary.args = { subtitle: 'Absolutely stunning. What a ripper.' }

export const NoData = Template.bind({})
