//for minimum property algo

/*
'Test.assertDeepEquals(this.stack.min, 2)'
*/
// algo: minAddToMakeValid

var assert = require('assert')

// console.log("Importing file...")
var usersCode = require('./usersCode')
// console.log(usersCode)

let testResults = []

// console.log("Starting tests...")

let testName = 'test1'
try {
  assert(usersCode.minAddToMakeValid('()') == 0)
} catch {
  testResults.push(testName)
}

testName = 'test2'
try {
  assert(usersCode.minAddToMakeValid('(((') == 3)
} catch (error) {
  testResults.push(testName)
}

testName = 'test3'
try {
  assert(usersCode.minAddToMakeValid('())') == 1)
} catch (error) {
  testResults.push(testName)
}

// console.log("If you are reading this, you have passed all the tests!")
if (testResults.length > 0) {
  console.log(testResults)
}
