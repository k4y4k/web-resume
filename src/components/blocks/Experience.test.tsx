import { screen, render } from '@testing-library/react'
import * as React from 'react'
import { PureExperience as Experience } from './Experience'

describe('<Experience />', () => {
  test('bails out on no data', () => {
    render(<Experience history={[]} />)

    // still want the title
    expect(screen.getByTestId('experience')).toBeInTheDocument()

    expect(screen.queryByTestId('sectionItemContainer')).not.toBeInTheDocument()
  })

  test('renders array of >=1 experience items', () => {
    const data = [
      {
        company: 'Company',
        position: 'President',
        website: 'http://company.com',
        startDate: '2013-01-01',
        endDate: '2014-01-01',
        summary: 'Description...',
        highlights: ['Started the company'],
      },
    ]

    render(<Experience history={data} />)

    const experienceList = screen.getAllByTestId('experience')

    expect(experienceList.length).toBe(1)
  })
})
