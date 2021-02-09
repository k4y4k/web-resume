import * as React from 'react'
import { PureSkills, Skills } from './Skills'
import { render, screen } from '@testing-library/react'
import { useStaticQuery } from 'gatsby'

describe('<Skills />', () => {
  beforeAll(() =>
    (useStaticQuery as jest.Mock).mockReturnValue({
      file: {
        childDataJson: {
          skills: [
            {
              name: 'Web Development',
              keywords: ['HTML', 'CSS', 'Javascript'],
            },
          ],
        },
      },
    })
  )

  test('bails out on no data', () => {
    render(<PureSkills skills={[]} />)

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

    render(<PureSkills skills={data} />)

    const skillsList = screen.getAllByTestId('skills')

    expect(skillsList.length).toBe(1)
  })

  test('Skills renders OK', () => {
    render(<Skills />)

    expect(screen.queryByTestId('skills')).toMatchSnapshot()
  })
})
