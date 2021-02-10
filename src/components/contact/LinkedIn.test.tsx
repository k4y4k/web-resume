import * as React from 'react'
import { render, screen } from '@testing-library/react'
import LinkedIn from './LinkedIn'

describe('<LinkedIn />', () => {
  test('handles no data', () => {
    render(<LinkedIn username='' />)

    const linkedin = screen.queryByTestId('contactLinkedin')
    expect(linkedin).not.toBeInTheDocument()
    expect(linkedin).toMatchSnapshot()
  })

  test('handles null data', () => {
    render(<LinkedIn username={null} />)

    const linkedin = screen.queryByTestId('contactLinkedin')
    expect(linkedin).not.toBeInTheDocument()
    expect(linkedin).toMatchSnapshot()
  })

  test('links to profile in new tab', () => {
    render(<LinkedIn username='exampledin' />)

    const linkedin = screen.getByTestId('contactLinkedin')

    expect(linkedin).toHaveTextContent('exampledin')
    expect(linkedin).toHaveAttribute(
      'href',
      'https://linkedin.com/in/exampledin'
    )

    expect(linkedin).toHaveAttribute('target', '_blank')
    expect(linkedin).toMatchSnapshot()
  })
})
