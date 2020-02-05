import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import axios from 'axios'
import styled from 'styled-components'

class AllAlgos extends Component {
  constructor() {
    super()
    this.state = {
      algos: []
    }
  }

  async componentDidMount() {
    const {data} = await axios.get('/api/algos')
    this.setState({algos: data})
  }

  render() {
    const algos = this.state.algos
    console.log(this.state)

    return (
      <Wrapper>
        <PageName>All Algos</PageName>
        <SubHead>Select an algo to attempt!</SubHead>
        <div>
          <ul className="responsive-table">
            <li className="table-header">
              <div className="col col-1">Algo</div>
              <div className="col col-2">Level</div>
              <div className="col col-3">Prompt</div>
              <div className="col col-4">Complete</div>
            </li>
            <li className="table-row">
              {algos.map(algo => {
                return (
                  <div key={algo.id}>
                    <div className="col col-1">
                      <Link to={`/algos/${algo.id}`}>{algo.name}</Link>
                    </div>
                    <div className="col col-2">{algo.algoLevel}</div>
                    <div className="col col-3">
                      {shortPrompt(algo.prompt, 50)}
                    </div>
                    <div className="col col-4">True</div>
                  </div>
                )
              })}
            </li>
          </ul>
        </div>
      </Wrapper>
    )
  }
}

const mapStateToProps = state => {
  return {
    user: state.user
  }
}

const ConnectedAlgos = connect(mapStateToProps)(AllAlgos)

export default ConnectedAlgos

//helper functions
function shortPrompt(prompt, maxLength) {
  if (prompt.length <= maxLength) {
    return prompt
  } else {
    return prompt.slice(0, maxLength - 3) + '...'
  }
}

//styled components

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
const PageName = styled.h1`
  font-family: 'Open Sans', sans-serif;
  text-transform: uppercase;
  font-weight: lighter;
  letter-spacing: 1.9px;
  margin-block-end: 0;
`
const SubHead = styled.h4`
  font-family: 'Open Sans', sans-serif;
  text-transform: uppercase;
`
const TableHeader = styled.thead`
  background: #e7e7e7;
  text-transform: uppercase;
  font-family: 'Open Sans', sans-serif;
  font-weight: lighter;
`
const Headers = styled.th`
  padding: 10px;
`
const TableRow = styled.tr`
  background-color: #ffffff;
  box-shadow: 0px 0px 9px 0px rgba(0, 0, 0, 0.1);
  font-family: 'Open Sans', sans-serif;
`
