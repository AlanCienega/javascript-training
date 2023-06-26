const nums = ["tres", "Uno", "catorce", "diez", "noventa", "ocho"];

function orderByLength(array) {
  return array.sort((a, b) => a.length - b.length);
}

console.log(orderByLength(nums));
