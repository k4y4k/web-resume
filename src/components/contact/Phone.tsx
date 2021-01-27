import * as React from 'react'

interface PhoneTypes {
  num?: string
  restrictDisplay?: boolean
}

const Phone = ({
  num = 'Error: No Phone',
  restrictDisplay = true,
}: PhoneTypes): JSX.Element => {
  if (num === 'Error: No Phone') return <p data-testid='phone'>{num}</p>

  if (!restrictDisplay) {
    // xxx xxx xxxx
    const formattedNum = Array.from(num)
    formattedNum.splice(3, 0, ' ')
    formattedNum.splice(7, 0, ' ')

    return <p data-testid='phone'>{formattedNum.join('')}</p>
  }

  return <p data-testid='phone'></p>
}

export default Phone
