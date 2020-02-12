import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import axios from 'axios'
import styled from 'styled-components'
import ContinueGame from './continueGame'
import StartGame from './startGame'

class Game extends Component {
  constructor() {
    super()
    this.state = {
      inGame: false
    }
  }

  componentDidMount() {
    if (this.props.user.gameId !== null) {
      this.setState({
        inGame: true
      })
    }
  }

  render() {
    return <div>{inGame ? <ContinueGame /> : <StartGame />}</div>
  }
}

const mapStateToProps = state => {
  return {
    user: state.user
  }
}

const ConnectedGame = connect(mapStateToProps)(Game)
export default ConnectedGame
