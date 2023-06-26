import { random_nums_arr } from "../data.js";

sum = random_nums_arr.reduce((prev, curr) => prev + curr, 10);
console.log(sum);
