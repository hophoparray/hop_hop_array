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
      prompt: 'Test Question Prompt',
      examples: ['Input 3, Output: 3', 'Input: 4, Output: 4'],
      defaultText: 'function test(input){}',
      tests: ['sample tests'],
      algoLevel: 1
    }),
    Algo.create({
      prompt:
        'Iterate through list keeping a Set of all the values seen. If a seen value is seen again in the list then skip over it.',
      examples: [
        'Input: [1, 2, 3, 4, 5, 6, 7] \n Output: [1, 2, 3, 4, 5, 6, 7]',
        'Input: [5, 5, 5, 5, 5] \n Output: [5]'
      ],
      defaultText: 'function removeDuplicatesSet(list) { \n }',
      tests: [
        'Test.assertDeepEquals(removeDuplicatesSet([1, 2, 3, 4, 5, 6, 7]),[1, 2, 3, 4, 5, 6, 7])',
        'Test.assertDeepEquals(removeDuplicatesSet([5, 5, 5, 5, 5]),[5])'
      ],
      algoLevel: 1
    }),
    Algo.create({
      prompt:
        'Copy the value from the next node into the current node object and then update the next pointer of the current object to skip over the next node.',
      examples: [
        'Input: [5, 8], 0 \n Output: [8]',
        'Input: [5, 8, 3, 2, 7, 1, 4, 9, 15, 30], 8 \n Output: [5, 8, 3, 2, 7, 1, 4, 9, 30]'
      ],
      defaultText: 'function deleteMiddleNode(node) { \n }',
      tests: [
        'Test.assertDeepEquals(removeDuplicatesSet([5, 8], 0),[8])',
        'Test.assertDeepEquals(removeDuplicatesSet([5, 8, 3, 2, 7, 1, 4, 9, 15, 30], 8),[5, 8, 3, 2, 7, 1, 4, 9, 30])'
      ],
      algoLevel: 1
    }),
    Algo.create({
      prompt:
        'Travel through list and maintain two lists as we travel through. One list contains all the items less than the partition value and the other contains all the items greater than or equal to it.',
      examples: [
        'Input: [4, 9, 15, 30, 5, 8, 3, 2, 2, 3, 7, 1, 15, 5, 6, 7], 6 \n Output: [4, 5, 3, 2, 2, 3, 1, 5, 9, 15, 30, 8, 7, 15, 6, 7]',
        'Input: [5, 8, 3, 2, 7, 1, 4, 9, 15, 30], 2 \n Output: [1, 5, 8, 3, 2, 7, 4, 9, 15, 30]'
      ],
      defaultText: 'function partition(list, val) { \n }',
      tests: [
        'Test.assertDeepEquals(partition([4, 9, 15, 30, 5, 8, 3, 2, 2, 3, 7, 1, 15, 5, 6, 7], 6),[4, 5, 3, 2, 2, 3, 1, 5, 9, 15, 30, 8, 7, 15, 6, 7])',
        'Test.assertDeepEquals(partition([5, 8, 3, 2, 7, 1, 4, 9, 15, 30], 2),[1, 5, 8, 3, 2, 7, 4, 9, 15, 30])'
      ],
      algoLevel: 1
    }),
    Algo.create({
      prompt:
        'First find out the length of the list, then walk through half of the list pushing the values onto a stack. Once the middle is reached if the list had an odd length then skip the middle element. After that walk to the end of the list and compare node values to a value popped off the stack, if no mismatches then the list is a palindrome.',
      examples: [
        'Input: [1, 2, 1] \n Output: true',
        'Input: [2, 1, 3, 3, 1, 2] \n Output: true',
        'Input: [1, 2, 2] \n Output: false'
      ],
      defaultText: 'function function isPalindromeStack(list) { \n }',
      tests: [
        'Test.assertDeepEquals(isPalindromeStack([1, 2, 1]),true)',
        'Test.assertDeepEquals(isPalindromeStack([2, 1, 3, 3, 1, 2]),true)',
        'Test.assertDeepEquals(isPalindromeStack([1, 2, 2]),false)'
      ],
      algoLevel: 1
    }),
    Algo.create({
      prompt:
        'Keep track of seen characters with a Set data structure, fail when a repeated character is found.',
      examples: ['Input: ["abcdefghi"] \n Output: [true]'],
      defaultText: 'function hasUniqueCharactersSet(str){}',
      tests: [
        'Test.assertDeepEquals(hasUniqueCharactersSet(["abcdefghi"],true))'
      ],
      algoLevel: 1
    }),
    Algo.create({
      prompt:
        'Keep track of characters counts with a Map data structure, fail when str2 has a character different to str2 or if any characters are left over at the end.',
      examples: ['Input: ["abcdefghi", "ihgfedcba"]] \n Output: [true]'],
      defaultText: 'function isPermutationMap(str1, str2){}',
      tests: [
        'Test.assertDeepEquals(isPermutationMap(["abcdefghi", "ihgfedcba"], true))'
      ],
      algoLevel: 1
    }),
    Algo.create({
      prompt:
        ' * MinStack maintains a current stack minimum by putting an object on the stack that holds the value and the minimum at that time rather than just the value. When items are popped the value is returned without the wrapping object. When minimum is called we return the min property of the wrapping object.',
      examples: ['Input:[2,4,6,8,10,12] \n Output(this.stack.min): [2]'],
      defaultText: 'class MinStack { constructor() { this._stack = [] } }',
      tests: ['Test.assertDeepEquals(this.stack.min, 2)'],
      algoLevel: 2
    }),
    Algo.create({
      prompt:
        'Sort the stack by taking one item off the input stack at a time, find the right place within the processed items in the temp stack to insert it into. Insertion is done by holding the next value aside and moving the temp stack values into the input stack until the right spot is found.',
      examples: [
        'Input:[[5, 3, 1, 4, 6, 2]] \n Output(will sort):[1, 2, 3, 4, 5, 6]'
      ],
      defaultText: 'function sortStack(stack) {}',
      tests: [
        "it('does not crash on an empty list', function() {let stack = [] expect(() => func(stack)).to.not.throw(Error).and.to.equal(stack);});"
      ],
      algoLevel: 2
    })
  ])

  console.log(`seeded ${users.length} users`)
  console.log(`seeded ${algos.length} users`)
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
