import 'twin.macro'
import * as React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Subtitle from '../header/Subtitle'
import Title from '../header/Title'

interface PureHeaderTypes {
  title: string
  subtitle: string
}

export const PureHeader = ({
  title,
  subtitle,
}: PureHeaderTypes): JSX.Element => (
  <div
    data-testid='header'
    tw='py-4 mb-4 pt-0 text-center border-b border-black '
  >
    <Title title={title} />
    <Subtitle subtitle={subtitle} />
  </div>
)

export const Header = (): JSX.Element => {
  const data = useStaticQuery(graphql`
    {
      text: file(extension: { eq: "json" }, name: { eq: "data" }) {
        childDataJson {
          basics {
            name
            label
          }
        }
      }
    }
  `)

  const { name, label } = data?.text.childDataJson.basics

  return <PureHeader title={name} subtitle={label} />
}

export default Header
