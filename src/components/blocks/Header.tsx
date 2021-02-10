import * as React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import tw, { TwStyle } from 'twin.macro'
import BackgroundImage from 'gatsby-background-image'
import Subtitle from '../header/Subtitle'
import Title from '../header/Title'

interface PureHeaderTypes {
  title: string
  subtitle: string
  imageData: Record<string, unknown>
}

const headerStyles = (): Array<TwStyle | string> => [
  tw`flex flex-col h-auto p-12 text-white uppercase`,
  tw`print:p-2 print:content-center`,
]

export const PureHeader = ({
  title,
  subtitle,
  imageData,
}: PureHeaderTypes): JSX.Element => (
  <BackgroundImage
    css={headerStyles()}
    tag='header'
    fluid={imageData}
    backgroundColor='#000000'
    data-testid='header'
  >
    <Title title={title} />
    <Subtitle subtitle={subtitle} />
  </BackgroundImage>
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

      image: file(extension: { eq: "jpg" }, name: { eq: "hero" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 1920, cropFocus: CENTER) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  const { name, label } = data?.text.childDataJson.basics
  const imageData = data?.image.childImageSharp.fluid

  return <PureHeader title={name} subtitle={label} imageData={imageData} />
}

export default Header
