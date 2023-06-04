const nums = [3, 2, 1, 6];

function product(array_nums) {
  return array_nums.reduce((prev, curr) => prev * curr);
}
console.log(product(nums));
