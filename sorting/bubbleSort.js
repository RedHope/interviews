const swap = require('./swap');
/**@param {Array} arr */
module.exports = function(arr) {
  const sorted = [];
  let swapped = true;

  do {
    swapped = false;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] < arr[i + 1]) {
        swapped = true;
        [arr[i], arr[i + 1]] = swap(arr[i], arr[i + 1]);
      }
    }
  } while (swapped == true);

  return arr.reverse();
};
