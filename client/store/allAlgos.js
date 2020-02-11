import axios from 'axios'

const GET_ALL_ALGOS = 'GET_ALL_ALGOS'
const initialState = []

const getAllAlgos = algos => ({
  type: GET_ALL_ALGOS,
  allAlgos: algos
})

export const fetchAllAlgos = userId => async dispatch => {
  try {
    const allAlgos = await axios.get('/api/algos')
    const attemptedAlgos = await axios.get(`/api/algos/userAlgos/${userId}`)

    const completedAlgoIds = []
    attemptedAlgos.data.forEach(algo => {
      if (algo.status === 'pass' || algo.status === 'fail') {
        completedAlgoIds.push(algo.algoId)
      }
    })

    allAlgos.data.forEach(algo => {
      if (completedAlgoIds.includes(algo.id)) {
        algo.complete = true
      } else {
        algo.complete = false
      }
      
    })
    dispatch(getAllAlgos(allAlgos.data))
  } catch (err) {
    console.error(err)
  }
}

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_ALL_ALGOS:
      return action.allAlgos
    default:
      return state
  }
}
