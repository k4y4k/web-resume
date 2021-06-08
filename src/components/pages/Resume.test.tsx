import * as React from 'react'
import { render, screen } from '@testing-library/react'
import Resume from './Resume'
import { useStaticQuery } from 'gatsby'

describe('Resume', () => {
  beforeAll(() =>
    (useStaticQuery as jest.Mock).mockReturnValue({
      data: {
        placeholderImage: {
          childImageSharp: {
            gatsbyImageData: {
              layout: 'constrained',
              placeholder: {
                fallback:
                  'data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAeABQDASIAAhEBAxEB/8QAGAAAAwEBAAAAAAAAAAAAAAAAAAIEAwX/xAAWAQEBAQAAAAAAAAAAAAAAAAABAgP/2gAMAwEAAhADEAAAAeHVki3ilLR3rnpKWFx//8QAGRAAAwEBAQAAAAAAAAAAAAAAAAECERIh/9oACAEBAAEFAiPVrKnBPCaTVz0lGvGZyScyf//EABkRAAIDAQAAAAAAAAAAAAAAAAARAQIQIf/aAAgBAwEBPwHJq+iP/8QAFREBAQAAAAAAAAAAAAAAAAAAARD/2gAIAQIBAT8Bgz//xAAbEAACAQUAAAAAAAAAAAAAAAAAMSEQERIgUf/aAAgBAQAGPwLWRiinbmIj/8QAGxABAAIDAQEAAAAAAAAAAAAAAQAxESFRkcH/2gAIAQEAAT8hi1FwwX7HIpczMzqhqcBiNrUYFK3BWfhACitw7vZ//9oADAMBAAIAAwAAABBL/Yz/xAAYEQADAQEAAAAAAAAAAAAAAAAAAREhMf/aAAgBAwEBPxDj0woaFo//xAAYEQEBAQEBAAAAAAAAAAAAAAABABEhMf/aAAgBAgEBPxAcbl4DaX//xAAcEAEAAwEBAAMAAAAAAAAAAAABABEhMWFRcYH/2gAIAQEAAT8QFETEnDKdGEphOg0lfBfzEEOnsKpOy49ZgXlwvcDr9Q0qiwlTivVnFWwOE9P2ILUWP//Z',
              },
              images: {
                fallback: {
                  src: '/static/55019b471591030c02c094b138609888/0cb03/unsplash.jpg',
                  srcSet:
                    '/static/55019b471591030c02c094b138609888/2579c/unsplash.jpg 250w,\n/static/55019b471591030c02c094b138609888/2ff65/unsplash.jpg 500w,\n/static/55019b471591030c02c094b138609888/0cb03/unsplash.jpg 1000w',
                  sizes: '(min-width: 1000px) 1000px, 100vw',
                },
                sources: [
                  {
                    srcSet:
                      '/static/55019b471591030c02c094b138609888/ba6f7/unsplash.avif 250w,\n/static/55019b471591030c02c094b138609888/1f164/unsplash.avif 500w,\n/static/55019b471591030c02c094b138609888/75f1f/unsplash.avif 1000w',
                    type: 'image/avif',
                    sizes: '(min-width: 1000px) 1000px, 100vw',
                  },
                  {
                    srcSet:
                      '/static/55019b471591030c02c094b138609888/1c893/unsplash.webp 250w,\n/static/55019b471591030c02c094b138609888/316df/unsplash.webp 500w,\n/static/55019b471591030c02c094b138609888/b3e07/unsplash.webp 1000w',
                    type: 'image/webp',
                    sizes: '(min-width: 1000px) 1000px, 100vw',
                  },
                ],
              },
              width: 2000,
              height: 3000,
            },
          },
        },
      },
    })
  )

  test('Renders OK', () => {
    render(<Resume />)

    expect(screen).toMatchSnapshot()
  })
})
