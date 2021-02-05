/* eslint-disable sort-imports */
// they ARE sorted!

import * as React from 'react'
import tw, { GlobalStyles, TwStyle } from 'twin.macro'
import { IconContext } from '@react-icons/all-files/lib'
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
  tw`py-4 grid mx-auto lg:block`,
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
