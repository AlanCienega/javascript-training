import { random_nums_arr } from "./data";

function calcularPromedio(numeros) {
  let sum = 0;
  numeros.forEach((num) => {
    sum = sum + num;
  });

  return sum / numeros.length;
}

console.log(calcularPromedio(random_nums_arr));
