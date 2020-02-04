import React from 'react'
import MonacoEditor from 'react-monaco-editor'
import * as monaco from 'monaco-editor/esm/vs/editor/editor.api'
import Axios from 'axios'

class SingleAlgo extends React.Component {
  constructor(props) {
    super(props)
    //TODO: Load user solution from UserAlgo
    this.state = {
      userCode: '// Type your code...\n',
      // failedTests: [],
      // passingAllTests: false,
      currentAlgo: {},
      prompt: 'Prompt',
      title: 'Title'
    }
  }
  onAttempt = async value => {
    console.log('Attempt', value)
    // axios post request
    await Axios.post(`/api/algos/${this.props.match.params.algoId}`, {
      text: this.state.userCode
    })
  }
  handleChange = value => {
    this.setState({
      userCode: value
    })
  }
  // TODO: editor focus
  async componentDidMount() {
    // TODO: Create User-Algo if none exist
    const algoId = this.props.match.params.algoId
    const {data} = await Axios.get(`/api/algos/${algoId}`)
    this.setState({title: data.name, prompt: 'Prompt: ' + data.prompt})
  }
  render() {
    const options = {selectOnLineNumbers: true}
    console.log(this.props)
    return (
      <div>
        <h1>{this.state.title}</h1>
        <h3>{this.state.prompt}</h3>
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
