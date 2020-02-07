import React from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {auth} from '../store'
import styled from 'styled-components'

/**
 * COMPONENT
 */
const AuthForm = props => {
  const {name, displayName, handleSubmit, error} = props

  return (
    <div>
      <Wrapper>
        <SignInBox>
          <H2>{displayName}</H2>
          <Title>[Hop Hop] Array</Title>
          <Form onSubmit={handleSubmit} name={name}>
            <label htmlFor="email">Email</label>
            <input name="email" type="text" />

            <label htmlFor="password">Password</label>
            <input name="password" type="password" />

            <LoginButton type="submit">{displayName}</LoginButton>
            {error && error.response && <Error> {error.response.data} </Error>}
          </Form>
          <Hr />
          <AuthButton color="#4285f4" href="/auth/google">
            <i className="fa fa-google" />
            <span>Google</span>
          </AuthButton>
          <AuthButton color="#24292e" href="/auth/github">
            <i className="fa fa-github" />
            <span>GitHub</span>
          </AuthButton>
        </SignInBox>
      </Wrapper>
    </div>
  )
}

/**
 * CONTAINER
 *   Note that we have two different sets of 'mapStateToProps' functions -
 *   one for Login, and one for Signup. However, they share the same 'mapDispatchToProps'
 *   function, and share the same Component. This is a good example of how we
 *   can stay DRY with interfaces that are very similar to each other!
 */
const mapLogin = state => {
  return {
    name: 'login',
    displayName: 'Login',
    error: state.user.error
  }
}

const mapSignup = state => {
  return {
    name: 'signup',
    displayName: 'Sign Up',
    error: state.user.error
  }
}

const mapDispatch = dispatch => {
  return {
    handleSubmit(evt) {
      evt.preventDefault()
      const formName = evt.target.name
      const email = evt.target.email.value
      const password = evt.target.password.value
      dispatch(auth(email, password, formName))
    }
  }
}

export const Login = connect(mapLogin, mapDispatch)(AuthForm)
export const Signup = connect(mapSignup, mapDispatch)(AuthForm)

/**
 * PROP TYPES
 */
AuthForm.propTypes = {
  name: PropTypes.string.isRequired,
  displayName: PropTypes.string.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  error: PropTypes.object
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 80px;
`

const SignInBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px;
  background-color: #e7e7e7;
`

const Title = styled.h1`
  margin-top: 0px;
  font-family: 'Open Sans', sans-serif;
  text-transform: uppercase;
`

const H2 = styled.h2`
  font-family: 'Open Sans', sans-serif;
  text-transform: uppercase;
  margin-top: 0px;
  margin-bottom: 4px;
`
const AuthButton = styled.a`
  font-family: 'Open Sans', sans-serif;
  flex: 1;
  background: ${props => props.color || '#333'};
  color: white;
  padding: 8px 16px;
  text-decoration: none;
  font-size: 25px;
  margin-top: 12px;
  align-self: stretch;
  display: flex;
  align-items: baseline;

  span {
    flex: 1;
    display: flex;
    justify-content: center;
  }
`

const SubHead = styled.h3`
  font-family: 'Open Sans', sans-serif;
  text-transform: uppercase;
`

const LoginButton = styled.button`
  &:hover {
    color: #000000;
  }
  font-size: 20px;
  border: 3px solid black;
  font-family: 'Open Sans', sans-serif;
  font-weight: bold;
  text-transform: uppercase;
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
  font-family: 'Open Sans', sans-serif;
  text-transform: uppercase;
  align-self: stretch;
  padding-left: 30px;
  padding-right: 30px;

  input {
    font-size: 20px;
    margin-bottom: 10px;
  }
`
const Hr = styled.hr`
  margin: 20px 0px 16px 0px;
  height: 3px;
  background: white;
  align-self: stretch;
  border: none;
`
const Error = styled.div`
  font-size: 11px;
  margin-top: 5px;
  width: 100%;
`
