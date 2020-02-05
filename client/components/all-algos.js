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

  render() {
    const algos = this.state.algos
    console.log(this.state)

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
