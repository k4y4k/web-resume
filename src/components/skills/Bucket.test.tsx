import * as React from 'react'
import { render, screen } from '@testing-library/react'
import Bucket from './Bucket'

describe('<Bucket />', () => {
  test('displays nothing for no data', () => {
    render(<Bucket skills={[]} />)

    const skills = screen.getByTestId('skillsBucket')

    expect(skills).toHaveTextContent('')
  })

  test('alphabetises input', () => {
    render(
      <Bucket
        skills={['JavaScript', 'React', 'A Minimal Caffeine Dependency']}
      />
    )

    const skills = screen.getByTestId('skillsBucket')
    expect(skills).toHaveTextContent(
      'A Minimal Caffeine Dependency JavaScript React'
    )
  })
})
