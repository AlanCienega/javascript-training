import { int_nums_arr } from "../data.js";

function sortAsc(array) {
  return array.sort((a, b) => a - b);
}

console.log(sortAsc(int_nums_arr));
