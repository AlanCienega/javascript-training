import { words_arr } from "../data.js";
let stringLength = function getLength(array) {
  return array.map((element) => element.length);
};
console.log(stringLength(words_arr));
