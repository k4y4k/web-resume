import * as React from 'react'
import { render, screen } from '@testing-library/react'
import Twitter from './Twitter'

describe('<Twitter />', () => {
  test('handles no data', () => {
    render(<Twitter username='' />)

    const twitter = screen.queryByTestId('contactTwitter')
    expect(twitter).not.toBeInTheDocument()
    expect(twitter).toMatchSnapshot()
  })

  test('handles null data', () => {
    render(<Twitter username={null} />)

    const twitter = screen.queryByTestId('contactTwitter')
    expect(twitter).not.toBeInTheDocument()
    expect(twitter).toMatchSnapshot()
  })

  test('displays twitter username with @ in front', () => {
    render(<Twitter username='kayakSinger1' />)

    const twitter = screen.getByTestId('contactTwitter')

    expect(twitter).toHaveTextContent('@kayakSinger1')
    expect(twitter).toMatchSnapshot()
  })

  test('links to profile in new tab', () => {
    render(<Twitter username='kayakSinger1' />)

    const twitter = screen.getByTestId('contactTwitter')

    expect(twitter).toHaveAttribute('href', 'https://twitter.com/kayakSinger1')
    expect(twitter).toHaveAttribute('target', '_blank')
  })
})
