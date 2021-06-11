import 'twin.macro'
import * as React from 'react'
import dayjs from 'dayjs'
import localizedFormat from 'dayjs/plugin/localizedFormat'
dayjs.extend(localizedFormat)

const DateLine = (): JSX.Element => {
  return <p tw='font-bold'>{dayjs().format('LL')}</p>
}

export default DateLine
