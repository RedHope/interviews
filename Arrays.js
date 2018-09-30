const assert = require('assert');
/**
 *
 * @param {Array} arr
 */
function longestSubArraySum(arr, expectedSum) {
    let startIndex = 0;
    let endIndex = 0;
    let result;

    while (result !== expectedSum) {
        result = arr.slice(startIndex, endIndex).reduce((a, b) => a + b, 0);

        if (result < expectedSum) endIndex++;
        if (result > expectedSum) startIndex++;
    }

    return arr.slice(startIndex, endIndex);
}

assert.deepStrictEqual(longestSubArraySum([9, 1, 2, 3, 9], 6), [1, 2, 3]);
