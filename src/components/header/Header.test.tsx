import * as React from 'react'
import { render, screen } from '@testing-library/react'
import { PureHeader as Header } from './Header'

const data = {
  file: {
    childDataJson: {
      basics: {
        name: 'kayak',
        label: 'CEO of supermarket cookie quality debates',
      },
    },
  },
}

describe('<Header />', () => {
  test('displays header', () => {
    render(
      <Header
        name={data?.file.childDataJson.basics.name}
        subtitle={data?.file.childDataJson.basics.label}
      />
    )

    const name = screen.getByText('kayak')
    const subtitle = screen.getByText(
      'CEO of supermarket cookie quality debates'
    )

    expect(name).not.toBeFalsy()
    expect(subtitle).not.toBeFalsy()
  })
})
