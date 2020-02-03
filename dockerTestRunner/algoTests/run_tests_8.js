// algo: sortStack

var assert = require('assert')

// console.log("Importing file...")
var usersCode = require('./usersCode')
// console.log(usersCode)

let testResults = []

// console.log("Starting tests...")

let testName = 'test1'
try {
  assert(usersCode.sortStack([5, 3, 1, 4, 6, 2]) == [1, 2, 3, 4, 5, 6])
} catch {
  testResults.push(testName)
}

// console.log("If you are reading this, you have passed all the tests!")
if (testResults.length > 0) {
  console.log(testResults)
}
