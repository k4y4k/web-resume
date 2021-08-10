import 'twin.macro'
import * as React from 'react'
import dayjs from 'dayjs'
import localizedFormat from 'dayjs/plugin/localizedFormat'
dayjs.extend(localizedFormat)

const DateLine = (): JSX.Element => {
  return (
    <h1 tw='font-bold' style={{ fontSize: '21px' }}>
      {dayjs().format('LL')}
    </h1>
  )
}

export default DateLine
