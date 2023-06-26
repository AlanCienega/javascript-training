import { random_nums_arr } from "../data.js";

function product(array_nums) {
  return array_nums.reduce((prev, curr) => prev * curr);
}
console.log(product(random_nums_arr));
