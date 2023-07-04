function esPalindromo(palabra) {
  let separada = [];
  let revesa = [];

  for (let i = 0; i < palabra.length; i++) {
    separada.push(palabra[i]);
  }

  for (let j = separada.length - 1; j >= 0; j--) {
    revesa.push(separada[j]);
  }

  for (let k = 0; k < palabra.length; k++) {
    if (palabra[k] != revesa[k]) {
      return false;
    }
  }
  return true;
}

console.log(esPalindromo("alan"));
