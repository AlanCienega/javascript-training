import { fruits } from "../data.js";

let newObjects = function setValues(array) {
  return array.map(({ name, color }) => {
    return { [name]: color };
  });
};
console.log(newObjects(fruits));
