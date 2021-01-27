import * as React from 'react'
import { screen, render } from '@testing-library/react'
import GitHub from './GitHub'

describe('<GitHub />', () => {
  test('handles no data', () => {
    render(<GitHub />)

    const github = screen.getByText('Error: No GitHub')
    expect(github).not.toBeFalsy()
  })

  test('displays username', () => {
    render(<GitHub username='octocat' />)

    const github = screen.getByText('octocat')
    expect(github).not.toBeFalsy()
  })

  test('links to profile', () => {
    render(<GitHub username='octocat' />)
    const github = screen.getByText('octocat')

    expect(github).toHaveAttribute('href', 'https://github.com/octocat')
  })

  test('link opens in new tab', () => {
    render(<GitHub username='octocat' />)

    const github = screen.getByText('octocat')
    expect(github).toHaveAttribute('target', '_blank')
  })

  test.todo('displays logo')
})
