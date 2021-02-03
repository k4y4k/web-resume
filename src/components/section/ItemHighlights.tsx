import 'twin.macro'
import * as React from 'react'

interface highlightTypes {
  highlights: string[] | undefined
}

const Highlights = ({ highlights }: highlightTypes): JSX.Element => (
  <span>
    {highlights?.map((el: string, i: number) => {
      return (
        <li
          key={i}
          tw='bg-black text-white inline-block mr-4 mb-1 px-2 py-1 text-sm font-mono'
        >
          {el}
        </li>
      )
    })}
  </span>
)

export default Highlights
