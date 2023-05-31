function esPalindromo(cadena) {
  return (
    cadena.toLowerCase() === cadena.split("").reverse().join("").toLowerCase()
  );
}

console.log(esPalindromo("Ana"));
