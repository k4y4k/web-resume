import * as React from 'react'
import { render, screen } from '@testing-library/react'
import { PureEducation as Education } from './Education'

describe('<Education />', () => {
  test('bails out on no data', () => {
    render(<Education history={[]} />)

    // still want the title
    expect(screen.getByTestId('education')).toBeInTheDocument()

    // if there's no data, we shouldn't see <ItemContainer /> render
    expect(screen.queryByTestId('sectionItemContainer')).not.toBeInTheDocument()
    expect(screen.getByTestId('education')).toMatchSnapshot()
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

    const { container } = render(<Education history={data} />)

    const EducationList = screen.getByTestId('education')

    expect(EducationList).toBeInTheDocument()
    expect(container.firstChild).toMatchSnapshot()
  })
})
