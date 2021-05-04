import * as React from 'react'
import { FiPhone } from '@react-icons/all-files/fi/FiPhone'

interface PhoneTypes {
  num: string
  restrictDisplay?: boolean
}

const Phone = ({
  num,
  restrictDisplay = true,
}: PhoneTypes): JSX.Element | null => {
  if (num === '') return null

  if (!restrictDisplay) {
    // xxx xxx xxxx
    const formattedNum = Array.from(num)
    formattedNum.splice(3, 0, ' ')
    formattedNum.splice(7, 0, ' ')

    return (
      <li data-testid='contactPhone'>
        <FiPhone /> {formattedNum.join('')}
      </li>
    )
  }

  return null
}

export default Phone
