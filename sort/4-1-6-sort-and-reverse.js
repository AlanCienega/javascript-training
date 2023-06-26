const names = ["Alan", "Jane", "Mary", "Chris", "Manson"];

function sortDesc(array_names) {
  return array_names.sort((a, b) => {
    if (a < b) {
      return 1; // Cambia el orden si a es menor que b
    } else if (a > b) {
      return -1; // Mantén el orden si a es mayor que b
    } else {
      return 0; // No cambies el orden si a es igual a b
    }
  });
}

console.log(sortDesc(names));
