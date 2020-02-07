import React from 'react'
import Axios from 'axios'
import MonacoEditor from 'react-monaco-editor'

export default class AlgoFail extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      solution: [],
      clicked: false
    }
    this.handleClick = this.handleClick.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  async componentDidMount() {
    const algoId = this.props.match.params.algoId
    const {data} = await Axios.get(`/api/algos/${algoId}`)
    this.setState({
      solution: data.solution
    })
  }

  handleClick() {
    this.setState({
      clicked: true
    })
  }

  handleChange = value => {
    this.setState({
      solution: value
    })
  }

  render() {
    console.log('state', this.state)
    console.log('this.state.solution', this.state.solution)

    const options = {
      selectOnLineNumbers: true,
      minimap: {enabled: false},
      fontFamily: 'Fira Code',
      fontLigatures: true
    }

    return (
      <div>
        <h3>Keep Practicing!</h3>
        <p>Here's our solution if you'd like to take a look</p>
        <button onClick={this.handleClick}>Our Solution</button>

        {this.state.clicked ? (
          <div>
            {/* <p>{this.state.solution}</p> */}

            <MonacoEditor
              width="800"
              height="400"
              language="javascript"
              theme="fairyfloss"
              value={this.state.solution}
              options={options}
              onChange={this.handleChange}
            />
          </div>
        ) : (
          <div />
        )}
      </div>
    )
  }
}
