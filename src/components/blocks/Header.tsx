import * as React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Subtitle from '../header/Subtitle'
import Title from '../header/Title'
import tw from 'twin.macro'

interface PureHeaderTypes {
  title: string
  subtitle: string
  lightmode: boolean
  compact: boolean
}

interface HeaderTypes {
  lightmode?: boolean
  compact?: boolean
}

export const PureHeader = ({
  title,
  subtitle,
  lightmode = false,
  compact = false,
}: PureHeaderTypes): JSX.Element => (
  <div data-testid='header' tw='text-center'>
    <Title compact={compact} lightmode={lightmode} title={title} />
    <Subtitle compact={compact} lightmode={lightmode} subtitle={subtitle} />
    <hr
      css={[
        tw`block my-4`,
        compact && tw`my-8`,
        lightmode ? tw`bg-white` : tw`bg-black`,
      ]}
    />
  </div>
)

export const Header = ({
  lightmode = false,
  compact = false,
}: HeaderTypes): JSX.Element => {
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

  const { name, label } = data.text.childDataJson.basics

  return (
    <PureHeader
      title={name}
      lightmode={lightmode}
      subtitle={label}
      compact={compact}
    />
  )
}

export default Header
