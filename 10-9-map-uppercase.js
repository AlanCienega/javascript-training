let people = [
  {
    name: "John",
    age: 30,
  },
  {
    name: "Sara",
    age: 20,
  },
  {
    name: "Juan",
    age: 40,
  },
];

let names = function getNames(array) {
  return array.map((element) => {
    return { name: element.name.toUpperCase(), age: element.age };
  });
};
console.log(names(people));
