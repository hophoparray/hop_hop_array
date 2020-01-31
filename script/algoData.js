// const algos = await Promise.all([
//   Algo.create({
//     prompt: 'Iterate through list keeping a Set of all the values seen. If a seen value is seen again in the list then skip over it.',
//     examples: ['Input: [1, 2, 3, 4, 5, 6, 7] \n Output: [1, 2, 3, 4, 5, 6, 7]', 'Input: [5, 5, 5, 5, 5] \n Output: [5]'],
//     defaultText: 'function removeDuplicatesSet(list) { \n }',
//     tests: ['Test.assertDeepEquals(removeDuplicatesSet([1, 2, 3, 4, 5, 6, 7]),[1, 2, 3, 4, 5, 6, 7])', 'Test.assertDeepEquals(removeDuplicatesSet([5, 5, 5, 5, 5]),[5])'],
//     algoLevel: 1
//   }),
//   Algo.create({
//     prompt: 'Copy the value from the next node into the current node object and then update the next pointer of the current object to skip over the next node.',
//     examples: ['Input: [5, 8], 0 \n Output: [8]', 'Input: [5, 8, 3, 2, 7, 1, 4, 9, 15, 30], 8 \n Output: [5, 8, 3, 2, 7, 1, 4, 9, 30]'],
//     defaultText: 'function deleteMiddleNode(node) { \n }',
//     tests: ['Test.assertDeepEquals(removeDuplicatesSet([5, 8], 0),[8])', 'Test.assertDeepEquals(removeDuplicatesSet([5, 8, 3, 2, 7, 1, 4, 9, 15, 30], 8),[5, 8, 3, 2, 7, 1, 4, 9, 30])'],
//     algoLevel: 1
//   }),
//   Algo.create({
//     prompt: 'Travel through list and maintain two lists as we travel through. One list contains all the items less than the partition value and the other contains all the items greater than or equal to it.',
//     examples: ['Input: [4, 9, 15, 30, 5, 8, 3, 2, 2, 3, 7, 1, 15, 5, 6, 7], 6 \n Output: [4, 5, 3, 2, 2, 3, 1, 5, 9, 15, 30, 8, 7, 15, 6, 7]', 'Input: [5, 8, 3, 2, 7, 1, 4, 9, 15, 30], 2 \n Output: [1, 5, 8, 3, 2, 7, 4, 9, 15, 30]'],
//     defaultText: 'function partition(list, val) { \n }',
//     tests: ['Test.assertDeepEquals(partition([4, 9, 15, 30, 5, 8, 3, 2, 2, 3, 7, 1, 15, 5, 6, 7], 6),[4, 5, 3, 2, 2, 3, 1, 5, 9, 15, 30, 8, 7, 15, 6, 7])', 'Test.assertDeepEquals(partition([5, 8, 3, 2, 7, 1, 4, 9, 15, 30], 2),[1, 5, 8, 3, 2, 7, 4, 9, 15, 30])'],
//     algoLevel: 1
//   }),
//   Algo.create({
//     prompt: 'First find out the length of the list, then walk through half of the list pushing the values onto a stack. Once the middle is reached if the list had an odd length then skip the middle element. After that walk to the end of the list and compare node values to a value popped off the stack, if no mismatches then the list is a palindrome.',
//     examples: ['Input: [1, 2, 1] \n Output: true', 'Input: [2, 1, 3, 3, 1, 2] \n Output: true', 'Input: [1, 2, 2] \n Output: false'],
//     defaultText: 'function function isPalindromeStack(list) { \n }',
//     tests: ['Test.assertDeepEquals(isPalindromeStack([1, 2, 1]),true)', 'Test.assertDeepEquals(isPalindromeStack([2, 1, 3, 3, 1, 2]),true)', 'Test.assertDeepEquals(isPalindromeStack([1, 2, 2]),false)'],
//     algoLevel: 1
//   })
// ])
