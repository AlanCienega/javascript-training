import { int_nums_arr } from "../data.js";

function filterOutNegative(array) {
  let positive = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] >= 0) {
      positive.push(array[i]);
    }
  }
  return positive;
}

console.log(filterOutNegative(int_nums_arr));
