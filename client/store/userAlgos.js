import axios from 'axios'
import history from '../history'

/**
 * ACTION TYPES
 */
const GET_USER_ALGOS = 'GET_USER_ALGOS'

/**
 * INITIAL STATE
 */
const initialState = []
/**
 * ACTION CREATORS
 */
const getUserAlgos = user => ({type: GET_USER_ALGOS, user})

/**
 * THUNK CREATORS
 */
export const fetchMyAlgos = id => async dispatch => {
  try {
    const res = await axios.get(`/userAlgos/${id}`)
    dispatch(getUserAlgos(res.data))
  } catch (err) {
    console.error(err)
  }
}

/**
 * REDUCER
 */
export default function(state = initialState, action) {
  switch (action.type) {
    case GET_USER_ALGOS:
      return {...state, userAlgos: action.user}
    default:
      return state
  }
}
