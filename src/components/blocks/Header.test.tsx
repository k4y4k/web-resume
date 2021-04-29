/* eslint-disable @typescript-eslint/no-var-requires */

import * as React from 'react'
import { Header, PureHeader } from './Header'
import { render, screen } from '@testing-library/react'
import { useStaticQuery } from 'gatsby'

jest.mock('short-uuid')

describe('<Header />', () => {
  beforeEach(() => {
    // Freeze the generated className.
    const uuid = require('short-uuid')
    uuid.generate.mockImplementation(() => '73WakrfVbNJBaAmhQtEeDv')
  })

  beforeAll(() =>
    (useStaticQuery as jest.Mock).mockReturnValue({
      text: {
        childDataJson: {
          basics: {
            name: 'John Doe',
            label: 'Programmer',
          },
        },
      },
    })
  )

  test('displays header', () => {
    const data = {
      file: {
        childDataJson: {
          basics: {
            name: 'kayak',
            label: 'CEO of supermarket cookie quality debates',
          },
        },
      },
      image: {
        childImageSharp: {
          fluid: {
            base64: '',
            aspectRatio: 1,
            src: '',
            srcSet: '',
            srcWebp: '',
            srcSetWebp: '',
            sizes: '',
          },
        },
      },
    }

    render(
      <PureHeader
        title={data?.file.childDataJson.basics.name}
        subtitle={data?.file.childDataJson.basics.label}
      />
    )

    const name = screen.getByText('kayak')
    expect(name).not.toBeFalsy()

    const subtitle = screen.getByText(
      'CEO of supermarket cookie quality debates'
    )
    expect(subtitle).not.toBeFalsy()

    expect(screen.getByTestId('header')).toMatchSnapshot()
  })

  test('renders OK', () => {
    render(<Header />)

    expect(screen.getByTestId('header')).toMatchSnapshot()
  })
})
