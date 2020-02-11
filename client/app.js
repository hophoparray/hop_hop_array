import React from 'react'

import {Navbar, Footer} from './components'

import Routes from './routes'
import './themes'
import styled from 'styled-components'

const App = () => {
  return (
    <div>
      <Wrapper>
        <Navbar />
        <Routes />
        <Footer id="footer" />
      </Wrapper>
    </div>
  )
}

export default App

const Wrapper = styled.div`
  min-height: 100vh;
`
