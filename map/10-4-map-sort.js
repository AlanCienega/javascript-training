import { random_nums_arr } from "../data.js";

let sorted = function (array) {
  return array.sort((a, b) => a - b);
};

sorted(random_nums_arr);

console.log(sorted(random_nums_arr));
