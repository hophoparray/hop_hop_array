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
      currentAlgo: {}
    }
    this.editorDidMount = this.editorDidMount.bind(this)
    this.onAttempt = this.onAttempt.bind(this)
  }
  editorDidMount(editor, monaco) {
    console.log('editorDidMount', editor)
    console.log(this.props.match)
    // this.props.match.params.id => get algo id
  }
  onAttempt() {}

  render() {
    const options = {selectOnLineNumbers: true}
    return (
      <div>
        <MonacoEditor
          monaco={monaco}
          width="800"
          height="400"
          language="javascript"
          theme="vs-dark"
          value={this.state.defaultText}
          options={options}
          editorDidMount={this.editorDidMount()}
        />
        {/* TO DO: Add Submit button when tests pass */}
        <button>Give me a {'<br/>'}</button>
        <button>Attempt</button>
        {/* TODO: Continue flow to fail/succeed components */}
      </div>
    )
  }
}

export default SingleAlgo
