import * as React from 'react'
import Composed from './Composed'

export default {
  title: 'Skills/Composed',
  component: Composed,
}

const Template = (args): JSX.Element => <Composed {...args} />

export const Primary = Template.bind({})
Primary.args = {
  heading: 'Impersonations',
  bucket: ['Kermit the Frog', 'An Interested Third Party', 'Count Bleck'],
}
