import * as React from 'react'
import 'twin.macro'

interface highlightTypes {
  highlights: string[] | undefined
}

const Highlights = ({ highlights }: highlightTypes): JSX.Element => (
  <span>
    {highlights?.map((el: string, i: number) => {
      return (
        <li
          key={i}
          tw='bg-gray-600 text-white inline-block mr-4 mb-1 px-2 py-1 rounded-md text-sm'
        >
          {el}
        </li>
      )
    })}
  </span>
)

export default Highlights
