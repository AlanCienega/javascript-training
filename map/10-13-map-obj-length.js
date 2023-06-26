import { people } from "../data.js";

let newObjects = function setValues(array) {
  return array.map(({ name, lastName }) => {
    return {
      [name + lastName]: name.length + lastName.length,
    };
  });
};

console.log(newObjects(people));
