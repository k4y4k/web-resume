import * as React from 'react'
import { screen, render } from '@testing-library/react'
import Twitter from './Twitter'

describe('<Twitter />', () => {
  test('usernames no data', () => {
    render(<Twitter username='' />)

    const twitter = screen.getByText('Error: No Twitter')
    expect(twitter).not.toBeFalsy()
  })

  test('displays twitter username with @ in front', () => {
    render(<Twitter username='kayakSinger1' />)

    const regex = /@[A-z]*/
    const twitter = screen.getByText(regex)

    expect(twitter).not.toBeFalsy()
  })

  test('links to profile in new tab', () => {
    render(<Twitter username='kayakSinger1' />)

    const regex = /@[A-z]*/
    const twitter = screen.getByText(regex)

    expect(twitter).toHaveAttribute('href', 'https://twitter.com/kayakSinger1')
    expect(twitter).toHaveAttribute('target', '_blank')
  })

  test.todo('displays logo')
})
