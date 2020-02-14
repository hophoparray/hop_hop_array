/* eslint-disable react/display-name */
import React, {Component} from 'react'
import {connect} from 'react-redux'
import {me} from '../store/user'
import {fetchAllAlgos} from '../store/allAlgos'
import styled from 'styled-components'
import {Link} from 'react-router-dom'

import ConnectedLeaderboard from './leaderboard'

class UserProfile extends Component {
  constructor(props) {
    super(props)
    this.state = {
      user: {},
      algos: []
    }
  }

  componentDidMount() {
    this.props.getUser()
    this.props.getAlgos(this.props.user.id)
  }

  componentDidUpdate(prevProps) {
    if (prevProps.user !== this.props.user) {
      this.setState({
        user: this.props.user
      })
    }
    if (prevProps.algos !== this.props.algos) {
      this.setState({
        algos: this.props.algos
      })
    }
  }

  render() {
    if (!this.state.user || !this.state.algos) {
      return null
    }
    let user = this.state.user
    let algos = this.state.algos
    let level
    let next
    let maxLevelPoint
    if (user.userLevel == 1) {
      level = 'Beginner'
      next = 'Intermediate'
      maxLevelPoint = 100
    } else if (user.userLevel == 2) {
      level = 'Intermediate'
      next = 'Expert'
      maxLevelPoint = 200
    } else {
      level = 'Expert'
      maxLevelPoint = null
    }
    if (level == 'Expert') {
      level = 'Expert'
    }
    return (
      <Wrapper>
        <br />
        <br />
        <Container className="profilecontainer">
          <br />
          <PageName>Completed Exercises</PageName>
          <div>
            <ul>
              {algos.map(algo => {
                if (algo.complete) {
                  return (
                    <li key={algo.id}>
                      <Algo href={`/algos/${algo.id}`}>{algo.name}</Algo>
                    </li>
                  )
                }
              })}
            </ul>
          </div>
        </Container>
        <Container className="profilecontainer">
          <br />
          <PageName>Your Stats</PageName>
          <SubHead>{user.email}</SubHead>
          <Level>Level: {user.userLevel}</Level>
          <SubHead>
            <i className="fa fa-star" /> {level} <i className="fa fa-star" />
          </SubHead>
          <br />
          <Points>Points: {user.points}</Points>
          <SubHead>
            <i className="fa fa-arrow-up" />{' '}
            {level === 'Beginner'
              ? `${100 - user.points} points from ${next}`
              : level === 'Intermediate'
                ? `${200 - user.points} points from ${next}`
                : `You have reached the top level: expert`}
            <i className="fa fa-arrow-up" />
          </SubHead>
          <Progress>
            {maxLevelPoint ? (
              <progress
                id="progressBar"
                max="100"
                value={100 - (maxLevelPoint - user.points)}
              />
            ) : null}
          </Progress>
        </Container>

        <Container className="profilecontainer">
          <ConnectedLeaderboard />
        </Container>
      </Wrapper>
    )
  }
}

const mapState = state => {
  return {
    user: state.user,
    algos: state.allAlgos
  }
}

const mapDispatch = dispatch => {
  return {
    getUser: () => dispatch(me()),
    getAlgos: id => dispatch(fetchAllAlgos(id))
  }
}

export default connect(mapState, mapDispatch)(UserProfile)

//styled components
const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: flex-start;
  margin-block-start: 1em;
  font-family: 'Open Sans', sans-serif;
`

const Algo = styled.a``

const Progress = styled.div`
  margin-block-start: 1em;
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background: #e7e7e7;
  padding: 15px;
`

const PageName = styled.h1`
  text-transform: uppercase;
  letter-spacing: 1.9px;
  font-size: 1.3em;
  margin-block-end: 0;
`

const SubHead = styled.h2`
  font-family: 'Open Sans', sans-serif;
  text-transform: uppercase;
  font-size: 0.9em;
`

const Level = styled.h2`
  text-transform: uppercase;
  letter-spacing: 1.9px;
  font-size: 1.3em;
  margin-block-end: 0;
  margin-block-start: 1em;
`

const Points = styled.h2`
  text-transform: uppercase;
  letter-spacing: 1.9px;
  font-size: 1.3em;
  margin-block-end: 0;
  margin-block-start: 1em;
`
