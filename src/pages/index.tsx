/* eslint-disable sort-imports */
// they ARE sorted!

import * as React from 'react'
import { GlobalStyles } from 'twin.macro'
import { Helmet } from 'react-helmet'
import Contact from '../components/blocks/Contact'
import Education from '../components/blocks/Education'
import Experience from '../components/blocks/Experience'
import Header from '../components/blocks/Header'
import Skills from '../components/blocks/Skills'

const IndexRoute = (): JSX.Element => {
  return (
    <>
      <Helmet defer={false}>
        <html lang='en' />
        <meta charSet='utf-8' />
        <title>{'Resume | <kayak />'}</title>
        <meta name='description' content='Online resume.' />
        <link rel='canonical' href='https://kayak.rocks/web-resume' />
        <meta property='og:type' content='website' />
      </Helmet>
      <GlobalStyles />
      <div>
        <Header />
        <Contact />
        <main>
          <Experience />
          <Education />
          <Skills />
        </main>
      </div>{' '}
    </>
  )
}

export default IndexRoute
