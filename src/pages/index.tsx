/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable sort-imports */

import * as React from 'react'
import tw, { css, GlobalStyles } from 'twin.macro'
import { Helmet } from 'react-helmet'
import Education from '../components/blocks/Education'
import Experience from '../components/blocks/Experience'
import Header from '../components/blocks/Header'
import Skills from '../components/blocks/Skills'
import { IconContext } from '@react-icons/all-files'
import { graphql, useStaticQuery } from 'gatsby'
import { getImage } from 'gatsby-plugin-image'
import { convertToBgImage } from 'gbimage-bridge'
import BackgroundImage from 'gatsby-background-image'
import Contact from '../components/blocks/Contact'

const paperSizes = require('@5no/paper-sizes')
const paperOptions = { dpi: 300, type: 'mm' }
const a4Data = paperSizes('A4', paperOptions)

const pageStyles = css`
  ${tw`w-full p-12 mx-auto my-12 shadow-md`}
  width: ${a4Data.widthToMillimeters()}mm;
  height: ${a4Data.heightToMillimeters()}mm;
`

const mainStyles = css`
  ${tw`grid grid-flow-row-dense grid-cols-2 text-sm `}
  max-height: calc( ${a4Data.heightToMillimeters()}mm * 0.8 );
  grid-template-rows: content content content;
  grid-template-areas:
    'ex sk'
    'ex sk'
    'ex sk';
`

const IndexRoute = (): JSX.Element => {
  const { placeholderImage } = useStaticQuery(
    graphql`
      query {
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
    <IconContext.Provider value={{ className: 'icon' }}>
      <Helmet defer={false}>
        <html lang='en' />
        <meta charSet='utf-8' />
        <title>{'Resume | <kayak />'}</title>
        <meta name='description' content='Online resume.' />
        <link rel='canonical' href='https://kayak.rocks/web-resume' />
        <meta property='og:type' content='website' />
      </Helmet>
      <GlobalStyles />

      <BackgroundImage
        css={pageStyles}
        Tag='section'
        {...bgImage}
        preserveStackingContext
      >
        <div
          tw='bg-white p-8'
          css={{ height: `${a4Data.heightToMillimeters() - 25}mm` }}
        >
          <Header />
          <main css={mainStyles}>
            <Experience />
            <div style={{ gridArea: 'sk' }}>
              <Skills />
              <Education />
              <Contact />
            </div>
          </main>
        </div>
      </BackgroundImage>
    </IconContext.Provider>
  )
}

export default IndexRoute
