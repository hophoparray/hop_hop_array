import React from 'react'
import styled from 'styled-components'

const Footer = () => {
  return (
    <Wrapper className="footer">
      <Details>Copyright © 2020 [HOP HOP] ARRAY</Details>
    </Wrapper>
  )
}

export default Footer

const Wrapper = styled.div`
  position: fixed;
  bottom: 0;
  background: #e7e7e7;
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 1em;
  margin-top: 1rem;
  align-items: center;
  justify-content: center;
`

const Details = styled.p`
  font-family: 'Open Sans', sans-serif;
`
