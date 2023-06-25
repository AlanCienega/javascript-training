const nums = [-6, 87, 2, -9, 0, -3];
let absolute = function absoluteValue(array) {
  return array.map((element) => {
    if (element < 0) {
      return element * -1;
    } else {
      return element;
    }
  });
};

console.log(absolute(nums));
