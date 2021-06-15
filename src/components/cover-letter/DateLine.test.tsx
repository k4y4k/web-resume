import * as React from 'react'
import DateLine from './DateLine'
import { render } from '@testing-library/react'

describe('DateLine', () => {
  test('renders OK', () => {
    const { container } = render(<DateLine />)

    expect(container).toMatchSnapshot()
  })
})
