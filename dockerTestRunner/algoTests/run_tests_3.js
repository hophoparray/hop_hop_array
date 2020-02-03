// algo: partition

var assert = require('assert')

// console.log("Importing file...")
var usersCode = require('./usersCode')
// console.log(usersCode)

let testResults = []

// console.log("Starting tests...")

let testName = 'test1'
try {
  assert(
    usersCode.partition(
      [4, 9, 15, 30, 5, 8, 3, 2, 2, 3, 7, 1, 15, 5, 6, 7],
      6
    ) == [4, 5, 3, 2, 2, 3, 1, 5, 9, 15, 30, 8, 7, 15, 6, 7]
  )
} catch {
  testResults.push(testName)
}

testName = 'test2'
try {
  assert(
    usersCode.partition([5, 8, 3, 2, 7, 1, 4, 9, 15, 30], 2) ==
      [1, 5, 8, 3, 2, 7, 4, 9, 15, 30]
  )
} catch (error) {
  testResults.push(testName)
}

// console.log("If you are reading this, you have passed all the tests!")
if (testResults.length > 0) {
  console.log(testResults)
}
