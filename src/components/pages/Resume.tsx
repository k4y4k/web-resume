import * as React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import pageStyles, { a4Data } from '../../helpers/pageStyles'
import tw, { css } from 'twin.macro'
import BackgroundImage from 'gatsby-background-image'
import Contact from '../blocks/Contact'
import { convertToBgImage } from 'gbimage-bridge'
import Education from '../blocks/Education'
import Experience from '../blocks/Experience'
import { getImage } from 'gatsby-plugin-image'
import Header from '../blocks/Header'
import Skills from '../blocks/Skills'

const resumeContentStyles = css`
  ${tw`grid grid-flow-row-dense grid-cols-2 text-sm `}
  max-height: calc( ${a4Data.heightToMillimeters()}mm * 0.8 );
  grid-template-rows: content content content;
  grid-template-areas:
    'ex sk'
    'ex sk'
    'ex sk';
`

const Resume = (): JSX.Element => {
  const { placeholderImage } = useStaticQuery(
    graphql`
      {
        placeholderImage: file(relativePath: { eq: "unsplash.jpg" }) {
          childImageSharp {
            gatsbyImageData(
              width: 2000
              placeholder: BLURRED
              formats: [AUTO, WEBP, AVIF]
            )
          }
        }
      }
    `
  )

  const bgImage = convertToBgImage(getImage(placeholderImage))
  return (
    <BackgroundImage css={pageStyles} Tag='section' {...bgImage}>
      <div
        tw='bg-white p-8'
        css={{ height: `${a4Data.heightToMillimeters() - 25}mm` }}
      >
        <Header />
        <main css={resumeContentStyles}>
          <Experience />
          <div style={{ gridArea: 'sk' }}>
            <Contact />
            <Skills />
            <Education />
          </div>
        </main>
      </div>
    </BackgroundImage>
  )
}

export default Resume
