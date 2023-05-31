let randomNumbers = [10, 10, 13];

function calcularPromedio(numeros) {
  let sum = 0;
  numeros.forEach((num) => {
    sum = sum + num;
  });

  return sum / numeros.length;
}

console.log(calcularPromedio(randomNumbers));
