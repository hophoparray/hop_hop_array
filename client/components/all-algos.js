import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import axios from 'axios'

class AllAlgos extends Component {
  constructor() {
    super()
    this.state = {
      algos: []
    }
  }

  async componentDidMount() {
    const {data} = await axios.get('/api/algos')
    this.setState({algos: data})
  }

  startNewGame() {}

  render() {
    const algos = this.state.algos
    const user = this.props.user
    // if(user.gameId !== null){
    //   startGame=true
    // }else{
    //   startGame =false
    // }

    return (
      <div>
        <h1>All Algos</h1>
        <h4>Select an algo to attempt!</h4>
        <div>
          <table className="all-algos-table">
            <thead>
              <tr>
                <th>Algo</th>
                <th>Level</th>
                <th>Prompt</th>
              </tr>
            </thead>
            <tbody>
              {algos.map(algo => {
                return (
                  <tr key={algo.id}>
                    <td>
                      <Link to={`/algos/${algo.id}`}>{algo.name}</Link>
                    </td>
                    <td>{algo.algoLevel}</td>
                    <td>{shortPrompt(algo.prompt, 50)}</td>
                    <td>
                      <button>
                        onClick={' '}
                        {() => {
                          this.startNewGame(input)
                        }}
                      </button>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    user: state.user
  }
}

const ConnectedAlgos = connect(mapStateToProps)(AllAlgos)

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
