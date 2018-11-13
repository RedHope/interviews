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

  xdescribe('#hanoi', () => {
    it('moves the stacks', () => {
      const hanoi = require('./hanoi');
      assert.deepStrictEqual(hanoi([[3, 2, 1], [], []]), [[], [], [3, 2, 1]]);
    });
  });

  describe('#factorial', () => {
    it('returns factorial of the number', () => {
      assert.equal(factorial(3), 6);
      assert.equal(factorial(5), 120);
    });
  });
});
