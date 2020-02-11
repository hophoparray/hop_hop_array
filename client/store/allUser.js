import axios from 'axios'

const GET_TOP_USERS = 'GET_TOP_USERS'
const initialState = []

/**
 * ACTION CREATORS
 */
const getTopUsers = users => ({type: GET_USER, topUsers: users})

export const fetchTopUsers = num => async dispatch => {
  try {
    const {data} = await axios.get('/api/users')
    const sortedUsers = mergeSort(data)
    const users = sortedUsers.slice(0, num)
    dispatch(getTopUsers(users))
  } catch (err) {
    console.error(err)
  }
}

/**
 * REDUCER
 */
export default function(state = initialState, action) {
  switch (action.type) {
    case GET_TOP_USERS:
      return action.topUsers
    default:
      return state
  }
}

//helper function
function split(array) {
  const len = array.length
  let firstHalf = array.slice(0, Math.floor(len / 2))
  let secondHalf = array.slice(Math.floor(len / 2))

  return [firstHalf, secondHalf]
}

function merge(array1, array2) {
  let arr1 = [...array1]
  let arr2 = [...array2]
  let solution = []

  while (arr1.length > 0 || arr2.length > 0) {
    if (arr1[0].points > arr2[0].points || arr1.length === 0) {
      solution.push(arr2[0])
      arr2 = arr2.slice(1)
    } else {
      solution.push(arr1[0])
      arr1 = arr1.slice(1)
    }
  }
  return solution
}

function mergeSort(array) {
  if (array.length <= 1) {
    return array
  }
  let [firstHalf, secondHalf] = split(array)
  return merge(mergeSort(firstHalf), mergeSort(secondHalf))
}
