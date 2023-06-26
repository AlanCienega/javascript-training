import { random_nums_arr } from "../data.js";

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

console.log(repeated(random_nums_arr));
