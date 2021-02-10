import * as React from 'react'
import { render, screen } from '@testing-library/react'
import SectionTitle from './SectionTitle'

describe('<SectionTitle />', () => {
  test('no data? no wakkas', () => {
    render(<SectionTitle title='' />)

    const title = screen.queryByTestId('sectionTitle')
    expect(title).not.toBeInTheDocument()
    expect(title).toMatchSnapshot()
  })

  test('displays title', () => {
    render(<SectionTitle title='Check this' />)

    const title = screen.getByTestId('sectionTitle')
    expect(title).toHaveTextContent(/check this/i)
    expect(title).toMatchSnapshot()
  })
})
