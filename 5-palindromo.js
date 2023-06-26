function esPalindromo(cadena) {
  return (
    cadena.toLowerCase().replaceAll(" ", "") ===
    cadena.split("").reverse().join("").toLowerCase().replaceAll(" ", "")
  );
}

console.log(esPalindromo("Anita lava la tina"));
