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
  }
  editorDidMount(editor, monaco) {
    console.log('editorDidMount', editor)
  }
  onChange() {}

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
      </div>
    )
  }
}

export default SingleAlgo
