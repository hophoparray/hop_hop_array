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
    // this.EditorDidMount = this.EditorDidMount.bind(this)
    this.onAttempt = this.onAttempt.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  EditorDidMount(editor, monaco) {
    console.log('from editor did mount, monaco', monaco)
    console.log('editorDidMount', editor)
    // console.log(this.props.match.params)
    // this.editor = editor
    // this.props.match.params.id => get algo id
  }

  componentDidUpdate() {
    console.log('UPDATE')
  }
  onAttempt(value) {
    console.log('Attempt', value)
  }
  handleChange(value) {
    console.log('Change')
    this.setState({
      userCode: value
    })
    // this.setState({editorMounted: true})
  }

  render() {
    const options = {selectOnLineNumbers: true}
    let value = ''
    if (Object.keys(this.refs).length) {
      console.log('MOUNTED')
      console.log('THIS', this)
      const model = this.refs.monaco.editor.getModel()
      value = model.getValue()
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
          value={this.state.userCode}
          defaultValue={this.state.defaultText}
          options={options}
          editorDidMount={this.EditorDidMount}
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
