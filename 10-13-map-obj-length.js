const people = [
  {
    name: "Alan",
    lastName: "Cienega",
  },
  {
    name: "Juan",
    lastName: "Cito",
  },
  {
    name: "Pedro",
    lastName: "Picapiedra",
  },
];

let newObjects = function setValues(array) {
  return array.map(({ name, lastName }) => {
    return {
      [name + lastName]: name.length + lastName.length,
    };
  });
};

console.log(newObjects(people));
