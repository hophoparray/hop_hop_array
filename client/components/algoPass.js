import React from 'react'

export default class AlgoPass extends React.Component {
  render() {
    console.log('this is props of algopass', this)
    return (
      <div>
        <h3>CONGRATULATIONS</h3>
        <p>You've earned 10 points</p>
        <a href="/algos">
          <button>Practice More</button>
        </a>
        <a href="/profile">
          <button>See Your Progress</button>
        </a>
      </div>
    )
  }
}
