import React from 'react'
import Header from '../components/header/Header'
import { GlobalStyles } from 'twin.macro'
import Contact from '../components/contact/Contact'
import Experience from '../components/blocks/Experience'
import { IconContext } from '@react-icons/all-files/lib'
import Education from '../components/blocks/Education'
import Skills from '../components/blocks/Skills'

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
      <Header />
      <Contact />
      <main>
        <Experience />
        <Education />
        <Skills />
      </main>
    </IconContext.Provider>
  )
}

export default IndexRoute
