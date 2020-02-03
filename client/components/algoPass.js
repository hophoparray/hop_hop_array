import React from 'react'

//incomplete page, need to figure out break down of point system based on algo difficulty

//routing in back end for algoPass depends on how Single Algo page will render - if Single Algo pulls algo data, can pass down to algoPass as props

//need to update userAlgos table with 'pass'

//nothing built in back end yet

// not sure where next button will lead to

export default class AlgoPass extends React.Component {
  render() {
    return (
      <div>
        <h3>CONGRATULATIONS</h3>
        <p>You've earned [INSERT PONTS] points</p>
        <button>Next</button>
      </div>
    )
  }
}
