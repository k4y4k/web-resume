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
      image: {
        childImageSharp: {
          fluid: {
            base64:
              'data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAAAAQDBf/EABYBAQEBAAAAAAAAAAAAAAAAAAMBAv/aAAwDAQACEAMQAAAB4mlEdvQStW7ANMgh/wD/xAAcEAABBQADAAAAAAAAAAAAAAABAAIDESEQEkH/2gAIAQEAAQUCpMdSGqUZWg1xG0dff//EABgRAAIDAAAAAAAAAAAAAAAAAAEQAhEx/9oACAEDAQE/ASKUtX//xAAYEQACAwAAAAAAAAAAAAAAAAAAAhARMf/aAAgBAgEBPwEsXI//xAAaEAACAgMAAAAAAAAAAAAAAAAAEAEhERJB/9oACAEBAAY/AlRUGHt1f//EABwQAAMAAgMBAAAAAAAAAAAAAAABESFBMVFhgf/aAAgBAQABPyFwV+CRXiEzo6Qm9B9pN86NfDIFchysI//aAAwDAQACAAMAAAAQV8f8/8QAFxEBAQEBAAAAAAAAAAAAAAAAAQAREP/aAAgBAwEBPxBFlsTn/8QAFhEBAQEAAAAAAAAAAAAAAAAAASBR/9oACAECAQE/EDSF/8QAHBABAAICAwEAAAAAAAAAAAAAAQARIUExUWGB/9oACAEBAAE/EGN6uowjT1dQBKmadT1a6JQjlioFWBcsQVXrfsTQ2ZMqoC1aJ//Z',
            aspectRatio: 1,
            src: '/static/530a5a77c1b73af19ebda974f5bcbb84/276ce/hero.jpg',
            srcSet:
              '/static/530a5a77c1b73af19ebda974f5bcbb84/001d0/hero.jpg 480w,\n/static/530a5a77c1b73af19ebda974f5bcbb84/597f7/hero.jpg 960w,\n/static/530a5a77c1b73af19ebda974f5bcbb84/276ce/hero.jpg 1920w,\n/static/530a5a77c1b73af19ebda974f5bcbb84/e6a76/hero.jpg 2880w,\n/static/530a5a77c1b73af19ebda974f5bcbb84/89c49/hero.jpg 3840w,\n/static/530a5a77c1b73af19ebda974f5bcbb84/a2314/hero.jpg 4000w',
            srcWebp: '/static/530a5a77c1b73af19ebda974f5bcbb84/0015f/hero.webp',
            srcSetWebp:
              '/static/530a5a77c1b73af19ebda974f5bcbb84/38e92/hero.webp 480w,\n/static/530a5a77c1b73af19ebda974f5bcbb84/da5bf/hero.webp 960w,\n/static/530a5a77c1b73af19ebda974f5bcbb84/0015f/hero.webp 1920w,\n/static/530a5a77c1b73af19ebda974f5bcbb84/0d633/hero.webp 2880w,\n/static/530a5a77c1b73af19ebda974f5bcbb84/bcf05/hero.webp 3840w,\n/static/530a5a77c1b73af19ebda974f5bcbb84/12903/hero.webp 4000w',
            sizes: '(max-width: 1920px) 100vw, 1920px',
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
        imageData={data?.image.childImageSharp.fluid}
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
