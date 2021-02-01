import * as React from 'react'
import { PureExperience as Experience } from './Experience'

export default {
  title: 'Blocks/Experience',
  component: Experience,
}

const Template = (args): JSX.Element => <Experience {...args} />

export const Primary = Template.bind({})
Primary.args = {
  history: [
    {
      company: 'Company',
      position: 'President',
      website: 'http://company.com',
      startDate: '2013-01-01',
      endDate: '2014-01-01',
      summary: 'Description...',
      highlights: ['Started the company'],
    },
  ],
}
