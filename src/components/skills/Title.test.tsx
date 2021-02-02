import * as React from 'react'
import { render, screen } from '@testing-library/react'
import Title from './Title'

describe('<Title />', () => {
  test('no data?!?!??!', () => {
    render(<Title category='' />)

    // it's that time of night where I recklessly inline things :)
    expect(screen.getByText('Error: No Skills Category')).toBeInTheDocument()
  })

  test('displays title 👌', () => {
    render(<Title category='Monster Hunting' />)

    expect(screen.getByText('Monster Hunting')).toBeInTheDocument()
  })
})
