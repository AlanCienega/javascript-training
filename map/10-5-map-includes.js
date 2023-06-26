import { super_herores_arr } from "../data.js";

let sufix = function getSufix(array) {
  return array.map((hero) => {
    if (hero.includes("woman")) {
      return "woman";
    } else if (hero.includes("man")) {
      return "man";
    }
  });
};
console.log(sufix(super_herores_arr));
