/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable sort-imports */

import * as React from 'react'
import tw, { css, GlobalStyles } from 'twin.macro'
import { Helmet } from 'react-helmet'
import Contact from '../components/blocks/Contact'
import Education from '../components/blocks/Education'
import Experience from '../components/blocks/Experience'
import Header from '../components/blocks/Header'
import Skills from '../components/blocks/Skills'
import { IconContext } from '@react-icons/all-files'
const paperSizes = require('@5no/paper-sizes')

const paperOptions = { dpi: 300, type: 'mm' }
const a4Data = paperSizes('A4', paperOptions)

const pageStyles = css`
  ${tw`w-full p-12 mx-auto my-12 bg-yellow-100 shadow-md`}
  max-width: ${a4Data.widthToMillimeters()}mm;
  max-height: ${a4Data.heightToMillimeters()}mm;
`

const mainStyles = css`
  ${tw`grid grid-flow-row-dense grid-cols-2 `}
  max-height: calc( ${a4Data.heightToMillimeters()}mm * 0.8 );
  grid-template-rows: auto 3fr;
  grid-template-areas:
    'ex sk'
    'ex ed ';
`

const IndexRoute = (): JSX.Element => {
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

      <div css={pageStyles}>
        <Header />
        <Contact />
        <main css={mainStyles}>
          <Experience />
          <Skills />
          <Education />
        </main>
      </div>
    </IconContext.Provider>
  )
}

export default IndexRoute
