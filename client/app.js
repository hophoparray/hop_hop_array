import React from 'react'

import {Navbar, Footer} from './components'

import Routes from './routes'
import './themes'
import styled from 'styled-components'

const App = () => {
  if (
    window.location.href.indexOf('login') > -1 ||
    window.location.href.indexOf('signup') > -1 ||
    window.location.href == '/'
  ) {
    return (
      <div>
        <Wrapper>
          <Routes />
        </Wrapper>
      </div>
    )
  }
  return (
    <div>
      <Wrapper>
        <Navbar />
        <Routes />
      </Wrapper>
    </div>
  )
}

export default App

const Wrapper = styled.div`
  min-height: 100vh;
`
