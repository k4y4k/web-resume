import * as React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Name from './Name'
import Subtitle from './Subtitle'
import 'twin.macro'

interface PureHeaderTypes {
  name: string
  subtitle: string
}

export const PureHeader = ({
  name,
  subtitle,
}: PureHeaderTypes): JSX.Element => (
  <header aria-label='header' tw='uppercase'>
    <Name name={name} />
    <Subtitle subtitle={subtitle} />
  </header>
)

export const Header = (): JSX.Element => {
  const data = useStaticQuery(graphql`
    {
      file(extension: { eq: "json" }, name: { eq: "data" }) {
        childDataJson {
          basics {
            name
            label
          }
        }
      }
    }
  `)

  const { name, label } = data?.file.childDataJson.basics

  return <PureHeader name={name} subtitle={label} />
}

export default Header
