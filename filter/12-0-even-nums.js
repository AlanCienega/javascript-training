import { random_nums_arr } from "../data.js";

let even = function getEven(array) {
  return array.filter((element) => element % 2 == 0);
};
console.log(even(random_nums_arr));
