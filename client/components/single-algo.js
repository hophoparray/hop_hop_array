import React from 'react'
import MonacoEditor from 'react-monaco-editor'
import * as monaco from 'monaco-editor/esm/vs/editor/editor.api'
import Axios from 'axios'

class SingleAlgo extends React.Component {
  constructor(props) {
    super(props)
    //TODO: Load user solution from UserAlgo
    this.state = {
      userCode: '// Type your code...'
      // failedTests: [],
      // passingAllTests: false,
      // currentAlgo: {},
    }
  }
  onAttempt = async value => {
    console.log('Attempt', value)
    const response = await Axios.get('/api/algos/1')
    console.log(response)
  }
  handleChange = value => {
    this.setState({
      userCode: value
    })
  }

  render() {
    const options = {selectOnLineNumbers: true}

    return (
      <div>
        <MonacoEditor
          width="800"
          height="400"
          language="javascript"
          theme="vs-dark"
          value={this.state.userCode}
          options={options}
          onChange={this.handleChange}
        />
        {/* TO DO: Add Submit button when tests pass */}
        <button>Give me a {'<br/>'}</button>
        <button onClick={() => this.onAttempt(this.state.userCode)}>
          Attempt
        </button>
        {/* TODO: Continue flow to fail/succeed components */}
      </div>
    )
  }
}

export default SingleAlgo
