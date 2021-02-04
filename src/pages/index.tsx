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
  'background: linear-gradient(to bottom, #4b134f, #c94b4b);',
  'main { width: 75vw; margin: 0 auto; }',
  '@media (max-width: 1023px) { main { width: 90vw; } }',
]

const mainStyles = (): Array<TwStyle | string> => [
  tw`py-4 grid grid-rows-2`,
  `grid-template-areas: 
    "exed skills"
    "exed skills";
  grid-template-columns: 2fr 1fr;`,
  tw`lg:block`,
]

const IndexRoute = (): JSX.Element => {
  return (
    <IconContext.Provider
      value={{
        style: {
          verticalAlign: 'middle',
          marginBottom: '0.125rem',
          display: 'inline-block',
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
