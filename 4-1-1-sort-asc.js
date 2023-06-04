const nums = [4, 6, 10, 120, 2, 0];

function sortAsc(array_nums) {
  return array_nums.sort((a, b) => a - b);
}

console.log(sortAsc(nums));
