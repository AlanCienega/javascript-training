function createFromKeys(array) {
  const repeated = array.reduce((prev, curr) => {
    if (prev[curr]) {
      prev[curr]++;
    } else {
      prev[curr] = 1;
    }
    return prev;
  }, {});
  return repeated;
}
const elements = ["a", "a", "c", "z", "z", "z"];

console.log(createFromKeys(elements));
