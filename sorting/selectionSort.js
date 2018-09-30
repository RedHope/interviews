const assert = require('assert');
const unsortedArray = [9, 2, 8, 7, 12];
const expectedOutcome = [2, 7, 8, 9, 12];
const swap = require('./swap');
/**
 * example:
 * input : 9, 2, 8 , 7, 12
 * The algorithm starts at position 0 and starts iterating through the array.
 * inside the inner loop, the algorithm iterates through the array starting at
 * position 1 to find a value that is smaller than the current value stored at
 * position i, i.e. at position 0 in the first instance. Once such a value is
 * found, these two are swapped. If in a subsequent loop a smaller value is found,
 * then these are swapped.
 * And so on, and so forth till the smallest value in the array is at position 0.
 *
 * This process repeats with progressing i, and at each step, the algorithm ensures
 * that the first value in the iteration is sorted. We do not have to worry about
 * the already sorted part of the array.
 */

module.exports = function(arr) {
  for (i = 0; i < arr.length - 2; i++) {
    let minIndex = i;
    for (j = i + 1; j < arr.length - 1; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    [arr[minIndex], arr[i]] = swap(arr[minIndex], arr[i]);
  }
  return arr;
};
