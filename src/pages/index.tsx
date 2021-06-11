/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable sort-imports */

import * as React from 'react'
import { GlobalStyles } from 'twin.macro'
import { Helmet } from 'react-helmet'
import { IconContext } from '@react-icons/all-files'
import Modal from '../components/modal/Modal'
import '../index.css'
import Resume from '../components/pages/Resume'
import CoverLetter from '../components/pages/CoverLetter'

const IndexRoute = (): JSX.Element => {
  return (
    <IconContext.Provider value={{ className: 'icon' }}>
      <Helmet defer={false}>
        <html lang='en' />
        <meta charSet='utf-8' />
        <title>{'Example Resumé | k4y4k/web-resume'}</title>
        <meta name='description' content='Online resume.' />
        <link rel='canonical' href='https://kayak.rocks/web-resume' />
        <meta property='og:type' content='website' />
      </Helmet>
      <GlobalStyles />

      <Modal />

      <main tw='flex flex-row flex-wrap place-content-evenly'>
        <Resume />
        <CoverLetter />
      </main>
    </IconContext.Provider>
  )
}

export default IndexRoute
