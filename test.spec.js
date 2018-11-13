const assert = require('assert');
const { factorial } = require('./practice');
describe('interview tests', () => {
  describe('#insertionSort', () => {
    it('sorts the input array', () => {
      const unsortedArray = [9, 2, 8, 7, 12];
      const expectedOutcome = [2, 7, 8, 9, 12];
      const insertionSort = require('./sorting/insertionSort');
      assert.deepStrictEqual(insertionSort(unsortedArray), expectedOutcome);
    });
  });

  describe('#selectionSort', () => {
    it('sorts the input array', () => {
      const unsortedArray = [9, 2, 8, 7, 12];
      const expectedOutcome = [2, 7, 8, 9, 12];
      const insertionSort = require('./sorting/selectionSort');
      assert.deepStrictEqual(insertionSort(unsortedArray), expectedOutcome);
    });
  });

  describe('#factorial', () => {
    it('returns factorial of the number', () => {
      assert.equal(factorial(3), 6);
      assert.equal(factorial(5), 120);
    });
  });

  describe('#bubbleSort', () => {
    it('sorts the array', () => {
      const bubbleSort = require('./sorting/bubbleSort');
      assert.deepStrictEqual(bubbleSort([4, 9, 20, 1, 23]), [1, 4, 9, 20, 23]);
      assert.deepStrictEqual(bubbleSort([4, 9, 25, 1, 23]), [1, 4, 9, 23, 25]);
      assert.deepStrictEqual(bubbleSort([4, 9, 25, 1]), [1, 4, 9, 25]);
    });
  });
});
