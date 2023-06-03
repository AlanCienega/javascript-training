const nums = [4, 3, 7, 9];

const suma = nums.reduce(reductora);

function reductora(acumulador, valorActual) {
  return acumulador + valorActual;
}
console.log(suma);

/**
 * el metodo reduce acepta una funcion con 2 parametros, acumulador y valor actual
 * lo que hace esta funcion es tomar el valor del acumulador y el valor actual
 * (o sea el que vaya recorriendose en el arreglo), como segundo parametro es un valor inicial
 */
