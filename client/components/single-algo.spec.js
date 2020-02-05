import {expect} from 'chai'
import React from 'react'
import enzyme, {shallow} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import SingleAlgo from './single-algo'

const adapter = new Adapter()
enzyme.configure({adapter})

describe('SingleAlgo', () => {
  let singleAlgo

  beforeEach(() => {
    singleAlgo = shallow(
      <SingleAlgo
        match={{
          path: '/algos/:algoId',
          url: '/algos/4',
          isExact: true,
          params: {algoId: '4'}
        }}
      />
    )
  })
  it('displays a title', () => {
    expect(
      singleAlgo
        .find('h1')
        .text()
        .to.equal('Title')
    )
  })
  it('displays a prompt', () => {
    expect(
      singleAlgo
        .find('h3')
        .text()
        .to.equal('Prompt')
    )
  })
})
