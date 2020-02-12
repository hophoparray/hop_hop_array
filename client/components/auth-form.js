import React from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {auth} from '../store'
import styled from 'styled-components'
import {Link} from 'react-router-dom'

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
        <Container>
          <Wrapper>
            <SignInBox>
              <LogoContainer>
                <Logo
                  src="data:image/png;base64,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

"
                />
              </LogoContainer>
              <H2>{displayName}</H2>
              <Social>
                <AuthButton color="#4285f4" href="/auth/google">
                  <i className="fa fa-google" />
                  <span />
                </AuthButton>
                <AuthButton color="#24292e" href="/auth/github">
                  <i className="fa fa-github" />
                  <span />
                </AuthButton>
              </Social>

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
                {displayName == 'Login' ? (
                  <div>
                    <SubHead>Not a member?</SubHead>
                    <Link to="/signup">
                      <OtherButton className="button">
                        Sign Up
                        <span />
                        <span />
                        <span />
                        <span />
                      </OtherButton>
                    </Link>
                  </div>
                ) : (
                  <div>
                    <SubHead>Already a member?</SubHead>
                    <Link to="/login">
                      <OtherButton className="button">
                        Login
                        <span />
                        <span />
                        <span />
                        <span />
                      </OtherButton>
                    </Link>
                  </div>
                )}
              </Form>
            </SignInBox>
          </Wrapper>
        </Container>
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

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: #e7e7e7;
`

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #e7e7e7;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  position: relative;
  overflow: hidden;
  width: 768px;
  max-width: 50%;
  max-height: 100%;
`

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-block-end: 0.5em;
  max-height: 100vh;
`

const Logo = styled.img`
  width: 70%;
  height: auto;
  margin-block-end: 0.5em;
  margin-block-start: 0.5em;
`

const SignInBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding: 40px;
  background-color: #fff;
`

const H2 = styled.h2`
  font-family: 'Open Sans', sans-serif;
  text-transform: uppercase;
  margin-top: 0px;
  margin-block-end: 0px;
`

const Social = styled.div`
  display: flex;
  flex-direction: row;
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
  width: 13%;
  border-radius: 50%;
  align-self: stretch;
  display: flex;
  align-items: baseline;
  margin-inline-end: 10px;
  margin-inline-start: 10px;

  span {
    flex: 1;
    display: flex;
    justify-content: center;
  }
`

const LoginButton = styled.button`
  font-size: 15px;
  margin-block-end: 0em;
`

const OtherButton = styled.button`
  font-size: 15px;
  margin-block-end: 0em;
  margin-block-start: 0em;
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

const SubHead = styled.h3`
  margin-block-end: 0em;
  font-size: 0.9em;
`
