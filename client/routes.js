import React, {Component} from 'react'
import {connect} from 'react-redux'
import {withRouter, Route, Switch, Redirect} from 'react-router-dom'
import PropTypes from 'prop-types'
import {
  Login,
  Signup,
  UserHome,
  AllAlgos,
  AlgoPass,
  AlgoFail,
  SingleAlgo,
  UserProfile,
  Game,
  ErrorPage,
  Leaderboard
} from './components'
import {me} from './store'

/**
 * COMPONENT
 */
class Routes extends Component {
  componentDidMount() {
    this.props.loadInitialData()
  }

  render() {
    const {isLoggedIn} = this.props

    return (
      <Switch>
        {/* Routes placed here are available to all visitors */}
        {isLoggedIn ? (
          <Switch>
            {/* Routes placed here are only available after logging in */}

            <Route path="/home" component={AllAlgos} />
            <Route exact path="/algopass/:algoId" component={AlgoPass} />
            <Route exact path="/algos" component={AllAlgos} />
            <Route exact path="/games" />
            <Route exact path="/algofail/:algoId" component={AlgoFail} />
            <Route exact path="/algos/:algoId" component={SingleAlgo} />
            <Route exact path="/profile" component={UserProfile} />

            <Route exact path="/">
              <Redirect to="/home" />
            </Route>
            <Route exact path="/login">
              <Redirect to="/home" />
            </Route>
            <Route exact path="/signup">
              <Redirect to="/home" />
            </Route>
            <Route path="*" component={ErrorPage} />
          </Switch>
        ) : (
          <Switch>
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Signup} />
            <Route exact path="/">
              <Redirect to="/login" />
            </Route>
          </Switch>
        )}
        {/* Displays our Login component as a fallback */}
        <Route component={null} />
      </Switch>
    )
  }
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    // Being 'logged in' for our purposes will be defined has having a state.user that has a truthy id.
    // Otherwise, state.user will be an empty object, and state.user.id will be falsey
    isLoggedIn: !!state.user.id
  }
}

const mapDispatch = dispatch => {
  return {
    loadInitialData() {
      dispatch(me())
    }
  }
}

// The `withRouter` wrapper makes sure that updates are not blocked
// when the url changes
export default withRouter(connect(mapState, mapDispatch)(Routes))

/**
 * PROP TYPES
 */
Routes.propTypes = {
  loadInitialData: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
}
