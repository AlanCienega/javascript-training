import { int_nums_arr } from "../data.js";
let absolute = function absoluteValue(array) {
  return array.map((element) => {
    if (element < 0) {
      return element * -1;
    } else {
      return element;
    }
  });
};

console.log(absolute(int_nums_arr));
