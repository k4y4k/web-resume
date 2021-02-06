/* eslint-disable sort-imports */
// they ARE sorted!

import * as React from 'react'
import tw, { GlobalStyles, TwStyle } from 'twin.macro'
import { IconContext } from '@react-icons/all-files/lib'
import { Helmet } from 'react-helmet'
import Contact from '../components/contact/Contact'
import Education from '../components/blocks/Education'
import Experience from '../components/blocks/Experience'
import Header from '../components/header/Header'
import Skills from '../components/blocks/Skills'

const indexStyles = (): Array<TwStyle | string> => [
  tw`min-h-screen pb-1 font-sans text-white`,
  'background: linear-gradient(to bottom, #542344, #c94b4b);',

  tw`print:text-sm print:bg-none`,
  '@media print { background: #542344; }',
]

const mainStyles = (): Array<TwStyle | string> => [
  'width: 75vw;',
  '@media (max-width: 1023px) { width: 90vw; }',
  tw`py-4 mx-auto grid lg:block`,
  `grid-template-areas: 
    "exed skills"
    "exed skills";
  grid-template-columns: 2fr 1fr;
  grid-template-rows: min-content min-content;`,

  tw`print:(py-4)`,
  `@media print { 
    display: grid !important;
    width: 95vw !important;

   }`,
]

const IndexRoute = (): JSX.Element => {
  return (
    <IconContext.Provider
      value={{
        style: {
          verticalAlign: 'middle',
          marginBottom: '0.125rem',
          display: 'inline-block',
          marginRight: '0.25rem',
        },
      }}
    >
      <Helmet defer={false}>
        <html lang='en' />
        <meta charSet='utf-8' />
        <title>{'Resume | <kayak />'}</title>
        <meta name='description' content='Online resume for me, kayak.' />
        <meta property='og:type' content='article' />{' '}
        <link rel='canonical' href='https://kayak.rocks/web-resume' />
      </Helmet>
      <GlobalStyles />
      <div css={indexStyles()}>
        <Header />
        <Contact />
        <main css={mainStyles()}>
          <Experience />
          <Education />
          <Skills />
        </main>
      </div>
    </IconContext.Provider>
  )
}

export default IndexRoute
