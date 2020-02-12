'use strict'

const db = require('../server/db')
const {User, Algo} = require('../server/db/models')

async function seed() {
  await db.sync({force: true})
  console.log('db synced!')

  const users = await Promise.all([
    User.create({email: 'cody@email.com', password: '123'}),
    User.create({email: 'murphy@email.com', password: '123'}),
    User.create({email: 'kate@email.com', password: '123', points: 2050}),
    User.create({
      email: 'GraceHopper@email.com',
      password: '123',
      points: 20000
    }),
    User.create({email: 'kim@email.com', password: '123', points: 450}),
    User.create({email: 'matt@email.com', password: '123', points: 700}),
    User.create({email: 'john@email.com', password: '123', points: 300}),
    User.create({email: 'dave@email.com', password: '123', points: 1050}),
    User.create({email: 'will@email.com', password: '123', points: 50}),
    User.create({email: 'caroline@email.com', password: '123', points: 800}),
    User.create({email: 'mark@email.com', password: '123', points: 400}),
    User.create({email: 'jennifer@email.com', password: '123', points: 800}),
    User.create({email: 'emily@email.com', password: '123', points: 250}),
    User.create({email: 'alex@email.com', password: '123', points: 950}),
    User.create({email: 'holden@email.com', password: '123', points: 650}),
    User.create({email: 'george@email.com', password: '123', points: 50})
  ])

  const algos = await Promise.all([
    Algo.create({
      id: 1,
      name: 'Unique Characters',
      prompt:
        'Keep track of seen characters with a Set data structure, fail when a repeated character is found.',
      examples: ['Input: ["abcdefghi"] \n Output: [true]'],
      defaultText:
        'function hasUniqueCharactersSet(str){ \n } \n// DO NOT EDIT BELOW THIS LINE\n exports.hasUniqueCharactersSet = hasUniqueCharactersSet',
      tests: `const chai = require("chai");
      const expect = chai.expect
      const { hasUniqueCharactersSet } = require('./userCode');

      describe('ch1-q1', function() {

        [
          'abcdefghi',
          'jklpoiuqwerzxcvmnsadf',
          '1234567890',
          'AaBbCcDdeFg1234567890(*&^%$#@!)'
        ].forEach(arg => {

          it('returns true for unique string: ' + arg, function() {
            expect(hasUniqueCharactersSet(arg.split(''))).to.be.true;
          });

        });

        [
          'abcadef',
          'aaaaaaaaaa',
          'abcdefghijklmnopqrstuvwxyza',
          '1234567890asdklf1',
          '!@#$%^&*()(*#($&#(*$&#*($&#()))))'
        ].forEach(arg => {

          it('returns false for string with dupes: ' + arg, function() {
            expect(hasUniqueCharactersSet(arg.split(''))).to.be.false;
          });

        });
      });
      `,
      solution: `function hasUniqueCharactersSet(str) {
        let chars = new Set();

        for (let i = 0; i < str.length; ++i) {
          if (chars.has(str[i])) {
            return false;
          }
          chars.add(str[i]);
        }
        return true;
      }

      exports.hasUniqueCharactersSet = hasUniqueCharactersSet
      `,
      algoLevel: 1
    }),
    Algo.create({
      id: 2,
      name: 'Product Sum',
      prompt:
        'Write a function that takes in a "special" array and returns its product sum.  A "special" array is a non-empty array that contains either integers or other "special" arrays. The product sum of a "special" array is a non-empty array that contains either integers or other "special" arrays.  The product sum of a "special" array is the sum of its elements, where "special" arrays inside it should be summed themselves and then multiplied by their level of depth.  For example, the product sum of [x,y] is x+y; the product sum of [x,[y,z]] is x + 2y + 2z.',
      examples: [
        'Input: [5,2,[7,-1],3,[6,[-13,8]4]] \n Output: 12(calculated as:(5+2+2*(7-1)+3+2*(6+3*()-23+8)+4))'
      ],
      defaultText:
        'function productSum(array) { \n } \n//DO NOT EDIT BELOW THIS LINE \n exports.productSum = productSum',
      solution: `function productSum(array, multiplier = 1) {
        let sum = 0
        for (const element of array) {
          if (Array.isArray(element)) {
            sum += productSum(element, multiplier + 1)
          } else {
            sum += element
          }
        }
        return sum * multiplier
      }

      exports.productSum = productSum`,

      tests: `const chai = require ('chai');
      const expect = chai.expect
      const { productSum } = require('./userCode');

      it('Test Case #1', function() {
        const test = [1,2,3,4,5]
        chai.expect(productSum(test)).to.deep.equal(15)
      })

      it('Test Case #2', function() {
        const test = [1,2,[3],4,5]
        chai.expect(productSum(test)).to.deep.equal(18)
      })

      it('Test Case #3', function() {
        const test = [[1,2],3,[4,5]]
        chai.expect(productSum(test)).to.deep.equal(27)
      })

      it('Test Case #4', function() {
        const test = [[[[[5]]]]]
        chai.expect(productSum(test)).to.deep.equal(600)
      })

      it('Test Case #5', function() {
        const test = [5,2,[7,-1],3,[6,[-13,8],4]]
        chai.expect(productSum(test)).to.deep.equal(12)
      })`,
      algoLevel: 1
    }),
    Algo.create({
      id: 3,
      name: 'Find Three Largest Numbers',
      prompt:
        'Write a function that takes in an array of integers and returns a sorted array of the three largers integers in the input array.  Note that the function should return duplicate integers if necessary; for example, it should return [10,10,12] for an intpuer array of [10,5,9,10,12]',
      examples: [
        'Input: [141,1,17,-7,-17,-27,18,541,8,7,7] \n Output: [18,, 141, 541]'
      ],
      defaultText:
        'function findThreeLargestNumbers(array) { \n } \n //DO NOT EDIT BELOW THIS LINE \n exports.findThreeLargestNumbers = findThreeLargestNumbers',
      solution: `function findThreeLargestNumbers(array) {
        const threeLargest = [null, null, null]
        for (const num of array) {
          updateLargest(threeLargest, num)
        }
        return threeLargest
      }

      function updateLargest(threeLargest, num) {
        if (threeLargest[2] === null || num > threeLargest[2]) {
          shiftAndUpdate(threeLargest, num, 2)
        } else if (threeLargest[1] === null || num > threeLargest[1]) {
          shiftAndUpdate(threeLargest, num, 1)
        } else if (threeLargest[0] === null || num > threeLargest[0]) {
          shiftAndUpdate(threeLargest, num, 0)
        }
      }

      function shiftAndUpdate(array, num, idx) {
        for (let i = 0; i <= idx; i++) {
          if (i === idx) {
            array[i] = num
          } else {
            array[i] = array[i+1]
          }
        }
      }

      exports.findThreeLargestNumbers = findThreeLargestNumbers`,
      tests: `const chai = require("chai");
      const expect = chai.expect
      const { findThreeLargestNumbers } = require("./userCode");

      it('Test Case #1', function() {
        chai.expect(findThreeLargestNumbers([55,7,8])).to.deep.equal([7,8,55])
      })

      it('Test Case #2', function() {
        chai.expect(findThreeLargestNumbers([55,43,11,3,-3,10])).to.deep.equal([11,43,55])
      })

      it('Test Case #3', function() {
        chai.expect(findThreeLargestNumbers([7,8,3,11,43,55])).to.deep.equal([11,43,55])
      })

      it('Test Case #4', function() {
        chai.expect(findThreeLargestNumbers([55,7,8,3,43,11])).to.deep.equal([11,43,55])
      })

      it('Test Case #5', function() {
        chai.expect(findThreeLargestNumbers([7,7,7,7,7,7,7,7,7,7,7])).to.deep.equal([7,7,7])
      })`,
      algoLevel: 1
    }),
    Algo.create({
      id: 4,
      name: 'Maximum Subset Sum With No Adjacent Elements',
      prompt:
        'Write a function that takes in an array of positive integers and returns an integer representing the maximum sum of non-adjacent elements in the array.  If a sum cannot be generated, the function should return 0.',
      examples: ['Input: [75,105,120,75,90,135] \n Output: 330(75,120,135)'],
      defaultText:
        'function maxSubsetSumNoAdjacent(array) { \n } \n //DO NOT EDIT BELOW THIS LINE \n exports.maxSubsetSumNoAdjacent = maxSubsetSumNoAdjacent',
      solution: `function maxSubsetSumNoAdjacent(array) {
        if (!array.length) return 0
        if (array.length === 1) return array[0]
        const maxSums = array.slice()
        maxSums[1] = Math.max(array[0], array[1])
        for (let i = 2; i < array.length; i++) {
          maxSums[i] = Math.max(maxSums[i - 1], maxSums[i - 2] + array[i])
        }
        return maxSums[maxSums.length - 1]
      }

      exports.maxSubsetSumNoAdjacent = maxSubsetSumNoAdjacent`,
      tests: `const chai = require("chai");
      const expect = chai.expect
      const { maxSubsetSumNoAdjacent } = require('./userCode')

      it('Test Case #1', function() {
        chai.expect(maxSubsetSumNoAdjacent([])).to.deep.equal(0)
      })

      it('Test Case #2', function() {
        chai.expect(maxSubsetSumNoAdjacent([1])).to.deep.equal(1)
      })

      it('Test Case #3', function() {
        chai.expect(maxSubsetSumNoAdjacent([1,2])).to.deep.equal(2)
      })

      it('Test Case #4', function() {
        chai.expect(maxSubsetSumNoAdjacent([1,2,3])).to.deep.equal(4)
      })

      it('Test Case #5', function() {
        chai.expect(maxSubsetSumNoAdjacent([1,15,3])).to.deep.equal(15)
      })
    `,
      algoLevel: 2
    }),
    Algo.create({
      id: 5,
      name: 'Zigzag Traverse',
      prompt:
        "Write a function that takes in a square-shaped(n x n) two-dimensional array and returns a one-dimensional array of all the array's elements in zigzag order.  Zigzag order starts at the top left corner of the two-dimensional array, goes down by one element, and proceeds in a zigzag pattern all the way to the bottom right corner.",
      examples: [
        'Input: [\n[1,3,4,10],\n[2,5,9,11],\n[6,8,12,15],\n[7,13,14,16]\n] \n Output: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]'
      ],
      defaultText:
        'function zigzagTraverse(array) {\n} \n// DO NOT EDIT BELOW THIS LINE \nexports.zigzagTraverse = zigzagTraverse ',
      tests: `const chai = require ('chai')
      const expect = chai.expect;
      const { zigzagTraverse } = require("./userCode");

      it('Test Case #1', function() {
        chai.expect(zigzagTraverse([[1]])).to.deep.equal([1])
      })

      it('Test Case #2', function() {
        chai.expect(zigzagTraverse([[1,2,3,4,5]])).to.deep.equal([1,2,3,4,5])
      })

      it('Test Case #3', function() {
        chai.expect(zigzagTraverse([[1,3],[2,4],[5,7],[6,8],[9,10]])).to.deep.equal([1,2,3,4,5,6,7,8,9,10])
      })

      it('Test Case #4', function() {
        chai.expect(zigzagTraverse([[1,3,4,7,8],[2,5,6,9,10]])).to.deep.equal([1,2,3,4,5,6,7,8,9,10])
      })

      it('Test Case #5', function() {
        chai.expect(zigzagTraverse([[1,3,4,10],[2,5,9,11],[6,8,12,15],[7,13,14,16]])).to.deep.equal([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16])
      })
      `,
      solution: `function zigzagTraverse(array) {
        const height = array.length - 1
        const width = array[0].length - 1
        const result = []
        let row = 0
        let col = 0
        let goingDown = true
        while(!isOutOfBounds (row, col, height, width)) {
          result.push(array[row][col])
          if (goingDown) {
            if (col === 0 || row === height) {
              goingDown = false
              if (row === height) {
                col++
              } else {
                row++
              }
            } else {
              row++
              col--
            }
          } else {
            if (row === 0 || col === width) {
              goingDown = true
              if (col === width) {
                row++
              } else {
                col ++
              }
            } else {
              row--
              col++
            }
          }
        }
        return result
      }

      function isOutOfBounds(row, col, height, width) {
        return row < 0 || row > height || col < 0 || col > width
      }

      exports.zigzagTraverse = zigzagTraverse`,
      algoLevel: 3
    }),
    Algo.create({
      id: 6,
      name: 'Single Cycle Check',
      prompt:
        "You are given an array of integers.  Each integer represents a jump of its value in the array.  For instance, the integer 2 represents a jump of 2 indices forward in the array; the integer -3 represents a jump of 3 indices backward in the array.  If a jump spills past the array's bounds, it wraps over to the other side.  For instance, a jump of -1 at index 0 brings us to the last index in the array.  Similarly, a jump of 1 at the last index in the array brings us to index 0.  Write a function that returns a boolean representing whether the jumps in the array form a single cycle.  A single cycle occurs if, starting at any index in the array and following the jumps ,every element is visited exactly once before landing back on the starting index.",
      examples: ['Input: [2,3,1,-4,-4,2] \n Output: True'],
      defaultText:
        'function hasSingleCycle(array) { \n } \n //DO NOT EDIT BELOW THIS LINE \n exports.hasSingleCycle = hasSingleCycle',
      solution: `function hasSingleCycle(array) {
        let numElementsVisited = 0
        let currentIdx = 0
        while (numElementsVisited < array.length) {
          if (numElementsVisited > 0 && currentIdx === 0) return false
          numElementsVisited++
          currentIdx = getNextIdx(currentIdx, array)
        }
        return currentIdx === 0
      }

      function getNextIdx(currentIdx, array) {
        const jump = array[currentIdx]
        const nextIdx = (currentIdx + jump) % array.length
        return nextIdx >= 0 ? nextIdx : nextIdx + array.length
      }

      exports.hasSingleCycle = hasSingleCycle`,
      tests: `const chai = require("chai");
      const expect = chai.expect
      const { hasSingleCycle } = require("./userCode");

      it('Test Case #1', function() {
        chai.expect(hasSingleCycle([2,2,-1])).to.deep.equal(true)
      })

      it('Test Case #2', function() {
        chai.expect(hasSingleCycle([2,2,2])).to.deep.equal(true)
      })

      it('Test Case #3', function() {
        chai.expect(hasSingleCycle([1,1,1,1,1])).to.deep.equal(true)
      })

      it('Test Case #4', function() {
        chai.expect(hasSingleCycle([1,1,0,1,1])).to.deep.equal(false)
      })

      it('Test Case #5', function() {
        chai.expect(hasSingleCycle([1,1,1,1,2])).to.deep.equal(false)
      })`,
      algoLevel: 2
    }),
    Algo.create({
      id: 7,
      name: 'Min Number of Coins For Change',
      prompt:
        'Given an array of positive integers representing coin denominations and a single non-negative integer representing a target amount of money, implement a function that returns the smallest number of coins needed to make change for that target amount using the given coin denominations.  Note that an unlimited amount of coins is at your disposal.  If it is impossible to make change for the target amount, return -1.',
      examples: ['Input: 7,[1,5,10] \n Output: 3(2x1 + 1x5)'],
      defaultText:
        'function minNumberOfCoinsForChange(n, denoms) { \n } \n //DO NOT EDIT BELOW THIS LINE \n exports.minNumberOfCoinsForChange = minNumberOfCoinsForChange',
      solution: `function minNumberOfCoinsForChange(n, denoms) {
       const numOfCoins = new Array(n + 1).fill(Infinity)
       numOfCoins[0] = 0
       for (const denom of denoms) {
         for (let amount = 0; amount < numOfCoins.length; amount++) {
           if (denom <= amount) {
             numOfCoins[amount] = Math.min(numOfCoins[amount], numOfCoins[amount - denom] + 1)
           }
         }
       }
       return numOfCoins[n] !== Infinity ? numOfCoins[n] : -1
      }

      exports.minNumberOfCoinsForChange = minNumberOfCoinsForChange`,
      tests: `const chai = require("chai");
      const expect = chai.expect
      const { minNumberOfCoinsForChange } = require("./userCode");

      it('Test Case #1', function() {
        chai.expect(minNumberOfCoinsForChange(0, [1,2,3])).to.deep.equal(0)
      })

      it('Test Case #2', function() {
        chai.expect(minNumberOfCoinsForChange(3, [2,1])).to.deep.equal(2)
      })

      it('Test Case #3', function() {
        chai.expect(minNumberOfCoinsForChange(4, [1,5,10])).to.deep.equal(4)
      })

      it('Test Case #4', function() {
        chai.expect(minNumberOfCoinsForChange(7, [1,5,10])).to.deep.equal(3)
      })

      it('Test Case #5', function() {
        chai.expect(minNumberOfCoinsForChange(10, [1, 5, 10])).to.deep.equal(1)
      })
      `,
      algoLevel: 2
    }),
    Algo.create({
      id: 8,
      name: 'Min Rewards',
      prompt:
        "Imagine that you're a teacher who's just graded the final exam in a class.  You have a list of student scores on the final exam in a particular order (not necessarily sorted), and you want to reward your students.  You decide to do so fairly by giving them arbitrary rewards following two rules: first, all students must receive at least one reward; second, any given student must receive strictly more rewards than an adjacent student (a student immediately to the left or to the right) with a lower score and must receive strictly fewer awards than an adjacent student with a higher score.  Assume that all students have different scores; in other words, the scores are all unique.  Write a function that takes in a list of scores and returns the minimum number of rewards that you must give out to students, all the while satisfying the two rules.",
      examples: ['Input: [8,4,2,1,3,6,7,9,5] \n Output: 25([4,3,2,1,2,3,4,5,1'],
      defaultText:
        'function minRewards(scores) { \n } \n //DO NOT EDIT BELOW THIS LINE \n exports.minRewards = minRewards',
      solution: `function minRewards(scores) {
       const rewards = scores.map(_ => 1)
       for (let i = 1; i < scores.length; i++) {
         let j = i - 1
         if (scores[i] > scores[j]) {
           rewards[i] = rewards[j] + 1
         } else {
           while (j >= 0 && scores[j] > scores[j+1]) {
             rewards[j] = Math.max(rewards[j], rewards[j+1] + 1)
             j--
           }
         }
       }
       return rewards.reduce((a,b) => a + b)
      }

      exports.minRewards = minRewards`,
      tests: `const chai = require("chai");
      const expect = chai.expect
      const { minRewards } = require("./userCode");

      it('Test Case #1', function() {
        chai.expect(minRewards([1])).to.deep.equal(1)
      })

      it('Test Case #2', function() {
        chai.expect(minRewards([5,10])).to.deep.equal(3)
      })

      it('Test Case #3', function() {
        chai.expect(minRewards([10,5])).to.deep.equal(3)
      })

      it('Test Case #4', function() {
        chai.expect(minRewards([4,2,1,3])).to.deep.equal(8)
      })

      it('Test Case #5', function() {
        chai.expect(minRewards([0,4,2,1,3])).to.deep.equal(9)
      })
      `,
      algoLevel: 3
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
