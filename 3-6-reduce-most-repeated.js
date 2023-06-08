function findMostRepeated(array) {
  const repeated = array.reduce((prev, curr) => {
    if (prev[curr]) {
      prev[curr]++;
    } else {
      prev[curr] = 1;
    }
    return prev;
  }, {});
  console.log(repeated);
  const highestCount = Math.max(...Object.values(repeated));
  const mostRepeatedValue = Object.keys(repeated).find((key) => {
    console.log(key);
    return repeated[key] === highestCount;
  });
  return mostRepeatedValue;
}

const elements = ["a", "a", "c", "z", "z", "z"];
console.log("most repeated ", findMostRepeated(elements));
