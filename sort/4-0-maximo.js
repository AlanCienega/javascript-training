import { random_nums_arr } from "../data.js";

function encontrarMaximo(numeros) {
  // se usa la funcion de comparacion para asegurarnos que funcione con numeros
  // ya que compara por defecto como elementos del codigo ascii
  return numeros.sort((a, b) => b - a)[0];
}

console.log(encontrarMaximo(random_nums_arr));
