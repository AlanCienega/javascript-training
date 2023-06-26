import { random_nums_arr } from "../data.js";
let double = function (array) {
  return array.map((num) => num * 2);
};

console.log(double(random_nums_arr));
