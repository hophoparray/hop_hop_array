import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import axios from 'axios'
import {runInNewContext} from 'vm'

class AllAlgos extends Component {
  componentDidMount() {
    this.getAlgos()
  }

  async getAlgos() {
    try {
      const allAlgos = await axios.get('/api/algos')
      this.setState({
        algos: allAlgos.data
      })
      return
    } catch (error) {
      console.log('Algos did not load')
    }
  }

  render() {
    //const algos = this.state.algos
    const algos = dummydata
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

//dummy data
const dummydata = [
  {
    id: 1,
    name: 'algo1',
    prompt: 'Test Question Prompt',
    examples: ['Input 3, Output: 3', 'Input: 4, Output: 4'],
    defaultText: 'function test(input){}',
    tests: ['sample tests'],
    algoLevel: 1
  },
  {
    id: 2,
    name: 'algo2',
    prompt:
      'Test Question PromptTest Question PromptTest Question PromptTest Question PromptTest Question PromptTest Question PromptTest Question Prompt',
    examples: ['Input 3, Output: 3', 'Input: 4, Output: 4'],
    defaultText: 'function test(input){}',
    tests: ['sample tests'],
    algoLevel: 1
  }
]
