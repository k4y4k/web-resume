import * as React from 'react'
import AddressGreeting from './AddressGreeting'
import { render } from '@testing-library/react'
import { useStaticQuery } from 'gatsby'

describe('<AddressGreeting/>', () => {
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
    })
  )

  test('renders OK', () => {
    const { container } = render(<AddressGreeting />)

    expect(container).toMatchSnapshot()
  })
})
