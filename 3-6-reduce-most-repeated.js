function findMostRepeated(array) {
  const repeated = array.reduce((prev, curr) => {
    if (prev[curr]) {
      prev[curr]++;
    } else {
      prev[curr] = 1;
    }
    return prev;
  }, {});
  return Object.values(repeated).sort((a, b) => b - a)[0];
}

const elements = [1, 2, 3, 2, 3];
console.log(findMostRepeated(elements));
