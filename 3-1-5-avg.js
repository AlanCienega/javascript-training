const notes = [10, 10, 9, 6, 6, 8];

function average(elements) {
  const sum = elements.reduce((prev, curr) => prev + curr);
  return sum / elements.length;
}

console.log(average(notes));
