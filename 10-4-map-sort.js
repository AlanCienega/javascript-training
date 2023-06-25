let nums = [2, 9, 5, 1, 4];

let sorted = function (array) {
  return array.sort((a, b) => a - b);
};

sorted(nums);

console.log(sorted(nums));
