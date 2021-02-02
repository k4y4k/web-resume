import * as React from 'react'
import { PureSkills as Skills } from './Skills'

export default {
  title: 'Blocks/Skills',
  component: Skills,
}

const Template = (args): JSX.Element => <Skills {...args} />

export const Primary = Template.bind({})
Primary.args = {
  skills: [
    {
      name: 'Web Development',
      level: 'Master',
      keywords: ['HTML', 'CSS', 'Javascript'],
    },
  ],
}
