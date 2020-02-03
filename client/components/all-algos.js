import React, {Component} from 'react'
import {connect} from 'react-redux'

class AllAlgos extends Component {
  componentDidMount() {
    this.props.onLoadAlgos()
  }

  render() {
    return (
      <div>
        <h1>All Algos</h1>
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
              {dummydata.map(algo => {
                return (
                  <tr key={algo.id}>
                    <td>Name</td>
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

const mapDispatchToProps = function(dispatch) {
  return {
    onLoadAlgos: function() {
      return 'placeholder'
    }
  }
}

const ConnectedAlgos = connect(mapStateToProps, mapDispatchToProps)(AllAlgos)

export default ConnectedAlgos

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
    prompt: 'Test Question Prompt',
    examples: ['Input 3, Output: 3', 'Input: 4, Output: 4'],
    defaultText: 'function test(input){}',
    tests: ['sample tests'],
    algoLevel: 1
  },
  {
    id: 2,
    prompt: 'Test Question Prompt',
    examples: ['Input 3, Output: 3', 'Input: 4, Output: 4'],
    defaultText: 'function test(input){}',
    tests: ['sample tests'],
    algoLevel: 1
  }
]
