import React, {Component} from 'react'
import {connect} from 'react-redux'
import styled from 'styled-components'
import {fetchTopUsers} from '../store/allUser'

class Leaderboard extends Component {
  async componentDidMount() {
    this.props.onLoadTopUsers(10)
  }

  render() {
    const topUsers = this.props.topUsers
    let count = 0
    let num = topUsers.length

    return (
      <Wrapper>
        <br />
        <PageName>Leaderboard</PageName>
        <SubHead>
          <i className="fa fa-trophy" />
          {`  Top ${num} users  `}
          <i className="fa fa-trophy" />
        </SubHead>
        <div>
          <table className="all-algos-table">
            <TableHeader>
              <tr>
                <Headers>Rank</Headers>
                <Headers>User</Headers>
                <Headers>Points</Headers>
              </tr>
            </TableHeader>
            <tbody>
              {topUsers.map(user => {
                count = count + 1
                return (
                  <TableRow key={user.id}>
                    <CenterRow>{count}</CenterRow>
                    <td>{user.email}</td>
                    <CenterRow>{user.points}</CenterRow>
                  </TableRow>
                )
              })}
            </tbody>
          </table>
        </div>
      </Wrapper>
    )
  }
}

const mapStateToProps = state => {
  return {
    user: state.user,
    topUsers: state.topUsers
  }
}

const mapDispatchToProps = function(dispatch) {
  return {
    onLoadTopUsers: function(num) {
      dispatch(fetchTopUsers(num))
    }
  }
}

const ConnectedLeaderboard = connect(mapStateToProps, mapDispatchToProps)(
  Leaderboard
)
export default ConnectedLeaderboard

//styled components
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: 'Open Sans', sans-serif;
`
const PageName = styled.h1`
  text-transform: uppercase;
  letter-spacing: 1.9px;
  font-size: 1.3em;
  margin-block-end: 0;
`
const SubHead = styled.h4`
  font-family: 'Open Sans', sans-serif;
  text-transform: uppercase;
`
const TableHeader = styled.thead`
  background-color: #e7e7e7;
  box-shadow: 0px 0px 9px 0px rgba(0, 0, 0, 0.1);
  font-family: 'Open Sans', sans-serif;
  text-transform: uppercase;
  text-align: center;
  font-size: 0.9em;
`
const Headers = styled.th`
  padding: 10px;
  align-text: center;
`
const TableRow = styled.tr`
  background-color: #ffffff;
  box-shadow: 0px 0px 9px 0px rgba(0, 0, 0, 0.1);
  font-family: 'Open Sans', sans-serif;
  font-size: 0.85em;
`
const CenterRow = styled.td`
  text-align: center;
`
