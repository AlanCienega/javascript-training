const nums = [3, 5, 1, 9, 2, 7, 2];
/**
 * dado el array, encontrar la suma adyacente mas grande
 * 3:50
 */
function largestSum(array) {
  let largest = -Infinity;
  for (let i = 0; i < array.length; i++) {
    let sum = array[i] + array[i + 1];
    // also can replace with: largest = Math.max(largest, sum)
    if (sum > largest) {
      largest = sum;
    }
  }
  return largest;
}

console.log(largestSum(nums));
