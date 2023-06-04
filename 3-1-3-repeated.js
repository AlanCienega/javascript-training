const nums = [3, 4, 7, 1, 2, 4, 2, 3, 4];

function repeated(array_nums) {
  return array_nums.reduce((prev, curr) => {
    if (prev[curr]) {
      prev[curr]++;
    } else {
      prev[curr] = 1;
    }
    return prev;
  }, {});
}

console.log(repeated(nums));
