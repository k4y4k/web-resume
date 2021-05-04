import * as React from 'react'
import { render, screen } from '@testing-library/react'
import Composed from './Composed'

describe('<Composed />', () => {
  test('Composes heading and bucket', () => {
    render(<Composed heading='Wow!' bucket={['Things!']} />)

    const bucket = screen.getByTestId('skillsBucket')
    expect(bucket).toBeInTheDocument()

    expect(screen.getByTestId('skillsComposed')).toMatchSnapshot()
  })

  describe(' incomplete data', () => {
    test('empty everything', () => {
      render(<Composed heading='' bucket={[]} />)

      const skills = screen.queryByTestId('skillsComposed')
      expect(skills).not.toBeInTheDocument()
      expect(skills).toMatchSnapshot()
    })

    test('title; bucket as empty array', () => {
      render(<Composed heading='Wow!' bucket={[]} />)

      const skills = screen.queryByTestId('skillsComposed')
      expect(skills).not.toBeInTheDocument()
      expect(skills).toMatchSnapshot()
    })

    test('title; bucket as empty string', () => {
      render(<Composed heading='' bucket={['']} />)

      const skills = screen.queryByTestId('skillsComposed')
      expect(skills).not.toBeInTheDocument()
      expect(skills).toMatchSnapshot()
    })

    test('no title; bucket as empty string', () => {
      render(<Composed heading='' bucket={['']} />)

      const skills = screen.queryByTestId('skillsComposed')
      expect(skills).not.toBeInTheDocument()
      expect(skills).toMatchSnapshot()
    })

    test('no title; bucket', () => {
      render(<Composed heading='' bucket={['Things!']} />)

      const skills = screen.queryByTestId('skillsComposed')
      expect(skills).not.toBeInTheDocument()
      expect(skills).toMatchSnapshot()
    })
  })
})
