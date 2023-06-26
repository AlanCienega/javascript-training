const people = [
  { name: "jhon", age: 20 },
  { name: "peter", age: 30 },
  { name: "susan", age: 22 },
  { name: "anna", age: 5 },
  { name: "emma", age: 24 },
  { name: "bob", age: 32 },
];

// con a - b ordena de forma ascendente
const sorted = people.sort((a, b) => a.age - b.age);

console.log(sorted);
