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
  tw`min-h-screen font-sans text-white`,
  `
background: #c94b4b;
background: -webkit-linear-gradient(to bottom, #4b134f, #c94b4b);  
background: linear-gradient(to bottom, #4b134f, #c94b4b);
  `,
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
        <main>
          <Experience />
          <Education />
          <Skills />
        </main>
      </div>
    </IconContext.Provider>
  )
}

export default IndexRoute
