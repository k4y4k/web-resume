import * as React from 'react'
import { screen, render } from '@testing-library/react'
import Twitter from './Twitter'

describe('<Twitter />', () => {
  test('handles no data', () => {
    render(<Twitter />)

    const twitter = screen.getByText('Error: No Twitter')
    expect(twitter).not.toBeFalsy()
  })

  test('displays twitter handle with @ in front', () => {
    render(<Twitter handle='kayakSinger1' />)

    const regex = /@[A-z]*/
    const twitter = screen.getByText(regex)

    expect(twitter).not.toBeFalsy()
  })
})
