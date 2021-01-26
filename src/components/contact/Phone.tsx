import * as React from 'react'

interface PhoneTypes {
  num?: string
}

const Phone = ({ num = 'Error: No Phone' }: PhoneTypes): JSX.Element => {
  if (num === 'Error: No Phone') return <p>{num}</p>

  // xxx xxx xxxx
  const formattedNum = Array.from(num)
  formattedNum.splice(3, 0, ' ')
  formattedNum.splice(7, 0, ' ')

  return <p>{formattedNum.join('')}</p>
}

export default Phone
