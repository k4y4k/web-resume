import React from 'react'
import Header from '../components/header/Header'
import { GlobalStyles } from 'twin.macro'

const IndexRoute = (): JSX.Element => {
  console.log(JSON)
  return (
    <>
      <GlobalStyles />
      <Header />
      <main></main>
    </>
  )
}

export default IndexRoute
