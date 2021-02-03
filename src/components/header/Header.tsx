import 'twin.macro'
import * as React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import BackgroundImage from 'gatsby-background-image'
import Name from './Name'
import Subtitle from './Subtitle'

interface PureHeaderTypes {
  name: string
  subtitle: string
  imageData: Record<string, unknown>
}

export const PureHeader = ({
  name,
  subtitle,
  imageData,
}: PureHeaderTypes): JSX.Element => (
  <BackgroundImage
    tag='header'
    tw='text-white h-auto uppercase p-12 text-white flex flex-col'
    fluid={imageData}
    backgroundColor='#000000'
  >
    <Name name={name} />
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

  return <PureHeader name={name} subtitle={label} imageData={imageData} />
}

export default Header
