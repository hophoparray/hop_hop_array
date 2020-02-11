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
      failureStatus: '',
      currentAlgo: {},
      prompt: 'Prompt',
      title: 'Title',
      examples: '',
      user: {},
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
      const {data} = await Axios.post(
        `/api/algos/${this.props.match.params.algoId}`,
        {
          text: this.state.userCode
        }
      )
      this.setState({
        tests: data.allTests,
        failureStatus: data.failsStatus,
        loading: true
      })
      if (data.allPassing) {
        await Axios.put(`/api/algos/${this.props.match.params.algoId}`)
        history.push(`/algopass/${this.props.match.params.algoId}`)
      }
    } catch (error) {
      console.log('ERROR', error)
      this.setState({errorMessage: error, loading: true})
    }
  }

  handleChange = value => {
    this.setState({
      userCode: value
    })
  }

  async componentDidMount() {
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
              {this.state.tests.length === 0 ? null : (
                <div>
                  <Details>{this.state.tests}</Details>
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

            <Buttons>
              <Break href="/algofail">
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

        <TestWrapper>
          <TopWrapper>
            <Head>Assertion Errors: </Head>
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
          {this.state.failureStatus.length === 0 ? null : (
            <div>
              {this.state.failureStatus}
              {/* {this.state.failures.map((obj, index) => (
                <Details className="tests" key={index}>
                  <p>
                    Test {index + 1}: {obj.title}
                  </p>
                  <p>Description: {obj.err.message}</p>
                </Details>
              ))} */}
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
