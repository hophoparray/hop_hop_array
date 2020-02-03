// algo: peakIndexInMountainArray

var assert = require('assert')

// console.log("Importing file...")
var usersCode = require('./usersCode')
// console.log(usersCode)

let testResults = []

// console.log("Starting tests...")

let testName = 'test1'
try {
  assert(usersCode.peakIndexInMountainArray([0, 1, 0]) == 1)
} catch {
  testResults.push(testName)
}

testName = 'test2'
try {
  assert(usersCode.peakIndexInMountainArray([0, 2, 1, 0]) == 1)
} catch (error) {
  testResults.push(testName)
}

// console.log("If you are reading this, you have passed all the tests!")
if (testResults.length > 0) {
  console.log(testResults)
}
