import React from 'react'
import MonacoEditor from 'react-monaco-editor'
import * as monaco from 'monaco-editor/esm/vs/editor/editor.api'

class SingleAlgo extends React.Component {
  editorDidMount(editor, monaco) {
    editor.focus()
  }

  render() {
    const options = {selectOnLineNumbers: true}
    return (
      <div>
        <MonacoEditor
          monaco={monaco}
          width="800"
          height="600"
          language="javascript"
          theme="vs-dark"
          options={options}
        />
      </div>
    )
  }
}

export default SingleAlgo
