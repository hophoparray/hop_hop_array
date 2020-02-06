import React from 'react'
import MonacoEditor from 'react-monaco-editor'
// import * as monaco from 'monaco-editor/esm/vs/editor/editor.api'
import Axios from 'axios'

class SingleAlgo extends React.Component {
  constructor(props) {
    super(props)
    //TODO: Load user solution from UserAlgo
    this.state = {
      userCode: '// Type your code...\n',
      tests: '',
      passes: [],
      failures: [],
      stats: [],
      currentAlgo: {},
      prompt: 'Prompt',
      title: 'Title'
    }
  }
  onAttempt = async value => {
    console.log('Attempt', value)
    // axios post request
    const res = await Axios.post(
      `/api/algos/${this.props.match.params.algoId}`,
      {
        text: this.state.userCode
      }
    )
    console.log('RESULT: ', res.data)
    this.setState({
      tests: res.data.tests,
      passes: res.data.passes,
      failures: res.data.failures,
      stats: res.data.stats
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
    this.setState({
      title: data.name,
      prompt: data.prompt,
      userCode: data.defaultText
    })
  }
  render() {
    const options = {
      selectOnLineNumbers: true,
      minimap: {enabled: false},
      fontFamily: 'Fira Code',
      fontLigatures: true
    }

    return (
      <div>
        <h1>{this.state.title}</h1>
        <h3>{this.state.prompt}</h3>
        <MonacoEditor
          width="800"
          height="400"
          language="javascript"
          theme="fairyfloss"
          value={this.state.userCode}
          options={options}
          onChange={this.handleChange}
        />

        <div>
          <h4>tests!</h4>
          <div>Number of Tests Passed: {this.state.passes.length}</div>
          <div>Number of Tests Failed: {this.state.failures.length}</div>

          <div>Tests Failed:</div>

          {this.state.failures.length === 0 ? (
            <div>0</div>
          ) : (
            <div>
              {' '}
              {this.state.failures.map((obj, index) => (
                <div key={index}>
                  <p>
                    Test {index + 1}: {obj.title}
                  </p>
                  <p>Description: {obj.err.message}</p>
                </div>
              ))}
            </div>
          )}
        </div>
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
