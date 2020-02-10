import React from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {auth} from '../store'
import styled from 'styled-components'

/**
 * COMPONENT
 */
class AuthForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: props.name,
      displayName: props.displayName,
      handleSubmit: props.handleSubmit,
      error: props.error,
      isEmptyField: true,
      email: '',
      password: ''
    }
  }
  handleChange = async e => {
    await this.setState({
      [event.target.name]: e.target.value
    })
  }
  render() {
    const {name, displayName, handleSubmit, error, email, password} = this.state
    return (
      <div>
        <Wrapper>
          <SignInBox>
            <H2>{displayName}</H2>
            <Form onSubmit={handleSubmit} name={name}>
              <label htmlFor="email">Email</label>
              <Input
                name="email"
                type="text"
                onChange={this.handleChange}
                placeholder="email"
              />

              <label htmlFor="password">Password</label>
              <Input
                name="password"
                type="password"
                onChange={this.handleChange}
                placeholder="password"
              />
              <LoginButton
                className="button"
                type="submit"
                disabled={email.length == 0 && password.length == 0}
              >
                {displayName}
                <span />
                <span />
                <span />
                <span />
              </LoginButton>
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
  background-color: #e7e7e7;
`

const SignInBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px;
  background-color: #e7e7e7;
`

const H2 = styled.h2`
  font-family: 'Open Sans', sans-serif;
  text-transform: uppercase;
  margin-top: 0px;
`

const AuthButton = styled.a`
  font-family: 'Open Sans', sans-serif;
  flex: 1;
  background: ${props => props.color || '#333'};
  color: white;
  padding: 8px 10px;
  text-decoration: none;
  font-size: 25px;
  margin-top: 9px;
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
  font-size: 15px;
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
    font-size: 15px;
    margin-bottom: 10px;
  }
`

const Input = styled.input`
  font-size: 15px;
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
