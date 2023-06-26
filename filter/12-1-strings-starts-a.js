import { words_arr } from "../data.js";

let starts_with_a = function filterByInitial(array) {
  return array.filter((element) => element[0].toLowerCase() == "a");
};

console.log(starts_with_a(words_arr));
