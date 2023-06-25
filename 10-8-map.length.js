const words = ["ballon", "car", "bike", "bus", "train", "plane"];
let stringLength = function getLength(array) {
  return array.map((element) => element.length);
};
console.log(stringLength(words));
