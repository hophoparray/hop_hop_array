/* eslint-disable react/display-name */
import React, {Component} from 'react'
import {connect} from 'react-redux'
import {me} from '../store/user'
import {fetchMyAlgos} from '../store/userAlgos'
import styled from 'styled-components'

class UserProfile extends Component {
  constructor(props) {
    super(props)
    this.state = {
      user: {},
      userAlgo: []
    }
  }

  componentDidMount() {
    this.props.getUser()
    this.props.getUserAlgos(this.props.user.id)
  }

  componentDidUpdate(prevProps) {
    if (prevProps.user !== this.props.user) {
      this.setState({
        user: this.props.user
      })
    }
    if (prevProps.userAlgos !== this.props.userAlgos) {
      this.setState({
        userAlgos: this.props.userAlgos
      })
    }
  }

  render() {
    if (!this.state.user) {
      return null
    }
    let user = this.state.user
    let level
    let next
    if (user.userLevel == 1) {
      level = 'Beginner'
      next = 'Intermediate'
    } else if (user.userLevel == 2) {
      level = 'Intermediate'
      next = 'Expert'
    } else {
      level = 'Expert'
    }
    if (level == 'Expert') {
      level = 'Master'
    }
    return (
      <Wrapper>
        <div>
          <div>
            <div>
              <Header>
                <PageName>Your Stats</PageName>
                <SubSubHead>{user.email}</SubSubHead>
              </Header>
            </div>

            <StatWrapper>
              <SubHead>Level: {user.userLevel}</SubHead>
              <SubSubHead>
                <i className="fa fa-star" /> {level}{' '}
                <i className="fa fa-star" />
              </SubSubHead>
            </StatWrapper>
            <br />
            <StatWrapper>
              <SubHead>Points: {user.points}</SubHead>
              <SubSubHead>
                <i className="fa fa-arrow-up" />{' '}
                {level !== 'Master'
                  ? `${100 - user.points} points from ${next}`
                  : `You have reached the top level: master`}{' '}
                <i className="fa fa-arrow-up" />
              </SubSubHead>
            </StatWrapper>
          </div>
          <div>
            <br />
            <PageName>Completed Exercises</PageName>
            <SubSubHead>map through Header</SubSubHead>
          </div>
        </div>
      </Wrapper>
    )
  }
}

const mapState = state => {
  return {
    user: state.user,
    userAlgos: state.userAlgos
  }
}

const mapDispatch = dispatch => {
  return {
    getUser: () => dispatch(me()),
    getUserAlgos: id => dispatch(fetchMyAlgos(id))
  }
}

export default connect(mapState, mapDispatch)(UserProfile)

//styled components
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
const PageName = styled.h1`
  font-family: 'Open Sans', sans-serif;
  text-transform: uppercase;

  letter-spacing: 1.9px;
  margin-block-end: 0;
`
const Header = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`
const SubHead = styled.h2`
  font-family: 'Open Sans', sans-serif;
  text-transform: uppercase;
`

const SubSubHead = styled.h4`
  font-family: 'Open Sans', sans-serif;
  text-transform: uppercase;
`

const StatWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #e7e7e7;
  border-radius: 5px;
`
