import React from 'react'
import Axios from 'axios'
import styled from 'styled-components'
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
    await Axios.post(`/api/algos/algofail/${algoId}`)
  }

  async handleClick() {
    const algoId = this.props.match.params.algoId
    this.setState({
      clicked: true
    })
    await Axios.put(`/api/algos/algofail/${algoId}`)
  }

  handleChange = value => {
    this.setState({
      solution: value
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
      <Wrapper>
        <Title>Keep Practicing!</Title>
        <p>Here's our solution if you'd like to take a look</p>
        <p>
          Please note: if you reveal the solution below, you will no longer be
          able to receive points from any future attempts.
        </p>
        <a>
          <button className="button" onClick={this.handleClick}>
            Our Solution
            <span />
            <span />
            <span />
            <span />
          </button>
        </a>

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
      </Wrapper>
    )
  }
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #e7e7e7;
  margin-block-start: 10px;
  padding: 10px;
  font-family: 'Open Sans', sans-serif;
`

const Title = styled.h1`
  text-transform: uppercase;
  font-family: 'Open Sans', sans-serif;
  font-size: 1.4em;
`
