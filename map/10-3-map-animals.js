import { animals_arr } from "../data.js";

let initial = function getInitial(array) {
  return array.map((element) => element[0].toUpperCase());
};

console.log(initial(animals_arr));
