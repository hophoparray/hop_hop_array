/* eslint-disable react/display-name */
import React, {Component} from 'react'
import {connect} from 'react-redux'
import {me} from '../store/user'
import {fetchMyAlgos} from '../store/userAlgos'

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
    console.log('STATE', this.state)
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
      return (
        <div>
          <div>
            <h1>Your Stats</h1>
            <h4>Level {user.userLevel}:</h4>
            <h4>{level}</h4>
            <h4>Points: {user.points}</h4>
            <h4>Keep up the good work!</h4>
          </div>
          <div>
            <h1>Completed Exercises</h1>
            <h4>map through here</h4>
          </div>
        </div>
      )
    }
    return (
      <div>
        <div>
          <h1>Your Stats</h1>
          <h4>Level {user.userLevel}:</h4>
          <h4>{level}</h4>
          <h4>Points: {user.points}</h4>
          <h4>
            {100 - user.points} points from {next}
          </h4>
        </div>
        <div>
          <h1>Completed Exercises</h1>
          <h4>map through here</h4>
        </div>
      </div>
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
