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
  image: {
    childImageSharp: {
      fluid: {
        base64:
          'data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAAAAQDBf/EABYBAQEBAAAAAAAAAAAAAAAAAAMBAv/aAAwDAQACEAMQAAAB4mlEdvQStW7ANMgh/wD/xAAcEAABBQADAAAAAAAAAAAAAAABAAIDESEQEkH/2gAIAQEAAQUCpMdSGqUZWg1xG0dff//EABgRAAIDAAAAAAAAAAAAAAAAAAEQAhEx/9oACAEDAQE/ASKUtX//xAAYEQACAwAAAAAAAAAAAAAAAAAAAhARMf/aAAgBAgEBPwEsXI//xAAaEAACAgMAAAAAAAAAAAAAAAAAEAEhERJB/9oACAEBAAY/AlRUGHt1f//EABwQAAMAAgMBAAAAAAAAAAAAAAABESFBMVFhgf/aAAgBAQABPyFwV+CRXiEzo6Qm9B9pN86NfDIFchysI//aAAwDAQACAAMAAAAQV8f8/8QAFxEBAQEBAAAAAAAAAAAAAAAAAQAREP/aAAgBAwEBPxBFlsTn/8QAFhEBAQEAAAAAAAAAAAAAAAAAASBR/9oACAECAQE/EDSF/8QAHBABAAICAwEAAAAAAAAAAAAAAQARIUExUWGB/9oACAEBAAE/EGN6uowjT1dQBKmadT1a6JQjlioFWBcsQVXrfsTQ2ZMqoC1aJ//Z',
        aspectRatio: 1,
        src: '/static/530a5a77c1b73af19ebda974f5bcbb84/74fd5/hero.jpg',
        srcSet:
          '/static/530a5a77c1b73af19ebda974f5bcbb84/e3903/hero.jpg 480w,\n/static/530a5a77c1b73af19ebda974f5bcbb84/b31d1/hero.jpg 960w,\n/static/530a5a77c1b73af19ebda974f5bcbb84/74fd5/hero.jpg 1920w,\n/static/530a5a77c1b73af19ebda974f5bcbb84/c1679/hero.jpg 2880w,\n/static/530a5a77c1b73af19ebda974f5bcbb84/549be/hero.jpg 3840w,\n/static/530a5a77c1b73af19ebda974f5bcbb84/d8dfd/hero.jpg 4000w',
        srcWebp: '/static/530a5a77c1b73af19ebda974f5bcbb84/6833b/hero.webp',
        srcSetWebp:
          '/static/530a5a77c1b73af19ebda974f5bcbb84/61162/hero.webp 480w,\n/static/530a5a77c1b73af19ebda974f5bcbb84/596e5/hero.webp 960w,\n/static/530a5a77c1b73af19ebda974f5bcbb84/6833b/hero.webp 1920w,\n/static/530a5a77c1b73af19ebda974f5bcbb84/5c931/hero.webp 2880w,\n/static/530a5a77c1b73af19ebda974f5bcbb84/7d6cd/hero.webp 3840w,\n/static/530a5a77c1b73af19ebda974f5bcbb84/bb057/hero.webp 4000w',
        sizes: '(max-width: 1920px) 100vw, 1920px',
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
        imageData={data?.image.childImageSharp.fluid}
      />
    )

    const name = screen.getByText('kayak')
    expect(name).not.toBeFalsy()

    const subtitle = screen.getByText(
      'CEO of supermarket cookie quality debates'
    )
    expect(subtitle).not.toBeFalsy()
  })
})
