'use strict'

const db = require('../server/db')
const {User, Algo} = require('../server/db/models')

async function seed() {
  await db.sync({force: true})
  console.log('db synced!')

  const users = await Promise.all([
    User.create({email: 'cody@email.com', password: '123'}),
    User.create({email: 'murphy@email.com', password: '123'})
  ])

  const algos = await Promise.all([
    Algo.create({
      id: 1,
      name: 'Remove Duplicates',
      prompt:
        'Iterate through list keeping a Set of all the values seen. If a seen value is seen again in the list then skip over it.',
      examples: [
        'Input: [1, 2, 3, 4, 5, 6, 7] \n Output: [1, 2, 3, 4, 5, 6, 7]',
        'Input: [5, 5, 5, 5, 5] \n Output: [5]'
      ],
      defaultText: 'function removeDuplicatesSet(list) { \n }',
      algoLevel: 1
    }),
    Algo.create({
      id: 2,
      name: 'Squares of a Sorted Array',
      prompt:
        'Given an array of integers A sorted in non-decreasing order, return an array of the squares of each number, also in sorted non-decreasing order.',
      examples: [
        'Input: [-4,-1,0,3,10] \n Output: [0,1,9,16,100]',
        'Input: [-7,-3,2,3,11] \n Output: [4,9,9,49,121]'
      ],
      defaultText: 'function sortedSquares(A) { \n }',
      algoLevel: 1
    }),
    Algo.create({
      id: 3,
      name: 'Partition',
      prompt:
        'Travel through list and maintain two lists as we travel through. One list contains all the items less than the partition value and the other contains all the items greater than or equal to it.',
      examples: [
        'Input: [4, 9, 15, 30, 5, 8, 3, 2, 2, 3, 7, 1, 15, 5, 6, 7], 6 \n Output: [4, 5, 3, 2, 2, 3, 1, 5, 9, 15, 30, 8, 7, 15, 6, 7]',
        'Input: [5, 8, 3, 2, 7, 1, 4, 9, 15, 30], 2 \n Output: [1, 5, 8, 3, 2, 7, 4, 9, 15, 30]'
      ],
      defaultText: 'function partition(list, val) { \n }',
      algoLevel: 1
    }),
    Algo.create({
      id: 4,
      name: 'Is Palindrome?',
      prompt:
        'First find out the length of the list, then walk through half of the list pushing the values onto a stack. Once the middle is reached if the list had an odd length then skip the middle element. After that walk to the end of the list and compare node values to a value popped off the stack, if no mismatches then the list is a palindrome.',
      examples: [
        'Input: [1, 2, 1] \n Output: true',
        'Input: [2, 1, 3, 3, 1, 2] \n Output: true',
        'Input: [1, 2, 2] \n Output: false'
      ],
      defaultText: 'function function isPalindromeStack(list) { \n }',
      algoLevel: 1
    }),
    Algo.create({
      id: 5,
      name: 'Unique Characters',
      prompt:
        'Keep track of seen characters with a Set data structure, fail when a repeated character is found.',
      examples: ['Input: ["abcdefghi"] \n Output: [true]'],
      defaultText: 'function hasUniqueCharactersSet(str){ \n }',
      algoLevel: 1
    }),
    Algo.create({
      id: 6,
      name: 'Peak Index in a Mountain Array',
      prompt:
        "Let's call an array A a mountain if the following properties hold: A.length >= 3, there exists some 0 < i < A.length - 1 such that A[0] < A[1] < ... A[i-1] < A[i] > A[i+1] > ... > A[A.length-1]. Given an array that is definitely a mountain, return any i such that A[0] < A[1] < ... A[i-1] < A[i] > A[i+1] > ... > A[A.length-1]",
      examples: [
        'Input: [0,1,0] \n Output: 1',
        'Input: [0,2,1,0] \n Output: 1'
      ],
      defaultText: 'function peakIndexInMountainArray(A) { \n }',
      algoLevel: 1
    }),
    Algo.create({
      id: 7,
      name: 'Minimum to Make Valid',
      prompt:
        "Given a string S of '(' and ')' parentheses, we add the minimum number of parentheses ( '(' or ')', and in any positions ) so that the resulting parentheses string is valid. Formally, a parentheses string is valid if and only if: it is the empty string, or it can be written as AB (A concatenated with B), where A and B are valid strings, or it can be written as (A), where A is a valid string. Given a parentheses string, return the minimum number of parentheses we must add to make the resulting string valid.",
      examples: [
        'Input: "())" \n Output: 1',
        'Input: "(((" \n Output: 3',
        'Input: "()" \n Output: 0'
      ],
      defaultText: 'function minAddToMakeValid(str) { \n }',
      algoLevel: 2
    }),
    Algo.create({
      id: 8,
      name: 'Stack Sort',
      prompt:
        'Sort the stack by taking one item off the input stack at a time, find the right place within the processed items in the temp stack to insert it into. Insertion is done by holding the next value aside and moving the temp stack values into the input stack until the right spot is found.',
      examples: ['Input: [[5, 3, 1, 4, 6, 2]] \n Output: [1, 2, 3, 4, 5, 6]'],
      defaultText: 'function sortStack(stack) { \n }',
      algoLevel: 2
    })
  ])

  console.log(`seeded ${users.length} users`)
  console.log(`seeded ${algos.length} algos`)

  console.log(`seeded successfully`)
}

// We've separated the `seed` function from the `runSeed` function.
// This way we can isolate the error handling and exit trapping.
// The `seed` function is concerned only with modifying the database.
async function runSeed() {
  console.log('seeding...')
  try {
    await seed()
  } catch (err) {
    console.error(err)
    process.exitCode = 1
  } finally {
    console.log('closing db connection')
    await db.close()
    console.log('db connection closed')
  }
}

// Execute the `seed` function, IF we ran this module directly (`node seed`).
// `Async` functions always return a promise, so we can use `catch` to handle
// any errors that might occur inside of `seed`.
if (module === require.main) {
  runSeed()
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed
