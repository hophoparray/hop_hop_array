import React from 'react'
import MonacoEditor from 'react-monaco-editor'
// import * as monaco from 'monaco-editor/esm/vs/editor/editor.api'
import Axios from 'axios'
import history from '../history'
import ReactLoading from 'react-loading'
import styled from 'styled-components'

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
      examples: '',
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
      examples: data.examples,
      userCode: data.defaultText,
      user: data.findUser
    })
  }

  componentDidUpdate(prevProps) {
    if (prevProps.examples !== this.props.examples) {
      this.setState({
        examples: this.props.examples
      })
    }
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
        <Wrapper>
          <PromptBox>
            <Title>{this.state.title}</Title>
            <Prompt>{this.state.prompt}</Prompt>
            <Head>Example(s):</Head>
            <Details>{this.state.examples[0]}</Details>

            <div>
              <Head>tests!</Head>
              {this.state.bool ? (
                <div>
                  <Details>Number of Tests Passed: 0</Details>
                  <Details>Number of Tests Failed: 0</Details>
                </div>
              ) : (
                <div>
                  <Details>
                    Number of Tests Passed: {this.state.passes.length}
                  </Details>
                  <Details>
                    Number of Tests Failed: {this.state.failures.length}
                  </Details>
                </div>
              )}
            </div>
          </PromptBox>

          <Editor>
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
            <Buttons>
              <Break href={`/algofail/${this.props.match.params.algoId}`}>
                <button className="button">
                  Give me a {'<br/>'}
                  <span />
                  <span />
                  <span />
                  <span />
                </button>
              </Break>

              {this.state.loading ? (
                <Attempt>
                  <button
                    className="button"
                    onClick={() => this.onAttempt(this.state.userCode)}
                  >
                    Attempt
                    <span />
                    <span />
                    <span />
                    <span />
                  </button>
                </Attempt>
              ) : (
                <a>
                  <ReactLoading type="bars" color="black" />
                </a>
              )}
            </Buttons>
            <Details>
              {this.state.errorMessage ? (
                <div>Syntax Error - Please Reformat Your Code </div>
              ) : (
                <div />
              )}
            </Details>
          </Editor>
        </Wrapper>

        {/* <button onClick={() => this.onAttempt(this.state.userCode)}>
         Attempt
        </button> */}

        {/* {console.log('this is state after attempt', this.state)} */}
        {/* TODO: Continue flow to fail/succeed components */}

        <TestWrapper>
          <TopWrapper>
            <Head>Tests Failed: {this.state.failures.length}</Head>
            <a>
              <button
                onClick={() => {
                  window.scrollTo(0, document.body.scrollHeight)
                }}
                className="button"
              >
                See More
                <span />
                <span />
                <span />
                <span />
              </button>
            </a>
          </TopWrapper>
          {this.state.failures.length === 0 ? (
            <div />
          ) : (
            <div>
              {' '}
              {this.state.failures.map((obj, index) => (
                <Details className="tests" key={index}>
                  <p>
                    Test {index + 1}: {obj.title}
                  </p>
                  <p>Description: {obj.err.message}</p>
                </Details>
              ))}
            </div>
          )}
        </TestWrapper>
      </div>
    )
  }
}

export default SingleAlgo

const PromptBox = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 60vh;
  font-family: 'Open Sans', sans-serif;
  background: #e7e7e7;
  margin-top: 10px;
  padding: 10px;
  flex-grow: 1;
`

const Title = styled.h1`
  text-transform: uppercase;
  font-family: 'Open Sans', sans-serif;
  font-size: 1.4em;
`

const Prompt = styled.h3`
  font-size: 0.9em;
  font-weight: 100;
  font-family: 'Open Sans', sans-serif;
`

const Head = styled.h3`
  font-size: 1em;
  font-family: 'Open Sans', sans-serif;
  text-transform: uppercase;
`

const Details = styled.h5`
  margin-block-start: 0em;
  font-weight: 100;
  font-size: 0.9em;
  font-family: 'Open Sans', sans-serif;
`

const Editor = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  margin-left: 10px;
  background: #e7e7e7;
  padding: 10px;
  flex-grow: 2;
  align-items: center;
`

const Buttons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`

const Break = styled.a`
  margin-right: 40px;
  margin-top: 10px;
`

const Attempt = styled.a`
  margin-left: 40px;
  margin-top: 10px;
`

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
`

const TestWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #e7e7e7;
  margin-top: 10px;
`

const TopWrapper = styled.div`
  display: flex;
  flex-direction: row;
`
