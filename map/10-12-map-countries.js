import { countries } from "../data.js";

let newObjects = function setValues(array) {
  return array.map(({ name, capital }) => {
    return { [capital]: name };
  });
};

console.log(newObjects(countries));
