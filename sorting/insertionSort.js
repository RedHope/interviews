const assert = require('assert');
const unsortedArray = [9, 2, 8, 7, 12];
const expectedOutcome = [2, 7, 8, 9, 12];

(function(arr) {
  for (i = 0; i < arr.length; i++) {
    let current = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > current) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = current;
  }
  assert.deepStrictEqual(arr, expectedOutcome);
})(unsortedArray);

module.exports = function(arr) {
  for (i = 0; i < arr.length; i++) {
    let current = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > current) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = current;
  }
  return arr;
};
