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
      id: 5,
      name: 'Unique Characters',
      prompt:
        'Keep track of seen characters with a Set data structure, fail when a repeated character is found.',
      examples: ['Input: ["abcdefghi"] \n Output: [true]'],
      defaultText:
        'function hasUniqueCharactersSet(str){ \n } // DO NOT TOUCH \n exports.hasUniqueCharactersSet = hasUniqueCharactersSet',
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
      defaultText:
        'function sortStack(stack) { \n } //DO NOT TOUCH \n exports.sortStack = sortStack',
      solution: `function sortStack(stack) {
        let temp = [];
        temp.push(stack.pop());
        while (!isEmpty(stack)) {
          let curr = stack.pop(),
            count = 0;

          while (!isEmpty(temp) && curr < peek(temp)) {
            stack.push(temp.pop());
            ++count;
          }
          temp.push(curr);
          for (let i = 0; i < count; ++i) {
            temp.push(stack.pop());
          }
        }

        while (!isEmpty(temp)) {
          stack.push(temp.pop());
        }

        return stack;
      }

      function peek(stack) {
        return stack[stack.length - 1];
      }

      function isEmpty(stack) {
        return stack.length === 0;
      }

      exports.sortStack = sortStack`,
      tests: `const chai = require ('chai');
      const funcs = require('./userCode');

      for (let key in funcs) {
        let func = funcs[key];

        describe('ch3-q5: ' + key, function() {

          it('does not crash on an empty list', function() {
            let stack = [];
            expect(() => func(stack)).to.not.throw(Error).and.to.equal(stack);
          });

          it('works with a single element stack', function() {
            expect(func([4])).to.eql([4]);
          });

          it('correctly sorts with 100 random numbers', function() {
            let stack = [];
            for (let i = 0; i < 100; ++i) {
              stack.push(Math.trunc(Math.random() * 9999999));
            }
            let expected = stack.slice(0).sort((a, b) => a < b ? 1 : a > b ? -1 : 0);
            expect(func(stack)).to.eql(expected);
          });

        });
      }`,
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
