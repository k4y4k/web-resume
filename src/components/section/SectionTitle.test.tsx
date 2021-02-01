import * as React from 'react'
import { screen, render } from '@testing-library/react'
import SectionTitle from './SectionTitle'

describe('<SectionTitle />', () => {
  test('no data? no wakkas', () => {
    render(<SectionTitle title='' />)

    const title = screen.getByText('Error: No Section Title')
    expect(title).toBeInTheDocument()
  })

  test('displays title', () => {
    render(<SectionTitle title='Check this' />)

    const title = screen.getByText('Check this')
    expect(title).toBeInTheDocument()
  })
})
