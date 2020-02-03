import React from 'react'
import MonacoEditor from 'react-monaco-editor'
import * as monaco from 'monaco-editor/esm/vs/editor/editor.api'
import Axios from 'axios'

class SingleAlgo extends React.Component {
  constructor(props) {
    super(props)
    //TODO: Load user solution from UserAlgo
    this.state = {
      defaultText: '// Type your code...',
      userCode: '',
      failedTests: [],
      passingAllTests: false,
      currentAlgo: {},
      editorMounted: false
    }
    this.editorDidMount = this.editorDidMount.bind(this)
    this.onAttempt = this.onAttempt.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }
  editorDidMount(editor, monaco) {
    console.log('editorDidMount')
    console.log(this.props.match)
    this.editor = editor
    // this.props.match.params.id => get algo id
  }
  componentDidUpdate() {
    console.log('UPDATE')
  }
  onAttempt(value) {
    console.log('Attempt', value)
  }
  handleChange() {
    console.log('Change')
    this.setState({editorMounted: true})
  }

  render() {
    const options = {selectOnLineNumbers: true}
    const value = 0
    if (this.state.editorMounted || Object.keys(this.refs).length) {
      console.log('MOUNTED')
      console.log('THIS', this)
      const model = this.refs.monaco.editor.getModel()
      const value = model.getValue()
      console.log('MODEL', model)
      console.log('VALUE', value)
    }

    return (
      <div>
        <MonacoEditor
          ref="monaco"
          monaco={monaco}
          width="800"
          height="400"
          language="javascript"
          theme="vs-dark"
          value={this.state.defaultText}
          options={options}
          editorDidMount={this.editorDidMount}
          onChange={this.handleChange}
        />
        {/* TO DO: Add Submit button when tests pass */}
        <button>Give me a {'<br/>'}</button>
        <button onClick={() => this.onAttempt(value)}>Attempt</button>
        {/* TODO: Continue flow to fail/succeed components */}
      </div>
    )
  }
}

export default SingleAlgo
