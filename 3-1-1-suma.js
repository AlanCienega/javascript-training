const nums = [1, 6, 8, 9];

function suma(array_nums) {
  return array_nums.reduce((prev, curr) => prev + curr);
}

console.log(suma(nums));
