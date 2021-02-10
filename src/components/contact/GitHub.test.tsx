import * as React from 'react'
import { render, screen } from '@testing-library/react'
import GitHub from './GitHub'

describe('<GitHub />', () => {
  test('handles no data', () => {
    render(<GitHub username='' />)

    const github = screen.queryByTestId('contactGithub')
    expect(github).not.toBeInTheDocument()
    expect(github).toMatchSnapshot()
  })

  test('displays username', () => {
    render(<GitHub username='octocat' />)

    const github = screen.getByTestId('contactGithub')
    expect(github).toHaveTextContent('octocat')
    expect(github).toMatchSnapshot()
  })

  test('links to profile in new tab', () => {
    render(<GitHub username='octocat' />)
    const github = screen.getByTestId('contactGithub')

    expect(github).toHaveAttribute('href', 'https://github.com/octocat')

    expect(github).toHaveAttribute('target', '_blank')
  })
})
