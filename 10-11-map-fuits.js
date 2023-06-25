const fruits = [
  {
    name: "lemon",
    color: "green",
  },
  {
    name: "strawberry",
    color: "red",
  },
  {
    name: "orange",
    color: "orange",
  },
  {
    name: "banana",
    color: "yellow",
  },
];

let newObjects = function setValues(array) {
  return array.map(({ name, color }) => {
    return { [name]: color };
  });
};
console.log(newObjects(fruits));
