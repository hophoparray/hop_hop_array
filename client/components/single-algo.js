import React from 'react'
import MonacoEditor from 'react-monaco-editor'
// import * as monaco from 'monaco-editor/esm/vs/editor/editor.api'
import Axios from 'axios'
import history from '../history'
import ReactLoading from 'react-loading'

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
      title: 'Title',
      user: {},
      bool: true,
      loading: true,
      errorMessage: ''
    }
  }

  // axios post request
  onAttempt = async value => {
    try {
      this.setState({
        loading: false
      })
      const res = await Axios.post(
        `/api/algos/${this.props.match.params.algoId}`,
        {
          text: this.state.userCode
        }
      )
      this.setState({
        tests: res.data.testResult.tests,
        passes: res.data.testResult.passes,
        failures: res.data.testResult.failures,
        stats: res.data.testResult.stats,
        bool: false,
        loading: true
      })
      if (this.state.failures.length === 0) {
        await Axios.put(`/api/algos/${this.props.match.params.algoId}`)
        history.push(`/algopass/${this.props.match.params.algoId}`)
      }
    } catch (error) {
      this.setState({errorMessage: error, loading: true})
    }
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
      userCode: data.defaultText,
      user: data.findUser
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

        {/* TO DO: Add Submit button when tests pass */}
        <a href={`/algofail/${this.props.match.params.algoId}`}>
          <button>Give me a {'<br/>'}</button>
        </a>

        {this.state.loading ? (
          <div>
            <button onClick={() => this.onAttempt(this.state.userCode)}>
              Attempt
            </button>
          </div>
        ) : (
          <div>
            <ReactLoading type="bars" color="black" />
          </div>
        )}

        {this.state.errorMessage ? (
          <div>Syntax Error - Please Reformat Your Code </div>
        ) : (
          <div />
        )}

        <div>
          <h4>tests!</h4>
          {this.state.bool ? (
            <div>
              <div>Number of Tests Passed: 0</div>
              <div>Number of Tests Failed: 0</div>
            </div>
          ) : (
            <div>
              <div>Number of Tests Passed: {this.state.passes.length}</div>
              <div>Number of Tests Failed: {this.state.failures.length}</div>
            </div>
          )}

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
      </div>
    )
  }
}

export default SingleAlgo
