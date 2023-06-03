let randomNumbers = [10, 210, 13, 40, 3, 110];

function encontrarMaximo(numeros) {
  // se usa la funcion de comparacion para asegurarnos que funcione con numeros
  // ya que compara por defecto como elementos del codigo ascii
  return numeros.sort((a, b) => b - a)[0];
}

console.log(encontrarMaximo(randomNumbers));
