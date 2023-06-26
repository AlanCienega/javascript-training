import { random_nums_arr } from "../data.js";

function average(elements) {
  const sum = elements.reduce((prev, curr) => prev + curr);
  return sum / elements.length;
}

console.log(average(random_nums_arr));
