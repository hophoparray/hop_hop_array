// algo: sortedSquares

var assert = require('assert')

// console.log("Importing file...")
var usersCode = require('./usersCode')
// console.log(usersCode)

let testResults = []

// console.log("Starting tests...")

let testName = 'test1'
try {
  assert(usersCode.sortedSquares([-4, -1, 0, 3, 10]) == [0, 1, 9, 16, 100])
} catch {
  testResults.push(testName)
}

testName = 'test2'
try {
  assert(usersCode.sortedSquares([-7, -3, 2, 3, 11]) == [[4, 9, 9, 49, 121]])
} catch (error) {
  testResults.push(testName)
}

// console.log("If you are reading this, you have passed all the tests!")
if (testResults.length > 0) {
  console.log(testResults)
}
