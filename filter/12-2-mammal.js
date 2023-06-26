import { animals } from "../data.js";

let mammals = function getMammals(array) {
  return array.filter((element) => element.type == "mammal");
};

console.log(mammals(animals));
