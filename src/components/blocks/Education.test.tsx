import { render, screen } from '@testing-library/react'
import * as React from 'react'
import { PureEducation as Education } from './Education'

describe('<Education />', () => {
  test('bails out on no data', () => {
    render(<Education history={[]} />)

    // still want the title
    expect(screen.getByTestId('education')).toBeInTheDocument()

    expect(screen.queryByTestId('sectionItemContainer')).not.toBeInTheDocument()
  })

  test('renders array of >=1 Education items', () => {
    const data = [
      {
        institution: 'University',
        area: 'Software Development',
        studyType: 'Bachelor',
        startDate: '2011-01-01',
        endDate: '2013-01-01',
        gpa: '4.0',
        courses: ['DB1101 - Basic SQL'],
      },
    ]

    render(<Education history={data} />)

    const EducationList = screen.getAllByTestId('education')

    expect(EducationList.length).toBe(1)
  })
})
