const randomNumbers = [2, 0, 1, 2];
console.log(randomNumbers);
console.log("a   b");
randomNumbers.sort(compare);
console.log(randomNumbers);
function compare(a, b) {
  let a_value = "";
  if (a < b) {
    a_value = "a < b entonces intercambian posicion";
  } else if (a > b) {
    a_value = "a > b, entonces b se pone en un indice mayor que a";
  } else {
    a_value = "= 0, se quedan igual";
  }
  console.log(`${a} - ${b} = `, a - b, a_value);
  return a - b;
}
