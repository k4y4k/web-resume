import * as React from 'react'
import { render, screen } from '@testing-library/react'
import ItemDetails from './ItemDetails'

describe('<ItemDetails />', () => {
  test('no data = no details section', () => {
    render(<ItemDetails details='' />)

    const details = screen.queryByTestId('sectionItemDetails')
    expect(details).not.toBeInTheDocument()
    expect(details).toMatchSnapshot()
  })

  test('renders markdown', () => {
    const string = '- a\n- b\n- c'

    render(<ItemDetails details={string} />)

    const details = screen.getByTestId('sectionItemDetails')
    expect(details).toBeInTheDocument()

    expect(details).toHaveTextContent('a b c')
    expect(details).toMatchSnapshot()
  })
})
