import { random_nums_arr } from "../data.js";

const sum = random_nums_arr.reduce((acc, curr) => acc + curr);
console.log(sum / random_nums_arr.length);
