function countCharacters(array_strings) {
  return array_strings.reduce((curr, prev) => (curr += prev.length), 0);
}

const strings = ["Hola", "Mundo", "javascript"];
console.log(countCharacters(strings));
