/**
 * Find all pairs in an array of integers whose sum is equal to a given number
 * 5:34 (but still need to remove duplicates)
 */

let arr = [1, 5, 6, 1, 0, 1];

function findSumPairs(array, num) {
  let pairs = [];
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (array[i] + array[j] == num) {
        pairs.push([array[i], array[j]]);
      }
    }
  }
  return pairs;
}

console.log(findSumPairs(arr, 7));
