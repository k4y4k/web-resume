import React from 'react'
import Header from '../components/header/Header'
import { GlobalStyles } from 'twin.macro'
import Contact from '../components/contact/Contact'
import Experience from '../components/blocks/Experience'

const IndexRoute = (): JSX.Element => {
  console.log(JSON)
  return (
    <>
      <GlobalStyles />
      <Header />
      <Contact />
      <main>
        <Experience />
      </main>
    </>
  )
}

export default IndexRoute
