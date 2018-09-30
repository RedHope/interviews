const assert = require('assert');
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
});
