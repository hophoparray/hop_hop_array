import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import axios from 'axios'
import styled from 'styled-components'
import Axios from 'axios'
import {updateGame} from '../store/user'

class AllAlgos extends Component {
  constructor() {
    super()
    this.state = {
      algos: []
    }
  }

  async componentDidMount() {
    const user = this.props.user
    const allAlgos = await axios.get('/api/algos')
    const notAttempted = await uncompletedAlgos(allAlgos.data, user.id)

    this.setState({algos: notAttempted})
  }

  async startNewGame(algoId, userId) {
    const {data} = await axios.post('/api/games', {algoId, userId})

    this.props.onStartGame(data.id)
  }

  render() {
    const algos = this.state.algos
    const user = this.props.user

    let startGame = false
    // if (user.gameId === null) {
    //   startGame = true
    // }

    return (
      <Wrapper>
        <PageName>All Algos</PageName>
        <SubHead>Select an algo to attempt!</SubHead>
        <div>
          <table className="all-algos-table">
            <TableHeader>
              <tr>
                <Headers>Algo</Headers>
                <Headers>Level</Headers>
                <Headers>Prompt</Headers>
                {startGame ? <Headers>Start Tournament</Headers> : null}
              </tr>
            </TableHeader>
            <tbody>
              {algos.map(algo => {
                let num = algo.id
                return (
                  <TableRow key={algo.id}>
                    <td>
                      <Link to={`/algos/${algo.id}`}>{algo.name}</Link>
                    </td>
                    <Level>{algo.algoLevel}</Level>
                    <td>{shortPrompt(algo.prompt, 50)}</td>
                    {startGame ? (
                      <td>
                        <a href={`/algos/${algo.id}`}>
                          <button
                            onClick={() => {
                              this.startNewGame(algo.id, user.id)
                            }}
                          >
                            Start
                          </button>
                        </a>
                      </td>
                    ) : null}
                  </TableRow>
                )
              })}
            </tbody>
          </table>
        </div>
      </Wrapper>
    )
  }
}

const mapStateToProps = state => {
  return {
    user: state.user
  }
}

const mapDispatchToProps = function(dispatch) {
  return {
    onStartGame: function(gameId) {
      dispatch(updateGame(gameId))
    }
  }
}

const ConnectedAlgos = connect(mapStateToProps, mapDispatchToProps)(AllAlgos)

export default ConnectedAlgos

//helper functions
function shortPrompt(prompt, maxLength) {
  if (prompt.length <= maxLength) {
    return prompt
  } else {
    return prompt.slice(0, maxLength - 3) + '...'
  }
}

function openAlgos(allAlgos, userLevel) {
  return allAlgos.filter(algo => algo.algoLevel <= userLevel)
}

async function uncompletedAlgos(allAlgos, userId) {
  const attemptedAlgos = await axios.get(`/api/algos/userAlgos/${userId}`)
  const completedAlgoIds = []
  attemptedAlgos.data.forEach(algo => {
    if (algo.status === 'pass' || algo.status === 'fail') {
      completedAlgoIds.push(algo.algoId)
    }
  })
  const notAttempted = allAlgos.filter(
    algo => !completedAlgoIds.includes(algo.id)
  )
  return notAttempted
}

//styled components
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
const PageName = styled.h1`
  font-family: 'Open Sans', sans-serif;
  text-transform: uppercase;
  font-weight: lighter;
  letter-spacing: 1.9px;
  margin-block-end: 0;
`
const SubHead = styled.h4`
  font-family: 'Open Sans', sans-serif;
  text-transform: uppercase;
`
const TableHeader = styled.thead`
  background-color: #e7e7e7;
  box-shadow: 0px 0px 9px 0px rgba(0, 0, 0, 0.1);
  font-family: 'Open Sans', sans-serif;
  text-transform: uppercase;
  text-align: center;
`
const Headers = styled.th`
  padding: 10px;
  align-text: center;
`
const TableRow = styled.tr`
  background-color: #ffffff;
  box-shadow: 0px 0px 9px 0px rgba(0, 0, 0, 0.1);
  font-family: 'Open Sans', sans-serif;
`
const Level = styled.td`
  text-align: center;
`
