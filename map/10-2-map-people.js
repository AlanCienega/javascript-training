import { students } from "../data.js";

let names = function getNames(array) {
  return array.map((element) => element.name);
};
console.log(names(students));
