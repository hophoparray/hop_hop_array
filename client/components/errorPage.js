import React from 'react'
import history from '../history'
import {Link} from 'react-router-dom'
import styled from 'styled-components'

export default class ErrorPage extends React.Component {
  constructor() {
    super()
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    history.push('/algos')
  }

  render() {
    return (
      <Wrapper>
        <Title>Sorry, this page isn't available.</Title>
        <Message>The link you followed may be broken.</Message>
        <Message>
          <Link to="/home" onClick={this.handleClick}>
            Go Back to [Hop Hop Array]
          </Link>
        </Message>
      </Wrapper>
    )
  }
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
const Title = styled.h3`
  text-transform: uppercase;
  font-family: 'Open Sans', sans-serif;
  font-size: 1.4em;
`
const Message = styled.h4`
  font-size: 1em;
  font-weight: 100;
  font-family: 'Open Sans', sans-serif;
`
