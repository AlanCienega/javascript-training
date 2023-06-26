import { people } from "../data.js";
let names = function getNames(array) {
  return array.map((element) => {
    return { name: element.name.toUpperCase(), age: element.age };
  });
};
console.log(names(people));
