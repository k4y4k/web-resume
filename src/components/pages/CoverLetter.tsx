import * as React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import pageStyles, { a4Data } from '../../helpers/pageStyles'
import tw, { css } from 'twin.macro'
import BackgroundImage from 'gatsby-background-image'
import Contact from '../blocks/Contact'
import { convertToBgImage } from 'gbimage-bridge'
import CoverLetterContents from '../cover-letter/CoverLetterContents'
import { getImage } from 'gatsby-plugin-image'
import Header from '../blocks/Header'

const coverLetterContentStyles = css`
  ${tw`grid grid-flow-row-dense grid-cols-2 text-sm `}
  height: ${a4Data.heightToMillimeters()}mm;
  grid-template-columns: 1fr 2fr;
  grid-template-areas: 'header txt';
`

const CoverLetter = (): JSX.Element => {
  const { headerImage } = useStaticQuery(graphql`
    {
      headerImage: file(relativePath: { eq: "unsplash.jpg" }) {
        childImageSharp {
          gatsbyImageData(
            width: 2000
            quality: 90
            placeholder: BLURRED
            formats: [AUTO, WEBP, AVIF]
            transformOptions: {
              rotate: 180
              cropFocus: WEST
              fit: COVER
              duotone: { highlight: "#22d07f", opacity: 1, shadow: "#000000" }
            }
          )
        }
      }
    }
  `)

  const hdImg = convertToBgImage(getImage(headerImage))

  return (
    <div css={pageStyles} tw='bg-white p-0'>
      <div css={coverLetterContentStyles}>
        <BackgroundImage
          Tag='section'
          style={{ gridArea: 'header' }}
          tw='p-4 py-8'
          {...hdImg}
        >
          <Header lightmode={true} compact={true} />
          <Contact restrictDisplay={false} compact={true} />
        </BackgroundImage>
        <div style={{ gridArea: 'txt' }} tw='px-12'>
          <CoverLetterContents />
        </div>
      </div>
    </div>
  )
}

export default CoverLetter
