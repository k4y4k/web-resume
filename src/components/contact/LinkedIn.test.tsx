import * as React from 'react'
import { screen, render } from '@testing-library/react'
import LinkedIn from './LinkedIn'

describe('<LinkedIn />', () => {
  test('handles no data', () => {
    render(<LinkedIn username='' />)

    const linkedin = screen.getByText('Error: No LinkedIn')
    expect(linkedin).not.toBeFalsy()
  })

  test('links to profile', () => {
    render(<LinkedIn username='exampledin' />)

    const linkedin = screen.getByText('exampledin')
    expect(linkedin).not.toBeFalsy()
    expect(linkedin).toHaveAttribute(
      'href',
      'https://linkedin.com/in/exampledin'
    )
  })

  test('opens in new tab', () => {
    render(<LinkedIn username='exampledin' />)

    const linkedin = screen.getByText('exampledin')
    expect(linkedin).not.toBeFalsy()
    expect(linkedin).toHaveAttribute('target', '_blank')
  })

  test.todo('has cute little logo')
})
