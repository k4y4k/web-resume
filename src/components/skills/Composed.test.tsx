import * as React from 'react'
import { render, screen } from '@testing-library/react'
import Composed from './Composed'

describe('<Composed />', () => {
  test('Composes heading and bucket', () => {
    render(<Composed heading='' bucket={[]} />)

    const heading = screen.getByText('Error: No Skills Category')
    expect(heading).toBeInTheDocument()

    const bucket = screen.getByTestId('skillsBucket')
    expect(bucket).toBeInTheDocument()
  })
})
