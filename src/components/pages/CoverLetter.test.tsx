/* eslint-disable @typescript-eslint/no-var-requires */

import * as React from 'react'
import CoverLetter from './CoverLetter'
import MockDate from 'mockdate'
import { render } from '@testing-library/react'
import { useStaticQuery } from 'gatsby'

// Necessary to fixate generated className.
jest.mock('short-uuid')

beforeEach(() => {
  MockDate.set(new Date('2021-06-17'))
})

afterEach(() => {
  MockDate.reset()
})

describe('Cover Letter', () => {
  beforeAll(() =>
    (useStaticQuery as jest.Mock).mockReturnValue({
      jsonName: {
        childDataJson: {
          basics: {
            name: 'Blaze Powlowski',
          },
        },
      },
      letterContents: {
        childMarkdownRemark: {
          frontmatter: {
            recruiterName: 'Polycarp Medvedev',
            address: '60342 Athena Plaza',
            city: 'Port Idellabury',
            countryCode: 'ES',
            postalCode: '60033-4381',
            region: 'South Dakota',
          },
          html: '<p>esse dolore molestias suscipit dignissimos illum cupiditate consequatur non voluptates ut dolores aliquam cum qui sed libero architecto iusto porro unde suscipit non non tempore officiis vero aut rem id repellendus et iste</p>\n<p>voluptatem beatae illo rerum mollitia expedita et ducimus aliquam deserunt aut suscipit error facere recusandae sunt in aut aperiam ut quia minima ullam quasi laudantium alias velit accusamus</p>\n<p>voluptatem maiores repellendus voluptate aperiam quia magni quisquam incidunt quis voluptas repudiandae aut dolorum eum</p>\n<p>voluptas consequatur ab reiciendis omnis ipsam qui quia aperiam dolores ut ducimus rerum magnam voluptatem dolorum natus aut minus odio reprehenderit impedit quis recusandae repellat et autem nihil voluptas beatae minima laboriosam cum in sed iusto officia</p>\n<p>sunt laborum hic rerum quaerat vel quidem perspiciatis et et porro iste laborum reiciendis enim nostrum ut</p>\n<p>tenetur omnis ad at ratione quia quia et alias sequi sunt aliquid eos aut aut odio eligendi consequatur nulla optio tenetur tempore quaerat et pariatur harum quasi ipsam optio molestiae sed consectetur quos tenetur nihil velit</p>\n<p>quis similique libero nemo optio et voluptatum similique ut</p>\n<p>voluptas nulla aut similique possimus nihil sed laboriosam dolorum molestiae quia voluptatem consequuntur corporis impedit dolorum quos incidunt ut numquam sit aut error vero consequatur</p>',
        },
      },
      headerImage: {
        childImageSharp: {
          fluid: {
            aspectRatio: 1,
            sizes: `100 200 300`,
            src: `pretend-i-am-a-base64-encoded-image`,
            srcSet: `asdfasdf`,
          },
        },
      },
    })
  )

  test('Renders OK', () => {
    const uuid = require('short-uuid')
    uuid.generate.mockImplementation(() => '73WakrfVbNJBaAmhQtEeDv')

    const { container } = render(<CoverLetter />)

    expect(container).toMatchSnapshot()
  })
})
