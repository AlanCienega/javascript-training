let randomNumbers = [10, 210, 13, 40, 400, 3];

function encontrarMaximo(numeros) {
  return numeros.sort().reverse()[0];
}

console.log(encontrarMaximo(randomNumbers));
