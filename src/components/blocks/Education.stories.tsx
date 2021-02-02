import * as React from 'react'
import { PureEducation as Education } from './Education'

export default {
  title: 'Blocks/Education',
  component: Education,
}

const Template = (args): JSX.Element => <Education {...args} />

const Primary = Template.bind({})
Primary.args = {
  education: [
    {
      institution: 'University',
      area: 'Software Development',
      studyType: 'Bachelor',
      startDate: '2011-01-01',
      endDate: '2013-01-01',
      gpa: '4.0',
      courses: ['DB1101 - Basic SQL'],
    },
  ],
}
