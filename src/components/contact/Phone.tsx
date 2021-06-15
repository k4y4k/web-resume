import * as React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { FiPhone } from '@react-icons/all-files/fi/FiPhone'

interface PhoneTypes {
  restrictDisplay?: boolean
}

const Phone = ({ restrictDisplay = true }: PhoneTypes): JSX.Element | null => {
  if (restrictDisplay) return null

  const { phone } = useStaticQuery(graphql`
    {
      num: file(extension: { eq: "json" }, name: { eq: "data" }) {
        childDataJson {
          basics {
            phone
          }
        }
      }
    }
  `).num.childDataJson.basics

  // xxx xxx xxxx
  const formattedNum = Array.from(phone)
  formattedNum.splice(3, 0, ' ')
  formattedNum.splice(7, 0, ' ')

  return (
    <li data-testid='contactPhone'>
      <FiPhone /> {formattedNum.join('')}
    </li>
  )
}

export default Phone
