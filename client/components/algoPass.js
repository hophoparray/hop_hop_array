import React from 'react'
import styled from 'styled-components'

export default class AlgoPass extends React.Component {
  render() {
    console.log('this is props of algopass', this)
    return (
      <Wrapper>
        <img src="https://3.bp.blogspot.com/-StU37DdFxKg/Wcpt8sJ-9lI/AAAAAAAKpzg/qcObtkOEXrslo5LLyiFcHGQKVMVO-9YAwCLcBGAs/s1600/AW551796_01.gif" />
        <Details>
          <Title>CONGRATULATIONS</Title>
          <p>You've earned 10 points</p>
          <Buttons>
            <a href="/algos">
              <button className="button">
                Practice More
                <span />
                <span />
                <span />
                <span />
              </button>
            </a>
            <a href="/profile">
              <button className="button">
                See Your Progress
                <span />
                <span />
                <span />
                <span />
              </button>
            </a>
          </Buttons>
        </Details>
      </Wrapper>
    )
  }
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background: #e7e7e7;
  margin-block-start: 10px;
  padding: 10px;
  font-family: 'Open Sans', sans-serif;
`

const Details = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #e7e7e7;
  font-family: 'Open Sans', sans-serif;
`

const Title = styled.h1`
  text-transform: uppercase;
  font-family: 'Open Sans', sans-serif;
  font-size: 1.4em;
`

const Buttons = styled.div`
  display: flex;
  flex-direction: row;
`
