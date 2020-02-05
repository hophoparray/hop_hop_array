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
      id: 2,
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
      const expect = chai.expect
      const { sortStack } = require('./userCode');

      describe('ch3-q5: ', function() {

        it('does not crash on an empty list', function() {
          let stack = [];
          expect(() => sortStack(stack)).to.not.throw(Error).and.to.equal(stack);
        });

        it('works with a single element stack', function() {
          expect(sortStack([4])).to.eql([4]);
        });

        it('correctly sorts with 100 random numbers', function() {
          let stack = [];
          for (let i = 0; i < 100; ++i) {
            stack.push(Math.trunc(Math.random() * 9999999));
          }
          let expected = stack.slice(0).sort((a, b) => a < b ? 1 : a > b ? -1 : 0);
          expect(sortStack(stack)).to.eql(expected);
        });

      });`,
      algoLevel: 2
    }),
    Algo.create({
      id: 3,
      name: 'Permutation Map',
      prompt:
        'Keep track of characters counts with a Map data structure, fail when str2 has a character different to str2 or if any characters are left over at the end.',
      examples: ['Input: [["1a1", "a11"]] \n Output: [true]'],
      defaultText:
        'function isPermutationMap(str1, str2) { \n } //DO NOT TOUCH \n exports.isPermutationMap = isPermutationMap',
      solution: `function isPermutationMap(str1, str2) {
        if (str1.length === 0 || str1.length !== str2.length) {
          return false;
        }

        let chars = new Map();

        for (let i = 0; i < str1.length; ++i) {
          chars.set(str1[i], chars.get(str1[i]) + 1 || 1); // increment or set to 1
        }

        for (let i = 0; i < str2.length; ++i) {
          let count = chars.get(str2[i]);
          if (!count) {
            return false;
          }
          if (count === 1) {
            chars.delete(str2[i]);
          }
          else {
            chars.set(str2[i], count - 1);
          }
        }

        return chars.size === 0;
      }
      exports.isPermutationMap = isPermutationMap`,
      tests: `const chai = require("chai");
      const expect = chai.expect
      const { isPermutationMap } = require('./userCode);

      describe('ch1-q2: ', function() {

        [
          ['abcdefghi', 'ihgfedcba'],
          ['1a1', 'a11'],
          ['1234567812345678', '8877665544332211'],
          ['icarraci', 'carcarii']
        ].forEach(args => {

          it("returns true for strings that are permutations: args[0] & args[1]", function() {
            expect(func(args[0].split(''), args[1].split(''))).to.be.true;
          });

        });

        [
          ['abcdefghiz', 'ihgfedcbaa'],
          ['1a1', '11'],
          ['1122334455667788', '9911223344556677'],
          ['45678', '1239']
        ].forEach(args => {

          it("returns false for strings that are not permutations: args[0] & args[1]", function() {
            expect(func(args[0].split(''), args[1].split(''))).to.be.false;
          });

        });

      })`,
      algoLevel: 1
    }),
    Algo.create({
      id: 4,
      name: 'Encode Spaces',
      prompt:
        'Count the number of spaces in the string to calculate the new length of the string and move characters back where required replacing spaces with %20.',
      examples: [
        'Input: [["http://www.google.com/search?q=something really really funny"]] \n Output: ["http://www.google.com/search?q=something%20really%20really%20funny"]'
      ],
      defaultText:
        'function encodeSpaces(url) { \n } //DO NOT TOUCH \n exports.encodeSpaces = encodeSpaces',
      solution: `function encodeSpaces(url) {
        if (!url || url.length === 0) {
          return url;
        }

        let spaceCount = 0;
        for (let i = 0; i < url.length; ++i) {
          if (url[i] === ' ') {
            ++spaceCount;
          }
        }

        // add an extra 2 characters for each space
        let newLength = url.length - 1 + 2 * spaceCount;
        for (let i = url.length - 1, j = newLength; i >= 0 && j > i; --i, --j) {
          if (url[i] === ' ') {
            url[j] = '0';
            url[--j] = '2';
            url[--j] = '%';
          }
          else {
            url[j] = url[i];
          }
        }

        return url;
      }

      exports.encodeSpaces = encodeSpaces`,
      tests: `const chai = require("chai");
      const expect = chai.expect
      const { encodeSpaces } = require('./userCode')

      describe('ch1-q3: ', function() {

        it('works with null/undefined as input', function() {
          expect(encodeSpaces(undefined)).to.be.undefined;
          expect(encodeSpaces(null)).to.be.null;
        });

        it('works with an empty array as input', function() {
          expect(encodeSpaces([])).to.eql([]);
        });

        [
          'nospaces',
          ' ',
          '   ',
          ' firstSpace',
          'lastSpace ',
          '  surroundedBySpaces  ',
          'middle  spaces',
          ' l o t s   o f   s p a c e ',
          'http://www.google.com/',
          'http://www.google.com/search?q=something really really funny'
        ].forEach(arg => {

          it("returns true for unique string:", function() {
            let expected = arg.replace(/ /g, '%20').split('');
            expect(encodeSpaces(arg.split(''))).to.eql(expected);
          });

        });

      });
    `,
      algoLevel: 1
    }),
    Algo.create({
      id: 5,
      name: 'Animal Shelter',
      prompt:
        'Uses two different queues one for dogs and one for cats. Each entry is assigned a unique identifier which allows dequeueAny to determine which of the two queues to dequeue an item from.',
      examples: [
        'Input: “this.obj.enqueueDog(“dog”) \nthis.obj.dequeueAny()” \n Output: “dog”'
      ],
      defaultText:
        'class AnimalShelter {\n} \n// DO NOT TOUCH \nexports.AnimalShelter = AnimalShelter ',
      tests: `const expect = require(‘chai’).expect;
      const {AnimalShelter} = require(‘./userCode’);
        describe(‘ch3-q6: ’, function() {
          beforeEach(function() {
            this.obj = new AnimalShelter();
          });
          it(‘any returns whichever animal is in queue’, function() {
            this.obj.enqueueCat(‘cat’);
            expect(this.obj.dequeueAny()).to.equal(‘cat’);
            expect(this.obj.dequeueAny()).to.be.undefined;
            this.obj.enqueueDog(‘dog’);
            expect(this.obj.dequeueAny()).to.equal(‘dog’);
            expect(this.obj.dequeueAny()).to.be.undefined;
          });
          it(‘returns animals in the right order’, function() {
            for (let i = 0; i < 4; ++i) {
              this.obj.enqueueCat(‘cat’ + i);
            }
            for (let i = 0; i < 4; ++i) {
              expect(this.obj.dequeueAny()).to.equal(‘cat’ + i);
            }
          });
          it(‘returns animals in alternating order when enqueued that way’, function() {
            for (let i = 20; i > 0; --i) {
              if (i & 1) {
                this.obj.enqueueCat(i);
              }
              else {
                this.obj.enqueueDog(i);
              }
            }
            for (let i = 20; i > 0; --i) {
              expect(this.obj.dequeueAny()).to.equal(i);
            }
          });
          it(‘correctly returns animals when enqueued alternating but dequeued one at a time’, function() {
            for (let i = 20; i > 0; --i) {
              if (i & 1) {
                this.obj.enqueueCat(i);
              }
              else {
                this.obj.enqueueDog(i);
              }
            }
            for (let i = 20; i > 10; i -= 2) {
              expect(this.obj.dequeueDog()).to.equal(i);
            }
            for (let i = 19; i > 10; i -= 2) {
              expect(this.obj.dequeueCat()).to.equal(i);
            }
            for (let i = 10; i > 0; --i) {
              expect(this.obj.dequeueAny()).to.equal(i);
            }
          });
        });`,
      solution: `class AnimalShelter {
        constructor() {
          this._dogs = [];
          this._cats = [];
          this._id = 0;
        }
        enqueueCat(name) {
          this._cats.push({
            name: name,
            id: ++this._id
          });
        }
        enqueueDog(name) {
          this._dogs.push({
            name: name,
            id: ++this._id
          });
        }
        dequeueAny() {
          let dogId = this._dogs.length > 0 ? this._dogs[0].id : Number.POSITIVE_INFINITY,
            catId = this._cats.length > 0 ? this._cats[0].id : Number.POSITIVE_INFINITY;
          if (dogId !== Number.POSITIVE_INFINITY || catId !== Number.POSITIVE_INFINITY) {
            if (dogId < catId) {
              return this._dogs.shift().name;
            }
            else {
              return this._cats.shift().name;
            }
          }
        }
        dequeueCat() {
          return this._cats.shift().name;
        }
        dequeueDog() {
          return this._dogs.shift().name;
        }
      }
      exports.AnimalShelter = AnimalShelter`,
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
