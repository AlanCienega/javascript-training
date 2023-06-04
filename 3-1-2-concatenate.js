const names = ["Alan", "Jane", "Mary", "Chris", "Manson"];

function concatenate(array) {
  return array.reduce((prev, curr) => prev + curr);
}

console.log(concatenate(names));
