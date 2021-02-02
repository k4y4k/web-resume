import * as React from 'react'
import { render, screen } from '@testing-library/react'
import { PureSkills as Skills } from './Skills'

describe('<Skills />', () => {
  test('bails out on no data', () => {
    render(<Skills skills={[]} />)

    // still want the title
    expect(screen.getByTestId('skills')).toBeInTheDocument()

    expect(screen.queryByTestId('sectionItemContainer')).not.toBeInTheDocument()
  })

  test('renders array of >=1 skills items', () => {
    const data = [
      {
        name: 'Web Development',
        level: 'Master',
        keywords: ['HTML', 'CSS', 'Javascript'],
      },
    ]

    render(<Skills skills={data} />)

    const skillsList = screen.getAllByTestId('skills')

    expect(skillsList.length).toBe(1)
  })
})
