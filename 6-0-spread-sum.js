const nums = [3, 4, 6];

function sumThre(a, b, c) {
  return a + b + c;
}

console.log(sumThre(...nums));

/**
 * la sintaxis spread retorna el arreglo iterado pero como elementos por separado
 * nums retorna: [3, 4, 6]
 * ...nums retorna: 3 4 6
 */
